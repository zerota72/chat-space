$(function(){ 
  function buildHTML(message){
   if (message.image) {
     var html =
     `<div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">
             ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
          <img src="${message.image}">
        </div>
     </div>
  `
     return html;
   } else {
     var html =
     `<div class="message">
        <div class="upper-message">
          <div class="upper-message__user-name">
             ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
     </div>
  `
return html;
   };
 }
$('#new_message').on('submit', function(e){
 
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action');
 console.log(url);
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('form')[0].reset();
    $('input').prop('disabled', false);
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight})
    
    
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
})
});