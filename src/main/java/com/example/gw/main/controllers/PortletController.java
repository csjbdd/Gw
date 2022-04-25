package com.example.gw.main.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortletController {

    @GetMapping("/portletMain")
    public String portletPage() {
        return "portletMain";
    }
}
