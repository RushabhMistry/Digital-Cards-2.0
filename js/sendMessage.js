
function crossBtn(x) {
    if (x.matches) {
        $(".cross").on("click", function () {
            setTimeout(function () {
                $(".sendMessage").show().animate({
                    bottom: -900
                }, 1000);
                $('.grey').fadeOut();
            }, 500);
        });
    } else {
        $(".cross").on("click", function () {
            setTimeout(function () {
                $(".sendMessage").show().animate({
                    top: 900
                }, 1000);
                $('.grey').fadeOut();
            }, 500);
        });
    }
}

$(".smBtn").on("click", function () {
    var x = window.matchMedia("(max-width: 700px)");
    if (x.matches) {
        panelUpDesktop();
    } else {
        panelUpMobile();
    }
});

var x = window.matchMedia("(max-width: 700px)");
crossBtn(x);
x.addListener(crossBtn);

$(".smBtn1").on("click", function () {
    var error = false;
    var name = $(".yourName").val();
    if (validateName(name)) {
        $("#checkName").text("Invalid Name")
        error = true;
    } else {
        $("#checkName").text("");
    }

    var email = $(".yourEmail").val();
    if (validateEmail(email)) {
        $("#checkEmail").text("Invalid Email")
        error = true;
    } else {
        $("#checkEmail").text("");
    }

    var message = $(".yourMessage").val();
    if (validateMessage(message)) {
        $("#checkMessage").text("Invalid Message")
        error = true;
    } else {
        $("#checkMessage").text("");
    }
    if (error) {

    } else {
        var x = window.matchMedia("(max-width: 700px)");
        if (x.matches) {
            panelDownDesktop();
        } else {
            panelDownMobile();
        }
    };

});

function validateName() {
    if (document.getElementById("yourName").value.trim() == "") {
        return true;
    }
};

function validateEmail() {
    if (document.getElementById("yourEmail").value.trim() == "") {
        return true;
    }
};

function validateMessage() {
    if (document.getElementById("yourMessage").value.trim() == "") {
        return true;
    }
};



// const validateEmail = (email) => {
//     var ret = String(email)
//         .toLowerCase()
//         .match("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")
//     ret = (ret == null) ? false : true;
//     return ret;
// };


function panelDownMobile() {
    $(".tick").show().animate({
        top: 250
    }, 1);
    setTimeout(function () {
        $(".sendMessage, .tick").show().animate({
            top: 900
        }, 1000);
        $('.grey').fadeOut();
    }, 1000);
}

function panelDownDesktop() {
    $(".tick").show().animate({
        bottom: 0
    }, 1);
    setTimeout(function () {
        $(".sendMessage, .tick").show().animate({
            bottom: -900
        }, 1000);
        $('.grey').fadeOut();
    }, 1000);
}

function panelUpMobile() {
    $('.grey').fadeIn();
    $(".sendMessage").show().animate({
        top: 250
    }, 1000);
}

function panelUpDesktop() {
    $('.grey').fadeIn();
    $(".sendMessage").show().animate({
        bottom: 0
    }, 1000);
}