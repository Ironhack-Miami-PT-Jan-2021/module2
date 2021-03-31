const countryInput = document.querySelector("#country-name");
const getCountryButton = document.querySelector("#get-country-button");
const flagImg = document.querySelector("#flag");
const countryNameH3 = document.querySelector("#country-name-h3");

// console.log(countryInput, )

getCountryButton.addEventListener("click", () => {
  console.log("click");
  const countryName = countryInput.value;
  axios
    .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((responseFromAPI) => {
      console.log(responseFromAPI.data[0]);
      const { name, flag } = responseFromAPI.data[0];
      countryNameH3.innerHTML = name;
      flagImg.src = flag;
    });
});
