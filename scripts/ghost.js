
        function playGif(delay = Math.floor(Math.random() * 60000)) {
            const gif = document.getElementById('multo');
            gif.style.top = '50vh';

            setTimeout(() => {
                gif.style.display = 'block';
                setTimeout(() => {
                    gif.style.display = 'none';
                    playGif(); // Repeat after hiding the gif
                }, 1009); // 1 second and 9 milliseconds
            }, delay);
        }

        playGif();
