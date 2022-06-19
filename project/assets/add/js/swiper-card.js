// noinspection JSUnresolvedFunction

(()=>{
    const win_              = $(window);
    const body_             = document.body;
    const overlay_          = $('.card-overlay')[0];
    const execute           = (parent, range, callTop, callBot)=>{
        if (range > 0) {
            if (win_.height() / 2.5 < range) {
                let height  = $(parent).height();
                let anim    = setInterval(()=>{
                    range  += 8;
                    height -= 12;
                    if (height < 0) {
                        parent.setAttribute('style', 'max-height:'+height+'px;transform:translate(0,'+range+'px)');
                        clearInterval(anim);
                        callBot();
                        parent.setAttribute('style', '');
                    }
                    else
                        parent.setAttribute('style', 'max-height:'+height+'px;transform:translate(0,'+range+'px)');
                },2);
            }
            else {
                let anim    = setInterval(()=>{
                    range -= 8;
                    if (range < 0) {
                        parent.setAttribute('style', 'transform:translate(0,0)');
                        clearInterval(anim);
                    }
                    else
                        parent.setAttribute('style', 'transform:translate(0,'+range+'px)');
                },2);
            }
        }
        else {
            if (win_.height() / 2.5 < range) {
                console.log('exec this');
            }
            else {
                let anim    = setInterval(()=>{
                    range  += 8;
                    if (range > 0) {
                        parent.setAttribute('style', 'transform:translate(0,0)');
                        clearInterval(anim);
                    }
                    else
                        parent.setAttribute('style', 'transform:translate(0,'+range+'px)');
                }, 2);
            }
        }
    };
    const execStatic        = (parent, range, low, mid, high)=>{
        if (range < low.size) {
            let interval    = setInterval(()=>{
                range -= 8;

                if (range > 0)
                    parent.setAttribute('style', 'transform:translate(0, ' + range + 'px)');
                else {
                    parent.setAttribute('style', 'transform:translate(0, 0)');
                    clearInterval(interval);
                }
            }, 2);
            low.call();

            return 0;
        }
        else {
            let standard        = high.size;
            let call            = high.call;

            if (range < mid.size) {
                standard    = mid.size;
                call        = mid.call;
            }

            let interval        = setInterval(()=>{
                range += 8;

                if (range < standard)
                    parent.setAttribute('style', 'transform:translate(0, ' + range + 'px)');
                else {
                    parent.setAttribute('style', 'transform:translate(0, '+ standard + 'px)');
                    clearInterval(interval);
                }
            }, 2);
            call();

            return standard;
        }
    };

    overlay_.setAttribute('style', 'transform:translateY(100vh);');

    window.static_swiper    = (s, prop={})=>{
        const slider        = $(s)[0];
        const parent        = slider.parentNode;
        const low           = win_.height() * 0.25;
        const mid           = win_.height() * 0.6;
        const high          = win_.height() * 0.85;
        let lowCall         = prop.low;
        let midCall         = prop.mid;
        let higCall         = prop.high;
        let anchor          = prop.anchor;
        let start, move, range;

        if (!lowCall)
            lowCall         = ()=>{};
        if (!midCall)
            midCall         = ()=>{};
        if (!higCall)
            higCall         = ()=>{};
        if (!anchor)
            anchor          = 45;

        const lowProp       = {size:low, call:lowCall};
        const midProp       = {size:mid, call:midCall};
        const highProp      = {size:high, call:higCall};

        slider.addEventListener('touchstart', e=>{
            if (!move) {
                start = e.touches[0].clientY;
                move  = start;
            }
        });
        slider.addEventListener('touchmove', e=>{
            move    = e.touches[0].clientY;
            range   = move - start;
            if (start <= 0)
                range -= anchor;
            parent.setAttribute('style', 'transform:translate(0, ' + range + 'px)');
            e.preventDefault();
        });
        slider.addEventListener('touchend', ()=>{
            move    = execStatic(parent, range, lowProp, midProp, highProp);
            start   = 0;
        });
    };
    window.card_swiper      = (s, prop={}, o=overlay_)=>{
        const slider        = $(s)[0];
        const parent        = slider.parentNode;
        let callTop         = ()=>{};
        let callBot         = ()=>{};
        let startY, moveY, rangeY;

        if (prop['swipedTop'])
            callTop         = prop['swipedTop'];
        if (prop['swipedBot'])
            callBot         = prop['swipedBot'];

        slider.addEventListener('touchstart', e=>{
            startY          = e.touches[0].clientY;
            moveY           = startY;
            rangeY          = 0;
        });
        slider.addEventListener('touchmove', e=>{
            moveY           = e.touches[0].clientY;
            rangeY          = moveY - startY;
            parent.setAttribute('style', 'transform:translate(0, '+rangeY+'px)');
            o.setAttribute('style', 'transform:translate(0, '+rangeY+'px)');
            e.preventDefault();
        });
        slider.addEventListener('touchend', ()=>{
            execute(parent, rangeY, callTop, callBot);
            startY          = 0;
            moveY           = 0;
            rangeY          = 0;
        });
    };
    window.card_swiper_open = (s, c=()=>{},o=overlay_)=>{
        let height          = win_.height() + 10;

        body_.setAttribute('style', 'overflow-y:hidden!important;');
        s.setAttribute('style', 'transform:translate(0, '+height+'px);');
        o.setAttribute('style', 'transform:translate(0, '+height+'px);');
        c();
        let anim            = setInterval(()=>{
            height         -= 18;
            if (height < 0) {
                s.setAttribute('style', 'transform:translate(0,0);');
                o.setAttribute('style', 'transform:translate(0, 0);');
                body_.setAttribute('style', '');
                clearInterval(anim);
            }
            else {
                s.setAttribute('style', 'transform:translate(0,'+height+'px);');
                o.setAttribute('style', 'transform:translate(0,'+height+'px);');
            }
        }, 2);
    };
    window.card_swiper_close    = (s, c=()=>{}, o=overlay_)=>{
        let par             = s.parentNode;
        let height          = $(par).height();
        let range           = 0;

        s.setAttribute('style', 'transform:translate(0, '+height+'px);');
        o.setAttribute('style', 'transform:translate(0, '+height+'px);');
        let anim            = setInterval(()=>{
            range          += 8;
            height         -= 12;
            if (height < 0) {
                par.setAttribute('style', 'max-height:0px;transform:translate(0,'+range+'px)');
                o.setAttribute('style', 'transform:translate(0,'+range+'px)');
                clearInterval(anim);
                c();
                par.setAttribute('style', '');
                o.setAttribute('style', '');
            }
            else {
                par.setAttribute('style', 'max-height:'+height+'px;transform:translate(0,'+range+'px)');
                o.setAttribute('style', 'transform:translate(0,'+range+'px)');
            }
        }, 2);
    };
})();