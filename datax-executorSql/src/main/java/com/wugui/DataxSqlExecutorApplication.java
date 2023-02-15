package com.sql;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value = "com.sql")
public class DataxSqlExecutorApplication {
    public static void main(String[] args) {
        SpringApplication.run(DataxSqlExecutorApplication.class, args);


    }
}