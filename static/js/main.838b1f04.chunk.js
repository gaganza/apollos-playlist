(this["webpackJsonpapollos-playlist"]=this["webpackJsonpapollos-playlist"]||[]).push([[0],{170:function(e,t,a){e.exports=a(282)},182:function(e,t,a){},184:function(e,t,a){},204:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(11),o=a.n(i),c=a(26),s=a(24),u=a(18),m=a(43),p=a.n(m),d=a(58),E=a(21),f=a(25),y=a(23),b=a(22),h=a(48),v=a.n(h),g=a(360),O=a(328),T=a(325),k=a(158),A=a(358),x=a(327),C=a(75),_=a(326),S=a(146),I=a.n(S),P=a(147),j=a.n(P),R="a5c714fac13f4b5c924497c3b9e533a2",w="https://gaganza.github.io/apollos-playlist/",L=(a(182),function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onSuccessHandler=function(){var t=Object(d.a)(p.a.mark((function t(a){var n,r,l,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,r=n.setGlobalSpotifyClient,l=n.history,i=n.fetchUser,v.a.save("spotify-bearer",j()(a).accessToken,{path:"/"}),r(v.a.load("spotify-bearer")),t.next=5,i(e.props.spotifyWebApi).then((function(e){l.push("/playlists")}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onErrorHandler=function(e){console.log(e.name,e.message)},e}return Object(f.a)(a,[{key:"render",value:function(){return r.createElement("div",{className:"sign-in-button-container"},r.createElement(I.a,{redirectUri:w,clientId:R,scope:"playlist-read-collaborative playlist-modify-public user-top-read playlist-read-private user-follow-read user-read-recently-played playlist-modify-private user-library-read",onSuccess:this.onSuccessHandler,onFailure:this.onErrorHandler}))}}]),a}(r.PureComponent));!function(e){e.SET_GLOBAL_SPOTIFY_CLIENT_TOKEN="spotifyApi/SET_GLOBAL_SPOTIFY_CLIENT_TOKEN"}(n||(n={}));var M,N=function(e){return{type:n.SET_GLOBAL_SPOTIFY_CLIENT_TOKEN,data:e}};!function(e){e.RECEIVE_USER="user/RECEIVE_USER"}(M||(M={}));var D,W=function(e){return function(t){return e.getMe().then((function(e){var a;t((a=e.body,{type:M.RECEIVE_USER,data:a}))}))}};!function(e){e.RECEIVE_TRACKS_ATTRIBUTES="trackAttributes/RECEIVE_TRACKS_ATTRIBUTES"}(D||(D={}));var V,B=function(e,t){return function(a){return e.getAudioFeaturesForTracks(t).then((function(e){var t;a((t=e.body,{type:D.RECEIVE_TRACKS_ATTRIBUTES,data:t}))}))}};!function(e){e.RECEIVE_TOP_ARTISTS_LONG_TERM="topArtsits/RECEIVE_TOP_ARTISTS_LONG_TERM",e.RECEIVE_TOP_ARTISTS_MEDIUM_TERM="topArtsits/RECEIVE_TOP_ARTISTS_MEDIUM_TERM",e.RECEIVE_TOP_ARTISTS_SHORT_TERM="topArtsits/RECEIVE_TOP_ARTISTS_SHORT_TERM"}(V||(V={}));var U,F=function(e,t){return function(a){return e.getMyTopArtists({time_range:t}).then((function(e){var n;a("long_term"===t?(n=e.body,{type:V.RECEIVE_TOP_ARTISTS_LONG_TERM,data:n}):"medium_term"===t?function(e){return{type:V.RECEIVE_TOP_ARTISTS_MEDIUM_TERM,data:e}}(e.body):function(e){return{type:V.RECEIVE_TOP_ARTISTS_SHORT_TERM,data:e}}(e.body))}))}};!function(e){e.OPEN="snackbar/OPEN",e.CLOSE="snackbar/CLOSE"}(U||(U={}));var G=function(e){return{type:U.OPEN,data:e}},H=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi}}),(function(e){return{setGlobalSpotifyClient:function(t){return e(N(t))},fetchUser:function(t){return e(W(t))}}}))(L));a(184);function Y(){return l.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center",style:{color:"white"}},"Copyright \xa9 ",l.a.createElement(T.a,{color:"inherit",href:"https:/apollosplaylist.com/"},"Apollo's Playlist")," ",(new Date).getFullYear(),".")}var K=Object(_.a)((function(e){return{root:{height:"100vh",backgroundColor:"#1D1E28"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"#1D1E28",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#1D1E28"},avatar:{margin:e.spacing(1),backgroundColor:"#1D1E28"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var q,z=Object(u.f)((function(){var e=K();return l.a.createElement(x.a,{container:!0,component:"main",className:e.root},l.a.createElement(O.a,null),l.a.createElement(x.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),l.a.createElement(x.a,{item:!0,xs:12,sm:8,md:5,component:k.a,elevation:6,square:!0,className:"apollos-playlist__home-page"},l.a.createElement("div",{className:e.paper},l.a.createElement(C.a,{component:"h1",variant:"h5",style:{color:"white "}},"Apollo's Playlist"),l.a.createElement(H,null),l.a.createElement(A.a,{mt:5},l.a.createElement(Y,null)))))})),J=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.createElement("div",null,"Not Found")}}]),a}(r.PureComponent),Q=Object(u.f)(J),X=a(330),Z=a(331),$=a(332),ee=a(333),te=a(334),ae=a(335),ne=a(151),re=a.n(ne),le=a(329),ie=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},oe=a(30),ce=a.n(oe),se=ce()({overrides:{MuiButton:{containedPrimary:{backgroundColor:"#1D1E28","&:hover":{backgroundColor:"grey"}}}}}),ue=ce()({overrides:{MuiSlider:{thumbColorPrimary:{backgroundColor:"#1D1E28"},track:{backgroundColor:"#1D1E28"},rail:{backgroundColor:"gray"},valueLabel:{color:"#1D1E28"}}}}),me=ce()({palette:{primary:{main:"#1D1E28",dark:"#1D1E28"}},overrides:{MuiInput:{root:{width:"100%"}},MuiFormControl:{root:{width:"100%"}}}}),pe=ce()({overrides:{MuiChip:{root:{margin:"8px"}}}}),de=ce()({overrides:{MuiTableCell:{root:{paddingLeft:"0px",paddingRight:"8px",paddingTop:"4px",paddingBottom:"4px"}}}}),Ee=ce()({overrides:{MuiLinearProgress:{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:"grey"},barColorPrimary:{backgroundColor:"#1D1E28"},bar:{borderRadius:5}}}}),fe=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;window.scrollTo(0,0);var a=this.props,n=a.location,r=a.spotifyWebApi,l=a.fetchPlaylist,i=a.fetchTracksAttributes,o=n.pathname.substring(n.pathname.lastIndexOf("/")+1);o!==(null===(e=this.props.playlist)||void 0===e?void 0:e.id)&&l(r,o).then((function(){var e=t.props.playlist;e&&i(r,function(e){return e.tracks.items.map((function(e){return e.track.id}))}(e))})),this.setState({loading:!1})}},{key:"renderPlaylistArtwork",value:function(e){return e&&e.images&&0!==e.images.length?r.createElement("img",{src:e.images[0].url,style:{maxWidth:"300px",maxHeight:"300px "},alt:"".concat(e.name," playlist artwork")}):null}},{key:"renderPlaylistName",value:function(e){return e?r.createElement(C.a,null,e.name):null}},{key:"renderPlaylistOwner",value:function(e){return e?r.createElement("div",{style:{display:"flex",alignItems:"row"}},r.createElement(re.a,null),r.createElement(C.a,null,e.owner.display_name)):null}},{key:"renderAttributeBar",value:function(e,t){return r.createElement("div",null,r.createElement(C.a,null,ie(t)),r.createElement(le.a,{theme:Ee},r.createElement(X.a,{variant:"determinate",value:e[t]})))}},{key:"renderPlaylistAnalysis",value:function(e){if(!e)return null;var t=function(e){var t={acousticness:0,danceability:0,energy:0,instrumentalness:0,valence:0},a=e.audio_features.length;return e.audio_features.forEach((function(e){t.acousticness+=e.acousticness,t.danceability+=e.danceability,t.energy+=e.energy,t.instrumentalness+=e.instrumentalness,t.valence+=e.valence})),t.acousticness=t.acousticness/a*100,t.danceability=t.danceability/a*100,t.energy=t.energy/a*100,t.instrumentalness=t.instrumentalness/a*100,t.valence=t.valence/a*100,t}(e);return r.createElement(x.a,{container:!0,spacing:1,direction:"column"},r.createElement(x.a,{item:!0},this.renderAttributeBar(t,"acousticness")),r.createElement(x.a,{item:!0},this.renderAttributeBar(t,"danceability")),r.createElement(x.a,{item:!0},this.renderAttributeBar(t,"energy")),r.createElement(x.a,{item:!0},this.renderAttributeBar(t,"instrumentalness")),r.createElement(x.a,{item:!0},this.renderAttributeBar(t,"valence")))}},{key:"renderTracks",value:function(e){return e?r.createElement(le.a,{theme:de},r.createElement(Z.a,null,r.createElement($.a,null,r.createElement(ee.a,null,e.tracks.items.map((function(e){return r.createElement(te.a,{hover:!0,key:"table-row-".concat(e.track.id)},r.createElement(ae.a,{style:{width:"50px"}},r.createElement("img",{style:{maxHeight:"50px",maxWidth:"50px"},src:e.track.album.images[0].url,alt:"Album artwork for the song"})),r.createElement(ae.a,{style:{display:"felx",flexDirection:"column"}},r.createElement("div",null,e.track.name),r.createElement("div",null,e.track.artists[0].name," - ",e.track.album.name)),r.createElement(ae.a,null,function(e){var t,a,n,r,l,i,o="";return t=(a=(n=e/1e3)/60)/60,i=Math.floor(n)%60,l=Math.floor(a)%60,0!==(r=Math.floor(t)%60)&&(o+=r+":",1===l.toString().length&&(l="0"+l)),o+=l+":",1===i.toString().length&&(i="0"+i),o+=i}(e.track.duration_ms)))})))))):null}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.playlist,n=e.tracksAttributes,l=this.state.loading,i=t.pathname.substring(t.pathname.lastIndexOf("/")+1);return a&&a.id===i&&n?r.createElement(x.a,{container:!0,spacing:3},l&&r.createElement(x.a,{item:!0,xs:12},r.createElement(le.a,{theme:Ee},r.createElement(X.a,null))),r.createElement(x.a,{item:!0,xs:12,md:6},this.renderPlaylistArtwork(a)),r.createElement(x.a,{item:!0,xs:12,md:6},this.renderPlaylistName(a),r.createElement("br",null),this.renderPlaylistOwner(a),r.createElement("br",null),this.renderPlaylistAnalysis(n)),r.createElement(x.a,{item:!0,xs:12},this.renderTracks(a))):null}}]),a}(r.Component);!function(e){e.RECEIVE_PLAYLIST="playlist/RECEIVE_PLAYLIST"}(q||(q={}));var ye,be=function(e,t){return function(a){return e.getPlaylist(t).then((function(e){var t;a((t=e.body,{type:q.RECEIVE_PLAYLIST,data:t}))}))}},he=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,playlist:e.playlist,tracksAttributes:e.tracksAttributes}}),(function(e){return{fetchPlaylist:function(t,a){return e(be(t,a))},fetchTracksAttributes:function(t,a){return e(B(t,a))}}}))(fe)),ve=a(354),ge=a(155),Oe=a(336),Te=a(337),ke=a(338),Ae=a(339),xe=Object(ge.a)({overrides:{MuiCard:{root:{boxShadow:"none","&:hover":{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}}}}}),Ce=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.images,n=e.id;return r.createElement(s.b,{to:"/playlists/".concat(n),style:{textDecoration:"none"}},r.createElement(le.a,{theme:xe},r.createElement(Oe.a,null,r.createElement(Te.a,null,a[0]&&r.createElement(ke.a,{style:{padding:"16px"},component:"img",alt:"".concat(t," playlist artwork"),image:a[0].url,title:t}),r.createElement(Ae.a,null,r.createElement(C.a,null,t))))))}}]),a}(r.PureComponent),_e=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handlePaginationChange=function(e,t){var a=n.props,r=a.fetchPlaylists,l=a.spotifyWebApi,i=a.user;void 0===a.playlists.items[t]&&r(l,i.id,{limit:8,offset:8*(t-1)}),n.setState({page:t})},n.state={page:1,loading:!0},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n,r,l,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.location,n=t.spotifyWebApi,r=t.fetchPlaylists,l=t.user,i=t.playlists,""!==a.search){e.next=5;break}if(null!==i){e.next=5;break}return e.next=5,r(n,l.id,{limit:8,offset:0});case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.playlists,t=this.state,a=t.page,n=t.loading;return r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(x.a,{container:!0,spacing:3},n&&r.createElement(x.a,{item:!0,xs:12},r.createElement(le.a,{theme:Ee},r.createElement(X.a,null))),e&&e.items[a]&&e.items[a].map((function(e){return r.createElement(x.a,{item:!0,xs:12,md:6,lg:4,xl:3,key:"playlist-card-".concat(e.id)},r.createElement(Ce,e))}))),r.createElement("br",null),e&&e.items&&r.createElement(ve.a,{count:Math.floor(e.total/8),page:a,onChange:this.handlePaginationChange}))}}]),a}(r.Component),Se=a(40);!function(e){e.RECEIVE_PLAYLISTS="playlists/RECEIVE_PLAYLISTS",e.CLEAR="playlist/CLEAR"}(ye||(ye={}));var Ie=function(e,t,a){return function(n){return e.getUserPlaylists(t,a).then((function(e){var t={total:e.body.total,items:Object(Se.a)({},a.offset/8+1,e.body.items)};n(function(e){return{type:ye.RECEIVE_PLAYLISTS,data:e}}(t))}))}},Pe=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,playlists:e.playlists}}),(function(e){return{fetchPlaylists:function(t,a,n){return e(Ie(t,a,n))}}}))(_e)),je=a(359),Re=a(362),we=a(342),Le=a(353),Me=a(340),Ne=a(363),De=a(364),We=a(346),Ve=a(345),Be=a(347),Ue=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=n.props,t=e.fetchTopArtists,a=e.spotifyWebApi;t(a,"short_term"),t(a,"medium_term"),t(a,"long_term")},n.valueLabelFormat=function(e,t){return Math.round(100*e).toString()},n.handleSliderChange=function(e){return function(t,a){var r=n.state;r.query[e]={min:a[0],max:a[1]},n.setState(r)}},n.handlePlaylistNameChange=function(e){n.setState({playlistName:e.target.value})},n.handleArtistSelect=function(e){n.setState({selectedArtistsIds:e.target.value})},n.handleCreatePlaylistClick=function(e){var t=n.state.query,a=t.acousticness,r=t.danceability,l=t.energy,i=t.instrumentalness,o=t.valence;n.props.spotifyWebApi.getRecommendations({min_acousticness:a.min,max_acousticness:a.max,min_danceability:r.min,max_danceability:r.max,min_energy:l.min,max_energy:l.max,min_instrumentalness:i.min,max_instrumentalness:i.max,min_valence:o.min,max_valence:o.max,seed_artists:n.state.selectedArtistsIds,limit:50}).then((function(e){e.body.tracks.length>0?n.props.spotifyWebApi.createPlaylist(n.props.user.id,n.state.playlistName).then((function(t){var a=e.body.tracks.map((function(e){return e.uri}));n.props.spotifyWebApi.addTracksToPlaylist(t.body.id,a).then((function(){n.props.clearPlaylist(),n.props.history.push("/playlists/".concat(t.body.id))}))})):n.props.openSnackBar({open:!0,message:"Oops! Looks like you need to broaden your selection"})}))},n.renderPlaylistNameInput=function(){return r.createElement(r.Fragment,null,r.createElement(C.a,null,"Playlist name"),r.createElement(je.a,{value:n.state.playlistName,onChange:n.handlePlaylistNameChange}))},n.renderAttributeSlider=function(e){return r.createElement(r.Fragment,null,r.createElement(C.a,null,ie(e)),r.createElement(le.a,{theme:ue},r.createElement(Re.a,{valueLabelDisplay:"auto",valueLabelFormat:n.valueLabelFormat,min:0,max:1,step:.01,value:[n.state.query[e].min,n.state.query[e].max],onChange:n.handleSliderChange(e)})))},n.renderArtistSelect=function(e){var t=n.state.selectedArtistsIds;return r.createElement(r.Fragment,null,r.createElement(C.a,null,"Suggested artists"),r.createElement(le.a,{theme:me},r.createElement(we.a,{error:!0},r.createElement(Le.a,{error:t.length>3,multiple:!0,value:t,onChange:n.handleArtistSelect,input:r.createElement(Me.a,{multiline:!0}),renderValue:function(t){return r.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map((function(t){var a,n;return r.createElement(le.a,{theme:pe,key:t},r.createElement(Ne.a,{label:null===(a=e.find((function(e){return e.id===t})))||void 0===a?void 0:a.name,avatar:r.createElement(De.a,{src:null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.images[0].url})}))})))}},e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e){return r.createElement(We.a,{key:e.name,value:e.id},e.name)}))),t.length>3&&r.createElement(Ve.a,null,"Please select 1 - 3 artists"))))},n.render=function(){var e=n.state,t=e.selectedArtistsIds,a=e.playlistName,l=[],i=n.props.topArtists;if(i&&i.longTerm&&i.mediumTerm&&i.shortTerm){var o=i.longTerm,c=i.mediumTerm,s=i.shortTerm;l=(l=l.concat(o.items.concat(c.items.concat(s.items)))).filter((function(e,t){return l.findIndex((function(t){return t.id===e.id}))===t}))}return r.createElement(x.a,{container:!0,spacing:3,alignItems:"center"},r.createElement(x.a,{item:!0,xs:12},r.createElement(C.a,{variant:"h6"},"Create a playlist")),r.createElement(x.a,{item:!0,xs:12},n.renderPlaylistNameInput()),r.createElement(x.a,{item:!0,xs:12},n.renderArtistSelect(l)),["acousticness","danceability","energy","instrumentalness","valence"].map((function(e){return r.createElement(x.a,{item:!0,xs:12,key:"slider-".concat(e)},n.renderAttributeSlider(e))})),r.createElement(x.a,{container:!0,direction:"row",justify:"center"},r.createElement(x.a,{item:!0},r.createElement(le.a,{theme:se},r.createElement(Be.a,{variant:"contained",color:"primary",size:"medium",onClick:n.handleCreatePlaylistClick,disabled:0===t.length||t.length>3||""===a},"Create")))))},n.state={query:{acousticness:{min:0,max:1},danceability:{min:0,max:1},energy:{min:0,max:1},instrumentalness:{min:0,max:1},valence:{min:0,max:1}},selectedArtistsIds:[],playlistName:""},n}return a}(r.Component),Fe=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,tracksAttributes:e.tracksAttributes,topArtists:e.topArtists}}),(function(e){return{fetchTopArtists:function(t,a){return e(F(t,a))},openSnackBar:function(t){return e(G(t))},clearPlaylist:function(){return e({type:ye.CLEAR,data:void 0})}}}))(Ue)),Ge=a(156),He=a(66),Ye=a(350),Ke=a(348),qe=a(357),ze=a(356),Je=a(352),Qe=a(344),Xe=a(283),Ze=a(349),$e=a(152),et=a.n($e),tt=a(118),at=a.n(tt),nt=a(351),rt=a(365),lt=a(15),it=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.user;return e?r.createElement("div",null,r.createElement(Ke.a,null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(De.a,{alt:e.display_name,src:e.images&&e.images[0]&&e.images[0].url,style:{width:"100px",height:"100px"}}),r.createElement("h1",{style:{color:"white",padding:"8px 16px",wordWrap:"break-word"}},e.display_name),r.createElement(Ke.a,null))):null}}]),a}(r.PureComponent),ot=Object(u.f)(Object(c.b)((function(e){return{user:e.user}}))(it)),ct=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onClickHandler=function(t){var a=e.props,n=a.setGlobalSpotifyClient,r=a.history;v.a.remove("spotify-bearer",{path:"/"}),n(v.a.load("spotify-bearer")),r.push("/")},e}return Object(f.a)(a,[{key:"render",value:function(){return r.createElement("div",null,r.createElement(le.a,{theme:se},r.createElement(Be.a,{onClick:this.onClickHandler},r.createElement(C.a,{style:{color:"white"}},"Sign out"))))}}]),a}(r.PureComponent),st=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi}}),(function(e){return{setGlobalSpotifyClient:function(t){return e(N(t))}}}))(ct)),ut=Object(_.a)((function(e){var t;return Object(rt.a)({root:{display:"flex"},drawer:Object(Se.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:(t={backgroundColor:"#1D1E28"},Object(Se.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),Object(Se.a)(t,e.breakpoints.up("sm"),{display:"none"}),t),menuButton:Object(Se.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:Object(He.a)(Object(He.a)({},e.mixins.toolbar),{},Object(Se.a)({},e.breakpoints.up("sm"),{display:"none"})),drawerPaper:{width:240,backgroundColor:"#1D1E28"},content:{flexGrow:1,backgroundColor:"#d3d3d3",padding:e.spacing(3)}})}));function mt(e){var t=ut(),a=Object(lt.a)(),n=l.a.useState(!1),r=Object(Ge.a)(n,2),i=r[0],o=r[1],c=function(){o(!i)},u=l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"inherit"}},l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"white",padding:"8px 16px"}},"Apollo's Playlist"),l.a.createElement(Ke.a,null),l.a.createElement(Qe.a,null,l.a.createElement(s.b,{to:"/playlists",style:{textDecoration:"none"}},l.a.createElement(Xe.a,{button:!0,key:"Playlists"},l.a.createElement(at.a,{style:{color:"white"}}),l.a.createElement(Ze.a,{primary:"Playlists",style:{color:"white"}}))),l.a.createElement(s.b,{to:"/create-playlist",style:{textDecoration:"none"}},l.a.createElement(Xe.a,{button:!0,key:"Create a Playlists"},l.a.createElement(at.a,{style:{color:"white"}}),l.a.createElement(Ze.a,{primary:"Create a Playlists",style:{color:"white"}})))),l.a.createElement(Ke.a,null)),l.a.createElement("div",null,l.a.createElement(ot,null),l.a.createElement(Ke.a,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(st,null)))),m=document.body;return l.a.createElement("div",{className:t.root},l.a.createElement(O.a,null),l.a.createElement(Ye.a,{position:"fixed",className:t.appBar},l.a.createElement(nt.a,null,l.a.createElement(Je.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:c,className:t.menuButton},l.a.createElement(et.a,null)),l.a.createElement(C.a,{variant:"h6",noWrap:!0},"Apollo's Playlist"))),l.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},l.a.createElement(ze.a,{smUp:!0,implementation:"css"},l.a.createElement(qe.a,{container:m,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:i,onClose:c,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},l.a.createElement(l.a.Fragment,null,u))),l.a.createElement(ze.a,{xsDown:!0,implementation:"css"},l.a.createElement(qe.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},u))),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.toolbar}),e.children))}a(204);var pt=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.setGlobalSpotifyClient,n=t.fetchUser,r=t.history,a(v.a.load("spotify-bearer")),void 0===(l=this.props.spotifyWebApi).getAccessToken()){e.next=6;break}return e.next=6,n(l).then((function(e){"/"===r.location.pathname&&r.push("/playlists")}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.closeSnackbar,a=e.snackbar;return void 0!==this.props.spotifyWebApi.getAccessToken()?r.createElement("div",{className:"apollos-playlist-container"},r.createElement(mt,null,r.createElement(g.a,Object.assign({},a,{onClose:t})),r.createElement(u.c,null,r.createElement(u.a,{path:"/playlists/:playlistId",component:he}),r.createElement(u.a,{exact:!0,path:"/playlists",component:Pe}),r.createElement(u.a,{exact:!0,path:"/create-playlist",component:Fe}),r.createElement(u.a,{path:"*",component:Q})))):r.createElement("div",{className:"apollos-playlist-container"},r.createElement(g.a,Object.assign({},a,{onClose:t})),r.createElement(u.c,null,r.createElement(u.a,{exact:!0,path:"/",component:z}),r.createElement(H,null)))}}]),a}(r.PureComponent),dt=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,snackbar:e.snackbar}}),(function(e){return{setGlobalSpotifyClient:function(t){return e(N(t))},fetchUser:function(t){return e(W(t))},openSnackbar:function(t){return e(G(t))},closeSnackbar:function(){return e({type:U.CLOSE,data:void 0})}}}))(pt)),Et=a(45),ft=a(153),yt=a(154),bt=a(101),ht=a.n(bt),vt=a(28),gt=a.n(vt),Ot={open:!1,message:"",autoHideDuration:1e4,anchorOrigin:{vertical:"bottom",horizontal:"right"}},Tt=Object(Et.combineReducers)({spotifyWebApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ht.a({clientId:R,redirectUri:w}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_GLOBAL_SPOTIFY_CLIENT_TOKEN:return e.setAccessToken(t.data),e;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.RECEIVE_USER:return t.data;default:return e}},playlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ye.RECEIVE_PLAYLISTS:return gt()({},e,t.data);case ye.CLEAR:return null;default:return e}},playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.RECEIVE_PLAYLIST:return gt()({},e,t.data);default:return e}},tracksAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.RECEIVE_TRACKS_ATTRIBUTES:return gt()({},e,t.data);default:return e}},topArtists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.RECEIVE_TOP_ARTISTS_LONG_TERM:return gt()({},e,{longTerm:t.data});case V.RECEIVE_TOP_ARTISTS_MEDIUM_TERM:return gt()({},e,{mediumTerm:t.data});case V.RECEIVE_TOP_ARTISTS_SHORT_TERM:return gt()({},e,{shortTerm:t.data});default:return e}},snackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.OPEN:return gt()({},e,t.data);case U.CLOSE:return gt()({},e,Object(He.a)(Object(He.a)({},e),{},{open:!1}));default:return e}}}),kt={spotifyWebApi:new ht.a({clientId:R,redirectUri:w}),user:null,playlist:null,playlists:null,tracksAttributes:null,topArtists:null,snackbar:Ot},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt;return Object(Et.createStore)(Tt,e,Object(yt.composeWithDevTools)(Object(Et.applyMiddleware)(ft.a)))};document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root"),t=At();o.a.render(l.a.createElement(c.a,{store:t},l.a.createElement(s.a,null,l.a.createElement(dt,null))),e)}))}},[[170,1,2]]]);
//# sourceMappingURL=main.838b1f04.chunk.js.map