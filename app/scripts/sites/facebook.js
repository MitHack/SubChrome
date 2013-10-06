var site = {
  name: "Facebook",
  searchurl: "/search/more/?q=",
  commands: [
    {
      name: "Notifications",
      type: "click",
      targetEl: "#fbNotificationsJewel a"
    },
    {
      name: "Messages",
      type: "click",
      targetEl: "#fbMessagesJewel a"
    },
    {
      name: "Requests",
      type: "click",
      targetEl: "#fbRequestsJewel a"    
    },
    {
      name: "Homepage",
      type: "click",
      targetEl: "#pageLogo"    
    },
    {
      name: "Edit Profile",
      type: "click",
      targetEl: "#pagelet_welcome_box a:contains('Edit Profile')"    
    },
    {
      name: "Update Status",
      type: "click",
      targetEl: "#pagelet_composer a:contains('Update Status')",
      focusEl: "#pagelet_composer textarea"
    },
    {
      name: "Add Photos or video",
      type: "click",
      targetEl: "#pagelet_composer a:contains('Add Photos/Video')"    
    } 
  ]
};