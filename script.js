$(document).ready(function() {

  $('#button').click(function() {
    var addItem = $("#textbox").val();
    if (addItem.length >= 1) {
      $("#list").append("<div class = 'item'>" + addItem + "</div>");
      $("input").val(null);
    };
  });
  $(document).on("click", ".item", function() {
    $(this).removeClass("item").addClass("item-delete");
  });
  $(document).on("mouseleave", ".item-delete", function() {
    $(this).removeClass("item-delete").addClass("item");
  });
  $(document).on("click", ".item-delete", function() {
    $(this).remove();
  });
});