// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

window.list_selector    = (()=>{
    return (container, label, selectAll, context, parent)=>{
        let checkboxes  = $();
        let items       = $();
        let size        = 0;
        let checkSize   = 0;
        let toggle      = false;

        selectAll.on('change', ()=>{
            const checked   = selectAll[0].checked;

            checkboxes.prop('checked', checked).change();
            if (checked) {
                context.removeClass('d-none');
                items.addClass('on-select');
                checkSize   = size;
            }
            else {
                context.addClass('d-none');
                items.removeClass('on-select');
                checkSize   = 0;
            }

            label.text(checkSize + ' dipilih');
        });

        container[0].setAttribute('style', 'max-height:0');

        return {
            toggle      : (tog=false)=>{
                if (tog) {
                    checkboxes.animate({opacity:1}, 200, ()=>{
                        parent.addClass('active');
                    });
                    container.animate({'max-height':'160px'}, 60, ()=>{
                        container.removeClass('d-none');
                    });
                }
                else {
                    selectAll.prop('checked', false).change();
                    context.addClass('d-none');
                    checkboxes.animate({opacity:0}, 200, ()=>{
                        parent.removeClass('active');
                    });
                    container.animate({'max-height':'0px'}, 60, ()=>{
                        container.addClass('d-none');
                    });
                }

                checkboxes.prop('disabled', !tog);
                toggle  = tog;
            },
            addList     : (check, list, item)=>{
                checkboxes  = checkboxes.add(check);
                items       = items.add(item);
                check.item  = item;
                list        = $(list);
                $(check).prop('disabled', true);
                $(check).on('change', ()=>{
                    if (check.checked) {
                        list.addClass('on-select');
                        context.removeClass('d-none');
                        if (++checkSize === size)
                            selectAll[0].checked = true;
                    }
                    else {
                        list.removeClass('on-select');
                        selectAll[0].checked = false;
                        if (--checkSize === 0)
                            context.addClass('d-none');
                    }
                    label.text(checkSize + ' dipilih');
                });
                $(list).click(e=>{
                    if (toggle && e.target !== check) {
                        if (check.checked) {
                            $(list).removeClass('on-select');
                            selectAll[0].checked = false;
                            if (--checkSize === 0)
                                context.addClass('d-none');
                        }
                        else {
                            $(list).addClass('on-select');
                            context.removeClass('d-none');
                            if (++checkSize === size)
                                selectAll[0].checked = true;
                        }

                        check.checked   = !check.checked;
                        label.text(checkSize + ' dipilih');
                    }
                });
                size++;
            },
            getSelected : ()=>{
                const res   = [];

                checkboxes.each((i, e)=>{
                    if (e.checked)
                        res.push(e.item);
                });

                return res;
            },
            onToggle    : ()=>{
                return toggle;
            },
        };
    };
})();