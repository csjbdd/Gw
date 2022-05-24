/**
 * 관리자페이지 - 메뉴관리
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */


/******************************************************************************
 * 전역변수 선언
 ******************************************************************************/
let commonMenu;
let commonAJAX;

let reflectMenuNode;        // 반영될 메뉴 포틀릿 노드
let notUsedMenuNode;        // 비활성화 메뉴 포틀릿 노드
let deleteMenuNode;         // 삭제할 메뉴 포틀릿 노드
let selectMenuListNode;     // 메뉴폼 메뉴선택 노드
let selectIconNode;         // 메뉴폼 아이콘선택 노드


// 테스트용 전역변수 지울예정
let deleteTextareaNode;
let reflectTextareaNode;
let notUsedTextareaNode;

// 데이터리스트
let menuList;           // 메뉴 전체 리스트
let currentMenu = [];   // 현재 활성화된 리스트
let disabledMenu = [];  // 현재 비활성화된 리스트

let selectMenuForm = [];



/******************************************************************************
 * 페이지 로드후
 ******************************************************************************/
window.onload = () =>{
    // 공통 메뉴클래스 선언
    commonMenu = new CommonMenu();
    // 공통 AJAX클래스 선언
    commonAJAX = new CommonAJAX();

    // 등록할 메뉴리스트 선언
    reflectMenuNode = document.getElementById('reflectMenu');
    reflectTextareaNode = document.getElementById("reflectTextarea");

    // 미사용 메뉴리스트 선언
    notUsedMenuNode = document.getElementById('notUsedMenu');
    notUsedTextareaNode = document.getElementById("notUsedTextarea");

    // 삭제할 메뉴리스트 선언
    deleteMenuNode = document.getElementById('deleteMenu');
    deleteTextareaNode = document.getElementById("deleteTextarea");

    // 메뉴폼 메뉴선택 선언
    selectMenuListNode = document.getElementById("selectMenuList");

    // 아이콘 선택폼 선언
    selectIconNode = document.getElementById('selectIconList');
    initPage();
}


/**
 * 페이지 초기화
 * 페이지가 로드가 될때 필요한 모듈을 선언한다.
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */
const initPage = () => {
    commonMenu.setContentHeader("manager/createMenu");      // 메뉴 경로 세팅
    CommonModule.nestable('.dd', {"maxDepth":2});    // 메뉴포틀릿 세팅

    setEvent();
}


/**
 * 이벤트 선언
 * 컴포넌트의 이벤트를 선언한다.
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */
const setEvent = () => {
    let reflectMenuList = [];
    let notUsedMenuList = [];

    // 반영될 메뉴리스트 이벤트
    reflectMenuNode.children[0].addEventListener('mouseup', (event) => {
        reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
        reflectTextareaNode.innerText = window.JSON.stringify(reflectMenuList);
    });

    // 미사용 메뉴리스트 이벤트
    notUsedMenuNode.children[0].addEventListener('mouseup', (event) => {
        notUsedMenuList = CommonModule.nestable('#notUsedMenu', 'serialize');
        notUsedTextareaNode.innerText = window.JSON.stringify(notUsedMenuList);
    });

    // 메뉴폼 셀렉트박스 이벤트
    selectMenuListNode.addEventListener("change", (event) => {
        debugger;
    });


    // 아이콘 선택폼 이벤트
    selectIconNode.addEventListener('click', (e) => {
        debugger;
    })

    findMenuList();
}


/**
 * 메뉴관리 리스트 가져오기
 * 서버에서 메뉴데이터를 가져온다.
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 23일
 * @version 1.0
 */
const findMenuList = () => {
    commonAJAX._requestSelectData("/manager/findMenuList").then(
        async (success) => {
            // 가져온 데이터를 정제한다.
            // 활성화된 메뉴리스트 : 대분류 데이터
            // 비활성화된 메뉴리스트
            let mainList = [];
            menuList = success.data.menuList;
            for (const menu of menuList) {
                if(menu.SUB_ENABLED == "NULL"){
                    if(mainList.indexOf(menu.MAIN_ID) == -1){
                        mainList.push(menu.MAIN_ID);
                        currentMenu.push({id: menu.MAIN_NM, foo: menu.MAIN_ID, children: []});
                    }
                }else if(menu.SUB_ENABLED != 0){
                    currentMenu.push({id: menu.MAIN_NM, foo: menu.MAIN_ID});
                }else{
                    disabledMenu.push({id: menu.MAIN_NM, foo: menu.MAIN_ID});
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
        for(const menu of currentMenu){
            if(menu.children){
                for (const sub of menuList) {
                    if(sub.MAIN_ID == menu.foo){
                        currentMenu[cnt].children.push({id:sub.SUB_NM, foo:sub.SUB_ID});
                    }
                }
            }
            cnt++;
        }
        setMenuList();
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
const setMenuList = () => {
    let reflectMenuList = [];
    let notUsedMenuList = [];
    let arrTmp = [];

    // 반영될 메뉴리스트 데이터 추가
    arrTmp = currentMenu;
    CommonModule.nestable('#reflectMenu', 'remove', "sample");
    arrTmp.forEach((ele) => {
        CommonModule.nestable('#reflectMenu', 'add', ele);
    })
    reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
    reflectTextareaNode.innerText = window.JSON.stringify(reflectMenuList);

    // 미사용 메뉴리스트 데이터 추가
    arrTmp = disabledMenu;
    CommonModule.nestable('#notUsedMenu', 'remove', "sample");
    arrTmp.forEach((ele) => {
        CommonModule.nestable('#notUsedMenu', 'add', ele);
    })
    notUsedMenuList = CommonModule.nestable('#notUsedMenu', 'serialize');
    notUsedTextareaNode.innerText = window.JSON.stringify(notUsedMenuList);

    bindComponent();
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
const bindComponent = () => {
    // 아이콘 데이터 세팅
    let iconArr = iconJSON.id;  // icon 리스트파일 가져오기
    let size = iconArr.length;
    for(let cnt = 0; cnt < size; cnt++){
        // 요소 생성
        let liNode = document.createElement('li');
        let aNode = document.createElement('a');
        let iNode = document.createElement('i');

        // 요소추가
        let liItem = selectIconNode.appendChild(liNode);
        liItem.className = "nav-item";
        liItem.style = "margin: auto;"
        let aItem = liItem.appendChild(aNode);
        aItem.className = "nav-link";
        aItem.setAttribute("data-toggle", "tab");
        aItem.style = "border:0px; padding: 0.2rem; margin: auto;"

        // 아이콘 추가
        let iItem = aItem.appendChild(iNode);
        iItem.className = "zmdi zmdi-" + iconArr[cnt];
    }

    // 메뉴 셀렉트박스 데이터 세팅
    menuList.forEach((ele, i) => {
        // option node 생성
        let optionNode = document.createElement("option");

        if(i == 0){
            optionNode.selected = true;
            optionNode.innerHTML = "메뉴 선택";
        } else if(ele.SUB_NM){
            optionNode.id = ele.SUB_ID;
            optionNode.innerHTML = ele.SUB_NM;
            selectMenuForm.push({id:ele.SUB_ID, name:ele.SUB_NM});
        } else{
            optionNode.id = ele.MAIN_ID;
            optionNode.innerHTML = ele.MAIN_NM;
            selectMenuForm.push({id:ele.MAIN_ID, name:ele.MAIN_NM});
        }

        selectMenuListNode.appendChild(optionNode);
    });
}









/******************************************************************************
 * 메서드
 ******************************************************************************/

/**
 * 아이콘 선택 비활성화
 * 활성화된 아이콘을 비활성화 시킨다.
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 24일
 * @version 1.0
 */
const iconChangeActive = () => {
    let selectIconList = document.getElementById("selectIconList");
    let icon = selectIconList.getElementsByClassName("nav-link active");
    if(icon.length > 0){
        icon[0].className = "nav-link"
    }
}
