package com.example.gw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class RegisterController {






    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String registerPage() {

        return "register";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String regis00ter(@RequestParam Map<String,Object> list) {
        list.get("id");
        return "register";
    }
}
