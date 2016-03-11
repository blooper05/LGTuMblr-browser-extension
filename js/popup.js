$.getJSON('http://tumblrapi-blooper.rhcloud.com/photos', null, function (data, status) {
  $.each(data, function () {
    var img = $('<img>').addClass('image').attr('src', this);
    $('.row').append(img).hide().fadeIn('fast');
  });

  $('#loading').fadeOut();
});
