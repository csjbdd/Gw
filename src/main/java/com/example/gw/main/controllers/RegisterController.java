package com.example.gw.main.controllers;

import com.example.gw.common.service.CommonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class RegisterController {


    CommonServiceImpl commonService;
    PasswordEncoder passwordEncoder;


    @Autowired
    public RegisterController(CommonServiceImpl commonService, PasswordEncoder passwordEncoder) {
        this.commonService = commonService;
        this.passwordEncoder = passwordEncoder;
    }


    @GetMapping(value = "/register")
    public String registerPage() {
        return "ui/register/sign-up";
    }

    @PostMapping(value = "/register")
    public String register(@RequestParam Map<String,Object> list) throws Exception {
        String rawPassword = (String) list.get("password");
        String encodePassword = passwordEncoder.encode(rawPassword);
        list.put("password",encodePassword);
        commonService.insert("RegisterMapper.Register",list);
        return "ui/register/sign-up";
    }


    @PostMapping(value="/idcheck")
    public @ResponseBody Map<String, Object> idCheck(@RequestBody Map<String,Object> list) throws Exception {
        Map<String,Object> map = commonService.selectOne("RegisterMapper.IdCheck",list);
        return map;
    }
    @PostMapping(value="/emailcheck")
    public @ResponseBody Map<String, Object> emailCheck(@RequestBody Map<String,Object> list) throws Exception {
        Map<String,Object> map = commonService.selectOne("RegisterMapper.EmailCheck",list);
        return map;
    }


}
