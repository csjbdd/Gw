package com.example.gw.common.dto;

import com.example.gw.common.enums.StatusEnum;

import java.util.Map;

// restController 통신을 위한 DTO
public class Massage {
    private StatusEnum status;
    private String message;
    private Map<String, Object> data;
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
