var site = {
  name: "Twitter",
  searchurl: "/search?q=",
  commands: [
    { name: "Compose new Tweet", targetEl: "#global-new-tweet-button", focusEl: "#tweet-box-global" },
    { name: "Send Tweet", targetEl: "#global-tweet-dialog-dialog button:contains('Tweet')" },
    { name: "Add a picture", targetEl: "#global-tweet-dialog-dialog [type='file']" },
    { name: "Add a location", targetEl: "#global-tweet-dialog-dialog button[title='Add location']" },
    { name: "Home", targetEl: "#global-nav-home a" },
    { name: "Connect", targetEl: "[role='navigation'] [title='Connect']" },
    { name: "Discover", targetEl: "[role='navigation'] [title='Discover']" },
    { name: "Me", targetEl: "[role='navigation'] [title='Me']" },
    { name: "Settings and help", targetEl: "a#user-dropdown-toggle" },
  ]
};