function valide() {
    var _pass = document.dangKi.pass.value;
    var _gmail = document.dangKi.gmail.value;

    var kiemtra =  true;

    var ktpass = /^0[0-9]{9,11}$/;
    var ktgmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


if (!_pass.match(ktpass)) {
    document.getElementById("loipass").style.display = "block";
    kiemtra =false;
} else document.getElementById("loipass").style.display = "none";


if (!_gmail.match(ktgmail)) {
    document.getElementById("loiGmail").style.display = "block";
    kiemtra =false;
} else document.getElementById("loiGmail").style.display = "none";



if (kiemtra) {
    alert("thanh cong");
    return kiemtra;
} else return kiemtra;
}