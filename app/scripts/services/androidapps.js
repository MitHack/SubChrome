app.factory('androidapps', function() {
    var all_ = [
        { 
            "id": "com.facebook.katana",
            "img": "https://lh5.ggpht.com/_XklY7dK6yGsYt53X15RIp7-tbdjWMwQwl_iUAcW-uSq_8zAprmywdn5DQfBHvxZurs1=w300-rw",
            "name": "Facebook",
            "approval": "frown",
            "perms": {
                "accounts" : {
                    "find": "minus",
                    "create_set": "minus",
                    "add_remove": "remove"
                },
                "location": {
                    "precise": "minus",
                    "approximate": "minus"
                },
                "network": {
                    "view": "ok",
                    "data": "ok",
                    "full": "ok",
                    "download": "remove",
                    "view_wifi": "remove"
                },
                "phone_calls": {
                    "call": "remove",
                    "status": "remove"
                },
                "storage": {
                    "modify_delete": "remove"
                },
                "system": {
                    "shortcuts": "ok",
                    "read_home": "remove",
                    "test_protected": "remove",
                    "battery": "remove"
                },
                "app_info": {
                    "startup": "minus",
                    "running_apps": "minus",
                    "reorder_apps": "minus"
                },
                "camera": {
                    "pics_vids": "remove"
                },
                "other_apps": {
                    "draw_over": "remove"
                },
                "mic": {
                    "record": "remove"
                },
                "social": {
                    "write_call_log": "remove",
                    "read_call_log": "remove",
                    "read_contacts": "remove",
                    "modify_contants": "remove"
                },
                "battery": {
                    "no_sleep": "remove",
                    "vibration": "minus"
                },
                "statusbar": {
                    "expand_collapse": "minus"     
                },
                "sync": {
                    "toogle": "remove",
                    "read": "remove"
                }
            }
        },
        { 
            "id": "thevoxelagents.puzzleretreat",
            "img": "https://lh6.ggpht.com/9z5Z-pZHyyow0nUlhfgfwqlNcyjlabLgch84klUVyLl0okW3GJhTXBkLxXdCywKE2Q=w300-rw",
            "name": "Puzzle Retreat",
            "approval": "smile",
            "perms": {
                "network": {
                    "view": "ok", 
                    "full": "ok"
                }
            }
        }
    ];

  return {
    all: function(){ return all_; },
    query: function(term){
    	return all_.filter(function(app){
            return app.name.toLowerCase().indexOf(term.toLowerCase()) != -1;
        });
	}
  }
});