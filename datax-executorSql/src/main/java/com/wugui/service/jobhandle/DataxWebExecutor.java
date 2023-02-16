package com.wugui.service.jobhandle;

import cn.hutool.json.JSONObject;
import com.alibaba.fastjson.JSON;
import com.wugui.core.config.DataXConfig;
import com.wugui.datatx.core.biz.model.ReturnT;
import com.wugui.datatx.core.biz.model.TriggerParam;
import com.wugui.datatx.core.glue.GlueTypeEnum;
import com.wugui.datatx.core.handler.IJobHandler;
import com.wugui.datatx.core.handler.annotation.JobHandler;
import com.wugui.datatx.core.log.JobLogger;
import com.wugui.service.ScriptExportService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;


/*
* 注册到执行器工厂：添加“@JobHandler(value="自定义jobhandler名称")”注解，注解value值对应的是调度中心新建任务的JobHandler属性的值。
* */
@JobHandler(value = "dataWebExecutor")
@Component
public class DataxWebExecutor extends IJobHandler {

    @Autowired
    private ScriptExportService scriptExportService;

    private GlueTypeEnum glueType;

    //LoggerFactory.getLogger可以在IDE控制台打印日志
    private Logger logger = LoggerFactory.getLogger(DataXConfig.class);

    @Override
    public ReturnT<String> execute(TriggerParam tgParam) throws Exception {



        //返回结果
        ReturnT<String> returnT = new ReturnT<>();
        //接收
        String jobJson = tgParam.getJobJson();
        //转化为json
        JSONObject jsonObject = new JSONObject(jobJson);
        String id =jsonObject.getStr("dataSource_id");
        String sql=jsonObject.getStr("script");

        System.out.println("数据源id:"+id);
        //执行 sql
        if((id!=null && sql!=null) || (id!="" && sql!="")){
            Map<String,List> map = new HashMap();
            if(jsonObject.getStr("pageCurrent")==null&&jsonObject.getStr("pageSize")==null){
                map = scriptExportService.executeScript(id, sql, 1, 10);
            }else{
                int pageCurrent= Integer.parseInt(jsonObject.getStr("pageCurrent"));
                int pageSize =   Integer.parseInt(jsonObject.getStr("pageSize"));
                map = scriptExportService.executeScript(id, sql, pageCurrent, pageSize);
            }
            //通过状态返回数据
                if (map.containsKey("200")) {
                    //
                    returnT = new ReturnT<>(200, map.get("200").toString());
                    logger.info(">>>>>>>>>>> 执行结果"+returnT);
                    JobLogger.log("<br>----- datax-web job success -----<br>-----返回数据:"+returnT);
                    return  IJobHandler.SUCCESS;
                } else {
                    returnT = new ReturnT<>(IJobHandler.FAIL.getCode(),  map.get("500").toString());
                    JobLogger.log("<br>----- datax-web job fail -----<br>----- 失败原因"+returnT);

                }
            return returnT;
        }else{
            return new ReturnT<>(IJobHandler.FAIL.getCode(), "数据源或者脚本不能为null");
        }

    }



}
