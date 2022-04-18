// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

window.preloader    = {
    init            : ()=>{
        $('[data-redirect]').each((i, e)=>{
            $(e).click(()=>{
                console.log('clicked');
                preloader.redirect(e.getAttribute('data-redirect'));
            });
        });
        return preloader;
    },
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

preloader.
init().
fadeOut();