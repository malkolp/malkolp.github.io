window.linkedList   = (()=>{
    const createList    = ()=>{
        const x         = {
            data        : {},
            head        : undefined,
            tail        : undefined,
            size        : 0,
        };

        x.add           = (k, e, callback=()=>{})=>{
            x.data[k]       = e;
            if (x.size === 0) {
                x.head      = e;
                x.tail      = e;
            }
            else {
                x.tail.next = e;
                e.prev      = x.tail;
                x.tail      = e;
            }
            x.size++;
            callback(e);
        };

        return x;
    };

    return (propArr=[])=>{
        const x     = createList();

        propArr.forEach(arr=>{
            x[arr.label]    = arr.value;
        });

        return x;
    };
})();