document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach((playButton) => {
        const video = playButton.previousElementSibling; // Получаем видео, предшествующее кнопке

        // Показать кнопку "Плей" при загрузке страницы
        playButton.style.display = 'flex';

        playButton.addEventListener('click', function () {
            if (video.paused) {
                video.play(); // Запускаем видео
                playButton.style.display = 'none'; // Скрываем кнопку "Плей"
            }
        });

        video.addEventListener('pause', function () {
            playButton.style.display = 'flex'; // Показываем кнопку, если видео на паузе
        });

        video.addEventListener('ended', function () {
            playButton.style.display = 'flex'; // Показываем кнопку, если видео закончено
        });
    });
});