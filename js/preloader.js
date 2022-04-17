// noinspection JSUnresolvedFunction

window.preloader    = {
    fadeIn          : ()=>{
        $('#loader-wrapper').fadeIn();
    },
    fadeOut         : ()=>{
        setTimeout(()=>{
            $('#loader-wrapper').fadeOut();
        }, 2000);
    },
    redirect        : url=>{
        preloader.fadeIn();
        setTimeout(()=>{
            window.location.href = url;
        }, 2000);
    },
};
preloader.fadeOut();