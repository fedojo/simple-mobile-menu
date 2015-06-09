(function($) {
	function setLS(name, value){
		window.localStorage.setItem(name, value);
	}

	function getLS(name){
		return window.localStorage.getItem(name);
	}

	$.fn.simpleMobileMenu = function(settingsObj) {
		var _arrayOfClicks = getLS('mmarray') ? JSON.parse(getLS('mmarray')) : [],
			_menu = $(this),
			_currentLevel = 0;

		if (settingsObj) {
			
		}

			_menu.find( "a" ).each(function(){
				$(this).parent().find('ul').length>0 ? $(this).parent().addClass('hasChild') : null;
			})

		if (_arrayOfClicks.length > 0) {
			var ulstring = '> ul ';

			for (var i=0; i<_arrayOfClicks.length; i++) {
					ulstring +='> li:eq('+_arrayOfClicks[i]+') ';

				el = _menu.find(ulstring);
				el.addClass('active');

				ulstring += '> ul ';
			}
		}

		$(this).find('a').on( 'click', function(e) {
			var parentLi = $(e.currentTarget).parent();

			if (parentLi.hasClass('hasChild')) {
				e.preventDefault();
				var position = $(e.currentTarget).parents('ul').length - 1,
            value = $(e.currentTarget).parent().index();

				parentLi.hasClass('active') ? parentLi.removeClass('active') : parentLi.addClass('active');

	      _arrayOfClicks[position] = value;
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
		$('nav').simpleMobileMenu();
	});
})(jQuery);
