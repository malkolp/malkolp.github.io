(()=>{
    const plugins       = {};
    const commands      = {
        init            : async path=>{
            const meta_data         = await fetch(`${path}meta_data.json`).then(r=>r.json());

            meta_data.forEach(meta=>{
                plugins[meta.key]   = `${path}${meta.path}`;
            });

            return true;
        },
        install         : async key=>{
            if (!plugins[key])
                return '{destroy:()=>{}}';

            return await fetch(plugins[key]).then(r=>r.text());
        },
    };

    onmessage           = e=>{
        (async ()=>{
            const token     = e.data.token;
            const data      = e.data.data;
            const command   = e.data.command;
            const res       = await commands[command](data);

            postMessage({token : token, data : res});
        })();
    };
})();