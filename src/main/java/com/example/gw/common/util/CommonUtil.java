package com.example.gw.common.util;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

/**
 * 공통 클래스
 *
 * @Author : 송기환
 * @Create : 2022년 04월 24일
 * @version 1.0
 */
public class CommonUtil {

    /**
     * null체크와 문자열형식으로 변환하는 공통 메서드
     *
     * @Author : 송기환
     * @Create : 2022년 04월 24일
     * @version 1.0
     */
    public static String null2Str(Object obj, String str){
        if(str == null || str.toString().trim().length() == 0){
            return str;
        }else{
            return obj.toString();
        }
    }

    /**
     * 현재날짜를 포맷형식에 맞게 변환하는 공통 메서드
     *
     * @param : "yyyy-MM-dd", "yyyy/MM/dd" 등 포맷형식
     * @Author : 송기환
     * @Create : 2022년 04월 24일
     * @version 1.0
     */
    public static String getToday(String format){
        LocalDate now = LocalDate.now(ZoneId.of("Asia/Seoul"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
        String formatDate = now.format(formatter);
        return formatDate;
    }
}
