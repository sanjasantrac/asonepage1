

// var hamMenu = document.getElementsByClassName('nav-bar');
// var sideMenu = document.getElementById('side-nav');

// hamMenu.onclick = function(e){
// 	e.preventDefault();
// 	sideMenu.style.display = "block";

// }
// console.log(sideMenu);

// var closeButton = document.getElementsByClassName('close-btn');

// closeButton.onclick = function(e){
// 	e.preventDefault();
// 	sideMenu.style.display = "none";
// }


$(document).ready(function(){
    $(".nav-bar").click(function(){
        $("#side-nav").slideToggle("slow");
    });
});


$(document).ready(function(){
    $(".close-btn").click(function(){
        $("#side-nav").slideUp("slow");
    });
});
// $(document).ready(function(){

// 	// smooth scroll
// 	$('nav ul li a').on('click', function(){
// 		$('html, body').animate({
// 			scrollTop: $(this.hash).offset().top
// 		}, 1000);
// 	});

// });