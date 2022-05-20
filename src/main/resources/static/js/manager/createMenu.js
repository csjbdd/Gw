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

let reflectMenu;
let reflectTextarea;
let notUsedMenu;
let notUsedTextarea;
let deleteMenu;
let deleteTextarea;

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

    setMenuList();
    // document.getElementById('dd-empty').remove();
}

/**
 * 메뉴관리 리스트 세팅
 * 메뉴관리 리스트의 데이터를 가져온다.
 *
 * @Author : ihatelua
 * @Create : 2022년 05월 20일
 * @version 1.0
 */
const setMenuList = () => {
    let reflectMenuList = [];
    let notUsedMenuList = [];

    // 반영될 메뉴리스트 데이터 추가
    var arr = [{"id":1},{"id":2,"children":[{"id":3},{"id":4}]},{"id":11},{"id":12}];
    CommonModule.nestable('#reflectMenu', 'remove', "sample");
    arr.forEach((ele) => {
        CommonModule.nestable('#reflectMenu', 'add', ele);
    })
    reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
    reflectTextarea.innerText = window.JSON.stringify(reflectMenuList);

    // 미사용 메뉴리스트 데이터 추가
    var arr = [{"id":1},{"id":2,"children":[{"id":3},{"id":4}]},{"id":11},{"id":12}];
    CommonModule.nestable('#notUsedMenu', 'remove', "sample");
    arr.forEach((ele) => {
        CommonModule.nestable('#notUsedMenu', 'add', ele);
    })
    notUsedMenuList = CommonModule.nestable('#notUsedMenu', 'serialize');
    notUsedTextarea.innerText = window.JSON.stringify(notUsedMenuList);


    commonAJAX._requestSelectData("/manager/findMenuList").then(
        (success) => {
            debugger;
            // 성공시
            console.log(success);
        },
        (error) => {
            debugger;
            // 실패시
            console.log(error);
        }
    )

}

// 아이콘
// <i class="zmdi zmdi-home"></i> <span> </span>