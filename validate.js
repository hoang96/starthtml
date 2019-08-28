function validateForm(){
            // Bước 1: Lấy giá trị của username và password
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
 
            // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
            if (username == ''){
              alert('Bạn chưa nhập tên đăng nhập');
              return false;
            }else {
              if(username=="hoangtv123"){
                alert('Tên đăng nhập đã tồn tại.');
                return false;
              }
              else if (password == ''){
                alert('Bạn chưa nhập mật khẩu');
                return false;
              }
              else{
                var regex = /[^\w\s]/gi; 
                if(password.length <9){
                 alert('Mật khẩu cần ít nhất 9 kí tự');
                  return false;
               }else if(regex.test(password) == false){
                 alert('Mật khẩu cần bao gồm chữ số chữ cái và ký tự đặc biệt.');
                 return false;
               }else{
                 alert('Dữ liệu hợp lệ, ta có thể chấp nhận submit form');
                 return true;             
               }        
             }
            }
}
