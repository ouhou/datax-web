package com.sql.service.impl;


import com.sql.dao.JpaMapper;
import com.sql.service.ScriptExportService;
import com.wugui.datax.admin.util.AESUtil;
import com.wugui.model.JobScriptDataSource;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ScriptExportServiceImpl implements ScriptExportService {

    @Resource
    private JpaMapper jpaMapper;
    @Override
    public List executeScript(String id, String sql, int pageCurrent , int pageSize) {
        JobScriptDataSource jobDataSource= jpaMapper.findByDataid(Long.parseLong(id));
        if (jobDataSource!=null) {
            System.out.println(jobDataSource);
            String name = jobDataSource.getDatasource_name();
            String dbUrl = jobDataSource.getJdbc_url();
            String jdbcDriver = jobDataSource.getJdbc_driver_class();
            String username = jobDataSource.getJdbc_username();
            String password = jobDataSource.getJdbc_password();
            List list = execSqlDetail(jdbcDriver, dbUrl, AESUtil.decrypt(username) ,AESUtil.decrypt(password), sql);
            List list1 = (List) list.stream().skip((pageCurrent - 1) * pageSize).limit(pageSize).collect(Collectors.toList());
            return list1;
        } else {
            List list = new ArrayList<>();
            list.add("没有此数据源id"+id);
            return list;
        }
    }

    @Override
    public List executeScript(String id, String script) {
        JobScriptDataSource jobDataSource= jpaMapper.findByDataid(Long.parseLong(id));
        if (jobDataSource!=null) {
            System.out.println(jobDataSource);
            String name = jobDataSource.getDatasource_name();
            String dbUrl = jobDataSource.getJdbc_url();
            String jdbcDriver = jobDataSource.getJdbc_driver_class();
            String username = jobDataSource.getJdbc_username();

            String password = jobDataSource.getJdbc_password();
            List list = execSqlDetail(jdbcDriver, dbUrl,AESUtil.decrypt(username),AESUtil.decrypt(password), script);
            return list;
        } else {
            List list = new ArrayList<>();
            list.add("没有此数据源id"+id);
            return list;
        }
    }

    /*
     * jdbc连接数据源返回list集合
     * */
    public static List execSqlDetail(String jdbcDriver, String dbUrl, String user, String pass, String sql) {

        Connection conn = null;
        Statement stmt = null;
        try {
            // 注册 JDBC 驱动
            Class.forName(jdbcDriver);
            // 打开链接
            conn = DriverManager.getConnection(dbUrl, user, pass);
            //存储返回结果
            List list = new ArrayList();
            // 执行查询
            stmt = conn.createStatement();
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
            // 完成后关闭
            rs.close();
            stmt.close();
            conn.close();
            return list;
        } catch (Exception e) {
            // 处理 Class.forName 错误
            e.printStackTrace();
        } finally {
            // 关闭资源
            try {
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException se2) {
                se2.printStackTrace();
            }// 什么都不做
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
        return null;
    }

}
