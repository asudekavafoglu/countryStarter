$(document).ready(function(){
  document.getElementById("updateCountry").addEventListener("click", findCountry());
  const countryRequested = document.getElementById('country-name').value
  const URL = `https://restcountries.eu/rest/v2/name/` + countryRequested + `?fullText=true`;
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.open( "GET", URL, false) // false for synchronous request
  xmlHttp.send(null)
  let data = xmlHttp.responseText
  let object = JSON.parse(data)
  console.log(object)
})
