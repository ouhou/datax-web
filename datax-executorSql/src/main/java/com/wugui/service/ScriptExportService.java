package com.wugui.service;

import java.util.List;

public interface ScriptExportService {
    //实时运行接口
    List executeScript(String id, String script, int pageCurrent, int pageSize);

    List executeScript(String id, String script);

}
