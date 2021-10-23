$(document).ready(function() {
    $(".custom-select").niceSelect()
    $('input[type="tel"]').mask('+7 (999) 999-99-99', { placeholder: '+7 (___) ___ - __ - __' });
    cartCalc()

    $(".preference-show").click(function() {
        if ($(this).hasClass("preference-show--active")) {
            $(this).removeClass("preference-show--active");
        } else {
            $(".preference-show").removeClass("preference-show--active");
            $(this).addClass("preference-show--active");
        }
    })

    $(`input[data-check='select-all-preferences']`).change(function() {
        let inputVal = $(this).prop("checked")
        $(this).parents(".preference-hidden").find("input").prop("checked", inputVal)
    })

    $(`.preference-hidden input`).change(function() {
        let inputVal = $(this).prop("checked")
        if (!inputVal) {
            $(this).parents(".preference-hidden").find("input[data-check='select-all-preferences']").prop("checked", false)
        }
    })

})

$('.pincode input').keydown(function(e) {
    $(this).val('');
});

$('.pincode input').keyup(function(e) {
    var $wrap = $(this).closest('.pincode');
    var $inputs = $wrap.find('input[type="number"]');
    var val = $(this).val();

    // Ввод только цифр
    if (val == val.replace(/[0-9]/, '')) {
        $(this).val('');
        return false;
    }

    // Передача фокуса следующему innput
    $inputs.eq($inputs.index(this) + 1).focus();

    // Заполнение input hidden
    var fullval = '';
    $inputs.each(function() {
        fullval = fullval + (parseInt($(this).val()) || '0');
    });
    $wrap.find('input[type="hidden"]').val(fullval);
});

$(".reg4__pincode-remove").click(function() {
    $(this).parents(".reg4__pincode").children("input").val('');
})


function cartCalc() {
    $('.ccalc .ccalc-minus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.ccalc').find('input').val(b);
        } else {
            $(this).closest('.ccalc').find('input').val(a);
            $(".ccalc-minus").addClass("disabled");
        }
    });
    $('.ccalc .ccalc-plus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.ccalc').find('input').val(b);
        $(".ccalc-minus").removeClass("disabled");
    });
}