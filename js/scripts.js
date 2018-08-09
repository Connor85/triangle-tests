$(document).ready(function(){
  $("form#celebrity-dating").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $('input[name=gender]:checked').val();
    var hobbies = $("select#hobbies").val();

    event.preventDefault();
  });
});
