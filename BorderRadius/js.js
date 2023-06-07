const root = document.documentElement;
var square = document.getElementById("square")
console.log(square)

function changeValue(id, value) {
  const suffix = id != "color" ? "%" : "";
  root.style.setProperty(`--${id}`, value + suffix);
}
//Copy Function
function copy(){
  let aux = document.createElement("input");
  let squeareStyle = document.styleSheets[0].cssRules[7].style;
  console.log(squeareStyle);
  let data = [];
  for (let i = 0; i < 12; i++) {
    data.push(`${squeareStyle[i]}: ${squeareStyle[squeareStyle[i]]};`);
  }
  aux.setAttribute("value", data);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
