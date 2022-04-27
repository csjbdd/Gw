package com.example.gw.main.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortletController {

    @GetMapping("/portletMain")
    public String portletPage(Model model) {
        model.addAttribute("headerYn", "Y");
        model.addAttribute("headerPath", "ui/pltl/portletHeader");
        model.addAttribute("headerId", "portletHeader");

        model.addAttribute("mainPath", "ui/pltl/portletMain");
        model.addAttribute("mainId", "portletMain");

        return "CommonTemplate";
    }
}
