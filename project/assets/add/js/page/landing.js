// noinspection JSUnresolvedVariable,JSUnresolvedFunction

(()=>{
    feather.replace();
    page_switcher.focus('launcher');

    if ($(window).width() < 768) {
        (()=>{
            document.body.setAttribute('style', 'overflow:hidden;');
            setTimeout(()=>{
                const background    = $('#landing-bg');
                const bg_prop       = background[0].getAttribute('style');
                const items         = Array.from($('#landing-items')[0].children);

                const itm_intervals = {};

                items.forEach((e, i)=>{
                    e.setAttribute('style','top:360px;');
                    let itm_iteration   = 360;
                    let ease            = -4.8;
                    itm_intervals[i]    = setInterval(()=>{
                        ease           += 0.25;
                        itm_iteration  -= ease;
                        e.setAttribute('style', 'top:'+itm_iteration+'px');
                        if (itm_iteration<=0) {
                            document.body.setAttribute('style', '');
                            e.setAttribute('style', 'top:0');
                            clearInterval(itm_intervals[i]);
                        }
                    }, 12);
                });

                background[0].setAttribute('style', bg_prop+';right:-40vw');
                let bg_iteration    = -100;
                let bg_interval     = setInterval(()=>{
                    bg_iteration   += 1;
                    background[0].setAttribute('style', bg_prop+';right:'+bg_iteration+'vw');
                    if (bg_iteration >= 0) {
                        background[0].setAttribute('style', bg_prop+';right:0;');
                        document.body.setAttribute('style', '');
                        clearInterval(bg_interval);
                    }
                },2);

            }, 1000);
        })();
    }
})();