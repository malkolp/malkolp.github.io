// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures,SpellCheckingInspection

(()=>{
    let generated       = undefined;
    let generateTime    = undefined;
    let onGenerating    = false;
    const download      = (name='qr-'+generated+'.png', uri=elements.qr_code[0].querySelector('img').src)=>{
        let link        = document.createElement("a");

        link.download   = name;
        link.href       = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
    };
    const checkText     = (t=elements.inp_text[0].value)=>{
        return /^ +$/m.exec(t) == null;
    };
    const generate      = (e=elements)=>{
        if (checkText()) {
            const text  = e.inp_text[0].value;

            generated   = text;
            if (generateTime !== undefined)
                clearTimeout(generateTime);
            onGenerating= true;
            e.qr_code[0].innerHTML = '';
            new QRCode(e.qr_code[0],{
                text            : text,
                width           : 300,
                height          : 300,
                colorDark       : e.inp_foreground[0].value,
                colorLight      : e.inp_background[0].value,
                correctLevel    : QRCode.CorrectLevel.H,
            });
            generateTime = setTimeout(()=>{onGenerating = false}, 500);
        }
        else
            onGenerating= false;
    };
    const random        = (len=12)=>{
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < len; i++ )
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
    };
    const elements      = {
        inp_text        : $('#qr-text'),
        rand_text       : $('#rand-text'),
        inp_background  : $('#background-pick'),
        inp_foreground  : $('#foreground-pick'),
        download        : $('#download'),
        qr_preview      : $('#qr-preview'),
        qr_code         : $('#qr-code'),
    };

    Coloris({
        el: '.coloris',
        swatches: [
            '#264653',
            '#2a9d8f',
            '#e9c46a',
            '#f4a261',
            '#e76f51',
            '#d62828',
            '#023e8a',
            '#0077b6',
            '#0096c7',
            '#00b4d8',
            '#48cae4'
        ]
    });

    elements.rand_text.click(()=>{
        elements.inp_text[0].value          = random();
        elements.download[0].disabled       = !checkText();
        generate();
    });
    elements.download.click(()=>{
        download();
    });

    [elements.inp_text, elements.inp_foreground, elements.inp_background].forEach(e=>{
        e.
        on('input', ()=>{
            elements.download[0].disabled       = !checkText();
            generate();

        }).
        change(()=>{
            elements.download[0].disabled       = !checkText();
            generate();
        });
    });

    elements.inp_text[0].value          = random();
    generate();
})();