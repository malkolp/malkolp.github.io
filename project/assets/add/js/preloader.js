// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const el            = $('#loader-wrapper');
    const root          = $('meta[name="data-root"]').attr('content');

    window.preloader_   = {
        fadeIn          : (fun=()=>{}, t=1000)=>{
            el.fadeIn();
            setTimeout(fun, t);
        },
        fadeOut         : (fun=()=>{}, t=1000)=>{
            fun();
            setTimeout(()=>{
                el.fadeOut();
            }, t);
        },
        redirect        : (url=window.location.href, out=false, t=1000)=>{
            el.fadeIn();
            setTimeout(()=>{
                if (!out)
                    window.location.href    = root + url;
                else
                    window.location.href    = url;
                el.fadeOut();
            }, t);
        },
    };

    (()=>{
        $('[data-redirect]').each((i, e)=>{
            const tar   = e.getAttribute('data-redirect');

            $(e).click(()=>{
                preloader_.redirect(tar);
            });
        });
    })();

    if (!$('meta[name="data-prevent-auto-fade"]')[0])
        preloader_.fadeOut();
})();