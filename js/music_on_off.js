document.getElementById("bgm").volume = 0.2;//设置音量大小
function bf(){
	 var audio=document.getElementById('bgm');
	 var img=document.getElementById('bgm_img');
	 var div=document.getElementById('music');
	 if(audio!==null){             
		    //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
		     // alert(audio.paused);
		if(audio.paused){                 
		      audio.play();//audio.play();// 这个就是播放 
			  img.src="img/music.png";
			   div.setAttribute('style', 'animation-play-state:running;');
		  }
		else{
		   audio.pause();// 这个就是暂停
		   img.src="img/music_on.png";
		   div.setAttribute('style', 'animation-play-state:paused;');
		 }
		} 
}