angular.module('video-player')

  .component('search', {
    templateUrl: 'src/templates/search.html',
    
    bindings: {
      search: '<',
      renderVideos: '<'
    },
    controller: function() {
      
      console.log(this);
    }
    
    
    // TODO
  });
