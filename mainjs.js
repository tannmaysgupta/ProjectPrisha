var scrht=window.innerHeight;
console.log(typeof scrht);
console.log(scrht);
var htminnav=window.innerHeight-50;
console.log(typeof htminnav);
console.log(htminnav);
var cc= document.getElementsByClassName('customCarousel')[0];
var ci= document.getElementsByClassName('carousel-inner')[0];
cc.style.height=scrht+"px";
ci.style.height=htminnav+"px";

var a=document.getElementsByTagName('nav')[0];

nav();

function nav()
{
	if(window.pageYOffset>htminnav){
		a.style.position="fixed";
		a.style.top=0+"px";
		a.style.bottom="";
	}
	else{
		a.style.position="absolute";
		a.style.bottom=0+"px";
		a.style.top="";
	}
	
}