module.exports = function solveEquation(equation) {
  
  index1= equation.indexOf('* x^2');
  tmp = equation.substr(0, index1-1);
  var a = parseInt(tmp, 10);
  index2 = equation.lastIndexOf('* x');
  tmp = equation.substr(index1+5, index2-index1-5);
  var b = parseInt(tmp.replace(/\s/g, ''), 10);
  tmp = equation.substr(index2+4);
  var c = parseInt(tmp.replace(/\s/g, ''), 10);

  var d = Math.round(Math.sqrt(b*b - 4*a*c));
  var x1 = Math.round((-b + d )/ (2 * a));
  var x2 = Math.round((-b - d )/ (2 * a));
  var answer = [x1,x2];
  return answer.sort((left, right) => left - right);
}
