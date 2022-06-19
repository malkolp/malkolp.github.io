// noinspection JSUnresolvedFunction

(()=>{
    if ($(window).width() < 992) {
        const head  = $('.ds-head-bg');

        head[0].setAttribute('style', 'opacity:0');
        $(window).scroll(()=>{
            let opacity;
            const scroll    = window.scrollY;

            if (scroll <= 20)
                opacity     = 0;
            else if (scroll >= 60)
                opacity     = 1;
            else
                opacity     = ((scroll - 20) * 100 / 40) / 100;

            const shadow    = opacity * 0.25;
            head[0].setAttribute('style', 'opacity:' + opacity + ';-webkit-box-shadow: 0 18px 31px -4px rgba(0,0,0,'+shadow+');-moz-box-shadow: 0 18px 31px -4px rgba(0,0,0,'+shadow+');box-shadow: 0 18px 31px -4px rgba(0,0,0,'+shadow+');');
        });
    }
})();