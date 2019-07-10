<!-- This is an opera userjs for the creation of visual objects  -->
<!-- through oipfObjectFactory as specified in OIPF DAE 7.1.1.1. -->

/* Hide all helper functions under a single name, to avoid polluting the global
 * namespace */
var ooif_helper =
{
	createVisualObject: function(objectType) {
		if (oipfObjectFactory.isObjectSupported(objectType) == true) {
			element = document.createElement("object");
			element.setAttribute("type", objectType);
			return element;
		} else {
			throw {name: "TypeError"};
		}
	},

	fullscreen: function(video) {
		var style = video.style;
		var saved_state = {
			v: video,
			p: style.position,
			l: style.left,
			t: style.top,
			w: style.width,
			h: style.height
		};

		style.position = "fixed";
		style.left = "0px";
		style.top = "0px";
		style.width = "1280px";
		style.height = "720px";

		return saved_state;
	},

	restore: function(saved_state) {
		var style = saved_state.v.style;
		style.position = saved_state.p;
		style.left = saved_state.l;
		style.top = saved_state.t;
		style.width = saved_state.w;
		style.height = saved_state.h;
	}
};

oipfObjectFactory.createVideoBroadcastObject = function() {
    return ooif_helper.createVisualObject("video/broadcast");
};

oipfObjectFactory.createVideoMpegObject = function() {
    return ooif_helper.createVisualObject("video/mpeg");
};

<!-- This part adds support for key symbols as defined in Annex F of CEA-2014 -->
var KeyEvent = new Object();

KeyEvent.VK_UNDEFINED = 0;
Event.prototype.VK_UNDEFINED = 0;
KeyEvent.VK_CANCEL = 3;
Event.prototype.VK_CANCEL = 3;
KeyEvent.VK_BACK_SPACE = 8;
Event.prototype.VK_BACK_SPACE = 8;
KeyEvent.VK_TAB = 9;
Event.prototype.VK_TAB = 9;
KeyEvent.VK_CLEAR = 12;
Event.prototype.VK_CLEAR = 12;
KeyEvent.VK_ENTER = 13;
Event.prototype.VK_ENTER = 13;
KeyEvent.VK_SHIFT = 16;
Event.prototype.VK_SHIFT = 16;
KeyEvent.VK_CONTROL = 17;
Event.prototype.VK_CONTROL = 17;
KeyEvent.VK_ALT = 18;
Event.prototype.VK_ALT = 18;
KeyEvent.VK_PAUSE = 19;
Event.prototype.VK_PAUSE = 19;
KeyEvent.VK_CAPS_LOCK = 20;
Event.prototype.VK_CAPS_LOCK = 20;
KeyEvent.VK_KANA = 21;
Event.prototype.VK_KANA = 21;
KeyEvent.VK_FINAL = 24;
Event.prototype.VK_FINAL = 24;
KeyEvent.VK_KANJI = 25;
Event.prototype.VK_KANJI = 25;
KeyEvent.VK_ESCAPE = 27;
Event.prototype.VK_ESCAPE = 27;
KeyEvent.VK_CONVERT = 28;
Event.prototype.VK_CONVERT = 28;
KeyEvent.VK_NONCONVERT = 29;
Event.prototype.VK_NONCONVERT = 29;
KeyEvent.VK_ACCEPT = 30;
Event.prototype.VK_ACCEPT = 30;
KeyEvent.VK_MODECHANGE = 31;
Event.prototype.VK_MODECHANGE = 31;
KeyEvent.VK_SPACE = 32;
Event.prototype.VK_SPACE = 32;
KeyEvent.VK_PAGE_UP = 33;
Event.prototype.VK_PAGE_UP = 33;
KeyEvent.VK_PAGE_DOWN = 34;
Event.prototype.VK_PAGE_DOWN = 34;
KeyEvent.VK_END = 35;
Event.prototype.VK_END = 35;
KeyEvent.VK_HOME = 36;
Event.prototype.VK_HOME = 36;
KeyEvent.VK_LEFT = 37;
Event.prototype.VK_LEFT = 37;
KeyEvent.VK_UP = 38;
Event.prototype.VK_UP = 38;
KeyEvent.VK_RIGHT = 39;
Event.prototype.VK_RIGHT = 39;
KeyEvent.VK_DOWN = 40;
Event.prototype.VK_DOWN = 40;
KeyEvent.VK_COMMA = 44;
Event.prototype.VK_COMMA = 44;
KeyEvent.VK_PERIOD = 46;
Event.prototype.VK_PERIOD = 46;
KeyEvent.VK_SLASH = 47;
Event.prototype.VK_SLASH = 47;
KeyEvent.VK_0 = 48;
Event.prototype.VK_0 = 48;
KeyEvent.VK_1 = 49;
Event.prototype.VK_1 = 49;
KeyEvent.VK_2 = 50;
Event.prototype.VK_2 = 50;
KeyEvent.VK_3 = 51;
Event.prototype.VK_3 = 51;
KeyEvent.VK_4 = 52;
Event.prototype.VK_4 = 52;
KeyEvent.VK_5 = 53;
Event.prototype.VK_5 = 53;
KeyEvent.VK_6 = 54;
Event.prototype.VK_6 = 54;
KeyEvent.VK_7 = 55;
Event.prototype.VK_7 = 55;
KeyEvent.VK_8 = 56;
Event.prototype.VK_8 = 56;
KeyEvent.VK_9 = 57;
Event.prototype.VK_9 = 57;
KeyEvent.VK_SEMICOLON = 59;
Event.prototype.VK_SEMICOLON = 59;
KeyEvent.VK_EQUALS = 61;
Event.prototype.VK_EQUALS = 61;
KeyEvent.VK_A = 65;
Event.prototype.VK_A = 65;
KeyEvent.VK_B = 66;
Event.prototype.VK_B = 66;
KeyEvent.VK_C = 67;
Event.prototype.VK_C = 67;
KeyEvent.VK_D = 68;
Event.prototype.VK_D = 68;
KeyEvent.VK_E = 69;
Event.prototype.VK_E = 69;
KeyEvent.VK_F = 70;
Event.prototype.VK_F = 70;
KeyEvent.VK_G = 71;
Event.prototype.VK_G = 71;
KeyEvent.VK_H = 72;
Event.prototype.VK_H = 72;
KeyEvent.VK_I = 73;
Event.prototype.VK_I = 73;
KeyEvent.VK_J = 74;
Event.prototype.VK_J = 74;
KeyEvent.VK_K = 75;
Event.prototype.VK_K = 75;
KeyEvent.VK_L = 76;
Event.prototype.VK_L = 76;
KeyEvent.VK_M = 77;
Event.prototype.VK_M = 77;
KeyEvent.VK_N = 78;
Event.prototype.VK_N = 78;
KeyEvent.VK_O = 79;
Event.prototype.VK_O = 79;
KeyEvent.VK_P = 80;
Event.prototype.VK_P = 80;
KeyEvent.VK_Q = 81;
Event.prototype.VK_Q = 81;
KeyEvent.VK_R = 82;
Event.prototype.VK_R = 82;
KeyEvent.VK_S = 83;
Event.prototype.VK_S = 83;
KeyEvent.VK_T = 84;
Event.prototype.VK_T = 84;
KeyEvent.VK_U = 85;
Event.prototype.VK_U = 85;
KeyEvent.VK_V = 86;
Event.prototype.VK_V = 86;
KeyEvent.VK_W = 87;
Event.prototype.VK_W = 87;
KeyEvent.VK_X = 88;
Event.prototype.VK_X = 88;
KeyEvent.VK_Y = 89;
Event.prototype.VK_Y = 89;
KeyEvent.VK_Z = 90;
Event.prototype.VK_Z = 90;
KeyEvent.VK_OPEN_BRACKET = 91;
Event.prototype.VK_OPEN_BRACKET = 91;
KeyEvent.VK_BACK_SLASH = 92;
Event.prototype.VK_BACK_SLASH = 92;
KeyEvent.VK_CLOSE_BRACKET = 93;
Event.prototype.VK_CLOSE_BRACKET = 93;
KeyEvent.VK_NUMPAD0 = 96;
Event.prototype.VK_NUMPAD0 = 96;
KeyEvent.VK_NUMPAD1 = 97;
Event.prototype.VK_NUMPAD1 = 97;
KeyEvent.VK_NUMPAD2 = 98;
Event.prototype.VK_NUMPAD2 = 98;
KeyEvent.VK_NUMPAD3 = 99;
Event.prototype.VK_NUMPAD3 = 99;
KeyEvent.VK_NUMPAD4 = 100;
Event.prototype.VK_NUMPAD4 = 100;
KeyEvent.VK_NUMPAD5 = 101;
Event.prototype.VK_NUMPAD5 = 101;
KeyEvent.VK_NUMPAD6 = 102;
Event.prototype.VK_NUMPAD6 = 102;
KeyEvent.VK_NUMPAD7 = 103;
Event.prototype.VK_NUMPAD7 = 103;
KeyEvent.VK_NUMPAD8 = 104;
Event.prototype.VK_NUMPAD8 = 104;
KeyEvent.VK_NUMPAD9 = 105;
Event.prototype.VK_NUMPAD9 = 105;
KeyEvent.VK_MULTIPLY = 106;
Event.prototype.VK_MULTIPLY = 106;
KeyEvent.VK_ADD = 107;
Event.prototype.VK_ADD = 107;
KeyEvent.VK_SEPARATER = 108;
Event.prototype.VK_SEPARATER = 108;
KeyEvent.VK_SUBTRACT = 109;
Event.prototype.VK_SUBTRACT = 109;
KeyEvent.VK_DECIMAL = 110;
Event.prototype.VK_DECIMAL = 110;
KeyEvent.VK_DIVIDE = 111;
Event.prototype.VK_DIVIDE = 111;
KeyEvent.VK_F1 = 112;
Event.prototype.VK_F1 = 112;
KeyEvent.VK_F2 = 113;
Event.prototype.VK_F2 = 113;
KeyEvent.VK_F3 = 114;
Event.prototype.VK_F3 = 114;
KeyEvent.VK_F4 = 115;
Event.prototype.VK_F4 = 115;
KeyEvent.VK_F5 = 116;
Event.prototype.VK_F5 = 116;
KeyEvent.VK_F6 = 117;
Event.prototype.VK_F6 = 117;
KeyEvent.VK_F7 = 118;
Event.prototype.VK_F7 = 118;
KeyEvent.VK_F8 = 119;
Event.prototype.VK_F8 = 119;
KeyEvent.VK_F9 = 120;
Event.prototype.VK_F9 = 120;
KeyEvent.VK_F10 = 121;
Event.prototype.VK_F10 = 121;
KeyEvent.VK_F11 = 122;
Event.prototype.VK_F11 = 122;
KeyEvent.VK_F12 = 123;
Event.prototype.VK_F12 = 123;
KeyEvent.VK_DELETE = 127;
Event.prototype.VK_DELETE = 127;
KeyEvent.VK_NUM_LOCK = 144;
Event.prototype.VK_NUM_LOCK = 144;
KeyEvent.VK_SCROLL_LOCK = 145;
Event.prototype.VK_SCROLL_LOCK = 145;
KeyEvent.VK_PRINTSCREEN = 154;
Event.prototype.VK_PRINTSCREEN = 154;
KeyEvent.VK_INSERT = 155;
Event.prototype.VK_INSERT = 155;
KeyEvent.VK_HELP = 156;
Event.prototype.VK_HELP = 156;
KeyEvent.VK_META = 157;
Event.prototype.VK_META = 157;
KeyEvent.VK_BACK_QUOTE = 192;
Event.prototype.VK_BACK_QUOTE = 192;
KeyEvent.VK_QUOTE = 222;
Event.prototype.VK_QUOTE = 222;
KeyEvent.VK_RED = 403;
Event.prototype.VK_RED = 403;
KeyEvent.VK_GREEN = 404;
Event.prototype.VK_GREEN = 404;
KeyEvent.VK_YELLOW = 502;
Event.prototype.VK_YELLOW = 502;
KeyEvent.VK_BLUE = 406;
Event.prototype.VK_BLUE = 406;
KeyEvent.VK_GREY = 407;
Event.prototype.VK_GREY = 407;
KeyEvent.VK_BROWN = 408;
Event.prototype.VK_BROWN = 408;
KeyEvent.VK_POWER = 409;
Event.prototype.VK_POWER = 409;
KeyEvent.VK_DIMMER = 410;
Event.prototype.VK_DIMMER = 410;
KeyEvent.VK_WINK = 411;
Event.prototype.VK_WINK = 411;
KeyEvent.VK_REWIND = 412;
Event.prototype.VK_REWIND = 412;
KeyEvent.VK_STOP = 413;
Event.prototype.VK_STOP = 413;
KeyEvent.VK_EJECT_TOGGLE = 414;
Event.prototype.VK_EJECT_TOGGLE = 414;
KeyEvent.VK_PLAY = 415;
Event.prototype.VK_PLAY = 415;
KeyEvent.VK_RECORD = 416;
Event.prototype.VK_RECORD = 416;
KeyEvent.VK_FAST_FWD = 473;
Event.prototype.VK_FAST_FWD = 473;
KeyEvent.VK_PLAY_SPEED_UP = 418;
Event.prototype.VK_PLAY_SPEED_UP = 418;
KeyEvent.VK_PLAY_SPEED_DOWN = 419;
Event.prototype.VK_PLAY_SPEED_DOWN = 419;
KeyEvent.VK_PLAY_SPEED_RESET = 420;
Event.prototype.VK_PLAY_SPEED_RESET = 420;
KeyEvent.VK_RECORD_SPEED_NEXT = 421;
Event.prototype.VK_RECORD_SPEED_NEXT = 421;
KeyEvent.VK_GO_TO_START = 422;
Event.prototype.VK_GO_TO_START = 422;
KeyEvent.VK_GO_TO_END = 423;
Event.prototype.VK_GO_TO_END = 423;
KeyEvent.VK_TRACK_PREV = 424;
Event.prototype.VK_TRACK_PREV = 424;
KeyEvent.VK_TRACK_NEXT = 425;
Event.prototype.VK_TRACK_NEXT = 425;
KeyEvent.VK_RANDOM_TOGGLE = 426;
Event.prototype.VK_RANDOM_TOGGLE = 426;
KeyEvent.VK_CHANNEL_UP = 427;
Event.prototype.VK_CHANNEL_UP = 427;
KeyEvent.VK_CHANNEL_DOWN = 428;
Event.prototype.VK_CHANNEL_DOWN = 428;
KeyEvent.VK_STORE_FAVORITE_0 = 429;
Event.prototype.VK_STORE_FAVORITE_0 = 429;
KeyEvent.VK_STORE_FAVORITE_1 = 430;
Event.prototype.VK_STORE_FAVORITE_1 = 430;
KeyEvent.VK_STORE_FAVORITE_2 = 431;
Event.prototype.VK_STORE_FAVORITE_2 = 431;
KeyEvent.VK_STORE_FAVORITE_3 = 432;
Event.prototype.VK_STORE_FAVORITE_3 = 432;
KeyEvent.VK_RECALL_FAVORITE_0 = 433;
Event.prototype.VK_RECALL_FAVORITE_0 = 433;
KeyEvent.VK_RECALL_FAVORITE_1 = 434;
Event.prototype.VK_RECALL_FAVORITE_1 = 434;
KeyEvent.VK_RECALL_FAVORITE_2 = 435;
Event.prototype.VK_RECALL_FAVORITE_2 = 435;
KeyEvent.VK_RECALL_FAVORITE_3 = 436;
Event.prototype.VK_RECALL_FAVORITE_3 = 436;
KeyEvent.VK_CLEAR_FAVORITE_0 = 437;
Event.prototype.VK_CLEAR_FAVORITE_0 = 437;
KeyEvent.VK_CLEAR_FAVORITE_1 = 438;
Event.prototype.VK_CLEAR_FAVORITE_1 = 438;
KeyEvent.VK_CLEAR_FAVORITE_2 = 439;
Event.prototype.VK_CLEAR_FAVORITE_2 = 439;
KeyEvent.VK_CLEAR_FAVORITE_3 = 440;
Event.prototype.VK_CLEAR_FAVORITE_3 = 440;
KeyEvent.VK_SCAN_CHANNELS_TOGGLE = 441;
Event.prototype.VK_SCAN_CHANNELS_TOGGLE = 441;
KeyEvent.VK_PINP_TOGGLE = 442;
Event.prototype.VK_PINP_TOGGLE = 442;
KeyEvent.VK_SPLIT_SCREEN_TOGGLE = 443;
Event.prototype.VK_SPLIT_SCREEN_TOGGLE = 443;
KeyEvent.VK_DISPLAY_SWAP = 444;
Event.prototype.VK_DISPLAY_SWAP = 444;
KeyEvent.VK_SCREEN_MODE_NEXT = 445;
Event.prototype.VK_SCREEN_MODE_NEXT = 445;
KeyEvent.VK_VIDEO_MODE_NEXT = 446;
Event.prototype.VK_VIDEO_MODE_NEXT = 446;
KeyEvent.VK_VOLUME_UP = 447;
Event.prototype.VK_VOLUME_UP = 447;
KeyEvent.VK_VOLUME_DOWN = 448;
Event.prototype.VK_VOLUME_DOWN = 448;
KeyEvent.VK_MUTE = 449;
Event.prototype.VK_MUTE = 449;
KeyEvent.VK_SURROUND_MODE_NEXT = 450;
Event.prototype.VK_SURROUND_MODE_NEXT = 450;
KeyEvent.VK_BALANCE_RIGHT = 451;
Event.prototype.VK_BALANCE_RIGHT = 451;
KeyEvent.VK_BALANCE_LEFT = 452;
Event.prototype.VK_BALANCE_LEFT = 452;
KeyEvent.VK_FADER_FRONT = 453;
Event.prototype.VK_FADER_FRONT = 453;
KeyEvent.VK_FADER_REAR = 454;
Event.prototype.VK_FADER_REAR = 454;
KeyEvent.VK_BASS_BOOST_UP = 455;
Event.prototype.VK_BASS_BOOST_UP = 455;
KeyEvent.VK_BASS_BOOST_DOWN = 456;
Event.prototype.VK_BASS_BOOST_DOWN = 456;
KeyEvent.VK_INFO = 457;
Event.prototype.VK_INFO = 457;
KeyEvent.VK_GUIDE = 458;
Event.prototype.VK_GUIDE = 458;
KeyEvent.VK_TELETEXT = 459;
Event.prototype.VK_TELETEXT = 459;
KeyEvent.VK_SUBTITLE = 460;
Event.prototype.VK_SUBTITLE = 460;
KeyEvent.VK_BACK = 461;
Event.prototype.VK_BACK = 461;
KeyEvent.VK_MENU = 462;
Event.prototype.VK_MENU = 462;
KeyEvent.VK_PLAY_PAUSE = 463;
Event.prototype.VK_PLAY_PAUSE = 463;


<!-- The following piece of code is required for XML StreamEvent support in HbbTV -->

HTMLObjectElement.prototype.addStreamEventListener = function(targetURL, eventName, listener)
{
	if (typeof(this.type) != 'string' || this.type != 'video/broadcast')
		return;

	if (targetURL.indexOf('http://')<0 && targetURL.indexOf('https://')<0 && (targetURL.indexOf('dvb://')>=0 || window.location.toString().indexOf('dvb://')>= 0))
		return this.internalAddStreamEventListener(targetURL, eventName, listener);

	var xhr = new XMLHttpRequest();

	xhr.open("GET", targetURL, false);

	try
	{
		xhr.send(null);
	}
	catch(e)
	{
		var error = new Object();
		error.name = '';
		error.data = '';
		error.text = '';
		error.status = 'error';
		listener(error);
		return;
	}

	var parser = new DOMParser();
	var xdoc = parser.parseFromString(xhr.responseText, "text/xml");

	var dsmccObjects = xdoc.getElementsByTagName('dsmcc_object');
	if (dsmccObjects.length <= 0)
		return;

	var dsmccObject = dsmccObjects[0];
	var componentTag = dsmccObject.getAttribute('component_tag');
	if (!componentTag)
		return;

	var streamEventId = null;
	var streamEvents = dsmccObject.getElementsByTagName('stream_event');

	for (var i = 0; i < streamEvents.length; i++)
	{
		if (eventName == streamEvents[i].getAttribute('stream_event_name'))
		{
			var streamEventId = streamEvents[i].getAttribute('stream_event_id');
			break;
		}
	}

	if (!streamEventId)
		return;

	return this.internalAddXMLStreamEventListener(eventName, parseInt(streamEventId), parseInt(componentTag), listener);
}
