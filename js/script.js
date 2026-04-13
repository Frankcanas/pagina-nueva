
document.addEventListener('DOMContentLoaded', function() {
    const mapaContainer = document.getElementById('mapa');
    if (mapaContainer) {
        setTimeout(function() {
            mapaContainer.innerHTML = '<iframe src="https://www.google.com/maps/@10.9404307,-74.7783621,3a,75y,127h,87.68t/data=!3m7!1e1!3m5!1sHKWlAalIAbY8b0IUn3QC5w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.3186574422104087%26panoid%3DHKWlAalIAbY8b0IUn3QC5w%26yaw%3D126.9989241996495!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
            mapaContainer.style.flexDirection = 'column';
            mapaContainer.style.border = '2px dashed #ff4500';
        }, 1500);
    }
});