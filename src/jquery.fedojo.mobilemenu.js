(function($) {
	function setCookie(cname, cvalue, exdays, domain) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires+"; domain="+domain;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
		return "";
	}

	function setLS(name, value){
		window.localStorage.setItem(name, value);
	}

	function getLS(name){
		return window.localStorage.getItem(name);
	}

	$.fn.simpleMobileMenu = function() {
		console.log("go");
		var _arrayOfClicks = getLS('mmarray') ? JSON.parse(getLS('mmarray')) : [],
		_menu = $(this);

		console.log(_arrayOfClicks);

		if (_arrayOfClicks.length > 0) {
			_arrayOfClicks.forEach(function(element) {
				_menu.find("> ul > ul").eq(element).show();
			});
		}

		// console.log(_arrayOfClicks);

// $().querySelector('').addEventListener('Click', clickListener);
// clickListener = function(e) {...}
// 

		$(this).find('a').on( 'click', function(e) {
			var parentLi = $(e.currentTarget).parent();

			parentLi.hasClass('active') ? parentLi.removeClass('active') : parentLi.addClass('active');
			console.log("len: "+parentLi.length);

			if (parentLi.find('ul').length > 0) {
				e.preventDefault();
				var position = $(e.currentTarget).parents('ul').length - 1,
			            value = $(e.currentTarget).parent().index();
			        
			        _arrayOfClicks[position] = value;
				//_arrayOfClicks[$(e.currentTarget).parents('ul').length-1] = $(e.currentTarget).parent().index();

 				console.log(_arrayOfClicks);

 			}
 			else {
				setLS('mmarray', JSON.stringify(_arrayOfClicks));
// ser fallback for LocalStorage - cookies
 			}
 		});

		return this;
	};
}(jQuery));


(function($){
	$('document').ready(function() {

		$( "nav a" ).each(function(){

			$(this).parent().find('ul').length>0 ? $(this).addClass('hasChild') : null;
			// console.log($(this).parent().find('ul').length);
		})
		$('nav').simpleMobileMenu();
	});
})(jQuery);
