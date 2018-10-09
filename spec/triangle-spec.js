import { Triangle } from '../src/js/triangle-logic.js';

describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether the three sides cannnot be made into a triangle', function(){
    var notTriangle = new Triangle(2,2,500);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should correctly determine if a triange is equalaterial', function(){
    var equalTriangle = new Triangle (5,5,5);
    expect(equalTriangle.checkType()).toEqual("an equilateral triangle");
  });

  it('should correctly determine if a triangle is isoceles',function(){
    var isocelesTriangle = new Triangle(2,2,4);
    expect(isocelesTriangle.checkType()).toEqual("an isosceles triangle");
  });

});