"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3119],{3119:function(o,e,i){i.d(e,{Collider:function(){return c}});var s=i(2060);function t(o,e,i,t,n,a){const d=(0,s.uZ)(o.options.collisions.absorb.speed*n.factor/10,0,t);o.size.value+=.5*d,i.size.value-=d,t<=a&&(i.size.value=0,i.destroy())}const n=o=>{void 0===o.collisionMaxSpeed&&(o.collisionMaxSpeed=(0,s.Gu)(o.options.collisions.maxSpeed)),o.velocity.length>o.collisionMaxSpeed&&(o.velocity.length=o.collisionMaxSpeed)};function a(o,e){(0,s.kR)((0,s.gy)(o),(0,s.gy)(e)),n(o),n(e)}function d(o,e,i,s){switch(o.options.collisions.mode){case"absorb":!function(o,e,i,s){const n=o.getRadius(),a=e.getRadius();void 0===n&&void 0!==a?o.destroy():void 0!==n&&void 0===a?e.destroy():void 0!==n&&void 0!==a&&(n>=a?t(o,0,e,a,i,s):t(e,0,o,n,i,s))}(o,e,i,s);break;case"bounce":a(o,e);break;case"destroy":!function(o,e){o.unbreakable||e.unbreakable||a(o,e),void 0===o.getRadius()&&void 0!==e.getRadius()?o.destroy():void 0!==o.getRadius()&&void 0===e.getRadius()?e.destroy():void 0!==o.getRadius()&&void 0!==e.getRadius()&&(o.getRadius()>=e.getRadius()?e:o).destroy()}(o,e)}}class c extends s.$S{constructor(o){super(o)}clear(){}init(){}interact(o,e){if(o.destroyed||o.spawning)return;const i=this.container,t=o.getPosition(),n=o.getRadius(),a=i.particles.quadTree.queryCircle(t,2*n);for(const c of a){if(o===c||!c.options.collisions.enable||o.options.collisions.mode!==c.options.collisions.mode||c.destroyed||c.spawning)continue;const a=c.getPosition(),l=c.getRadius();if(Math.abs(Math.round(t.z)-Math.round(a.z))>n+l)continue;(0,s.Sp)(t,a)>n+l||d(o,c,e,i.retina.pixelRatio)}}isEnabled(o){return o.options.collisions.enable}reset(){}}}}]);