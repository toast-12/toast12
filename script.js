        // JavaScript to change iframe src when a link is clicked
        document.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default action
                const url = this.getAttribute('data-url');
                document.getElementById('content-frame').src = url;
            });
        });