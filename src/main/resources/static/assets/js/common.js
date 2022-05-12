/* 공통 JS */
document.addEventListener("DOMContentLoaded", function(){

    let _requestPutData = function(uri,jsonString){
        //XMLHttpRequest 객체 생성
        let xhr = new XMLHttpRequest();

        //요청을 보낼 방식, 주소, 비동기여부 설정 (true == 비동기)
        xhr.open('POST', uri , true);

        //HTTP 요청 헤더 설정
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

        //요청 전송
        xhr.send(jsonString); // <- JSON.stringify(data)를 해서 Body로 보내면됨

        //비동기 통신일때
        xhr.onload = () => {
            if (xhr.response >= 1) {
               alert(xhr.response);
            } else {
                alert("통신 실패");
            }
        }
    }

    let _requestSelectData = function(uri){
        //XMLHttpRequest 객체 생성
        let xhr = new XMLHttpRequest();

        //요청을 보낼 방식, 주소, 비동기여부 설정 (true == 비동기)
        xhr.open('POST', uri , true);

        //HTTP 요청 헤더 설정
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

        //요청 전송
        xhr.send(); // <- JSON.stringify(data)를 해서 Body로 보내면됨

        //비동기 통신일때
        xhr.onload = () => {
            if (xhr.response >= 1) {
                alert(xhr.response);
            } else {
                alert("통신 실패");
            }
        }
    }

});



