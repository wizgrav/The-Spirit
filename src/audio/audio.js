module.exports = function (value) {
  var el = document.createElement("div");
  var logo = document.createElement("img");
  var input = document.createElement("input");
  var button = document.createElement("button");
  var audio = document.createElement("audio");
  
  logo.src="//wizgrav.github.io/clubber/toy/soundcloud.png";
  input.value = value;
  audio.loop = true;
  audio.controls = true;
  audio.style.verticalAlign = "top";
  audio.mute = false;
  audio.crossOrigin = "anonymous";
  
  button.innerHTML = "Load";
  var load = function () {
    var url = 'http://api.soundcloud.com/tracks/'  + parseInt(input.value) + '/stream' +
  '?client_id=56c4f3443da0d6ce6dcb60ba341c4e8d';
    audio.src=url;
    audio.play();
  }
  
  button.onclick = load;
  
  load();
    
  el.style.position = "fixed";
  el.style.top = "0";
  el.style.left="0";
  el.appendChild(logo);
  el.appendChild(input);
  el.appendChild(button);
  el.appendChild(audio);
  
  document.body.appendChild(el);
  
  return audio;
}