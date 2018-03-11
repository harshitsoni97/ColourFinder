var sliderval1 = document.getElementById("1");
var sliderval2 = document.getElementById("2");
var sliderval3 = document.getElementById("3");
var colorit = document.getElementById("colorit");
var text = document.getElementById("text");
var hexbox = document.getElementById("hex");

text.innerHTML = "rgb(" + sliderval1.value + "," + sliderval2.value + "," + sliderval3.value + ")";
hexbox.innerHTML = "#000000"
sliderval1.oninput = function () {
    text.innerHTML = "rgb(" + sliderval1.value + "," + sliderval2.value + "," + sliderval3.value + ")";
    colorit.setAttribute("style", "background:rgb(%d,%d,%d)", sliderval1, sliderval2, sliderval3);
    convertToHex(text.innerHTML);
    setColor(hexbox);
}
sliderval2.oninput = function () {
    text.innerHTML = "rgb(" + sliderval1.value + "," + sliderval2.value + "," + sliderval3.value + ")";
    convertToHex(text.innerHTML);
    setColor(hexbox);
}
sliderval3.oninput = function () {
    text.innerHTML = "rgb(" + sliderval1.value + "," + sliderval2.value + "," + sliderval3.value + ")";
    convertToHex(text.innerHTML);
    setColor(hexbox);
}

function convertToHex(str) {
    var raw = str.match(/(\d+)/g);
    var hexr = parseInt(raw[0]).toString(16);
    var hexg = parseInt(raw[1]).toString(16);
    var hexb = parseInt(raw[2]).toString(16);
    hexr = hexr.length == 1 ? '0' + hexr : hexr;
    hexg = hexg.length == 1 ? '0' + hexg : hexg;
    hexb = hexb.length == 1 ? '0' + hexb : hexb;
    var hex = '#' + hexr + hexg + hexb;
    hexbox.innerHTML = hex;
}

function setColor(hexval) {
    colorit.setAttribute("style", "background:" + hexval.innerHTML);
}