(()=>{
    const headings      = factory.animate.tagSlider.setSlider('.content-heading-tags');
    const containers    = {
        public_information      : $('.content-public-information'),
        survey                  : $('.content-survey'),
        report                  : $('.content-report'),
    };

    //report
    const report        = (()=>{
        const form      = {
            description : '',
        };
        const validate  = ()=>{
            if (factory.validator.noEmpty(form.description))
                elements.submit[0].removeAttribute('disabled');
            else
                elements.submit[0].setAttribute('disabled', 'true');
        };
        const elements  = {
            description : $('.form-report'),
            submit      : $('.form-report-submit'),
        };

        $(elements.description[0].firstElementChild).
        on('input', ()=>{
            form.description    = elements.description[0].firstElementChild.value;
            validate();
        });
        elements.submit.
        unbind('click').
        click(()=>{
            console.log(form);
        });

        headings.setCallback('report', ()=>{
            public_info.clear();
            survey.clear();

            containers['survey'].addClass('d-none');
            containers['public_information'].addClass('d-none');
            containers['report'].removeClass('d-none');
        });

        return {
            clear       : ()=>{
                elements.description[0].firstElementChild.value = '';
                form.description    = '';
                validate();
            },
        };
    })();

    //survey
    const survey        = (()=>{
        const form      = {};
        const elements  = {
            submit      : $('.form-survey-submit'),
        };
        const inputsFct = {};

        inputsFct['rating']         = factory.input.select.set('input-total-rating', val=>{form['rating']      = parseInt(val);});
        inputsFct['rating']         = factory.input.select.set('input-total-rating-mob', val=>{form['rating']      = parseInt(val);});
        form['rating']              = parseInt(inputsFct['rating'].get());

        for (let i = 1; i < 10; i++) {
            inputsFct[`question${i}`]       = factory.input.radio([$(`#q${i}-very-disagree`)[0], $(`#q${i}-disagree`)[0], $(`#q${i}-agree`)[0], $(`#q${i}-very-agree`)[0],], val=>{form[`question${i}`]=parseInt(val);});
            inputsFct[`question${i}-mob`]   = factory.input.radio([$(`#q${i}-very-disagree-mob`)[0], $(`#q${i}-disagree-mob`)[0], $(`#q${i}-agree-mob`)[0], $(`#q${i}-very-agree-mob`)[0],], val=>{form[`question${i}`]=parseInt(val);});
            form[`question${i}`]            = parseInt(inputsFct[`question${i}`].value);
        }

        elements.submit.
        unbind('click').
        click(()=>{
            console.log(form);
        });

        headings.setCallback('survey', ()=>{
            public_info.clear();
            report.clear();

            containers['report'].addClass('d-none');
            containers['public_information'].addClass('d-none');
            containers['survey'].removeClass('d-none');
        });

        return {
            clear       : ()=>{
                inputsFct['rating'].clear();

                for (let i = 1; i < 10; i++)
                    inputsFct[`question${i}`].clear();
            },
        };
    })();

    //public information
    const public_info   = (()=>{
        const form      = {
            name        : '',
            description : '',
        };
        const validate  = ()=>{
            if (factory.validator.noEmpty(form.name) && factory.validator.noEmpty(form.description))
                elements.submit[0].removeAttribute('disabled');
            else
                elements.submit[0].setAttribute('disabled', 'true');
        };
        const elements  = {
            name        : $('.form-public-information-name'),
            description : $('.form-public-information-description'),
            submit      : $('.form-public-information-submit'),
        };

        $(elements.description[0].firstElementChild).on('input', ()=>{
            form.description    = elements.description[0].firstElementChild.value;
            validate();
        });
        $(elements.name[0].firstElementChild).on('input', ()=>{
            form.name   = elements.name[0].firstElementChild.value;
            validate();
        });
        elements.submit.
        unbind('click').
        click(()=>{
            console.log(form);
        });

        headings.setCallback('public_information', ()=>{
            survey.clear();
            report.clear();

            containers['survey'].addClass('d-none');
            containers['report'].addClass('d-none');
            containers['public_information'].removeClass('d-none');
        });

        return {
            clear       : ()=>{
                elements.name[0].firstElementChild.value        = '';
                elements.description[0].firstElementChild.value = '';
                form.name           = '';
                form.description    = '';
                validate();
            },
        };
    })();

    headings.setActive('public_information');

    app.destroy         = ()=>{

    };
})();