// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const emptyOption       = '<option value="0">-</option>';
    const data_districts    = (()=>{
        const read          = d=>{
            const o         = {
                id          : d.id,
                name        : (()=>{if (d.city) return 'Kota '  + d.name;return 'Kabupaten ' + d.name;})(),
                regions     : [],
                next        : undefined,
                prev        : undefined,
            };

            o.forEach       = (callback=()=>{})=>{
                o.regions.forEach(callback);
            };
            o.option        = '<option value="'+o.id+'">'+o.name+'</option>';
            o.options       = '';
            d.regions.forEach(r=>{
                const a     = {
                    id      : r.id,
                    name    : r.name,
                };

                a.option    = '<option value="'+a.id+'">Kecamatan '+a.name+'</option>';
                o.options  += a.option;
                o.regions.push(a);
            });

            return o;
        };
        const x             = {
            head            : undefined,
            tail            : undefined,
            data            : {},
            options         : '',
        };

        x.forEach           = (callback=()=>{})=>{
            let ptr         = x.head;

            while (ptr !== undefined) {
                const now   = ptr;

                callback(now);
                ptr         = now.next;
            }
        };
        (()=>{
            const tmp       = window.data_district_.shift();
            x.data[tmp.id]  = read(tmp);
            x.head          = x.data[tmp.id];
            x.tail          = x.data[tmp.id];
            x.options       = x.data[tmp.id].option;
        })();
        window.data_district_.forEach(d=>{
            const dis       = read(d);

            x.data[dis.id]  = dis;
            dis.prev        = x.tail;
            x.tail.next     = dis;
            x.tail          = dis;
            x.options      += dis.option;
        });
        delete window.data_district_;

        return x;
    })();
    const form              = (()=>{
        const x             = {
            input           : {
                province    : $('#inp-register-province'),
                district    : $('#inp-register-district'),
                region      : $('#inp-register-region'),
                address     : $('#inp-register-address'),
                phone       : $('#inp-register-phone'),
                email       : $('#inp-register-email'),
                submit      : $('#inp-register-submit'),
            },
        };

        x.parent            = {
            province        : $(x.input.province[0].parentNode),
            district        : $(x.input.district[0].parentNode),
            region          : $(x.input.region[0].parentNode),
            address         : $(x.input.address[0].parentNode),
            phone           : $(x.input.phone[0].parentNode),
            email           : $(x.input.email[0].parentNode),
        };

        return x;
    })();
    const toggleSelect      = (i, p, v, toggle=false)=>{
        if (toggle) {
            p.removeClass('disabled');
            i.removeAttr('disabled');
        }
        else {
            p.addClass('disabled');
            i[0].disabled   = true;
        }
        i[0].innerHTML      = v;
    };
    const isNotEmpty        = txt=>{
        return /^ *$/m.exec(txt) == null;
    };
    const validPhoneNum     = txt=>{
        return /^\d{11,13}$/m.exec(txt) != null;
    };
    const validEmail        = txt=>{
        if (isNotEmpty(txt))
            return /^[A-Za-z_][\w\-]*@[A-Za-z_][\w\-]*(\.[A-Za-z_]+)+$/m.exec(txt);
        return true;
    };
    const validForm         = (i=form.input, p=form.parent)=>{
        let canSubmit       = isNotEmpty(i.address[0].value);

        if (isNotEmpty(i.phone[0].value)) {
            if (validPhoneNum(i.phone[0].value)) {
                p.phone.addClass('group-success').removeClass('group-danger error');
                canSubmit   = canSubmit && true;
            }
            else {
                p.phone.removeClass('group-success').addClass('group-danger error');
                canSubmit   = canSubmit && false;
            }
        }
        else {
            p.phone.addClass('group-success').removeClass('group-danger error');
            canSubmit       = canSubmit && false;
        }
        if (isNotEmpty(i.email[0].value)) {
            if (validEmail(i.email[0].value)) {
                p.email.addClass('group-success').removeClass('group-danger error');
                canSubmit   = canSubmit && true;
            }
            else {
                p.email.removeClass('group-success').addClass('group-danger error');
                canSubmit   = canSubmit && false;
            }
        }
        else {
            p.email.addClass('group-success').removeClass('group-danger error');
            canSubmit       = canSubmit && true;
        }

        if (canSubmit) {
            i.submit.removeClass('disabled').removeAttr('disabled');
        }
        else {
            i.submit.addClass('disabled');
            i.submit[0].disabled = true;
        }
    };
    const makeData          = (i=form.input)=>{
        const data          = {...window.result_data};

        data.province       = i.province[0].value;
        data.district       = i.district[0].value;
        data.region         = i.region[0].value;
        data.address        = i.address[0].value;
        data.phone          = i.phone[0].value;
        data.email          = i.email[0].value;

        return data;
    };
    const submit            = (data=makeData())=>{
        preloader_.fadeIn(()=>{
            //submit here
            //use the function below to on response
            // if (true) {
            //      redirect to dashboard
            // }
        });
    };

    ((i=form.input, p=form.parent)=>{
        p.district.removeClass('disabled');
        p.region.removeClass('disabled');
        i.district.removeAttr('disabled');
        i.region.removeAttr('disabled');
        i.district[0].innerHTML = data_districts.options;
        i.region[0].innerHTML   = data_districts.data[i.district[0].value].options;
    })();

    ((i=form.input, p= form.parent)=>{
        i.province.change(()=>{
            if (i.province[0].value === '1') {
                toggleSelect(i.district, p.district, data_districts.options, true);
                toggleSelect(i.region, p.region, data_districts.data[i.district[0].value].options, true);
            }
            else {
                toggleSelect(i.district, p.district, emptyOption, false);
                toggleSelect(i.region, p.region, emptyOption, false);
            }
        });
        i.district.change(()=>{
            toggleSelect(i.region, p.region, data_districts.data[i.district[0].value].options, true);
        });
        const x = [i.address, i.phone, i.email];
        x.forEach((e, i)=>{
            const f     = x[i + 1];

            e.on('input', ()=>{
                validForm();
            });
            if (f !== undefined) {
                e.keyup(ev=>{
                     if (ev.keyCode === 13)
                         f.focus();
                });
            }
        });
        i.submit.click(()=>{
            submit();
        });
    })();
})();