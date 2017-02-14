$( document ).ready(function() {
    function initparticles() {
        lines();
    }
    function lines() {
        $.each($(".particletext.lines"), function () {
            let linecount = ($(this).width() / 50) * 10;
            for (var i = 0; i <= linecount; i++) {
                $(this).append('<span class="particle" style="top:' + $.rnd(-30, 30) + '%; left:' + $.rnd(-10, 110) + '%;width:' + $.rnd(1, 3) + 'px; height:' + $.rnd(20, 80) + '%;animation-delay: -' + ($.rnd(0, 30) / 10) + 's;"></span>');
            }
        });
    }
    jQuery.rnd = (m, n) => {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
    };
    initparticles();
    $("#rules").click(() => {
        $("#rulesText").show();
        $("#loginbox").css("display", "none");
        $("#textInf").hide();
        $("#contactBox").hide();
    });
    $("#howPlay").click( () => {
        $("#textInf").show();
        $("#loginbox").css("display", "none");
        $("#rulesText").hide();
        $("#contactBox").hide();
    });
    $("#contact").click(() => {
        $("#contactBox").show();
        $("#loginbox").css("display", "none");
        $("#rulesText").hide();
        $("#textInf").hide();
    });
    $("#signIn").click( () => {
        $("#loginbox").show();
        $("#rulesText").hide();
        $("#textInf").hide();
        $("#contactBox").hide();
    });

    $("#signinlink").click( () => {
        $(".loginbox").show();
        $("#contactBox").hide();
        $("#signupbox").hide();
    });
    $("#registrationLink").click( () => {
        $("#contactBox").hide();
        $("#loginbox").hide();
        $("#signupbox").toggle();
    });
});
function displ(){
   let block = document.getElementsByClassName('displBlock');
			for(let i = 0; i<2; i++)
		if (block[i].style.display = "block")block[i].style.display = "none";
		let disp = function(){
			let none = document.getElementsByClassName('displNone'); 
			for(let i = 0; i<4; i++)
				if (none[i].style.display = "none")none[i].style.display = "block";		
					
		}
			disp();
}

function displTwo(){
    let two = document.getElementsByClassName('dispTwo');
       for(let i = 0; i<two.length; i++){
		   if(two[i].style.display="block") two[i].style.display="none";
		if(i>1)two[i].style.display = "block";
        
    }
}

function displThree(){
	
    let two = document.getElementsByClassName('dispTwo');
	let three = document.getElementsByClassName('dispThree');
       for(let i = 0; i<three.length; i++){
		   if(two[i].style.display="block") two[i].style.display="none";
		three[i].style.display = "block";
        
    }
}
function closeInfo(){
	let block = document.getElementsByClassName('displBlock');
	let three = document.getElementsByClassName('dispThree');
    let close = document.getElementsByClassName('closeInf');
       for(let i = 0; i<close.length; i++){
		   if(three[i].style.display="block") three[i].style.display="none";
		   close[i].style.display="none";
		   block[i].style.display = "block";
	   }
			
}