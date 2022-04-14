// noinspection JSUnresolvedVariable,JSUnresolvedFunction

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

            });

            obj_lang['key']     = key;
            obj_lang['toggle']  = toggle;
            obj_lang['lang']    = new_lang;

            app.lang[key]       = obj_lang;
        },
    };

    app.init();
    app.setLang('id', '#toggle-lang-id', window.lang_id);
    app.setLang('en', '#toggle-lang-en', window.lang_en);
})();