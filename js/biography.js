// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    let hidePanel       = $('#for-hidden'),
        morePanel       = $('#for-hidden-toggle-more'),
        lessPanel       = $('#for-hidden-toggle-less');
    let btnMore         = $(morePanel[0].firstElementChild),
        btnLess         = $(lessPanel[0].firstElementChild);
    const elements      = Array.from(hidePanel[0].children);

    (()=>{
        elements.forEach(e=>{
            e.setAttribute('style', 'top:-300px;height:0px;opacity:0;');
        });
    })();

    btnMore.click(()=>{
        let delay   = 0;
        for (let i = 0; i < elements.length; i++) {
            $(elements[i]).delay(delay).animate({top:'0px', height:'100%', opacity:'1'}, 'slow');
            delay += 50;
        }
        btnLess.removeClass('hide-btn');
        btnMore.addClass('hide-btn');
    });
    btnLess.click(()=>{
        let delay   = 0;
        for (let i = elements.length - 1; i >= 0; i--) {
            $(elements[i]).delay(delay).animate({top:'-300px',height:'0px', opacity:'0'}, 'slow');
            delay += 50;
        }
        btnLess.addClass('hide-btn');
        btnMore.removeClass('hide-btn');
    });

    //hidePanel[0].setAttribute('style', 'top:-300px;height:0px;opacity:0;');
    btnLess.addClass('hide-btn');
})();