import Scrollbar from "smooth-scrollbar";

var options = {
'damping':0.1,
  'thumbMinSize':20,
  'syncCallbacks':true,
  'renderByPixels':true,
  'alwaysShowTracks':true,
  'continuousScrolling':true,
  'wheelEventTarget':null,
};

Scrollbar.init(document.querySelector("#my-scrollbar"), options);
