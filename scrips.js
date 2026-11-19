// MOBILE MENU
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('show');
    });
  });

  // SCROLL TOP BUTTON
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('topBtn');

    btn.style.display =
      window.scrollY > 400 ? 'block' : 'none';
  });

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // REVEAL ANIMATION
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll('.reveal').forEach(item => {
    observer.observe(item);
  });

  // LOAD BACKEND DATA
  if (typeof google !== 'undefined' && google.script) {
    google.script.run
      .withSuccessHandler(data => {
        console.log('CR7 website data loaded:', data);
      })
      .withFailureHandler(error => {
        console.error('Could not load website data:', error);
      })
      .getSiteData();
  }

function playVideo(videoSrc, title) {
    const playerBox = document.getElementById('videoPlayerBox');
    const player = document.getElementById('mainVideoPlayer');
    const videoTitle = document.getElementById('videoTitle');

    player.pause();
    player.src = videoSrc;
    player.load();

    videoTitle.textContent = title;
    playerBox.style.display = 'block';

    playerBox.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    player.play().catch(error => {
        console.log('Không thể tự động phát video:', error);
    });
}

function closeVideo() {
    const player = document.getElementById('mainVideoPlayer');
    const playerBox = document.getElementById('videoPlayerBox');

    player.pause();
    player.removeAttribute('src');
    player.load();

    playerBox.style.display = 'none';
}
