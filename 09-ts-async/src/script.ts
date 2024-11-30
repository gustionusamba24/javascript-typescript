const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// Render country
function renderCountry(data: any, className = "") {
  const language = Object.keys(data.languages);
  const currency = Object.keys(data.currencies);

  const html = `
    <article class="country" ${className}>
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[language[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[currency[0]].name
            }</p>
        </div>
    </article>
    `;

  countriesContainer?.insertAdjacentHTML("beforeend", html);
  (countriesContainer as HTMLElement).style.opacity = "100";
}

// Promises and fetch API
const request = fetch("https://restcountries.com/v3.1/name/indonesia");
console.log(request);

function getCountryData(country: string): void {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response: Response) => response.json())
    .then((data: any) => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response: Response) => response.json())
    .then((data: any) => renderCountry(data[0], "neighbour"));
}
getCountryData("indonesia");
