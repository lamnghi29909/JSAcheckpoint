
const array = [
    {
        id : 1,
        img:"img/asset2.jpeg",
        comment : "Hộp socola Treasure She.",
        comment2 : "Với D'Art, phụ nữ cũng giống như những đoá hoa, rực rỡ và hạnh phúc nhất khi được yêu thương và chăm sóc.",
        cost : "255.000 VND",
        comment3 : "Treasure She.",
        comment4 : "từ đó ra đời với mong muốn mọi người có thể tỏ bày yêu thương và quan tâm tới những người phụ nữ quan trọng trong đời mình. Đó có thể là mẹ, là bà, là người chị người em, là vợ, là bạn,... là một nửa thế giới mà bạn biết chắc chắn rằng nếu thiếu họ cuộc sống này sẽ thiếu đi vô vàn sắc màu.",
        comment5 : "Thiết kế tinh tế, mint pearls lấp lánh, socola bark sáng tạo cùng 4 vị socola tươi đặc biệt dành riêng cho Treasure She., tất cả sẽ kiến tạo nên một món quà đầy yêu thương gửi tới những người phụ nữ xung quanh bạn trong dịp 8/3 này đấy!",
        comment6 : "Hộp quà",
        comment7 : "Treasure She.",
        comment8 : "gồm 2 lựa chọn tùy theo sở thích:",
        comment9 : "Mẫu 1:",
        comment10 : "Hộp 4 viên socola tươi Bonbons + Bạc hà phủ socola Mint Pearls",
        comment11 : "Mẫu 2:",
        comment12 : "Hộp 4 viên socola tươi Bonbons + Thanh socola bark",

    },    
    {
        id : 2,
        img :"img/asset4.jpeg",
        comment : "Combo Treasure She + Thanh socola + Thiệp Happy Women's Day",
        comment2 : "Combo quà tặng 8/3 Treasure She, gồm:",
        cost : "339.000 VND",
        comment3 : "",
        comment4 : "- Hộp quà Treasure She (gồm 2 lựa chọn layout)",
        comment5 : "- 1 thanh socola bất kỳ trị giá 100.000đ",
        comment6 : "- Free 1 thiệp Happy Women's Day",
        comment7 : "",
        comment8 : "gồm 2 lựa chọn tùy theo sở thích:",
        comment9 : "Mẫu 1:",
        comment10 : "Hộp 4 viên socola tươi Bonbons + Thanh socola bark ",
        comment11 : "Mẫu 2:",
        comment12 : "Hộp 4 viên socola tươi Bonbons + Bạc hà phủ socola Mint Pearls",
    },    
    {
        id : 3,
        img :"img/asset6.jpeg",
        comment : "Socola viên nghệ thuật 8x8cm - Treasure She. (Chỉ còn tại TP.HCM)",
        comment2 : "Giản dị nhưng chứa trong đó là những thông điệp ý nghĩa, socola nghệ thuật của D'Art có thể thay bạn gửi những lời yêu thương nói ra vốn khó tới những người phụ nữ bạn yêu",
        cost : "120.000 VND",
        comment3 : "",
        comment4 : "",
        comment5 : "Đặc biệt, socola nghệ thuật của D'Art có thể in hình bất kỳ tuỳ theo yêu cầu của khách hàng.",
        comment6 : "",
        comment7 : "",
        comment8 : "",
        comment9 : "Mẫu 1:",
        comment10 : "Hộp 4 viên socola tươi Bonbons + Bạc hà phủ socola Mint Pearls",
        comment11 : "Mẫu 2:",
        comment12 : "Hộp 4 viên socola tươi Bonbons + Thanh socola bark",
    },    
    {
        id : 4,
        img :"img/asset8.jpeg",
        comment : "Socola viên nghệ thuật 8x8cm - Treasure She. (Chỉ còn tại TP.HCM)",
        comment2 : "Giản dị nhưng chứa trong đó là những thông điệp ý nghĩa, socola nghệ thuật của D'Art có thể thay bạn gửi những lời yêu thương nói ra vốn khó tới những người phụ nữ bạn yêu",
        cost : "120.000 VND",
        comment3 : "",
        comment4 : "",
        comment5 : "Đặc biệt, socola nghệ thuật của D'Art có thể in hình bất kỳ tuỳ theo yêu cầu của khách hàng.",
        comment6 : "",
        comment7 : "",
        comment8 : "",
        comment9 : "Mẫu 1:",
        comment10 : "Hộp 4 viên socola tươi Bonbons + Bạc hà phủ socola Mint Pearls",
        comment11 : "Mẫu 2:",
        comment12 : "Hộp 4 viên socola tươi Bonbons + Thanh socola bark",
    },    
];


function showProduct(data) {
    let Product_item = document.querySelector(".baiviet" )
    // Product_item.innerHTML = "";
    if (Product_item) {
        for (let item of data) {
            
            Product_item.innerHTML += `
            <a href="sanpham.html?url=${item.id}" class="a-baiviet">
            <div class="bai">
                <div class="anh">
                    <img src="${item.img}" alt="">
                </div>
                <div class="comment">
                    <p>${item.comment}</p>
                    <p>${item.cost}</p>
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
    let sanpham = document.querySelector(".baivietchinh1");
    if (sanpham) {
        
        sanpham.innerHTML = `

        <div class="img">
        <img src="${newArryProduct.img}" alt="">
    </div>
    <div class="comment">
        <h1>${newArryProduct.comment}</h1>
        <p>255.000 VND</p>
        <button class="product1">Hộp 4 viên tươi + Thanh socola bark</button>
        <button class="product2">Hộp 4 viên tươi + Bạc hà phủ socola</button>
        <button class="normal">Thêm vào giỏ hàng</button>
        <p> ${newArryProduct.comment2}</p>
        <p><span class="dacbiet">${newArryProduct.comment3}</span>${newArryProduct.comment4}</p>
        <p>${newArryProduct.comment5}</p>
        <p>${newArryProduct.comment6} <span class="dacbiet">${newArryProduct.comment7}</span> ${newArryProduct.comment8}</p>
        <li><span class="dacbiet">${newArryProduct.comment9}</span> <span>${newArryProduct.comment10}</span></li>
        <li><span class="dacbiet">${newArryProduct.comment11}</span> <span>${newArryProduct.comment12}</span></li>
    </div>


        `;
        
    }
}
mainProduct();


const listProduct = [
    {
        id : 1,
        img : "img/asset 8.jpeg",
        name : "Gourmet Love Chocolate/ Romantic Heart - S01",
        price : "625.000"
    }
]



$(document).ready(function () {
    $(".slideshow").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 500,
        infinite: true,
        arrows: false,
        dots:true,
    });
});