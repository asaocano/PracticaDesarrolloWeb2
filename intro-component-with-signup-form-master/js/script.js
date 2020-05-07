$(document).ready(function () {
  $(".forma p").hide();
  $("#nombre").on("blur", function () {
    if ($("#nombre").value === "") {
      $(".forma p").show();
      console.log("hoa");
    }
  });
});
