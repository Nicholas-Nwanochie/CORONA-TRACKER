var button = document.querySelector(".button");
var title = document.querySelector(".title");
var total_cases = document.querySelector(".total_cases");
var total_active_cases = document.querySelector(".total_active_cases");
var total_deaths = document.querySelector(".total_deaths");
var total_new_cases_today = document.querySelector(".total_new_cases_today");
var total_new_deaths_today = document.querySelector(".total_new_deaths_today");
var total_serious_cases = document.querySelector(".total_serious_cases");
var total_recovered = document.querySelector(".total_recovered");
var total_unresolved = document.querySelector(".total_unresolved");

// get references to select list and display text box
var sel = document.getElementById("scripts");
var el = document.getElementById("display");


////select option by value////
function getSelectedOption(sel) {
  var opt;
  for (var i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt;
}
////select option by value////



///button//////
button.addEventListener("click", function() {
 

  var opt = getSelectedOption(sel);
  el.value = opt.value;

  let url = "https://api.thevirustracker.com/free-api?countryTotal=" + el.value;
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(url);
      var titleValue = data["countrydata"][0]["info"]["title"];
      var total_casesValue = data["countrydata"][0]["total_cases"];
      var total_active_casesValue =
        data["countrydata"][0]["total_active_cases"];
      var total_recoveredValue = data["countrydata"][0]["total_recovered"];
      var total_unresolvedValue = data["countrydata"][0]["total_unresolved"];
      var total_deathsValue = data["countrydata"][0]["total_deaths"];
      var total_new_cases_todayValue =
        data["countrydata"][0]["total_new_cases_today"];
      var total_new_deaths_todayValue =
        data["countrydata"][0]["total_new_deaths_today"];
      var total_serious_casesValue =
        data["countrydata"][0]["total_serious_cases"];

      title.innerHTML = "Country: \n" + titleValue;
      total_cases.innerHTML = "total cases:\n " + total_casesValue;
      total_active_cases.innerHTML =
        "total active cases: \n" + total_active_casesValue;
      total_recovered.innerHTML =
        "total recovered cases: \n" + total_recoveredValue;
      total_unresolved.innerHTML =
        "total unresolved cases: \n" + total_unresolvedValue;
      total_deaths.innerHTML = "total death cases: \n" + total_deathsValue;
      total_new_cases_today.innerHTML =
        "total new cases today: \n" + total_new_cases_todayValue;
      total_new_deaths_today.innerHTML =
        "total deaths cases today: \n" + total_new_deaths_todayValue;
      total_serious_cases.innerHTML =
        "total serious cases: \n" + total_serious_casesValue;
    })
    .catch(err => alert("wrong country name"));
});
///button//////
