(()=>{
    //PROCESS       : header video
    const header_video      = ((videoParam=PARAM.process.landing.video)=>{
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

        return {
            destroy         : ()=>{},
        };
    })();

    //PROCESS       : feature services
    const feature_services  = (()=>{
        const thumbs        = $('[data-animate="customCardOverlay"]');

        thumbs.each((i, e)=>{
            const thumb     = e.firstElementChild;

            $(thumb).
            on('mouseenter', ()=>{
                factory.animate.customCard.hover(thumb, true);
            }).
            on('mouseleave', ()=>{
                factory.animate.customCard.hover(thumb);
            });
        });

        return {
            destroy         : ()=>{
                thumbs.each((i, e)=>{
                    const thumb     = e.firstElementChild;

                    $(thumb).
                    unbind('mouseenter').
                    unbind('mouseleave');
                });
            },
        };
    })();

    const offline_service   = (()=>{
        const date              = new Date();
        const day               = factory.date.getToday();
        const hour              = date.getHours();
        const minute            = date.getMinutes();
        const scheduleEvent     = PARAM.appData.schEvent;
        const scheduleToday     = PARAM.appData.schedule[day];
        const scheduleTomorrow  = PARAM.appData.schedule[scheduleToday.next];
        const elements          = {
            serviceTime         : $($('.offline-service-hours')[0]),
            serviceDescription  : $($('.offline-service-description')[0]),
        };
        const run               = (today, tomorrow, type)=>{
            const event         = scheduleEvent[type];
            const startHour     = today.start.hour < 10 ? `0${today.start.hour}`:today.start.hour;
            const startMinute   = today.start.minute < 10 ? `0${today.start.minute}`:today.start.minute;
            const endHour       = today.end.hour < 10 ? `0${today.end.hour}`:today.end.hour;
            const endMinute     = today.end.minute < 10 ? `0${today.end.minute}`:today.end.minute;

            $(event.status).removeClass('d-none');
            elements.serviceTime[0].innerText           = `(${startHour}:${startMinute}-${endHour}:${endMinute})`;
            elements.serviceDescription[0].innerHTML    = event.message;
        };

        if (scheduleToday.open) {
            if (factory.date.timeMore(hour, minute, scheduleToday.start.hour, scheduleToday.start.minute)) {
                if (factory.date.timeLess(hour, minute, scheduleToday.end.hour, scheduleToday.end.minute)) {
                    if (factory.date.timeRange(hour, minute, scheduleToday.rest.start.hour, scheduleToday.rest.start.minute, scheduleToday.rest.end.hour, scheduleToday.rest.end.minute))
                        run(scheduleToday, scheduleTomorrow, 'rest');
                    else
                        run(scheduleToday, scheduleTomorrow, 'open');
                }
                else
                    run(scheduleToday, scheduleTomorrow, 'closed');
            }
            else
                run(scheduleToday, scheduleTomorrow, 'early');
        }
        else
            run(scheduleToday, scheduleTomorrow, 'closed');

        return {
            destroy         : ()=>{},
        }
    })();

    //PROCESS       : innovation
    const innovation        = (()=>{
        if (!PARAM.mobileMode) {
            const group     = factory.animate.boxCard.setGroup();
            const first     = [];
            const boxCards  = $('[data-animate="boxCard"][data-box-group="innovation"]');

            boxCards.each((i, e)=>{
                const id    = e.getAttribute('data-box-id');
                const card  = e;
                const bg    = $(`[data-box-background="${id}"]`)[0];

                factory.animate.boxCard.addBox(id, card, bg, group);

                $(card).
                on('mouseenter', ()=>{
                    factory.animate.boxCard.setActive(id, group);
                });

                first.push(id);
            });

            if (first.length)
                factory.animate.boxCard.setActive(first[0], group);

            return {
                destroy     : ()=>{
                    boxCards.each((i, e)=>{
                        $(e).
                        unbind('mouseenter');
                    });
                },
            }
        }
        else
            factory.animate.boxSlider.setSlider('.carousel');

        return {
            destroy         : ()=>{},
        };
    })();

    //PROCESS       : destroy current state
    app.destroy             = ()=>{
        header_video.destroy();
        feature_services.destroy();
        innovation.destroy();
    };
})();