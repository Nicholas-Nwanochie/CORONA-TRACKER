# CORONA-TRACKER
The Corona app was made after the virus outbreak in America and after my grandmother contracted the virus. I wanted to help spread awareness by bring hard facts to as many people as I could.
	
I did this by using the API,’https://thevirustracker.com/api ‘, which has stats based on countries around the world. The stats I decided to focus on were active cases, recovered cases, unresolved cases, total deaths, total cases, serious cases, and the new cases & deaths of the day. The API selects the country information to get by the country ID, that it attaches to the end of the API address, "https://thevirustracker.com/free-api?countryTotal=" + “ID”. I allowed users to pick which country to choose by making a drop down list with each countries name. As the API only uses the ID it assings each country and not the name, I made a function that will assign the dropbox text content as the value for each option on the list,which is the country ID, instead of the country name the end user will see. Using this function I was able to direct the API to the country the user wanted information about.

Because of recent changes of the API from the rush to put it out quickly, there is now an error on their part causing a CORS error to occur. While use of a proxy has been ineffective. The makers of the site have contacted me and said the error will be fixed as soon as they are able.


