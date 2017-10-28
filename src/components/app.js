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
      
      
      this.renderVideos = (videos) => {
        this.videos = videos;
        this.currentVideo = this.videos[0];
      };
      
      search.searchYouTube('cats', this.renderVideos); 
      this.search = search.searchYouTube;
    }
  });
