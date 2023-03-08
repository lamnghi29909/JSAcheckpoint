const array = [
    {
        id : 1,
        img:"img/burger.png",
        comment : "Big and Juicy Wagyu Beef Cheeseburger",
        img1 : "img/30minutes.png",
        img2 : "img/snack.png",
    },    
    {
        id : 2,
        img :"img/fish.png",
        comment : "Fresh Lime Roasted Salmon",
        img1 : "img/30minutes.png",
        img2 : "img/fish(2).png",
    },    
    {
        id : 3,
        img :"img/chicken.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/snack.png",
    },    
    {
        id : 4,
        img :"img/mixed.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/healthy.png",
    },    

];
function showProduct(data) {
    let Product_item = document.querySelector(".dishes")
    Product_item.innerHTML = "";
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `
            <a href="test2.html?url=${item.id}">
                <div class="img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="comment">
                    <div class="text-comment">
                        <h4>${item.comment}</h4>
                    </div>
                    <div class="pic-comment">
                        <img src="${item.img1}" alt="">
                        <img src="${item.img2}" alt="">
                    </div> 
                </div>
            </a>
            `;
        }
    }
}
showProduct(array);
function mainProduct() {
    //cách lấy dữ liệu được đẩy lên trên url 
    let url = new URLSearchParams(window.location.search).get("url");
    let newArryProduct = array.find(function(item) {
        return item.id == url;
    });
    console.log(newArryProduct);
    let gioithieu = document.querySelector(".gioithieu");
    gioithieu.innerHTML = `
    <div class="comment">
        <h1>${newArryProduct.comment}</h1>
        <button>Add To Chart</button>
    </div>
    <div class="picture">
        <img src="${newArryProduct.img}" alt="">
    </div>
    `;
}
mainProduct();