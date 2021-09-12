function Validation(){
    this.checkEmpty=function(input,ID,message){
        if(input.trim()==""){
            var span = document.getElementById(ID);
            span.innerHTML=message;
            span.style.color = 'red';
            return false;
        }else{
            document.getElementById(ID).innerHTML="";
            return true;
        }
    }
    this.checkTK=function(array,input,ID,message){
        var isExist=false;
        isExist=array.some(function(item){
           return item.taiKhoan.trim()===input.trim();
        });
        if(isExist){
            var span = document.getElementById(ID);
            span.innerHTML=message;
            span.style.color = 'red';
                        return false;
        }else{
            document.getElementById(ID).innerHTML="";
            return true;
        }
    }
    this.checkTK1=function(array,input,ID,message){
        var isExist=false;
        isExist=array.some(function(item){
           return item.taiKhoan.trim()===input.trim();
        });
        if(isExist){
            document.getElementById(ID).innerHTML="";
            return true;
        }else{
            var span = document.getElementById(ID);
            span.innerHTML=message;
            span.style.display = 'block';
                        return false;
        }
    }
    this.checkName=function(input,ID,message){
        var pattern=new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        if(pattern.test(input)){
            document.getElementById(ID).innerHTML="";
            return true;
        }else{
            var span = document.getElementById(ID);
            span.innerHTML=message;
            span.style.color = 'red';            return false;
        }
    }
    this.checkEmail=function(input,ID,message){
        var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(input.match(pattern)){
            document.getElementById(ID).innerHTML="";
            return true;
        }else{
            var span = document.getElementById(ID);
            span.innerHTML=message;
            span.style.color = 'red';            return false;
        }
    }
    this.checkPass=function(input,ID,message){
        var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if(input.match(pattern)){
             //hợp lệ
             document.getElementById(ID).innerHTML = "";
             return true;
        }else{
             // không hợp lệ
             var span = document.getElementById(ID);
             span.innerHTML=message;
             span.style.color = 'red';             return false;
        }
    }

    this.checkDrop=function(input,ID,message){
        var optIndex=document.getElementById(input).selectedIndex;
        if(optIndex!=0){
            document.getElementById(ID).innerHTML = "";
             return true;
        }else{
            var span = document.getElementById(ID);
            span.innerHTML=message;
            span.style.color = 'red';             
            return false;
        }
    }

}