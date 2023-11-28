
document.querySelectorAll("videomath").forEach(function(vidmath){
	var start=""
	if (vidmath.getAttribute("data-autostart") == "true") {
		start = "autoplay";
	}
	var vid = `<video class="video" `+start+`>
						<source src="` + vidmath.getAttribute("data-source") + `" type="video/mp4">
					</video>`
					
	if (vidmath.getAttribute("data-source") == ""){
		vid = `<div class="error-video">Video non disponible ou non trouvé - Titre : `+vidmath.getAttribute("data-title")+`</div>`
	}
	var el = `<div class="videoplayerwrapper">
				<p class="video-title">` + vidmath.getAttribute("data-title") + `</p>
				<div class="player">
					<svg class="firstplay" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
						<path d="M15.0015 11.3344C15.3354 11.5569 15.5023 11.6682 15.5605 11.8085C15.6113 11.9311 15.6113 12.0689 15.5605 12.1915C15.5023 12.3318 15.3354 12.4431 15.0015 12.6656L11.2438 15.1708C10.8397 15.4402 10.6377 15.5749 10.4702 15.5649C10.3243 15.5561 10.1894 15.484 10.1012 15.3674C10 15.2336 10 14.9908 10 14.5052V9.49481C10 9.00923 10 8.76644 10.1012 8.63261C10.1894 8.51601 10.3243 8.44386 10.4702 8.43515C10.6377 8.42515 10.8397 8.55982 11.2438 8.82917L15.0015 11.3344Z"/>
					</svg>
					`+vid+`
					<div class="video-controls">
						<button class="play">
							<svg class="icons" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"/>
								<path class="hidden" d="M8 5V19M16 5V19"/>
							</svg>
						</button>
						
						<div class="video-progress">
							<progress class="progress-bar" value="0" min="0"></progress>
							<input class="seek" value="0" min="0" type="range" step="1">
							<div class="seek-tooltip">00:00</div>
						</div>
					
						<div class="time">
							<time class="time-elapsed">00:00</time>
							<span> / </span>
							<time class="duration">00:00</time>
						</div>
						
						<div class="volume-controls">
							<button class="volume-button">
								<svg class="icons" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path class="hidden mute" d="M16 9.50009L21 14.5001M21 9.50009L16 14.5001M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z"/>
									<path class="hidden low" d="M18 9.00009C18.6277 9.83575 18.9996 10.8745 18.9996 12.0001C18.9996 13.1257 18.6277 14.1644 18 15.0001M6.6 9.00009H7.5012C8.05213 9.00009 8.32759 9.00009 8.58285 8.93141C8.80903 8.87056 9.02275 8.77046 9.21429 8.63566C9.43047 8.48353 9.60681 8.27191 9.95951 7.84868L12.5854 4.69758C13.0211 4.17476 13.2389 3.91335 13.4292 3.88614C13.594 3.86258 13.7597 3.92258 13.8712 4.04617C14 4.18889 14 4.52917 14 5.20973V18.7904C14 19.471 14 19.8113 13.8712 19.954C13.7597 20.0776 13.594 20.1376 13.4292 20.114C13.239 20.0868 13.0211 19.8254 12.5854 19.3026L9.95951 16.1515C9.60681 15.7283 9.43047 15.5166 9.21429 15.3645C9.02275 15.2297 8.80903 15.1296 8.58285 15.0688C8.32759 15.0001 8.05213 15.0001 7.5012 15.0001H6.6C6.03995 15.0001 5.75992 15.0001 5.54601 14.8911C5.35785 14.7952 5.20487 14.6422 5.10899 14.4541C5 14.2402 5 13.9601 5 13.4001V10.6001C5 10.04 5 9.76001 5.10899 9.54609C5.20487 9.35793 5.35785 9.20495 5.54601 9.10908C5.75992 9.00009 6.03995 9.00009 6.6 9.00009Z"/>
									<path class="high" d="M16.0004 9.00009C16.6281 9.83575 17 10.8745 17 12.0001C17 13.1257 16.6281 14.1644 16.0004 15.0001M18 5.29177C19.8412 6.93973 21 9.33459 21 12.0001C21 14.6656 19.8412 17.0604 18 18.7084M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z"/>
								</svg>
							</button>

							<input class="volume" value="1" type="range" max="1" min="0" step="0.01">
						</div>
						
						<button class="fullscreen-button">
							<svg class="icons" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 9V5.6C4 5.03995 4 4.75992 4.10899 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109C4.75992 4 5.03995 4 5.6 4L9 4M4 15V18.4C4 18.9601 4 19.2401 4.10899 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.75992 20 5.03995 20 5.6 20L9 20M15 4H18.4C18.9601 4 19.2401 4 19.454 4.10899C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C20 4.75992 20 5.03995 20 5.6V9M20 15V18.4C20 18.9601 20 19.2401 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.2401 20 18.9601 20 18.4 20H15"/>
								<path class="hidden" d="M9 4V9H4M15 4V9H20M4 15H9V20M15 20V15H20"/>
							</svg>
						</button>
					</div>
				</div>
			</div>`
	
	
	vidmath.insertAdjacentHTML("beforebegin",el)
		vidmath.remove();
	
})





document.querySelectorAll(".player").forEach(function(player) {
	var video = player.querySelector('.video');
	var firstbtn = player.querySelector('.firstplay');
	var videoControls = player.querySelector('.video-controls');
	var playButton = videoControls.querySelector('.play');
	var playButtonIcons = playButton.querySelectorAll('.icons path');
	var timeElapsed = videoControls.querySelector('.time-elapsed');
	var duration = videoControls.querySelector('.duration');
	var progressBar = videoControls.querySelector('.progress-bar');
	var seek = videoControls.querySelector('.seek');
	var seekTooltip = videoControls.querySelector('.seek-tooltip');
	var volumeControls = videoControls.querySelector('.volume-controls');
	var volumeButton = volumeControls.querySelector('.volume-button');
	var volumeIcons = volumeControls.querySelectorAll('.volume-button path');
	var volumeMute = volumeControls.querySelector('path.mute');
	var volumeLow = volumeControls.querySelector('path.low');
	var volumeHigh = volumeControls.querySelector('path.high');
	var volume = volumeControls.querySelector('.volume');
	var fullscreenButton = videoControls.querySelector('.fullscreen-button');
	var fullscreenIcons = fullscreenButton.querySelectorAll('path');

	var videoWorks = !!document.createElement('video').canPlayType;
	if (videoWorks) {
		video.controls = false;
	}
	
	function togglePlay() {
		if (video.paused || video.ended) {
			video.play();
			videoControls.classList.remove("forcedisplay")
		} else {
			video.pause();
			videoControls.classList.add("forcedisplay")
		}
		firstbtn.classList.add("hidden")
	}
	function updatePlayButton() {
		playButtonIcons.forEach(icon => icon.classList.toggle('hidden'));
	}
	
	function formatTime(timeInSeconds) {
		var result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

		return{
			minutes: result.substr(3, 2),
			seconds: result.substr(6, 2),
		};
	};
	
	function initializeVideo() {
		  var videoDuration = Math.round(video.duration);
		  seek.setAttribute('max', videoDuration);
		  progressBar.setAttribute('max', videoDuration);
		  var time = formatTime(videoDuration);
		  duration.innerText = `${time.minutes}:${time.seconds}`;
		  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
	}
	
	function updateTimeElapsed() {
		var time = formatTime(Math.round(video.currentTime));
		timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
		timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
	}
	
	function updateProgress() {
		seek.value = Math.floor(video.currentTime);
		progressBar.value = Math.floor(video.currentTime);
	}
	
	function updateSeekTooltip(event) {
		var skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
		seek.setAttribute('data-seek', skipTo)
		var t = formatTime(skipTo);
		seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
	}
	
	function skipAhead(event) {
		  var skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
		  video.currentTime = skipTo;
		  progressBar.value = skipTo;
		  seek.value = skipTo;
	}
	
	function updateVolume() {
		if (video.muted) {
			video.muted = false;
		}

		video.volume = volume.value;
	}
	
	function updateVolumeIcon() {
		volumeIcons.forEach(icon => {
			icon.classList.add('hidden');
		});

		volumeButton.setAttribute('data-title', 'Mute (m)')

		if (video.muted || video.volume === 0) {
			volumeMute.classList.remove('hidden');
			volumeButton.setAttribute('data-title', 'Unmute (m)')
		} else if (video.volume > 0 && video.volume <= 0.5) {
			volumeLow.classList.remove('hidden');
		} else {
			volumeHigh.classList.remove('hidden');
		}
	}
	function toggleMute() {
		video.muted = !video.muted;

		if (video.muted) {
			volume.setAttribute('data-volume', volume.value);
			volume.value = 0;
		} else {
			volume.value = volume.dataset.volume;
		}
	}
	
	function toggleFullScreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else if (document.webkitFullscreenElement) {
			document.webkitExitFullscreen();
		} else if (player.webkitRequestFullscreen) {
			player.webkitRequestFullscreen();
		} else {
			player.requestFullscreen();
		}
		fullscreenIcons.forEach((icon) => icon.classList.toggle("hidden") )
	}
	
	// var videowrapper = player.querySelector('.video-wrapper')
	// function resizevideo() {
		// var heightP = player.clientHeight;
		// var widthP = player.clientWidth;
		
		// var heightV = videowrapper.clientHeight;
		// var widthV = videowrapper.clientHeight;
		// console.log(widthP+" w |P| h "+heightP)
		// console.log(widthV+" w |V| h "+heightV)
		
		// if ( heightP < heightV ){
			// videowrapper.height = heightP;
		// }
		// if ( widthP < widthV ){
			// videowrapper.width = widthP;
		// }
		
		
	// }
	
	// resizevideo();

	
	
	playButton.addEventListener('click', togglePlay);
	video.addEventListener('click', togglePlay);
	firstbtn.addEventListener('click', togglePlay);
	video.addEventListener('play', updatePlayButton);
	video.addEventListener('pause', updatePlayButton);
	video.addEventListener('loadedmetadata', initializeVideo);
	video.addEventListener('timeupdate', updateTimeElapsed);
	video.addEventListener('timeupdate', updateProgress);
	seek.addEventListener('mousemove', updateSeekTooltip);
	seek.addEventListener('input', skipAhead);
	volume.addEventListener('input', updateVolume);
	video.addEventListener('volumechange', updateVolumeIcon);
	volumeButton.addEventListener('click', toggleMute);
	fullscreenButton.onclick = toggleFullScreen;
	// new ResizeObserver(resizevideo).observe(player)
});