<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

document.addEventListener("deviceready", onDeviceReady, false);

var boolean hold = false;
var boolean tap = false;
var int swipe = 0;

function onDeviceReady() 
{
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);	
}

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();		
 	}
		hold = true;
	);                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
		
 	}
		tap = true;
	); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
		
  	}
		swipe = 1;
	);   

	$('#swipetext').on("swiperight",function(){
		$(this).css('color', 'blue');
		
  	}
		swipe = 2;
	);   

});

function onPause() 
{
	window.localStorage.setItem("hold",hold);
	window.localStorage.setItem("tap",tap);
	window.localStorage.setItem("tap",swipe);

}
	

function onResume() 
{
		if(window.localStorage.getItem("hold") == true)
		{
			#tapholdtext.hide();
			hold = true;
		}

}