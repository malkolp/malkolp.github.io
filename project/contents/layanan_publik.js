(()=>{
    const heading           = (()=>{
        let currency;

        const headings      = factory.animate.tagSlider.setSlider('.content-heading-tags');
        const x             = {};

        factory.extension.install('currency', extension=>{
            currency            = extension;
            [
                [
                    'q_plant',
                    'karantina_tumbuhan',
                    `${PARAM.path}/data/plant_service_prices/data.json`,
                    'tumbuhan',
                ],
                [
                    'q_animal',
                    'karantina_hewan',
                    `${PARAM.path}/data/animal_service_prices/data.json`,
                    'hewan',
                ]
            ].forEach(args=>{
                x[args[0]]      = {
                    data        : [],
                    table       : factory.sd_table.set(args[1], {dataLabel:true, hoverable:true}),
                    thread      : factory.thread(0, ['init', 'get', 'count', 'all']),
                    route       : args[2],
                    startPoint  : 0,
                    amountData  : 0,
                    currencyId  : 'idr',
                    filter      : '()=>{return true;}',
                    setFilter   : (filter='()=>{return true;}')=>{
                        x[args[0]].filter           = filter;
                    },
                    reset       : (callback=()=>{})=>{
                        x[args[0]].thread.run('count', {filter:x[args[0]].filter}, res=>{
                            x[args[0]].table.reset();
                            x[args[0]].data         = [];
                            x[args[0]].startPoint   = 0;
                            x[args[0]].amountData   = res;
                            callback(res);
                        });
                    },
                    load        : ()=>{
                        x[args[0]].thread.run('get', {filter:x[args[0]].filter, start:x[args[0]].startPoint, amount:PARAM.amountLoad.large}, res=>{
                            const currencyId        = x[args[0]].currencyId;

                            x[args[0]].data         = x[args[0]].data.concat(res);
                            x[args[0]].startPoint  += res.length;

                            res.forEach(o=>{
                                let labelClass      = '';

                                o.class.forEach(c=>{
                                    labelClass     += `<span class="txt-success txt-small sd-table-label" style="cursor:pointer;" data-label="${c}">${c}</span>`;
                                });

                                x[args[0]].table.insert(`
                                <td class="sd-table-anchor-left w-sm-60">
                                    <div style="font-weight: var(--sd-font-weight-bold)">
                                        ${o.name}
                                    </div>
                                    <div class="sd-table-label-container pc">
                                        ${labelClass}
                                    </div>
                                    <div class="txt-small mt-2 mob">${o.unit}</div>
                                </td>
                                <td class="txt-center pc">${o.unit}</td>
                                <td class="txt-right pc" data-currency-value="${o.prices.import}" data-currency-input="${args[0]}" style="white-space: nowrap"><span class="txt-small txt-success">${currency.symbol(currencyId)}</span> ${factory.formatter.currency(currency.exchange(o.prices.import, currencyId))}</td>
                                <td class="txt-right pc" data-currency-value="${o.prices.export}" data-currency-input="${args[0]}" style="white-space: nowrap"><span class="txt-small txt-success">${currency.symbol(currencyId)}</span> ${factory.formatter.currency(currency.exchange(o.prices.export, currencyId))}</td>
                                <td class="txt-right pc" data-currency-value="${o.prices.domestic}" data-currency-input="${args[0]}" style="white-space: nowrap"><span class="txt-small txt-success">${currency.symbol(currencyId)}</span> ${factory.formatter.currency(currency.exchange(o.prices.domestic, currencyId))}</td>
                                <td class="mob sd-table-anchor-right">
                                    <div class="txt-small" style="text-align: right">impor</div>
                                    <div class="" style="text-align: right; white-space: nowrap" data-currency-value="${o.prices.import}" data-currency-input="${args[0]}"><span class="txt-small txt-success">${currency.symbol(currencyId)}</span> ${factory.formatter.currency(currency.exchange(o.prices.import, currencyId))}</div>
                                    <div class="txt-small mt-2" style="text-align: right">ekspor</div>
                                    <div class="" style="text-align: right; white-space: nowrap" data-currency-value="${o.prices.export}" data-currency-input="${args[0]}"><span class="txt-small txt-success">${currency.symbol(currencyId)}</span> ${factory.formatter.currency(currency.exchange(o.prices.export, currencyId))}</div>
                                    <div class="txt-small mt-2" style="text-align: right">domestik</div>
                                    <div class="" style="text-align: right; white-space: nowrap" data-currency-value="${o.prices.domestic}" data-currency-input="${args[0]}"><span class="txt-small txt-success">${currency.symbol(currencyId)}</span> ${factory.formatter.currency(currency.exchange(o.prices.domestic, currencyId))}</div>
                                </td>
                            `);
                            });
                            x[args[0]].table.hasLoadMore(x[args[0]].startPoint < x[args[0]].amountData);
                        });
                    },
                    destroy     : ()=>{
                        x[args[0]].thread.terminate();
                    },
                };

                factory.input.select.set(`input-currency-${args[3]}`, val=>{
                    if (x[args[0]].currencyId !== val) {
                        $(`[data-currency-input="${args[0]}"]`).each((i, e)=>{
                            e.innerHTML         = `<span class="txt-small txt-success">${currency.symbol(val)}</span> ${factory.formatter.currency(currency.exchange(parseInt(e.getAttribute('data-currency-value')), val))}`;
                        });
                        x[args[0]].currencyId   = val;
                    }
                });

                //TODO : for prototype testing only change the script when start developing backend
                x[args[0]].thread.run('init',
                    {
                        properties      : [],
                        commands        : [
                            {
                                name    : 'get',
                                command : `async data=>{
                                let result;
                                let amtCount    = 0;
                                let amount      = data.amount!==undefined?data.amount:1;
                                const id        = data.id;
                                const filter    = data.filter?eval('(()=>{return '+data.filter+';})()'):(()=>{if (id) return o=>o.id===id;return ()=>{return true;};})();
                                const start     = data.start!==undefined?data.start:0;
                                const response  = await fetch('${x[args[0]].route}').then(r=>r.json());
                                
                                if (amount > 1)
                                    result      = [];
                                else
                                    result      = {};
                                
                                if (start + amount > response.length)
                                    amount      = response.length - start;
                                
                                for (let i=start; i<response.length; i++) {
                                    if (filter(response[i])) {
                                        if (amount > 1) {
                                            if (amtCount < amount) {
                                                result.push(response[i]);
                                                amtCount++;
                                            }
                                            else
                                                break;
                                        }
                                        else {
                                            result      = response[i];
                                            break;
                                        }
                                    }
                                }

                                return result;
                            }`,
                            },
                            {
                                name    : 'count',
                                command : `async data=>{
                                const filter    = data.filter?eval('(()=>{return '+data.filter+';})()'):()=>{return true};
                                const response  = await fetch('${x[args[0]].route}').then(r=>r.json());
                                let count       = 0;
                                response.forEach(o=>{
                                    if (filter(o)) 
                                        count++;
                                });
                                return count;
                            }
                            `,
                            },
                            {
                                name    : 'all',
                                command : `async data=>{
                                return await fetch('${x[args[0]].route}').then(r=>r.json());
                            }
                            `,
                            },
                        ],
                    });

                x[args[0]].table.onSearch   = key=>{
                    if (/^ *$/m.exec(key))
                        x[args[0]].setFilter();
                    else
                        x[args[0]].setFilter(`o=>{const classes=o['class'];for(let i=0;i<classes.length;i++){if(classes[i].includes('${key}'))return true;}return o.name.includes('${key}');}`);

                    x[args[0]].reset(()=>{
                        x[args[0]].load();
                    });
                };
                x[args[0]].table.onLoadMore = x[args[0]].load;
            });

            headings.setCallback('karantina_tumbuhan', ()=>{
                x.q_animal.setFilter();
                x.q_animal.table.hide();
                x.q_plant.table.show();
            });
            headings.setCallback('karantina_hewan', ()=>{
                x.q_plant.setFilter();
                x.q_plant.table.hide();
                x.q_animal.table.show();
            });
            headings.setActive('karantina_tumbuhan');
            x.q_plant.reset(x.q_plant.load);
            x.q_animal.reset(x.q_animal.load);
        });

        return {
            destroy     : ()=>{
                x['q_plant'].destroy();
                x['q_animal'].destroy();
                factory.extension.uninstall('currency');
            },
        };
    })();

    app.destroy             = ()=>{
        heading.destroy();
    };
})();