YUI.add("io-nodejs",function(c,b){if(!c.IO.request){c.IO.request=require("request").defaults({jar:false});}var a=require("http").STATUS_CODES;var d=function(f){var e=[];Object.keys(f).forEach(function(g){e.push(g+": "+f[g]);});return e.join("\n");};c.IO.transports.nodejs=function(){return{send:function(i,h,f){f.notify("start",i,f);f.method=f.method||"GET";f.method=f.method.toUpperCase();var g={method:f.method,uri:h};if(f.data){if(c.Lang.isObject(f.data)){if(c.QueryString&&c.QueryString.stringify){g.body=c.QueryString.stringify(f.data);}else{}}else{if(c.Lang.isString(f.data)){g.body=f.data;}}if(g.method==="GET"){g.uri+=(g.uri.indexOf("?")>-1?"&":"?")+g.body;g.body="";}}if(f.headers){g.headers=f.headers;}if(f.timeout){g.timeout=f.timeout;}if(f.request){c.mix(g,f.request);}c.IO.request(g,function(j,k){if(j){i.c=j;f.notify(((j.code==="ETIMEDOUT")?"timeout":"failure"),i,f);return;}if(k){i.c={status:k.statusCode,statusCode:k.statusCode,statusText:a[k.statusCode],headers:k.headers,responseText:k.body,responseXML:null,getResponseHeader:function(l){return this.headers[l];},getAllResponseHeaders:function(){return d(this.headers);}};}f.notify("complete",i,f);f.notify(((k&&(k.statusCode>=200&&k.statusCode<=299))?"success":"failure"),i,f);});var e={io:i};return e;}};};c.IO.defaultTransport("nodejs");},"@VERSION@",{"requires":["io-base"]});