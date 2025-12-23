// service worker for the extension


// handles messages and storage stuff

// default settings


const defaults = {
    enabled: true,
    sites: {
        twitter: true,
        google: true,
        gmail: true,
        facebook: true,
        youtube: true,
        reddit: true,
        instagram: true,
        linkedin: true,
        github: true
    }
};

// initialize settings on install



chrome.runtime.onInstalled.addListener(() => {
    console.log('lwkey old installed!');
    chrome.storage.local.set(defaults);
});



// listen for messages from popup
chrome.runtime.onMessage.addListener((msg, sender, respond) => {
    if (msg.type === 'getSettings') {


        chrome.storage.local.get(null, (data) => {
            respond(data);
        });
        return true; 
    }
    
    if (msg.type === 'setEnabled') {

        chrome.storage.local.set({ enabled: msg.enabled });
        respond({ ok: true });
    }
    
    if (msg.type === 'toggleSite') {
        chrome.storage.local.get('sites', (data) => {


            data.sites[msg.site] = msg.enabled;

            chrome.storage.local.set({ sites: data.sites });
            respond({ ok: true });
        });
        return true;
    }
});

