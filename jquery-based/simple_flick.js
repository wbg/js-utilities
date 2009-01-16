/**
 * very simple interface to flickr
 * needs a proxy using some scripting or simple mod_rewrite
 * (c) 2009 rw@roman-weinberger.net
 * License: MIT
 */
SimpleFlick = function() {
	this.rest = 'rest/?';
	this.photo_base = 'http://farm4.static.flickr.com/';
	this.apiCall = function(method, args) {
		args.format = 'json';
		args.nojsoncallback = 1;
		args.method = method;
		var url = this.rest + jQuery.param(args);
		return eval('('+$.ajax({url:url,async: false}).responseText+')');
	}
	this.photoUrl = function(p) {
		return this.photo_base + p.server + "/" + p.id + "_" + p.secret + ".jpg";
	}
};