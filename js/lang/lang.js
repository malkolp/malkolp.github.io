// noinspection JSUnresolvedVariable,JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const app                   = {
        lang                    : undefined,
        size                    : undefined,
        toggles                 : undefined,
        current                 : undefined,
        head                    : undefined,
        tail                    : undefined,
        init                    : ()=>{
            app.lang            = {};
            app.size            = 0;
            app.toggles         = $();
            $(document).keydown(e=>{
                if (e.keyCode === 76 && e.ctrlKey && e.shiftKey)
                    app.change();
            });
        },
        setLang                 : (key, toggle, lang)=>{
            const obj_lang      = {};
            const new_lang      = [];

            lang.forEach(item=>{
                new_lang.push({
                    element     : $('[data-app-lang='+item.target+']'),
                    value       : item.value,
                });
            });

            obj_lang['key']     = key;
            obj_lang['toggle']  = $(toggle);
            obj_lang['lang']    = new_lang;
            obj_lang['prev']    = undefined;
            obj_lang['next']    = undefined;
            app.lang[key]       = obj_lang;

            obj_lang.toggle.click(()=>{
                app.toggles.
                addClass('hide-toggle').
                removeClass('focus-toggle');

                obj_lang.toggle.
                addClass('focus-toggle').
                removeClass('hide-toggle');

                obj_lang.lang.forEach(item=>{
                    item.element[0].innerText  = item.value;
                });
                app.current     = obj_lang;
            });

            $.merge(app.toggles, obj_lang.toggle);
            if (++app.size > 1) {
                app.tail.next       = obj_lang;
                obj_lang.prev       = app.tail;
                app.tail            = obj_lang;
                obj_lang.toggle.addClass('hide-toggle');
            }
            else {
                app.head            = obj_lang;
                app.tail            = obj_lang;
            }

            app.current         = obj_lang;
        },
        change                  : ()=>{
            if (app.current === app.tail)
                app.current = app.head;
            else
                app.current = app.current.next;
            app.current.toggle.click();
        },
    };

    app.init();
    app.setLang('id', '#toggle-lang-id', window.lang_id);
    app.setLang('cn', '#toggle-lang-cn', window.lang_cn);
    app.setLang('en', '#toggle-lang-en', window.lang_en);
})();