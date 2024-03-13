document.querySelector('.playButton').addEventListener('click', function() {
  var iframe = document.createElement('iframe');
  iframe.width = "100%"; // Set the width to 100%
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/wVmm9HKNu-o?si=30SV7116dtbpAbJT&autoplay=1"; // Add autoplay=1 to the URL
  iframe.title = "YouTube video player";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  var youtubeContainer = this.parentElement;
  youtubeContainer.innerHTML = ''; // Remove the existing image and play button
  youtubeContainer.appendChild(iframe);
});