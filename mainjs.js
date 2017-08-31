var scrht=window.innerHeight;
var htminnav=window.innerHeight-50;
var cc= document.getElementsByClassName('customCarousel')[0];
var ci= document.getElementsByClassName('carousel-inner')[0];
cc.style.height=scrht+"px";
ci.style.height=htminnav+"px";

nav();

function nav()
{
var a=document.getElementsByTagName('nav')[0];
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

function sort()
{
	var ch= $
}