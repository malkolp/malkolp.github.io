// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

window.map_lib_         = (()=>{
    const palette       = ['#184D47', '#035956', '#00917C', '#A5F0C5', '#F0F3BD', '#02C39A', '#00A896', '#028090', '#05668D', '#245254', '#387271', '#549895', '#8EBCB1', '#95C4B4'];
    const map           = {
        paths           : $('.map-path'),
        labels          : $('.map-labels'),
        values          : $('.map-values'),
        points          : $('.map-point'),
    };
    const transform     = e=>{
        const dataTrans = e.data_transform;

        e.style.transform = 'translate('+dataTrans.translateX+'px, '+dataTrans.translateY+'px) scale('+dataTrans.scale+')';
    };
    const dragging      = event=>{
        let target = event.target,
            x = target.data_transform.translateX + event.dx,
            y = target.data_transform.translateY + event.dy;

        transform(target);

        target.data_transform.translateX = x;
        target.data_transform.translateY = y;
    };
    const scaling       = (e, d, max, iter)=>{
        const newScale  = d.scale + 1;

        if (newScale <= max) {
            d.scalePad  = newScale;

            let anim    = setInterval(()=>{
                d.scale += iter;
                if (d.scale < newScale)
                    transform(e[0]);
                else {
                    d.scale = newScale;
                    transform(e[0]);
                    updateScale(e[0]);
                    clearInterval(anim);
                }
            }, 2);
        }
    };
    const updateScale   = d=>{
        const t         = d.data_transform;
        const style     = t.style;

        style.innerHTML = '.r-map-transform .map-labels text{ font-size: ' + (t.font_size / t.scale) + 'rem;} .map-path path{stroke-width: ' + (t.path_width / t.scale) + 'rem;} .map-point circle{r: ' + (t.point_width / t.scale) + 'rem;}';
    };

    return {
        initDataTrans   : (cls='.r-map-transform')=>{
            const style         = document.createElement('style');
            const trans         = $(cls)[0];

            document.head.appendChild(style);

            trans['data_transform']     = {
                translateX  : 0.0,
                translateY  : 0.0,
                scale       : 1.0,
                scalePad    : 1.0,
                font_size   : 3.5,
                path_width  : 0.25,
                point_width : 0.25,
                style       : style,
            };
            updateScale(trans);

            return window.map_lib_;
        },
        hover           : dist=>{
            const svg   = dist.svg;
            const sel   = $(svg.shape).add(svg.point);

            sel.on('mouseenter', ()=>{
                svg.paths.select.addClass('hover');
            }).
            on('mouseleave', ()=>{
                svg.paths.select.removeClass('hover');
            });

            return window.map_lib_;
        },
        toggleLabel     : (t=false)=>{
            let fun     = 'addClass';

            if (t)
                fun     = 'removeClass';
            map.labels[fun]('d-none');

            return window.map_lib_;
        },
        toggleValue     : (t=false)=>{
            let fun     = 'addClass';

            if (t)
                fun     = 'removeClass';
            map.values[fun]('d-none');

            return window.map_lib_;
        },
        togglePoint     : (t=false)=>{
            let fun     = 'addClass';

            if (t)
                fun     = 'removeClass';
            map.points[fun]('d-none');

            return window.map_lib_;
        },
        draggable       : (cls='.r-map-transform')=>{
            interact(cls)
                .draggable({
                    // enable inertial throwing
                    inertia: true,
                    // keep the element within the area of it's parent
                    restrict: {
                        restriction: "parent",
                        endOnly: true,
                        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                    },
                    autoScroll: true,

                    onmove: dragging,
                });

            return window.map_lib_;
        },
        scalable        : (cls='.r-map-transform')=>{
            const el    = $(cls);
            const iter  = 0.025;
            const max   = 10;
            const dataTrans = el[0].data_transform;

            if ($(window).width() < 768) {
                let touchTime   = 0;

                el.click(()=>{
                    if (touchTime === 0)
                        touchTime   = new Date().getTime();
                    else {
                        if ((new Date().getTime() - touchTime) < 500) {
                            scaling(el, dataTrans, max, iter);
                            touchTime = 0;
                        }
                        else
                            touchTime = new Date().getTime();
                    }
                });
            }
            else {
                el.dblclick(()=>{
                    scaling(el, dataTrans, max, iter);
                });
            }

            return window.map_lib_;
        },
        mapBgColor      : (m, color='white')=>{
            m.setAttribute('style', 'background-color:'+color+';');

            return window.map_lib_;
        },
        statRender      : (max, callback=()=>{})=>{
            const plt   = palette;
            const
                class_1 = (max/2) + (max/3),
                class_2 = (max/2) + (max/6),
                class_3 = (max/2),
                class_4 = (max/2) - (max/6),
                class_5 = (max/2) - (max/3);
            const bkg   = val=>{
                if (val >= class_1)
                    return plt[0];
                if (val >= class_2)
                    return plt[1];
                if (val >= class_3)
                    return plt[2];
                if (val >= class_4)
                    return plt[3];
                if (val >= class_5)
                    return plt[4];

                return  plt[5];
            };
            callback(bkg);

            return window.map_lib_;
        },
        statReset       : ()=>{

        },
    };
})();