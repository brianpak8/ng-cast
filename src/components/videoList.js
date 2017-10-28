angular.module('video-player')

  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    bindings: {
      videos: '<'
    },
    controller: function() {
      //console.log(this.videos);
      // this.addVideos = function() {
      //   this.videos.forEach(video => 
      //     '<videoListEntry video={{video}} />');
      // };
      
    }
  });
