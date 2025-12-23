//popup javascript, js hadnles button clicks


//load current state on popup open
chrome.storage.local.get(['enabled'], (data) => {
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





//this is the best way trust me ik this shi