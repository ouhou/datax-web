package com.wugui.core.config;

import com.wugui.datatx.core.executor.impl.JobSpringExecutor;

import com.wugui.sql.executor.utils.SystemUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataXConfig {
    //LoggerFactory.getLogger可以在IDE控制台打印日志
    private Logger logger = LoggerFactory.getLogger(DataXConfig.class);

    private static final String DEFAULT_LOG_PATH = "log/executor/jobhandler";

    @Value("${datax.job.admin.addresses}")
    private String adminAddresses;

    @Value("${datax.job.executor.appname}")
    private String appName;

    @Value("${datax.job.executor.ip}")
    private String ip;

    @Value("${datax.job.executor.port}")
    private int port;

    @Value("${datax.job.accessToken}")
    private String accessToken;

    @Value("${datax.job.executor.logpath}")
    private String logPath;

    @Value("${datax.job.executor.logretentiondays}")
    private int logRetentionDays;

    @Bean
    public JobSpringExecutor JobExecutor() {
        logger.info(">>>>>>>>>>> datax-web config init.");
        JobSpringExecutor jobSpringExecutor = new JobSpringExecutor();
        jobSpringExecutor.setAdminAddresses(adminAddresses);
        jobSpringExecutor.setAppName(appName);
        jobSpringExecutor.setIp(ip);
        jobSpringExecutor.setPort(port);
        jobSpringExecutor.setAccessToken(accessToken);
        //获取Datax环境变量
        String dataXHomePath = SystemUtils.getDataXHomePath();
        if (StringUtils.isEmpty(logPath)) {
            logPath = dataXHomePath + DEFAULT_LOG_PATH;
        }
        jobSpringExecutor.setLogPath(logPath);
        jobSpringExecutor.setLogRetentionDays(logRetentionDays);

        return jobSpringExecutor;
    }
}
