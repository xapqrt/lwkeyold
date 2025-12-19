//figures out what site we're on and loads the css we need


//ar lets go

function detectSite(){

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


    if (site !== 'generic'){

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = chrome.runtime.getURL('styles/' + css);
        document.documentElement.appendChild(link);


    }

    console.log('loaded the theme: ', site);


    
}


detectSite();

//please work