function showHide(){
    const togglePassword=document.getElementById("eye");
    const hideShow=document.getElementById("pass");
    if(hideShow.type === "password")
    {
        hideShow.type="text";
    }else{
        hideShow.type="password";
    }
    if(togglePassword.name==="eye-off")
    {
        togglePassword.name="eye";
    }else{
        togglePassword.name="eye-off";
    }
}
// slide show
var images=[];
var index=0;
var sohinh=20;
for(var i=0;i<sohinh;i++)
{
    images[i]=new Image();
    images[i].src="/ImgSlideShow/"+i+".jpg";
}

function last(){

    index=images.length-1;
    var anh=document.getElementById("anh");
    anh.src=images[index].src;
}
function next(){
    index++;
    if(index>=images.length)
    index=0;
    var anh =document.getElementById("anh");
    anh.src=images[index].src;
    document.getElementById("stt_anh").innerHTML=index + "/" + sohinh;
}
function autoSlide()
{
        next();
}
setInterval(autoSlide,5000);


  // kiểm tra form đăng kí
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  var count =0;
  function kiemTraHoppy() {
    var checkboxes = document.getElementsByClassName("hoppy");
    var sothich = document.getElementById("hoppy_border");
    var daTichChon = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
           daTichChon = true;
            break;
        }
    }
    if(daTichChon==true){
         sothich.style.border="2px solid green";
         count=count+1
    }
    else
    {
        sothich.style.border="2px solid red";
    }
}
function kiemTraGioiTinh() {
    var checkboxes = document.getElementsByClassName("gt");
    var gt = document.getElementById("gt_border");
    var daTichChon = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
           daTichChon = true;
            break;
        }
    }
    if(daTichChon==true){
         gt.style.border="2px solid green";
         count=count+1

    }
    else
    {
        gt.style.border="2px solid red";
    }
}
function hienThongBaoDangKiThanhCong() {
    alert("Đăng kí thành công!");
}
var tam=0;
var dem=0;
function baoLoi(){
    var name=document.getElementById("user");
    var mail=document.getElementById("mail");
    var pass=document.getElementById("pass");
    var qt=document.getElementById("Quoctich");
    var note=document.getElementById("note");
    if(name.value.length==0){
        name.style.border="2px solid red";
    }
    else{
        name.style.border="2px solid green";
        count=count+1
    }
    if(mail.value.length==0|| isValidEmail(mail.value)==false)
    {
        mail.style.border="2px solid red";
    }else{
        mail.style.border="2px solid green";
        count=count+1
    }
    if(pass.value.length==0){
        pass.style.border=" 2px solid red";
        
    }else{
        pass.style.border="2px solid green";
        count=count+1
    }
    if(qt.value==0){
        qt.style.border=" 2px solid red";
    }else{
        qt.style.border="2px solid green";
        count=count+1
    }
    if(note.value.length==0 || note.value.length>200)
    {
        note.style.border="2px solid red";
    }else{
        note.style.border="2px solid green";
        count=count+1
    }
    kiemTraHoppy();
    kiemTraGioiTinh(); 
    dem = count - dem;
    if(dem==7)
    {
        alert("Đăng kí thành công");
    }
}
//  Giỏ hàng
        document.addEventListener("DOMContentLoaded", function() {
            var checkboxes = document.querySelectorAll(".chon");
            var quantities = document.querySelectorAll(".soluong");

            checkboxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });

            quantities.forEach(function(quantity) {
                quantity.disabled = true;
            });

            tongtien();

            quantities.forEach(function(quantity) {
                quantity.addEventListener("input", function() {
                    capNhatThanhTienVaTongTien(this.parentElement.parentElement);
                });
            });
        });

        function updateRow(checkbox) {
            var row = checkbox.parentElement.parentElement;
            var quantityInput = row.querySelector(".soluong");
            var thanhtienElement = row.querySelector(".thanhtien");

            if (checkbox.checked) {
                quantityInput.disabled = false;
                quantityInput.value="1";
            } else {
                quantityInput.disabled = true;
                quantityInput.value = "0";
            }

            capNhatThanhTienVaTongTien(row);
        }

 function capNhatThanhTienVaTongTien(row) {
    var checkbox = row.querySelector(".chon");
    var priceElement = row.querySelector(".price");
    var quantityInput = row.querySelector(".soluong");
    var thanhtienElement = row.querySelector(".thanhtien");

            if (checkbox.checked) {
                var price = parseFloat(priceElement.innerText);
                var quantity = parseFloat(quantityInput.value);
                var thanhtien = price * quantity;
                thanhtienElement.innerText = thanhtien;
            } else {
                thanhtienElement.innerText = "";
            }

            tongtien();
        }

 function tongtien() {
    var sum = 0;
    var thanhtienElements = document.querySelectorAll(".thanhtien");
            
    thanhtienElements.forEach(function (element) {
         if (element.innerText !== "") {
             var thanhtien = parseFloat(element.innerText);
                if (!isNaN(thanhtien)) {
                        sum += thanhtien;
                    }
                }
            });

document.getElementById("sum_price").innerText = sum;
        }