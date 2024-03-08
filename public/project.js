
//to make nav bar black when scroll
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar-b").css("background", "black");
      $(".navbar-b").css("padding-top", "0.563rem");
      $(".navbar-b").css("padding-bottom", "0.563rem");
      //   $(".navbar-b").css("color" , "blue");
    }

    else {
      $(".navbar-b").css("background", "transparent");
      $(".navbar-b").css("padding-top", "1.563rem");
      $(".navbar-b").css("padding-bottom", "1.563rem");
    }
  })
})
//to make nav bar black when pressing of hamburger button
$("#nav-button").click(function () {
  var element = document.getElementById("mainNav");
  element.classList.toggle("my-nav-class");
});

//to validate form
function ValidateFileUpload() {
  var fuData = document.getElementById('customFile');
  var FileUploadPath = fuData.value;


  //To check if user upload any file
  if (FileUploadPath == '') {
    alert("Please upload an image");
    return false;

  } else {
    var Extension = FileUploadPath.substring(
      FileUploadPath.lastIndexOf('.') + 1).toLowerCase();

    //The file uploaded is an image

    if (Extension == "gif" || Extension == "png" || Extension == "bmp"
      || Extension == "jpeg" || Extension == "jpg") {
    }

    //The file upload is NOT an image
    else {
      alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");
      return false;
    }
  }
}

//to change file name in form photo selector
$('#files').change(function (e) {
  var fileName = e.target.files[0].name;
  $('.custom-file-label').html(fileName);
});


