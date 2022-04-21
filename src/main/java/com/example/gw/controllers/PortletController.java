package com.example.gw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortletController {

    @GetMapping("/portletMain")
    public String portletPage() {

        return "portletMain";
    }
}
