$(document).ready(function(){
  $("form#triangles").submit(function(event){
 


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
