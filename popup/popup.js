//popup javascript, js hadnles button clicks


//load current state on popup open
chrome.storage.local.get(['enabled', 'sites'], (data) => {
    const enabled = data.enabled !== false;
    const btn = document.getElementById('toggle-btn');
    const status = document.getElementById('status-text');
    
    if(enabled) {
        btn.textContent = 'Disable';
        status.textContent = 'Extension enabled';
    } else {
        btn.textContent = 'Enable';
        status.textContent = 'Extension disabled';
    }


    //load site toggles
    const sites = data.sites || {};
    document.querySelectorAll('.site-toggles input').forEach(checkbox => {
        const site = checkbox.dataset.site;
        checkbox.checked = sites[site] !== false;
    });
});


//detect current site and show indicator
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0]?.url || '';
    const siteLabel = document.getElementById('site-name');
    
    let site = 'generic';
    
    if(url.includes('twitter.com') || url.includes('x.com')) site = 'Twitter/X';
    else if(url.includes('mail.google.com')) site = 'Gmail';
    else if(url.includes('google.com')) site = 'Google';
    else if(url.includes('facebook.com')) site = 'Facebook';
    else if(url.includes('youtube.com')) site = 'YouTube';
    else if(url.includes('reddit.com')) site = 'Reddit';
    else if(url.includes('instagram.com')) site = 'Instagram';
    else if(url.includes('linkedin.com')) site = 'LinkedIn';
    else if(url.includes('github.com')) site = 'GitHub';
    else site = 'generic';
    
    siteLabel.textContent = site;
});


document.getElementById('toggle-btn').addEventListener('click', function() {


    const status = document.getElementById('status-text');

    if(this.textContent === 'Disable'){


        this.textContent = 'Enable';
        status.textContent = 'Extension disabled';
        chrome.storage.local.set({ enabled: false });

    } else {

        this.textContent = 'Disable';
        status.textContent = 'Extension enabled';
        chrome.storage.local.set({ enabled: true });
    }

});


document.getElementById('refresh-btn').addEventListener('click', function() {
    chrome.tabs.reload();
});



//site toggle handlers

document.querySelectorAll('.site-toggles input').forEach(checkbox => {

    checkbox.addEventListener('change', function() {
        const site = this.dataset.site;
        const enabled = this.checked;

        chrome.storage.local.get('sites', (data) => {
            const sites = data.sites || {};
            sites[site] = enabled;
            chrome.storage.local.set({ sites: sites });
        });
    });

});


//this is the best way trust me ik this shi