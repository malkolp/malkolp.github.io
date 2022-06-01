// noinspection JSUnresolvedFunction,JSValidateTypes

(()=>{
    const title     = $('#qr-print-title');
    const qr        = $('#qr-print-qr');
    const number    = $('#qr-print-number');
    const card      = $('#qr-print');

    window.qr_print = {
        print       : (fileName, before=()=>{}, after=()=>{}, width=720, height=1280)=>{
            before();
            card[0].setAttribute('style', 'height:'+height+'px;width:'+width+'px');
            htmlToImage.toJpeg(card[0], {backgroundColor:'white', quality: 12}).then(dataURL=>{
                let a       = document.createElement('a');
                a.download  = fileName + '.jpg';
                a.href      = dataURL;
                a.click();
            });
        },
        setValue    : (titleVal, qrVal, numberVal)=>{
            title.text(titleVal);
            number.text(numberVal);
            qr[0].setAttribute('src', qrVal);

            return window.qr_print;
        },
    };
})();