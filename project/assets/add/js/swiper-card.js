// noinspection JSUnresolvedFunction

(()=>{
    const win_              = $(window);
    const body_             = document.body;
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

    window.card_swiper      = (s, prop={})=>{
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
            e.preventDefault();
        });
        slider.addEventListener('touchend', ()=>{
            execute(parent, rangeY, callTop, callBot);
            startY          = 0;
            moveY           = 0;
            rangeY          = 0;
        });
    };
    window.card_swiper_open = (s, c=()=>{})=>{
        let height          = win_.height() + 10;

        body_.setAttribute('style', 'overflow-y:hidden!important;');
        s.setAttribute('style', 'transform:translate(0, '+height+'px);');
        c();
        let anim            = setInterval(()=>{
            height         -= 18;
            if (height < 0) {
                s.setAttribute('style', 'transform:translate(0,0);');
                body_.setAttribute('style', '');
                clearInterval(anim);
            }
            else
                s.setAttribute('style', 'transform:translate(0,'+height+'px);');
        }, 2);
    };
    window.card_swiper_close    = (s, c=()=>{})=>{
        let par             = s.parentNode;
        let height          = $(par).height();
        let range           = 0;

        s.setAttribute('style', 'transform:translate(0, '+height+'px);');
        let anim            = setInterval(()=>{
            range          += 8;
            height         -= 12;
            if (height < 0) {
                par.setAttribute('style', 'max-height:0px;transform:translate(0,'+range+'px)');
                clearInterval(anim);
                c();
                par.setAttribute('style', '');
            }
            else
                par.setAttribute('style', 'max-height:'+height+'px;transform:translate(0,'+range+'px)');
        }, 2);
    };
})();