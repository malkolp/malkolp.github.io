// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const form                  = (()=>{
        const x                 = {
            input               : {
                cid             : $('#inp-signup-cid'),
                fullname        : $('#inp-signup-fullname'),
                passReq         : $('#inp-signup-pass-req'),
                password        : $('#inp-signup-password'),
                verification    : $('#inp-signup-verification'),
                agreement       : $('#inp-signup-agree'),
                submit          : $('#inp-signup-submit'),
            },
        };

        x.parent                = {
            cid                 : $(x.input.cid[0].parentNode),
            fullname            : $(x.input.fullname[0].parentNode),
            password            : $(x.input.password[0].parentNode),
            verification        : $(x.input.verification[0].parentNode),
        };

        return x;
    })();
    const isNotEmpty            = (i=form.input, v='value')=>{
        return  i.cid[0][v] !== ''
            &&  i.fullname[0][v] !== ''
            &&  i.password[0][v] !== ''
            && i.verification[0][v] !== '';
    };
    const passwordMatch         = (ai=form.input.password, ap=form.parent.password, bi=form.input.verification, bp=form.parent.verification, v='value')=>{
        let match               = ai[0][v] === bi[0][v];

        if (match) {
            ap.removeClass('group-danger error').addClass('group-success');
            bp.removeClass('group-danger error').addClass('group-success');
        } else {
            ap.addClass('group-danger error').removeClass('group-success');
            bp.addClass('group-danger error').removeClass('group-success');
        }

        return match;
    };
    const passwordReq           = (v=form.input.password[0].value, p=form.parent.password, rq=form.input.passReq)=>{
        if (v === '') {
            p.addClass('group-success').removeClass('group-danger error');
            rq.addClass('d-none');

            return false;
        }
        if (/\d/.exec(v) == null) {
            rq.text('kata sandi harus memiliki minimal satu angka');
            p.addClass('group-danger error').removeClass('group-success');
            rq.removeClass('d-none');

            return false;
        }
        if (v.length < 8) {
            rq.text('kata sandi terlalu pendek');
            p.addClass('group-danger error').removeClass('group-success');
            rq.removeClass('d-none');

            return false;
        }

        p.addClass('group-success').removeClass('group-danger error');
        rq.addClass('d-none');

        return true;
    };
    const isAgree               = (i=form.input.agreement[0])=>{
        return i.checked;
    };
    const validCitId            = (i=form.input.cid, p=form.parent.cid, v='value')=>{
        let valid               = /^\d{16}$/m.exec(i[0][v]) != null;

        if (!valid)
            p.addClass('group-danger error').removeClass('group-success');
        else
            p.addClass('group-success').removeClass('group-danger error');

        return valid;
    };
    const canSubmit             = (i=form.input.submit)=>{
        let val                 = validCitId() && passwordReq() && passwordMatch() && isNotEmpty() && isAgree();

        if (val)
            i.removeClass('disabled').removeAttr('disabled');
        else {
            i.addClass('disabled');
            i[0].disabled   = true;
        }

        return val;
    };
    const setFailed             = (msg='message isn\'t defined in response this was a prototype testing', p=form.parent)=>{
        p.cid.addClass('group-danger error').removeClass('group-success');
        p.fullname.addClass('group-danger error').removeClass('group-success');
        p.password.addClass('group-danger error').removeClass('group-success');
        p.verification.addClass('group-danger error').removeClass('group-success');
        form.input.submit.addClass('disabled');
        form.input.submit[0].disabled = true;
        setTimeout(()=>{
            notify_.danger(msg);
        }, 1000);
    };
    const onSubmit              = (data=makeData())=>{
        preloader_.fadeIn(()=>{
            //submit here
            //response result sample from ajax
            postSubmit({success:true, data:data});
        });
    };
    const postSubmit            = res=>{
        if (res.success) {
            preloader_.fadeOut(()=>{
                window.result_data  = res.data;
                page_switcher.focus('register-data');
            });
        }
        else {
            preloader_.fadeOut(()=>{
                setFailed(res['msg']);
            });
        }
    };
    const makeData              = (i=form.input)=>{
        return {
            cid         : i.cid[0].value,
            fullname    : i.fullname[0].value,
            password    : i.password[0].value,
        };
    };

    (()=>{
        const x                 = [
            [form.input.cid, validCitId],
            [form.input.fullname, ()=>{}],
            [form.input.password, passwordReq],
            [form.input.verification, passwordMatch],
        ];

        form.input.passReq.addClass('d-none');
        x.forEach((e, i)=>{
            const f = x[i + 1];

            e[0].on('input', ()=>{
                canSubmit();
                e[1]();
            });
            if (f !== undefined) {
                e[0].keyup(k=>{
                    if (k.keyCode === 13)
                        f[0].focus();
                });
            }
        });
    })();
    form.input.agreement.change(()=>{
        canSubmit();
    });
    form.input.submit.click(()=>{
        onSubmit();
    });
})();