// noinspection JSUnresolvedVariable

(()=>{
    const app                   = {
        lang                    : undefined,
        size                    : undefined,
        init                    : ()=>{
            app.lang            = {};
            app.size            = 0;
        },
        setLang                 : (key, toggle, lang, ins_=app.lang)=>{
            const obj_lang      = {};

            ins_[key]           = obj_lang;
        },
    };

    app.init();
    app.setLang('id', '#toggle-lang-id', window.lang_id);
    app.setLang('en', '#toggle-lang-en', window.lang_en);
})();