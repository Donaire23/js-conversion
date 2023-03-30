function kmph(x) {
  return parseFloat (x) / 3.6;
}
function mph(y) {
  return parseFloat (y) * 0.0002777778;
}
function mpm (z) {
  return parseFloat (z) * 3.6;
}

let cSpeed = document.getElementById("speed").value;

function display () {
let cSpeed = document.getElementById("speed").value;

document.getElementById("kmph").innerHTML = kmph(cSpeed);
document.getElementById("mph").innerHTML = mph(cSpeed);
document.getElementById("mpm").innerHTML = mpm (cSpeed);

}