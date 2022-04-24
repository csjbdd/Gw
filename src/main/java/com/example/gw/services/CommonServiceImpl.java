package com.example.gw.services;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Sqlsession 처리를 위한 서비스 클래스
 *
 * @Author : 송기환
 * @Create : 2022년 04월 23일
 * @version 1.0
 */
@Service
public class CommonServiceImpl implements ICommonService {

    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;

    /**
     * DB 테스트
     * 파라미터의 값을 출력해준다.
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    @Override
    public String test(Map<String, Object> parameter) {
        String str = sqlSessionTemplate.selectOne("com.example.gw.mappers.UserMapper.test", parameter);
        System.out.print(str);
        return str;
    }

    /**
     * selectOne 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    @Override
    public Map<String, Object> selectOne(String statement, Map<String, Object> parameter) {
        return sqlSessionTemplate.selectOne(statement, parameter);
    }

    /**
     * selectList 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    @Override
    public List<Object> selectList(String statement, Map<String, Object> parameter) {
        return sqlSessionTemplate.selectList(statement, parameter);
    }

    /**
     * insert 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    @Override
    public int insert(String statement, Map<String, Object> parameter) {
        return sqlSessionTemplate.insert(statement, parameter);
    }

    /**
     * update 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    @Override
    public int update(String statement, Map<String, Object> parameter) {
        return sqlSessionTemplate.update(statement, parameter);
    }

    /**
     * delete 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    @Override
    public int delete(String statement, Map<String, Object> parameter) {
        return sqlSessionTemplate.delete(statement, parameter);
    }

}
