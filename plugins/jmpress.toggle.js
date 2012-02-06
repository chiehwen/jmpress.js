(function( $, document, window, undefined ) {
	'use strict';
	$.jmpress("register", "toggle", function( key, config, initial ) {
		var jmpress = this;
		$(document).bind("keydown", function(event) {
			if($(jmpress).jmpress("initialized")) {
				$(jmpress).jmpress("deinit");
			} else {
				$(jmpress).jmpress(config);
			}
		});
		if(initial) {
			$(jmpress).jmpress(config);
		}
	});
}(jQuery, document, window));
