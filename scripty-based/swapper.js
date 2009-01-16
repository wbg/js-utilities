Effect.swapEffectTypes = {
	Blind: { show: 'BlindDown', hide: 'BlindUp' }, 
	Slide: { show: 'SlideDown', hide: 'SlideUp' }, 
	Appear: { show: 'Appear', hide: 'Fade' } 
}
Effect.SwapElements = function(element) {
	element = $(element);
	var options = Object.extend({
	    swapType:'Blind',
		swapParallel: true,
		swapContainer:'', // container for css search - add for some $$ speedup ...
		duration:'0.7'
	  }, arguments[1] || {});
	if( !options.swapParallel ) { options.queue = 'end'; }
	if( element.visible() ) {					
		eval('new Effect.'+Effect.swapEffectTypes[options.swapType]['hide']+'(element, options);');
	} else { 
		var swapClass = 'div.' + element.className;
		$$(options.swapContainer + ' ' + swapClass).each(function(e) {
			if( e.visible() ) { 
				eval('new Effect.'+Effect.swapEffectTypes[options.swapType]['hide']+'(e, options);'); 
			}
		});
		eval('new Effect.'+Effect.swapEffectTypes[options.swapType]['show']+'(element, options);');
	}
	return false;
}