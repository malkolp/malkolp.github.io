// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const emptyOption   = '<option value="0">-</option>';
    const account       = window.data_user.account;
    const districts     = window.read_district_();
    const factory       = {
        noEmpty         : i=>{
            return /^ *$/m.exec(i[0].value) == null;
        },
        phoneNumber     : i=>{
            const v     = i[0].value;
            const p     = i[0].parentNode;

            if (!factory.noEmpty(i)) {
                $(p).removeClass('group-danger error').addClass('group-success');
                return false;
            }
            else {
                if (/^[\d]{11,14}$/.exec(v) != null) {
                    $(p).removeClass('group-danger error').addClass('group-success');
                    return true;
                }
                $(p).removeClass('group-success').addClass('group-danger error');
                return false;
            }
        },
        email           : i=>{
            const p     = i[0].parentNode;
            const v     = i[0].value;

            if (!factory.noEmpty(i)) {
                $(p).removeClass('group-danger error').addClass('group-success');
                return false;
            }
            else {
                if (/^[\w]+@[A-Za-z_][\w]*(\.[A-Za-z_]+)+$/.exec(v) != null) {
                    $(p).removeClass('group-danger error').addClass('group-success');
                    return true;
                }
                $(p).removeClass('group-success').addClass('group-danger error');
                return false;
            }
        },
        password        : (i, l)=>{
            const p     = $(i[0].parentNode);
            const v     = i[0].value;

            if (!factory.noEmpty(i)) {
                p.addClass('group-success').removeClass('group-danger error');
                l.addClass('d-none');

                return false;
            }
            else {
                if (v.length < 8) {
                    p.removeClass('group-success').addClass('group-danger error');
                    l.removeClass('d-none');
                    l.text('kata sandi terlalu pendek');

                    return false;
                }
                if (/\d/m.exec(v) == null) {
                    p.removeClass('group-success').addClass('group-danger error');
                    l.removeClass('d-none');
                    l.text('kata sandi harus memiliki 1 angka');

                    return false;
                }
                p.addClass('group-success').removeClass('group-danger error');
                l.addClass('d-none');

                return true;
            }
        },
        isMatch         : (i, j)=>{
            const p     = $(i[0].parentNode).add(j[0].parentNode);

            if (!factory.noEmpty(i[0].value + j[0].value)) {
                p.addClass('group-success').removeClass('group-danger error');
                return false;
            }
            else {
                if (i[0].value !== j[0].value) {
                    if (factory.noEmpty(j))
                        p.addClass('group-danger error').removeClass('group-success');
                    return false;
                }

                p.addClass('group-success').removeClass('group-danger error');
                return true;
            }
        },
        hasChange       : x=>{
            return x.pre !== x.post;
        },
        disableSubmit   : btn=>{
            btn.addClass('disabled');
            btn[0].disabled = true;
        },
        enableSubmit    : btn=>{
            btn.removeClass('disabled').removeAttr('disabled');
        },
    };
    const profile       = (()=>{
        const merge     = (i=inputs, v='value')=>{
            x.post      =  i.fullname[0][v] + '-'
                + i.province[0][v] + '-'
                + i.district[0][v]
                + '-' + i.region[0][v]
                + '-' + i.address[0][v];
        };
        const inputs    = {
            fullname    : $('#inp-setting-fullname'),
            province    : $('#inp-setting-province'),
            district    : $('#inp-setting-district'),
            region      : $('#inp-setting-region'),
            address     : $('#inp-setting-address'),
            submit      : $('#inp-setting-profile-submit'),
        };
        const x         = {
            inputs      : inputs,
            values      : {
                fullname    : account.name,
                province    : account.province,
                district    : account.district,
                region      : account.region,
                address     : account.address,
            },
            pre         : account.name + '-' + account.province + '-' + account.district + '-' + account.region + '-' + account.address,
            post        : account.name + '-' + account.province + '-' + account.district + '-' + account.region + '-' + account.address,
            check       : ()=>{
                const i = inputs;
                const s = i.submit;
                const f = factory;

                if (f.noEmpty(i.fullname) && f.noEmpty(i.address) && f.hasChange(x))
                    f.enableSubmit(s);
                else
                    f.disableSubmit(s);
            },
            submit      : ()=>{
                //callback if request is success
                x.pre   = x.post;
                x.check();

                return x.values;
            },
        };

        inputs.district[0].innerHTML    = emptyOption;
        inputs.region[0].innerHTML      = emptyOption;

        inputs.fullname.on('input',()=>{
            x.values.fullname   = inputs.fullname[0].value;
            merge();
            x.check();
        });
        inputs.province.change(()=>{
            const html          = 'innerHTML';
            const val           = inputs.province[0].value;
            const dis           = inputs.district;
            const reg           = inputs.region;

            if (val === '1') {
                dis[0][html]    = districts.options;
                reg[0][html]    = districts.data[dis[0].value].options;
                dis.removeClass('disabled').removeAttr('disabled');
                reg.removeClass('disabled').removeAttr('disabled');
            }
            else {
                dis[0][html]    = emptyOption;
                reg[0][html]    = emptyOption;
                dis.addClass('disabled');
                reg.addClass('disabled');
                dis[0].disabled = true;
                reg[0].disabled = true;
            }

            x.values.province = val;
            x.values.district = dis[0].value;
            x.values.region   = reg[0].value;

            merge();
            x.check();
        });
        inputs.district.change(()=>{
            const html          = 'innerHTML';
            const dis           = inputs.district;
            const reg           = inputs.region;
            const val           = dis[0].value;

            reg[0][html]        = districts.data[val].options;

            x.values.district   = val;
            x.values.region     = reg[0].value;

            merge();
            x.check();
        });
        inputs.region.change(()=>{
            x.values.region     = inputs.region[0].value;

            merge();
            x.check();
        });
        inputs.address.on('input', ()=>{
            x.values.address    = inputs.address[0].value;

            merge();
            x.check();
        });
        inputs.submit.click(()=>{
            x.submit();
        });

        inputs.fullname.val(account.name).change();
        inputs.province.val(account.province).change();
        inputs.district.val(account.district).change();
        inputs.region.val(account.region).change();
        inputs.address.val(account.address).change();

        return x;
    })();
    const contact       = (()=>{
        const merge     = (i=inputs, v='value')=>{
            return i.phone[0].value + '-' + i.email[0].value;
        };
        const inputs    = {
            phone       : $('#inp-setting-phone'),
            email       : $('#inp-setting-email'),
            submit      : $('#inp-contact-submit'),
        };
        const x         = {
            inputs      : inputs,
            values      : {
                phone   : (()=>{if (account.phone) return account.phone; return '';})(),
                email   : (()=>{if (account.email) return account.email; return '';})(),
            },
            pre         : (()=>{if (account.phone) return account.phone; return '';})() + '-' + (()=>{if (account.email) return account.email; return '';})(),
            post        : (()=>{if (account.phone) return account.phone; return '';})() + '-' + (()=>{if (account.email) return account.email; return '';})(),
            check       : ()=>{
                const i = inputs;
                const s = i.submit;
                const f = factory;

                if (f.phoneNumber(i.phone) && f.email(i.email) && f.hasChange(x))
                    f.enableSubmit(s);
                else
                    f.disableSubmit(s);
            },
            submit      : ()=>{
                //callback if request is success
                x.pre   = x.post;
                x.check();

                return x.values;
            },
        };

        inputs.phone.on('input', ()=>{
            x.values.phone  = inputs.phone[0].value;
            merge();
            x.check();
        });
        inputs.email.on('input', ()=>{
            x.values.email  = inputs.email[0].value;
            merge();
            x.check();
        });
        inputs.submit.click(()=>{
            x.submit();
        });

        if (account.email)
            inputs.email.val(account.email).change();
        if (account.phone)
            inputs.phone.val(account.phone).change();

        return x;
    })();
    const password      = (()=>{
        const inputs    = {
            current     : $('#inp-setting-password-current'),
            newPass     : $('#inp-setting-password-new'),
            verify      : $('#inp-setting-password-verification'),
            infoLabel   : $('#inp-setting-password-info'),
            submit      : $('#inp-password-submit'),
        };
        const x         = {
            inputs      : inputs,
            values      : {
                current : '',
                newPass : '',
            },
            check       : (i=inputs, f=factory)=>{
                if (f.noEmpty(i.current) && f.password(i.newPass, i.infoLabel) && f.isMatch(i.newPass, i.verify))
                    f.enableSubmit(i.submit);
                else
                    f.disableSubmit(i.submit);
            },
            submit      : ()=>{
                // if error then set error return message password isn't match
                // if success then clear form
            },
        };

        inputs.current.on('input', ()=>{
            x.values.current = inputs.current[0].value;
            x.check();
        });
        inputs.newPass.on('input', ()=>{
            x.values.newPass = inputs.newPass[0].value;
            x.check();
        });
        inputs.verify.on('input', ()=>{
            x.check();
        });
        inputs.submit.click(()=>{
            x.submit();
        });

        return x;
    })();
})();