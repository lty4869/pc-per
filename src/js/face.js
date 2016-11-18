var olist = $('.nav-list');
function mouseover(){
	console.log('1');
	olist.css({'display':'block'});
}

function mouseout(){
	console.log('2');
	olist.css({'display':'none'});
}

$('.nav-main').on('mouseover', function(){
	console.log('3');
	mouseover();
})

$('.nav-main').on('mouseout', function(){
	console.log('4');
	mouseout();
})