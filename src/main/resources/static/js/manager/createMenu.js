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
let reflectMenu;
let reflectTextarea;
let reflectMenuList;

window.onload = () =>{
    commonMenu = new CommonMenu();
    reflectMenu = document.getElementById('reflectMenu');
    reflectTextarea = document.getElementById("reflectTextarea");
    reflectMenuList = [];
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
    // 반영될 메뉴리스트 이벤트
    reflectMenu.children[0].addEventListener('mouseup', (event) => {
        reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
        reflectTextarea.innerText = window.JSON.stringify(reflectMenuList);
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
    // 반영될 메뉴리스트 데이터 추가
    var arr = [{"id":1},{"id":2,"children":[{"id":3},{"id":4}]},{"id":11},{"id":12}];
    CommonModule.nestable('#reflectMenu', 'remove', "sample");
    arr.forEach((ele) => {
        CommonModule.nestable('#reflectMenu', 'add', ele);
    })
    reflectTextarea.innerText = window.JSON.stringify(CommonModule.nestable('#reflectMenu', 'serialize'));
}