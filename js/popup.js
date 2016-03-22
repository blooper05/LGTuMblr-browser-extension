$.getJSON('http://tumblrapi-blooper.rhcloud.com/photos', null, function (data, status) {
  $.each(data, function () {
    var img = $('<img>').addClass('image').attr('src', this);
    $('.row').append(img).hide().fadeIn('fast');
  });

  $('#loading').fadeOut();

  $('.image').on('click', function (data) {
    var url = this.src;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
      chrome.tabs.sendMessage(tab[0].id, { url: url }, function (response) {});
    });
  });
});

$('#reload').on('click', function (data) {
  $('.image').fadeOut(function () {
    $('#loading').fadeIn('fast');
    this.remove();
  });

  $.getJSON('http://tumblrapi-blooper.rhcloud.com/photos', null, function (data, status) {
    $.each(data, function () {
      var img = $('<img>').addClass('image').attr('src', this);
      $('.row').append(img).hide().fadeIn('fast');
    });

    $('#loading').fadeOut();

    $('.image').on('click', function (data) {
      var url = this.src;

      chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
        chrome.tabs.sendMessage(tab[0].id, { url: url }, function (response) {});
      });
    });
  });
});
