package com.sql.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@Table(name="job_jdbc_datasource")
@ApiModel
@Component
public class JobScriptDataSource {

    /**
     * 自增主键
     */
    @Id
    @ApiModelProperty(value = "自增主键")
    private Long id;

    /**
     * 数据源名称
     */
    @ApiModelProperty(value = "数据源名称")
    private String datasource_name;

    /**
     * 数据源
     */
    @ApiModelProperty(value = "数据源")
    private String datasource;

    /**
     * 数据源分组
     */
    @ApiModelProperty(value = "数据源分组")
    private String datasource_group;

    /**
     * 用户名
     */
    @ApiModelProperty(value = "用户名")
    private String jdbc_username;

    /**
     * 密码
     */
    @ApiModelProperty(value = "密码")
    private String jdbc_password;

    /**
     * jdbc url
     */
    @ApiModelProperty(value = "jdbc url")
    private String jdbc_url;

    /**
     * jdbc驱动类
     */
    @ApiModelProperty(value = "jdbc驱动类")
    private String jdbc_driver_class;

    /**
     * 状态：0删除 1启用 2禁用
     */
    @ApiModelProperty(value = "状态：0删除 1启用 2禁用")
    private Integer status;

    /**
     * 创建人
     */
    @ApiModelProperty(value = "创建人", hidden = true)
    private String create_by;

    /**
     * 创建时间
     */
    @ApiModelProperty(value = "创建时间", hidden = true)
    private Date create_date;

    /**
     * 更新人
     */
    @ApiModelProperty(value = "更新人", hidden = true)
    private String update_by;

    /**
     * 更新时间
     */
    @ApiModelProperty(value = "更新时间", hidden = true)
    private Date update_date;

    /**
     * 备注
     */
    @ApiModelProperty(value = "备注", hidden = true)
    private String comments;

    /**
     * zookeeper地址
     */
    @ApiModelProperty(value = "zookeeper地址", hidden = true)
    private String zk_adress;

    /**
     * 数据库名
     */
    @ApiModelProperty(value = "数据库名", hidden = true)
    private String database_name;

}
