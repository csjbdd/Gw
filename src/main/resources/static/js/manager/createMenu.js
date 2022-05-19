// 전역변수
const commonMenu = new CommonMenu();
let reflectMenuList = [];

window.onload = () =>{
    initPage();
}

const initPage = () => {
    commonMenu.setContentHeader("manager/createMenu");      // 메뉴 경로 세팅
    CommonModule.nestable('.dd', {"maxDepth":2});    // 메뉴포틀릿 세팅

    setEvent();
}

const setEvent = () =>{
    // 반영될 메뉴리스트 이벤트
    const reflectMenu = document.getElementById('reflectMenu');
    const reflectTextarea = document.getElementById("reflectTextarea");
    reflectMenu.children[0].addEventListener('mouseup', (event) => {
        reflectMenuList = CommonModule.nestable('#reflectMenu', 'serialize');
        reflectTextarea.innerText = window.JSON.stringify(reflectMenuList);
    });
    var arr = [{"id":1},{"id":2,"children":[{"id":3},{"id":4}]},{"id":11},{"id":12}];
    arr.forEach((ele) => {
        CommonModule.nestable('#reflectMenu', 'add', ele);
    })

    // document.getElementById('dd-empty').remove();
}