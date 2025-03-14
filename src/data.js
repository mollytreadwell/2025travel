import imgOne from "./images/apricale.jpg";
import imgTwo from "./images/baja.jpg";
import imgThree from "./images/mccall.jpeg";
import pageOne from "./components/Apricale";
import pageTwo from "./components/Baja";
import pageThree from "./components/Idaho";
import { Link } from "react-router-dom";

export const data = [
	{
		id: 1,
		date: "May 2025",
		title: "Apricale, Italy",
		page: <Link>{pageOne}</Link>,
		description: 
"This picturesque midieval village is perfectly situated between the Maritime Alps and the Italian Riviera, offering visitors a unique opprotunity to experience natural splendor and metropolitan delights in the same day.",
		coverImg: imgOne,
		country: "ITALY",
		googleMapLink: 
"https://www.bing.com/maps?&ty=30&q=Apricale%2C%20Liguria%2C%20Italy&satid=id.sid%3A22d49de4-c394-4f55-51cc-437bdc0e8d8f&vdpid=7208251824132849665&mb=43.97658~7.584932~43.833117~7.728899&cardbg=%23F98745&tt=Apricale%2C%2018035%2C%20Liguria%2C%20Italy&tsts0=%2526ty%253D30%2526q%253DApricale%25252C%252520Liguria%25252C%252520Italy%2526satid%253Did.sid%25253A22d49de4-c394-4f55-51cc-437bdc0e8d8f%2526vdpid%253D7208251824132849665%2526mb%253D43.97658~7.584932~43.833117~7.728899%2526cardbg%253D%252523F98745&tstt0=Apricale%2C%2018035%2C%20Liguria%2C%20Italy&cp=43.904957~7.577335&lvl=12.098613&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027"	},
	{
		id: 2,
		date: "October 2025",
		title: "Guadalupe Canyon, Mexico",
		page: {pageTwo},
		description: 
"Experience stillness like never before. Guadalupe Canyon Oasis offers private naturally-fed hot spring pools amongst the dramatic desert mountains of northern Baja.",
		coverImg: imgTwo,
		country: "MEXICO",
		googleMapLink: 
"https://www.bing.com/maps?&ty=18&q=quadalupe%20hot%20springs%20baja&ss=ypid.YN9001x14792530725675845554&segment=Hotel&mb=32.160455~-115.794986~32.149174~-115.785352&description=21855%20Municipio%20de%20Mexicali%2C%20Baja%20California%20Sur%C2%B7Zona%20de%20acampada&cardbg=%23219AB6&tt=Canon%20de%20Guadalupe&tsts0=%2526ty%253D18%2526q%253Dquadalupe%252520hot%252520springs%252520baja%2526ss%253Dypid.YN9001x14792530725675845554%2526segment%253DHotel%2526mb%253D32.160455~-115.794986~32.149174~-115.785352%2526description%253D21855%252520Municipio%252520de%252520Mexicali%25252C%252520Baja%252520California%252520Sur%2525C2%2525B7Zona%252520de%252520acampada%2526cardbg%253D%252523219AB6&tstt0=Canon%20de%20Guadalupe&cp=32.154814~-115.795491&lvl=16&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027"	},
{
	id: 3,
	date: "December 2025",
	title: "McCall, Idaho",
	page: {pageThree},
	description: "The sweetest little resort town you ever did see. A scenic two hours north of Boise, McCall hosts an abundance of wilderness potential as well as a cute downtown with wide dining options, western character, and friendly locals.",
	coverImg: imgThree,
	country: "UNITED STATES",
	googleMapLink: 
"https://www.bing.com/maps?&ty=30&q=McCall%2C%20Idaho&satid=id.sid%3A373752ff-a7e5-5db8-3ee2-d61e5e6eaa29&vdpid=5055443468113936385&mb=44.934113~-116.192597~44.866024~-116.036376&cardbg=%23F98745&tt=McCall%2C%20ID%2C%2083638&tsts0=%2526ty%253D30%2526q%253DMcCall%25252C%252520Idaho%2526satid%253Did.sid%25253A373752ff-a7e5-5db8-3ee2-d61e5e6eaa29%2526vdpid%253D5055443468113936385%2526mb%253D44.934113~-116.192597~44.866024~-116.036376%2526cardbg%253D%252523F98745&tstt0=McCall%2C%20ID%2C%2083638&cp=44.900062~-116.152013&lvl=13.181422&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027"}
]