// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const pg_name           = $('.ds-head-title')[0];
    window.page_switcher    = {
        focused             : undefined,
        memory              : undefined,
        titles              : undefined,
        init                : (ins_=page_switcher)=>{
            ins_.memory     = {};
            ins_.titles     = {};
            $('[data-page]').each((i, e)=>{
                const id    = e.getAttribute('data-page');
                const title = e.getAttribute('data-page-title');
                const x     = $('[data-page="'+id+'"]');

                if (title != null)
                    ins_.titles[id] = title;
                else
                    ins_.titles[id] = '';

                ins_.memory[id] = x;
                x.addClass('d-none');
            });
            $('[data-page-toggle]').each((i, e)=>{
                const id    = e.getAttribute('data-page-toggle');

                $(e).click(()=>{
                    ins_.focus(id);
                });
            });
        },
        set                 : (pageId, ins_=page_switcher)=>{
            if (typeof pageId === 'string' && pageId !== '') {
                const x             = $('[data-page="'+pageId+'"]');

                ins_.memory[pageId] = x;
                x.addClass('d-none');

                return x;
            }

            return $();
        },
        refresh             : (pageId, ins_=page_switcher)=>{
            const onFocus   = ins_.focused !== undefined && ins_.memory[pageId] === ins_.focused;
            const x         = ins_.set(pageId);

            if (onFocus)
                x.removeClass('d-none');
        },
        focus               : (pageId, memory=page_switcher.memory, y=page_switcher.focused)=>{
            const x         = memory[pageId];
            if (x) {
                if (y)
                    y.addClass('d-none');
                x.removeClass('d-none');
                page_switcher.focused = x;
            }
        },
        focusAdd            : (pageId, memory=page_switcher.memory, y=page_switcher.focused)=>{
            const x         = memory[pageId];

            if (x) {
                if (y)
                    page_switcher.focused = y.add(x[0]);
                else
                    page_switcher.focused = x;
                x.removeClass('d-none');
            }
        },
        focusRemove         : (pageId, memory=page_switcher.memory, y=page_switcher.focused)=>{
            const x         = memory[pageId];

            if (x) {
                if (y)
                    page_switcher.focused = y.not(x[0]);
                x.addClass('d-none');
            }
        },
    };

    if (pg_name) {
        window.page_switcher.focus  = (pageId, memory=page_switcher.memory, titles=page_switcher.titles, y=page_switcher.focused)=>{
            const x         = memory[pageId];
            const title     = titles[pageId];

            if (x) {
                if (y)
                    y.addClass('d-none');
                x.removeClass('d-none');
                pg_name.innerText       = title;
                page_switcher.focused   = x;
            }
        }
    }
    page_switcher.init();
})();