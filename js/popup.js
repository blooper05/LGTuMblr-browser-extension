$(function () {
  load();

  $('#reload').on('click', function (data) {
    loading();
    load();
  });
});

function load() {
  const URL = 'http://tumblrapi-blooper.rhcloud.com/photos';

  $.getJSON(URL, null, function (data, status) {
    $.each(data, function () {
      var img = $('<img>').addClass('image').attr('src', this);
      $('.row').append(img).hide().fadeIn('fast');
    });

    $('#loading').fadeOut();

    loaded();
  });
}

function loaded() {
  $('.image').on('click', function (data) {
    var url = this.src;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
      chrome.tabs.sendMessage(tab[0].id, { url: url }, function (response) {});
    });
  });
}

function loading() {
  $('.image').fadeOut(null, function () {
    this.remove();
  });
  $('#loading').fadeIn('fast');
}
