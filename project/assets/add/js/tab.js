// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const groups    = {};
    const initEl    = (e, btn)=>{
        const child = {
            icon    : btn[0].firstElementChild.firstElementChild.children[1],
            minus   : btn[0].firstElementChild.firstElementChild.children[0],
        };

        btn[0].tabToggle    = false;
        e.setAttribute('style', 'max-height:0;overflow:hidden');
        child.icon.setAttribute('style', 'max-width:10vw;overflow:hidden');
        child.minus.setAttribute('style', 'max-width:0;overflow:hidden');

        $(child.icon).addClass('d-inline-block');
        $(child.minus).addClass('d-inline-block');

        return {
            icon    : $(child.icon),
            minus   : $(child.minus),
        };
    };
    const active    = (sel, icon, minus, callback=()=>{})=>{
        sel.removeClass('d-none');
        sel.animate({'max-height':'100vh'}, 220, ()=>{
            callback();
        });
        icon['animate']({'max-width':0}, 200);
        minus['animate']({'max-width':'10vw'}, 200);
    };
    const noActive  = (sel, icon, minus, callback=()=>{})=>{
        sel.animate({'max-height':0}, 220, ()=>{
            sel.addClass('d-none');
            callback();
        });
        icon['animate']({'max-width':'10vw'}, 200);
        minus['animate']({'max-width':0}, 200);
    };

    $('[data-tab-id]').each((i, el)=>{
        const e     = el;
        const id    = e.getAttribute('data-tab-id');
        const g_key = e.getAttribute('data-tab-group');
        const btn   = $('[data-tab-target="'+id+'"]');
        const sel   = $(e);

        sel.addClass('d-none');

        if (btn) {
            const icons     = initEl(e, btn);

            if (g_key) {
                const grp   = groups[g_key];

                if (grp) {
                    grp.els = grp.els.add(e);
                    grp.min = grp.min.add(icons.minus[0]);
                    grp.icn = grp.icn.add(icons.icon[0]);
                    grp['btn'].push(btn);
                }
                else {
                    groups[g_key]   = {
                        els         : $(e),
                        min         : $(icons.minus[0]),
                        icn         : $(icons.icon[0]),
                        btn         : [btn],
                    }
                }

                btn.click(()=>{
                    const g         = groups[g_key];

                    if (btn[0].tabToggle) {
                        noActive(g.els, g.icn, g.min, ()=>{
                            g.btn.forEach(b=>{
                                b[0].tabToggle = false;
                                b.removeAttr('data-tab-active');
                            });
                        });
                    }
                    else {
                        btn[0].setAttribute('data-tab-active', true);
                        active(sel, icons.icon, icons.minus, ()=>{
                            btn[0].tabToggle = true;
                        });
                        noActive(g.els.not(e), g.icn.not(icons.icon[0]), g.min.not(icons.minus[0]), ()=>{
                            g.btn.forEach(b=>{
                                const res       = b[0] === btn[0];

                                b[0].tabToggle  = res;
                                if (!res)
                                    b.removeAttr('data-tab-active');
                            });
                        });
                    }
                    btn.blur();
                });
            }
            else {
                btn.click(()=>{
                    if (btn[0].tabToggle)
                        noActive(sel, icons.icon, icons.minus, ()=>{btn[0].tabToggle = false;});
                    else
                        active(sel, icons.icon, icons.minus, ()=>{btn[0].tabToggle = true;});
                    btn.blur();
                });
            }
        }
    });
})();