// noinspection JSUnresolvedFunction

(()=>{
    //verification form
    (()=>{
        let value       = '';
        const form      = {
            inp1        : $('#inp-for-1'),
            inp2        : $('#inp-for-2'),
            inp3        : $('#inp-for-3'),
            inp4        : $('#inp-for-4'),
        };
        const submit    = $('#submit');
        const checkIn   = e=>{
            return ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))
        };
        const checkBack = e=>{
            return e.keyCode === 8;
        };
        const checkArr  = e=>{
            return e.keyCode > 26 && e.keyCode < 41;
        };
        const arrNext   = (i, n)=>{
            if (i.caret() > 0 && n !== undefined)
                n.focus();
        };
        const arrPrev   = (i, b)=>{
            if (i.caret() === 0 && b !== undefined)
                b.focus();
        };
        const checkVer  = (f=form)=>{
            value       = f.inp1[0].value + f.inp2[0].value + f.inp3[0].value + f.inp4[0].value;
            if (/^\d{4}$/.exec(value) != null) {
                submit.removeClass('disabled').removeAttr('disabled');
            }
            else {
                submit.addClass('disabled').removeAttr('disabled');
            }
        };
        const setKey    = (i, b, n)=>{
            i.
            keydown(e=>{
                if (!(checkIn(e) || checkBack(e) || checkArr(e)))
                    e.preventDefault();
                if (checkArr(e)) {
                    if (e.keyCode === 37)
                        arrPrev(i, b);
                    else if (e.keyCode === 39)
                        arrNext(i, n);
                }
            }).
            keyup(e=>{
                if (checkIn(e)) {
                    let val         = i[0].value;
                    i[0].value      = val.substr(val.length - 1);
                    if (n !== undefined)
                        n.focus();
                }
                else if (checkBack(e) && b !== undefined) {
                    if (b[0].value === '')
                        b.focus();
                }
                checkVer();
            });
        };

        setKey(form.inp1, undefined, form.inp2);
        setKey(form.inp2, form.inp1, form.inp3);
        setKey(form.inp3, form.inp2, form.inp4);
        setKey(form.inp4, form.inp3, undefined);
    })();

    //set phone number
    (()=>{
        $('#phone-num').html((()=>{
            let len         = parseInt($('meta[name="data-phone-length"]').attr('content')) - 4;
            let res         = $('meta[name="data-last-4-digit"]').attr('content');

            while (len > 0) {
                if (len >= 4) {
                    res     = 'x'.repeat(4) + '-' + res;
                    len    -= 4;
                }
                else {
                    res     = 'x'.repeat(len) + '-' + res;
                    len     = 0;
                }
            }
            return res;
        })());
    })();

    //set timer
    (()=>{
        const el    = $('#timer')[0];
        let seconds = parseInt($('meta[name="data-time-left"]').attr('content'));
        let const_  = (s=seconds, e=el)=>{
            let min     = 0;
            let tmp     = s;
            let sec     = '';

            while (tmp >= 60) {
                tmp    -= 60;
                min++;
            }
            if (min > 0)
                min     = '<span class="txt-info">'+min+'</span> menit ';
            else
                min     = '';
            if (tmp > 0)
                sec     = '<span class="txt-info">'+tmp+'</span> detik';

            e.innerHTML = (min + sec);
        };
        const_();

        let timer   = setInterval(()=>{
            if (--seconds === 0) {
                clearInterval(timer);
                //send request POST delete verify reset password
                //redirect to login;
            }
            const_();
        }, 1000);
    })();
})();