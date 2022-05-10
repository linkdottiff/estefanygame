const gameCanvas = document.querySelector(".gamecanvas");
const estefany = document.querySelector(".gamecanvas__gif--estefany");
const doctora = document.querySelector(".gamecanvas__gif--doctora");

console.log(gameCanvas.offsetWidth, gameCanvas.offsetHeight);

const gameReset = () => {
  doctora.style.left = gameCanvas.offsetWidth - doctora.offsetWidth - 30 + "px";
  doctora.style.top =
    gameCanvas.offsetHeight - doctora.offsetHeight - 30 + "px";
  estefany.style.left = 20 + "px";
  estefany.style.top = 20 + "px";
};

gameReset();

document.querySelector("body").addEventListener("keydown", function (e) {
  const estefanyLeft = estefany.offsetLeft;
  const estefanyTop = estefany.offsetTop;
  if (
    e.code === "ArrowRight" &&
    estefanyLeft < gameCanvas.offsetWidth - estefany.offsetWidth - 30
  ) {
    estefany.style.left = estefanyLeft + 10 + "px";
  } else if (e.code === "ArrowLeft" && estefanyLeft > 20) {
    estefany.style.left = estefanyLeft - 10 + "px";
  } else if (
    e.code === "ArrowDown" &&
    estefanyTop < gameCanvas.offsetHeight - estefany.offsetHeight - 30
  ) {
    estefany.style.top = estefanyTop + 10 + "px";
  } else if (e.code === "ArrowUp" && estefanyTop > 20) {
    estefany.style.top = estefanyTop - 10 + "px";
  }

  if (
    estefany.offsetLeft - doctora.offsetLeft > 0 &&
    estefany.offsetTop - doctora.offsetTop > 0
  ) {
    alert("LA MATASTE AL FIN JODERRRRR");
    gameReset();
  }
});
