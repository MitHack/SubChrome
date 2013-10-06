var site = {
  name: "Facebook",
  searchurl: "/search/more/?q=",
  commands: [
    { name: "Notifications", targetEl: "#fbNotificationsJewel a" },
    { name: "Messages", targetEl: "#fbMessagesJewel a" },
    { name: "Requests", targetEl: "#fbRequestsJewel a" },
    { name: "Home", targetEl: "#pageLogo a" },
    { name: "View Profile", targetEl: "#navTimeline a" },
    { name: "Edit Profile", targetEl: [
      "#pagelet_welcome_box a:contains('Edit Profile')",
      "#pagelet_timeline_profile_actions a[href*='edit']"
    ]},
    { name: "Update Status", targetEl: "#pagelet_composer a:contains('Update Status')", focusEl: "#pagelet_composer textarea" },
    { name: "Me: Timeline", targetEl: "#fbTimelineHeadline a:first-of-type"},
    { name: "Me: About", targetEl: "#fbTimelineHeadline a[href*='about']"},
    { name: "Me: Photos", targetEl: [
      "#fbTimelineHeadline a[href*='photo']",
      "#navItem_app_2305272732 [aria-label='Photos']"
    ]},
    { name: "Me: Friends", targetEl: "#fbTimelineHeadline a[href*='friends']"},
    { name: "Add Photos or video", targetEl: "#pagelet_composer a:contains('Add Photos/Video')" },
    { name: "Privacy", targetEl: "#navPrivacy a" },
    { name: "Settings: Create an Ad", targetEl: "#userNavigation a:contains('Create an Ad')"},
    { name: "Settings: Account Settings", targetEl: "#userNavigation a:contains('Account Settings')"},
    { name: "Settings: Privacy Settings", targetEl: "#userNavigation a:contains('Privacy Settings')"},
    { name: "Help", targetEl: "#navHelpCenter"},
    { name: "Report a Problem", targetEl: "#userNavigation a:contains('Report a Problem')"},
    { name: "Favorites: News Feed", targetEl: "#navItem_app_4748854339 [aria-label='News Feed']"},
    { name: "Favorites: Messages", targetEl: "#navItem_app_217974574879787 [aria-label='Messages']"},
    { name: "Favorites: Events", targetEl: "#navItem_app_2344061033 [aria-label='Events']"},
    { name: "Favorites: Browse", targetEl: "#navItem_app_300909120010335 [aria-label='Browse']"},
    { name: "Groups: Create Group...", targetEl: "#navItem_app_230259100322928 [aria-label='Create Group...']"},
    { name: "Apps: App Center", targetEl: "#navItem_app_140332009231 [aria-label='App Center']"},
    { name: "Apps: Games Feed", targetEl: "#navItem_app_261369767293002 [aria-label='Games Feed']"},
    { name: "Apps: Gifts", targetEl: "#navItem_app_329122197162272 [aria-label='Gifts']"},
    { name: "Apps: Music", targetEl: "#navItem_app_119960514742544 [aria-label='Music']"},
    { name: "Apps: Notes", targetEl: "#navItem_app_2347471856 [aria-label='Notes']"},
    { name: "Pages: Create a Page...", targetEl: "#navItem_app_188619144602540 [aria-label='Create a Page...']"},
    { name: "Pages: Pages Feed", targetEl: "#navItem_app_140472815972081 [aria-label='Pages Feed']"},
    { name: "Pages: Like Pages", targetEl: "#navItem_app_357937250942127 [aria-label='Like Pages']"},
    { name: "Friend Bar: Search friend", targetEl: "#pagelet_sidebar [aria-label='Search']" },
    { name: "Friend Bar: Settings", targetEl: "#pagelet_sidebar [aria-label='Options']" },
    { name: "Friend Bar: Hide", targetEl: "#pagelet_sidebar [aria-label='Hide sidebar']"},
    { name: "Friend Bar: Show", targetEl: "#fbDockChatBuddylistNub [rel='toggle']"}
  ]
};