import React from 'react'


return (
    // <div>
    //   <AudioPlayer playlist={playlist} hideBackSkip={true} />,
    //   url: 'http://res.cloudinary.com/smithwebtek/video/upload/v1515956104/Vereno1_syz7qi.aiff',
    // </div>
  )
}


class Audio extends Componet {

  componentDidMount: function () {
    let player = $('.player');

    /**
     * Have to add media event listeners here.
     *
     */
    player.on('play', (e) => {
      e.preventDefault();
      this.playLocation();
    });

    player.on('pause', (e) => {
      e.preventDefault();
      this.pause();
    });

    player.on('ended', (e) => {
      e.preventDefault();
      this.ended();
    });

    $(document).on('keydown', (e) => {
  // Move currentTime forward and backward via arrow keys and play/pause via spacebar.
  if (e.keyCode == 39) {
    this.state.player.currentTime += 1;
  } else if (e.keyCode == 37) {
    this.state.player.currentTime -= 1;
  } else if (e.keyCode == 32 && this.state.player.paused == true) {
    e.preventDefault();
    this.state.player.play();
  } else if (e.keyCode == 32 && this.state.player.paused == false) {
    e.preventDefault();
    this.state.player.pause()
  }
});

player.on('wheel', (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.originalEvent.wheelDelta > 0) {
    this.state.player.currentTime += 1;
  } else {
    this.state.player.currentTime -= 1;
  }
});
  },

componentWillUnmount: function () {
  let player = $('#' + this.props.id);
  player.off('play');
  player.off('pause');
  $(document).off('keydown')
  player.off('wheel')
},

getPlaybackTime: function (time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  if (minutes > 59) {
    minutes = Math.floor(time / 60) - 60;
  }

  let seconds = Math.round(time - minutes * 60);
  if (seconds > 3599) {
    seconds = Math.round(time - minutes * 60) - 3600;
  }

  return time;
},

playLocation: function () {
  this.setState({ player: $('.player')[0] }, function () {
    let playbackTime = this.getPlaybackTime(this.state.player.currentTime);
    let playbackTime = localStorage.getItem('codepenReactPlayer');

    if (playbackTime !== null) {
      this.state.player.currentTime = playbackTime;
    }
    this.state.player.play();
  })
},

pause: function () {
  let playbackTime = this.getPlaybackTime(this.state.player.currentTime);

  localStorage.setItem('codepenReactPlayer', playbackTime);
},

ended: function () {
  // Set playback_time to 0.
  localStorage.setItem('codepenReactPlayer', playbackTime);
},

render: function () {
  return <audio controls className="player" preload="false">
    <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
  </audio>
}
});

}

export default Aud
