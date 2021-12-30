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


    $("input[type=date]").val();

    $(".ill__item-show").click(function() {
        $(this).siblings(".ill__item-hidden").slideToggle()
    })

    $(".patient-pitanie__group-show").click(function() {
        $(this).toggleClass("patient-pitanie__group-show--active")
        $(this).siblings(".patient-pitanie__group-hidden").slideToggle()
    })

    $(".active-notes__item-profession").click(function() {
        $(this).siblings(".active-notes__dropdown").show()
    })

    $(".active-notes__show").click(function() {
        $(this).toggleClass("active-notes__show--active")
        $(this).siblings(".active-notes__hidden").slideToggle()
    })

    $(".order-history__show").click(function() {
        $(this).toggleClass("order-history__show--active")
        $(this).siblings(".order-history__hidden").slideToggle()
    })


    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".active-notes__dropdown"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
    });

    $(".doctor-add__nav-filter").click(function() {
        $(".recipe-filter").show()
    })

    $(".recipe-filter__bg").click(function() {
        $(".recipe-filter").hide()
    })

    $(".recipe-filter__close").click(function() {
        $(".recipe-filter").hide()
    })

    $(".cart__item-change-btn").click(function() {
        $(this).parents(".cart__item-show").siblings(".cart__item-hidden").slideToggle()
    })

    $(".naznachenie-apteka__item-more").click(function() {
        $(this).parents(".naznachenie-apteka__item-show").toggleClass("naznachenie-apteka__item-show--active")
        $(this).parents(".naznachenie-apteka__item-show").siblings(".naznachenie-apteka__item-hidden").slideToggle()
    })


    $(".result__item-btn").click(function() {
        $(this).siblings(".result__dropdown").show()
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".result__dropdown"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
    });

    $(".recipe-detail__cal-btn").click(function() {
        $(this).toggleClass("recipe-detail__cal-btn--active")
        $(".recipe-detail__cal-hidden").slideToggle()
    })

    $(".recipe-detail__ingridients-btn").click(function() {
        $(this).toggleClass("recipe-detail__ingridients-btn--active")
        $(".recipe-detail__ingridients-hidden").slideToggle()
    })

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