function taikhoan(thutu) {
    // Ẩn tất cả các info trước khi hiển thị info được chọn
    for (let i = 1; i <= 8; i++) {
        document.getElementById('infor' + i).style.display = 'none';
    }

    // Hiển thị info được chọn
    document.getElementById('infor' + thutu).style.display = 'block';

}

