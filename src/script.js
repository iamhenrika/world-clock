function updateTime() {
  // Chicago
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    chicagoTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Rio
  let rioElement = document.querySelector("#rio");
  if (rioElement) {
    let rioDateElement = rioElement.querySelector(".date");
    let rioTimeElement = rioElement.querySelector(".time");
    rioTime = moment().tz("Etc/GMT+3");

    rioDateElement.innerHTML = rioTime.format("MMMM Do YYYY");
    rioTimeElement.innerHTML = rioTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Lagos
  let lagosElement = document.querySelector("#lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Hong Kong
  let hongKongElement = document.querySelector("#hong-kong");
  if (hongKongElement) {
    let hongKongDateElement = hongKongElement.querySelector(".date");
    let hongKongTimeElement = hongKongElement.querySelector(".time");
    hongKongTime = moment().tz("Asia/Hong_Kong");

    hongKongDateElement.innerHTML = hongKongTime.format("MMMM Do YYYY");
    hongKongTimeElement.innerHTML = hongKongTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);