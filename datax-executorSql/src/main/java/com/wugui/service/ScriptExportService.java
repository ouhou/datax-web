package com.wugui.service;

import java.util.List;
import java.util.Map;

public interface ScriptExportService {
    //实时运行接口
    Map<String,List> executeScript(String id, String script, int pageCurrent, int pageSize);


    //实现插入数据数目log
//    List insertBatchExecuteLog(String sqlServer_id, String data_warehouse_id,String sqlServer_script,String data_warehouse_script,String datax_web);


}
