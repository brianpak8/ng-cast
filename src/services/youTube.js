angular.module('video-player')
  .service('search', function($http) {
    this.searchYouTube = function(query, cb) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          q: query,
          maxResults: 5, 
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video'
        },
        // transformResponse: function(response) {
        //   console.log(response);
        // }
      }).then(function(response) {
        console.log('thanks vinoj its working', response);
        cb(response.data.items);
      });
    };
  });
