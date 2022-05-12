package com.example.gw.common.web;

import com.example.gw.common.service.ICommonService;
import com.example.gw.common.util.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class CommonPageController {
    @Autowired
    private ICommonService commonService;

    @GetMapping("/*/**.do")
    public String commonPage(HttpServletRequest request, Model model) throws Exception{
        String subName = "";
        String mainName = "";
        subName = CommonUtil.null2Str(request.getSession().getAttribute("subName").toString(), "");
        mainName = CommonUtil.null2Str(request.getSession().getAttribute("mainName").toString(), "");

        if(!"".equals(subName)) {
            // 샘플 header
            model.addAttribute("headerYn", "Y");
            model.addAttribute("headerPath", mainName + "/" + subName + "-header"); // header의 경로
            model.addAttribute("headerId", subName + "-header");          // headerId

            // 샘플 main
            model.addAttribute("mainYn", "Y");
            model.addAttribute("mainPath", mainName + "/" + subName); // main의 경로
            model.addAttribute("mainId", subName + "-body");          // mainId
        }else{
            model.addAttribute("headerYn", "N");
            model.addAttribute("mainYn", "N");
        }

        return "CommonTemplate"; // 무조건 CommonTemplate 로 경로지정(공통템플릿임)
    }
}
