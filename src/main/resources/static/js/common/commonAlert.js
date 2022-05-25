/**
 * 공통 alert 클래스
 * 자세한 도움말은 https://sweetalert2.github.io/ 확인부탁
 */
class commonAlert{

    /**
     * 기본 알림창
     * text : 내용
     */
    _alert = (text) => {
        return new Promise(function (resolve, reject) {
            if(text){
                resolve(Swal.fire(text));
            }else{
                reject(false);
            }

        });
    }

    /**
     * 기본 confirm
     * json = { title:              "제목",
     *          showDenyButton:     "아니오 버튼 true/false",
     *          showCancelButton:   "취소버튼 true/false"
     *          confirmButtonText:  "확인버튼이름"
     *          denyButtonText:     "취소버튼이름"
     *        }
     */
    _confirm = (json) => {
        return new Promise(function (resolve, reject) {
            if(json){
                resolve(Swal.fire(json));
            }else{
                reject(false);
            }
        });
    }


    /**
     * 아이콘 알림창
     * json = { title:      "제목",
     *          text:       "내용",
     *          icon:       "success / warning / question / error / info"
     *          footerHref: "링크"
     *          footer:     "내용"
     *        }
     */
    _iconAlert = (json) => {
        return new Promise(function (resolve, reject) {
            if(json) {
                resolve(Swal.fire( json ));
            }else{
                resolve(Swal.fire({
                    icon: json.icon || 'success',
                    title: json.title || 'Good job!',
                    text: json.text || 'You clicked the button!',
                    footer: '<a href="' + json.footerHref || "" + '"' + '>' + json.footer || "Why do I have this issue?" + '</a>'
                }));
            }
        });
    }

    /**
     * 이미지 알림창
     * json = { titme:      "제목"
     *          text:       "내용"
     *          imageUrl:   "경로 및 링크",
     *          imageWidth: "너비 사이즈",
     *          imageHeight:"높이 사이즈",
     *          imageAlt:   alt Id
     */
    _imageAlert = (json) => {
        return new Promise(function (resolve, reject) {
            if(json){
                resolve(Swal.fire({ json }));
            }else{
                resolve(Swal.fire({
                    imageUrl: json.imageUrl || 'https://unsplash.it/400/200',
                    imageHeight: json.imageHeight || 1500,
                    imageAlt: json.imageAlt || 'A tall image'
                }));
            }
        });
    }
}

const CommonAlert = new commonAlert();