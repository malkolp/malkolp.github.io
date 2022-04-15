(()=>{
    const overlayObj_   = {
        init            : (selector='.masonry-overlay', add=overlayObj_.add)=>{
            ($(selector).toArray()).forEach(e=>{
                add(e);
            });
        },
        add             : (e, cf='masonry-title-focus', cu='masonry-title-default', sf='masonry-subtitle-focus', su='masonry-subtitle-default', lu='masonry-logo-default', lf='masonry-logo-focus')=>{
            const tar   = $(e.firstElementChild);
            const logo  = $(e.firstElementChild.firstElementChild);
            const sub   = $(e.firstElementChild.lastElementChild);

            $(e).
            mouseenter(()=>{
                tar.removeClass(cu).addClass(cf);
                sub.removeClass(su).addClass(sf);
                logo.removeClass(lu).addClass(lf);
            }).
            mouseleave(()=>{
                tar.removeClass(cf).addClass(cu);
                sub.removeClass(sf).addClass(su);
                logo.removeClass(lf).addClass(lu);
            });
        },
    };
    overlayObj_.init();
})();