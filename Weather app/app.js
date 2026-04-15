const token = "YOUR_AUTH_TOKEN";

const urls = {
  temp: `https://blynk.cloud/external/api/get?token=${token}&v0`,
  hum:  `https://blynk.cloud/external/api/get?token=${token}&v1`,
  pres: `https://blynk.cloud/external/api/get?token=${token}&v2`,
  rain: `https://blynk.cloud/external/api/get?token=${token}&v3`
};

async function fetchData() {
  try {
    const [temp, hum, pres, rain] = await Promise.all([
      fetch(urls.temp).then(r => r.text()),
      fetch(urls.hum).then(r => r.text()),
      fetch(urls.pres).then(r => r.text()),
      fetch(urls.rain).then(r => r.text())
    ]);

    document.getElementById("temp").innerText = temp + " °C";
    document.getElementById("hum").innerText = hum + " %";
    document.getElementById("pres").innerText = pres + " hPa";
    document.getElementById("rain").innerText = rain;

  } catch (err) {
    console.log(err);
  }
}

setInterval(fetchData, 2000);