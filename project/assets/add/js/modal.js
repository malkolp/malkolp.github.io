// noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

(()=>{
    const overlay           = $('.modal-overlay');
    const modal             = {
        modals              : {},
        all                 : $(),
    };

    modal.add               = (k, e)=>{
        modal.modals[k]     = $(e);
        modal.all           = modal.all.add(e);
        modal.hide();
    };
    modal.hide              = ()=>{
        modal.all.addClass('hide-modal');
    };
    modal.show              = k=>{
        modal.modals[k].removeClass('hide-modal');
        modal.open();
    };
    modal.open              = ()=>{
        overlay.removeClass('hide-modal-overlay');
        overlay.animate({opacity:'100%'},200);
    };
    modal.close             = ()=>{
        overlay.animate({opacity:'0'},200, ()=>{
            overlay.addClass('hide-modal-overlay');
        });
    };
    overlay.click(()=>{
        modal.close();
    });

    $('[data-modal]').each((i, e)=>{
        modal.add(e.getAttribute('data-modal'), e);
    });
    $(document.body).
    on('click', '[data-modal-close]', ()=>{modal.close();}).
    on('click', '[data-modal-open]',e=>{
        let tar     = e.target;
        while (tar.getAttribute('data-modal-open') == null)
            tar     = tar.parentNode;
        modal.show(tar.getAttribute('data-modal-open'));
    });
    modal.close();

    window.modal            = modal;
})();