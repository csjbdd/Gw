package com.example.gw.main.controllers;

import com.example.gw.common.service.CommonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sun.security.util.Password;

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
    public String login(@RequestParam Map<String,Object> list) throws Exception {

        return "ui/login/sign-in";
    }
}
