var myInfo = {
        name: 'Đô',
        age: 20,
        address: 'Hà Nội'
    }
    // Thêm key và value
    // myInfo.email = 'trannangdo@gmail.com'

console.log(myInfo.name)
    // document.write("Ngôn ngữ Browser: " + navigator.language);
    // document.write("Hệ điều hành: " + navigator.platform);
    // document.write("Cách 1: " + navigator.appVersion + "<br/>");
    // document.write("Engine: " + navigator.product);
    // document.write("App Name: " + window.navigator.appName + "<br/>");
    // if (window.cookieEnabled) {
    //     alert("Có bật Cookie - freetuts.net");
    // } else {
    //     alert("Cookie đã bị tắt");
    // }

var Student = {
    data: [],
    viewStudent: function() {
        // Xem danh sách sinh viên
        var listStudent = this.data;

        // Lặp và hiển thị sinh viên
        for (var i = 0; i < listStudent; i++) {
            document.write("<div>" + listStudent[i].id + "|" + listStudent[i].name + "|" + listStudent[i].email + "</div>");
        }
    },
    addStudent: function(id, name, email) {
        // Thêm sinh viên mới
    },
    removeStudent: function(id) {
        // Xóa sinh viên
    },
    editStudent: function(id, name, email) {
        // Sửa sinh viên
    }
};
var domDemo = document.getElementById("greet");
domDemo.innerHTML = "Love";
// domDemo.style = { "backgroundColor": 'red' };
// document.getElementById("greet").style.backgroundColor = 'red';
// document.getElementById("greet").style.color = 'white';