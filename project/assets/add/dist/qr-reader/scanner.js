// noinspection JSUnresolvedFunction

window.scanner_     = ((id='camera-input', fps=30)=>{
    const errors    = {
        error       : $('.camera-error'),
        permission  : $('.camera-error-permission'),
        null        : $('.camera-error-null'),
    };

    errors.error.removeClass('d-none');
    let cam;

    navigator.getUserMedia({video: true}, () => {
        errors.error.addClass('d-none');
        $('.camera-rtc').removeClass('d-none');
        cam = new QrScanner(document.getElementById(id), result => console.log('decoded qr code:', result));
    }, () => {
        errors.permission.addClass('d-none');
        errors.null.removeClass('d-none');
        $('.scanner-card').addClass('d-none');
    });

    return cam;
})();