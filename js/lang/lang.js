// noinspection JSUnresolvedVariable

(()=>{
    const app                   = {
        lang                    : undefined,
        init                    : ()=>{
            app.lang            = {};
        },
        setLang                 : (key, toggle, lang, ins_=app.lang)=>{
            const obj_lang      = {};

            lang[key]           = obj_lang;
        },
    };
})();