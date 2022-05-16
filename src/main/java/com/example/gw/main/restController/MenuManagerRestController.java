package com.example.gw.main.restController;

import com.example.gw.common.enums.StatusEnum;
import com.example.gw.common.service.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.gw.common.dto.Massage;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/manager/*")
public class MenuManagerRestController {
    @Autowired
    ICommonService commonService;

    @PostMapping("/findMenuList")
    public ResponseEntity<Object> pwEmailSend() {
        Massage message = new Massage();
        HttpHeaders headers= new HttpHeaders();
        Map<String, Object> map = new HashMap<>();

        map.put("data", "ㅇㄱㄹㅇ");
        
        message.setStatus(StatusEnum.OK);
        message.setMessage("성공 코드");
        message.setData(map);

        return new ResponseEntity<>(message, headers, HttpStatus.OK);
    }

}
