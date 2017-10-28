angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, cb) {
      console.log(query);
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
        console.log('thanks fam its working', response);
        cb(response.data.items);
      });
    };
  });
