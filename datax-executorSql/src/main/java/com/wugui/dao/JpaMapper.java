package com.wugui.dao;

import com.wugui.model.JobScriptDataSource;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface JpaMapper {

    @Select("select * from t_datasource where id=#{id}")
    JobScriptDataSource findByDataid(String id);
}
