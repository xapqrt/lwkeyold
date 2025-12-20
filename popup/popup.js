//popup javascript, js hadnles button clicks

document.getElementById('toggle-btn').addEventListener('click', function() {


    const status = document.getElementById('status-text');

    if(this.textContent === 'Disable'){


        this.textContent = 'Enable';
        status.textContent = 'Extension disabled';

    } else {

        this.textContent = 'Disable';
        status.textContent = 'Extension disabled';
    }

});


document.getElementById('refresh-btn').addEventListener('click', function() {
    chrome.tabs.reload();
});





//this is the best way trust me ik this shi