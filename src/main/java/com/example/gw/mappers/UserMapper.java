package com.example.gw.mappers;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    void registerUser();

}
