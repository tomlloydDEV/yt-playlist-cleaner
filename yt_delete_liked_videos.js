function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteLikedVideos() {
    'use strict';

    // Selectors can change with updates to YouTube, use devtools to find new selector names if not working
    var buttons = document.querySelectorAll('#primary ytd-playlist-video-renderer yt-icon-button.dropdown-trigger > button[aria-label]');

    // Iterate through each button
    for (let button of buttons) {
        button.click();

        // Needed for the browser to complete the task
        await sleep(500);

        // Selectors can change with updates to YouTube, use devtools to find new selector names if not working
        let deleteOption = document.querySelector('tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer').lastElementChild;
        if (deleteOption) {
            deleteOption.click();
        }

        // Needed for the browser to complete the task
        await sleep(500);
    }
}

deleteLikedVideos();

