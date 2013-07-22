(function($) {
	var addedAnimationId =[];
	$.fn.addSpriteAnimation = function(option) {
		if(!option.src){
			alert("no src");
			return;
		}
		if(!option.animTime) option.animTime =1;
		var isInfinite ="";
		if(option.isInfinite){
			isInfinite = " infinite";
		}
		for(var row in addedAnimationId){
			if(addedAnimationId == option.animationId){
				alert("Duplicate animationID "+option.animationId);
				return;
			}
		}
		addedAnimationId.push(option.animationId);
		this.css("width",option.stepWidth);
		this.css("height",option.stepHeight);
		this.css("background-image", "url("+option.src+")");
		this.css("background-repeat","repeat-x");
		this.css("overflow","hidden");
		this.css("webkit-animation",option.animationId+" "+option.animTime+"s steps("+(option.animationToX / option.stepWidth)+") "+isInfinite);
		addStyleRule("@-webkit-keyframes "+option.animationId,"0% { background-position:    0px 0; } 100% { background-position: "+(option.animationToX*-1)+"px 0; }");
		
		function addStyleRule(selector, declaration) {
			var isMSIE = /*@cc_on!@*/false;
			var sheet;
			if (document.styleSheets.length) {  // 最後のスタイルシートを取得
				sheet = document.styleSheets[document.styleSheets.length - 1];
			} else {  // StyleSheetがない場合、StyleSheetを作成
				if (isMSIE) {  // for IE8, Sleipnir
					sheet = document.createStyleSheet();
				} else {  // for FireFox, Opera, Safari, Crome
					var head = document.getElementsByTagName('head')[0];
					if(head == null){
						return;
					}
					var _style = document.createElement('style');
					head.appendChild(_style);
					sheet = _style.sheet;
				}
			}
			if (isMSIE) {  // for IE8, Sleipnir
				sheet.addRule(selector, declaration);
			} else {  // for FireFox, Opera, Safari, Crome
				sheet.insertRule(selector + '{' + declaration + '}', sheet.cssRules.length);
			}
		}
	};
})(jQuery);



