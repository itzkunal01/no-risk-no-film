// VIDEO JS CODE
var currentVideo = null;

document.querySelectorAll(".play-button").forEach(function (playButton) {
    playButton.addEventListener("click", function () {
        var videoContainer = this.parentElement;
        var video = videoContainer.querySelector("video");

        if (video.paused) {
            // Pause the currently playing video (if any)
            if (currentVideo && currentVideo !== video) {
                currentVideo.pause();
                currentVideo.parentElement.querySelector(".play-button").style.display = "block";
            }

            video.play();
            this.style.display = "none";
            currentVideo = video;
        } else {
            video.pause();
            this.style.display = "block";
        }
    });
});

document.querySelectorAll("video").forEach(function (video) {
    video.addEventListener("click", function () {
        var playButton = this.parentElement.querySelector(".play-button");

        if (this.paused) {
            // Pause the currently playing video (if any)
            if (currentVideo && currentVideo !== this) {
                currentVideo.pause();
                currentVideo.parentElement.querySelector(".play-button").style.display = "block";
            }

            this.play();
            playButton.style.display = "none";
            currentVideo = this;
        } else {
            this.pause();
            playButton.style.display = "block";
        }
    });
});
