var DSNguoiDung = new DSNguoiDung();
var val= new Validation();
function layDSND() {
    DSNguoiDung.layDS()
        .then(function (response) {
            console.log(response.data);
            hienThi(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
layDSND();
function hienThi(mangND) {
    var content = "";
    mangND.map(function (item,index) {
        content += `<tr>
        <th>${index+1}</th>
        <th>${item.taiKhoan}</th>
        <th>${item.matKhau}</th>
        <th>${item.hoTen}</th>
        <th>${item.email}</th>
        <th>${item.ngonNgu}</th>
        <th>${item.loaiND}</th>
        <th>            
        <button class="btn btn-info" onclick="xemChiTiet('${item.id}')" data-toggle="modal" data-target="#myModal" >Xem</button>
        <button class="btn btn-danger" onclick="xoa('${item.id}')" >Xóa</button>
        </th>
                </tr>
        `
        document.getElementById("tblDanhSachNguoiDung").innerHTML=content;

    })
}
function themND(){
    var taiKhoan=document.getElementById("TaiKhoan").value;
    var hoTen=document.getElementById("HoTen").value;
    var matKhau=document.getElementById("MatKhau").value;
    var email=document.getElementById("Email").value;
    var loaiND=document.getElementById("loaiNguoiDung").value;
    var moTa=document.getElementById("MoTa").value;
    var hinhAnh=document.getElementById("HinhAnh").value;
    var ngonNgu=document.getElementById("loaiNgonNgu").value;
    var nguoiDung=new NguoiDung(taiKhoan,hoTen,matKhau,email,loaiND,ngonNgu,moTa,hinhAnh);
    // Validation 
    var isValid = true;
    DSNguoiDung.layDS()
    .then(function (response) {
        var mang=response.data;
        isValid &= val.checkEmpty(taiKhoan, "tbTKNV", "Khong duoc de trong") && val.checkTK(mang, taiKhoan, "tbTKNV", "Tai khoan khong duoc trung");
    })
    isValid &= val.checkEmpty(hoTen, "tbTen", "Khong duoc de trong") && val.checkName(hoTen, "tbTen", "Ten phai la ky tu chu");
    isValid &= val.checkEmpty(email, "tbEmail", "Khong duoc de trong") && val.checkEmail(email, "tbEmail", "Email khong dung dinh dang");
    isValid &= val.checkEmpty(matKhau, "tbMatKhau", "Khong duoc de trong") && val.checkPass(matKhau, "tbMatKhau", "Mat khau khong dung dinh dang");
    isValid &= val.checkDrop("loaiNguoiDung", "tbLoaiND", "Chua chon noi dung");
    isValid &= val.checkDrop("loaiNgonNgu", "tbNgonNgu", "Chua chon noi dung");
    isValid &= val.checkEmpty(hinhAnh, "tbHinhAnh", "Khong duoc de trong");
    isValid &= val.checkEmpty(moTa, "tbMoTa", "Khong duoc de trong");
    console.log(isValid);
    if(isValid){
    DSNguoiDung.them(nguoiDung)
    .then(function (response) {
        console.log(response.data);
        layDSND();
        document.querySelector(".modal-header .close").click();
    })
    .catch(function (error) {
        console.log(error);
    });}
}
document.querySelector("#btnThemNguoiDung").addEventListener("click", function () {
    document.querySelector(".modal-footer").innerHTML = `
        <button class="btn btn-success" onclick="themND();">Thêm</button>
    `;
});
function xemChiTiet(id){
    DSNguoiDung.layND(id)
    .then(function(response){
        console.log(response.data);
document.getElementById("TaiKhoan").value=response.data.taiKhoan;
document.getElementById("HoTen").value=response.data.hoTen;
document.getElementById("MatKhau").value=response.data.matKhau;
document.getElementById("Email").value=response.data.email;
document.getElementById("loaiNguoiDung").value=response.data.loaiND;
document.getElementById("MoTa").value=response.data.moTa;
document.getElementById("HinhAnh").value=response.data.hinhAnh;
 document.getElementById("loaiNgonNgu").value=response.data.ngonNgu;
 document.querySelector(".modal-footer").innerHTML = `
 <button class="btn btn-success" onclick="capNhat('${response.data.id}');" >Cập Nhật</button>
`;
})
    .catch(function(error){
        console.log(error)
    })
}
function capNhat(id){
    var taiKhoan=document.getElementById("TaiKhoan").value;
    var hoTen=document.getElementById("HoTen").value;
    var matKhau=document.getElementById("MatKhau").value;
    var email=document.getElementById("Email").value;
    var loaiND=document.getElementById("loaiNguoiDung").value;
    var moTa=document.getElementById("MoTa").value;
    var hinhAnh=document.getElementById("HinhAnh").value;
    var ngonNgu=document.getElementById("loaiNgonNgu").value;
    var nguoiDung=new NguoiDung(taiKhoan,hoTen,matKhau,email,loaiND,ngonNgu,moTa,hinhAnh);
    // Validation 
    var isValid = true;
    DSNguoiDung.layDS()
    .then(function (response) {
        var mang=response.data;
        isValid &= val.checkEmpty(taiKhoan, "tbTKNV", "Khong duoc de trong") && val.checkTK(mang, taiKhoan, "tbTKNV", "Tai khoan khong duoc trung");
    })
    isValid &= val.checkEmpty(hoTen, "tbTen", "Khong duoc de trong") && val.checkName(hoTen, "tbTen", "Ten phai la ky tu chu");
    isValid &= val.checkEmpty(email, "tbEmail", "Khong duoc de trong") && val.checkEmail(email, "tbEmail", "Email khong dung dinh dang");
    isValid &= val.checkEmpty(matKhau, "tbMatKhau", "Khong duoc de trong") && val.checkPass(matKhau, "tbMatKhau", "Mat khau khong dung dinh dang");
    isValid &= val.checkDrop("loaiNguoiDung", "tbLoaiND", "Chua chon noi dung");
    isValid &= val.checkDrop("loaiNgonNgu", "tbNgonNgu", "Chua chon noi dung");
    isValid &= val.checkEmpty(hinhAnh, "tbHinhAnh", "Khong duoc de trong");
    isValid &= val.checkEmpty(moTa, "tbMoTa", "Khong duoc de trong");
    console.log(isValid);
    if(isValid){
    DSNguoiDung.capNhat(id,nguoiDung)
    .then(function (response) {
        console.log(response.data);
        layDSND();
        document.querySelector(".modal-header .close").click();
    })
    .catch(function (error) {
        console.log(error);
    });
}

}
function xoa(id){
    DSNguoiDung.xoa(id)
    .then(function(response){
        console.log(response.data);
        layDSND();
    })
    .catch(function(error){
        console.log(error)
    })
}
