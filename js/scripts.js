$(document).ready(function(){
  $("form#triangles").submit(function(event){
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    var sum = sideA+sideB+sideC;
    var max = Math.max(sideA,sideB,sideC);
    var twoLength = sum-max;

    if (twoLength > max) {
      if (sideA === sideB && sideB=== sideC && sideA === sideC ){
        $("#equilateral").show();
        $("#scalene").hide();
        $("#isosceles").hide();
        $("#nope").hide();
        //sideA === sideB || sideB=== sideC || sideC === sideA
      } else if (sideA != sideB && sideB != sideC && sideA != sideC ){
        $("#equilateral").hide();
        $("#scalene").show();
        $("#isosceles").hide();
        $("#nope").hide();
        //else
      } else {
        $("#equilateral").hide();
        $("#scalene").hide();
        $("#isosceles").show();
        $("#nope").hide();
      }
    }
      else{
        $("#nope").show();
        $("#equilateral").hide();
        $("#scalene").hide();
        $("#isosceles").hide();

      }


    // if ((sideA + sideB) > sideC || (sideB + sideC) >= sideA || (sideA + sideC) >= sideB){
    //
    // if (sideA === sideB && sideB=== sideC && sideA === sideC ){
    //   $("#equilateral").show();
    //   $("#scalene").hide();
    //   $("#isosceles").hide();
    //   $("#nope").hide();
    //   //sideA === sideB || sideB=== sideC || sideC === sideA
    // } else if (sideA != sideB && sideB != sideC && sideA != sideC ){
    //   $("#equilateral").hide();
    //   $("#scalene").show();
    //   $("#isosceles").hide();
    //   $("#nope").hide();
    //   //else
    // } else if (sideA === sideB || sideB === sideC || sideA === sideC){
    //   $("#equilateral").hide();
    //   $("#scalene").hide();
    //   $("#isosceles").show();
    //   $("#nope").hide();
    // }
    //
    //
    // }


    event.preventDefault();
  });
});
