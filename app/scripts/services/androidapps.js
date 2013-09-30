app.factory('androidapps', function() {

    var all_ = [
        { 
            "id": "com.facebook.katana",
            "img": "https://lh5.ggpht.com/_XklY7dK6yGsYt53X15RIp7-tbdjWMwQwl_iUAcW-uSq_8zAprmywdn5DQfBHvxZurs1=w300-rw",
            "name": "Facebook",
            "approval": "frown",
            "perms": {
                "network": {
                    "view": "minus", 
                    "full": "minus"
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


// var app_perms = {
//     "network": ["view", "full"],
//     "phone_calls": ["call"]
// }


// var mypermissions = {
//     "network": {
//         "text": "Network communication",
//         "perms": {
//             "view": "view network connections",
//             "data": "receive data from Internet",
//             "full": "full network access",
//             "download": "download files without notification",
//             "view_wifi": "view Wi-Fi connections"
//         }
//     },
//     "phone_calls": {
//         "text": "Phone calls",
//         "perms": {
//             "call": "directly call phone numbers",
//             "status": "read phone status and identity"
//         }
//     }
// }