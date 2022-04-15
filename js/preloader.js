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
};
preloader.fadeOut();