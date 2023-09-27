let x = 0;

setInterval(Main(), 500);

function Main() {
  const dropdown = document.getElementsByTagName('ytd-playlist-video-renderer')[x].getElementsByTagName('button')[0];
  dropdown.click();
  setTimeout(click_onDelete(), 20);  
  x++;
}

function ClickDelete() {
  const deleteLabel = document.getElementsByTagName('tp-yt-paper-listbox')[1].getElementsByTagName('yt-formatted-string')[6];
  deleteLabel.click();
}
