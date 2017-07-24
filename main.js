	         
			     var Playingnumber = 0  ;
				 var currentSongNumber = 1;
			     var willLoop = 0;
			     var willShuffle = 0; 
	             var willmute = 1; 
	             var barsize=700;	
			
	//mute function//
	
			function mute(){
						var song=document.querySelector('audio');
				if (song.muted)
				{
					song.muted= false;
				}
				else
				{
					song.muted=true;
				}
			}
			
		
		    function changeSong() 
						{
						var music =  songs[Playingnumber].fileName;
						var song = document.querySelector("audio");
						song.src = music;
						toggleSong();
						changeCurrentSongDetails(songs[Playingnumber]);
						slide(songs[Playingnumber])
						}


	
	
		//function for different sliders for different songs//
	        
 	        function slide(next){
  		
 		if(next==songs[0]){
 	$('body').vegas('destroy');
 	 
  
 $('.vegas-slider').vegas({
 		
  slides:[
        { src: "images/10.jpg" },
        { src: "images/11.jpg" },
        { src: "images/12.jpg" },
        { src: "images/13.png" },
 		{ src: "images/14.jpg" },
        { src: "images/15.jpg" },
 		{ src: "images/16.jpg" },
 		{ src: "images/17.jpg" },
 		{ src: "images/18.jpg" },
 		{ src: "images/19.png" },
 		{ src: "images/101.jpg" },
 		{ src: "images/102.jpg" },
 		{ src: "images/103.jpg" }
     ],
 	animation: 'kenburns'
 		
 		
 	});
  	
 	}
 	else if(next ==songs[1]){
 	 $('body').vegas('destroy');
 		 
  	
 		
 		$('.vegas-slider').vegas({
 		
    slides:[
        { src: "images/21.png" },
        { src: "images/22.jpg" },
        { src: "images/23.png" },
        { src: "images/24.jpg" },
       { src: "images/25.jpg" },
 		{ src: "images/26.jpg" },
        { src: "images/27.jpg" },
 		{ src: "images/28.jpg" },
        { src: "images/29.jpg" },
		{ src: "images/291.jpg" },
        { src: "images/292.jpg" },
 	{ src: "images/293.jpg" }
       
   ],
	animation: 'kenburns'
		
 	
 		
		
 		
 	});
 	}
 	
 
 
 			else if(next == songs[2]){
				
 				 $('body').vegas('destroy');
 					
 					
 					$('.vegas-slider').vegas({
				
		   slides:[
					{ src: "images/30.jpg" },
 					{ src: "images/31.jpg" },
 					{ src: "images/32.jpg" },
 				{ src: "images/33.png" },
 				{ src: "images/34.jpg" },
				{ src: "images/35.png" },
					{ src: "images/36.jpg" },
				  { src: "images/37.jpg" },
					{ src: "images/38.jpg" },
 				{ src: "images/39.jpg" }
					  
 				
 				],
 				animation: 'kenburns'
 	
		
		
		
		
				});
				
 				}	
 				else if(next == songs[3]){
 					$('body').vegas('destroy');
 					
 					
 					$('.vegas-slider').vegas({
 					
 			   slides:[
 					{ src: "images/41.jpg" },
 					{ src: "images/42.jpg" },
 					{ src: "images/43.jpg" },
 					{ src: "images/45.jpg" },
 				{ src: "images/46.jpg" },
 					{ src: "images/47.jpg" },
 					{ src: "images/48.jpg" },
 					{ src: "images/401.jpg" },
 					{ src: "images/402.jpg" },
 					{ src: "images/403.jpg" },
 					{ src: "images/404.jpg" },
 				{ src: "images/405.jpg" },
 					{ src: "images/406.png" },
 					{ src: "images/407.jpg" }
 					  
 					  
 			],
				animation: 'kenburns'
				
 				
 				
 					
 					
 				});
 				
 				}
 				else if(next == songs[4]){
			$('body').vegas('destroy');
 					
 					
					$('.vegas-slider').vegas({
 					
 			   slides:[
 					{ src: "images/51.jpg" },
 					{ src: "images/52.jpg" },
 					{ src: "images/53.jpg" },
 					{ src: "images/54.jpg" },
 					{ src: "images/55.jpg" },
 					{ src: "images/56.jpg" },
 					{ src: "images/57.jpg" },
 					{ src: "images/58.jpg" },
 					{ src: "images/59.jpg" },
 					{ src: "images/591.jpg" },
 					{ src: "images/592.jpg" },
 					{ src: "images/593.jpg" },
 			{ src: "images/595.jpg" },
 					{ src: "images/596.jpg" },
 					{ src: "images/597.jpg" },
 					{ src: "images/598.jpg" },
 					{ src: "images/599.jpg" },
 					{ src: "images/501.jpg" },
 					{ src: "images/502.jpg" },
					{ src: "images/503.jpg" },
 					{ src: "images/504.jpg" },
 					{ src: "images/505.jpg" },
 					{ src: "images/506.jpg" },
 					{ src: "images/507.jpg" }
 					 
 					
 				],
 				animation: 'kenburns'
 					
 				
 					
					
 					
 				});
 				}
 				 else if(next == songs[5])
 				 {
 				 $('body').vegas('destroy');
 					
 					
 					$('.vegas-slider').vegas({
 					
 			   slides:[
 					{ src: "images/60.jpg" },
 					{ src: "images/61.jpg" },
 					{ src: "images/62.jpg" },
 					{ src: "images/63.jpg" },
 					{ src: "images/64.jpg" },
 					{ src: "images/65.jpg" },
 					{ src: "images/66.jpg" },
 					{ src: "images/67.jpg" },
 				{ src: "images/601.jpg" },
 					{ src: "images/602.jpg" },
 				{ src: "images/603.png" },
 					{ src: "images/604.jpg" }
 					
 				 
					
 				],
 				animation: 'kenburns'
 					
 					
 					
 					
 					
				});
				 }
 				else
 				{
 					$('body').vegas('destroy');
 					$('.vegas-slider').vegas({
 					
 			   slides:[
 					{ src: "images/01.jpg" },
 					{ src: "images/02.jpg" },
					{ src: "images/04.jpg" },
 					{ src: "images/05.jpg" },
					{ src: "images/06.jpg" }
 				],
 				animation: 'kenburns'
 					
 					
 					
 					
 					
 				});
 				}
 				
 				}
 				
 
		
	 

	
	
	
					
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
				
				
	//function for current and duration time of song//			
				
				 function changeCurrentSongDetails(songObj) {
					$('.current-song-image').attr('src','images/' + songObj.image)
					$('.current-song-name').text(songObj.name)
					$('.current-song-album').text(songObj.album)
				}

    //volume function//


				function setvolume(){
					var song = document.querySelector('audio');
					song.volume = slider.value/100;
					
                }
    //function for play and pause//
	
			function toggleSong() {
			var song = document.querySelector('audio');
			if(song.paused == true) { // if song is in pause mode then play the song
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
			$('body').vegas('play');
			}
			else {
			console.log('Pausing'); //otherwise pause the song
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();
			$('body').vegas('pause');
			}
			} 
			
			
		
	//function for change time in minutes//		
			
			function updateCurrentTime() {
			var song = document.querySelector('audio');
			var currentTime = Math.floor(song.currentTime);
			currentTime = fancyTimeFormat(currentTime);
			var duration = Math.floor(song.duration);
			duration = fancyTimeFormat(duration)
			$('.time-elapsed').text(currentTime);
			$('.song-duration').text(duration);
		}
		
	 //function for fill progress bar//	
		function updateTimer() {
			var song = document.querySelector('audio');
			var ct = song.currentTime;
			var td = song.duration;
			var percentage =(ct/td)*100;
			$('.progress-filled').css('width', percentage+ "%");
			
		}
		
		
	//function for song play when click//	
			
			function addSongNameClickEvent(songObj,position) {
				var songName = songObj.fileName;
				var id = '#song' + position;
				$(id).click(function() {
					Playingnumber=position-1;
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
								
				
	            //playlist//	

				
			var songs = [{
			
				'name': 'Daspacito',
				'artist': 'Luis Fonsi',
				'album': 'Despacito & Mis Grandes Éxitos',
				'duration': '3:49',
				'fileName': 'song2.mp3',
				'image': 'song2.jpeg'
			},
			{
				'name': 'Khaab',
				'artist': 'Akhil',
				'album': 'Khaab',
				'duration': '3:22',
			   'fileName': 'song7.mp3',
			   'image': 'song7.jpg'
				
			},
			{
				'name': 'Na Ja Na Ja',
				'artist': 'Pav Dharia',
				'album': 'Na Ja Na Ja ',
				'duration': '3:23',
			   'fileName': 'song6.mp3',
			   'image': 'song6.jpg'
				
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
				'name': 'Waka Waka',
				'artist': 'Shakira',
				'album': 'Sale el Sol',
				'duration': '3:05',
				'fileName': 'song4.mp3',
				'image': 'song4.jpg'
				
			}]
			
	// function for ending the song//

	
		function timeJump(){
		var song =document.querySelector('audio')
		song.currentTime = song.duration-5;
	    }
	 
	//function for shuffle//	  
		  
		 $('audio').on('ended',function() {
			   
				var audio = document.querySelector('audio');
					if (willShuffle == 1) {
						
						var nextSongNumber = randomExcluded(1,6,currentSongNumber); // Calling our function from Stackoverflow
						var nextSongObj = songs[nextSongNumber-1];
						 
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
					     slide(nextSongObj);
						currentSongNumber = nextSongNumber;
						
					}
					else if(currentSongNumber < 7) {
						
						var nextSongObj = songs[currentSongNumber];
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
						slide(nextSongObj);
						currentSongNumber = currentSongNumber + 1;
					}
					else if(willLoop == 1) {
					
						
						var nextSongObj = songs[0];
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
						currentSongNumber =  1;
						slide(nextSongObj);
					}
					else {
						slide(nextSongObj);
						$('.play-icon').removeClass('fa-pause').addClass('fa-play');
						audio.currentTime = 0;
					}
				})
				
				
				
				
				
				
				
				
				
				function randomExcluded(min,max,excluded){
				var n =Math.floor(Math.random()*(max-min)+min);
                if	(n>=excluded)n++;
                return n;				
					
				}
				  
				  
		
				

				
				
	//welcome screen//			
							
  	        window.onload = function() {
			
			changeCurrentSongDetails(songs[0]);
			
			updateCurrentTime(); 
			setInterval(function() {
			updateCurrentTime();
			updateTimer();
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
				
					"paging": false
			});
			}	   
					   
					   

			//jquery ko bola class ko select kro or jb uspr click ho to code run kre
			
			
			$('.welcome-screen button').on('click', function() { //$ is used  in place of var button = document.querySelecttor and 
				var name = $('#name-input').val();               // name-input ki jo id hai uski jo value hai usko print krao
				if (name.length > 3) {                          //name ki jo length hai agr greater than 2 hai to code run krega
					var message = "Welcome, " + name;
					$('.main .user-name').text(message);        //jquery ko bolo main class mai h1 ko dhunde or usme text add kr de jo msg box mai hai
					$('.welcome-screen').addClass('hidden');    //jquery ko bola wecome-screen class mai hidden class ko add kr do
					$('.main').removeClass('hidden');  
					
			
					
			   $('.vegas-slider').vegas({
		
			   slides:[
					{ src: "images/01.jpg" },
					{ src: "images/02.jpg" },
					{ src: "images/04.jpg" },
					{ src: "images/05.jpg" },
					{ src: "images/06.jpg" },
					{ src: "images/07.jpg" },
					{ src: "images/08.jpg" },
					{ src: "images/09.png" }
					
				],
				animation: 'kenburns'
					
					
					
					
					
				});
					//then remove hidden class in main class
				} else {
					var error='type name more than three letters';
					$('#name-input').addClass('error');
					$('.error-message').removeClass('hidden').text(error);
				}
			
			
			
	
				$('.play-icon').on('click', function() {
					 toggleSong();
				});
	
	
			
						
				$('body').on('keypress',function(event) {
					console.log(event);
					var target = event.target;
					if (event.keyCode == 32 && target.tagName !='INPUT')
					{
						toggleSong();
					}
				});
				});				
							
			$('.fa-volume-up').on('click',function() {
			$('.fa-volume-up').toggleClass('disabled')
			willmute = 1 - willmute;
			
			mute();
            });
					
					
				
			$('.fa-random').on('click',function() {
			$('.fa-random').toggleClass('disabled')
			willShuffle = 1 - willShuffle;
            });
			
			$('.fa-repeat').on('click',function() {
				$('.fa-repeat').toggleClass('disabled')
				willLoop = 1 - willLoop;
			});
			
		
			$('#slider').on('mousemove',function(){
				setvolume();
			});


			
			
			$('#song1').on('click',function(){
				
			slide(songs[0]);

			});


			$('#song2').on('click',function(){
				
			 slide(songs[1]);
					 
					
			});

			$('#song3').on('click',function(){
			 
			 slide(songs[2]);
			});



			$('#song4').on('click',function(){
				slide(songs[3]);
			  
			});



			$('#song5').on('click',function(){
				slide(songs[4]);
			  
			});



			$('#song6').on('click',function(){
			slide(songs[5]);
			 
			});





$(".fa-step-forward").click(function(){

						if(willShuffle ==1)
						{
						var audio = document.querySelector('audio');
						var nextSongNumber = randomExcluded(0,5,Playingnumber); // Calling our function from Stackoverflow

						var nextSongObj = songs[nextSongNumber];
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
						slide(nextSongObj);
						Playingnumber = nextSongNumber;


						}


						else {

						if(Playingnumber == songs.length-1){
						Playingnumber = 0;
						changeSong();
						}

						else {
						console.log("two");
						console.log(Playingnumber);
						Playingnumber++;
						changeSong();
						 
						}

						}

						})




						$(".fa-step-backward").click(function(){

						if(Playingnumber == 0){
						console.log("one");
						Playingnumber = (songs.length-1);
						changeSong();




						}

						else {
						console.log("two");
						console.log(Playingnumber);
						Playingnumber--;
						changeSong();
						}




						});
			
 $('.player-progress').on('click',function(e){
 						     //console.log(e.pageX);
 
                         var song =document.querySelector('audio');
                             if(!song.ended){
								 var mouseX =e.pageX -bar.offsetLeft;
								 // console.log(mouseX);
 								 var newtime =(mouseX*song.duration)/barsize;
 								 //console.log(newtime);
 								 song.currentTime =newtime;
 								 
 								 
 								 var ct= song.currentTime;
 								 var dt= song.duration;
 								 var percentage=(ct/dt)*100;
 								 $(".progress-filled").css('width',percentage+"%");
 							}						
 							
 						});

                      

		