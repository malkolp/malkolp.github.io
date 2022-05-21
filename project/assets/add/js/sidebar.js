// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    let onToggle        = false;
    let maxWidth        = {sidebar:0, overlay:0};
    const sidebar       = $('.ds-sidebar');
    const overlay       = $('.ds-sidebar-overlay');
    const app_head      = $('.ds-head');
    const app_body      = $('.ds-body');
    const tog_on        = $('[data-sidebar-toggle="on"]');
    const tog_off       = $('[data-sidebar-toggle="off"]');
    const win_          = $(window);

    const resize        = (w=win_.width())=>{
        if (w <= 575) return 50;
        if (w <= 767) return 40;
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
        overlay[0].setAttribute('style','');
        tog_on.addClass('d-none');
        tog_off.removeClass('d-none');
        app_body.addClass('hide-overflow-x');
        sidebar.animate({width:maxWidth.sidebar+'vw'},260, ()=>{
            onToggle = true;
        });
        overlay.animate({width:'100vw'}, 260);
        app_head.animate({'padding-left':maxWidth.sidebar+'vw'}, 260);
        app_body.animate({'margin-left':maxWidth.sidebar+'vw'}, 260);
    });
    tog_off.click(()=>{
        tog_on.removeClass('d-none');
        tog_off.add('d-none');
        sidebar.animate({width:'0vw'},260, ()=>{
            app_body.removeClass('hide-overflow-x');
            onToggle = false;
        });
        overlay.animate({width:'0vw'}, 260);
        app_head.animate({'padding-left':'0vw'}, 260);
        app_body.animate({'margin-left':'0vw'}, 260);
    });
})();