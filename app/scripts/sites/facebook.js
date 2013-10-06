var site =
{
  name: "Facebook",
  urlPattern: "*://*.facebook.com",
  actions: [
    {
      name: "Notifications",
      type: "click",
      targetEl: "#fbNotificationsJewel"
    },
    {
      name: "Messages",
      type: "click",
      targetEl: "#fbMesssagesJewel"
    },
    {
      name: "Requests",
      type: "click",
      targetEl: "#fbRequestsJewel"    
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
      targetEl: "pagelet_composer a:contains('Update Status')",
      focusEl: ""
    },
    {
      name: "Add Photos or video",
      type: "click",
      targetEl: "#pagelet_composer a:contains('Add Photos/Video')"    
    } 
  ]
};