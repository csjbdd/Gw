const _ajax = (method,url,async,obj) => {
    let data = JSON.stringify(obj);
    let xhr = new XMLHttpRequest();
    let res;

    xhr.open(method,url,async);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(data);

    xhr.onload = () => {
        //통신성공
        if(xhr.status == 200) {
           res = JSON.parse(xhr.response);
        } else {
            //통신실패
            return alert("서버와 통신에 실패 하였습니다.");
        }
    }
    return res;
}

