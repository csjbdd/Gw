package com.example.gw.common.dto;

import com.example.gw.common.enums.StatusEnum;

import java.util.Map;

// restController 통신을 위한 DTO
public class Massage {
    private StatusEnum status;          // 상태코드 : '200', 'OK'
    private String message;             // 성공여부 메세지
    private Map<String, Object> data;   // 데이터
    private long timeStamp;


    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(long timeStamp) {
        this.timeStamp = timeStamp;
    }

    public Map<String, Object> getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }
}
