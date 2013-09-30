app.factory('simplepermissions', function() {
	return {
	    all: function(){
	      return {
"accounts" : {
	"text": "Your accounts",
	"icon": "user",
	"perms": {
		"find": "find accounts on the device",
		"create_set": "create accounts and set passwords",
		"add_remove": "add or remove accounts"
	}
},
"location": {
	"text": "Your location",
	"icon": "location-arrow",
	"perms": {
		"precise": "precise location (GPS and network-based)",
		"approximate": "approximate location (network-based)"
	}
},
"network": {
	"text": "Network communication",
	"icon": "globe",
	"perms": {
		"view": "view network connections",
		"data": "receive data from Internet",
		"full": "full network access",
		"download": "download files without notification",
		"view_wifi": "view Wi-Fi connections"
	}
},
"phone_calls": {
	"text": "Phone calls",
	"icon": "phone",
	"perms": {
		"call": "directly call phone numbers",
		"status": "read phone status and identity"
	}
},
"storage": {
	"text": "Storage",
	"icon": "folder-close",
	"perms": {
		"modify_delete": "modify or delete the contents of your USB storage"
	}	
},
"system": {
	"text": "System tools",
	"icon": "gears",
	"perms": {
		"shortcuts": "install shortcuts",
		"read_home": "read Home settings and shortcuts",
		"test_protected": "test access to protected storage",
		"battery": "read battery statistics"
	}
},
"app_info": {
	"text": "Your applications information",
	"icon": "android",
	"perms": {
		"startup": "run at startup",
		"running_apps": "retrieve running apps",
		"reorder_apps": "reorder running apps"
	}

},
"camera": {
	"text": "Camera",
	"icon": "camera",
	"perms": {
		"pics_vids": "take pictures and videos"
	}
},
"other_apps": {
	"text": "Other Application UI",
	"icon": "android",
	"perms": {
		"draw_over": "draw over other apps"
	}	
},
"mic": {
	"text": "Microphone",
	"icon": "microphone",
	"perms": {
		"record": "record audio"
	}
},
"social": {
	"text": "Your social information",
	"icon": "thumbs-up",
	"perms": {
		"write_call_log": "write call log",
		"read_call_log": "read call log",
		"read_contacts": "read your contacts",
		"modify_contants": "modify your contacts"
	}
},
"battery": {
	"text": "Affects Battery",
	"icon": "mobile-phone",
	"perms": {
		"no_sleep": "prevent device from sleeping",
		"vibration": "control vibration"
	}
},
"statusbar": {
	"text": "Status Bar",
	"icon": "collapse",
	"perms": {
		"expand_collapse": "expand/collapse status bar"		
	}	
},
"sync": {
	"text": "Sync Settings",
	"icon": "repeat",
	"perms": {
		"toogle": "toggle sync on and off",
		"read": "read sync settings"
	}	
}
	      };
	    }
	}
});

