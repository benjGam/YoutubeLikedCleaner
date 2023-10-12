let x = 0;

setInterval(main(), 500);

function main() {
  clickDropdown();
  setTimeout(clickDelete(), 20);  
  x++;
}

function clickDropdown() {
  const dropdown = document.getElementsByTagName('ytd-playlist-video-renderer')[x].getElementsByTagName('button')[0];
  dropdown.click(); 
}

function clickDelete() {
  const deleteLabel = document.getElementsByTagName('tp-yt-paper-listbox')[1].getElementsByTagName('yt-formatted-string')[6];
  deleteLabel.click();
}
