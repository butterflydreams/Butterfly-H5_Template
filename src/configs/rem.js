SetHtmlFontSize();

onload = function () {
  SetHtmlFontSize();
};

onresize = function () {
  SetHtmlFontSize();
};

function SetHtmlFontSize() {
  let dom = document.getElementsByTagName("html")[0];
  let width = document.documentElement.clientWidth || document.body.clientWidth;
  if (width >= 750) {
    width = 750;
  }
  if (width <= 320) {
    width = 320;
  }
  dom.style.fontSize = `${width / 7.5}px`;
}
