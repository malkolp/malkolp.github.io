// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const form          = {
        username        : $('#inp-login-user'),
        password        : $('#inp-login-pass'),
        submit          : $('#inp-login-submit'),
    };
    const isNotEmpty    = (f=form)=>{
        if (f.username[0].value !== '' && f.password[0].value !== '') {
            f.submit.removeClass('disabled');
            f.submit.removeAttr('disabled');
        }
        else {
            f.submit.addClass('disabled');
            f.submit[0].disabled    = true;
        }
    };
    const setFailed     = (f=form.parent)=>{
        preloader_.fadeOut(()=>{
            f.username.removeClass('group-success').addClass('group-danger error');
            f.password.removeClass('group-success').addClass('group-danger error');
            form.submit.addClass('disabled');
            form.submit[0].disabled    = true;
            form.username.focus();
            setTimeout(()=>{
                notify_.danger('nama pengguna atau kata sandi salah');
            }, 1000);
        });
    };
    const unsetFailed   = (f=form.parent)=>{
        f.username.removeClass('group-danger error').addClass('group-success');
        f.password.removeClass('group-danger error').addClass('group-success');
    };
    const onSubmit      = ()=>{
        preloader_.fadeIn(()=>{
            //submit here
            //response result sample from ajax
            postSubmit({success:false});
        });
    };
    const postSubmit    = res=>{
        if (res.success)
            preloader_.redirect('dashboard');
        else
            setFailed();
    };

    form['parent']      = {
        username        : $(form.username[0].parentNode),
        password        : $(form.password[0].parentNode),
    };

    [form.username, form.password].forEach(i=>{
        i.on('input', ()=>{
            isNotEmpty();
            unsetFailed();
        });
    });
    form.username.keyup(e=>{
        if (e.keyCode === 13)
            form.password.focus();
    });
    form.password.keyup(e=>{
        if (e.keyCode === 13 && !form.submit[0].disabled) {
            form.submit.click();
        }
    });
    form.submit.click(()=>{
        onSubmit();
    });
})();