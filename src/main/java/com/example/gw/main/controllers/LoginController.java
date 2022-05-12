package com.example.gw.main.controllers;

import com.example.gw.common.service.CommonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
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
        Map<String,Object> map = commonService.selectOne("LoginMapper.Login",list);

        return "ui/login/sign-in";
    }

    @RequestMapping("/recoverypw")
    public ModelAndView findPw(@RequestParam Map<String,Object> list) {
        ModelAndView mv = new ModelAndView();

        mv.setViewName("ui/login/sign-in");
        return mv;
    }

    @RequestMapping("/pwEmailSend")
    @ResponseBody
    public ResponseEntity<Object> pwEmailSend(@RequestParam Map<String, Object> list) {
        return new ResponseEntity<>("서비스지정.메소드 지정", HttpStatus.OK);
    }





}
