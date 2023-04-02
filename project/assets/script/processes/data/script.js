(()=>{
    const properties    = {
        data            : {},
    };
    const commands      = {
        init            : async data=>{
            const properties_   = data.properties;
            const commands_     = data.commands;

            properties_.forEach(prop=>{
                properties[prop.name]   = prop.value;
            });
            commands_.forEach(cmd=>{
                eval(`commands['${cmd.name}']=${cmd.command}`);
            });

            return true;
        },
    };

    onmessage           = e=>{
        (async ()=>{
            const token     = e.data.token;
            const data      = e.data.data;
            const command   = e.data.command;
            const res       = await commands[command](data);

            postMessage({token: token, data:res});
        })();
    };
})();