// noinspection JSUnresolvedVariable,JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const app                   = {
        lang                    : undefined,
        size                    : undefined,
        toggles                 : undefined,
        init                    : ()=>{
            app.lang            = {};
            app.size            = 0;
            app.toggles         = $();
        },
        setLang                 : (key, toggle, lang)=>{
            const obj_lang      = {};
            const new_lang      = [];

            lang.forEach(item=>{
                new_lang.push({
                    element     : document.getElementById(item.target),
                    value       : item.value,
                });
            });

            obj_lang['key']     = key;
            obj_lang['toggle']  = $(toggle);
            obj_lang['lang']    = new_lang;
            app.lang[key]       = obj_lang;

            obj_lang.toggle.click(()=>{
                app.toggles.
                addClass('hide-toggle').
                removeClass('focus-toggle');

                obj_lang.toggle.
                addClass('focus-toggle').
                removeClass('hide-toggle');

                obj_lang.lang.forEach(item=>{
                    item.element.innerText  = item.value;
                });
            });

            $.merge(app.toggles, obj_lang.toggle);
            if (++app.size > 1)
                obj_lang.toggle.addClass('hide-toggle');
        },
    };

    app.init();
    app.setLang('id', '#toggle-lang-id', window.lang_id);
    app.setLang('en', '#toggle-lang-en', window.lang_en);
})();