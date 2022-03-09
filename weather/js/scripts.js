const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById("currentdate").textContent = fulldate;

const date2 = document.querySelector('#currentdate2');

// try {
//   const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//   date2.textContent = new Date().toLocaleDateString('en-UK', options);
// } catch (e) {
//   alert('Error with code or your browser does not support Locale');
// }

if (dayName == "Wednesday") {
	var banner = document.createElement("div");
	banner.className = "b";
	banner.innerHTML = 'Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.';

	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontSize = "x-large";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.padding = "20px 20px 20px 20px";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.backgroundColor = "#f5cf87";
}

