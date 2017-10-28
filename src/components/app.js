angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: function(youTube) {     
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (videos) => {
        this.videos = videos;
        this.currentVideo = this.videos[0];
      };
      
      youTube.search('cats', this.searchResults); 
      this.search = youTube.search;
    }
  });
