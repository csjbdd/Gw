/* 공통 JS */
class CommonAJAX {
    constructor () { }

    _requestPutData = (uri,jsonString) => {
        //XMLHttpRequest 객체 생성
        let xhr = new XMLHttpRequest();

        //요청을 보낼 방식, 주소, 비동기여부 설정 (true == 비동기)
        xhr.open('POST', uri , true);

        //HTTP 요청 헤더 설정
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

        //요청 전송
        xhr.send(jsonString); // <- JSON.stringify(data)를 해서 Body로 보내면됨

        return new Promise(function (resolve, reject) {
            xhr.onload = () => {
                if (xhr.response >= 1) {
                    resolve(xhr.response);
                } else {
                    reject(Error("통신 실패"));
                }
            }
        });
    }

    _requestSelectData = (uri) => {
        //XMLHttpRequest 객체 생성
        let xhr = new XMLHttpRequest();

        //요청을 보낼 방식, 주소, 비동기여부 설정 (true == 비동기)
        xhr.open('POST', uri , true);

        //HTTP 요청 헤더 설정
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

        //요청 전송
        xhr.send(); // <- JSON.stringify(data)를 해서 Body로 보내면됨

        return new Promise(function (resolve, reject) {
            xhr.onload = () => {
                if (xhr.response >= 1) {
                    resolve(xhr.response);
                } else {
                    reject(Error("통신 실패"));
                }
            }
        });
    }
}



