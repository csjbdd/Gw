/**
 * menu 관련 공통클래스 함수
 */
class CommonMenu {
    constructor () { }

    /**
     * menuPath : '대분류id/소분류id' 의 형식으로 값을 보내면
     * 메뉴경로를 화면에 바인딩 한다.
     * '.block-header' 라는 클래스가 없을경우 바인딩되지 않는다.
     */
    setContentHeader = (menuPath) => {
        let mainName = "";
        let subName = "";
        if (menuPath && menuData) {
            let mainId = menuPath.substring(0, menuPath.indexOf("/"));
            let subId = menuPath.substring(menuPath.indexOf("/") + 1);

            menuData.forEach(function (data, index) {
                if (subName == "" && data.SUB_ID == subId) {
                    subName = data.SUB_NM;
                }
                if (mainName == "" && data.MAIN_ID == mainId) {
                    mainName = data.MAIN_NM;
                }
            });

            // 경로 바인딩 - 나중에 링크도 바꿔야함
            let className = document.getElementsByClassName("block-header");
            if (className.length > 0) {
                let parent = className[0].childNodes[1].childNodes[1].childNodes;
                parent[1].textContent = subName;                                                // 페이지이름
                parent[3].childNodes[1].childNodes[0].childNodes[1].textContent = " 메인페이지"   // 메인페이지
                parent[3].childNodes[3].childNodes[0].childNodes[0].textContent = mainName      // 대분류
                parent[3].childNodes[5].childNodes[0].textContent = subName                     // 소분류
            }
        }
    }
}