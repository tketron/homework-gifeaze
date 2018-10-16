(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){},187:function(e,t,a){},189:function(e,t,a){},209:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(90),c=a.n(i),s=a(8),o=a(9),l=a(11),h=a(10),d=a(12),u=(a(185),a(92)),m=(a(187),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classNames,a=Object(u.a)(e,["classNames"]);return r.a.createElement("button",Object.assign({className:"SearchBarButton ".concat(t)},a))}}]),t}(n.Component)),p=(a(189),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleSearchBarChange=function(e){a.setState({searchTerm:e.target.value})},a.handleSearchSubmitClick=function(e){a.state.searchTerm&&a.props.onSearchChange(a.state.isSearch,a.state.searchTerm)},a.handleSearchTypeToggle=function(){a.setState(function(e){return{searchTerm:"",isSearch:!e.isSearch,headerMessage:e.headerMessage===a._trendingText?a._searchingText:a._trendingText}},function(){a.props.onSearchChange(a.state.isSearch)})},a._trendingText="Trending Gifeaze",a._searchingText="Search for GIFs",a.state={isSearch:!1,searchTerm:"",headerMessage:a._trendingText},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.searchBarInput&&this.searchBarInput.focus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("div",{className:"SearchBar-header-text"},this.state.headerMessage),this.state.isSearch?r.a.createElement("div",{className:"SearchBar-search"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"SearchBar-search-input",ref:function(t){return e.searchBarInput=t},value:this.state.searchTerm,onChange:this.handleSearchBarChange})),r.a.createElement("div",null,r.a.createElement(m,{onClick:this.handleSearchSubmitClick,classNames:!this.state.searchTerm&&"disabled"},"Search!"),r.a.createElement(m,{onClick:this.handleSearchTypeToggle},"View Trending GIFs"))):r.a.createElement("div",{className:"SearchBar-trending"},r.a.createElement(m,{onClick:this.handleSearchTypeToggle},"Search for GIFs")))}}]),t}(n.Component)),g=a(91),f=a.n(g),b=a(35),y=a.n(b),v=(a(209),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleImageLoad=function(){console.log("loaded"),a.setState({loading:!1})},a.state={loading:!0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GIFCardModal",onClick:this.props.onClick},r.a.createElement("div",{className:"GIFCardModal-modal"},r.a.createElement("div",{className:"GIFCardModal-contents"},r.a.createElement("div",{className:"GIFCardModal-gif-container"},r.a.createElement("img",{src:this.props.gif.images.downsized.url,alt:this.props.gif.title,className:"GIFCardModal-gif",onLoad:this.handleImageLoad}),this.state.loading&&r.a.createElement("div",{className:"GIFCardModal-loading"},r.a.createElement(y.a,{type:"bubbles",color:"#000",height:"20%",width:"20%"}))),r.a.createElement("div",{className:"GIFCardModal-gif-details-container"},r.a.createElement("p",{className:"GIFCardModal-gif-details-text"},this.props.gif.title," ",r.a.createElement("em",null,"uploaded by")," ",this.props.gif.username),r.a.createElement("p",{className:"GIFCardModal-gif-details-link"},r.a.createElement("a",{href:this.props.gif.bitly_url,target:"_blank",rel:"noopener noreferrer"},"View on Giphy"))))))}}]),t}(n.Component)),C=(a(211),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1},a.handleModalClose=function(e){e.stopPropagation(),a.setState({modalOpen:!1})},a.handleModalOpen=function(e){a.setState({modalOpen:!0})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"GIFCard",onClick:this.handleModalOpen},r.a.createElement("img",{src:this.props.gif.images.fixed_height.url,alt:this.props.gif.title,className:"GIFCard-gif"}),this.state.modalOpen&&r.a.createElement(v,{gif:this.props.gif,onClick:this.handleModalClose}))}}]),t}(n.Component)),O=(a(213),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={loading:!0,queryPath:a.props.queryURL,gifs:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateGIFs()}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.queryPath!==this.props.queryURL&&this.setState({queryPath:this.props.queryURL,loading:!0},function(){a.updateGIFs()})}},{key:"updateGIFs",value:function(){var e=this;f.a.get(this.state.queryPath,{}).then(function(t){e.setState({gifs:t.data.data,loading:!1})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"GIFCardContainer"},this.state.gifs.map(function(e){return r.a.createElement(C,{key:e.id,gif:e})}),this.state.loading&&r.a.createElement("div",{className:"GIFCardContainer-loading"},r.a.createElement(y.a,{id:"GIFCardContainer-loading-animation",type:"bubbles",color:"#fff",height:"20%",width:"20%"})))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleQueryChange=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t=e?"http://api.giphy.com/v1/gifs/search?q=".concat(encodeURIComponent(n),"&"):"http://api.giphy.com/v1/gifs/trending?",a.setState({queryURL:"".concat(t,"api_key=").concat("HEg4D4yn5yL1hDohN0wlZ9FnVpwrWnm5")})},a.state={queryURL:"http://api.giphy.com/v1/gifs/trending?api_key=".concat("HEg4D4yn5yL1hDohN0wlZ9FnVpwrWnm5")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{onSearchChange:this.handleQueryChange}),r.a.createElement(O,{queryURL:this.state.queryURL}))}}]),t}(n.Component);a(215);c.a.render(r.a.createElement(E,null),document.getElementById("root"))},93:function(e,t,a){e.exports=a(217)}},[[93,2,1]]]);
//# sourceMappingURL=main.f8eed38b.chunk.js.map