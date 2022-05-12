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
public class SampleController {
    @Autowired
    private ICommonService commonService;

  /*
  * ajax만 선언하면됨
  * */
}
