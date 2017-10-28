angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: function(search) {     
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.changeVideo = (video) => {
        console.log(video);
        this.currentVideo = video;
      };
      search.searchYouTube('cats', (response) => {
        this.videos = response;
        this.currentVideo = this.videos[0];
      }); 
    }
  });
