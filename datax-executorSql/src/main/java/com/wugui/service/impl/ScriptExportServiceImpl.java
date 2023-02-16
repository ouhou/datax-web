package com.wugui.service.impl;

import com.wugui.dao.JpaMapper;
import com.wugui.model.JobScriptDataSource;
import com.wugui.service.ScriptExportService;
import com.wugui.utils.AESUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;

@Service
public class ScriptExportServiceImpl implements ScriptExportService {

    @Resource
    private JpaMapper jpaMapper;

    @Value("${datasource.aes.key}")
    private String dataSourceAESKey;
    @Override
    public Map<String,List> executeScript(String id, String sql, int pageCurrent , int pageSize) {
        Map<String,List> map = new HashMap();

        JobScriptDataSource jobDataSource= jpaMapper.findByDataid(Long.parseLong(id));
        //查找数据库数据源信息
//        List<JobScriptDataSource> byDataList = jpaMapper.findByDataList();
//        for (JobScriptDataSource jobScriptDataSource: byDataList) {
//            System.out.println(jobScriptDataSource);
//        }
        if (jobDataSource!=null) {
            System.out.println(jobDataSource);
            String name = jobDataSource.getDatasource_name();
            String dbUrl = jobDataSource.getJdbc_url();
            String jdbcDriver = jobDataSource.getJdbc_driver_class();
            String username = jobDataSource.getJdbc_username();
            String password = jobDataSource.getJdbc_password();
            Map<String, List> mapList = execSqlDetail(jdbcDriver, dbUrl, AESUtil.decrypt(username, dataSourceAESKey), AESUtil.decrypt(password, dataSourceAESKey), sql);
            if(sql.substring(0,6).equals("select")||sql.substring(0,6).equals("SELECT")){
                if(mapList.containsKey("200")){
                    List excuteList = mapList.get("200");
                    List list1 = (List) excuteList.stream().skip((pageCurrent - 1) * pageSize).limit(pageSize).collect(Collectors.toList());
                    map.put("200", list1);
                    return map;
                }else{
                    return mapList;
                }

            }else{
                return  mapList;
            }
        } else {
            List list = new ArrayList<>();
            list.add("没有此数据源id"+id);
            map.put("500",list);
            return map;
        }
    }



    /*
     * jdbc连接数据源返回list集合
     * */
    public static  Map<String,List>  execSqlDetail(String jdbcDriver, String dbUrl, String user, String pass, String sql) {
        //存储返回结果
        Map<String,List> resultMap = new HashMap();

        List list = new ArrayList();

        Connection conn = null;
        Statement stmt = null;
        try {
            // 注册 JDBC 驱动
            Class.forName(jdbcDriver);
            // 打开链接
            conn = DriverManager.getConnection(dbUrl, user, pass);

            // 执行查询
            stmt = conn.createStatement();
            //如果字符串是查询sql 执行

            if(sql.substring(0,6).equals("select")||sql.substring(0,6).equals("SELECT")){
                    ResultSet rs = stmt.executeQuery(sql);
                    //获取表结构
                    ResultSetMetaData metaData = rs.getMetaData();
                    //获取字段数
                    int columnCount = metaData.getColumnCount();
                    // 展开结果集数据库
                    while(rs.next()){
                        Map map = new HashMap();
                        for(int i=1;i<=columnCount;i++){
                            //获取字段名称 metaData.getColumnName(i)
                            map.put(metaData.getColumnName(i),rs.getObject(i));
                        }
                        list.add(map);
                    }
                    resultMap.put("200",list);
                    // 完成后关闭
                    rs.close();
            }else{
                //还需要添加假如是多条sql,需要按照“；” 拆分执行sql
                String[] sqlArray = sql.split(";");
                int i =0;
                System.out.println(sql.substring(0,6)+"==="+sqlArray.length);
                if(sqlArray.length >1 && !sqlArray[1].equals(" ")){
                    for (String sqlScript:sqlArray) {
                        i = stmt.executeUpdate(sqlScript);
                    }
                }else{
                        i = stmt.executeUpdate(sql);
                }

                if(i>=0){
                        System.out.println("执行成功！");
                        list.add("执行成功");
                }
                resultMap.put("200",list);
            }
            stmt.close();
            conn.close();
        } catch (Exception e) {
            // 处理 Class.forName 错误
            e.printStackTrace();
            list.add(e.getMessage());
            resultMap.put("500",list);
        } finally {
            // 关闭资源
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException se2) {
                se2.printStackTrace();
                list.add(se2.getMessage());
                resultMap.put("500",list);
            }// 什么都不做
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException se) {
                se.printStackTrace();
                log.println(se.getMessage());
                list.add(se.getMessage());
                resultMap.put("500",list);
            }
        }
        return resultMap;
    }

}
