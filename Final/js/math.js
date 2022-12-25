function calculate() {
  const w = document.getElementById("input1").value;
  const x = document.getElementById("input2").value;
  const y = document.getElementById("input3").value;

  const max = Math.max(w, x, y); 
  const min = Math.min(w, x, y);  
  const sum = parseFloat(w) + parseFloat(x) + parseFloat(y);
  const subtract = parseFloat(w) - parseFloat(x) - parseFloat(y);
  const multiply = parseFloat(w) * parseFloat(x) * parseFloat(y);
  const divide = parseFloat(w) / parseFloat(x) / parseFloat(y);

  document.getElementById("max").innerHTML = "The maximum number from 3 numbers is " + max;
  document.getElementById("min").innerHTML = "The minimum number from 3 numbers is " + min;
  document.getElementById("sum").innerHTML = "The addition of 3 numbers is " + sum;
  document.getElementById("subtract").innerHTML = "The subtraction of 3 is " + subtract;
  document.getElementById("multiply").innerHTML = "The multiplication of 3 numbers is " + multiply;
  document.getElementById("divide").innerHTML = "The division of 3 numbers is " + divide;
}
