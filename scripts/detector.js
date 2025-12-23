//figures out what site we're on and loads the css we need


//ar lets go





chrome.storage.local.get(['enabled', 'sites'], (data) => {


    const enabled = data.enabled !== false;


    if(!enabled) {

        console.log('disabled, skipping');
        return
    }



    detectSite(data.sites || {});
});


function detectSite(siteSettings) {



    const host = window.location.hostname;



    console.log('checking site....', host);

    let site = 'generic';
    let css = 'generic.css'






    //twitter one

    if(host.includes('twitter.com') || host.includes('x.com')) {
        site = 'twitter';
        css = 'twitter.css';
    }


    else if (host.includes('google.com') && !host.includes('mail.google')) {

        site = 'google';
        css = 'google.css';
    }


    else if(host.includes('mail.google.com')) {

        site = 'gmail';
        css = 'gmail.css';
    }

    else if(host.includes('facebook.com')) {

        site = 'facebook';
        css = 'facebook.css';



    }


    //yt

    else if(host.includes('youtube.com')) {

        site = 'youtube';
        css = 'youtube.css';
    }


    //reddit


    else if (host.includes('reddit.com')){


        site = 'reddit';
        css = 'reddit.css';

    }


    //instagram


    else if (host.includes('instagram.com')){


        site = 'instagram';
        css = 'instagram.css';
    }




    else if (host.includes('linkedin.com')){


        site = 'linkedin';
        css = 'linkedin.css'
    }


    //github 

    //(dis is gunna be hard)


    if (host.includes(github.com)) {

        site = 'github';
        css = 'github.css';
    }




    if (site !== 'generic' && siteSettings[site] !== false){

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = chrome.runtime.getURL('styles/' + css);
        document.documentElement.appendChild(link);


    }

    console.log('loaded the theme: ', site);


    
}




//please work
//update 2 : added many sitessss, x, google, mail, fb, yt, reddit, ig , linked in, gh 


//also added sm generic shit for the websites that idk


//now it runs immediatly and respects settings