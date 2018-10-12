/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
    //your code here
    $.ajax({
      url: `https://api.lyrics.ovh/v1/${artist}/${title}`,
      method: 'GET',
      datatype: 'json',
      success: callback,
    });
  }
  
  function displaySearchData(data) {
    //your code here
    //let lyrics = data.lyrics;
    $('.js-search-results').html(data.lyrics);
  }
  
  function watchSubmit() {
    //your code here
    $('.js-search-form').on('submit', e => {
      e.preventDefault();
      const artist = $('.js-query-artist').val();
      const title = $('.js-query-title').val();
      getDataFromApi(artist, title, displaySearchData);
    });
  }
  
  $(watchSubmit);