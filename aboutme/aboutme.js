$(document).ready(function () {
	
	// 섹션 링크 클릭 시 부드럽게 이동하기
	$(".menu-item a").on('click', function (event) {

            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
     });
        
        
	$('.slider-text-inner').fadeIn(400, function () {
		$(this).find('.h2').animate({ opacity: 1, top: 0 }, 500, function () {
		$(this).next('.h3').animate({ opacity: 1, top: 0 }, 500);
		});
	});
	
    updateColors();

    $(window).scroll(function () {
        // 스크롤 위치 확인
        var scrollPosition = $(window).scrollTop();

        // 스크롤 내릴 때
        if (scrollPosition >= $(".col1").offset().top) {

            $(".sidebar").css("background-color", "#fff");
            $(".sidebar a").css("color", "#555555");
            $(".profile-container").css("color", "#555555");
			$(".mini").css("color", "#555555");

            // hover 파란색
            $(".sidebar a").hover(
                function () {
                    $(this).css("color", "#2b07f8");
                },
                function () {
                    $(this).css("color", "#555555");
                }
            );
        } else {
            // 커서 올라가면 복원
            $(".sidebar").css("background-color", "#555555");
            $(".sidebar a").css("color", "#fff");
            $(".profile-container").css("color", "#fff");
			$(".mini").css("color", "#fff");
			
            // hover 파란색
            $(".sidebar a").hover(
                function () {
                    $(this).css("color", "#2b07f8");
                },
                function () {
                    $(this).css("color", "#fff");
                }
            );
        }
    });

	// 초키 컬러
    function updateColors() {
        
        if ($(window).scrollTop() >= $(".col1").offset().top) {
            $(".sidebar").css("background-color", "#fff");
            $(".sidebar a").css("color", "#555555");
            $(".profile-container").css("color", "#555555");
        	$(".mini").css("color", "#555555");
        } else {
            $(".sidebar").css("background-color", "#555555");
            $(".sidebar a").css("color", "#fff");
            $(".profile-container").css("color", "#fff");
        	$(".mini").css("color", "#fff");
        }
    }
    
	$(window).scroll(function () {
    	var scrollPosition = $(window).scrollTop();

    	$('#about, #strength, #skills, #project, #education, #certificate').each(function () {
      		var targetPosition = $(this).offset().top;
      		var $textbottom = $(this).find('.textbottom');

      		if (scrollPosition + $(window).height() > targetPosition) {
	
        $(this).css({
          	opacity: 1,
          	transform: 'translateY(0)'
        });

        	$textbottom.css({
          	opacity: 1,
          	transform: 'translateX(0)'
        });
      } else {
        // textbottom이 보이지 않을 때
        	$textbottom.css({
          	opacity: 0,
          	transform: 'translateX(-7000px)',
        });
      }
    });
  });
    
    
    
});