	function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
	
			function toggleSong() {
			var song = document.querySelector('audio');
			if(song.paused == true) {
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
			}
			else {
			console.log('Pausing');
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();
			}
			} 
			
			function updateCurrentTime() {
			var song = document.querySelector('audio');
			var currentTime = Math.floor(song.currentTime);
			currentTime = fancyTimeFormat(currentTime);
			var duration = Math.floor(song.duration);
			duration = fancyTimeFormat(duration)
			$('.time-elapsed').text(currentTime);
			$('.song-duration').text(duration);
		}
		
		
		
		
		
		
			function addSongNameClickEvent(songName,position) {
            var id = '#song' + position;
			$(id).click(function() {
			var audio = document.querySelector('audio');
			var currentSong = audio.src;
			if(currentSong.search(songName) != -1)
			{
			toggleSong();
			}
			else {
			audio.src = songName;
			toggleSong();
			}
			});
			}
				
			
  	        window.onload = function() {
			
			updateCurrentTime(); 
			setInterval(function() {
			updateCurrentTime();
			},1000);
		
		
		
		  // var songList = ['Shape Of You','Daspacito', ' Ye Hai Aashiqui ', 'Waka Waka', 'Mahi Ve', 'Khaab']; 
			//var fileNames = ['song5.mp3','song2.mp3','song3.mp3','song4.mp3','song6.mp3','song7.mp3'];
			
			//var artistList = ['Ed Sheeran', 'Luis Fonsi','Abhishek Arora', 'Dev Negi','Badshah', 'Jubin Nautiyal', 'Neha Kakkar','Akhil']; 
	
	      //var albumList = ['Divide','Despacito & Mis Grandes Éxitos','Ye Hai Aashiqui','ale el Sol','Wajah Tum Ho','Khaab'];
          //  var durationList = ['3:54','3:49','3:33','3:05','6:02','3:22'];
		  
			   var songs = [{
				'name': 'Shape Of You',
				'artist': 'Ed Sheeran',
				'album': 'Divide',
				'duration': '3:54',
			   'fileName': 'song5.mp3'
					},
			{
				'name': 'Daspacito',
				'artist': 'Luis Fonsi',
				'album': 'Despacito & Mis Grandes Éxitos',
				'duration': '3:49',
				'fileName': 'song2.mp3'
			},
			{
				'name': 'Ye Hai Aashiqui',
				'artist': ' Abhishek Arora',
				'album': 'Ye Hai Aashiqui',
				'duration': '3:33',
				'fileName': 'song3.mp3'
			},
			{
				'name': 'Waka Waka',
				'artist': 'Shakira',
				'album': 'Sale el Sol',
				'duration': '3:05',
				'fileName': 'song4.mp3'
			},	
				{
				'name': 'Mahi Ve',
				'artist': 'Neha Kakkar',
				'album': 'Wajah Tum Ho',
				'duration': '6:02',
			   'fileName': 'song6.mp3'
					},
			{
				'name': 'Khaab',
				'artist': 'Akhil',
				'album': 'Khaab',
				'duration': '3:22',
			   'fileName': 'song7.mp3'
					
			}]
		  
		    
	
			for(var i =0; i < songs.length;i++) {
			var obj = songs[i];
			var name = '#song' + (i+1);
			var song = $(name);
			song.find('.song-name').text(obj.name);
			song.find('.song-artist').text(obj.artist);
			song.find('.song-album').text(obj.album);
			song.find('.song-length').text(obj.duration);
			addSongNameClickEvent(obj.fileName,i+1)
		}
				
			//addSongNameClickEvent(fileNames[0],1);
			//addSongNameClickEvent(fileNames[1],2);
			//addSongNameClickEvent(fileNames[2],3);
			//addSongNameClickEvent(fileNames[3],4);
			//addSongNameClickEvent(fileNames[4],5);
			//addSongNameClickEvent(fileNames[5],6);	
		
     		//for (var i = 0; i < fileNames.length ; i++) {
			//addSongNameClickEvent(fileNames[i],i+1)
			//	} 
		
	                   }
	
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
	
	
				$('.play-icon').on('click', function() {
					 toggleSong();
				});
	
	
				$('body').on('keypress', function(event) {
							if (event.keyCode == 32) {
							  toggleSong(); 
							}
						});