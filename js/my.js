Object.defineProperty(Object.prototype, "mergeWith", {
    enumerable: false,
    value: function(from) {
        var props = Object.getOwnPropertyNames(from);
        var dest = this;
        props.forEach(function(name) {
            if (name in from) {
                var destination = Object.getOwnPropertyDescriptor(from, name);
                Object.defineProperty(dest, name, destination);
            }
        });
        return this;
    }
});

if(typeof _ce('div').innerText == "undefined"){
	HTMLElement.prototype.__defineSetter__("innerText", function(text){
		this.textContent = text;
	});
	HTMLElement.prototype.__defineGetter__("innerText", function(){
		return this.textContent;
	});
}

if(typeof String.prototype.contains === 'undefined') { 
	String.prototype.contains = function(it) { return this.indexOf(it) != -1; }; 
}

HTMLElement.prototype.blink = function(speed, timeout){
	var self = this;
	self.blinkStop(0);
	if(speed >= 0.5){
		self.interval = speed * 1000;
	}
	else{
		self.interval = 500;
	}
	self.style.opacity = 0.2;
	self.timer = setInterval(function(){
		if(self.style.opacity != 1){
			self.style.opacity = 1;
		}else{
			self.style.opacity = 0.2;
		}
	},self.interval);
	if(timeout > 0){
		self.blinkStop(timeout);
	}
};
HTMLElement.prototype.blinkStop = function(timeout){
	var self = this;
	if (timeout > 0) {
		setTimeout(function(){
			clearInterval(self.timer);
			self.style.opacity = 1;
		}, timeout);
	}
	else{
		clearInterval(self.timer);
		self.style.opacity = 1;
	}
};

/**
 * return string trimed
 *
 */
if(typeof(String().ltrim) == "undefined"){
	String.prototype.ltrim = function(chr){
		chr = chr || "\\s";
		return this.replace(new RegExp("^[" + chr + "]+", "g"), "");
	};
}
if(typeof(String().rtrim) == "undefined"){
	String.prototype.rtrim = function(chr){
		chr = chr || "\\s";
		return this.replace(new RegExp("[" + chr + "]+$", "g"), "");
	};
}
if(typeof(String().trim) == "undefined"){
	String.prototype.trim = function(chr){
		return this.ltrim(chr).rtrim(chr);
	};
}

/**
 * resume text
 *
 * @param limit (int) characters count limit
 * @param sep (char) cut at last separator before limit
 * @param dir (bool) true cut end of text, false cut from start
 */
String.prototype.resume = function(limit, sep, dir){
        sep = (!sep)?'':sep;
        var chaine = this.replace(/(<([^>]+)>)/ig, '').replace(/[\n\r]/, '');
        if (chaine.length > limit){
                if(!dir){
                        chaine = chaine.substr(-limit);
                        var cut = chaine.indexOf(sep);
                        chaine = "..." + chaine.substr(cut);
                }
                else{
                        chaine = chaine.substr(0, limit);
                        if(sep != ''){
                                cut = chaine.lastIndexOf(sep);
                        }
                        else{
                                cut = limit;
                        }
                        chaine = chaine.substr(0, cut) /*+ "..."*/;
                }
        }
        return(chaine);
};

/**
 * create element
 *
 * @param tagname (string) the element tag name
 */
function _ce(tagname){
	return document.createElement(tagname);
}

/**
 * create text node
 *
 * @param text (string)
 */
function _ctn(txt){
	return document.createTextNode(txt);
}

/**
 * get element by ID
 *
 * @param eid (string) the element ID
 */
function _gid(eid){
	return document.getElementById(eid);
}

/**
 * load external js
 *
 * @param js (string) javascript file
 */
function loadJS(js){
    var script = _ce('script');
	script.type = 'text/javascript';
	script.src = js;
	document.body.appendChild(script);
	return script;
}
if (!this.JSON) {
	loadJS('http://static.b1project.com/js/json2.js');
}

/**
 * Create an XMLHttpRequest object
 */
function initAjax(){
	if (window.XMLHttpRequest){
		return new XMLHttpRequest();     // Firefox, Safari, ...
	}
	else if (window.ActiveXObject){
		return new ActiveXObject('Microsoft.XMLHTTP');    // Internet Explorer 
	}
	else{
		return false;
	}
}

/**
 * Send an XMLHttpRequest
 *
 * @param p (string) the script url which will be called
 * @param xhr (object) XMLHttpRequest object
 */
function getAjax(p,xhr, async){
	xhr.open("GET",p,async);
	//xhr.setRequestHeader('Accept', 'application/json');
	xhr.send(null);
}

/**
 * Send a POST XMLHttpRequest
 *
 * @param p (string) the script url which will be called
 * @param xhr (object) XMLHttpRequest object
 */
function postAjax(p,xhr, data, async){
	xhr.open("POST",p,async);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.send(data);
}

/**
 * Perform an asynchronious request and send result to callback function
 *
 * @param url (string) the script url which will be called
 * @param callback (funtion) function executed on script response
 * @param args (object) parameters sent to callback function
 * @param method (string) post or get
 * @param data (string) post data
 */
function remoteCall(url, callback, args, method, data, async){
	//var re = /.+/;
	var xhr = initAjax();
	if(method == 'post'){
		postAjax(url,xhr,data, async);
	}
	else{
		getAjax(url,xhr, async);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			var mText = xhr.responseText;
			if(xhr.status == 200){
				callback(mText, args);
			}
		}
	};
}

/**
 * Perform an async/synchronious request and evaluate result as json object
 *
 * @param script (string) the script url which will be called
 * @param callback (function) callback method
 * @param async (bool) perform asynchronous call
 */
function getJSON(script, callback, async){
	remoteCall(script, function(r,args){
		callback(JSON.parse(r));
	}, null, 'get', null, async);
}

/**
 * Perform an async/synchronious request and return result as text
 *
 * @param script (string) the script url which will be called
 * @param callback (function) callback method
 * @param async (bool) perform asynchronous call
 */
function getText(script, callback, async){
	remoteCall(script, function(r,args){
		callback(r);
	}, null, 'get', null, async);
}

/**
 * load external css
 *
 * @param js (string) javascript file
 */
function loadCSS(css, id){
	var link = null;
	if(id){
		link = _gid(id);
		if(typeof link != 'undefined'){
			link.href = css;
			return;
		}
	}
    link = _ce('link');
	link.rel = 'stylesheet';
	link.href = css;
	link.type = 'text/css';
	link.media = 'all';
	link.id = id;
	document.body.appendChild(link);
	return link;
}

Array.prototype.valueMatch = function (value) {
    var i;
    for (i=0; i < this.length; i++) {
        if (this[i].match(value)) {
           return i;
       }
   }
   return -1;
};

Element.prototype.hasClassName = function(className){
	var classes = new Array();
	classes = this.className.split(' ');
	var i = classes.valueMatch(className);
	return i;
};

Element.prototype.toggleClassName = function(className){
	var classes = new Array();
	classes = this.className.split(' ');
	var i = classes.indexOf(className);
	if(i == -1){
		classes.push(className);
		this.className = classes.join(' ').trim(' ');
		return true;
	}
	else{
		classes.splice(i, 1);
		this.className = classes.join(' ').trim(' ');
		return true;
	}
};

Element.prototype.addClassName = function(className){
	var classes = new Array();
	classes = this.className.split(' ');
	if(classes.indexOf(className) == -1){
		classes.push(className);
		this.className = classes.join(' ').trim(' ');
		return true;
	}
	return false;
};

Element.prototype.remClassName = function(className){
	var classes = new Array();
	classes = this.className.split(' ');
	var i = classes.valueMatch(className);
	if(i != -1){
		classes.splice(i, 1);
		this.className = classes.join(' ').trim(' ');
		return true;
	}
	return false;
};

Element.prototype.replaceClassName = function(r, className){
	var classes = new Array();
	classes = this.className.split(' ');
	var i = classes.valueMatch(r);
	if(i != -1){
		classes[i] = className;
		this.className = classes.join(' ').trim(' ');
	}
	return i;
};

Element.prototype.replaceOrAddClassName = function(r, className){
	var i = this.replaceClassName(r, className);
	if(i == -1){
		return this.addClassName(className);
	}
	return i;
};


