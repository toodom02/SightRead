(this.webpackJsonpsightread=this.webpackJsonpsightread||[]).push([[0],{104:function(e,t,n){e.exports=n(142)},109:function(e,t,n){},110:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),l=(n(109),n(110),n(37)),s=n(10),c=n(15),m=n(16),u=n(18),d=n(17),h=n(160),f=n(162),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement("h1",null,"Welcome"),r.a.createElement("p",null,"Click Next to Start Generating Music!"),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.continue},"Next"))}}]),n}(a.Component),v=n(163),g=n(170),b=n(164),E=n(171),x=n(168),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleChange,a=t.Keys.filter((function(e){return"major"===e.mode})),o=t.Keys.filter((function(e){return"minor"===e.mode}));return r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement("h1",{className:"mb-5"},"Key Signatures"),r.a.createElement(v.a,{container:!0,style:{textAlign:"left"}},r.a.createElement(g.a,{component:"fieldset"},r.a.createElement("label",null,"Major Keys:"),r.a.createElement(b.a,{row:!0},a.map((function(e){return r.a.createElement(v.a,{item:!0,key:e.id,xs:6,sm:3},r.a.createElement(g.a,{key:e.id},r.a.createElement(E.a,{control:r.a.createElement(x.a,{checked:e.value,onChange:n(e.id),name:e.name}),label:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e.img,alt:e.label,style:{height:50}})," "+e.label)})))}))),r.a.createElement("label",null,"Minor Keys:"),r.a.createElement(b.a,{row:!0},o.map((function(e){return r.a.createElement(v.a,{item:!0,key:e.id,xs:6,sm:3},r.a.createElement(g.a,{key:e.id},r.a.createElement(E.a,{control:r.a.createElement(x.a,{checked:e.value,onChange:n(e.id),name:e.name}),label:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e.img,alt:e.label,style:{height:50}})," "+e.label)})))}))))),r.a.createElement("br",null),r.a.createElement(f.a,{onClick:this.back},"Back"),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.continue},"Next"))}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleChange;return r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement("h1",{className:"mb-5"},"Time Signatures"),r.a.createElement(g.a,{component:"fieldset"},r.a.createElement(b.a,{row:!0},t.Times.map((function(e){return r.a.createElement(g.a,{key:e.id},r.a.createElement(E.a,{control:r.a.createElement(x.a,{checked:e.value,onChange:n(e.id),name:e.name}),label:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e.img,alt:e.label,style:{height:50}})," "+e.label)}))})))),r.a.createElement("br",null),r.a.createElement(f.a,{onClick:this.back},"Back"),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.continue},"Next"))}}]),n}(a.Component),C=n(169),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.generate(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleChange;return r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement("h1",{className:"mb-5"},"Miscellaneous Options"),r.a.createElement("label",null,"Number of Bars:"),r.a.createElement(C.a,{defaultValue:t.numBars,value:t.numBars,onChange:n,valueLabelDisplay:"on",step:1,min:2,max:50}),r.a.createElement("br",null),r.a.createElement(f.a,{onClick:this.back},"Back"),r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:this.continue},"Generate"))}}]),n}(a.Component),j=n(85),B=n.n(j),k=n(84),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={dataReady:!1},a.osmd=void 0,a.divRef=r.a.createRef(),a}return Object(m.a)(n,[{key:"setupOsmd",value:function(){var e=this,t={autoResize:void 0===this.props.autoResize||this.props.autoResize,drawTitle:void 0===this.props.drawTitle||this.props.drawTitle};this.osmd=new k.OpenSheetMusicDisplay(this.divRef.current,t),this.osmd.load(this.props.file).then((function(){return e.osmd.render()}))}},{key:"resize",value:function(){this.forceUpdate()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.drawTitle!==e.drawTitle?this.setupOsmd():this.osmd.load(this.props.file).then((function(){return t.osmd.render()})),window.addEventListener("resize",this.resize)}},{key:"componentDidMount",value:function(){this.setupOsmd()}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.divRef})}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(c.a)(this,n);var r=(a=t.call(this,e)).props.xml,o=new Blob([r],{type:"text/plain"}),i=URL.createObjectURL(o);return a.state={downloadUrl:i,file:r},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(h.a,{maxWidth:"xl"},r.a.createElement(A,{file:this.state.file}),r.a.createElement(f.a,{href:this.state.downloadUrl,title:"Download musicXML File",download:"generated_passage.musicxml",color:"primary"},"Download ",r.a.createElement(B.a,null)))}}]),n}(a.Component),w=n(99);function F(e,t){var n=e.notes[Math.floor(Math.random()*e.notes.length)],a=Math.floor(2*Math.random())+4,r=Math.floor(2*Math.random())+2;if(t>=4)var o=[8,4,2,1][Math.floor(4*Math.random())];else o=t>=2?[4,2,1][Math.floor(3*Math.random())]:t>=1?[2,1][Math.floor(2*Math.random())]:1;if(1===o){var i="eighth";t-=.5;var l=1}else 2===o?(i="quarter",t-=1,l=[2,1][Math.floor(2*Math.random())]):4===o?(i="half",t-=2,l=[4,2,1][Math.floor(3*Math.random())]):8===o&&(i="whole",t-=4,l=[4,2,1][Math.floor(3*Math.random())]);var s=n,c=[];if(1===l){var m=2,u="eighth",d=e.notes[[e.notes.indexOf(s),(e.notes.indexOf(s)+2)%e.notes.length,(e.notes.indexOf(s)+5)%e.notes.length][Math.floor(3*Math.random())]];for(c.push(d);m<=o;){var h=e.notes[[e.notes.indexOf(s),(e.notes.indexOf(s)+1)%e.notes.length,(e.notes.indexOf(s)+2)%e.notes.length,(e.notes.indexOf(s)+5)%e.notes.length,(e.notes.indexOf(s)+6)%e.notes.length][Math.floor(5*Math.random())]];c.push(h),s=h,m++}}else if(2===l)for(m=4,u="quarter",d=e.notes[[e.notes.indexOf(s),(e.notes.indexOf(s)+2)%e.notes.length,(e.notes.indexOf(s)+5)%e.notes.length][Math.floor(3*Math.random())]],c.push(d);m<=o;)h=e.notes[[e.notes.indexOf(s),(e.notes.indexOf(s)+1)%e.notes.length,(e.notes.indexOf(s)+2)%e.notes.length,(e.notes.indexOf(s)+5)%e.notes.length,(e.notes.indexOf(s)+6)%e.notes.length][Math.floor(5*Math.random())]],c.push(h),s=h,m+=2;else if(4===l)for(m=8,u="half",d=e.notes[[e.notes.indexOf(s),(e.notes.indexOf(s)+5)%e.notes.length][Math.floor(2*Math.random())]],c.push(d);m<=o;)h=e.notes[[e.notes.indexOf(s),(e.notes.indexOf(s)+1)%e.notes.length,(e.notes.indexOf(s)+2)%e.notes.length,(e.notes.indexOf(s)+5)%e.notes.length,(e.notes.indexOf(s)+6)%e.notes.length][Math.floor(5*Math.random())]],c.push(h),s=h,m+=4;var f,p="";for(f=0;f<c.length;f++)p+="            \n            <note>\n                <pitch>\n                    <step>".concat(c[f].charAt(0),"</step>\n                    <alter>").concat(c[f].slice(-2),"</alter>\n                    <octave>").concat(a,"</octave>\n                </pitch>\n                <duration>").concat(l,"</duration>\n                <type>").concat(u,"</type>\n                <staff>1</staff>\n            "),1===l&&c.length>1&&(0===f?p+='<beam number="1">begin</beam>':f===c.length-1?p+='<beam number="1">end</beam>':p+='<beam number="1">continue</beam>'),p+="\n            </note>\n        ";return[p+="\n            <backup>\n                <duration>".concat(o,"</duration>\n            </backup>\n\n            <note>\n                <pitch>\n                    <step>").concat(n.charAt(0),"</step>\n                    <alter>").concat(n.slice(-2),"</alter>\n                    <octave>").concat(r,"</octave>\n                </pitch>\n                <duration>").concat(o,"</duration>\n                <type>").concat(i,"</type>\n                <staff>2</staff>\n            </note>\n        "),t]}var S=function(e,t,n){for(var a=[],r=0;r<t.length;r++)t[r].value&&a.push(t[r]);for(var o=a[Math.floor(Math.random()*a.length)],i=[],l=0;l<e.length;l++)e[l].value&&i.push(e[l]);return function(e,t,n){var a='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\n<score-partwise version="3.1">\n    <work>\n        <work-title>Generated</work-title>\n    </work>\n    <identification>\n        <creator>SightRead</creator>\n    </identification>\n    <part-list>\n        <score-part id="P1">\n            <part-name> </part-name>\n        </score-part>\n    </part-list>\n    <part id="P1">\n        ',r=function(e,t){return"\n            <attributes>\n                <divisions>2</divisions>\n\n                <key>\n                    <fifths>".concat(e.fifths,"</fifths>\n                    <mode>").concat(e.mode,"</mode>\n                </key>\n                <time>\n                    <beats>").concat(t.num,"</beats>\n                    <beat-type>").concat(t.denom,'</beat-type>\n                </time>\n\n                <staves>2</staves>\n                    <clef number="1">\n                        <sign>G</sign>\n                        <line>2</line>\n                    </clef>\n                    <clef number="2">\n                        <sign>F</sign>\n                        <line>4</line>\n                    </clef>\n            </attributes >\n    ')}(e,t);a+='\n        <measure number="1">\n    '.concat(r,"\n  ");for(var o=t.crotchetBeats;o>0;){var i=F(e,o),l=i[0];o=i[1],a+=l}a+="\n        </measure>\n    ";for(var s=n-1,c=2;c<=s;){for(a+='\n        <measure number="'.concat(c,'">\n        '),o=t.crotchetBeats;o>0;){var m=F(e,o),u=Object(w.a)(m,2);l=u[0],o=u[1],a+=l}a+="\n        </measure>\n        ",c++}var d=e.notes[[(e.notes.indexOf(e.name)+2)%e.notes.length,(e.notes.indexOf(e.name)+5)%e.notes.length][Math.floor(2*Math.random())]],h=Math.floor(2*Math.random())+4,f=Math.floor(2*Math.random())+2;return a+='\n        <measure number="'.concat(s+1,'">\n            <note>\n                <pitch>\n                    <step>').concat(d.charAt(0),"</step>\n                    <alter>").concat(d.slice(-2),"</alter>\n                    <octave>").concat(h,"</octave>\n                </pitch>\n                <duration>8</duration>\n                <type>whole</type>\n                <staff>1</staff>\n            </note>\n\n            <backup>\n                <duration>8</duration>\n            </backup>\n\n            <note>\n                <pitch>\n                    <step>").concat(e.name.charAt(0),"</step>\n                    <alter>").concat(e.name.slice(-2),"</alter>\n                    <octave>").concat(f,'</octave>\n                </pitch>\n                <duration>8</duration>\n                <type>whole</type>\n                <staff>2</staff>\n            </note>\n            <barline location="right">\n                <bar-style>light-heavy</bar-style>\n            </barline>\n        </measure>'),a+="\n    </part>\n</score-partwise>"}(i[Math.floor(Math.random()*i.length)],o,n)},G=n(53),T=n.n(G),N=n(54),R=n.n(N),K=n(55),W=n.n(K),L=n(56),U=n.n(L),z=n(57),I=n.n(z),P=n(58),X=n.n(P),H=n(59),q=n.n(H),J=n(60),V=n.n(J),Y=n(61),$=n.n(Y),_=n(86),Q=n.n(_),Z=n(62),ee=n.n(Z),te=n(63),ne=n.n(te),ae=n(64),re=n.n(ae),oe=n(65),ie=n.n(oe),le=n(66),se=n.n(le),ce=n(87),me=n.n(ce),ue=n(88),de=n.n(ue),he=n(89),fe=n.n(he),pe=n(90),ve=n.n(pe),ge=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numBars:12,step:1,Keys:[{id:0,fifths:0,label:"C\xa0Major",name:"C+0",img:T.a,value:!0,mode:"major",notes:["A+0","B+0","C+0","D+0","E+0","F+0","G+0"]},{id:1,fifths:1,label:"G\xa0Major",name:"G+0",img:V.a,value:!0,mode:"major",notes:["A+0","B+0","C+0","D+0","E+0","F+1","G+0"]},{id:2,fifths:2,label:"D\xa0Major",name:"D+0",img:I.a,value:!0,mode:"major",notes:["A+0","B+0","C+1","D+0","E+0","F+1","G+0"]},{id:3,fifths:3,label:"A\xa0Major",name:"A+0",img:R.a,value:!0,mode:"major",notes:["A+0","B+0","C+1","D+0","E+0","F+1","G+1"]},{id:4,fifths:4,label:"E\xa0Major",name:"E+0",img:X.a,value:!0,mode:"major",notes:["A+0","B+0","C+1","D+1","E+0","F+1","G+1"]},{id:5,fifths:5,label:"B\xa0Major",name:"B+0",img:W.a,value:!0,mode:"major",notes:["A+1","B+0","C+1","D+1","E+0","F+1","G+1"]},{id:6,fifths:6,label:"F#\xa0Major",name:"F+1",img:q.a,value:!0,mode:"major",notes:["A+1","B+0","C+1","D+1","E+1","F+1","G+1"]},{id:7,fifths:7,label:"C#\xa0Major",name:"C+1",img:U.a,value:!0,mode:"major",notes:["A+1","B+1","C+1","D+1","E+1","F+1","G+1"]},{id:8,fifths:-1,label:"F\xa0Major",name:"F+0",img:ie.a,value:!0,mode:"major",notes:["A+0","B-1","C+0","D+0","E+0","F+0","G+0"]},{id:9,fifths:-2,label:"Bb\xa0Major",name:"B-1",img:ee.a,value:!0,mode:"major",notes:["A+0","B-1","C+0","D+0","E-1","F+0","G+0"]},{id:10,fifths:-3,label:"Eb\xa0Major",name:"E-1",img:re.a,value:!0,mode:"major",notes:["A-1","B-1","C+0","D+0","E-1","F+0","G+0"]},{id:11,fifths:-4,label:"Ab\xa0Major",name:"A-1",img:$.a,value:!0,mode:"major",notes:["A-1","B-1","C+0","D-1","E-1","F+0","G+0"]},{id:12,fifths:-5,label:"Db\xa0Major",name:"D-1",img:ne.a,value:!0,mode:"major",notes:["A-1","B-1","C+0","D-1","E-1","F+0","G-1"]},{id:13,fifths:-6,label:"Gb\xa0Major",name:"G-1",img:se.a,value:!0,mode:"major",notes:["A-1","B-1","C-1","D-1","E-1","F+0","G-1"]},{id:14,fifths:0,label:"A\xa0Minor",name:"A+0",img:T.a,value:!0,mode:"minor",notes:["A+0","B+0","C+0","D+0","E+0","F+0","G+1"]},{id:15,fifths:1,label:"E\xa0Minor",name:"E+0",img:V.a,value:!0,mode:"minor",notes:["A+0","B+0","C+0","D+1","E+0","F+1","G+0"]},{id:16,fifths:2,label:"B\xa0Minor",name:"B+0",img:I.a,value:!0,mode:"minor",notes:["A+1","B+0","C+1","D+0","E+0","F+1","G+0"]},{id:17,fifths:3,label:"F#\xa0Minor",name:"F+1",img:R.a,value:!0,mode:"minor",notes:["A+0","B+0","C+1","D+0","E+1","F+1","G+1"]},{id:18,fifths:4,label:"C#\xa0Minor",name:"C+1",img:X.a,value:!0,mode:"minor",notes:["A+0","B+1","C+1","D+1","E+0","F+1","G+1"]},{id:19,fifths:5,label:"G#\xa0Minor",name:"G+1",img:W.a,value:!0,mode:"minor",notes:["A+1","B+0","C+1","D+1","E+0","F+2","G+1"]},{id:20,fifths:6,label:"D#\xa0Minor",name:"D+1",img:q.a,value:!0,mode:"minor",notes:["A+1","B+0","C+2","D+1","E+1","F+1","G+1"]},{id:21,fifths:7,label:"A#\xa0Minor",name:"A+1",img:U.a,value:!0,mode:"minor",notes:["A+1","B+1","C+1","D+1","E+1","F+1","G+2"]},{id:22,fifths:-1,label:"D\xa0Minor",name:"D+0",img:ie.a,value:!0,mode:"minor",notes:["A+0","B-1","C+1","D+0","E+0","F+0","G+0"]},{id:23,fifths:-2,label:"G\xa0Minor",name:"G+0",img:ee.a,value:!0,mode:"minor",notes:["A+0","B-1","C+0","D+0","E-1","F+1","G+0"]},{id:24,fifths:-3,label:"C\xa0Minor",name:"C+0",img:re.a,value:!0,mode:"minor",notes:["A-1","B+0","C+0","D+0","E-1","F+0","G+0"]},{id:25,fifths:-4,label:"F\xa0Minor",name:"F+0",img:$.a,value:!0,mode:"minor",notes:["A-1","B-1","C+0","D-1","E+0","F+0","G+0"]},{id:26,fifths:-5,label:"Bb\xa0Minor",name:"B-1",img:ne.a,value:!0,mode:"minor",notes:["A+0","B-1","C+0","D-1","E-1","F+0","G-1"]},{id:27,fifths:-6,label:"Eb\xa0Minor",name:"E-1",img:se.a,value:!0,mode:"minor",notes:["A-1","B-1","C-1","D+0","E-1","F+0","G-1"]},{id:28,fifths:-7,label:"Ab\xa0Minor",name:"A-1",img:Q.a,value:!0,mode:"minor",notes:["A-1","B-1","C-1","D-1","E-1","F-1","G+0"]}],Times:[{id:0,label:"3/4",name:"threefour",img:me.a,value:!0,num:3,denom:4,crotchetBeats:3},{id:1,label:"4/4",name:"fourfour",img:de.a,value:!0,num:4,denom:4,crotchetBeats:4},{id:2,label:"6/8",name:"sixeight",img:fe.a,value:!0,num:6,denom:8,crotchetBeats:3},{id:3,label:"7/8",name:"sevenseight",img:ve.a,value:!0,num:7,denom:8,crotchetBeats:3.5}]},e.generate=function(){var t=e.state,n=t.Keys,a=t.Times,r=t.numBars;e.setState({xml:S(n,a,r)})},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleKeyChange=function(t){return function(n){e.state.Keys[t].value=n.target.checked,e.forceUpdate()}},e.handleTimeChange=function(t){return function(n){e.state.Times[t].value=n.target.checked,e.forceUpdate()}},e.handleSliderChange=function(t,n){e.setState({numBars:n})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.step,n=e.xml,a=e.numBars,o={Keys:e.Keys,Times:e.Times,numBars:a};switch(t){case 1:return r.a.createElement(p,{nextStep:this.nextStep});case 2:return r.a.createElement(y,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleKeyChange,values:o});case 3:return r.a.createElement(M,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleTimeChange,values:o});case 4:return r.a.createElement(O,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleSliderChange,generate:this.generate,values:o});case 5:return r.a.createElement(D,{xml:n});default:return"Unknown stepIndex"}}}]),n}(a.Component),be=n(165),Ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement(be.a,{style:{textAlign:"center",padding:"25px 0 25px 0",margin:"25px 0 25px 0"}},r.a.createElement(ge,null))))},xe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement(be.a,{style:{padding:"25px",margin:"25px 0 25px 0"}},r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"SightRead is a simple React web app that generates and displays a short passage of music, using the MusicXML format, based on user inputs."),r.a.createElement("p",null,"Current features include:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Selecting Key Signatures"),r.a.createElement("li",null,"Selecting Time Signatures"),r.a.createElement("li",null,"Selecting Number of Bars"),r.a.createElement("li",null,"Generating MusicXML file")),r.a.createElement("br",null),r.a.createElement("p",null,"Checkout the project on GitHub: ",r.a.createElement("a",{href:"https://github.com/toodom02/sightread"},"SightRead")),r.a.createElement("h6",{align:"center"},"Copyright \xa9 2020 - Dominic Too"))))},ye=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{className:"text-center align-middle",style:{color:"White"}},r.a.createElement("h1",null,"Oops!"),r.a.createElement("p",null,"Something went wrong."),r.a.createElement(f.a,{variant:"contained",color:"primary",href:"./",style:{color:"White"}},"Home")))},Me=n(44),Ce=n(45);function Oe(){var e=Object(Me.a)(["\n    .layout {\n        padding-top: 50px;\n    }\n"]);return Oe=function(){return e},e}var je=Ce.a.div(Oe()),Be=function(e){return r.a.createElement(je,null,r.a.createElement("div",{className:"layout"},e.children))},ke=n(166),Ae=n(167);function De(){var e=Object(Me.a)(["\n    .navbar {\n        background-color: #f8f8f8;\n    }\n    a, .navbar-nav .nav-link {\n        color: #000000;\n        &:hover{\n            text-decoration: none !important; \n            color: gray;\n        }\n    }\n"]);return De=function(){return e},e}var we=Ce.a.div(De()),Fe=function(){return r.a.createElement(we,null,r.a.createElement(ke.a,{collapseOnSelect:!0,className:"shadow",expand:"lg",variant:"light",fixed:"top"},r.a.createElement("div",{className:"container"},r.a.createElement(ke.a.Brand,{href:"/SightRead/"},r.a.createElement("b",null,"S\u266aght",r.a.createElement("font",{color:"#006666"},r.a.createElement("em",null,"Read")))),r.a.createElement(ke.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ke.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Ae.a,{className:"ml-auto"},r.a.createElement(Ae.a.Item,null,r.a.createElement(Ae.a.Link,{eventKey:"1",as:l.b,to:"/"},"Home")),r.a.createElement(Ae.a.Item,null,r.a.createElement(Ae.a.Link,{eventKey:"2",as:l.b,to:"/about"},"About")))))))};var Se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{basename:"/SightRead"},r.a.createElement(Fe,null),r.a.createElement(Be,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:Ee}),r.a.createElement(s.b,{path:"/about",component:xe}),r.a.createElement(s.b,{path:"/404",component:ye}),r.a.createElement(s.a,{to:"/404"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,n){e.exports=n.p+"static/media/Ca.8fab8632.svg"},54:function(e,t,n){e.exports=n.p+"static/media/Afs.cb69b969.svg"},55:function(e,t,n){e.exports=n.p+"static/media/Bgs.54093561.svg"},56:function(e,t,n){e.exports=n.p+"static/media/CSas.d1a321ec.svg"},57:function(e,t,n){e.exports=n.p+"static/media/Db.d0e39748.svg"},58:function(e,t,n){e.exports=n.p+"static/media/Ecs.e2e51500.svg"},59:function(e,t,n){e.exports=n.p+"static/media/FSds.2c0e9d49.svg"},60:function(e,t,n){e.exports=n.p+"static/media/Ge.fd6fce19.svg"},61:function(e,t,n){e.exports=n.p+"static/media/AFf.37fe4b58.svg"},62:function(e,t,n){e.exports=n.p+"static/media/BFg.ba718d06.svg"},63:function(e,t,n){e.exports=n.p+"static/media/DFbf.ebe5b67d.svg"},64:function(e,t,n){e.exports=n.p+"static/media/EFc.1bd3f5b0.svg"},65:function(e,t,n){e.exports=n.p+"static/media/Fd.99ae8f30.svg"},66:function(e,t,n){e.exports=n.p+"static/media/GFef.aa8470d1.svg"},86:function(e,t,n){e.exports=n.p+"static/media/Baf.e7da0d07.svg"},87:function(e,t,n){e.exports=n.p+"static/media/34.1951abfa.svg"},88:function(e,t,n){e.exports=n.p+"static/media/44.97cf058c.svg"},89:function(e,t,n){e.exports=n.p+"static/media/68.346256ab.svg"},90:function(e,t,n){e.exports=n.p+"static/media/78.075d76be.svg"}},[[104,1,2]]]);
//# sourceMappingURL=main.98dd5039.chunk.js.map