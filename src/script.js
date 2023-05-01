function updateTime() {
  // Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss:ss [<small>]A[</small>]");

  // Hong Kong
  let hongKongElement = document.querySelector("#hong-kong");
  let hongKongDateElement = hongKongElement.querySelector(".date");
  let hongKongTimeElement = hongKongElement.querySelector(".time");
  hongKongTime = moment().tz("Asia/Hong_Kong");

  hongKongDateElement.innerHTML = hongKongTime.format("MMMM Do YYYY");
  hongKongTimeElement.innerHTML = hongKongTime.format(
    "h:mm:ss:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
