angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: function(search) {  
      search.searchYouTube();    
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.changeVideo = (video) => {
        console.log(video);
        this.currentVideo = video;
      };
      //this.search = search;
    }
  });
