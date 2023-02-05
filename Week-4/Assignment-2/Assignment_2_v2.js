function ajax(src, callback) {
    $.ajax(src, {
        method: "GET",
        dataType: "json",
        success: function (res) {
            callback(res);
        },
        error: function (err) {
            console.log(err);
        },
    });

}
// your code here

function render(data) {
    const mylist = $("#mylist");
    for (let i = 0; i < data.length; i++){
        const product = $("<div></div>").addClass("product").appendTo(mylist);
        Object.entries(data[i]).map((val) => {
            $("<div></div>").addClass(val[0]).text(val[1]).appendTo(product)
        });
    }
}


ajax(
    "https://appworks-school.github.io/Remote-Assignment-Data/products",
    function (response) {
        render(response);
    }
); // you should get product information in JSON format and render data in the page
