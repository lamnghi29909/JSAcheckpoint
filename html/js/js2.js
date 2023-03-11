function dangnhap() {
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

const listArrTk = [
    {
        tk : "nghi",
        mk : 1
    }
];

//thêm list tài khoản vào local
let newList = JSON.parse(localStorage.getItem("login"));
console.log(newList);
if(newList == null) {
    localStorage.setItem("login",JSON.stringify(listArrTk))
}
localStorage.clear()
const login= ()=>{
    let tk = document.querySelector(".gmail");
    let mk =    document.querySelector(".pass");
    for(let item of newList) {
        if((item.tk==tk.value) && (item.mk==mk.value)) {
            window.location.href = "home.html";
        }
    }
}
let form_login = document.querySelector("#login1");
if(form_login) {
    form_login.addEventListener("submit" , (e)=>{
        e.preventDefault()
        login();
    })
}




