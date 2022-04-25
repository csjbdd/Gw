package com.example.gw.main.controllers;

import com.example.gw.common.service.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PortletController {

    @Autowired
    private ICommonService commonService;

    @GetMapping("/portletMain")
    public String portletPage() {
        return "portletMain";
    }
}
