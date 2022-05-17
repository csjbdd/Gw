// 모듈 사용을 위한 jquery 문
$(document).ready(function() {
    // $('.dd').nestable();
    //
    // $('.dd').on('change', function () {
    //     var $this = $(this);
    //     var serializedData = window.JSON.stringify($($this).nestable('serialize'));
    //     $this.parents('div.body').find('textarea').val(serializedData);
    // });
});

window.onload = () =>{
    // 메뉴 경로 세팅
    let commonMenu = new CommonMenu();
    commonMenu.setContentHeader("manager/createMenu");

    // 메뉴포틀릿 세팅
    CommonModule.nestable('.dd', {"maxDepth":2});
}