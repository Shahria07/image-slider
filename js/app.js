
let selectedImageIndex = 0;


$(".wrapper img").click(function () {
    selectedImageIndex = $(".wrapper img").index($(this));

let selectedimage = $(this).attr("src");
$(".modal img").attr("src", selectedimage);
    $(".modal").addClass("active");
});



$(".modal .closeBtn").click(function () {
$(".modal").removeClass("active");
});


$(".nextArrow").click(function () {
    selectedImageIndex = selectedImageIndex + 1;
if (selectedImageIndex >= $(".wrapper img").length){
    selectedImageIndex = 0;
}

let nextSelectedImage = $(".wrapper img").eq(selectedImageIndex).attr("src");

$(".modal img").attr("src", nextSelectedImage);
});






$(".prevArrow").click(function () {
    selectedImageIndex = selectedImageIndex - 1
    if (selectedImageIndex < 0){
     selectedImageIndex = $('.wrapper img').length - 1
    }
let prevSelectedImage = $(".wrapper img").eq(selectedImageIndex).attr("src");
$(".modal img").attr("src", prevSelectedImage);


})