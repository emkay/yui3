YUI.add("uploader",function(c,b){var a=c.config.win;if(a&&a.File&&a.FormData&&a.XMLHttpRequest){c.Uploader=c.UploaderHTML5;}else{if(c.SWFDetect.isFlashVersionAtLeast(10,0,45)){c.Uploader=c.UploaderFlash;}else{c.namespace("Uploader");c.Uploader.TYPE="none";}}},"@VERSION@",{"requires":["uploader-html5","uploader-flash"]});