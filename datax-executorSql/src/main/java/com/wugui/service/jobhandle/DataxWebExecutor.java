package com.wugui.service.jobhandle;

import cn.hutool.json.JSONObject;

import com.wugui.datatx.core.biz.model.ReturnT;
import com.wugui.datatx.core.biz.model.TriggerParam;
import com.wugui.datatx.core.glue.GlueTypeEnum;
import com.wugui.datatx.core.handler.IJobHandler;
import com.wugui.datatx.core.handler.annotation.JobHandler;
import com.wugui.service.ScriptExportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;



/*
* 注册到执行器工厂：添加“@JobHandler(value="自定义jobhandler名称")”注解，注解value值对应的是调度中心新建任务的JobHandler属性的值。
* */
@JobHandler(value = "dataWebExecutor")
@Component
public class DataxWebExecutor extends IJobHandler {

    @Autowired
    private ScriptExportService scriptExportService;

    private GlueTypeEnum glueType;

    @Override
    public ReturnT<String> execute(TriggerParam tgParam) throws Exception {

        String jobJson = tgParam.getJobJson();
        //转化为json
        JSONObject jsonObject = new JSONObject(jobJson);
        String id =jsonObject.getStr("id");
        String sql=jsonObject.getStr("script");
        List list = new ArrayList<>();
        if(jsonObject.getStr("pageCurrent")!=null&&jsonObject.getStr("pageSize")!=null){
            int pageCurrent= Integer.parseInt(jsonObject.getStr("pageCurrent"));
            int pageSize =   Integer.parseInt(jsonObject.getStr("pageSize"));
            list = scriptExportService.executeScript(id, sql, pageCurrent, pageSize);
        }else{
            list = scriptExportService.executeScript(id, sql);
        }
        if (list.size() > 0) {
            return IJobHandler.SUCCESS;
        } else {
            return new ReturnT<>(IJobHandler.FAIL.getCode(), "没有查询到对应的数据源id:"+id);
        }
    }



}
