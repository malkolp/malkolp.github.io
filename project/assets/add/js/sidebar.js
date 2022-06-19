// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    let onToggle        = false;
    let mobile          = false;
    let maxWidth        = {sidebar:0, overlay:0};
    const sidebar       = $('.ds-sidebar');
    const overlay       = $('.ds-sidebar-overlay');
    const app_head      = $('.ds-head');
    const app_body      = $('.ds-body');
    const root_body     = $(document.body);
    const tog_on        = $('[data-sidebar-toggle="on"]');
    const tog_off       = $('[data-sidebar-toggle="off"]');
    const fun_on        = ()=>{
        overlay[0].setAttribute('style','');
        tog_on.addClass('d-none');
        tog_off.removeClass('d-none');
        app_body.addClass('hide-overflow hide-height');
        root_body.addClass('hide-overflow');
        app_head.addClass('hide-overflow');
        sidebar.animate({width:maxWidth.sidebar+'vw'},260, ()=>{
            onToggle = true;
        });
        overlay.animate({width:'100vw'}, 260);
        app_head.animate({'padding-left':maxWidth.sidebar+'vw'}, 260);
        app_body.animate({'margin-left':maxWidth.sidebar+'vw'}, 260);
    };
    const fun_off       = ()=>{
        tog_on.removeClass('d-none');
        tog_off.add('d-none');
        sidebar.animate({width:'0vw'},260, ()=>{
            app_body.removeClass('hide-overflow');
            app_head.removeClass('hide-overflow');
            root_body.removeClass('hide-overflow');
            onToggle = false;
        });
        overlay.animate({width:'0vw'}, 260);
        app_head.animate({'padding-left':'0vw'}, 260);
        app_body.animate({'margin-left':'0vw'}, 260);
    };
    const win_          = $(window);
    const o_            = {
        sidebar         : sidebar,
        menus           : {},
        active          : undefined,
        toggle          : (t=false)=>{
            if (t)
                fun_on();
            else
                fun_off();
        },
        add             : (k, e)=>{
            o_.menus[k] = $(e);
        },
        setActive       : k=>{
            k           = o_.menus[k];
            if (k !== undefined) {
                o_.setNoActive();
                o_.active = k;
                k.addClass('active');
            }
        },
        setNoActive     : ()=>{
            if (o_.active !== undefined)
                o_.active.removeClass('active');
        },
    };

    const resize        = (w=win_.width())=>{
        mobile          = true;
        if (w <= 575) return 100;
        if (w <= 767) return 50;
        mobile          = false;
        if (w <= 991) return 28;
        if (w <= 1199) return 23;
        if (w <= 1399) return 18;

        return 13;
    };
    const setSize       = ()=>{
        const w         = resize();

        maxWidth        = {
            sidebar     : w,
        };

        if (onToggle) {
            sidebar[0].setAttribute('style', 'width:'+w+'vw');
            overlay[0].setAttribute('style', 'width:100vw');
            app_head[0].setAttribute('style', 'padding-left:'+w+'vw');
            app_body[0].setAttribute('style', 'margin-left:'+w+'vw');
        }
    };

    sidebar[0].setAttribute('style', 'width:0vw');
    overlay[0].setAttribute('style', 'width:0vw');
    app_head[0].setAttribute('style', 'padding-left:0vw');
    app_body[0].setAttribute('style', 'margin-left:0vw');
    setSize();
    win_.resize(()=>{
        setSize();
    });
    tog_on.click(()=>{
        fun_on();
    });
    tog_off.click(()=>{
        fun_off();
    });

    (()=>{
        $('[data-sidebar-menu]').each((i, e)=>{
            const page  = e.getAttribute('data-sidebar-page');
            const menu  = e.getAttribute('data-sidebar-menu');
            const togHd = e.getAttribute('data-toggle-head') === 'true';

            o_.add(menu, e);

            if (page) {
                $(e).click(()=>{
                    page_switcher.focus(page);
                    o_.setActive(menu);
                    if (mobile)
                        fun_off();
                    if (togHd)
                        app_head.removeClass('d-none');
                    else
                        app_head.addClass('d-none');
                });
            }
        });
        o_.setActive('dashboard');
        window.sidebar  = o_;
    })();
    (()=>{
        $('[data-sidebar-swiper="on"]').each((i, e)=>{
            swipe_event(e, 'right', ()=>{fun_on();});
        });
        $('[data-sidebar-swiper="off"]').each((i, e)=>{
            swipe_event(e, 'left', ()=>{fun_off();});
        });
    })();
})();