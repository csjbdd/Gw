/******************************************************************************
 * 페이지 로드후
 ******************************************************************************/
window.onload = () =>{
    const createMenu = new CreateMenu();
    createMenu.initPage();
}

/**
 * 관리자페이지 - 메뉴관리
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */
class CreateMenu{
    constructor () {
        // 등록할 메뉴리스트 노드 선언
        this.reflectMenuNode = document.getElementById('reflectMenu');
        this.reflectTextareaNode = document.getElementById("reflectTextarea");

        // 미사용 메뉴리스트 노드 선언
        this.notUsedMenuNode = document.getElementById('notUsedMenu');
        this.notUsedTextareaNode = document.getElementById("notUsedTextarea");

        // 삭제할 메뉴리스트 노드 선언
        this.deleteMenuNode = document.getElementById('deleteMenu');
        this.deleteTextareaNode = document.getElementById("deleteTextarea");

        // 메뉴폼 메뉴선택 노드 선언
        this.selectMenuListNode = document.getElementById("selectMenuList");

        // 아이콘 선택폼 노드 선언
        this.selectIconNode = document.getElementById('selectIconList');

        // 메뉴입력폼 노드 선언
        this.mainNmFormNode = document.getElementById('mainNmForm');
        this.mainIdFormNode = document.getElementById('mainIdForm');
        this.subNmFormNode = document.getElementById('subNmForm');
        this.subIdFormNode = document.getElementById('subIdForm');

        // 데이터리스트
        this.menuList = [];         // 메뉴 전체 리스트
        this.currentMenu = [];      // 현재 활성화된 리스트
        this.disabledMenu = [];     // 현재 비활성화된 리스트
        this.selectMenuForm = [];   // 메뉴 셀렉트박스 리스트

        // CUD 저장 리스트
        this.saveList = [{
            CNT: ''
            , ENABLED: ''
            , ICON: ''
            , MAIN_ID: ''
            , MAIN_NM: ''
            , MAIN_SEQ: ''
            , SUB_ENABLED: ''
            , SUB_ID: ''
            , SUB_NM: ''
            , SUB_SEQ: ''
            , rowStatus: ''
        }];

        /**
         * Ajax 요청 URL 상수
         */
        this.URL = {
            FIND_MENU_LIST: '/manager/findMenuList'
            , INSERT_MENU: '/manager/insertMenuInfo.json'
            , UPDATE_MENU: '/manager/updateMenuInfo.json'
            , DELETE_MENU: '/manager/deleteMenuInfo.json'
        };
    }

    /**
     * 페이지 초기화
     * 페이지가 로드가 될때 모듈을 세팅한다.
     *
     * @Author : ihatelua
     * @Create : 2022년 05월 20일
     * @version 1.0
     */
    initPage = () => {
        CommonMenu.setContentHeader("manager/createMenu");      // 메뉴 경로 세팅
        CommonModule.nestable('.dd', {"maxDepth":2});    // 메뉴포틀릿 세팅

        this.menuList = [];
        this.currentMenu = [];
        this.disabledMenu = [];
        this.selectMenuForm = [];

        this.setEvent();
    }


    /**
     * 이벤트 선언
     * 컴포넌트의 이벤트를 선언한다.
     *
     * @Author : ihatelua
     * @Create : 2022년 05월 20일
     * @version 1.0
     */
    setEvent = () => {
        let reflectMenuList = [];
        let notUsedMenuList = [];

        // 반영될 메뉴리스트 이벤트
        this.reflectMenuNode.children[0].addEventListener('mouseup', (event) => {
            reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
            this.reflectTextareaNode.innerText = window.JSON.stringify(reflectMenuList);
        });

        // 미사용 메뉴리스트 이벤트
        this.notUsedMenuNode.children[0].addEventListener('mouseup', (event) => {
            notUsedMenuList = CommonModule.nestable('#notUsedMenu', 'serialize');
            this.notUsedTextareaNode.innerText = window.JSON.stringify(notUsedMenuList);
        });

        // 메뉴폼 셀렉트박스 이벤트
        this.selectMenuListNode.addEventListener("change", (event) => {
            // 입력폼 초기화
            this.mainNmFormNode.value = "";
            this.mainIdFormNode.value = "";
            this.subNmFormNode.value = "";
            this.subIdFormNode.value = "";

            // 아이콘 초기화
            this.iconChangeActive();

            let index = this.selectMenuListNode.selectedIndex+1;
            let selectedNode = this.selectMenuListNode.childNodes[index];

            let matchRow = CommonUtil.getMatchedJSON(this.saveList, "SUB_ID", selectedNode.id);
            matchRow = matchRow.length != 0 ? matchRow : CommonUtil.getMatchedJSON(this.saveList, "MAIN_ID", selectedNode.id);

            if(matchRow.length > 0){
                // 신규 메뉴라면
                if(matchRow[0].rowStatus == "C"){
                    this.mainNmFormNode.disabled = false;
                    this.mainIdFormNode.disabled = false;
                    this.subNmFormNode.disabled = false;
                    this.subIdFormNode.disabled = false;
                }else{
                    this.mainNmFormNode.disabled = true;
                    this.mainIdFormNode.disabled = true;
                    this.subNmFormNode.disabled = false;
                    this.subIdFormNode.disabled = false;
                }
                // 바인딩
                this.mainNmFormNode.value = matchRow[0].MAIN_NM;
                this.mainIdFormNode.value = matchRow[0].MAIN_ID;
                this.subNmFormNode.value = matchRow[0].SUB_NM;
                this.subIdFormNode.value = matchRow[0].SUB_ID;
                this.mainNmFormNode.setAttribute("orginId", matchRow[0].MAIN_NM);
                this.mainIdFormNode.setAttribute("orginId", matchRow[0].MAIN_ID);
                this.subNmFormNode.setAttribute("orginId", matchRow[0].SUB_NM);
                this.subIdFormNode.setAttribute("orginId", matchRow[0].SUB_ID);

                this.selectIcon(matchRow[0].ICON)
            }
        });

        // 아이콘 선택폼 이벤트
        this.selectIconNode.addEventListener('click', (event) => {

        });

        // 입력폼 이벤트
        this.mainNmFormNode.addEventListener("change", (event) => {      // 대분류이름 이벤트
debugger;

        });
        this.mainIdFormNode.addEventListener("change", (event) => {      // 대분류ID 이벤트

        });
        this.subNmFormNode.addEventListener("change", (event) => {       // 소분류이름 이벤트

        });
        this.subIdFormNode.addEventListener("change", (event) => {       // 소분류ID 이벤트
            let originId =  this.subIdFormNode.getAttribute("orginId");
            let matchRow = CommonUtil.getMatchedJSON(this.saveList, "SUB_ID", originId);

debugger;
        });

        this.findMenuList();
    }


    /**
     * 메뉴관리 리스트 가져오기
     * 서버에서 메뉴데이터를 가져온다.
     *
     * @Author : ihatelua
     * @Create : 2022년 05월 23일
     * @version 1.0
     */
    findMenuList = () => {
        CommonAJAX._requestSelectData(this.URL.FIND_MENU_LIST).then(
            async (success) => {
                // 가져온 데이터를 정제한다.
                // 활성화된 메뉴리스트 : 대분류 데이터
                // 비활성화된 메뉴리스트
                let mainList = [];
                this.menuList = success.data.menuList;
                this.saveList = CommonUtil.insertColumn(this.menuList, {rowStatus:"R"});
                for (const menu of this.menuList) {
                    if(menu.SUB_ENABLED === "NULL"){
                        if(mainList.indexOf(menu.MAIN_ID) === -1){
                            mainList.push(menu.MAIN_ID);
                            this.currentMenu.push({id: menu.MAIN_NM, foo: menu.MAIN_ID, children: []});
                        }
                    }else if(menu.SUB_ENABLED !== '0'){
                        this.currentMenu.push({id: menu.MAIN_NM, foo: menu.MAIN_ID});
                    }else{
                        this.disabledMenu.push({id: menu.MAIN_NM, foo: menu.MAIN_ID});
                    }
                }
            },
            (error) => {
                // 실패시
                console.log(error);
            }
        ).then(() => {
            // 정제된 활성화된 메뉴리스트에서 소분류 데이터를 정제하여 넣어준다.
            let cnt = 0;
            for(const menu of this.currentMenu){
                if(menu.children){
                    for (const sub of this.menuList) {
                        if(sub.MAIN_ID === menu.foo){
                            this.currentMenu[cnt].children.push({id:sub.SUB_NM, foo:sub.SUB_ID});
                        }
                    }
                }
                cnt++;
            }
            this.setMenuList();
        })
    }


    /**
     * 메뉴관리 리스트 세팅
     * 메뉴관리 리스트의 데이터를 화면에 뿌려준다.
     *
     * @Author : ihatelua
     * @Create : 2022년 05월 20일
     * @version 1.0
     */
    setMenuList = () => {
        let reflectMenuList;
        let notUsedMenuList;
        let arrTmp;

        // 반영될 메뉴리스트 데이터 추가
        arrTmp = this.currentMenu;
        CommonModule.nestable('#reflectMenu', 'remove', "sample");
        arrTmp.forEach((ele) => {
            CommonModule.nestable('#reflectMenu', 'add', ele);
        })
        reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
        this.reflectTextareaNode.innerText = window.JSON.stringify(reflectMenuList);

        // 미사용 메뉴리스트 데이터 추가
        arrTmp = this.disabledMenu;
        CommonModule.nestable('#notUsedMenu', 'remove', "sample");
        arrTmp.forEach((ele) => {
            CommonModule.nestable('#notUsedMenu', 'add', ele);
        })
        notUsedMenuList = CommonModule.nestable('#notUsedMenu', 'serialize');
        this.notUsedTextareaNode.innerText = window.JSON.stringify(notUsedMenuList);

        this.bindComponent();
    }


    /**
     * 메뉴관리 컴포넌트 세팅
     * 가져온 데이터를 컴포넌트에 바인딩하고
     * 이벤트를 설정한다.
     *
     * @Author : ihatelua
     * @Create : 2022년 05월 23일
     * @version 1.0
     */
    bindComponent = () => {
        // 아이콘 데이터 세팅
        let iconArr = iconJSON.id;  // icon 리스트파일 가져오기
        let size = iconArr.length;

        for(let cnt = 0; cnt < size; cnt++){
            // 요소 생성
            let liNode = document.createElement('li');
            let aNode = document.createElement('a');
            let iNode = document.createElement('i');

            // 요소추가
            let liItem = this.selectIconNode.appendChild(liNode);
            liItem.className = "nav-item";
            let aItem = liItem.appendChild(aNode);
            aItem.className = "nav-link";
            aItem.setAttribute("data-toggle", "tab");

            // 스타일 적용
            liItem.style.margin = "auto";
            aItem.style.border = "0px";
            aItem.style.padding = "0.2rem";
            aItem.style.margin = "auto";

            // 아이콘 추가
            let iItem = aItem.appendChild(iNode);
            iItem.className = "zmdi zmdi-" + iconArr[cnt];
        }

        // 메뉴 셀렉트박스 데이터 세팅
        this.menuList.forEach((ele, i) => {
            // option node 생성
            let optionNode = document.createElement("option");

            if(i === 0){
                optionNode.selected = true;
                optionNode.innerHTML = "메뉴 선택";
            } else if(ele.SUB_NM){
                optionNode.id = ele.SUB_ID;
                optionNode.innerHTML = ele.SUB_NM;
                this.selectMenuForm.push({id:ele.SUB_ID, name:ele.SUB_NM});
            } else{
                optionNode.id = ele.MAIN_ID;
                optionNode.innerHTML = ele.MAIN_NM;
                this.selectMenuForm.push({id:ele.MAIN_ID, name:ele.MAIN_NM});
            }

            this.selectMenuListNode.appendChild(optionNode);
        });
    }



    /**
     * 아이콘 선택 비활성화
     * 활성화된 아이콘을 비활성화 시킨다.
     *
     * @Author : ihatelua
     * @Create : 2022년 05월 24일
     * @version 1.0
     */
    iconChangeActive = () => {
        let selectIconList = document.getElementById("selectIconList");
        let icon = selectIconList.getElementsByClassName("nav-link active");
        if(icon.length > 0){
            icon[0].className = "nav-link"
        }
    }

    /**
     * 아이콘 선택
     * 가져온 값에 따라 아이콘을 선택한다.
     *
     * @Author : ihatelua
     * @Create : 2022년 05월 26일
     * @version 1.0
     */
    selectIcon = (iconNm) => {
        debugger;
        let selectIconList = document.getElementById("selectIconList");         // 아이콘 리스트 노드
        let isActiveIcon = selectIconList.getElementsByClassName("active");    // 활성화된 아이콘
        let icon = selectIconList.getElementsByClassName(iconNm);                        // 선택할 아이콘

        if(icon.length > 0){
            // 기존 아이콘있으면 비활성화
            if(isActiveIcon.length > 0){
                isActiveIcon[0].classList.remove("active");
            }
            icon[0].parentNode.classList.add("active");
        }
    }


}





