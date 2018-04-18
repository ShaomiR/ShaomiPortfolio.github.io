var txt = "I am Shaomi Rahman. I am looking for a job that requires hard work and gives a chance to exercise my creativity with an opprtunity to learn.";
var speed = 90;
var i=0;
function typewriter(){
		if(i<txt.length){
		document.getElementById('type').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typewriter,speed);
	}
}
typewriter();
$(document).ready(function(){
	$('.links').click(function(e){
		var linkHref = $(this).attr('href');
		$("html,body").animate({
			scrollTop : $(linkHref).offset().top
		},1100);
		e.preventDefault();
	});
});

