YUI.add("widget-base-ie",function(a,k){var d="boundingBox",f="contentBox",c="height",e="offsetHeight",g="",b=a.UA.ie,i=b<7,h=a.Widget.getClassName("tmp","forcesize"),j=a.Widget.getClassName("content","expanded");a.Widget.prototype._uiSizeCB=function(m){var o=this.get(d),l=this.get(f),n=this._bbs;if(n===undefined){this._bbs=n=!(b&&b<8&&o.get("ownerDocument").get("compatMode")!="BackCompat");}if(n){l.toggleClass(j,m);}else{if(m){if(i){o.addClass(h);}l.set(e,o.get(e));if(i){o.removeClass(h);}}else{l.setStyle(c,g);}}};},"@VERSION@",{"requires":["widget-base"]});