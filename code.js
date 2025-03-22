let x = 0;

setInterval(() => main(), 30);

function main() {
  clickDropdown();
  setTimeout(clickDelete(), 20);
  x++;
}

function clickDropdown() {
  console.log(document.getElementsByTagName("ytd-playlist-video-renderer")[x]);
  const dropdown = document
    .getElementsByTagName("ytd-playlist-video-renderer")
    [x].getElementsByTagName("button")[0];
  dropdown.click();
}

function clickDelete() {
  const label = document
    .getElementsByTagName("tp-yt-paper-listbox")[1]
    .getElementsByTagName("yt-formatted-string")[6];
  label.click();
}
