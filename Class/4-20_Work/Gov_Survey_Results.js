// Hilton A. Crossley Jr.
// April 20th, 2016
// Government Survey Personal Results

// Retrieve data from URL
var url=document.location.href;
//Call the getForm function to place into an object
$_GET=getForm(url);
//Stringify the object
var text=JSON.stringify($_GET);

