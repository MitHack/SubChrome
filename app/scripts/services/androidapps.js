app.factory('androidapps', function() {
  return {
    query: function(term){
    	return [
    		{ 
    			"id": "com.facebook.katana",
    			"img": "https://lh5.ggpht.com/_XklY7dK6yGsYt53X15RIp7-tbdjWMwQwl_iUAcW-uSq_8zAprmywdn5DQfBHvxZurs1=w300-rw",
    			"name": "Facebook"
    		},
    		{ 
    			"id": "thevoxelagents.puzzleretreat",
    			"img": "https://lh6.ggpht.com/9z5Z-pZHyyow0nUlhfgfwqlNcyjlabLgch84klUVyLl0okW3GJhTXBkLxXdCywKE2Q=w300-rw",
    			"name": "Puzzle Retreat"
    		}
    	];
	}
  }
});