// noinspection JSUnresolvedFunction

window.scanner_     = ((id='camera-input', fps=30)=>{
    const errors    = {
        error       : $('.camera-error'),
        permission  : $('.camera-error-permission'),
        null        : $('.camera-error-null'),
    };

    errors.error.removeClass('d-none');

    if (DetectRTC.hasWebcam) {
        if (!DetectRTC.isWebsiteHasWebcamPermissions) {
            errors.permission.removeClass('d-none');
            errors.null.addClass('d-none');
        }
        else
            errors.error.addClass('d-none');

        Html5Qrcode.getCameras().then(()=>{
            errors.error.addClass('d-none');
            $('.camera-rtc').removeClass('d-none');
        });

        return new Html5QrcodeScanner(id, {fps:fps});
    }
    errors.permission.addClass('d-none');
    errors.null.removeClass('d-none');
    $('.scanner-card').addClass('d-none');

    return undefined;
})();