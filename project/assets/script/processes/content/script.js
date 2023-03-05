(()=>{
    const contents          = {
        total               : 0,
        data                : {},
    };
    const commands          = {
        init                : data=>{
            const META      = 'meta_data.js';
            const path      = data.path;
            const targets   = data.targets;

            console.log(`${path}${META}`);
            fetch(`${path}${META}`).
            then(r=>r.text()).
            then(r=>{
                const metadata  = eval(r);

                targets.forEach(target=>{
                    fetch(`${path}${target}.js`).
                    then(r=>r.text()).
                    then(r=>{
                        const content   = {
                            script      : r,
                            content     : '',
                            meta        : metadata[target]?metadata[target]:{},
                        };

                        fetch(`${path}${target}.html`).
                        then(r=>r.text()).
                        then(r=>{
                            content.content         = r;

                            contents.data[target]   = content;
                            contents.total++;
                        });
                    });
                });
            });

            return contents.total;
        },
        isLoaded            : data=>{return contents.data[data.id] !== undefined;},
        get                 : data=>{return contents.data[data.id]?contents.data[data.id]:{};},
    };

    onmessage               = e=>{
        const token         = e.data.token;
        const data          = e.data.data;
        const command       = e.data.command;
        const res           = commands[command](data);

        postMessage({token : token, data : res});
    };
})();