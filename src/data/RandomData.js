/* this function just makes some random data.
NOT A PART OF ACTUAL CODE */

const data = [];

// Generating random integer in range [x, y]
// Both values are inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// program to generate random strings
function getRandomString() {
  return Math.random().toString(36).substring(2, 9);
}

// program to generate random coordinate
function getRandomLatLng() {
  //   var bounds = [
  //       [-20.505, -100.09],
  //       [70.505, 150.09],
  //     ],
  //     // southWest = bounds.getSouthWest(),
  // northEast = bounds.getNorthEast(),
  let lngSpan = 150 + 100,
    latSpan = 70.5 + 20.505;
  return new Object({
    lat: -20.505 + latSpan * Math.random(),
    lng: -100.09 + lngSpan * Math.random(),
  });
}
let obj = {
  name: getRandomString(),
  values: {
    insights: getRandomInt(0, 100),
    mentions: getRandomInt(0, 100),
    rating: getRandomInt(0, 5),
  },
};

for (let i = 0; i < 500; i++) {
  let obj = {
    name: getRandomString(),
    values: {
      insights: getRandomInt(0, 100),
      mentions: getRandomInt(0, 100),
      rating: getRandomInt(0, 5),
    },
    position: getRandomLatLng(),
  };
  data.push(obj);
}
data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
data.push({...obj,position:{ lng: -79.3831843, lat: 43.653225 }})
//console.log(data);
export default data;
