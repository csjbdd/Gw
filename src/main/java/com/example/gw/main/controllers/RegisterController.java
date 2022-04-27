package com.example.gw.main.controllers;

import com.example.gw.common.service.CommonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
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


    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String registerPage() {

        return "chat";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(@RequestParam Map<String,Object> list) throws Exception {
        String rawPassword = (String) list.get("password");
        String encodePassword = passwordEncoder.encode(rawPassword);
        list.put("password",encodePassword);
        commonService.insert("RegisterMapper.Register",list);
        return "chat";
    }
}
