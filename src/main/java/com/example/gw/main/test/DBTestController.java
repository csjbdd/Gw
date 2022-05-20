package com.example.gw.main.test;

import com.example.gw.common.service.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.Map;

/**
 * DB 테스트를 위한 컨트롤러
 *
 * @Author : ihatelua
 * @Create : 2022년 04월 23일
 * @version 1.0
 */
@Controller
public class DBTestController {

    @Autowired
    private ICommonService commonService;


    /**
     * CommonService 테스트
     *
     * @Author : ihatelua
     * @Create : 2022년 04월 23일
     */
    @GetMapping("/DBTest1")
    public String DBTest() throws Exception {
        Map<String, Object> map = new HashMap<>();

        // db 테스트할 문자열을 입력
        map.put("a", "1234");

        // commonService 테스트 시작
        // commonService에서 sqlsession 실행후 파라미터값을 출력해준다.
        commonService.test(map);
        return "login";
    }
}
