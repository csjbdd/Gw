/**
 * 공통 alert 클래스
 */
class commonAlert{

    /**
     * 기본 알림창
     * text : 내용
     */
    _alert = (text) => {
        swal(text || "Good job!");
    }

    /**
     * 아이콘 알림창
     * json = {title:"제목", text:"내용", icon:"success/warning"}
     */
    _iconAlert = (json) => {
        swal({
            title: json.title || "주의",
            text: json.text || "서버와의 연결이 끊겼습니다.",
            icon: json.icon || "warning",
            dangerMode: json.icon=="warning" ? true : false
        })
    }
}