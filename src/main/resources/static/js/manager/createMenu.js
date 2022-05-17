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
    let commonMenu = new CommonMenu();
    commonMenu.setContentHeader("manager/createMenu");

    CommonModule.nestable('.dd');
}