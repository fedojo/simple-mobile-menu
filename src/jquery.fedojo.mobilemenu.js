(function($) {
	function setLS(name, value){
		window.localStorage.setItem(name, value);
	}

	function getLS(name){
		return window.localStorage.getItem(name);
	}

	$.fn.simbleMobileMenu = function() {
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

		$(this).find('a').on( 'click', function(e) {
			var parentLi = $(e.currentTarget).parent();

			parentLi.hasClass('active') ? parentLi.removeClass('active') : parentLi.addClass('active');
			console.log("len: "+parentLi.length);

			if (parentLi.find('ul').length > 0) {
				e.preventDefault();

				_arrayOfClicks[$(e.currentTarget).parents('ul').length-1] = $(e.currentTarget).parent().index();

 				console.log(_arrayOfClicks);

 			}
 			else {
				setLS('mmarray', JSON.stringify(_arrayOfClicks));
 			}
 		});

		return this;
	};
}(jQuery));


(function($){
	$('document').ready(function() {

		$('nav').simbleMobileMenu();
	});
})(jQuery);
