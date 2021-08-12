const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

//createArrayOfArrays

function makeList(countriesArray) {
  const createArrayOfArrays = [];
  for (let i = 0; i < countriesArray.length; i++) {
    let arrVal = countriesArray[i].toLowerCase();

    createArrayOfArrays.push([
      arrVal.charAt(0).toUpperCase() + arrVal.slice(1),
      arrVal.substring(0, 3).toUpperCase(),
      arrVal.length,
    ]);
  }
  return console.log(createArrayOfArrays);
}

makeList(countries);
