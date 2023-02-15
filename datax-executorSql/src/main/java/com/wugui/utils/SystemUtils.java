package com.sql.utils;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;


/*
* 日志路径
* */
public class SystemUtils {
    private static final Logger LOGGER = LoggerFactory.getLogger(SystemUtils.class);

    private static String DATAX_HOME;

    private SystemUtils() {
    }

    /**
     * 获取环境变量中的Datax路径
     *
     * @return
     */
    public static String getDataXHomePath() {
        if (StringUtils.isNotEmpty(DATAX_HOME)) return DATAX_HOME;
        String dataXHome = System.getenv("DATAX_HOME");
        if (StringUtils.isBlank(dataXHome)) {
            //LOGGER.warn("DATAX_HOME 环境变量为NULL");
            return null;
        }
        DATAX_HOME = dataXHome.endsWith(File.separator) ? dataXHome : dataXHome.concat(File.separator);
        //LOGGER.info("DATAX_HOME:{}", DATAX_HOME);
        return DATAX_HOME;
    }
}
