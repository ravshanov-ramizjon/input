const videoGrid = document.querySelector('.video-grid');

function reload(arr) {
    videoGrid.innerHTML = '';

    arr.forEach((video, index) => {
        const videoItem = document.createElement('div');
        const img = document.createElement('img');
        const videoInfo = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const closeButton = document.createElement('button');

        img.setAttribute('src', video.thumbnail);
        img.setAttribute('alt', video.title);

        h3.innerHTML = video.title;
        p.innerHTML = video.channel;

        videoInfo.classList.add('video-info');
        videoItem.classList.add('video-item');
        closeButton.className = 'close-btn';
        closeButton.innerHTML = 'X';
        closeButton.style.display = 'none'; // Скрываем кнопку изначально

        closeButton.onclick = () => {
            removeVideo(index);
        };

        videoInfo.append(h3, p);
        videoItem.append(img, videoInfo, closeButton);
        videoGrid.append(videoItem);

        videoItem.addEventListener('mouseenter', () => {
            closeButton.style.display = 'block';
        });
        videoItem.addEventListener('mouseleave', () => {
            closeButton.style.display = 'none';
        });
    });
}

function removeVideo(index) {
    videos.splice(index, 1);
    reload(videos);
}

reload(videos);

const input = document.querySelector('input');

input.onsearch = () => {
    const value = input.value.toLowerCase();
    const filteredArray = videos.filter((item) => item.title.toLowerCase().includes(value));
    reload(filteredArray);
};
