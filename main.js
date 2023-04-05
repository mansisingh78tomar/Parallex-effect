document.addEventListener("mousemove", parallax);
var layers = document.querySelectorAll(".layer");

function parallax(e) {
  layers.forEach((layer) => {
    var movement = layer.getAttribute("data-speed");
    var x = (window.innerWidth - e.pageX * movement) / 250;
    console.log(x)
    var y = (window.innerWidth - e.pageX * movement) / 250;
    console.log(y)

    layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
  });
}
