package com.example.gw.main.controllers;

import com.example.gw.common.service.CommonServiceImpl;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import sun.security.util.Password;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@Controller
public class LoginController {

    CommonServiceImpl commonService;
    PasswordEncoder passwordEncoder;

    @Autowired
    public LoginController(CommonServiceImpl commonService, PasswordEncoder passwordEncoder) {
        this.commonService = commonService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/")
    public String loginPage() {
        return "ui/login/sign-in";
    }

    @PostMapping(value = "/")
    public String login(@RequestParam Map<String,Object> list, HttpSession session) throws Exception {
        Map<String,Object> result = commonService.selectOne("LoginMapper.Login",list);
        String inDBPwd = (String) result.get("password");
        String inputPwd = (String) list.get("password");
        System.out.println(inDBPwd);
        System.out.println(inputPwd);
        boolean checkResult = passwordEncoder.matches(inputPwd, inDBPwd);
        if(checkResult) {

            return "ui/sample/sample";
        }
        else {
            return "ui/login/sign-in";
        }

    }

}
