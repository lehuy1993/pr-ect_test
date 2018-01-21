	function validateForm()
{
    // Bước 1: Lấy giá trị của username và password
    var username = document.getElementById('name').value;
    var password = document.getElementById('email').value;
 
    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (name == ''){
        alert('Bạn chưa nhập tên ');
    }
    
    else if (email == '')
    {
        alert('Bạn chưa nhập email');
    }
    else{
        alert('Dữ liệu hợp lệ, ta có thể chấp nhận submit form');
        return true;
    }
 
    return false;
}
