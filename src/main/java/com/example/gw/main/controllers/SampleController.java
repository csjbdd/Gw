package com.example.gw.main.controllers;

import com.example.gw.common.service.CommonServiceImpl;
import com.example.gw.common.service.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/sample")
public class SampleController {
    @Autowired
    private ICommonService commonService;

    @GetMapping("/sample.do")
    public String portletPage(Model model) throws Exception{
        // 샘플 header
        model.addAttribute("headerYn", "Y");    // 샘플 header 적용여부
        model.addAttribute("headerPath", "sample/sample-header"); // 샘플 header의 경로
        model.addAttribute("headerId", "sample-header");          // 샘플 headerId

        // 샘플 main
        model.addAttribute("mainPath", "sample/sample"); // 샘플 main의 경로
        model.addAttribute("mainId", "sample-body");          // 샘플 mainId

        return "CommonTemplate"; // 무조건 CommonTemplate 로 경로지정(공통템플릿임)
    }
}
