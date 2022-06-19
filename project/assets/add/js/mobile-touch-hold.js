// noinspection JSUnresolvedFunction

window.mob_touch_hold = (()=>{
    if ($(window).width() < 769) {
        return (x, callback=()=>{})=>{
            let touch   = false;
            let startX, startY, moveX, moveY;
            let timeout;

            $(x).on('touchstart', e=>{
                touch   = true;
                startX  = e.touches[0].clientX;
                startY  = e.touches[0].clientY;
                moveX   = startX;
                moveY   = startY;
                timeout = setTimeout(()=>{
                    if (touch && Math.abs(startX - moveX) < 5 && Math.abs(startY - moveY) < 5) {
                        touch = false;
                        callback();

                        return false;
                    }
                }, 600);
            }).
            on('touchmove', e=>{
                moveX   = e.touches[0].clientX;
                moveY   = e.touches[0].clientY;
            }).
            on('touchend', ()=>{
                if (timeout)
                    clearTimeout(timeout);
                touch   = false;
            });
        };
    }

    return ()=>{};
})();