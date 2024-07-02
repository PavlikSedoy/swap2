import '@styles/index.scss'
import PlayPreviewController from './classes/PlayPreviewController'

// // Include general module
import './modules/general'

import './modules/sliders'

// Video play
if (document.querySelector('.videos-preview')) {
    const PlayPausePreview = new PlayPreviewController(document.querySelector('.videos-preview'))
    PlayPausePreview.playPause()
}

if (document.querySelector('.best-scenes__list')) {
    const PlayPauseBestScenes = new PlayPreviewController(document.querySelector('.best-scenes__list'))
    PlayPauseBestScenes.playPause()
}

if (document.querySelector('.video__other')) {
    const PlayPauseBestScenes = new PlayPreviewController(document.querySelectorAll('.best-scenes__list')[1])
    PlayPauseBestScenes.playPause()
}
// End Video play

if (document.querySelector('.video-full__desc-show-btn')) {
    document.querySelector('.video-full__desc-show-btn').addEventListener('click', e => {
        document.querySelector('.video-full__desc-show-btn').classList.toggle('video-full__desc-show-btn--opened')
        e.target.closest('.video-full__desc-show-btn').parentElement.classList.toggle('opened')
    })
}