(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a(279)},133:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),c=a.n(r),o=a(20),s=a(12),l=a(27),m=(a(133),{projectName:"tetris"}),u=a(11),d=a(41),h=a(19),v=a.n(h);var p=function(e){var t=e.name,a=e.className;return i.a.createElement("i",{className:v()("material-icons",Object(u.a)({},a,a)),children:t})},f=a(38);var g=function(e){var t=e.className,a=e.component,n=e.disabled,r=Object(d.a)(e,["className","component","disabled"]);return i.a.createElement(a||"a",Object(f.a)({className:v()("tappable",{disabled:n},Object(u.a)({},t,t))},r))};var E=function(e){var t=e.title,a=e.backTo;return i.a.createElement("div",{className:"layout-header"},a&&i.a.createElement("div",{className:"layout-header-item"},i.a.createElement(g,{className:"btn btn-small",component:o.b,to:a},i.a.createElement(p,{name:"arrow_back"}))),i.a.createElement("div",{className:"layout-header-item layout-header-title"},t||"Blog"))};function b(e){var t=e.message,a=e.actionLabel,n=e.actionFn;return i.a.createElement("div",{className:"layout"},i.a.createElement("div",{className:"layout-content is-centered pad"},i.a.createElement("p",null,t),a&&n&&i.a.createElement(g,{className:"btn mgn-t",onClick:n},a)))}b.defaultProps={actionLabel:"Try Again"};var S=a(120),N="React Template",y=["site_name","title","description","image","url"];var _=function(e){var t=Object(f.a)({},e,{site_name:N});return i.a.createElement(S.Helmet,null,t.title?i.a.createElement("title",null,t.title," | ",N):null,t.description?i.a.createElement("meta",{name:"description",content:t.description}):null,y.map(function(e,a){return t[e]?i.a.createElement("meta",{key:a,property:"og:"+e,content:t[e]}):null}))};var w=a(9),k=a(16),j=a(125),O=a(121),x=a(126),z=a(122),I=a.n(z),P=function(e){return function(t){var a=function(e){function a(){return Object(w.a)(this,a),Object(j.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(x.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return i.a.createElement(t,this.props)}}]),a}(n.Component);return I()(e,function(e,t){return a.prototype[t]=e}),a}},L=a(40),C=a.n(L);var A=function(){return C()(l.b.apply(void 0,arguments),l.c)},T=a(1),M=function e(){var t=this;Object(w.a)(this,e),this._timer=null,this.content=null,this.timeout=1e3,this.show=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t.hide(),t.content=e,t.timeout=a,t._timer=setTimeout(t.hide,a)},this.hide=function(){clearTimeout(t._timer),t.content=null,t.timeout=1e3}};Object(T.h)(M,{content:T.m,show:T.d,hide:T.d});var F=new M;var R=A("toastStore")(function(e){var t=e.toastStore;return t.content?i.a.createElement("div",{className:"toast"},i.a.createElement("div",{className:"toast-content"},t.content)):null}),V=a(13),W=a(123),q=a.n(W);function B(e){return null===e||void 0===e}function G(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;return new Array(e).fill(new Array(t).fill(a))}function H(e,t){for(var a=e.length,n=0===a?0:e[0].length,i=0,r=0;i<a;){for(;r<n;){var c=t(i,r,e);if(!B(c))return c;r+=1}r=0,i+=1}}var J=a(124),D=a.n(J);var Q=function(){function e(t,a,n){var i=this;Object(w.a)(this,e),this.matrix=null,this.position=null,this._canMove=function(e){var t=i._calculateTopLeftPosition(e),a=Object(V.a)(t,2),n=a[0],r=a[1];return!(e[0]>i.grid.rowSize-1||e[1]<0||e[1]+i.colSize-1>=i.grid.colSize)&&!H(i.matrix,function(e,t,a){var c=a[e][t],o=!1;if(i.grid.isValidPosition(n+e,r+t)&&(o=i.grid.matrix[n+e][r+t]>-1),c&&o)return!0})},this._calculateTopLeftPosition=function(e){var t=Object(V.a)(e,2),a=t[0],n=t[1];return[a-i.rowSize+1,n]},this.advance=function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(t&&i._advanceInterval&&clearInterval(i._advanceInterval),i.position){var a=Object(V.a)(i.position,2);e=[a[0]+1,a[1]]}else e=[0,i.initialColIndex];i._canMove(e)?(i.position=e,t&&i.advance(t)):(clearInterval(i._advanceInterval),i.grid.placeAndEvaluate(i))},this.move=function(e){if(i.position){var t=Object(V.a)(i.position,2),a=[t[0],t[1]+e];i._canMove(a)&&(i.position=a)}},this.stop=function(){clearTimeout(i._advanceInterval)},this.id=t,this.matrix=a,this.grid=n,this._init()}return Object(k.a)(e,null,[{key:"generate",value:function(t,a){var n=D()(e.fixedShapes[function(e,t){var a=Math.floor(Math.random()*(t-e+1))+e;return a>t&&(a=t),a}(0,e.fixedShapes.length-1)]);return H(n,function(e,a){-1!==n[e][a]&&(n[e][a]=t)}),new e(t,n,a)}}]),Object(k.a)(e,[{key:"_init",value:function(){var e=this;this.advance(),this._advanceInterval=setInterval(function(){return e.advance()},this.grid.speed)}},{key:"topLeftPosition",get:function(){return this.position?this._calculateTopLeftPosition(this.position):null}},{key:"initialColIndex",get:function(){return parseInt((this.grid.colSize-1)/2,10)-parseInt(this.colSize/2,10)}},{key:"colSize",get:function(){return this.matrix[0].length}},{key:"rowSize",get:function(){return this.matrix.length}}]),e}();Q.fixedShapes=[[[1,-1,-1,-1],[1,1,1,1]],[[-1,-1,-1,1],[1,1,1,1]],[[1,1,1]],[[-1,1,-1],[1,1,1]]],Object(T.h)(Q,{matrix:T.m,position:T.m,topLeftPosition:T.e,advance:T.d,move:T.d,quickPlace:T.d});var U=Q,K=function(){function e(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(w.a)(this,e),this.matrix=null,this.score=0,this.isStarted=!1,this.isEnded=!1,this.shape=null,this._nextShapeId=0,this._addShape=function(){return t.shape=U.generate(t._nextShapeId++,t)},this._evaluate=function(){var e=Object(T.o)(t.matrix),a=q()(e,function(e){return e.every(function(e){return e>-1})}),n=G(a.length,t.colSize);Array.prototype.unshift.apply(e,n),t.score+=a.length*t.colSize,t.matrix=e},this._place=function(e){var a=e.topLeftPosition;if(a){var n=Object(V.a)(a,2),i=n[0],r=n[1];return!H(e.matrix,function(a,n,c){if(c[a][n]>-1){if(!t.isValidPosition(i+a,r+n))return!0;t.matrix[a+i][n+r]=e.id}})&&(t.shape=null,!0)}return!1},this.isValidPosition=function(e,a){return e>=0&&e<t.rowSize&&a>=0&&a<t.colSize},this.move=function(e){!t.isEnded&&t.shape&&t.shape.move(e)},this.placeAndEvaluate=function(e){t._place(e)?(t._evaluate(),t._addShape()):t.isEnded=!0},this.quickPlace=function(){!t.isEnded&&t.shape&&t.shape.advance(!0)},this.restart=function(){t.shape&&t.shape.stop(),t.matrix=G(t.rowSize,t.colSize),t.isStarted=!1,t.isEnded=!1,t.shape=null,t.score=0,t._nextShapeId=0,t.start()},this.start=function(){t.isStarted||(t._addShape(),t.isStarted=!0)},this._options=Object.assign({},e.defaultOptions,a),this.matrix=G(this.rowSize,this.colSize)}return Object(k.a)(e,[{key:"colSize",get:function(){return this._options.colSize}},{key:"rowSize",get:function(){return this._options.rowSize}},{key:"isAction",get:function(){return this.isStarted&&!this.isEnded}},{key:"speed",get:function(){return this._options.speed}},{key:"matrixWithShapes",get:function(){var e=this,t=Object(T.o)(this.matrix);if(this.shape&&this.shape.position){var a=Object(V.a)(this.shape.topLeftPosition,2),n=a[0],i=a[1];H(this.shape.matrix,function(a,r){e.shape.matrix[a][r]>-1&&e.isValidPosition(n+a,i+r)&&(t[n+a][i+r]=e.shape.id)})}return t}}]),e}();K.defaultOptions={rowSize:15,colSize:10,speed:500},Object(T.h)(K,{matrix:T.m,shape:T.m,isStarted:T.m,isEnded:T.m,score:T.m,_addShape:T.d,_evaluate:T.d,_place:T.d,placeAndEvaluate:T.d,restart:T.d,start:T.d,matrixWithShapes:T.e});var X=K,Y=function e(){var t=this;Object(w.a)(this,e),this.instance=new X,this.start=function(){t.instance.start()},this.retry=function(){t.instance.restart()},this.move=function(e){t.instance&&t.instance.move(e)},this.place=function(){t.instance&&t.instance.quickPlace()}};Object(T.h)(Y,{instance:T.m,start:T.d});var Z=new Y,$="#f2f2f2",ee=["#69A2B0","#659157","#E05263","#477998","#663F46","#7692FF"],te=function(e){var t=Z;if(t.instance)switch(e.keyCode){case 37:t.move(-1);break;case 39:t.move(1);break;case 40:t.place()}};var ae=C()(P({componentDidMount:function(){document.addEventListener("keydown",te)},componentWillUnmount:function(){document.removeEventListener("keydown",te)}}),A("gameStore"))(function(e){var t=e.gameStore.instance.matrixWithShapes;return i.a.createElement("div",{className:"game-grid"},t.map(function(e,t){return i.a.createElement("div",{key:"row/".concat(t),className:"game-grid-row"},e.map(function(e,t){return i.a.createElement("div",{key:"col/".concat(t),style:{backgroundColor:e>-1?ee[e%ee.length]:$},className:"game-grid-col"})}))}))});var ne=A("gameStore","toastStore")(function(e){var t=e.gameStore,a=e.toastStore,n=t.instance;return i.a.createElement("div",{className:"game-details"},i.a.createElement("div",{className:"game-score-container game-detail sep-b"},i.a.createElement("div",{className:"title mgn-b"},"Score"),i.a.createElement("div",{className:"game-score"},n.score.toString().padStart(4,"0"))),i.a.createElement("div",{className:"game-controls-container game-detail sep-b"},i.a.createElement("div",{className:"title mgn-b"},"Controls"),i.a.createElement("div",{className:"game-controls"},i.a.createElement("div",{className:"game-control"},i.a.createElement("div",{className:"game-control-label"},"Rotate"),i.a.createElement(g,{className:"btn btn-small",onClick:function(){return a.show("Not yet implemented")}},i.a.createElement(p,{name:"arrow_upward"})))),i.a.createElement("div",{className:"game-controls"},i.a.createElement("div",{className:"game-control"},i.a.createElement(g,{className:"btn btn-small",onClick:function(){return t.move(-1)}},i.a.createElement(p,{name:"arrow_back"})),i.a.createElement("div",{className:"game-control-label"},"Move Left")),i.a.createElement("div",{className:"game-control"},i.a.createElement(g,{className:"btn btn-small",onClick:function(){return t.place()}},i.a.createElement(p,{name:"arrow_downward"})),i.a.createElement("div",{className:"game-control-label"},"Quick Place")),i.a.createElement("div",{className:"game-control"},i.a.createElement(g,{className:"btn btn-small",onClick:function(){return t.move(1)}},i.a.createElement(p,{name:"arrow_forward"})),i.a.createElement("div",{className:"game-control-label"},"Move Right")))),function(){var e;return e=n.isStarted?{children:"Restart Game",className:"btn btn-danger btn-small",onClick:function(){return t.retry()}}:{children:"Start Game",className:"btn btn-small",onClick:function(){return t.start()}},i.a.createElement("div",{className:"game-actions game-detail sep-b"},i.a.createElement("div",{className:"title mgn-b"},"Actions"),i.a.createElement(g,e))}(),function(){var e;return e=n.isStarted?n.isEnded?{children:"Game Ended!",className:"danger"}:{children:"In Progress",className:"primary"}:{children:"Not Started"},i.a.createElement("div",{className:"game-status game-detail sep-b"},i.a.createElement("div",{className:"title mgn-b"},"Status"),i.a.createElement("div",e))}())});var ie=A("gameStore")(function(e){return e.gameStore,i.a.createElement("div",{className:"layout is-main"},i.a.createElement(_,{title:"Home"}),i.a.createElement(E,{title:"Tetris"}),i.a.createElement("div",{className:"layout-content"},i.a.createElement("div",{className:"game"},i.a.createElement(ae,null),i.a.createElement(ne,null))))}),re={gameStore:Z,toastStore:F};var ce=function(){return i.a.createElement(l.a,re,i.a.createElement(o.a,{basename:"/demos/".concat(m.projectName)},i.a.createElement(s.c,null,i.a.createElement(s.a,{exact:!0,path:"/",component:ie})),i.a.createElement(R,null)))};document.addEventListener("touchstart",function e(t){document.documentElement.classList.add("can-touch"),document.removeEventListener("touchstart",e,!1)},!1),c.a.render(i.a.createElement(ce,null),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.3c10f9f6.chunk.js.map