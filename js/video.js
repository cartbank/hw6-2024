var video = document.getElementById("player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	//page load objective
	video.load();
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	//play button objective
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	//pause button objective
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	//slow down objective
	console.log("Slow down video");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	//speed up objective
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	//skip ahead objective
	console.log("Skip ahead");
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	//mute objective
	//toggles muted value for video
	video.muted = !video.muted;
	//if the video has been muted
	if (video.muted) {
		console.log("Mute");
		document.getElementById("mute").innerHTML = "Unmute";
	}
	//if the video has been unmuted
	else {
		console.log("Unmute");
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	//volume slider objective
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log("The current value is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	//styled objective
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	//original objective
	video.classList.remove("oldSchool");
});