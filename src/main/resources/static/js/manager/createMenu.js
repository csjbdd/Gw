/**
 * 관리자페이지 - 메뉴관리
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */

/**
 * 전역변수 선언
 * 공통적으로 쓰이는 변수를 선언한다.
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */
let commonMenu;
let commonAJAX;

let menuList;
let reflectMenu;
let reflectTextarea;
let notUsedMenu;
let notUsedTextarea;
let deleteMenu;
let deleteTextarea;

let currentMenu = [];
let disabledMenu = [];


/**
 * 페이지 로드후
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */
window.onload = () =>{
    // 공통 메뉴클래스 선언
    commonMenu = new CommonMenu();
    // 공통 AJAX클래스 선언
    commonAJAX = new CommonAJAX();

    // 등록할 메뉴리스트 선언
    reflectMenu = document.getElementById('reflectMenu');
    reflectTextarea = document.getElementById("reflectTextarea");

    // 미사용 메뉴리스트 선언
    notUsedMenu = document.getElementById('notUsedMenu');
    notUsedTextarea = document.getElementById("notUsedTextarea");

    // 삭제할 메뉴리스트 선언
    deleteMenu = document.getElementById('deleteMenu');
    deleteTextarea = document.getElementById("deleteTextarea");
    initPage();
}

/**
 * 기본적인 페이지 선언
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
    reflectMenu.children[0].addEventListener('mouseup', (event) => {
        reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
        reflectTextarea.innerText = window.JSON.stringify(reflectMenuList);
    });

    // 미사용 메뉴리스트 이벤트
    notUsedMenu.children[0].addEventListener('mouseup', (event) => {
        notUsedMenuList = CommonModule.nestable('#notUsedMenu', 'serialize');
        notUsedTextarea.innerText = window.JSON.stringify(notUsedMenuList);
    });

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

    // 반영될 메뉴리스트 데이터 추가
    var arr = currentMenu;
    CommonModule.nestable('#reflectMenu', 'remove', "sample");
    arr.forEach((ele) => {
        CommonModule.nestable('#reflectMenu', 'add', ele);
    })
    reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
    reflectTextarea.innerText = window.JSON.stringify(reflectMenuList);

    // 미사용 메뉴리스트 데이터 추가
    var arr = disabledMenu;
    CommonModule.nestable('#notUsedMenu', 'remove', "sample");
    arr.forEach((ele) => {
        CommonModule.nestable('#notUsedMenu', 'add', ele);
    })
    notUsedMenuList = CommonModule.nestable('#notUsedMenu', 'serialize');
    notUsedTextarea.innerText = window.JSON.stringify(notUsedMenuList);
}


// 아이콘
// <i class="zmdi zmdi-home"></i> <span> </span>