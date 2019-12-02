$(document).ready(function() {
    $('.mdb-select').materialSelect();
    $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
        $(this).closest('.select-outline').find('label').toggleClass('active');
        $(this).closest('.select-outline').find('.caret').toggleClass('active');
    });
});
$(document).ready(function(){
    var count = 0
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
    $(".collapse-parent").on('click', function(){
        if (count%2 == 0){
            $(this).find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }
        else{
            $(this).find(".fa").removeClass("fa-minus").addClass("fa-plus");
            $(".collapse").on('hide.bs.collapse', function(){
                console.log($(this))
                $(this).find(".fa").removeClass("fa-minus").addClass("fa-plus");
                $(this).find(".collapse").removeClass("show")
            });
        }
        count++
    });
});