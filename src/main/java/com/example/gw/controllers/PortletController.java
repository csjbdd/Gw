package com.example.gw.controllers;

import com.example.gw.services.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class PortletController {

    @Autowired
    private ICommonService commonService;

    @GetMapping("/portletMain")
    public String portletPage() {
        return "portletMain";
    }
}
