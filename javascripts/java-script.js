
    $(document).ready(function(){


	let rot1 = 0;
	$(".plant1").click(function() {
			rot1 += 90;
			$(this).css("transform", `rotate(${rot1}deg)`)
	});
	let rot2 = 0;
	$(".plant2").click(function() {
			rot2 += 90;
			$(this).css("transform", `rotate(${rot2}deg)`)
	});
	let rot3 = 0;
	$(".plant3").click(function() {
			rot3 += 90;
			$(this).css("transform", `rotate(${rot3}deg)`)
	});
	let rot4 = 0;
	$(".plant4").click(function() {
			rot4 += 90;
			$(this).css("transform", `rotate(${rot4}deg)`)
	});
	let rot5 = 0;
	$(".plant5").click(function() {
			rot5 += 90;
			$(this).css("transform", `rotate(${rot5}deg)`)
	});
	let rot6 = 0;
	$(".plant6").click(function() {
			rot6 += 90;
			$(this).css("transform", `rotate(${rot6}deg)`)
	});
	let rot7 = 0;
	$(".plant7").click(function() {
			rot7 += 90;
			$(this).css("transform", `rotate(${rot7}deg)`)
	});
	let rot8 = 0;
	$(".plant8").click(function() {
			rot8 += 90;
			$(this).css("transform", `rotate(${rot8}deg)`)
	});
	let rot9 = 0;
	$(".plant9").click(function() {
			rot9 += 90;
			$(this).css("transform", `rotate(${rot9}deg)`)
	});
	let rot10 = 0;
	$(".plant10").click(function() {
			rot10 += 90;
			$(this).css("transform", `rotate(${rot10}deg)`)
	});

    let rot11 = 0;
	$(".plant11").click(function() {
			rot11 += 90;
			$(this).css("transform", `rotate(${rot11}deg)`)
	});

    let rot12 = 0;
	$(".plant12").click(function() {
			rot12 += 90;
			$(this).css("transform", `rotate(${rot12}deg)`)
	});
    let rot13 = 0;
	$(".plant13").click(function() {
			rot13 += 90;
			$(this).css("transform", `rotate(${rot13}deg)`)
	});
});


		
	$(document).mousemove(function(event){
		$(".cursor").css({
		left: event.pageX,
		top: event.pageY,

		})
			  
	});
		