package com.example.gw.controllers;

import com.example.gw.services.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * DB 테스트를 위한 컨트롤러
 *
 * @Author : 송기환
 * @Create : 2022년 04월 23일
 * @version 1.0
 */
@RestController
public class DBTestController {

    @Autowired
    private ICommonService commonService;


    /**
     * CommonService 테스트
     *
     * @Author : 송기환
     * @Create : 2022년 04월 23일
     * @version 1.0
     */
    @GetMapping("/DBTest1")
    public String DBTest() {
        Map<String, Object> map = new HashMap<>();

        // db 테스트할 문자열을 입력
        map.put("a", "1234");

        // commonService 테스트 시작
        // commonService에서 sqlsession 실행후 파라미터값을 출력해준다.
        commonService.test(map);
        return "portletMain";
    }
}
