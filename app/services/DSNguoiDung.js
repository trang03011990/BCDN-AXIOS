function DSNguoiDung(){
    this.layDS=function(){
        return axios({
            method: 'get',
            url: 'https://6131e248ab7b1e001799b20f.mockapi.io/NguoiDung',
        })
    }
    this.them=function(nguoiDung){
        return axios({
            method: 'post',
            url: 'https://6131e248ab7b1e001799b20f.mockapi.io/NguoiDung',
            data:nguoiDung
        })

    }
    this.layND=function(taiKhoan){
        return axios({
            method: 'get',
            url: `https://6131e248ab7b1e001799b20f.mockapi.io/NguoiDung/${taiKhoan}`,
        })
    }
    this.capNhat=function(taiKhoan,nguoiDung){
        return axios({
            method: 'put',
            url: `https://6131e248ab7b1e001799b20f.mockapi.io/NguoiDung/${taiKhoan}`,
            data:nguoiDung
        })
    }
    this.xoa=function(taiKhoan){
        return axios({
            method: 'delete',
            url: `https://6131e248ab7b1e001799b20f.mockapi.io/NguoiDung/${taiKhoan}`,
        })
    }
}