package com.wugui.model;

import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name="t_datasource")
@Component
public class JobScriptDataSource {
    @Id
    private String id;

    private String name;

    private String jdbcdriver;

    private String dburl;

    private String username;

    private String password;
}
