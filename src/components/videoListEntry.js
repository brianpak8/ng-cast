angular.module('video-player')
  
  .component('videoListEntry', {
    templateUrl: 'src/templates/videoListEntry.html',
    bindings: {
      video: '<'
    },
    controller: function() {
      // console.log(this.video)
      // this.addVideos = function() {
      //   this.videos.forEach(video => 
      //     '<videoListEntry video={{video}} />');
      // };
      
    }
  });
