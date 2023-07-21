/*global $, alert, console */


$(document).ready(function () {
    "use strict";

    var UserError = true,
        EmailError = true,
        PhoneError = true,
        MessageError = true;

    // variables definition
    var countMess = $('textarea').attr('maxlength');
    var countPhone = $('#phone').attr('maxlength');
    // count Digit In Ready Mode
    $(function () {
        var txtlen = $(".contact-form textarea").val().length,
            remTxt = countMess - txtlen;
        $(".contact-form textarea + span").html('<span>' + remTxt + '/' + countMess + '</span>');

        var txtlenphone = $('.contact-form #phone').val().length,
            remTxtPhone = countPhone - txtlenphone;
        $(".contact-form #phone+i+span").html('<span>' + remTxtPhone + '/' + countPhone + '</span>');
    })

    // Event KeyUp on textarea 
    // this  event count number of digit after all clieck
    $('.contact-form textarea').keyup(function () {
        var txtlen = $(this).val().length,
            remTxt = countMess - txtlen;
        $(".contact-form textarea + span").html('<span>' + remTxt + '/' + countMess + '</span>');
    });

    // Event KeyUp on input phone 
    // this  event count number of digit after all clieck
    $('.contact-form #phone').keyup(function () {
        var txtlenphone = $(this).val().length,
            remTxtPhone = countPhone - txtlenphone;
        $(".contact-form #phone+i+span").html('<span>' + remTxtPhone + '/' + countPhone + '</span>');
    });

    // Event User 
    // This event to check the filed UserName
    $('.user').blur(function () {
        if ($(this).val().length < 3) {
            $(this).css("border", "1px solid #f00")
                .parent().find(".custome-alert").fadeIn(150).end()
                .find(".astreisx").fadeIn(150);
            UserError = true;
        } else {
            $(this);
            $(this).css("border", "1px solid #080")
                .parent().find(".custome-alert").fadeOut(150).end()
                .find(".astreisx").fadeOut(150);
            UserError = false;
        }
    });

    // Event Email
    // This event to check the filed Email
    $('.mail').blur(function () {
        // Value inside Input Email
        var email = $(".mail").val();

        // Function retuen if value the filed valied or no
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        if ($(this).val() === '') {
            $(this).css("border", "1px solid #f00")
                .parent().find(".custome-alert").fadeIn(150).end()
                .find(".astreisx").fadeIn(150);
            EmailError = true;
        } else {
            $(this).parent().find(".custome-alert").fadeOut(150).end()
                .find(".astreisx").fadeOut(150);

            if (!validateEmail(email)) {
                $(this).css("border", "1px solid #f00")
                    .parent().find(".custome-alert2").fadeIn(150).end()
                    .find(".astreisx").fadeIn(150);
                EmailError = true;
            } else {
                $(this).css("border", "1px solid #080")
                    .parent().find(".custome-alert2").fadeOut(150).end()
                    .find(".astreisx").fadeOut(150);
                EmailError = false;
            }
            EmailError = false;
        }
    });

    // Event Phone
    // This event to check the filed Phone
    $(".phonee").blur(function () {

        if ($(this).val().length > 10 && $(this).val().length < 12) {
            $(this).css("border", "1px solid #080")
                .parent().find(".custome-alert").fadeOut(150);
            PhoneError = false;
        } else {
            $(this).css("border", "1px solid #f00")
                .parent().find(".custome-alert").fadeIn(150);
            PhoneError = true;
        }

        // create array include start network 
        const valid = ["010", "011", "012", "015"];

        if (valid.includes($(this).val().slice(0, 3))) {
            $(this).css("border", "1px solid #080")
                .parent().find(".custome-alert3").fadeOut(150);
            PhoneError = false;
        } else {
            $(".contact-form .form-group .custome-alert3").html('<span>' + "There is no Egyptian telecom company starting with this number " + "\'" + $(".phonee").val().slice(0, 3) + "\'" + '</span>');
            $(this).css("border", "1px solid #f00")
                .parent().find(".custome-alert3").fadeIn(150);
            PhoneError = true;
        }
    });

    // Event Textarea
    // This event to check the filed Textarea
    $('.text').blur(function () {
        if ($(this).val().length < 11) {
            $(this).css("border", "1px solid #f00")
                .parent().find(".custome-alert").fadeIn(150).end()
                .find(".astreisx").fadeIn(150);
            MessageError = true;
        } else {
            $(this).css("border", "1px solid #080")
                .parent().find(".custome-alert").fadeOut(150).end()
                .find(".astreisx").fadeOut(150);
            MessageError = false;
        }
    });

    $(".contact-form").submit(function (e) {
        if (UserError == true || EmailError == true || PhoneError == true || MessageError == true) {
            e.preventDefault();
            $('.user,.mail,.phonee,.text').blur();
        }
    });

});

