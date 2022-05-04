package com.example.gw.common.config;

import com.example.gw.common.interceptor.CommonInterCeptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ViewConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new CommonInterCeptor())
                .addPathPatterns("/**.do"); // 허용할 경로
//                .excludePathPatterns();         // 금지할 경로
    }
}
