var BetterInPage = {
	start : function() {
		var options = Object.extend({
			    cssSelector:'a',
				duration:0.7
		}, arguments[0] || {});			
		$$(options.cssSelector).each(function(element) {
			Event.observe($(element), 'click', function(event) {
				if( element.href.include('#') ) {
					new Effect.ScrollTo(element.href.gsub('.*#',''), { duration:options.duration });
					Event.stop(event);
				}
			});
		});
	}
}