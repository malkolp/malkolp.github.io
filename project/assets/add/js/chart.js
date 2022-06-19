window.chart_       = (()=>{
    const months    = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];
    const palette   = ['#184D47', '#035956', '#00917C', '#A5F0C5', '#F0F3BD', '#02C39A', '#00A896', '#028090', '#05668D', '#245254', '#387271', '#549895', '#8EBCB1', '#95C4B4'];
    const defData   = {
        pie         : (l, p={})=>{
            const r = {
                data                : {
                    labels          : [],
                    datasets        : [{
                        label       : l,
                        data        : [],
                        backgroundColor : [],
                        borderColor     : [],
                        borderWidth     : 1,
                    }],
                },
                options             : {
                    title           : {
                        display     : true,
                        text        : 'Recommended Daily Diet',
                        position    : 'top',
                        fontSize    : 16,
                        fontColor   : '#111',
                        padding     : 20
                    },
                    tooltips        : {
                        enabled     : false,
                    },
                    plugins         : {
                        datalabels      : {
                            color       : 'black',
                            font        : {
                                weight  : 'bold',
                                size    : 14,
                            },
                            formatter   : val=>{
                                return val;
                            },
                        },
                        legend          : {
                            display     : false,
                            position    : 'bottom',
                            labels      : {
                                boxWidth    : 10,
                                fontColor   : '#111',
                                padding     : 15,
                            }
                        },
                    },
                },
                plugins             : [ChartDataLabels],
                sizeSets            : 0,
                param               : p,
            };
            const mapSets           = {};

            r.mapSets               = mapSets;
            r.hasSets               = s=>{
                return mapSets[s];
            };
            r.addSet                = (s, v=0, x)=>{
                const o             = {
                    index           : x.sizeSets++,
                    value           : v,
                };

                o.bgc           = palette[o.index];
                o.bdc           = o.bgc;
                o.setValue      = v=>{
                    x.chart.data.datasets[0].data[o.index] = v;
                    x.chart.update();
                };

                x.chart.data.labels.push(s);
                x.chart.data.datasets[0].data.push(0);
                x.chart.data.datasets[0].backgroundColor.push(o.bgc);
                x.chart.data.datasets[0].borderColor.push(o.bdc);
                x.chart.update();

                x.mapSets[s]    = o;

                return o;
            };

            return r;
        },
        line        : (l, p={})=>{
            let push                = 'push';

            if (p.reverse)
                push                = 'unshift';

            const r = {
                data                : {
                    labels          : defData.lineLabels(p.count, push),
                    datasets        : [],
                },
                options             : {
                    responsive      : true,
                    maintainAspectRatio: false,
                    plugins         : {
                        legend      : {
                            position: 'top',
                        },
                        title       : {
                            display : true,
                            text    : l,
                        },
                    }
                },
                plugins             : [],
                sizeSets            : 0,
                param               : p,
            };
            const mapSets           = {};

            r.mapSets               = mapSets;
            r.hasSets               = s=>{
                return mapSets[s];
            };
            r.addSet                = (s, v=[], x)=>{
                while (v.length < x.param.count)
                    v[push](0);

                const o             = {
                    index           : x.sizeSets++,
                    value           : v,
                };
                o.dot               = palette[o.index];
                o.line              = o.dot;

                o.setValue          = v=>{
                    while (v.length < x.param.count)
                        v[push](0);
                    x.chart.data.datasets[o.index].data = v;
                    x.chart.update();
                };

                x.chart.data.datasets.push({
                    label           : s,
                    data            : o.value,
                    borderColor     : o.line,
                    backgroundColor : o.dot,
                    tension         : 0.1,
                });

                x.mapSets[s]        = o;

                return o;
            };

            return r;
        },
        lineLabels  : (count, method, date=new Date())=>{
            let m           = date.getMonth() + 1;
            let labels      = [];
            let year        = '';
            let separator   = '';

            if ((m - count) < 0) {
                year        = date.getFullYear();
                separator   = ' ';
            }

            let tmpIter     = 0;
            while (tmpIter < count) {
                if (m === 0) {
                    m       = 12;
                    year   -= 1;
                }

                labels[method](months[m-1] + separator + year);
                m--;
                tmpIter++;
            }


            return labels;
        },
    };
    const chartObj  = (e, t='pie', l='no label', p={})=>{
        const def           = defData[t](l, p);
        const x             = {
            element         : e,
            mapSets         : def.mapSets,
            sizeSets        : def.sizeSets,
            param           : def.param,
            chart           : new Chart(e, {
                type        : t,
                data        : def.data,
                options     : def.options,
                plugins     : def.plugins,
            }),
        };

        x.hasSet            = def.hasSets;
        x.addSet            = (s, v)=>{
            return def.addSet(s, v, x);
        };

        return x;
    };

    return {
        pie         : (e, l)=>{
            return  chartObj(e, 'pie', l, {});
        },
        line        : (e, l, p)=>{
            return  chartObj(e, 'line', l, p);
        },
    };
})();