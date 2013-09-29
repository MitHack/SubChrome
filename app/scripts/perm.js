// ??
//PERSISTENT_ACTIVITY: {msg: " This constant was deprecated in API level 9. This functionality will be removed in the future; please do not use. Allow an application to make its activities persistent."},
//SEND_RESPOND_VIA_MESSAGE: {msg: "Allows an application (Phone) to send a request to other applications to handle the respond-via-message action during incoming calls."},
//SET_ALWAYS_FINISH: {msg: "Allows an application to control whether activities are immediately finished when put in the background."},

var groups = {
	NONE: {
		msg: "",
		perms: {
			ACCESS_CACHE_FILESYSTEM: { msg= ""},
			ACCESS_CHECKIN_PROPERTIES: {msg: "Allows read/write access to the \"properties\" table in the checkin database, to change values that get uploaded."},
			ACCESS_SURFACE_FLINGER: {msg: "Allows an application to use SurfaceFlinger\'s low level features."},
			ALLOW_ANY_CODEC_FOR_PLAYBACK: {msg: ""},
			BACKUP: {msg: ""},
			BATTERY_STATS: {msg: "Allows an application to collect battery statistics"},
			BIND_ACCESSIBILITY_SERVICE: {msg: "Must be required by an AccessibilityService, to ensure that only the system can bind to it."},
			BIND_INPUT_METHOD: {msg: "Must be required by an InputMethodService, to ensure that only the system can bind to it."},
			BIND_NOTIFICATION_LISTENER_SERVICE: {msg: "Must be required by an NotificationListenerService, to ensure that only the system can bind to it."},
			BIND_REMOTEVIEWS: {msg: "Must be required by a RemoteViewsService, to ensure that only the system can bind to it."},
			BIND_TEXT_SERVICE: {msg: "Must be required by a TextService (e.g."},
			BIND_VPN_SERVICE: {msg: "Must be required by an VpnService, to ensure that only the system can bind to it."},
			BIND_WALLPAPER: {msg: "Must be required by a WallpaperService, to ensure that only the system can bind to it."},
			BRICK: {msg: "Required to be able to disable the device (very dangerous!)."},
			C2D_MESSAGE: {msg: ""},
			CALL_PRIVILEGED: {msg: "Allows an application to call any phone number, including emergency numbers, without going through the Dialer user interface for the user to confirm the call being placed."},
			CHANGE_COMPONENT_ENABLED_STATE: {msg: ""},
			CLEAR_APP_USER_DATA: {msg: "Allows an application to clear user data."},
			CONFIRM_FULL_BACKUP: {msg: ""},
			CONTROL_LOCATION_UPDATES: {msg: "Allows enabling/disabling location update notifications from the radio."},
			COPY_PROTECTED_DATA: {msg: ""},
			CRYPT_KEEPER: {msg: ""},
			DELETE_CACHE_FILES: {msg: "Allows an application to delete cache files."},
			DELETE_PACKAGES: {msg: "Allows an application to delete packages."},
			DEVICE_POWER: {msg: "Allows low-level access to power management."},
			FACTORY_TEST: {msg: "Run as a manufacturer test application, running as the root user."},
			FORCE_BACK: {msg: "Allows an application to force a BACK operation on whatever is the top activity."},
			INJECT_EVENTS: {msg: "Allows an application to inject user events (keys, touch, trackball) into the event stream and deliver them to ANY window."},
			INSTALL_LOCATION_PROVIDER: {msg: "Allows an application to install a location provider into the Location Manager."},
			INSTALL_PACKAGES: {msg: "Allows an application to install packages."},
			INTERNAL_SYSTEM_WINDOW: {msg: "Allows an application to open windows that are for use by parts of the system user interface."},
			MANAGE_APP_TOKENS: {msg: "Allows an application to manage (create, destroy, Z-order) application tokens in the window manager."},
			MANAGE_NETWORK_POLICY: {msg: ""},
			MASTER_CLEAR: {msg: "Not for use by third-party applications."},
			MODIFY_NETWORK_ACCOUNTING: {msg: ""},
			MOVE_PACKAGE: {msg: ""},
			PACKAGE_USAGE_STATS: {msg: ""},
			PACKAGE_VERIFICATION_AGENT: {msg: ""},
			PERFORM_CDMA_PROVISIONING: {msg: ""},
			READ_FRAME_BUFFER: {msg: "Allows an application to take screen shots and more generally get access to the frame buffer data."},
			READ_INPUT_STATE: {msg: " This constant was deprecated in API level 16. The API that used this permission has been removed."},
			READ_NETWORK_USAGE_HISTORY: {msg: ""},
			REBOOT: {msg: "Required to be able to reboot the device."},
			SET_ACTIVITY_WATCHER: {msg: "Allows an application to watch and control how activities are started globally in the system."},
			SET_ORIENTATION: {msg: "Allows low-level access to setting the orientation (actually rotation) of the screen."},
			SET_POINTER_SPEED: {msg: "Allows low-level access to setting the pointer speed."},
			SET_TIME: {msg: "Allows applications to set the system time."},
			SHUTDOWN: {msg: ""},
			STATUS_BAR: {msg: "Allows an application to open, close, or disable the status bar and its icons."},
			STATUS_BAR_SERVICE: {msg: ""},
			STOP_APP_SWITCHES: {msg: ""},
			UPDATE_DEVICE_STATS: {msg: "Allows an application to update device statistics."},
			WRITE_GSERVICES: {msg: "Allows an application to modify the Google service map."},
			WRITE_SECURE_SETTINGS: {msg: "Allows an application to read or write the secure system settings."},
		}
	}
	ACCESSIBILITY_FEATURES: {
		msg: "Used for permissions that allow requesting certain accessibility features.",
		perms: {

		}
	},
	ACCOUNTS: {
		msg: "Permissions for direct access to the accounts managed by the Account Manager.",
		perms: {
			ACCOUNT_MANAGER: {msg: "Allows applications to call into AccountAuthenticators."},
			AUTHENTICATE_ACCOUNTS: {msg: "Allows an application to act as an AccountAuthenticator for the AccountManager"},
			GET_ACCOUNTS: {msg: "Allows access to the list of accounts in the Accounts Service"},
			MANAGE_ACCOUNTS: {msg: "Allows an application to manage the list of accounts in the AccountManager"},
			USE_CREDENTIALS: {msg: "Allows an application to request authtokens from the AccountManager"},
		}
	},
	AFFECTS_BATTERY: {
		msg: "Used for permissions that provide direct access to the hardware on the device that has an effect on battery life.",
		perms: {

		}
	},
	APP_INFO: {
		msg: "Group of permissions that are related to the other applications installed on the system.",
		perms: {

		}
	},
	AUDIO_SETTINGS: {
		msg: "Used for permissions that provide direct access to speaker settings the device.",
		perms: {

		}
	},
	BLUETOOTH_NETWORK: {
		msg: "Used for permissions that provide access to other devices through Bluetooth.",
		perms: {
			
		}
	},
	BOOKMARKS: {
		msg: "Used for permissions that provide access to the user bookmarks and browser history.",
		perms: {

		}
	},
	CALENDAR: {
		msg: "Used for permissions that provide access to the device calendar to create / view events.",
		perms: {

		}
	},
	CAMERA: {
		msg: "Used for permissions that are associated with accessing camera or capturing images/video from the device.",
		perms: {

		}
	},
	COST_MONEY: {
		msg: "Used for permissions that can be used to make the user spend money without their direct involvement.",
		perms: {
			CALL_PHONE: {msg: "Allows an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call being placed."},
			SEND_SMS: {msg: "Allows an application to send SMS messages."},
			SEND_SMS_NO_CONFIRMATION: {msg: "Allows an application to send SMS messages without confirmation."},
		}
	},
	DEVELOPMENT_TOOLS: {
		msg: "Group of permissions that are related to development features.",
		perms: {
			SET_ANIMATION_SCALE: {msg: "Modify the global animation scaling factor."},
			SET_DEBUG_APP: {msg: "Configure an application for debugging."},
			SET_PROCESS_LIMIT: {msg: "Allows an application to set the maximum number of (not needed) application processes that can be running."},
			SIGNAL_PERSISTENT_PROCESSES: {msg: "Allow an application to request that a signal be sent to all persistent processes."},
		}
	},
	DEVICE_ALARMS: {
		msg: "Used for permissions that provide access to the user voicemail box.",
		perms: {

		}
	},
	DISPLAY: {
		msg: "Group of permissions that allow manipulation of how another application displays UI to the user.",
		perms: {

		}
	},
	HARDWARE_CONTROLS: {
		msg: "Used for permissions that provide direct access to the hardware on the device.",
		perms: {
			CAMERA: {msg: "Required to be able to access the camera device."},
			FLASHLIGHT: {msg: "Allows access to the flashlight"},
			HARDWARE_TEST: {msg: "Allows access to hardware peripherals."},
			LOCATION_HARDWARE: {msg: "Allows an application to use location features in hardware, such as the geofencing api."},
			MODIFY_AUDIO_SETTINGS: {msg: "Allows an application to modify global audio settings"},
			RECORD_AUDIO: {msg: "Allows an application to record audio"},
			VIBRATE: {msg: "Allows access to the vibrator"},
			ACCESS_MTP: {msg: ""},
			MANAGE_USB: {msg: ""}
		}
	},
	LOCATION: {
		msg: "Used for permissions that allow access to the user\'s current location.",
		perms: {
			ACCESS_COARSE_LOCATION: {msg: "Allows an app to access approximate location derived from network location sources such as cell towers and Wi-Fi."},
			ACCESS_FINE_LOCATION: {msg: "Allows an app to access precise location from location sources such as GPS, cell towers, and Wi-Fi."},
			ACCESS_LOCATION_EXTRA_COMMANDS: {msg: "Allows an application to access extra location provider commands"},
			ACCESS_MOCK_LOCATION: {msg: "Allows an application to create mock location providers for testing"},

		}
	},
	MESSAGES: {
		msg: "Used for permissions that allow an application to send messages on behalf of the user or intercept messages being received by the user.",
		perms: {
			BROADCAST_SMS: {msg: "Allows an application to broadcast an SMS receipt notification."},
			BROADCAST_WAP_PUSH: {msg: "Allows an application to broadcast a WAP PUSH receipt notification."},
			READ_SMS: {msg: "Allows an application to read SMS messages."},
			RECEIVE_MMS: {msg: "Allows an application to monitor incoming MMS messages, to record or perform processing on them."},
			RECEIVE_SMS: {msg: "Allows an application to monitor incoming SMS messages, to record or perform processing on them."},
			RECEIVE_WAP_PUSH: {msg: "Allows an application to monitor incoming WAP push messages."},
			WRITE_SMS: {msg: "Allows an application to write SMS messages."},
			RECEIVE_EMERGENCY_BROADCAST: {msg: "Allows an application to receive emergency broadcast"},
		}
	},
	MICROPHONE: {
		msg: "Used for permissions that are associated with accessing microphone audio from the device.",
		perms: {

		}
	},
	NETWORK: {
		msg: "Used for permissions that provide access to networking services.",
		perms: {
			ACCESS_NETWORK_STATE: {msg: "Allows applications to access information about networks"},
			ACCESS_WIFI_STATE: {msg: "Allows applications to access information about Wi-Fi networks"},
			ACCESS_WIMAX_STATE: {msg: "Allows applications to access information about WiMax networks"},
			BLUETOOTH: {msg: "Allows applications to connect to paired bluetooth devices"},
			CONNECTIVITY_INTERNAL: {msg: ""},
			INTERNET: {msg: "Allows applications to open network sockets."},
			NFC: {msg: "Allows applications to perform I/O operations over NFC"},
			USE_SIP: {msg: "Allows an application to use SIP service"},
		}
	},
	PERSONAL_INFO: {
		msg: "Used for permissions that provide access to information about the device user such as profile information.",
		perms: {
			ADD_VOICEMAIL: {msg: "Allows an application to add voicemails into the system."},
			BIND_APPWIDGET: {msg: "Allows an application to tell the AppWidget service which application can access AppWidget\'s data."},
			DUMP: {msg: "Allows an application to retrieve state dump information from system services."},
			READ_CALENDAR: {msg: "Allows an application to read the user\'s calendar data."},
			READ_CONTACTS: {msg: "Allows an application to read the user\'s contacts data."},
			READ_HISTORY_BOOKMARKS: {msg: "Allows an application to read (but not write) the user\'s browsing history and bookmarks."},
			READ_CALL_LOG: {msg: "Allows an application to read the user\'s call log."},
			READ_LOGS: {msg: "Allows an application to read the low-level system log files."},
			READ_SOCIAL_STREAM: {msg: "Allows an application to read from the user\'s social stream."},
			READ_USER_DICTIONARY: {msg: "Allows an application to read the user dictionary."},
			RETRIEVE_WINDOW_CONTENT: {msg: ""},
			SET_ALARM: {msg: "Allows an application to broadcast an Intent to set an alarm for the user."},
			WRITE_CALENDAR: {msg: "Allows an application to write (but not read) the user\'s calendar data."},
			WRITE_CALL_LOG: {msg: "Allows an application to write (but not read) the user\'s contacts data."},
			WRITE_CONTACTS: {msg: "Allows an application to write (but not read) the user\'s contacts data."},
			WRITE_HISTORY_BOOKMARKS: {msg: "Allows an application to write (but not read) the user\'s browsing history and bookmarks."},
			WRITE_PROFILE: {msg: "Allows an application to write (but not read) the user\'s personal profile data."},
			WRITE_SOCIAL_STREAM: {msg: "Allows an application to write (but not read) the user\'s social stream data."},
			WRITE_USER_DICTIONARY: {msg: "Allows an application to write to the user dictionary"}
		}
	},
	PHONE_CALLS: {
		msg: "Used for permissions that are associated with accessing and modifyign telephony state: placing calls, intercepting outgoing calls, reading and modifying the phone state.",
		perms: {
			MODIFY_PHONE_STATE: {msg: "Allows modification of the telephony state - power on, mmi, etc."},
			PROCESS_OUTGOING_CALLS: {msg: "Allows an application to monitor, modify, or abort outgoing calls."},
			READ_PHONE_STATE: {msg: "Allows read only access to phone state."},
			READ_PROFILE: {msg: "Allows an application to read the user\'s personal profile data."},
			READ_PRIVILEGED_PHONE_STATE: {msg: ""},
		}
	},
	SCREENLOCK: {
		msg: "Group of permissions that are related to the screenlock.",
		perms: {

		}
	},
	SOCIAL_INFO: {
		msg: "Used for permissions that provide access to the user\'s social connections, such as contacts, call logs, social stream, etc.",
		perms: {

		}
	},
	STATUS_BAR: {
		msg: "Used for permissions that change the status bar",
		perms: {

		}
	},
	STORAGE: {
		msg: "Group of permissions that are related to SD card access.",
		perms: {
			READ_EXTERNAL_STORAGE: {msg: "Allows an application to read from external storage."},
			WRITE_EXTERNAL_STORAGE: {msg: "Allows an application to write to external storage."},
			WRITE_MEDIA_STORAGE: {msg: ""}
		}
	},
	SYNC_SETTINGS: {
		msg: "Used for permissions that access the sync settings or sync related information.",
		perms: {

		}
	},
	SYSTEM_CLOCK: {
		msg: "Group of permissions that are related to system clock.",
		perms: {
			SUBSCRIBED_FEEDS_READ: {msg: "Allows an application to allow access the subscribed feeds ContentProvider."},
			SUBSCRIBED_FEEDS_WRITE: {msg: ""},
			SYSTEM_ALERT_WINDOW: {msg: "Allows an application to open windows using the type TYPE_SYSTEM_ALERT, shown on top of all other applications."},
		}
	},
	SYSTEM_TOOLS: {
		msg: "Group of permissions that are related to system APIs.",
		perms: {
			ASEC_ACCESS: {msg: ""},
			ASEC_CREATE: {msg: ""},
			ASEC_DESTROY: {msg: ""},
			ASEC_MOUNT_UNMOUNT: {msg: ""},
			ASEC_RENAME: {msg: ""},
			BLUETOOTH_ADMIN: {msg: "Allows applications to discover and pair bluetooth devices"},
			BROADCAST_PACKAGE_REMOVED: {msg: "Allows an application to broadcast a notification that an application package has been removed."},
			BROADCAST_STICKY: {msg: "Allows an application to broadcast sticky intents."},
			CHANGE_BACKGROUND_DATA_SETTING: {msg: ""},
			CHANGE_COMPONENT_ENABLED_STATE: {msg: "Allows an application to change whether an application component (other than its own) is enabled or not."},
			CHANGE_CONFIGURATION: {msg: "Allows an application to modify the current configuration, such as locale."},
			CHANGE_NETWORK_STATE: {msg: "Allows applications to change network connectivity state"},
			CHANGE_WIFI_MULTICAST_STATE: {msg: "Allows applications to enter Wi-Fi Multicast mode"},
			CHANGE_WIFI_STATE: {msg: "Allows applications to change Wi-Fi connectivity state"},
			CHANGE_WIMAX_STATE: {msg: ""},
			CLEAR_APP_CACHE: {msg: "Allows an application to clear the caches of all installed applications on the device."},
			DIAGNOSTIC: {msg: "Allows applications to RW to diagnostic resources."},
			DISABLE_KEYGUARD: {msg: "Allows applications to disable the keyguard"},
			EXPAND_STATUS_BAR: {msg: "Allows an application to expand or collapse the status bar."},
			FORCE_STOP_PACKAGES: {msg: ""},
			GET_PACKAGE_SIZE: {msg: "Allows an application to find out the space used by any package."},
			GET_TASKS: {msg: "Allows an application to get information about the currently or recently running tasks."},
			GET_TOP_ACTIVITY_INFO: {msg: "Allows an application to retrieve private information about the current top activity, such as any assist context it can provide."},
			GLOBAL_SEARCH: {msg: "This permission can be used on content providers to allow the global search system to access their data."},
			KILL_BACKGROUND_PROCESSES: {msg: "Allows an application to call killBackgroundProcesses(String)."},
			MOUNT_FORMAT_FILESYSTEMS: {msg: "Allows formatting file systems for removable storage."},
			MOUNT_UNMOUNT_FILESYSTEMS: {msg: "Allows mounting and unmounting file systems for removable storage."},
			NET_ADMIN: {msg: ""},
			PERSISTENT_ACTIVITY: {msg: ""},
			READ_SYNC_SETTINGS: {msg: "Allows applications to read the sync settings"},
			READ_SYNC_STATS: {msg: "Allows applications to read the sync stats"},
			RECEIVE_BOOT_COMPLETED: {msg: "Allows an application to receive the ACTION_BOOT_COMPLETED that is broadcast after the system finishes booting."},
			REMOVE_TASKS: {msg: ""},
			REORDER_TASKS: {msg: "Allows an application to change the Z-order of tasks"},
			RESTART_PACKAGES: {msg: " This constant was deprecated in API level 8. The restartPackage(String) API is no longer supported."},
			SET_ANIMATION_SCALE: {msg: ""},
			SET_PREFERRED_APPLICATIONS: {msg: " This constant was deprecated in API level 7. No longer useful, see addPackageToPreferred(String) for details."},
			SET_TIME_ZONE: {msg: "Allows applications to set the system time zone"},
			SET_WALLPAPER: {msg: "Allows applications to set the wallpaper"},
			SET_WALLPAPER_HINTS: {msg: "Allows applications to set the wallpaper hints"},
			SET_WALLPAPER_COMPONENT: {msg: ""},
			SUBSCRIBED_FEEDS_READ: {msg: ""},
			SUBSCRIBED_FEEDS_WRITE: {msg: ""},
			SYSTEM_ALERT_WINDOW: {msg: ""},
			WAKE_LOCK: {msg: "Allows using PowerManager WakeLocks to keep processor from sleeping or screen from dimming"},
			WRITE_APN_SETTINGS: {msg: "Allows applications to write the apn settings."},
			WRITE_SETTINGS: {msg: "Allows an application to read or write the system settings."},
			WRITE_SYNC_SETTINGS: {msg: "Allows applications to write the sync settings"},
		}
	},
	USER_DICTIONARY: {
		msg: "Used for permissions that provide access to the user calendar to create / view events.",
		perms: {

		}
	},
	VOICEMAIL: {
		msg: "Used for permissions that provide access to the user voicemail box.",
		perms: {

		}
	},
	WALLPAPER: {
		msg: "Group of permissions that allow manipulation of how another application displays UI to the user.",
		perms: {

		}
	},
	WRITE_USER_DICTIONARY: {
		msg: "Used for permissions that provide access to the user calendar to create / view events.",
		perms: {

		}
	},
};