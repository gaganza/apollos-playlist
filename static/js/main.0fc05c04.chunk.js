(this["webpackJsonpapollos-playlist"]=this["webpackJsonpapollos-playlist"]||[]).push([[0],{153:function(e,t,a){e.exports=a(264)},163:function(e,t,a){},165:function(e,t,a){},185:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(10),o=a.n(i),c=a(23),s=a(22),u=a(17),m=a(19),p=a(21),d=a(20),E=a(338),f=a(308),y=a(142),b=a(306),h=a(92),g=a(304),v=a(56),A=a.n(v),x=a(78),T="https://accounts.spotify.com/authorize?",C=["playlist-read-collaborative","playlist-modify-public","user-top-read","playlist-read-private","playlist-modify-private","user-follow-read","user-read-recently-played","user-library-read"],O="a5c714fac13f4b5c924497c3b9e533a2",k="https://gaganza.github.io/apollos-playlist/",_=(a(163),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=Object(x.a)(A.a.mark((function t(){var a,n,r,l,i,o,c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.props,n=a.history,r=a.spotifyWebApi,l=a.fetchUser,i=n.location,-1===(o=i.pathname).indexOf("access_token")){t.next=8;break}return c="?"+o.substring(1),r.setAccessToken(new URLSearchParams(c).get("access_token")),t.next=8,l(r).then((function(e){n.push("/playlists")}));case 8:case"end":return t.stop()}}),t)}))),e.render=function(){var e=new URLSearchParams({client_id:encodeURI(O),redirect_uri:encodeURI(k),scope:C.join("%20"),response_type:encodeURI("token")});return r.createElement("a",{className:"sign-in-button",href:T+e.toString()},"Login to Spotify")},e}return a}(r.PureComponent));!function(e){e.RECEIVE_USER="user/RECEIVE_USER"}(n||(n={}));var S,R=function(e){return function(t){return e.getMe().then((function(e){var a;t((a=e.body,{type:n.RECEIVE_USER,data:a}))}))}};!function(e){e.RECEIVE_TRACKS_ATTRIBUTES="trackAttributes/RECEIVE_TRACKS_ATTRIBUTES"}(S||(S={}));var w;!function(e){e.RECEIVE_TOP_ARTISTS_LONG_TERM="topArtsits/RECEIVE_TOP_ARTISTS_LONG_TERM",e.RECEIVE_TOP_ARTISTS_MEDIUM_TERM="topArtsits/RECEIVE_TOP_ARTISTS_MEDIUM_TERM",e.RECEIVE_TOP_ARTISTS_SHORT_TERM="topArtsits/RECEIVE_TOP_ARTISTS_SHORT_TERM"}(w||(w={}));var I;!function(e){e.OPEN="snackbar/OPEN",e.CLOSE="snackbar/CLOSE"}(I||(I={}));var P,j=function(e){return{type:I.OPEN,data:e}};!function(e){e.RECEIVE="followedArtists/RECEIVE"}(P||(P={}));var M={fetchUser:R},L=Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi}}),M)(Object(u.f)(_)),D=(a(165),Object(g.a)((function(e){return{root:{height:"100vh",backgroundColor:"#1D1E28"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"#1D1E28",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#1D1E28"},avatar:{margin:e.spacing(1),backgroundColor:"#1D1E28"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})));var N,V=Object(u.f)((function(){var e=D();return l.a.createElement(b.a,{container:!0,component:"main",className:e.root},l.a.createElement(f.a,null),l.a.createElement(b.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),l.a.createElement(b.a,{item:!0,xs:12,sm:8,md:5,component:y.a,elevation:6,square:!0,className:"apollos-playlist__home-page"},l.a.createElement("div",{className:e.paper},l.a.createElement(h.a,{component:"h1",variant:"h5",style:{color:"white "}},"Apollo's Playlist"),l.a.createElement(L,null))))})),W=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).render=function(){return r.createElement("div",null,"Not Found")},e}return a}(r.PureComponent),U=Object(u.f)(W),B=a(310),F=a(311),H=a(312),Y=a(313),z=a(314),q=a(315),G=a(85),K=a.n(G),J=a(136),Q=a.n(J),X=a(309),Z=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},$=a(27),ee=a.n($),te=ee()({overrides:{MuiButton:{containedPrimary:{textTransform:"none",backgroundColor:"#1D1E28","&:hover":{backgroundColor:"grey"}}}}}),ae=ee()({overrides:{MuiSlider:{thumbColorPrimary:{backgroundColor:"#1D1E28"},track:{backgroundColor:"#1D1E28"},rail:{backgroundColor:"gray"},valueLabel:{color:"#1D1E28"}}}}),ne=ee()({palette:{primary:{main:"#1D1E28",dark:"#1D1E28"}},overrides:{MuiInput:{root:{width:"100%"}},MuiFormControl:{root:{width:"100%"}}}}),re=ee()({overrides:{MuiChip:{root:{margin:"8px"}}}}),le=ee()({overrides:{MuiTableCell:{root:{paddingLeft:"0px",paddingRight:"8px",paddingTop:"4px",paddingBottom:"4px"}}}}),ie=ee()({overrides:{MuiLinearProgress:{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:"grey"},barColorPrimary:{backgroundColor:"#1D1E28"},bar:{borderRadius:5}}}}),oe=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e;window.scrollTo({top:0,behavior:"smooth"});var t=n.props,a=t.location,r=t.spotifyWebApi,l=t.fetchPlaylist,i=t.fetchTracksAttributes,o=a.pathname.substring(a.pathname.lastIndexOf("/")+1);o!==(null===(e=n.props.playlist)||void 0===e?void 0:e.id)&&l(r,o).then((function(){var e=n.props.playlist;e&&i(r,function(e){return e.tracks.items.map((function(e){return e.track.id}))}(e))})),n.setState({loading:!1})},n.renderPlaylistArtwork=function(e){return e&&e.images&&0!==e.images.length?r.createElement("img",{src:e.images[0].url,style:{maxWidth:"300px",maxHeight:"300px "},alt:"".concat(e.name," playlist artwork")}):null},n.renderPlaylistName=function(e){return e?r.createElement(h.a,null,e.name):null},n.renderPlaylistOwner=function(e){return e?r.createElement("div",{style:{display:"flex",alignItems:"row"}},r.createElement(Q.a,null),r.createElement(h.a,null,e.owner.display_name)):null},n.renderAttributeBar=function(e,t){return r.createElement("div",null,r.createElement(h.a,null,Z(t)),r.createElement(X.a,{theme:ie},r.createElement(B.a,{variant:"determinate",value:e[t]})))},n.renderPlaylistAnalysis=function(e){if(!e)return null;var t=function(e){var t={acousticness:0,danceability:0,energy:0,instrumentalness:0,valence:0},a=e.audio_features.length;return e.audio_features.forEach((function(e){e&&(t.acousticness+=e.acousticness,t.danceability+=e.danceability,t.energy+=e.energy,t.instrumentalness+=e.instrumentalness,t.valence+=e.valence)})),t.acousticness=t.acousticness/a*100,t.danceability=t.danceability/a*100,t.energy=t.energy/a*100,t.instrumentalness=t.instrumentalness/a*100,t.valence=t.valence/a*100,t}(e);return r.createElement(b.a,{container:!0,spacing:1,direction:"column"},r.createElement(b.a,{item:!0},n.renderAttributeBar(t,"acousticness")),r.createElement(b.a,{item:!0},n.renderAttributeBar(t,"danceability")),r.createElement(b.a,{item:!0},n.renderAttributeBar(t,"energy")),r.createElement(b.a,{item:!0},n.renderAttributeBar(t,"instrumentalness")),r.createElement(b.a,{item:!0},n.renderAttributeBar(t,"valence")))},n.renderAlbumArtwork=function(e){var t=e.album;return t.images.length>0?r.createElement("a",{href:e.uri},r.createElement("img",{style:{maxHeight:"50px",maxWidth:"50px"},src:t.images[0].url,alt:"Album artwork for the song"})):r.createElement("a",{href:e.uri},r.createElement(K.a,null))},n.renderTracks=function(e){return e?r.createElement(X.a,{theme:le},r.createElement(F.a,null,r.createElement(H.a,null,r.createElement(Y.a,null,e.tracks.items.map((function(e){var t=e.track;return r.createElement(z.a,{hover:!0,key:"table-row-".concat(t.id)},r.createElement(q.a,{style:{width:"50px"}},n.renderAlbumArtwork(t)),r.createElement(q.a,{style:{display:"flex",flexDirection:"column"}},r.createElement(h.a,null,t.name),r.createElement(h.a,null,t.artists[0].name," - ",t.album.name)),r.createElement(q.a,null,function(e){var t,a,n,r,l,i,o="";return t=(a=(n=e/1e3)/60)/60,i=Math.floor(n)%60,l=Math.floor(a)%60,0!==(r=Math.floor(t)%60)&&(o+=r+":",1===l.toString().length&&(l="0"+l)),o+=l+":",1===i.toString().length&&(i="0"+i),o+=i}(t.duration_ms)))})))))):null},n.render=function(){var e=n.props,t=e.location,a=e.playlist,l=e.tracksAttributes,i=n.state.loading,o=t.pathname.substring(t.pathname.lastIndexOf("/")+1);return a&&a.id===o&&l?r.createElement(b.a,{container:!0,spacing:3},i&&r.createElement(b.a,{item:!0,xs:12},r.createElement(X.a,{theme:ie},r.createElement(B.a,null))),r.createElement(b.a,{item:!0,xs:12,md:6,lg:4,xl:3},n.renderPlaylistArtwork(a)),r.createElement(b.a,{item:!0,xs:12,md:6,lg:8,xl:9},n.renderPlaylistName(a),r.createElement("br",null),n.renderPlaylistOwner(a),r.createElement("br",null),n.renderPlaylistAnalysis(l)),r.createElement(b.a,{item:!0,xs:12},n.renderTracks(a))):null},n.state={loading:!0},n}return a}(r.Component);!function(e){e.RECEIVE_PLAYLIST="playlist/RECEIVE_PLAYLIST"}(N||(N={}));var ce,se={fetchPlaylist:function(e,t){return function(a){return e.getPlaylist(t).then((function(e){var t;a((t=e.body,{type:N.RECEIVE_PLAYLIST,data:t}))}))}},fetchTracksAttributes:function(e,t){return function(a){return e.getAudioFeaturesForTracks(t).then((function(e){var t;a((t=e.body,{type:S.RECEIVE_TRACKS_ATTRIBUTES,data:t}))}))}}},ue=Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,playlist:e.playlist,tracksAttributes:e.tracksAttributes}}),se)(Object(u.f)(oe)),me=a(334),pe=a(139),de=a(316),Ee=a(317),fe=a(318),ye=a(319),be=Object(pe.a)({overrides:{MuiCard:{root:{boxShadow:"none","&:hover":{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}}}}}),he=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).render=function(){var t=e.props,a=t.name,n=t.images,l=t.id;return r.createElement(s.b,{to:"/playlists/".concat(l),style:{textDecoration:"none"}},r.createElement(X.a,{theme:be},r.createElement(de.a,null,r.createElement(Ee.a,null,n[0]&&r.createElement(fe.a,{style:{padding:"16px"},component:"img",alt:"".concat(a," playlist artwork"),image:n[0].url,title:a}),r.createElement(ye.a,null,r.createElement(h.a,null,a))))))},e}return a}(r.PureComponent),ge=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(x.a)(A.a.mark((function e(){var t,a,r,l,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,a=t.location,r=t.spotifyWebApi,l=t.fetchPlaylists,i=t.user,o=t.playlists,""!==a.search){e.next=5;break}if(null!==o){e.next=5;break}return e.next=5,l(r,i.id,{limit:8,offset:0});case 5:n.setState({loading:!1});case 6:case"end":return e.stop()}}),e)}))),n.handlePaginationChange=function(e,t){var a=n.props,r=a.fetchPlaylists,l=a.spotifyWebApi,i=a.user;void 0===a.playlists.items[t]&&r(l,i.id,{limit:8,offset:8*(t-1)}),window.scrollTo({top:0,behavior:"smooth"}),n.setState({page:t})},n.render=function(){var e=n.props.playlists,t=n.state,a=t.page,l=t.loading;return r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(b.a,{container:!0,spacing:3},l&&r.createElement(b.a,{item:!0,xs:12},r.createElement(X.a,{theme:ie},r.createElement(B.a,null))),e&&e.items[a]&&e.items[a].map((function(e){return r.createElement(b.a,{item:!0,xs:12,md:6,lg:4,xl:3,key:"playlist-card-".concat(e.id)},r.createElement(he,e))}))),e&&e.items&&r.createElement(me.a,{count:Math.floor(e.total/8),page:a,onChange:n.handlePaginationChange,style:{paddingTop:"16px"}}))},n.state={page:1,loading:!0},n}return a}(r.Component),ve=a(36);!function(e){e.RECEIVE_PLAYLISTS="playlists/RECEIVE_PLAYLISTS",e.CLEAR="playlist/CLEAR"}(ce||(ce={}));var Ae={fetchPlaylists:function(e,t,a){return function(n){return e.getUserPlaylists(t,a).then((function(e){var t={total:e.body.total,items:Object(ve.a)({},a.offset/8+1,e.body.items)};n(function(e){return{type:ce.RECEIVE_PLAYLISTS,data:e}}(t))}))}}},xe=Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,playlists:e.playlists}}),Ae)(Object(u.f)(ge)),Te=a(339),Ce=a(341),Oe=a(342),ke=a(340),_e=a(322),Se=a(333),Re=a(320),we=a(326),Ie=a(325),Pe=a(327),je=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=n.props,t=e.fetchTopArtists,a=e.spotifyWebApi,r=e.topArtists,l=e.fetchFollowedArtists;e.followedArtists||l(a),r||(t(a,"short_term"),t(a,"medium_term"),t(a,"long_term"))},n.valueLabelFormat=function(e,t){return Math.round(100*e).toString()},n.handleSliderChange=function(e){return function(t,a){var r=n.state;r.query[e]={min:a[0],max:a[1]},n.setState(r)}},n.handlePlaylistNameChange=function(e){n.setState({playlistName:e.target.value})},n.handleArtistSelect=function(e){n.setState({selectedArtistsIds:e.target.value})},n.handleCreatePlaylistClick=function(e){var t=n.state.query,a=t.acousticness,r=t.danceability,l=t.energy,i=t.instrumentalness,o=t.valence;n.props.spotifyWebApi.getRecommendations({min_acousticness:a.min,max_acousticness:a.max,min_danceability:r.min,max_danceability:r.max,min_energy:l.min,max_energy:l.max,min_instrumentalness:i.min,max_instrumentalness:i.max,min_valence:o.min,max_valence:o.max,seed_artists:n.state.selectedArtistsIds,limit:50}).then((function(e){e.body.tracks.length>0?n.props.spotifyWebApi.createPlaylist(n.props.user.id,n.state.playlistName).then((function(t){var a=e.body.tracks.map((function(e){return e.uri}));n.props.spotifyWebApi.addTracksToPlaylist(t.body.id,a).then((function(){n.props.clearPlaylist(),n.props.history.push("/playlists/".concat(t.body.id))}))})):n.props.openSnackbar({open:!0,message:"Oops! Looks like you need to broaden your selection"})}))},n.alphabetizeArtists=function(e){return e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))},n.renderPlaylistNameInput=function(){return r.createElement(r.Fragment,null,r.createElement(h.a,null,"Playlist name"),r.createElement(Te.a,{value:n.state.playlistName,onChange:n.handlePlaylistNameChange}))},n.renderAttributeSlider=function(e){return r.createElement(r.Fragment,null,r.createElement(h.a,null,Z(e)),r.createElement(X.a,{theme:ae},r.createElement(Ce.a,{valueLabelDisplay:"auto",valueLabelFormat:n.valueLabelFormat,min:0,max:1,step:.01,value:[n.state.query[e].min,n.state.query[e].max],onChange:n.handleSliderChange(e)})))},n.renderChip=function(e,t){var a=e.find((function(e){return e.id===t}));return(null===a||void 0===a?void 0:a.images)&&a.images.length>0?r.createElement(X.a,{theme:re,key:t},r.createElement(Oe.a,{label:a.name,avatar:r.createElement(ke.a,{src:a.images[0].url})})):r.createElement(X.a,{theme:re,key:t},r.createElement(Oe.a,{label:null===a||void 0===a?void 0:a.name,avatar:r.createElement(K.a,null)}))},n.renderArtistSelect=function(e){var t=n.state.selectedArtistsIds;return r.createElement(r.Fragment,null,r.createElement(h.a,null,"Seed artists"),r.createElement(X.a,{theme:ne},r.createElement(_e.a,{error:!0},r.createElement(Se.a,{error:t.length>3,multiple:!0,value:t,onChange:n.handleArtistSelect,input:r.createElement(Re.a,{multiline:!0}),renderValue:function(t){return r.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map((function(t){return n.renderChip(e,t)})))}},n.alphabetizeArtists(e).map((function(e){return r.createElement(we.a,{key:e.name,value:e.id},e.name)}))),t.length>3&&r.createElement(Ie.a,null,"Please select 1 - 3 artists"))))},n.render=function(){var e=n.props.followedArtists,t=n.state,a=t.selectedArtistsIds,l=t.playlistName,i=[];e&&(null===e||void 0===e?void 0:e.artists)&&(i=e.artists.items);var o=n.props.topArtists;if(o&&o.longTerm&&o.mediumTerm&&o.shortTerm&&e){var c=o.longTerm,s=o.mediumTerm,u=o.shortTerm;i=(i=i.concat(e.artists.items,i.concat(c.items.concat(s.items.concat(u.items))))).filter((function(e,t){return i.findIndex((function(t){return t.id===e.id}))===t}))}return r.createElement(b.a,{container:!0,spacing:3,alignItems:"center"},r.createElement(b.a,{item:!0,xs:12},r.createElement(h.a,{variant:"h6"},"Create a playlist")),r.createElement(b.a,{item:!0,xs:12},n.renderPlaylistNameInput()),r.createElement(b.a,{item:!0,xs:12},n.renderArtistSelect(i)),["acousticness","danceability","energy","instrumentalness","valence"].map((function(e){return r.createElement(b.a,{item:!0,xs:12,key:"slider-".concat(e)},n.renderAttributeSlider(e))})),r.createElement(b.a,{container:!0,direction:"row",justify:"center"},r.createElement(b.a,{item:!0},r.createElement(X.a,{theme:te},r.createElement(Pe.a,{variant:"contained",color:"primary",size:"medium",onClick:n.handleCreatePlaylistClick,disabled:0===a.length||a.length>3||""===l},r.createElement(h.a,{style:{textTransform:"none"}},"Create"))))))},n.state={query:{acousticness:{min:0,max:1},danceability:{min:0,max:1},energy:{min:0,max:1},instrumentalness:{min:0,max:1},valence:{min:0,max:1}},selectedArtistsIds:[],playlistName:""},n}return a}(r.Component),Me={fetchTopArtists:function(e,t){return function(a){return e.getMyTopArtists({time_range:t,limit:50}).then((function(e){var n;a("long_term"===t?(n=e.body,{type:w.RECEIVE_TOP_ARTISTS_LONG_TERM,data:n}):"medium_term"===t?function(e){return{type:w.RECEIVE_TOP_ARTISTS_MEDIUM_TERM,data:e}}(e.body):function(e){return{type:w.RECEIVE_TOP_ARTISTS_SHORT_TERM,data:e}}(e.body))}))}},fetchFollowedArtists:function(e){return function(t){return e.getFollowedArtists({limit:50}).then((function(e){var a;t((a=e.body,{type:P.RECEIVE,data:a}))}))}},openSnackbar:j,clearPlaylist:function(){return{type:ce.CLEAR,data:void 0}}},Le=Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,tracksAttributes:e.tracksAttributes,topArtists:e.topArtists,followedArtists:e.followedArtists}}),Me)(Object(u.f)(je)),De=a(140),Ne=a(60),Ve=a(330),We=a(328),Ue=a(337),Be=a(336),Fe=a(332),He=a(324),Ye=a(265),ze=a(329),qe=a(137),Ge=a.n(qe),Ke=a(105),Je=a.n(Ke),Qe=a(331),Xe=a(344),Ze=a(14),$e=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).render=function(){var t=e.props.user;return t?r.createElement("div",null,r.createElement(We.a,null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(ke.a,{alt:t.display_name,src:t.images&&t.images[0]&&t.images[0].url,style:{width:"100px",height:"100px"}}),r.createElement("h1",{style:{color:"white",padding:"8px 16px",wordWrap:"break-word"}},t.display_name),r.createElement(We.a,null))):null},e}return a}(r.PureComponent),et=Object(u.f)(Object(c.b)((function(e){return{user:e.user}}))($e)),tt=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).onClickHandler=function(t){var a=e.props,n=a.spotifyWebApi,r=a.history;n.resetAccessToken(),r.push("/")},e.render=function(){return r.createElement("div",null,r.createElement(X.a,{theme:te},r.createElement(Pe.a,{onClick:e.onClickHandler},r.createElement(h.a,{style:{color:"white",textTransform:"none"}},"Sign out"))))},e}return a}(r.PureComponent),at=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi}}))(tt)),nt=Object(g.a)((function(e){var t;return Object(Xe.a)({root:{display:"flex"},drawer:Object(ve.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:(t={backgroundColor:"#1D1E28"},Object(ve.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),Object(ve.a)(t,e.breakpoints.up("sm"),{display:"none"}),t),menuButton:Object(ve.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:Object(Ne.a)(Object(Ne.a)({},e.mixins.toolbar),{},Object(ve.a)({},e.breakpoints.up("sm"),{display:"none"})),drawerPaper:{width:240,backgroundColor:"#1D1E28"},content:{flexGrow:1,backgroundColor:"#d3d3d3",padding:e.spacing(3)}})}));function rt(e){var t=nt(),a=Object(Ze.a)(),n=l.a.useState(!1),r=Object(De.a)(n,2),i=r[0],o=r[1],c=function(){o(!i)},u=l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"inherit"}},l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"white",padding:"8px 16px"}},"Apollo's Playlist"),l.a.createElement(We.a,null),l.a.createElement(He.a,null,l.a.createElement(s.b,{to:"/playlists",style:{textDecoration:"none"}},l.a.createElement(Ye.a,{button:!0,key:"Your Playlists"},l.a.createElement(Je.a,{style:{color:"white"}}),l.a.createElement(ze.a,{primary:"Your Playlists",style:{color:"white"}}))),l.a.createElement(s.b,{to:"/create-playlist",style:{textDecoration:"none"}},l.a.createElement(Ye.a,{button:!0,key:"Create a Playlist"},l.a.createElement(Je.a,{style:{color:"white"}}),l.a.createElement(ze.a,{primary:"Create a Playlist",style:{color:"white"}})))),l.a.createElement(We.a,null)),l.a.createElement("div",null,l.a.createElement(et,null),l.a.createElement(We.a,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(at,null)))),m=document.body;return l.a.createElement("div",{className:t.root},l.a.createElement(f.a,null),l.a.createElement(Ve.a,{position:"fixed",className:t.appBar},l.a.createElement(Qe.a,null,l.a.createElement(Fe.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:c,className:t.menuButton},l.a.createElement(Ge.a,null)),l.a.createElement(h.a,{variant:"h6",noWrap:!0},"Apollo's Playlist"))),l.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},l.a.createElement(Be.a,{smUp:!0,implementation:"css"},l.a.createElement(Ue.a,{container:m,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:i,onClose:c,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},l.a.createElement(l.a.Fragment,null,u))),l.a.createElement(Be.a,{xsDown:!0,implementation:"css"},l.a.createElement(Ue.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},u))),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.toolbar}),e.children))}a(185);var lt=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=function(){var t=e.props,a=t.history,n=t.spotifyWebApi,r=t.openSnackbar,l="?"+a.location.pathname.substring(1),i=new URLSearchParams(l);if(i.get("expires_in")){var o=new Date;o.setSeconds(o.getSeconds()+Number(i.get("expires_in"))),setInterval((function(){new Date>=o&&(clearInterval(),n.resetAccessToken(),r({open:!0,message:"Oops! Looks like your session has expired",autoHideDuration:null,anchorOrigin:{horizontal:"center",vertical:"top"}}))}),1e3)}},e.render=function(){var t=e.props,a=t.closeSnackbar,n=t.snackbar;return!!t.spotifyWebApi.getAccessToken()?r.createElement("div",{className:"apollos-playlist-container"},r.createElement(rt,null,r.createElement(E.a,Object.assign({},n,{onClose:a})),r.createElement(u.c,null,r.createElement(u.a,{exact:!0,path:["/","/playlists"],component:xe}),r.createElement(u.a,{path:"/playlists/:playlistId",component:ue}),r.createElement(u.a,{exact:!0,path:"/create-playlist",component:Le}),r.createElement(u.a,{path:"*",component:U})))):r.createElement("div",{className:"apollos-playlist-container"},r.createElement(E.a,Object.assign({},n,{onClose:a})),r.createElement(V,null))},e}return a}(r.PureComponent),it=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,snackbar:e.snackbar}}),(function(e){return{fetchUser:function(t){return e(R(t))},openSnackbar:function(t){return e(j(t))},closeSnackbar:function(){return e({type:I.CLOSE,data:void 0})}}}))(lt)),ot=a(40),ct=a(138),st=(a(186),a(91)),ut=a.n(st),mt=a(24),pt=a.n(mt),dt={open:!1,message:"",autoHideDuration:1e4,anchorOrigin:{vertical:"bottom",horizontal:"right"}},Et=Object(ot.combineReducers)({spotifyWebApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ut.a({clientId:O,redirectUri:k});return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.RECEIVE_USER:return t.data;default:return e}},playlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce.RECEIVE_PLAYLISTS:return pt()({},e,t.data);case ce.CLEAR:return null;default:return e}},playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.RECEIVE_PLAYLIST:return pt()({},e,t.data);default:return e}},tracksAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.RECEIVE_TRACKS_ATTRIBUTES:return pt()({},e,t.data);default:return e}},topArtists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.RECEIVE_TOP_ARTISTS_LONG_TERM:return pt()({},e,{longTerm:t.data});case w.RECEIVE_TOP_ARTISTS_MEDIUM_TERM:return pt()({},e,{mediumTerm:t.data});case w.RECEIVE_TOP_ARTISTS_SHORT_TERM:return pt()({},e,{shortTerm:t.data});default:return e}},snackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.OPEN:return pt()({},e,t.data);case I.CLOSE:return pt()({},e,Object(Ne.a)(Object(Ne.a)({},e),{},{open:!1}));default:return e}},followedArtists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.RECEIVE:return pt()({},e,t.data);default:return e}}}),ft={spotifyWebApi:new ut.a({clientId:O,redirectUri:k}),user:null,playlist:null,playlists:null,tracksAttributes:null,topArtists:null,snackbar:dt,followedArtists:null},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft;return Object(ot.createStore)(Et,e,Object(ot.applyMiddleware)(ct.a))};document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root"),t=yt();o.a.render(l.a.createElement(c.a,{store:t},l.a.createElement(s.a,null,l.a.createElement(it,null))),e)}))}},[[153,1,2]]]);
//# sourceMappingURL=main.0fc05c04.chunk.js.map