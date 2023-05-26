
var arr = [];

try {
  fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCIpKmUKO0lql6jmApVEk0ywbNGRXkyZJE")
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch fonts');
      }
      return response.json();
    })
    .then((data) => {
    //   console.log(data);
      for (const item of data.items) {
        arr.push(item.family);
      }
      module.exports = arr
    })
    .catch((error) => {
        console.error(error);
    });
} catch (error) {
    console.error(error);
}

