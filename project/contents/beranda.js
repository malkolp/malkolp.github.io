(()=>{
    //PROCESS       : header video
    ((videoParam=PARAM.process.landing.video)=>{
        if (!PARAM.mobileMode) {
            const video     = document.createElement('video');
            const source    = document.createElement('source');

            source.src          = videoParam.source;
            source.type         = videoParam.type;

            video.appendChild(source);

            video.autoplay      = true;
            video.loop          = true;
            video.playsInline   = true;
            video.muted         = true;

            $(videoParam.target).prepend(video);
        }
        else {

        }
    })();

    //PROCESS       : feature services
    (()=>{
        $('[data-animate="customCardOverlay"]').each((i, e)=>{
            const thumb     = e.firstElementChild;

            $(thumb).
            unbind('mouseenter').
            unbind('mouseleave').
            on('mouseenter', ()=>{
                factory.animate.customCard.hover(thumb, true);
            }).
            on('mouseleave', ()=>{
                factory.animate.customCard.hover(thumb);
            });
        });
    })();

    //PROCESS       : innovation
    (()=>{
        if (!PARAM.mobileMode) {
            const group     = factory.animate.boxCard.setGroup();
            const first     = [];

            $('[data-animate="boxCard"][data-box-group="innovation"]').each((i, e)=>{
                const id    = e.getAttribute('data-box-id');
                const card  = e;
                const bg    = $(`[data-box-background="${id}"]`)[0];

                factory.animate.boxCard.addBox(id, card, bg, group);

                $(card).
                unbind('mouseenter').
                on('mouseenter', ()=>{
                    factory.animate.boxCard.setActive(id, group);
                });

                first.push(id);
            });

            if (first.length)
                factory.animate.boxCard.setActive(first[0], group);
        }
        else
            factory.animate.boxSlider.setSlider('.carousel');
    })();
})();