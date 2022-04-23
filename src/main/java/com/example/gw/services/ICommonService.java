
package com.example.gw.services;

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
public interface ICommonService {
    /**
     * DB 테스트
     * 파라미터의 값을 출력해준다.
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    public String test(Map<String, Object> map);

    /**
     * selectOne 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    public Map<String, Object> selectOne(String statement, Map<String, Object> map);

    /**
     * selectList 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    public List<Object> selectList(String statement, Map<String, Object> map);

    /**
     * insert 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    public int insert(String statement, Map<String, Object> map);

    /**
     * update 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    public int update(String statement, Map<String, Object> map);

    /**
     * delete 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    public int delete(String statement, Map<String, Object> map);
}
