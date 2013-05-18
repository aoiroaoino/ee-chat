// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var deleteText =function(){
  document.getElementById('text_content').value = ''
};

var addMessage = function(message){
  m = document.getElementById('chatfield').innerHTML
  document.getElementById('chatfield').innerHTML = m + '<br>' + message
};

var scrollHeight = function(){
  var height = document.getElementById('scr').scrollHeight
  document.getElementById('scr').scrollTop = document.getElementById('scr').scrollHeight
};

Pusher.log = function(message) {
      if (window.console && window.console.log) window.console.log(message);
    };

    // Flash fallback logging - don't include this in production
    WEB_SOCKET_DEBUG = true;

    var pusher = new Pusher('550cfffcc748b4bfe272');
    var channel = pusher.subscribe('channel');
    channel.bind('event', function(data) {
      // alert(data);
      deleteText();
      addMessage(data);
      scrollHeight();
    });