(this["webpackJsonpapollos-playlist"]=this["webpackJsonpapollos-playlist"]||[]).push([[0],{152:function(e,t,n){e.exports=n(263)},162:function(e,t,n){},164:function(e,t,n){},184:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),i=n(10),o=n.n(i),c=n(23),s=n(22),u=n(17),m=n(19),p=n(21),d=n(20),E=n(338),f=n(307),y=n(141),b=n(305),h=n(90),g=n(303),v=n(56),A=n.n(v),x=n(77),T="https://accounts.spotify.com/authorize?",O=["playlist-read-collaborative","playlist-modify-public","user-top-read","playlist-read-private","playlist-modify-private","user-follow-read","user-read-recently-played","user-library-read"],k="a5c714fac13f4b5c924497c3b9e533a2",C="https://gaganza.github.io/apollos-playlist/",_=(n(162),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=Object(x.a)(A.a.mark((function t(){var n,a,r,l,i,o,c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props,a=n.history,r=n.spotifyWebApi,l=n.fetchUser,i=a.location,-1===(o=i.pathname).indexOf("access_token")){t.next=8;break}return c="?"+o.substring(1),r.setAccessToken(new URLSearchParams(c).get("access_token")),t.next=8,l(r).then((function(e){a.push("/playlists")}));case 8:case"end":return t.stop()}}),t)}))),e.render=function(){var e=new URLSearchParams({client_id:encodeURI(k),redirect_uri:encodeURI(C),scope:O.join("%20"),response_type:encodeURI("token")});return r.createElement("a",{className:"sign-in-button",href:T+e.toString()},"Login to Spotify")},e}return n}(r.PureComponent));!function(e){e.RECEIVE_USER="user/RECEIVE_USER"}(a||(a={}));var S,R=function(e){return function(t){return e.getMe().then((function(e){var n;t((n=e.body,{type:a.RECEIVE_USER,data:n}))}))}};!function(e){e.RECEIVE_TRACKS_ATTRIBUTES="trackAttributes/RECEIVE_TRACKS_ATTRIBUTES"}(S||(S={}));var I,P=function(e,t){return function(n){return e.getAudioFeaturesForTracks(t).then((function(e){var t;n((t=e.body,{type:S.RECEIVE_TRACKS_ATTRIBUTES,data:t}))}))}};!function(e){e.RECEIVE_TOP_ARTISTS_LONG_TERM="topArtsits/RECEIVE_TOP_ARTISTS_LONG_TERM",e.RECEIVE_TOP_ARTISTS_MEDIUM_TERM="topArtsits/RECEIVE_TOP_ARTISTS_MEDIUM_TERM",e.RECEIVE_TOP_ARTISTS_SHORT_TERM="topArtsits/RECEIVE_TOP_ARTISTS_SHORT_TERM"}(I||(I={}));var w,j=function(e,t){return function(n){return e.getMyTopArtists({time_range:t}).then((function(e){var a;n("long_term"===t?(a=e.body,{type:I.RECEIVE_TOP_ARTISTS_LONG_TERM,data:a}):"medium_term"===t?function(e){return{type:I.RECEIVE_TOP_ARTISTS_MEDIUM_TERM,data:e}}(e.body):function(e){return{type:I.RECEIVE_TOP_ARTISTS_SHORT_TERM,data:e}}(e.body))}))}};!function(e){e.OPEN="snackbar/OPEN",e.CLOSE="snackbar/CLOSE"}(w||(w={}));var M=function(e){return{type:w.OPEN,data:e}},L=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi}}),(function(e){return{fetchUser:function(t){return e(R(t))}}}))(_)),D=(n(164),Object(g.a)((function(e){return{root:{height:"100vh",backgroundColor:"#1D1E28"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"#1D1E28",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#1D1E28"},avatar:{margin:e.spacing(1),backgroundColor:"#1D1E28"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})));var N,W=Object(u.f)((function(){var e=D();return l.a.createElement(b.a,{container:!0,component:"main",className:e.root},l.a.createElement(f.a,null),l.a.createElement(b.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),l.a.createElement(b.a,{item:!0,xs:12,sm:8,md:5,component:y.a,elevation:6,square:!0,className:"apollos-playlist__home-page"},l.a.createElement("div",{className:e.paper},l.a.createElement(h.a,{component:"h1",variant:"h5",style:{color:"white "}},"Apollo's Playlist"),l.a.createElement(L,null))))})),V=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).render=function(){return r.createElement("div",null,"Not Found")},e}return n}(r.PureComponent),U=Object(u.f)(V),B=n(309),F=n(310),H=n(311),z=n(312),Y=n(313),q=n(314),G=n(135),K=n.n(G),J=n(308),Q=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},X=n(27),Z=n.n(X),$=Z()({overrides:{MuiButton:{containedPrimary:{textTransform:"none",backgroundColor:"#1D1E28","&:hover":{backgroundColor:"grey"}}}}}),ee=Z()({overrides:{MuiSlider:{thumbColorPrimary:{backgroundColor:"#1D1E28"},track:{backgroundColor:"#1D1E28"},rail:{backgroundColor:"gray"},valueLabel:{color:"#1D1E28"}}}}),te=Z()({palette:{primary:{main:"#1D1E28",dark:"#1D1E28"}},overrides:{MuiInput:{root:{width:"100%"}},MuiFormControl:{root:{width:"100%"}}}}),ne=Z()({overrides:{MuiChip:{root:{margin:"8px"}}}}),ae=Z()({overrides:{MuiTableCell:{root:{paddingLeft:"0px",paddingRight:"8px",paddingTop:"4px",paddingBottom:"4px"}}}}),re=Z()({overrides:{MuiLinearProgress:{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:"grey"},barColorPrimary:{backgroundColor:"#1D1E28"},bar:{borderRadius:5}}}}),le=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){var e;window.scrollTo({top:0,behavior:"smooth"});var t=a.props,n=t.location,r=t.spotifyWebApi,l=t.fetchPlaylist,i=t.fetchTracksAttributes,o=n.pathname.substring(n.pathname.lastIndexOf("/")+1);o!==(null===(e=a.props.playlist)||void 0===e?void 0:e.id)&&l(r,o).then((function(){var e=a.props.playlist;e&&i(r,function(e){return e.tracks.items.map((function(e){return e.track.id}))}(e))})),a.setState({loading:!1})},a.renderPlaylistArtwork=function(e){return e&&e.images&&0!==e.images.length?r.createElement("img",{src:e.images[0].url,style:{maxWidth:"300px",maxHeight:"300px "},alt:"".concat(e.name," playlist artwork")}):null},a.renderPlaylistName=function(e){return e?r.createElement(h.a,null,e.name):null},a.renderPlaylistOwner=function(e){return e?r.createElement("div",{style:{display:"flex",alignItems:"row"}},r.createElement(K.a,null),r.createElement(h.a,null,e.owner.display_name)):null},a.renderAttributeBar=function(e,t){return r.createElement("div",null,r.createElement(h.a,null,Q(t)),r.createElement(J.a,{theme:re},r.createElement(B.a,{variant:"determinate",value:e[t]})))},a.renderPlaylistAnalysis=function(e){if(!e)return null;var t=function(e){var t={acousticness:0,danceability:0,energy:0,instrumentalness:0,valence:0},n=e.audio_features.length;return e.audio_features.forEach((function(e){t.acousticness+=e.acousticness,t.danceability+=e.danceability,t.energy+=e.energy,t.instrumentalness+=e.instrumentalness,t.valence+=e.valence})),t.acousticness=t.acousticness/n*100,t.danceability=t.danceability/n*100,t.energy=t.energy/n*100,t.instrumentalness=t.instrumentalness/n*100,t.valence=t.valence/n*100,t}(e);return r.createElement(b.a,{container:!0,spacing:1,direction:"column"},r.createElement(b.a,{item:!0},a.renderAttributeBar(t,"acousticness")),r.createElement(b.a,{item:!0},a.renderAttributeBar(t,"danceability")),r.createElement(b.a,{item:!0},a.renderAttributeBar(t,"energy")),r.createElement(b.a,{item:!0},a.renderAttributeBar(t,"instrumentalness")),r.createElement(b.a,{item:!0},a.renderAttributeBar(t,"valence")))},a.renderTracks=function(e){return e?r.createElement(J.a,{theme:ae},r.createElement(F.a,null,r.createElement(H.a,null,r.createElement(z.a,null,e.tracks.items.map((function(e){return r.createElement(Y.a,{hover:!0,key:"table-row-".concat(e.track.id)},r.createElement(q.a,{style:{width:"50px"}},r.createElement("img",{style:{maxHeight:"50px",maxWidth:"50px"},src:e.track.album.images[0].url,alt:"Album artwork for the song"})),r.createElement(q.a,{style:{display:"felx",flexDirection:"column"}},r.createElement("div",null,e.track.name),r.createElement("div",null,e.track.artists[0].name," - ",e.track.album.name)),r.createElement(q.a,null,function(e){var t,n,a,r,l,i,o="";return t=(n=(a=e/1e3)/60)/60,i=Math.floor(a)%60,l=Math.floor(n)%60,0!==(r=Math.floor(t)%60)&&(o+=r+":",1===l.toString().length&&(l="0"+l)),o+=l+":",1===i.toString().length&&(i="0"+i),o+=i}(e.track.duration_ms)))})))))):null},a.render=function(){var e=a.props,t=e.location,n=e.playlist,l=e.tracksAttributes,i=a.state.loading,o=t.pathname.substring(t.pathname.lastIndexOf("/")+1);return n&&n.id===o&&l?r.createElement(b.a,{container:!0,spacing:3},i&&r.createElement(b.a,{item:!0,xs:12},r.createElement(J.a,{theme:re},r.createElement(B.a,null))),r.createElement(b.a,{item:!0,xs:12,md:6},a.renderPlaylistArtwork(n)),r.createElement(b.a,{item:!0,xs:12,md:6},a.renderPlaylistName(n),r.createElement("br",null),a.renderPlaylistOwner(n),r.createElement("br",null),a.renderPlaylistAnalysis(l)),r.createElement(b.a,{item:!0,xs:12},a.renderTracks(n))):null},a.state={loading:!0},a}return n}(r.Component);!function(e){e.RECEIVE_PLAYLIST="playlist/RECEIVE_PLAYLIST"}(N||(N={}));var ie,oe=function(e,t){return function(n){return e.getPlaylist(t).then((function(e){var t;n((t=e.body,{type:N.RECEIVE_PLAYLIST,data:t}))}))}},ce=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,playlist:e.playlist,tracksAttributes:e.tracksAttributes}}),(function(e){return{fetchPlaylist:function(t,n){return e(oe(t,n))},fetchTracksAttributes:function(t,n){return e(P(t,n))}}}))(le)),se=n(333),ue=n(138),me=n(315),pe=n(316),de=n(317),Ee=n(318),fe=Object(ue.a)({overrides:{MuiCard:{root:{boxShadow:"none","&:hover":{boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}}}}}),ye=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).render=function(){var t=e.props,n=t.name,a=t.images,l=t.id;return r.createElement(s.b,{to:"/playlists/".concat(l),style:{textDecoration:"none"}},r.createElement(J.a,{theme:fe},r.createElement(me.a,null,r.createElement(pe.a,null,a[0]&&r.createElement(de.a,{style:{padding:"16px"},component:"img",alt:"".concat(n," playlist artwork"),image:a[0].url,title:n}),r.createElement(Ee.a,null,r.createElement(h.a,null,n))))))},e}return n}(r.PureComponent),be=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(x.a)(A.a.mark((function e(){var t,n,r,l,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.location,r=t.spotifyWebApi,l=t.fetchPlaylists,i=t.user,o=t.playlists,""!==n.search){e.next=5;break}if(null!==o){e.next=5;break}return e.next=5,l(r,i.id,{limit:8,offset:0});case 5:a.setState({loading:!1});case 6:case"end":return e.stop()}}),e)}))),a.handlePaginationChange=function(e,t){var n=a.props,r=n.fetchPlaylists,l=n.spotifyWebApi,i=n.user;void 0===n.playlists.items[t]&&r(l,i.id,{limit:8,offset:8*(t-1)}),window.scrollTo({top:0,behavior:"smooth"}),a.setState({page:t})},a.render=function(){var e=a.props.playlists,t=a.state,n=t.page,l=t.loading;return r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(b.a,{container:!0,spacing:3},l&&r.createElement(b.a,{item:!0,xs:12},r.createElement(J.a,{theme:re},r.createElement(B.a,null))),e&&e.items[n]&&e.items[n].map((function(e){return r.createElement(b.a,{item:!0,xs:12,md:6,lg:4,xl:3,key:"playlist-card-".concat(e.id)},r.createElement(ye,e))}))),e&&e.items&&r.createElement(se.a,{count:Math.floor(e.total/8),page:n,onChange:a.handlePaginationChange,style:{paddingTop:"16px"}}))},a.state={page:1,loading:!0},a}return n}(r.Component),he=n(36);!function(e){e.RECEIVE_PLAYLISTS="playlists/RECEIVE_PLAYLISTS",e.CLEAR="playlist/CLEAR"}(ie||(ie={}));var ge=function(e,t,n){return function(a){return e.getUserPlaylists(t,n).then((function(e){var t={total:e.body.total,items:Object(he.a)({},n.offset/8+1,e.body.items)};a(function(e){return{type:ie.RECEIVE_PLAYLISTS,data:e}}(t))}))}},ve=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,playlists:e.playlists}}),(function(e){return{fetchPlaylists:function(t,n,a){return e(ge(t,n,a))}}}))(be)),Ae=n(337),xe=n(343),Te=n(342),Oe=n(340),ke=n(321),Ce=n(332),_e=n(319),Se=n(325),Re=n(324),Ie=n(326),Pe=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){var e=a.props,t=e.fetchTopArtists,n=e.spotifyWebApi;t(n,"short_term"),t(n,"medium_term"),t(n,"long_term")},a.valueLabelFormat=function(e,t){return Math.round(100*e).toString()},a.handleSliderChange=function(e){return function(t,n){var r=a.state;r.query[e]={min:n[0],max:n[1]},a.setState(r)}},a.handlePlaylistNameChange=function(e){a.setState({playlistName:e.target.value})},a.handleArtistSelect=function(e){a.setState({selectedArtistsIds:e.target.value})},a.handleCreatePlaylistClick=function(e){var t=a.state.query,n=t.acousticness,r=t.danceability,l=t.energy,i=t.instrumentalness,o=t.valence;a.props.spotifyWebApi.getRecommendations({min_acousticness:n.min,max_acousticness:n.max,min_danceability:r.min,max_danceability:r.max,min_energy:l.min,max_energy:l.max,min_instrumentalness:i.min,max_instrumentalness:i.max,min_valence:o.min,max_valence:o.max,seed_artists:a.state.selectedArtistsIds,limit:50}).then((function(e){e.body.tracks.length>0?a.props.spotifyWebApi.createPlaylist(a.props.user.id,a.state.playlistName).then((function(t){var n=e.body.tracks.map((function(e){return e.uri}));a.props.spotifyWebApi.addTracksToPlaylist(t.body.id,n).then((function(){a.props.clearPlaylist(),a.props.history.push("/playlists/".concat(t.body.id))}))})):a.props.openSnackBar({open:!0,message:"Oops! Looks like you need to broaden your selection"})}))},a.alphabetizeArtists=function(e){return e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))},a.renderPlaylistNameInput=function(){return r.createElement(r.Fragment,null,r.createElement(h.a,null,"Playlist name"),r.createElement(Ae.a,{value:a.state.playlistName,onChange:a.handlePlaylistNameChange}))},a.renderAttributeSlider=function(e){return r.createElement(r.Fragment,null,r.createElement(h.a,null,Q(e)),r.createElement(J.a,{theme:ee},r.createElement(xe.a,{valueLabelDisplay:"auto",valueLabelFormat:a.valueLabelFormat,min:0,max:1,step:.01,value:[a.state.query[e].min,a.state.query[e].max],onChange:a.handleSliderChange(e)})))},a.renderChip=function(e,t){var n,a;return r.createElement(J.a,{theme:ne,key:t},r.createElement(Te.a,{label:null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.name,avatar:r.createElement(Oe.a,{src:null===(a=e.find((function(e){return e.id===t})))||void 0===a?void 0:a.images[0].url})}))},a.renderArtistSelect=function(e){var t=a.state.selectedArtistsIds;return r.createElement(r.Fragment,null,r.createElement(h.a,null,"Seed artists"),r.createElement(J.a,{theme:te},r.createElement(ke.a,{error:!0},r.createElement(Ce.a,{error:t.length>3,multiple:!0,value:t,onChange:a.handleArtistSelect,input:r.createElement(_e.a,{multiline:!0}),renderValue:function(t){return r.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map((function(t){return a.renderChip(e,t)})))}},a.alphabetizeArtists(e).map((function(e){return r.createElement(Se.a,{key:e.name,value:e.id},e.name)}))),t.length>3&&r.createElement(Re.a,null,"Please select 1 - 3 artists"))))},a.render=function(){var e=a.state,t=e.selectedArtistsIds,n=e.playlistName,l=[],i=a.props.topArtists;if(i&&i.longTerm&&i.mediumTerm&&i.shortTerm){var o=i.longTerm,c=i.mediumTerm,s=i.shortTerm;l=(l=l.concat(o.items.concat(c.items.concat(s.items)))).filter((function(e,t){return l.findIndex((function(t){return t.id===e.id}))===t}))}return r.createElement(b.a,{container:!0,spacing:3,alignItems:"center"},r.createElement(b.a,{item:!0,xs:12},r.createElement(h.a,{variant:"h6"},"Create a playlist")),r.createElement(b.a,{item:!0,xs:12},a.renderPlaylistNameInput()),r.createElement(b.a,{item:!0,xs:12},a.renderArtistSelect(l)),["acousticness","danceability","energy","instrumentalness","valence"].map((function(e){return r.createElement(b.a,{item:!0,xs:12,key:"slider-".concat(e)},a.renderAttributeSlider(e))})),r.createElement(b.a,{container:!0,direction:"row",justify:"center"},r.createElement(b.a,{item:!0},r.createElement(J.a,{theme:$},r.createElement(Ie.a,{variant:"contained",color:"primary",size:"medium",onClick:a.handleCreatePlaylistClick,disabled:0===t.length||t.length>3||""===n},r.createElement(h.a,{style:{textTransform:"none"}},"Create"))))))},a.state={query:{acousticness:{min:0,max:1},danceability:{min:0,max:1},energy:{min:0,max:1},instrumentalness:{min:0,max:1},valence:{min:0,max:1}},selectedArtistsIds:[],playlistName:""},a}return n}(r.Component),we=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,tracksAttributes:e.tracksAttributes,topArtists:e.topArtists}}),(function(e){return{fetchTopArtists:function(t,n){return e(j(t,n))},openSnackBar:function(t){return e(M(t))},clearPlaylist:function(){return e({type:ie.CLEAR,data:void 0})}}}))(Pe)),je=n(139),Me=n(60),Le=n(329),De=n(327),Ne=n(336),We=n(335),Ve=n(331),Ue=n(323),Be=n(264),Fe=n(328),He=n(136),ze=n.n(He),Ye=n(104),qe=n.n(Ye),Ge=n(330),Ke=n(341),Je=n(14),Qe=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).render=function(){var t=e.props.user;return t?r.createElement("div",null,r.createElement(De.a,null),r.createElement("br",null),r.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.createElement(Oe.a,{alt:t.display_name,src:t.images&&t.images[0]&&t.images[0].url,style:{width:"100px",height:"100px"}}),r.createElement("h1",{style:{color:"white",padding:"8px 16px",wordWrap:"break-word"}},t.display_name),r.createElement(De.a,null))):null},e}return n}(r.PureComponent),Xe=Object(u.f)(Object(c.b)((function(e){return{user:e.user}}))(Qe)),Ze=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).onClickHandler=function(t){var n=e.props,a=n.spotifyWebApi,r=n.history;a.resetAccessToken(),r.push("/")},e.render=function(){return r.createElement("div",null,r.createElement(J.a,{theme:$},r.createElement(Ie.a,{onClick:e.onClickHandler},r.createElement(h.a,{style:{color:"white",textTransform:"none"}},"Sign out"))))},e}return n}(r.PureComponent),$e=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi}}))(Ze)),et=Object(g.a)((function(e){var t;return Object(Ke.a)({root:{display:"flex"},drawer:Object(he.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:(t={backgroundColor:"#1D1E28"},Object(he.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),Object(he.a)(t,e.breakpoints.up("sm"),{display:"none"}),t),menuButton:Object(he.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:Object(Me.a)(Object(Me.a)({},e.mixins.toolbar),{},Object(he.a)({},e.breakpoints.up("sm"),{display:"none"})),drawerPaper:{width:240,backgroundColor:"#1D1E28"},content:{flexGrow:1,backgroundColor:"#d3d3d3",padding:e.spacing(3)}})}));function tt(e){var t=et(),n=Object(Je.a)(),a=l.a.useState(!1),r=Object(je.a)(a,2),i=r[0],o=r[1],c=function(){o(!i)},u=l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"inherit"}},l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"white",padding:"8px 16px"}},"Apollo's Playlist"),l.a.createElement(De.a,null),l.a.createElement(Ue.a,null,l.a.createElement(s.b,{to:"/playlists",style:{textDecoration:"none"}},l.a.createElement(Be.a,{button:!0,key:"Playlists"},l.a.createElement(qe.a,{style:{color:"white"}}),l.a.createElement(Fe.a,{primary:"Playlists",style:{color:"white"}}))),l.a.createElement(s.b,{to:"/create-playlist",style:{textDecoration:"none"}},l.a.createElement(Be.a,{button:!0,key:"Create a Playlist"},l.a.createElement(qe.a,{style:{color:"white"}}),l.a.createElement(Fe.a,{primary:"Create a Playlist",style:{color:"white"}})))),l.a.createElement(De.a,null)),l.a.createElement("div",null,l.a.createElement(Xe,null),l.a.createElement(De.a,null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement($e,null)))),m=document.body;return l.a.createElement("div",{className:t.root},l.a.createElement(f.a,null),l.a.createElement(Le.a,{position:"fixed",className:t.appBar},l.a.createElement(Ge.a,null,l.a.createElement(Ve.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:c,className:t.menuButton},l.a.createElement(ze.a,null)),l.a.createElement(h.a,{variant:"h6",noWrap:!0},"Apollo's Playlist"))),l.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},l.a.createElement(We.a,{smUp:!0,implementation:"css"},l.a.createElement(Ne.a,{container:m,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:i,onClose:c,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},l.a.createElement(l.a.Fragment,null,u))),l.a.createElement(We.a,{xsDown:!0,implementation:"css"},l.a.createElement(Ne.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},u))),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.toolbar}),e.children))}n(184);var nt=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=function(){var t=e.props,n=t.history,a=t.spotifyWebApi,r=t.openSnackbar,l="?"+n.location.pathname.substring(1),i=new URLSearchParams(l);if(i.get("expires_in")){var o=new Date;o.setSeconds(o.getSeconds()+Number(i.get("expires_in"))),setInterval((function(){new Date>=o&&(clearInterval(),a.resetAccessToken(),r({open:!0,message:"Oops! Looks like your session has expired",autoHideDuration:null,anchorOrigin:{horizontal:"center",vertical:"top"}}))}),1e3)}},e.render=function(){var t=e.props,n=t.closeSnackbar,a=t.snackbar;return!!t.spotifyWebApi.getAccessToken()?r.createElement("div",{className:"apollos-playlist-container"},r.createElement(tt,null,r.createElement(E.a,Object.assign({},a,{onClose:n})),r.createElement(u.c,null,r.createElement(u.a,{exact:!0,path:["/","/playlists"],component:ve}),r.createElement(u.a,{path:"/playlists/:playlistId",component:ce}),r.createElement(u.a,{exact:!0,path:"/create-playlist",component:we}),r.createElement(u.a,{path:"*",component:U})))):r.createElement("div",{className:"apollos-playlist-container"},r.createElement(E.a,Object.assign({},a,{onClose:n})),r.createElement(W,null))},e}return n}(r.PureComponent),at=Object(u.f)(Object(c.b)((function(e){return{spotifyWebApi:e.spotifyWebApi,user:e.user,snackbar:e.snackbar}}),(function(e){return{fetchUser:function(t){return e(R(t))},openSnackbar:function(t){return e(M(t))},closeSnackbar:function(){return e({type:w.CLOSE,data:void 0})}}}))(nt)),rt=n(40),lt=n(137),it=(n(185),n(89)),ot=n.n(it),ct=n(25),st=n.n(ct),ut={open:!1,message:"",autoHideDuration:1e4,anchorOrigin:{vertical:"bottom",horizontal:"right"}},mt=Object(rt.combineReducers)({spotifyWebApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ot.a({clientId:k,redirectUri:C});return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.RECEIVE_USER:return t.data;default:return e}},playlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie.RECEIVE_PLAYLISTS:return st()({},e,t.data);case ie.CLEAR:return null;default:return e}},playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.RECEIVE_PLAYLIST:return st()({},e,t.data);default:return e}},tracksAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.RECEIVE_TRACKS_ATTRIBUTES:return st()({},e,t.data);default:return e}},topArtists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.RECEIVE_TOP_ARTISTS_LONG_TERM:return st()({},e,{longTerm:t.data});case I.RECEIVE_TOP_ARTISTS_MEDIUM_TERM:return st()({},e,{mediumTerm:t.data});case I.RECEIVE_TOP_ARTISTS_SHORT_TERM:return st()({},e,{shortTerm:t.data});default:return e}},snackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.OPEN:return st()({},e,t.data);case w.CLOSE:return st()({},e,Object(Me.a)(Object(Me.a)({},e),{},{open:!1}));default:return e}}}),pt={spotifyWebApi:new ot.a({clientId:k,redirectUri:C}),user:null,playlist:null,playlists:null,tracksAttributes:null,topArtists:null,snackbar:ut},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt;return Object(rt.createStore)(mt,e,Object(rt.applyMiddleware)(lt.a))};document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("root"),t=dt();o.a.render(l.a.createElement(c.a,{store:t},l.a.createElement(s.a,null,l.a.createElement(at,null))),e)}))}},[[152,1,2]]]);
//# sourceMappingURL=main.48d90693.chunk.js.map