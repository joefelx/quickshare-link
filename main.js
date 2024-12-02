// import QRCode from "qrcode  ";
const QRCode = require("qrcode");
var input = document.getElementById("input");
var img = document.getElementById("img");
var btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const val = input.value;

  QRCode.toDataURL(val, function (err, url) {
    img.src = url;
  });
});
