$(document).ready(function() {
//  $("#content").on("ajax:complete", "#my-page-text-form", function(e, data) {
//    if (data.status == 200) {
//      var container = $(this).children('.handle')[0] || $(this);
//      $(container).html(data.responseText);
//    }
//  });
//
//  $( document ).ajaxComplete(function( event, xhr, settings ) {
//
//    alert( "Triggered ajaxComplete handler. The result is " +
//      xhr.responseHTML );
//
//  });

  $('#content').on('click', '.edit-my-page-text', function(event) {
    var text = $(this).data("text");
    var url = $(this).data("url");
    event.preventDefault();
    $("#ajax-modal").html(window.myPageTextModal);
    $("#my_page_text_area").val(text);
    $("form#my-page-text-form").attr("action", url);
    showModal("ajax-modal", "60%");
    $('#my_page_text_area').focus();
    $("#ajax-modal").addClass("my-page-text");
  });
});
