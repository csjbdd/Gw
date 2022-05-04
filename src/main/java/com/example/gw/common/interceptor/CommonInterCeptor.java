package com.example.gw.common.interceptor;

import com.example.gw.common.service.CommonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Component
public class CommonInterCeptor implements HandlerInterceptor {
    private CommonServiceImpl commonService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
        List<Object> menuList = null;

        // 샘플 header
        request.getSession().setAttribute("headerYn", "Y");    // 샘플 header 적용여부
        request.getSession().setAttribute("headerPath", "sample/sample-header"); // 샘플 header의 경로
        request.getSession().setAttribute("headerId", "sample-header");          // 샘플 headerId

        // 샘플 main
        request.getSession().setAttribute("mainPath", "sample/sample"); // 샘플 main의 경로
        request.getSession().setAttribute("mainId", "sample");          // 샘플 mainId

//        menuList = commonService.selectList("MenuMapper.selectMenu");
//        request.getSession().setAttribute("menuList", menuList);


        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
