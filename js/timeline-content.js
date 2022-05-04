// noinspection JSCheckFunctionSignatures

(()=>{
    const c     = {
        tog     : {
            on  : $('#timeline-on'),
            off : $('#timeline-off'),
        },
        tar     : $('#timeline-target'),
    };
    const mxh   = c.tar[0].offsetHeight;

    c.tog.off.addClass('hide-toggle');
    c.tar[0].setAttribute('style', 'height:0px;');

    c.tog.on.click(()=>{
        c.tog.on.addClass('hide-toggle');
        c.tog.off.removeClass('hide-toggle');
        c.tar.animate({height:mxh+'px',opacity:1},1000);
    });
    c.tog.off.click(()=>{
        c.tog.on.removeClass('hide-toggle');
        c.tog.off.addClass('hide-toggle');
        c.tar.animate({height:0+'px',opacity:0},1000);
    });
})();