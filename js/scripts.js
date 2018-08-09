$(document).ready(function(){
  $("form#celebrity-dating").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $('input[name=gender]:checked').val();
    var hobbies = $("select#hobbies").val();

    if(gender === "female" && hobbies === "hiking"){
      $(".vanessa").show();
      $(".zac").hide();
      $(".brutal").hide();

    }
    else if(gender === "male" && hobbies ==="eating"){
      $(".zac").show();
      $(".vanessa").hide();
      $(".brutal").hide();
    }

    else{
      $(".brutal").show();
      $(".zac").hide();
      $(".vanessa").hide();
    }

    event.preventDefault();
  });
});
