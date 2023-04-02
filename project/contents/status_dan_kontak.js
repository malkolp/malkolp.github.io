(()=>{
    const heading           = (()=>{
        const headings      = factory.animate.tagSlider.setSlider('.content-heading-tags');
        const frame         = $('.frame-source');
        const frame_loading = $('.frame-loading');
        const x             = {};

        (()=>{
            frame[0].onload     = ()=>{
                frame_loading.addClass('d-none');
                frame.removeClass('d-none');
            }
            [
                {
                    id          : 'pel_yos_sudarso',
                    route       : `https://intranet.karantina.pertanian.go.id/display/index.php?upt=4001`,
                },
                {
                    id          : 'bdr_pattimura',
                    route       : `https://intranet.karantina.pertanian.go.id/display/index.php?upt=4005`,
                },
                {
                    id          : 'pel_namlea',
                    route       : `https://intranet.karantina.pertanian.go.id/display/index.php?upt=4004`,
                },
                {
                    id          : 'pel_tual',
                    route       : `https://intranet.karantina.pertanian.go.id/display/index.php?upt=4002`,
                },
                {
                    id          : 'pel_kobisadar',
                    route       : `https://intranet.karantina.pertanian.go.id/display/index.php?upt=4006`,
                },
                {
                    id          : 'pos_ambon',
                    route       : `https://intranet.karantina.pertanian.go.id/display/index.php?upt=4003`,
                },
            ].forEach(args=>{
                const s                 = {
                    route               : args.route,
                    setFilter           : ()=>{

                    },
                };

                headings.setCallback(args.id, ()=>{
                    frame_loading.removeClass('d-none');
                    frame.addClass('d-none');
                    frame[0].src        = s.route;
                });

                x[args.id]              = s;
            });
        })();

        headings.setActive('pel_yos_sudarso');

        return {
            destroy         : ()=>{},
        };
    })();

    app.destroy             = ()=>{
        heading.destroy();
    };
})();