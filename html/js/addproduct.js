const arrListProduct = [
    {
        id: 1,
        name: "socola",
        img: "img/asset2.jpeg",
    }
]
// Viết hàm render sản phẩm ra từ js qua html
// phải viết điều kiện để đẩy lên cho mảng
let arrNewProduct = JSON.parse(localStorage.getItem("ListData"));
if (arrNewProduct == null) {
    localStorage.setItem("ListData", JSON.stringify(arrListProduct))
}
function showProduct(show, data) {

    if (show) {
        for (let item of data) {
            show.innerHTML += `
             <div class="item">
                <img src="${item.img}" alt="">
                <p>${item.name}</p>
            </div>
            `;
        }
    }
};
let show = document.querySelector("#show");
showProduct(show, arrNewProduct);
function addProducth() {
    let name = document.querySelector("._name").value;
    let img = document.querySelector("._img").value;
    arrNewProduct.push({
        id: arrNewProduct.length+1,
        name: name,
        img: img,
    })
    localStorage.setItem("ListData", JSON.stringify(arrNewProduct))
}


// 1 : làm đẹp về css và html
// 2 : làm chi tiết 1 bài viết
// 3 : làm giao diện đăng kí và đăng nhập
// 4 : 1 trang để thêm mới sản phẩm


const rendeAll = (data) => {
    let table = document.querySelector(".table");
    if(table) {
        table.innerHTML="";
        for(let item of data) {
            table.innerHTML += `
            <div class="bai">
                <div class="anh">
                    <img src="${item.img}" alt="">
                </div>
                <div class="comment">
                    <p>${item.name}</p>
                    <button data-name="dat" data-id="${item.id}" class="btn btn-remove btn-danger" >Remove</button>
                </div>
            </div>
            `
        }

    }
}
rendeAll(arrNewProduct);
let btns = document.querySelectorAll(".btn-remove");
for(let item of btns) {
   item.addEventListener("click", function() {
    let id = item.dataset.id;
    //xóa sản phẩm có id trùng với id mình vừa bấm
    let arrRemote = arrNewProduct.filter((item)=> id!=item.id);
// true | lọc ra nhưng cái khác id mà mình vừa bấm 
    localStorage.setItem("ListData",JSON.stringify(arrRemote));
    location.reload();
   })
}