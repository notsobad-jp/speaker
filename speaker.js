/**
speaker.js
v1.0.0

Copyright (c) 2016 NOT SO BAD
This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
window.onload = function () {
  if (!'SpeechSynthesisUtterance' in window) {
    var speakers = document.querySelectorAll(".speaker");
    for(i=0 ; i<speakers.length ; i++){
      speakers[i].addEventListener("click", function(e){
	    alert('お使いのブラウザは音声再生に対応していないようです。GoogleChromeでの利用をオススメします。');
      }, {once: true});
    }
    return;
  }
  
  var isSpeakerInitialized = false;
  speechSynthesis.onvoiceschanged = function(){
    if(isSpeakerInitialized) { return; }
    isSpeakerInitialized = true;

    var systemVoices = speechSynthesis.getVoices();
    var speakers = document.querySelectorAll(".speaker");
    for(i=0 ; i<speakers.length ; i++){
      speakers[i].addEventListener("click", function(e){
        var synth = new SpeechSynthesisUtterance();
        synth.text = e.target.getAttribute("data-text");
        synth.lang = e.target.getAttribute("data-lang");

        for (var j = 0; j < systemVoices.length; j++) {
          if (systemVoices[j].lang == synth.lang){
            synth.voice = systemVoices[j];
          }
        }
        speechSynthesis.speak(synth);
      }, {once: true});
    }
  }
};
