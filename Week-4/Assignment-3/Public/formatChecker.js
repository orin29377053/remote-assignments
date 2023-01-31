function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    } else {
        alert("Your e-mail format isn't match the fromat!");
        return false;
    }
}
let loginEmail = document.getElementById("login_email");
let loginPwd = document.getElementById("login_pwd");
let loginbtn = document.getElementById("login_button");
loginbtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (loginEmail.value !== "" && loginPwd.value !== "") {
        let url = "/signin";
        let msg = `email=${loginEmail.value}&password=${loginPwd.value}`;
        let xhr = new XMLHttpRequest();
        if (signUpEmail.value !== "" && signUpPwd.value !== "") {
        }
        xhr.open("POST", url);
        xhr.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
        );
        xhr.send(msg);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log("OK!!");
                if (xhr.response === "sucess") {
                    console.log(xhr.response);
                    window.location = "/membr_page";
                } else {
                    document.getElementById("signin_status").textContent =
                        xhr.response;
                }
            }
        };
    } else {
        alert("Your e-mail or password is empty!");
    }
});

let signUpEmail = document.getElementById("signup_email");
let signUpPwd = document.getElementById("signup_pwd");
let signUpbtn = document.getElementById("signup_button");
signUpbtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (signUpEmail.value !== "" && signUpPwd.value !== "") {
        if (ValidateEmail(signUpEmail.value)) {
            let url = "/signup";
            let msg = `email=${signUpEmail.value}&password=${signUpPwd.value}`;
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
            );
            xhr.send(msg);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log("OK!!");
                    if (xhr.response === "sucess") {
                        console.log(xhr.response);
                        window.location = "/membr_page";
                    } else {
                        document.getElementById("signup_status").textContent =
                            xhr.response;
                    }
                }
            };
        }
    } else {
        alert("Your e-mail or password is empty!");
    }
});
