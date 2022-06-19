// noinspection JSUnresolvedFunction

window.mobile_act   = (remove=false, win_=$(window))=>{
    const x         = (()=>{
        if (win_.width() < 768) {
            const docList   = $('#document-lists')[0];
            return {
                mouseDrag   : false,
                touchDrag   : true,
                modalAct    : ()=>{
                    docList.setAttribute('style','max-height:80vh;overflow:hidden;');
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                },
                modalClose  : ()=>{
                    docList.setAttribute('style', '');
                },
            };
        }
        return {
            mouseDrag       : true,
            touchDrag       : false,
            modalAct        : ()=>{},
        };
    })();

    if (remove)
        delete window.mobile_act;

    return x;
};