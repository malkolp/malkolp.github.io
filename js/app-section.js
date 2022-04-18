// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

((first='firstElementChild', last='lastElementChild', add='addClass', sat='setAttribute')=>{
    $('.app').each((i, e)=>{
        const title         = $(e[first][first]);
        const btn_open      = $(e[last][first]);
        const btn_sample    = $(e[last][last]);

        title[add]('hide-overflow');
        btn_open[add]('hide-overflow')[add]('pos-relative')[0][sat]('style', 'opacity:0;');
        btn_sample[add]('hide-overflow')[add]('pos-relative')[0][sat]('style', 'opacity:0;');

        $(e).
        mouseenter(()=>{
            title[0].dataHeight         = title[0].offsetHeight;
            title.animate({height:'0px', opacity:'0'},);
            btn_open.animate({height:'100%', bottom:'0px', opacity:'1'},);
            btn_sample.animate({height:'100%', bottom:'0px', opacity:'1'},);
        }).
        mouseleave(()=>{
            title.animate({height:title[0].dataHeight+'px', opacity:'1'},);
            btn_open.animate({height:'0px', bottom:'-25px', opacity:'0'},);
            btn_sample.animate({height:'0px', bottom:'-25px', opacity:'0'},);
        });
    });
})();