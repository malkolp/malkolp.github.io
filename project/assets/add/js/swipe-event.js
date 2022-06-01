(()=>{
    const makeTrigger   = (direction)=>{
        if (direction === 'up')
            return (sy, sx, my, mx, callback=()=>{})=>{if (sy-100 > my) callback();};
        if (direction === 'down')
            return (sy, sx, my, mx, callback=()=>{})=>{if (sy+100 < my) callback();};
        if (direction === 'right')
            return (sy, sx, my, mx, callback=()=>{})=>{if (sx+100 < mx) callback();};

        return (sy, sx, my, mx, callback=()=>{})=>{if (sx-100 > mx) callback();};
    };

    window.swipe_event  = (element, to='right', callback=()=>{})=>{
        let startingX , startingY , movingX , movingY ,canSwipe;
        const fun       = makeTrigger(to);
        canSwipe        = true;

        element.addEventListener('touchstart', evt=>{
            let tar     = evt.target;
            while (tar !== element) {
                if (tar.getAttribute('data-disable-swiper') != null) {
                    canSwipe = false;
                    break;
                }
                tar     = tar.parentNode;
            }
            startingX   = evt.touches[0].clientX;
            startingY   = evt.touches[0].clientY;
        });
        element.addEventListener('touchmove', evt=>{
            movingX     = evt.touches[0].clientX;
            movingY     = evt.touches[0].clientY;
        });
        element.addEventListener('touchend', ()=>{
            if (canSwipe)
                fun(startingY, startingX, movingY, movingX, callback);
            startingX   = 0;
            startingY   = 0;
            movingX     = 0;
            movingY     = 0;
            canSwipe    = true;
        });
    };
})();