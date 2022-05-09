package com.example.gw.common.interceptor;

import com.example.gw.common.service.ICommonService;
import org.mybatis.logging.Logger;
import org.mybatis.logging.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Component
public class CommonInterceptor implements HandlerInterceptor {
    @Autowired
    ICommonService commonService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
        String host = request.getHeader("host"); // localhost:8085
        String contextPath = request.getContextPath();
        String baseURL = host + contextPath;
        String requestURL = request.getRequestURI().toString();
        String menuName = requestURL.substring(requestURL.lastIndexOf("/")+1);
               menuName = menuName.replace(".do", "");
               menuName = menuName.replace("/", "");
        String resultPath = baseURL + requestURL;
        List<Object> menuList = null;

        if(requestURL.equals("/")) {
            resultPath = baseURL;
        }

        menuList = commonService.selectList("MenuMapper.selectMenu");
        request.getSession().setAttribute("menuList", menuList);
        request.getSession().setAttribute("menuName", menuName);

        return HandlerInterceptor.super.preHandle(request, response, handler);
    }


    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)  throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
