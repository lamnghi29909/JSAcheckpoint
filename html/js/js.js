function dangki() {
    var _name = document.dangKi.name.value;
    var _pass = document.dangKi.pass.value;
    var _gmail = document.dangKi.gmail.value;
    var _repass = document.dangKi.repass.value

    var kiemtra =  true;

    var ktten = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
    var ktpass = /^0[0-9]{9,11}$/;
    var ktgmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var ktrpass = /^0[0-9]{9,11}$/;

if (!_name.match(ktten)) {
    document.getElementById("loiName").style.display = "block";
    kiemtra =false;
} else {
    document.getElementById("loiName").style.display = "none";
    console.log(_name)
}


if (!_pass.match(ktpass)) {
    document.getElementById("loipass").style.display = "block";
    kiemtra =false;
} else { document.getElementById("loipass").style.display = "none";
    console.log(_pass)
}


if (!_gmail.match(ktgmail)) {
    document.getElementById("loiGmail").style.display = "block";
    kiemtra =false;
} else {
    document.getElementById("loiGmail").style.display = "none";
    console.log(_gmail)
}

if (!_repass.match(ktrpass)) {
    document.getElementById("loirepass").style.display = "block";
    kiemtra =false;
} else { 
    document.getElementById("loirepass").style.display = "none";
    console.log(__repass)
}


if (kiemtra) {
    alert("thanh cong");
    return kiemtra;
} else return kiemtra;
}