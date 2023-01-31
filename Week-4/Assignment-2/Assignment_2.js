function ajax(src, callback) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", src);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            callback(xhr.response);
        }
    };
}
// your code here
function render(data) {
    let mylist = document.getElementById("mylist");
    for (let i = 0; i < data.length; i++) {
        let productArea = document.createElement("div");
        productArea.classList.add("product");
        mylist.appendChild(productArea);
        let tagName;
        Object.entries(data[i]).map((val) => {
            tagName = document.createElement("div");
            tagName.innerText = val[1];
            tagName.classList.add(val[0])
            productArea.appendChild(tagName);
        });
    }

    // your code here
    // document.createElement() and appendChild() methods are preferred.
}
ajax(
    "https://appworks-school.github.io/Remote-Assignment-Data/products",
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page
