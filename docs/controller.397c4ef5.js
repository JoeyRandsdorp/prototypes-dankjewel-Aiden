function t(t,e,s,i){Object.defineProperty(t,e,{get:s,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=s.parcelRequirefac4;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var s={id:t,exports:{}};return i[t]=s,e.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},s.parcelRequirefac4=o),o.register("27Lyk",(function(e,s){var i,n;t(e.exports,"register",(()=>i),(t=>i=t)),t(e.exports,"resolve",(()=>n),(t=>n=t));var o={};i=function(t){for(var e=Object.keys(t),s=0;s<e.length;s++)o[e[s]]=t[e[s]]},n=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"6DHNs":"controller.397c4ef5.js","j35bh":"Char1_1.353fe21a.png","7PbZH":"test_background2.3b768567.jpg","2IBRc":"test_ground2.34569c95.jpg","9hto7":"audio.fcc44636.js"}'));var r=o("31xg4");const a=document.createElement("template");a.innerHTML="\n<style>\n:host {\n    position:           absolute;\n    top:                10px;\n    right:              10px;\n}\nroot {\n    top:                10px;\n    right:              10px;\n    width:              289px; \n    height:             120px;\n    display:            block;\n    background-color:   #75a8f77a;\n}\nroot * {\n    position:           relative;\n}\n.button-wrapper, .axes-wrapper {\n    display:            flex;\n    flex-wrap:          wrap;\n    float:              left;\n}\nroot .button-div {\n    border: solid 1px black;\n    width:              60px;\n    margin:             5px;\n    padding:            5px;\n}\n.button-wrapper {\n    width:              164px;\n}\n.axes-wrapper {\n    width:              115px;\n    margin:             5px;\n}\n.axes-cell {\n    width:              25px;  \n    height:             25px; \n    margin:             5px;  \n    border:             solid 1px transparent;\n}\n.axes-cell.direction {\n    border:             solid 1px black;\n}\n.axes-cell.center{\n    border:             solid 1px black;\n    background-color:   blue;\n}\n.axes-cell.active{\n    background-color:   red;\n}\n.identifier{\n    position:           absolute;\n    top:                5px;\n    left:               5px;\n    width:              auto;\n    font-weight:        bold;\n    color:              #fff;\n}\n</style>";class d extends HTMLElement{panelHeight=120;panelSpacing=10;buttonDivs=[];Axes=[];constructor(t,e){super(),this.joystick=t,this.numberOfButtons=e;let s=this.panelSpacing+this.joystick.JoystickNumber*(this.panelHeight+this.panelSpacing);this.style.top=s+"px",this.rootElement=document.createElement("root"),this.rootElement.style.height=this.panelHeight+"px",a.appendChild(this.rootElement);let i=document.createElement("div");if(i.classList.add("identifier"),i.innerHTML="#"+this.joystick.JoystickNumber,this.rootElement.appendChild(i),this.createHTMLForAxes(),this.createHTMLForButtons(),this.createListenersForButtons(),this.attachShadow({mode:"open"}),this.shadowRoot){let t=a.content.cloneNode(!0);t.appendChild(this.rootElement),this.shadowRoot.appendChild(t)}document.body.appendChild(this)}createListenersForButtons(){for(let t=0;t<this.numberOfButtons;t++)document.addEventListener(this.joystick.ButtonEvents[t],(e=>this.handleButtonClicks(e,t)))}handleButtonClicks(t,e){this.buttonDivs[e].style.filter="hue-rotate("+360*Math.random()+"deg)"}createHTMLForButtons(){let t=document.createElement("div");t.className="button-wrapper";for(let e=0;e<this.numberOfButtons;e++){let s=document.createElement("div");s.className="button-div",t.appendChild(s),s.style.backgroundColor="blue",s.innerHTML="Button "+(e+1),this.buttonDivs.push(s)}this.rootElement.appendChild(t)}createHTMLForAxes(){let t=document.createElement("div");t.className="axes-wrapper";for(let e=1;e<=9;e++){let s=document.createElement("div");switch(s.className="axes-cell",e%2==0&&s.classList.add("direction"),5==e&&s.classList.add("center"),t.appendChild(s),e){case 2:this.up=s;break;case 4:this.left=s;break;case 6:this.right=s;break;case 8:this.down=s}}this.rootElement.appendChild(t)}update(){0==this.Axes[0]?(this.left.classList.remove("active"),this.right.classList.remove("active")):this.Axes[0]<0?this.left.classList.add("active"):this.Axes[0]>0&&this.right.classList.add("active"),0==this.Axes[1]?(this.up.classList.remove("active"),this.down.classList.remove("active")):this.Axes[1]<0?this.up.classList.add("active"):this.Axes[1]>0&&this.down.classList.add("active")}}window.customElements.define("debug-panel",d);class h{DEBUG=!0;BUT1=8;BUT2=9;joystickNumber=0;numberOfBUttons=0;buttonEvents=[];axes=[];get Left(){return-1==this.axes[0]}get Right(){return 1==this.axes[0]}get Up(){return-1==this.axes[1]}get Down(){return 1==this.axes[1]}get Neutral(){return 0==this.axes[0]&&0==this.axes[1]}get Y(){return Math.round(this.axes[1])}get X(){return Math.round(this.axes[0])}get JoystickNumber(){return this.joystickNumber}get ButtonEvents(){return this.buttonEvents}get Gamepad(){return this.gamepad}set Gamepad(t){this.gamepad=t}get PreviousGamepad(){return this.previousGamepad}set PreviousGamepad(t){this.previousGamepad=t}constructor(t,e,s){this.joystickNumber=t,this.numberOfBUttons=e,this.DEBUG=s;for(let t=0;t<this.numberOfBUttons;t++)this.buttonEvents.push("joystick"+this.JoystickNumber+"button"+t);this.DEBUG&&(this.debugPanel=new d(this,this.numberOfBUttons))}update(){let t=navigator.getGamepads()[this.gamepad.index];t&&this.readGamepad(t)}readGamepad(t){for(let e=0;e<this.numberOfBUttons;e++)this.buttonPressed(t.buttons[e])&&!this.buttonPressed(this.previousGamepad.buttons[e])&&document.dispatchEvent(new Event(this.buttonEvents[e])),!this.buttonPressed(t.buttons[this.BUT1])||!this.buttonPressed(t.buttons[this.BUT2])||this.buttonPressed(this.previousGamepad.buttons[this.BUT1])&&this.buttonPressed(this.previousGamepad.buttons[this.BUT2])||document.dispatchEvent(new Event("redirect"));this.axes[0]=Math.round(t.axes[0]),this.axes[1]=Math.round(t.axes[1]),this.DEBUG&&(this.debugPanel.Axes[0]=this.axes[0],this.debugPanel.Axes[1]=this.axes[1],this.debugPanel.update()),this.previousGamepad=t}buttonPressed(t){return"object"==typeof t?t.pressed:1==t}destroy(){this.DEBUG&&this.debugPanel.remove()}}class c{REDIRECT_URL="http://hr-cmgt.github.io/arcade-server";multiplayer=!1;get Joysticks(){return this.joysticks}constructor(t,e=!1,s=!1){this.game=t,this.multiplayer=e,this.DEBUG=s,this.joysticks=[],this.DEBUG&&this.showStatus("Gamepad is NOT connected. Press a button to connect"),document.addEventListener("redirect",(()=>this.onRedirect())),window.addEventListener("gamepadconnected",(t=>this.onGamePadConnected(t))),window.addEventListener("gamepaddisconnected",(t=>this.onGamePadDisconnected(t)))}onRedirect(){this.DEBUG&&console.log("redirect!!"),window.location.href=this.REDIRECT_URL}onGamePadConnected(t){if(this.DEBUG&&(console.log("Game pad connected"),console.log("Joystick number: "+t.gamepad.index)),!this.multiplayer&&0==this.joysticks.length||this.multiplayer){let e=this.createAndAddJoystick(t.gamepad.index,6);e.PreviousGamepad=e.Gamepad,e.Gamepad=t.gamepad,null==e.PreviousGamepad&&(e.PreviousGamepad=t.gamepad)}this.DEBUG&&this.removeStatus()}onGamePadDisconnected(t){this.DEBUG&&console.log("Game pad disconnected"),this.DEBUG&&this.showStatus("Gamepad is NOT connected. Connect the gamepad and press a button."),this.removeJoystick(t.gamepad.index),this.game.disconnect()}createAndAddJoystick(t,e){let s=this.getJoystickByNumber(t);if(null!=s)return s;let i=new h(t,e,this.DEBUG);return this.joysticks[t]=i,i&&(document.dispatchEvent(new CustomEvent("joystickcreated",{detail:t})),console.log("joystick created")),i}removeJoystick(t){let e=this.getJoystickByNumber(t);if(null!=e){var s=this.joysticks.indexOf(e);this.joysticks[s].destroy(),s>-1&&this.joysticks.splice(s,1)}}getJoystickByNumber(t){for(let e of this.joysticks)if(e.JoystickNumber==t)return e;return null}showStatus(t){let e,s;(e=document.getElementsByTagName("status")[0])||(e=document.createElement("status"),document.body.append(e)),e&&((s=e.getElementsByTagName("p")[0])||(s=document.createElement("p"),e.appendChild(s))),s&&(s.innerHTML=t)}removeStatus(){let t;(t=document.getElementsByTagName("status")[0])&&t.remove()}}r=o("31xg4");class l extends r.Sprite{xspeed=5;yspeed=3;weigth=.3;constructor(t,e){super(t),this.width=51,this.height=72,this.x=80,this.y=60,this.joystick=e,document.addEventListener(this.joystick.ButtonEvents[0],(()=>this.jump()))}jump(){0===this.yspeed&&(this.yspeed=-9)}update(){this.x+=this.joystick.X*this.xspeed,this.y+=this.yspeed,this.yspeed+=this.weigth,this.y>500&&this.resetPosition()}resetPosition(){this.x=80,this.y=60}collisionVerticalTop(t){return!(this.x>t.x+t.width||this.x+this.width<t.x||this.y>t.y+t.height||this.y+this.height<t.y)}}r=o("31xg4");class u extends r.Sprite{constructor(t){super(t),this.x=0,this.y=350,this.width=500,this.height=70}}r=o("31xg4");class p extends r.Sprite{constructor(t,e,s){super(t),this.width=e,this.height=s}}var m;m=new URL(o("27Lyk").resolve("j35bh"),import.meta.url).toString();var g;g=new URL(o("27Lyk").resolve("7PbZH"),import.meta.url).toString();var x;x=new URL(o("27Lyk").resolve("2IBRc"),import.meta.url).toString();new class{pixiWidth=800;pixiHeight=450;constructor(){this.pixi=new r.Application({width:this.pixiWidth,height:this.pixiHeight}),this.pixi.stage.interactive=!0,this.pixi.stage.hitArea=this.pixi.renderer.screen,document.body.appendChild(this.pixi.view),this.arcade=new c(this),this.loader=new r.Loader,this.loader.add("playerTexture",e(m)).add("backgroundTexture",e(g)).add("groundTexture",e(x)),this.loader.load(),console.log("waiting for joysticks to connect"),this.joystickListener=t=>this.joyStickFound(t),document.addEventListener("joystickcreated",this.joystickListener)}joyStickFound(t){let e=this.arcade.Joysticks[t.detail];for(const t of e.ButtonEvents)document.addEventListener(t,(()=>console.log(t)));this.background=new p(this.loader.resources.backgroundTexture.texture,this.pixiWidth,this.pixiHeight),this.pixi.stage.addChild(this.background),this.ground=new u(this.loader.resources.groundTexture.texture),this.pixi.stage.addChild(this.ground),this.player=new l(this.loader.resources.playerTexture.texture,e),this.pixi.stage.addChild(this.player),this.pixi.ticker.add((t=>this.update()))}update(){for(let t of this.arcade.Joysticks)t.update();this.player.update(),this.player.collisionVerticalTop(this.ground)&&this.player.y+this.player.height<this.ground.y+this.player.yspeed&&(this.player.y=this.ground.y-this.player.height,this.player.yspeed=0)}disconnect(){document.removeEventListener("joystickcreated",this.joystickListener)}};
//# sourceMappingURL=controller.397c4ef5.js.map
