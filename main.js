setInterval(() => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      latitude.textContent = `Latitude: (${res.coords.latitude})`;
      longitude.textContent = `Longitude: (${res.coords.longitude})`;
    },
    (err) => {
      console.error(err);
    }
  );
}, 500);

const ul = document.createElement("ul");
const latitude = document.createElement("li");
const longitude = document.createElement("li");
ul.append(latitude, longitude);
document.body.appendChild(ul);
