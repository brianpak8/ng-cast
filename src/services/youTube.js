angular.module('video-player')
  .service('search', function($http) {
    this.searchYouTube = function(options) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: 'cats',
          maxResults: 5, 
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
        },
        transformResponse: function(response) {
          console.log(response);
        }
      // }).then(function(response) {
      //   console.log('thanks vinoj its working', response);
      });
    };
  });
