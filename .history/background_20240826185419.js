//Create a file named background.js. This script will handle blocking websites and managing time limits.


const DEFAULT_BLOCKED_SITES=[
    'facebook.com',
    'twitter.com',
    'instagram.com'
]


chrome.storage.sync.get(['blockedSites'],function(result){
    let blocked
})