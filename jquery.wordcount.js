/*
 * 
 * Textarea Word Count Jquery Plugin 
 * Version 1.1.0
 * 
 * Copyright (c) 2008 Roshan Bhattarai
 * website: http://roshanbh.com.np
 * 
 * Improved by Alan Hogan, 2009.
 * website: http://alanhogan.com 
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
*/

jQuery.fn.wordCount = function(params){
	var p = {
		counterElement:"display_count"
	};
	var total_words;
	
	if(params) {
		jQuery.extend(p, params);
	}
	
	//for each keypress function on text areas
	this.keypress(function()
	{ 
		total_words=this.value.split(/[\s\.\?]+/).length;
		jQuery('#'+p.counterElement).html(total_words);
	});	
	this.blur(function()
	{
		jQuery(this).keypress();
	});
	this.focus(function()
	{
		jQuery(this).keypress();
	});
};
