"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{692:function(n,a,c){c.d(a,{CircleDrawer:function(){return s}});var e=c(2060);const i=2*Math.PI,t=0,r=0;class s{draw(n){!function(n){const{context:a,particle:c,radius:e}=n;c.circleRange||(c.circleRange={min:0,max:i});const s=c.circleRange;a.arc(t,r,e,s.min,s.max,!1)}(n)}getSidesCount(){return 12}particleInit(n,a){const c=a.shapeData?.angle??{max:360,min:0};a.circleRange=(0,e.Kn)(c)?{min:(0,e.Id)(c.min),max:(0,e.Id)(c.max)}:{min:0,max:(0,e.Id)(c)}}}}}]);