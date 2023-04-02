// noinspection JSAnnotator

(()=>{
    let currencyData;

    (async ()=>{
        const response  = await fetch(`${PARAM.path}data/currencies/data.json`).then(r=>r.json());

        currencyData    = {};
        response.forEach(r=>{
            currencyData[r.label]   = {
                value               : r.value,
                symbol              : r.symbol,
            };
        });
    })();

    return {
        get         : key=>{
            if (!key)
                return currencyData;
            return currencyData[key];
        },
        exchange    : (val, currency='idr')=>{
            return parseFloat((val * currencyData[currency].value).toFixed(4));
        },
        symbol      : key=>{
            return currencyData[key].symbol;
        },
        destroy     : ()=>{
            delete currencyData;
        },
    };
})()