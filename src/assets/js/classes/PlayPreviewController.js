export default class PlayPreviewController {
    constructor(videoSection) {
        this.videoSection = videoSection
    }

    // Play video
    playPause = () => {
        this.videoSection.addEventListener('mouseover', e => {
            if (e.target.closest('.video-preview__video')) {
                const video = e.target.closest('.video-preview__video')
                video.parentElement.classList.add('video-preview__video-wrapper--active')
                video.play()

                video.addEventListener('mouseleave', e => {
                    video.parentElement.classList.remove('video-preview__video-wrapper--active')
                    video.pause();
                    video.currentTime = 0;
                })
            }
        })
    }
}