var site = {
  name: "Twitter",
  searchurl: "/search?q=",
  commands: [
    {
      name: "Home",
      targetEl: "#global-nav-home a"
    },
    {
      name: "Connect",
      targetEl: "[role='navigation'] [title='Connect']",
    },
    {
      name: "Discover",
      targetEl: "[role='navigation'] [title='Discover']",
    },
    {
      name: "Me",
      targetEl: "[role='navigation'] [title='Me']",
    },
    {
      name: "Settings and help",
      targetEl: "a#user-dropdown-toggle"    
    },
    /*{
      name: "Compose new Tweet",
      targetEl: "#tweet-box-mini-home-profile",
      focusEl: "#tweet-box-mini-home-profile"
    },*/
    {
      name: "Compose new Tweet",
      targetEl: "#global-new-tweet-button",
      focusEl: "#tweet-box-global"   
    } 
  ]
};