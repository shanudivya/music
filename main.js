	
			 
	
					
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
 function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','images/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}




	
			function toggleSong() {
			var song = document.querySelector('audio');
			if(song.paused == true) { // if song is in pause mode then play the song
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
			}
			else {
			console.log('Pausing'); //otherwise pause the song
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
		
		
		
		
		
		
			
		function addSongNameClickEvent(songObj,position) {
			var songName = songObj.fileName;
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
changeCurrentSongDetails(songObj); 
}
});
}
				
				
			
				  var songs = [{
					  
				
			
				'name': 'Daspacito',
				'artist': 'Luis Fonsi',
				'album': 'Despacito & Mis Grandes Éxitos',
				'duration': '3:49',
				'fileName': 'song2.mp3',
				'image': 'song2.jpeg'
			},
			{
				'name': 'Ye Hai Aashiqui',
				'artist': ' Abhishek Arora',
				'album': 'Ye Hai Aashiqui',
				'duration': '3:33',
				'fileName': 'song3.mp3',
				'image': 'song3.jpg'
			},
			{
				'name': 'Waka Waka',
				'artist': 'Shakira',
				'album': 'Sale el Sol',
				'duration': '3:05',
				'fileName': 'song4.mp3',
				'image': 'song4.jpg'
			},
			{
			    'name': 'Shape Of You',
				'artist': 'Ed Sheeran',
				'album': 'Divide',
				'duration': '3:54',
			   'fileName': 'song5.mp3',
			   'image': 'song5.jpg'
			},
			{
			   'name': 'Vibemachine-Aghori',
				'artist': ' Rakesh Sahu',
				'album': 'Psychedelic ',
				'duration': '9:12',
				'fileName': 'song1.mp3',
				'image': 'song1.jpg'
			},
		    {
				'name': 'Mahi Ve',
				'artist': 'Neha Kakkar',
				'album': 'Wajah Tum Ho',
				'duration': '6:02',
			   'fileName': 'song6.mp3',
			   'image': 'song6.jpg'
			},
			{
				'name': 'Khaab',
				'artist': 'Akhil',
				'album': 'Khaab',
				'duration': '3:22',
			   'fileName': 'song7.mp3',
			   'image': 'song7.jpg'
					
			}]
		  
			
  	        window.onload = function() {
			
			changeCurrentSongDetails(songs[0]);
			
			updateCurrentTime(); 
			setInterval(function() {
			updateCurrentTime();
			},1000);
		
		
		
		  // var songList = ['Shape Of You','Daspacito', ' Ye Hai Aashiqui ', 'Waka Waka', 'Mahi Ve', 'Khaab']; 
		  //var fileNames = ['song5.mp3','song2.mp3','song3.mp3','song4.mp3','song6.mp3','song7.mp3'];
			
		  //var artistList = ['Ed Sheeran', 'Luis Fonsi','Abhishek Arora', 'Dev Negi','Badshah', 'Jubin Nautiyal', 'Neha Kakkar','Akhil']; 
	
	      //var albumList = ['Divide','Despacito & Mis Grandes Éxitos','Ye Hai Aashiqui','ale el Sol','Wajah Tum Ho','Khaab'];
          //  var durationList = ['3:54','3:49','3:33','3:05','6:02','3:22'];
		  
		    
	
			 for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
		}
				
			//addSongNameClickEvent(fileNames[0],1);
			//addSongNameClickEvent(fileNames[1],2);
			//addSongNameClickEvent(fileNames[2],3);
			//addSongNameClickEvent(fileNames[3],4);
			//addSongNameClickEvent(fileNames[4],5);
			//addSongNameClickEvent(fileNames[5],6);
            //addSongNameClickEvent(fileNames[6],7);				
		
     		//for (var i = 0; i < fileNames.length ; i++) {
			//addSongNameClickEvent(fileNames[i],i+1)
			//	} 
		
				
				$('#songs').DataTable({
				paging: false
			});
			}	   
					   
					   

			//jquery ko bola class ko select kro or jb uspr click ho to code run kre
			$('.welcome-screen button').on('click', function() { //$ is used  in place of var button = document.querySelecttor and 
				var name = $('#name-input').val();               // name-input ki jo id hai uski jo value hai usko print krao
				if (name.length > 2) {                          //name ki jo length hai agr greater than 2 hai to code run krega
					var message = "Welcome, " + name;
					$('.main .user-name').text(message);        //jquery ko bolo main class mai h1 ko dhunde or usme text add kr de jo msg box mai hai
					$('.welcome-screen').addClass('hidden');    //jquery ko bola wecome-screen class mai hidden class ko add kr do
					$('.main').removeClass('hidden');          //then remove hidden class in main class
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
						
					
						
					
					
			