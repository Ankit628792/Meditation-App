(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),o=a(2),n=a.n(o),r=(a(23),a(5)),u=a(6),l=a(8),c=a(7),m=a(9),d=a(13),h=a.n(d);var v=function(e){return i.a.createElement(h.a,{percentage:e.percentage,text:e.text,strokeWidth:3,styles:{root:{},path:{stroke:"#0086ffcc",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s"},trail:{stroke:"#ffffffcc"},text:{fill:"#f88",fontSize:"30px"}}})},g=a(3),p=a.n(g),f=a(4),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleSongPlaying=a.handleSongPlaying.bind(Object(f.a)(Object(f.a)(a))),a.state={position:0,loopCount:0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleSongPlaying",value:function(e){var t=e.position,a=e.duration;this.setState({position:t});var s=t+this.state.loopCount*a,i=document.querySelector(".timer"),o=Math.floor(s/6e4),n=Math.floor(s/1e3%60);o=("0"+o).slice(-2),n=("0"+n).slice(-2),i.innerHTML="".concat(o," : ").concat(n),this.props.funcPerc(s/1e3),console.log(Math.floor(s/1e3)+", "+this.props.desiredT)}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{url:this.props.url,playStatus:this.props.playStatus,onPlaying:this.handleSongPlaying,onFinishedPlaying:function(){return e.setState({loopCount:e.state.loopCount+1,position:0})},onStop:function(){return e.setState({loopCount:0,position:0})},position:this.state.position,volume:this.props.volume})}}]),t}(s.Component),b=a(17);a(31);var y=function(e){return i.a.createElement(b.a,Object.assign({style:{height:20,padding:0},handleStyle:{display:"none"},railStyle:{margin:0,borderRadius:0,height:20,backgroundColor:"#ffffff",opacity:.2},trackStyle:{borderRadius:0,height:20,backgroundColor:"#ffffff"}},e))},k=(a(32),a(33),"svg/play.svg"),E="audio/rain.mp3",N="svg/volume-2.svg",P="svg/volume-1.svg",C="svg/volume-x.svg",j="img/rain.jpg",O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).volumeChange=function(e){a.setState({volume:a.state.mute?a.state.volume:e,volumeIcon:a.state.mute||0===e?C:e<=50?P:N})},a.state={pbuttonUrl:k,audioStatus:p.a.status.STOPPED,timeValues:[120,300,600,900],audioNames:["Rain","Forest","Park","Stream","Waves"],seekCurrentPosition:0,audioUrl:E,bgImg:j,desiredTime:120,timeHovered:!1,audioHovered:!1,volume:100,mute:!1,volumeIcon:N},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"timeSelect",value:function(e){this.setState({desiredTime:e.duration})}},{key:"playPause",value:function(){console.log("plaPayse"),this.state.pbuttonUrl===k?this.setState({pbuttonUrl:"svg/pause.svg",audioStatus:p.a.status.PLAYING}):"svg/pause.svg"===this.state.pbuttonUrl&&this.setState({pbuttonUrl:k,audioStatus:p.a.status.PAUSED})}},{key:"audioSelect",value:function(e){var t=JSON.stringify(e.audioName).replace(/["]+/g,"");t===this.state.audioNames[1]?this.setState({audioUrl:"audio/forest.mp3",bgImg:"img/forest.jpg"}):t===this.state.audioNames[2]?this.setState({audioUrl:"audio/park.mp3",bgImg:"img/park.jpg"}):t===this.state.audioNames[3]?this.setState({audioUrl:"audio/stream.mp3",bgImg:"img/stream.jpg"}):t===this.state.audioNames[4]?this.setState({audioUrl:"audio/waves.mp3",bgImg:"img/waves.jpg"}):this.setState({audioUrl:E,bgImg:j})}},{key:"moveSeek",value:function(e){this.setState({seekCurrentPosition:e/this.state.desiredTime*100}),Math.floor(e)===this.state.desiredTime&&this.setState({pbuttonUrl:k,audioStatus:p.a.status.STOPPED})}},{key:"handleTimeHover",value:function(){this.setState({timeHovered:!this.state.timeHovered})}},{key:"handleAudioHover",value:function(){this.setState({audioHovered:!this.state.audioHovered})}},{key:"toggleMute",value:function(){this.setState({volumeIcon:this.state.mute?this.state.volume<=50?P:N:C,mute:!this.state.mute})}},{key:"render",value:function(){var e=this;console.log(this.state.timeBtnClass);var t=this.state.timeValues.map(function(t){return i.a.createElement("button",{key:t,onMouseEnter:e.handleTimeHover.bind(e),onMouseLeave:e.handleTimeHover.bind(e),className:e.state.timeHovered||t!==e.state.desiredTime?"":"active",onClick:function(){e.timeSelect({duration:t})}},t/60," Minutes")}),a=this.state.audioNames.map(function(t){return i.a.createElement("button",{key:t,onMouseEnter:e.handleAudioHover.bind(e),onMouseLeave:e.handleAudioHover.bind(e),className:e.state.audioHovered||e.state.audioUrl!=="audio/"+t.toLowerCase()+".mp3"?"":"active",onClick:function(){e.audioSelect({audioName:t})}},t)});return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"bg-overlay"}),i.a.createElement("div",{className:"bg",style:{backgroundImage:"url(".concat(this.state.bgImg,")")}}),i.a.createElement("div",{className:"time-menu"},t),i.a.createElement("div",{className:"player-container"},i.a.createElement("img",{className:"playPause",src:this.state.pbuttonUrl,alt:"Play",onClick:function(t){e.playPause()}}),i.a.createElement("div",{className:"volume-control"},i.a.createElement("img",{onClick:this.toggleMute.bind(this),className:"volume-icon",src:this.state.volumeIcon,alt:""}),"\xa0",i.a.createElement("div",{className:"volume-slider"},i.a.createElement(y,{id:"slider",onChange:this.volumeChange,step:1,min:0,max:100,value:this.state.mute?0:this.state.volume}))),i.a.createElement("div",{className:"audioSeek"},i.a.createElement(v,{id:"seek",percentage:this.state.seekCurrentPosition})),i.a.createElement(S,{playStatus:this.state.audioStatus,url:this.state.audioUrl,funcPerc:this.moveSeek.bind(this),desiredT:this.state.desiredTime,volume:this.state.mute?0:this.state.volume}),i.a.createElement("div",{className:"timer"},"00 : 00")),i.a.createElement("div",{className:"audio-menu"},a))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.aaa6f7de.chunk.js.map