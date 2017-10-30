
function updateProgress(){
	var p = document.getElementsByTagName('progress')[0];
	p.value = p.value + 1;
	if(p.value === p.max){
		playNote('B1',false);
		playNote('D2',false);
		playNote('G1',false);
		setTimeout(function(){
			playNote('E2b',false);
		}, 200);
		setTimeout(function(){
			playNote('E2',false);
		}, 300);
		setTimeout(function(){
			playNote('G2',false);
		}, 400);
		setTimeout(function(){
			playNote('F2',false);
		}, 900);
		setTimeout(function(){
			playNote('A1',false);
			playNote('C2',false);
			playNote('F2',false);
			document.body.removeChild(document.getElementById('loader'));
		}, 1000);
	}
}
var scale = {
	'C1': [0, 0.4],
	'C1d': [1, 1.4],
	'D1': [2, 2.4],
	'E1b': [3, 3.4],
	'E1': [4, 4.4],
	'F1': [5, 5.4],
	'F1d': [6, 6.4],
	'G1': [7, 7.4],
	'G1d': [8, 8.4],
	'A1': [9, 9.4],
	'B1b': [10, 10.4],
	'B1': [11, 11.4],
	'C2': [12, 12.4],
	'C2d': [13, 13.4],
	'D2': [14, 14.4],
	'E2b': [15, 15.4],
	'E2': [16, 16.4],
	'F2': [17, 17.4],
	'F2d': [18, 18.4],
	'G2': [19, 19.4],
	'G2d': [20, 20.4],
	'A2': [21, 21.4],
	'B2b': [22, 22.4],
	'B2': [23, 23.4]
};

var end = 0;

var chords = {
	'none':false,
	'major':{
		'C1': ['C1','E1','G1'],
		'C1d': ['C1d','F1','G1d'],
		'D1': ['D1','F1d','A1'],
		'E1b': ['E1b','G1','B1b'],
		'E1': ['E1','G1d','B1'],
		'F1': ['F1','A1','C2'],
		'F1d': ['F1d','B1b','C2d'],
		'G1': ['G1','B1','D2'],
		'G1d': ['G1d','C2','E2b'],
		'A1': ['A1','C2d','E2'],
		'B1b': ['B1b','D2','F2'],
		'B1': ['B1','E2b','F2d'],
		'C2': ['C2','E2','G2'],
		'C2d': ['C2d','F2','G2d'],
		'D2': ['D2','F2d','A2'],
		'E2b': ['E2b','G2','B2b'],
		'E2': ['E2','G2d','B2'],
		'F2': ['F2','A2'],
		'F2d': ['F2d','B2b'],
		'G2': ['G2','B2'],
		'G2d': ['G2d'],
		'A2': ['A2'],
		'B2b': ['B2b'],
		'B2': ['B2']
	},
	'minor':{
		'C1': ['C1','E1b','G1'],
		'C1d': ['C1d','E1','G1d'],
		'D1': ['D1','F1','A1'],
		'E1b': ['E1b','F1d','B1b'],
		'E1': ['E1','G1','B1'],
		'F1': ['F1','G1d','C2'],
		'F1d': ['F1d','A1','C2d'],
		'G1': ['G1','B1b','D2'],
		'G1d': ['G1d','B1','E2b'],
		'A1': ['A1','C2','E2'],
		'B1b': ['B1b','C2d','F2'],
		'B1': ['B1','D2','F2d'],
		'C2': ['C2','E2b','G2'],
		'C2d': ['C2d','E2','G2d'],
		'D2': ['D2','F2','A2'],
		'E2b': ['E2b','F2d','B2b'],
		'E2': ['E2','G2','B2'],
		'F2': ['F2','G2d'],
		'F2d': ['F2d','A2'],
		'G2': ['G2','B2b'],
		'G2d': ['G2d','B2'],
		'A2': ['A2'],
		'B2b': ['B2b'],
		'B2': ['B2']
	}
};

function onPianoKeyDown(e){
	if(!e){
		e = window.event;
	}
	var k = e.keyCode;
	switch(k){
		case 81:
			playNote('C1',document.getElementsByClassName('C')[0]);
		break;
		case 83:
			playNote('D1',document.getElementsByClassName('D')[0]);
		break;
		case 68:
			playNote('E1',document.getElementsByClassName('E')[0]);
		break;
		case 70:
			playNote('F1',document.getElementsByClassName('F')[0]);
		break;
		case 71:
			playNote('G1',document.getElementsByClassName('G')[0]);
		break;
		case 72:
			playNote('A1',document.getElementsByClassName('A')[0]);
		break;
		case 74:
			playNote('B1',document.getElementsByClassName('B')[0]);
		break;
		case 75:
			playNote('C2',document.getElementsByClassName('C')[1]);
		break;
		case 76:
			playNote('D2',document.getElementsByClassName('D')[1]);
		break;
		case 77:
			playNote('E2',document.getElementsByClassName('E')[1]);
		break;
		case 87:
			playNote('F2',document.getElementsByClassName('F')[1]);
		break;
		case 88:
			playNote('G2',document.getElementsByClassName('G')[1]);
		break;
		case 67:
			playNote('A2',document.getElementsByClassName('A')[1]);
		break;
		case 86:
			playNote('B2',document.getElementsByClassName('B')[1]);
		break;
		case 65:
			playNote('C1d',document.getElementsByClassName('Cd')[0]);
		break;
		case 90:
			playNote('E1b',document.getElementsByClassName('Eb')[0]);
		break;
		case 69:
			playNote('F1d',document.getElementsByClassName('Fd')[0]);
		break;
		case 82:
			playNote('G1d',document.getElementsByClassName('Gd')[0]);
		break;
		case 84:
			playNote('B1b',document.getElementsByClassName('Bb')[0]);
		break;
		case 89:
			playNote('C2d',document.getElementsByClassName('Cd')[1]);
		break;
		case 85:
			playNote('E2b',document.getElementsByClassName('Eb')[1]);
		break;
		case 73:
			playNote('F2d',document.getElementsByClassName('Fd')[1]);
		break;
		case 79:
			playNote('G2d',document.getElementsByClassName('Gd')[1]);
		break;
		case 80:
			playNote('B2b',document.getElementsByClassName('Bb')[1]);
		break;
	}
};

function onPianoKeyUp(e){
	if(!e){
		e = window.event;
	}
	var k = e.keyCode;
	switch(k){
		case 81:
			pauseNote(document.getElementsByClassName('C')[0]);
		break;
		case 83:
			pauseNote(document.getElementsByClassName('D')[0]);
		break;
		case 68:
			pauseNote(document.getElementsByClassName('E')[0]);
		break;
		case 70:
			pauseNote(document.getElementsByClassName('F')[0]);
		break;
		case 71:
			pauseNote(document.getElementsByClassName('G')[0]);
		break;
		case 72:
			pauseNote(document.getElementsByClassName('A')[0]);
		break;
		case 74:
			pauseNote(document.getElementsByClassName('B')[0]);
		break;
		case 75:
			pauseNote(document.getElementsByClassName('C')[1]);
		break;
		case 76:
			pauseNote(document.getElementsByClassName('D')[1]);
		break;
		case 77:
			pauseNote(document.getElementsByClassName('E')[1]);
		break;
		case 87:
			pauseNote(document.getElementsByClassName('F')[1]);
		break;
		case 88:
			pauseNote(document.getElementsByClassName('G')[1]);
		break;
		case 67:
			pauseNote(document.getElementsByClassName('A')[1]);
		break;
		case 86:
			pauseNote(document.getElementsByClassName('B')[1]);
		break;
		case 65:
			pauseNote(document.getElementsByClassName('Cd')[0]);
		break;
		case 90:
			pauseNote(document.getElementsByClassName('Eb')[0]);
		break;
		case 69:
			pauseNote(document.getElementsByClassName('Fd')[0]);
		break;
		case 82:
			pauseNote(document.getElementsByClassName('Gd')[0]);
		break;
		case 84:
			pauseNote(document.getElementsByClassName('Bb')[0]);
		break;
		case 89:
			pauseNote(document.getElementsByClassName('Cd')[1]);
		break;
		case 85:
			pauseNote(document.getElementsByClassName('Eb')[1]);
		break;
		case 73:
			pauseNote(document.getElementsByClassName('Fd')[1]);
		break;
		case 79:
			pauseNote(document.getElementsByClassName('Gd')[1]);
		break;
		case 80:
			pauseNote(document.getElementsByClassName('Bb')[1]);
		break;
	}
};

function playNote(note, el){
	if(scale[note]){
		if(el){
			el.className = el.className + ' down';
		}
		var n = _gid(note);
		try{
		    n.currentTime = scale[note][0];
			if(console && console.log){
				console.log("Playing "+note);
				//console.log(scale[note][0] + " - " + scale[note][1]);
			}
	    	n.play();
	    }
	    catch(error){
			if(console && console.log){
				console.warn("Error "+error);
			}
	    }		
	}
	return false;
}

function pauseNote(el){
    //a.pause();
	el.className = el.className.replace(/ down/g, '');
	clearChords();
}

function init(){
	window.addEventListener('keydown', onPianoKeyDown);
	window.addEventListener('keyup', onPianoKeyUp);
	
	var a = document.getElementsByTagName('audio')[0];
	a.addEventListener('timeupdate', function() {
		try{
			if (a.currentTime > end) {
				a.pause();
			}
	    }
	    catch(error){
			if(console && console.log){
				console.warn("Error "+error);
			}
	    }		
	},false);
	
	var note = null;
	for(note in scale){
		var n = _ce('audio');
		n.id = note;
		n.src = a.currentSrc;
		n.preload = "auto";
    	n.dataset.end = scale[note][1];
		document.body.appendChild(n);
		n.addEventListener('timeupdate', function(e) {
			if(!e){
				e = window.event;
			}
			try{
				var t = e.target;
				if (t.currentTime > parseFloat(t.dataset.end)) {
					t.pause();
				}
		    }
		    catch(error){
				if(console && console.log){
					console.warn("Error "+error);
				}
		    }		
		},false);
    	n.addEventListener('loadeddata', function(){
			updateProgress();
    	});
	}
	
	var lnks = document.getElementsByTagName('a');
	for(var i=0; i < lnks.length; i++){
		lnks[i].draggable = false;
		lnks[i].ontouchstart = function(e){
			if(!e){
				e = window.event;
			}
			e.cancelBubble = true;
			e.returnValue = false;
			if (e.stopPropagation){
				e.stopPropagation();
				e.preventDefault();
			}
			var t = e.target;
			if(t.tagName.toLowerCase() == 'li'){
				t = t.getElementsByTagName('a')[0];
			}
			else if(t.tagName.toLowerCase() == 'span'){
				t = t.parentNode;
			}
			t.onmousedown();
			return false;
		};
		lnks[i].ontouchend = function(e){
			if(!e){
				e = window.event;
			}
			e.cancelBubble = true;
			e.returnValue = false;
			if (e.stopPropagation){
				e.stopPropagation();
				e.preventDefault();
			}
			var t = e.target;
			if(t.tagName.toLowerCase() == 'li'){
				t = t.getElementsByTagName('a')[0];
			}
			else if(t.tagName.toLowerCase() == 'span'){
				t = t.parentNode;
			}
			t.onmouseup();
			return false;
		};
	}
	updateProgress();
}

var chordsScale = 'none';

function showCord(dom, scale){
	if(!scale){
		return;
	}
	try{
		clearChords();
		if(scale === 'none'){
			return false;
		}
		var c = chords[scale][dom];
		l = c.length;
		for(var i = 0; i < l; i++){
			var oct = (parseInt(c[i].match(/\d+/)) - 1);
			var n = document.querySelector('.oct' + oct + '>.'+ c[i].replace(oct+1,'') + ' span');
			if(c[i] === dom){
				n.className = 'dom';
			}
			else{
				n.className = 'chord';
			}
		}
	}
	catch(error){
		if(console && console.log){
			console.warn("Error "+error);
		}
	}
}

function clearChords(){
	var s = document.querySelectorAll('.keyboard span');
	var l = s.length;
	for(var i = 0; i < l; i++){
		s[i].className = '';
	}	
}

function toggle3D(){
	var p = document.getElementById('piano');
	if(p.className === 'p3d'){
		p.className = '';
		_gid('3dstatus').innerHTML = 'OFF';
	}
	else{
		p.className = 'p3d';
		_gid('3dstatus').innerHTML = 'ON';
	}
}

function toggleScale(){
	var scale = 'none';
	var next = false;
	for(var key in chords){
		if(next){
			scale = key;
			break;
		}
		if(key === chordsScale){
			next = true;
		}
	}
	chordsScale = scale;
	_gid('cscale').innerHTML = chordsScale;
}

window.onload = init;
