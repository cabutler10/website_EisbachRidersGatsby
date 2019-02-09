(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,a,t){"use strict";t.r(a);var n=t(6),i=t.n(n),r=t(0),s=t.n(r),o=t(4),l=t.n(o),c=(t(152),t(184)),m=t.n(c),d=t(183),p=t.n(d),u=t(208),g=(t(182),t(146)),h=t(256),b=t.n(h),f=t(149),y=t.n(f),E=function(e){e.img;var a=e.classes;return s.a.createElement("div",{className:a.list},"mobile hero")};E.propTypes={classes:l.a.object.isRequired};var w=Object(g.withStyles)(function(e){return{list:{width:200},text:{textTransform:"uppercase",paddingTop:15,paddingBottom:15,paddingLeft:30,paddingRight:30,color:e.status.greyDk},icon:{color:e.status.grey}}})(E),v=function(e){var a=e.img,t=e.classes;return s.a.createElement("div",{className:t.root},s.a.createElement("img",{src:a,className:t.img}),s.a.createElement(b.a,{smUp:!0},s.a.createElement(w,null)),s.a.createElement(b.a,{xsDown:!0},s.a.createElement("div",{className:t.container},s.a.createElement(y.a,{variant:"h1",gutterBottom:!0,className:t.text},"Eisbach Riders"),s.a.createElement(y.a,{variant:"h5",className:t.text},"Surf equipment accessories from Munich"))))};v.propTypes={classes:l.a.object.isRequired};var k=Object(g.withStyles)(function(e){var a,t,n;return{root:(a={height:300,position:"relative",marginTop:-65,zIndex:-1},a[e.breakpoints.up("sm")]={height:300},a[e.breakpoints.up("md")]={height:600},a),img:(t={height:200},t[e.breakpoints.up("sm")]={height:300},t[e.breakpoints.up("md")]={height:600,width:"100%"},t),container:(n={position:"absolute",zIndex:2,background:"none",padding:0,left:15,bottom:15},n[e.breakpoints.up("md")]={background:"none",width:"100%",bottom:150},n),text:{textTransform:"capitalize",letterSpacing:3,fontWeight:600,textAlign:"center",color:e.status.white}}})(v),x=t(139),S=t.n(x),C=(t(180),t(166)),N=t.n(C),T=t(202),B=t(478),D=t.n(B),O=t(167),j=t.n(O),R=t(258),z=t.n(R),A=t(260),F=t.n(A),I=t(259),W=t.n(I),M=t(201),q=t.n(M),P=t(196),L=t.n(P),K=t(237),G=t.n(K),H=t(238),U=t.n(H),J=t(493),Y=t.n(J),Q=t(488),V=t.n(Q),X=t(495),Z=t.n(X),$=t(492),_=t.n($),ee=t(240),ae=t.n(ee),te=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).state={isDialogOpen:!1,activeStep:0},a.handleDialogOpen=function(e){a.setState({isDialogOpen:!0})},a.handleDialogClose=function(){a.setState({isDialogOpen:!1})},a.handleIndexChange=function(e){a.setState({activeStep:e})},a.handleNext=function(){a.setState(function(e){return{activeStep:e.activeStep+1}})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a}return i()(a,e),a.prototype.render=function(){var e=this.props,a=e.product,t=e.classes,n=this.state,i=n.isDialogOpen,r=n.activeStep;return s.a.createElement("div",{className:t.root},s.a.createElement(j.a,{variant:"outlined",className:t.more,onClick:this.handleDialogOpen},"More"),s.a.createElement(z.a,{open:i,onClose:this.handleDialogClose,maxWidth:"md"},s.a.createElement(W.a,{id:"dialog-title",className:t.dialogTitle},a.name,s.a.createElement(N.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleDialogClose,className:t.closeButton},s.a.createElement(q.a,null))),s.a.createElement(F.a,null,s.a.createElement("div",{className:t.dialogContainer},s.a.createElement("div",{className:t.dialogImg},s.a.createElement(D.a,{enableMouseEvents:!0,index:r,onChangeIndex:this.handleChangeIndex},a.images.map(function(e,a){return s.a.createElement("img",{src:e,key:"img"+a,className:t.img})})),s.a.createElement(V.a,{steps:a.images.length,position:"static",activeStep:r,className:t.mobileStepper,nextButton:s.a.createElement(N.a,{size:"small",onClick:this.handleNext,disabled:r===a.images.length-1},s.a.createElement(ae.a,null)),backButton:s.a.createElement(N.a,{size:"small",onClick:this.handleBack,disabled:0===r},s.a.createElement(_.a,null))})),s.a.createElement("div",{className:t.dialogContent},s.a.createElement("div",{className:t.priceContainer},s.a.createElement(y.a,{variant:"h6",className:t.price},"€"+a.price),s.a.createElement("div",{className:t.iconContainer},a.amazon&&s.a.createElement(N.a,{className:t.button,"aria-label":"Amazon"},s.a.createElement(T.a,{className:t.icon})),a.ebay&&s.a.createElement(N.a,{className:t.button,"aria-label":"Ebay"},s.a.createElement(T.b,{className:t.icon})))),s.a.createElement(L.a,{disablePadding:!0,className:t.scroll},a.more.map(function(e,a){return s.a.createElement(G.a,{key:"listItem"+a,className:t.listItem},s.a.createElement(Y.a,null,s.a.createElement(Z.a,{className:t.icon})),s.a.createElement(U.a,{primary:e,classes:{root:t.listItemTextRoot,primary:t.listItemText}}))})))))))},a}(r.Component);te.propTypes={classes:l.a.object.isRequired};var ne=Object(g.withStyles)(function(e){var a;return(a={more:{width:"50%"},dialogContainer:{display:"flex"},dialogImg:{flexBasis:"60%",paddingRight:60,paddingLeft:60},dialogContent:{flexBasis:"40%"},dialogTitle:{textAlign:"center"},closeButton:{float:"right"},name:{paddingTop:15,paddingBottom:10,fontWeight:600,textAlign:"left"},price:{color:e.palette.primary.main,fontWeight:600,display:"flex",justifyContent:"space-between",paddingBottom:10},img:{width:"100%"},listItem:{alignItems:"flex-start",paddingLeft:0,paddingRight:0},listItemTextRoot:{paddingLeft:0,paddingRight:0},listItemText:{fontSize:14},icon:{fontSize:18},priceContainer:{display:"flex",justifyContent:"space-between",alignItems:"center"}}).price={color:e.palette.primary.main,fontWeight:600,marginRight:15},a.mobileStepper={background:e.status.white},a.scroll={height:"55vh",paddingBottom:30,overflowY:"auto","&::-webkit-scrollbar-track":{WebkitBoxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.1)",borderRadius:4,backgroundColor:e.status.grey.greyBG},"&::-webkit-scrollbar":{width:4,backgroundColor:e.status.grey.greyBG},"&::-webkit-scrollbar-thumb":{WebkitBoxShadow:"inset 0 0 6px rgba(0, 0, 0, 0.1)",borderRadius:4,backgroundColor:e.status.grey.greyDivs}},a})(te),ie=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=this.props,a=e.images,t=e.classes,n=[{name:"Surfboard Thruster Fin Set - FCS Double Tab with Fin Key",images:[a[0],a[0],a[0],a[0],a[0]],price:"19.90",ebay:"http://www.ebay.de/itm/183498144801",amazon:"https://www.amazon.de/dp/B07K8W2TKK",more:["Set of 3 fins with center fin and the two side fins (right and left) with inside profile in standard size G5 / M5.","Fits any surfboard with double tab FCS1 plug system - whether bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or water sports in general.","High quality materials make the fins durable and flexible.","All our products come in a sustainable and environmentally friendly packaging.","Height: 11.63 cm (4.58'')","Length: 11.13 cm (4.38'')","Thickness: 0.66 cm (0.26'')","Angle: 35.5 degree","Scope of delivery: 3 fin set with fin key"]},{name:"Surfboard RailProtect - Rail Protection Saver Tape",images:[a[2],a[2],a[2],a[2],a[2]],price:"24.90",ebay:"http://www.ebay.de/itm/183498197638",amazon:"https://www.amazon.de/dp/B07K8W9TG9",more:["The particularly durable diamond structure protects the edges of your board against dings and bumps, thus preventing the ingress of water.","Fits any surfboard up to 6ft (1.83m) - whether its bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or SUP (stand up paddling).","The two adhesive strips (each 191 x 6.3 cm (6'3 x 2.5)) are easy to attach and will last a long time on your board.","All our products come in a sustainable and environmentally friendly handcrafted packaging.","Scope of delivery: 2 piece set surfboard RailProtect tape"]},{name:"Surfboard Thruster Fin Set - Future Single Tab with Fin Key",images:[a[0],a[0],a[0],a[0],a[0]],price:"19.90",ebay:"http://www.ebay.de/itm/183498170584",amazon:null,more:["Set of 3 fins with center fin and the two side fins (right and left) with inside profile in standard size G5 / M5.","Fits any surfboard with single tab Future plug system - whether bodyboard, shortboard, funboard or kiteboard, making it ideal for surfing, river surfing, paddle boarding or water sports in general.","High quality materials make the fins durable and flexible.","All our products come in a sustainable and environmentally friendly packaging.","Height: 11.63 cm (4.58'')","Length: 11.13 cm (4.38'')","Thickness: 0.66 cm (0.26'')","Angle: 35.5 degree","Scope of delivery: 3 fin set with fin key"]}];return s.a.createElement("div",{className:t.root},n.map(function(e,a){return s.a.createElement("div",{className:t.container,key:"product"+a},s.a.createElement("img",{src:e.images[0],className:t.img}),s.a.createElement(y.a,{className:t.name},e.name),s.a.createElement("div",{className:t.priceContainer},s.a.createElement(y.a,{variant:"h6",className:t.price},"€"+e.price),s.a.createElement("div",{className:t.iconContainer},e.amazon&&s.a.createElement(N.a,{className:t.button,"aria-label":"Amazon"},s.a.createElement(T.a,{className:t.icon})),e.ebay&&s.a.createElement(N.a,{className:t.button,"aria-label":"Ebay"},s.a.createElement(T.b,{className:S()(t.icon,t.ebay)})))),s.a.createElement(ne,{product:e}))}))},a}(r.Component);ie.propTypes={classes:l.a.object.isRequired};var re=Object(g.withStyles)(function(e){return{root:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},container:{flexBasis:"30%"},img:{width:"100%"},name:{paddingTop:15,paddingBottom:10,fontWeight:600,textAlign:"left"},priceContainer:{display:"flex",justifyContent:"center",alignItems:"center"},price:{color:e.palette.primary.main,fontWeight:600,marginRight:15},iconContainer:{marginLeft:15},icon:{fill:e.status.black},ebay:{fontSize:36}}})(ie),se=t(496),oe=t.n(se),le=(t(79),t(498),t(499),t(261),t(502)),ce=t.n(le),me=t(503),de=t.n(me),pe=t(262),ue=t.n(pe),ge=t(247),he=t.n(ge),be=t(245),fe=t.n(be),ye=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(a=e.call.apply(e,[this].concat(n))||this).state={email:"Email Address",name:"Name",isDialogOpen:!1,isSnackbarOpen:!1,snackbarMessage:null},a.handleSubmit=function(){var e=ce()(oe.a.mark(function e(t){var n;return oe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault,e.next=3,de()(a.state.email,{FNAME:a.state.name});case 3:"error"===(n=e.sent).result?a.setState({isSnackbarOpen:!0,snackbarMessage:n.msg.includes("<a")?n.msg.split("<a")[0]:n.msg}):a.setState({isSnackbarOpen:!0,snackbarMessage:"success"});case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),a.handleSnackbarClose=function(e,t){"clickaway"!==t&&a.setState({isSnackbarOpen:!1})},a.handleDialogOpen=function(){a.setState({isDialogOpen:!0})},a.handleDialogClose=function(){a.setState({isDialogOpen:!1})},a.handleChange=function(e){return function(t){var n;a.setState(((n={})[e]=t.target.value,n))}},a}return i()(a,e),a.prototype.render=function(){var e=this,a=this.props.classes,t=this.state,n=t.email,i=t.name,r=t.isDialogOpen,o=t.isSnackbarOpen,l=t.snackbarMessage;return s.a.createElement("div",{className:a.containerNewsletter},s.a.createElement(fe.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:6e3,onClose:this.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id",className:"success"===l?a.snackbarSuccess:a.snackbarError},message:"success"===l?s.a.createElement("span",{id:"message-id"},"Success! Thanks for joining."):s.a.createElement("span",{id:"message-id"},l),action:s.a.createElement(N.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleSnackbarClose},s.a.createElement(q.a,null))}),s.a.createElement(y.a,{className:a.textNewsletter,variant:"h5"},"sign up for our newsletter"),s.a.createElement(j.a,{variant:"contained",color:"primary",className:a.button,onClick:this.handleDialogOpen},"Sign Up"),s.a.createElement(z.a,{open:r,onClose:this.handleDialogClose},s.a.createElement(W.a,{id:"dialog-title"},"Newsletter"),s.a.createElement(F.a,null,s.a.createElement("form",{className:a.form},s.a.createElement(he.a,{required:!0,id:"email",label:"Email",value:n,onChange:this.handleChange("email"),className:a.textField,margin:"normal",variant:"outlined"}),s.a.createElement(he.a,{required:!0,id:"name",label:"Name",value:i,onChange:this.handleChange("name"),className:a.textField,margin:"normal",variant:"outlined"}))),s.a.createElement(ue.a,null,s.a.createElement(j.a,{onClick:this.handleDialogClose,color:"primary"},"Cancel"),s.a.createElement(j.a,{onClick:function(){e.handleSubmit(n),e.handleDialogClose()},color:"primary",autoFocus:!0},"Subscribe to List"))))},a}(r.Component);ye.propTypes={classes:l.a.object.isRequired};var Ee=Object(g.withStyles)(function(e){return{containerNewsletter:{background:e.status.white,padding:90,textAlign:"center"},textNewsletter:{textTransform:"uppercase",paddingBottom:30},form:{display:"flex",flexDirection:"column"},textField:{marginBottom:15},button:{padding:"16px 48px",fontSize:"18px"},snackbarError:{background:e.status.red},snackbarSuccess:{background:e.status.green}}})(ye),we=function(e){var a=e.img1,t=e.img2,n=e.img3,i=e.img4,o=e.classes;return s.a.createElement(r.Fragment,null,s.a.createElement(Ee,null),s.a.createElement("div",{className:o.container1},s.a.createElement("div",{className:o.imgContainer1},s.a.createElement("img",{src:a,className:o.img})),s.a.createElement("div",{className:o.textContainer1,id:"about"},s.a.createElement(y.a,{className:S()(o.title,o.titleAbout),variant:"h5"},"who we are"),s.a.createElement(y.a,{className:o.text,variant:"subtitle1"},"Eisbach Riders is a young local surf brand from Munich and offers equipment for surfing, Whether you are in the sea, in the river or on the city wave. We, Michael and Robin, are passionate surfers ourselves and value quality products at compatible prices. Packed in a sustainable and environmentally friendly packaging, we will ship as fast as possible, so you can jump right back into the water with a smile on your face."))),s.a.createElement("div",{className:o.container2,id:"products"},s.a.createElement(y.a,{className:S()(o.title,o.titleProducts),variant:"h5"},"products"),s.a.createElement(re,{images:[t,n,i]})))};we.propTypes={classes:l.a.object.isRequired};var ve=Object(g.withStyles)(function(e){return{container1:{display:"flex",flexWrap:"wrap",height:500,background:e.status.black},container2:{textAlign:"center",padding:90,background:e.status.white},img:{width:"100%",height:500},imgContainer1:{flexBasis:"50%"},textContainer1:{flexBasis:"50%",padding:90},title:{textTransform:"uppercase",width:"100%",textAlign:"center",letterSpacing:3,paddingBottom:30},titleAbout:{color:e.palette.primary.main},titleProducts:{color:e.palette.black},text:{color:e.palette.common.white}}})(we),ke=t(510),xe=t.n(ke),Se=t(511),Ce=t.n(Se),Ne=t(512),Te=t.n(Ne),Be=t(513),De=t.n(Be),Oe=t(514),je=t.n(Oe),Re=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){this.props.data;var e=m()(this,"props.data.site.siteMetadata.title"),a=m()(this,"props.data.site.siteMetadata.description");return s.a.createElement(u.a,{location:this.props.location},s.a.createElement(p.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:e}),s.a.createElement(k,{img:xe.a}),s.a.createElement(ve,{img1:Ce.a,img2:Te.a,img3:De.a,img4:je.a}))},a}(r.Component);Re.propTypes={};a.default=Re},510:function(e,a,t){e.exports=t.p+"static/backsplash-a531597bd107e48d281371b7e597b2cd.jpg"},511:function(e,a,t){e.exports=t.p+"static/homepage1-ff76affe6c8399aa04c5f3a25dda2a11.png"},512:function(e,a,t){e.exports=t.p+"static/homepage2-59e416c2327fe356cea6005e4b7ebb3f.jpg"},513:function(e,a,t){e.exports=t.p+"static/homepage3-00710bbb07f112c5fe7e4bb3a9ad6fed.jpg"},514:function(e,a,t){e.exports=t.p+"static/homepage4-6430438a322282ad83a00b1c46b9e120.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-460ab24f6501ccc44080.js.map