function kmph (x) {
  return parseFloat(x) / 3.6;
}
function mps (y) {
  return parseFloat (y) * 3.6;
}
function mph (z) {
 return parseFloat (z) / 2.237;
}
function fps (g) {
 return parseFloat (g) / 3.281;
}


function display() {

  let cSpeed = document.getElementById("speed").value;

  document.getElementById("kmph").value = kmph (cSpeed);
  document.getElementById("mps").value = mps (cSpeed);
  document.getElementById("mph").value = mph (cSpeed);
  document.getElementById("fps").value = fps (cSpeed);
}