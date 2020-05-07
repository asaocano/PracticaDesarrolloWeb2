$(document).ready(function () {
  $("#nombretext").hide();
  $("#lasttext").hide();
  $("#emailtext").hide();
  $("#passtext").hide();
  $("#nombre").on("blur", function () {
    if ($("#nombre").val() === "") {
      $("#nombretext").show();
    } else {
      $("#nombretext").hide();
    }
  });

  $("#apellido").on("blur", function () {
    if ($("#apellido").val() === "") {
      $("#lasttext").show();
    } else {
      $("#lasttext").hide();
    }
  });

  $("#correo").on("blur", function () {
    if ($("#correo").val().indexOf("@") < 0) {
      $("#emailtext").show();
      console.log("asd");
    } else {
      $("#emailtext").hide();
      console.log("das");
    }
  });

  $("#contrasenia").on("blur", function () {
    if ($("#contrasenia").val() === "") {
      $("#passtext").show();
    } else {
      $("#passtext").hide();
    }
  });
});
