// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

window.content_switcher     = (()=>{
    const groups            = {};

    $('[data-content-group-id]').each((i, e)=>{
        const group_item    = {
            contents        : {},
            focus           : k=>{
                group_item.elements.addClass('d-none');
                group_item.contents[k].removeClass('d-none');
            },
        };
        const group_id      = e.getAttribute('data-content-group-id');
        const contents      = $('[data-content-group="'+group_id+'"]');

        contents.each((i, e)=>{
            const id                    = e.getAttribute('data-content-id');

            group_item.contents[id]     = $('[data-content-id="'+id+'"]');
            $('[data-content-focus="'+group_id+':'+id+'"]').click(()=>{
                group_item.focus(id);
            });
        });

        group_item.elements = contents;
        groups[group_id]    = group_item;
        contents.addClass('d-none');
        $(contents[0]).removeClass('d-none');
    });

    return groups;
})();