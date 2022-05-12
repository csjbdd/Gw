package com.example.gw.common.web;

import com.example.gw.common.service.ICommonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@RequestMapping("/session")
public class CommonSessionController {
    @Autowired
    ICommonService commonService;

    @PostMapping(value = "/updateSession.json")
    public void saveSession(HttpServletRequest request) throws Exception {
        List<Object> menuList = null;
        HttpSession session = request.getSession();
        menuList = commonService.selectList("MenuMapper.selectMenuList");
        session.setAttribute("menuList", menuList);
    }

    @PostMapping(value = "/deleteSession.json")
    public void deleteSession(HttpServletRequest request) throws Exception {
        HttpSession session = request.getSession();
        session.removeAttribute("menuList");
    }
}
