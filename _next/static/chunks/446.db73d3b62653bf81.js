"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{446:function(t,i,n){n.d(i,{Connector:function(){return r}});var o=n(2060);class e{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class s{constructor(){this.distance=80,this.links=new e,this.radius=60}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links),void 0!==t.radius&&(this.radius=t.radius))}}function c(t,i,n,e){const s=t.actualOptions.interactivity.modes.connect;if(s)return function(t,i,n,e){const s=Math.floor(n.getRadius()/i.getRadius()),c=i.getFillColor(),a=n.getFillColor();if(!c||!a)return;const r=i.getPosition(),d=n.getPosition(),u=(0,o.oc)(c,a,i.getRadius(),n.getRadius()),l=t.createLinearGradient(r.x,r.y,d.x,d.y);return l.addColorStop(0,(0,o.vz)(c,e)),l.addColorStop((0,o.uZ)(s,0,1),(0,o.iz)(u,e)),l.addColorStop(1,(0,o.vz)(a,e)),l}(i,n,e,s.links.opacity)}function a(t,i,n){t.canvas.draw((e=>{const s=c(t,e,i,n);if(!s)return;const a=i.getPosition(),r=n.getPosition();!function(t,i,n,e,s){(0,o.pS)(t,e,s),t.lineWidth=i,t.strokeStyle=n,t.stroke()}(e,i.retina.linksWidth??0,s,a,r)}))}class r extends o.L8{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){const i=t.interactivity.mouse.position,{connectModeDistance:n,connectModeRadius:o}=t.retina;if(!n||n<0||!o||o<0||!i)return;const e=Math.abs(o),s=t.particles.quadTree.queryCircle(i,e,(t=>this.isEnabled(t)));s.forEach(((i,o)=>{const e=i.getPosition();for(const c of s.slice(o+1)){const o=c.getPosition(),s=Math.abs(n),r=Math.abs(e.x-o.x),d=Math.abs(e.y-o.y);r<s&&d<s&&a(t,i,c)}}))}}isEnabled(t){const i=this.container,n=i.interactivity.mouse,e=(t?.interactivity??i.actualOptions.interactivity).events;return!(!e.onHover.enable||!n.position)&&(0,o.dB)("connect",e.onHover.mode)}loadModeOptions(t,...i){t.connect||(t.connect=new s);for(const n of i)t.connect.load(n?.connect)}reset(){}}}}]);