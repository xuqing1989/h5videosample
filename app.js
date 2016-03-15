(function(){
    var video = document.querySelector('video');
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if(navigator.getUserMedia) {
        console.log('get user media implemented');
        navigator.getUserMedia({
            video:true
        }, handleVideo, console.log.bind(console));
    }

    function handleVideo(stream) {
        console.log(stream, video);
        video.src = window.URL.createObjectURL(stream);
    }
})();
