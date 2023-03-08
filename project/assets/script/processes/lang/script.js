(()=>{
    const languages         = {
        total               : 0,
        data                : {},
    };
    const commands          = {
        init                : data=>{
            const path      = data.path;
            const lang      = data.lang;

            lang.forEach(l=>{
                fetch(`${path}${l}.js`).
                then(r=>r.text()).
                then(r=>{
                    languages.data[l]   = eval(r);
                    languages.total++;
                });
            });

            return languages.total;
        },
        wereLoaded          : ()=>{
            const keys      = [];

            for (let key in languages.data)
                keys.push(key);

            return keys;
        },
        get                 : data=>{return languages.data[data.id]?languages.data[data.id]:{};},
    };

    onmessage               = e=>{
        const token         = e.data.token;
        const data          = e.data.data;
        const command       = e.data.command;
        const res           = commands[command](data);

        postMessage({token : token, data : res});
    };
})();