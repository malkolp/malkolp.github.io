window.comtypes     = [
    {
        id          : 1,
        cid         : 'ctd1',
        type        : 'produk hewan',
    },
    {
        id          : 2,
        cid         : 'ctd2',
        type        : 'ternak hewan',
    },
    {
        id          : 3,
        cid         : 'ctd3',
        type        : 'satwa dilindungi',
    },
];

window.read_comtype_= (deletable=false)=>{
    const data      = window.comtypes;
    const x         = {
        data        : {},
        head        : undefined,
        tail        : undefined,
        size        : 0,
    };

    (()=>{
        const tmp   = comtypes.shift();
        const o     = {
            id      : tmp.id,
            cid     : tmp.cid,
            type    : tmp.type,
        };

        x.data[tmp.cid] = o;
        x.head          = o;
        x.tail          = o;
        x.size++;
    })();

    data.forEach(d=>{
        const o         = {
            id          : d.id,
            cid         : d.cid,
            type        : d.type,
        };

        x.data[o.cid]   = o;
        x.tail.next     = o;
        o.prev          = x.tail;
        x.tail          = o;
        x.size++;
    });

    if (deletable)
        delete window.comtypes;

    return x;
};