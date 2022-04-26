package com.example.gw.common.web;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

// 개발끝나고 주석풀어야함
//@Controller
//public class CustomErrorController implements ErrorController {
//    @RequestMapping(value = "/error")
//    public String customErrorPages(HttpServletRequest request){
//        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
//
//        if(status != null){
//            int statusCode = Integer.valueOf(status.toString());    // 에러코드 가져오기
//            if(statusCode == HttpStatus.NOT_FOUND.value()){
//                return "ui/error/404";
//            }else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()){
//                return "ui/error/500";
//            }else{
//                return "ui/error/404";
//            }
//        }
//        return "ui/error/404";
//    }
//}
