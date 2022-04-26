package com.example.gw.main.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SampleController {

    @GetMapping("/sample")
    public String portletPage(Model model) {
        // 샘플 header
        model.addAttribute("headerYn", "Y");    // 샘플 header 적용여부
        model.addAttribute("headerPath", "sample/sample-header"); // 샘플 header의 경로
        model.addAttribute("headerId", "sample-header");          // 샘플 headerId

        // 샘플 main
        model.addAttribute("mainPath", "sample/sample"); // 샘플 main의 경로
        model.addAttribute("mainId", "sample");          // 샘플 mainId

        return "CommonTemplate";
    }
}
