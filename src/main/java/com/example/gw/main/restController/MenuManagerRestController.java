package com.example.gw.main.restController;

import com.example.gw.common.dao.ICommonDAO;
import com.example.gw.common.enums.StatusEnum;
import com.example.gw.common.service.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.gw.common.dto.Massage;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/manager/*")
public class MenuManagerRestController {
    @Autowired
    private ICommonService commonService;

    @PostMapping("/findMenuList")
    public ResponseEntity<Object> pwEmailSend() throws Exception {
        Massage message = new Massage();
        HttpHeaders headers= new HttpHeaders();
        Map<String, Object> map = new HashMap<>();
        List<Object> menuList = null;

        // 메뉴리스트 가져오기
        menuList = commonService.selectList("MenuMapper.selectManagerMenuList");
        int menuSize = menuList.size();

        map.put("menuList", menuList);
        message.setStatus(StatusEnum.OK);
        message.setMessage("성공 코드");
        message.setData(map);

        return new ResponseEntity<>(message, headers, HttpStatus.OK);
    }

}
