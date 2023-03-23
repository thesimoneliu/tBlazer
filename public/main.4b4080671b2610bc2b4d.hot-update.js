/*! For license information please see main.4b4080671b2610bc2b4d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetblazer("main",{"./app/components/Canvas/About/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),h=e.n(o),l=e("./app/components/Canvas/About/Media.js");class n{constructor({element:t,index:s,geometry:e,gl:r,scene:o,sizes:h}){this.index=s,this.element=t,this.elementWrapper=t.querySelector(".about__gallery__wrapper"),this.geometry=e,this.gl=r,this.scene=o,this.sizes=h,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,ease:.1,velocity:1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=document.querySelectorAll(".about__gallery__image"),this.medias=h()(this.mediasElements,((t,s)=>new l.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){h()(this.medias,(t=>t.show()))}hide(){h()(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.elementWrapper.getBoundingClientRect(),this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,h()(this.medias,(s=>s.onResize(t,this.scroll.current)))}onTouchDown({x:t,y:s}){this.scroll.start=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:t,y:s}){}update(t){if(!this.bounds)return;const s=t.current-t.target,e=t.current/window.innerHeight;this.scroll.current<this.scroll.target?(this.direction="right",this.scroll.velocity=-.3):(this.direction="left",this.scroll.velocity=.3),this.scroll.target-=this.scroll.velocity+.05*s,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.ease),h()(this.medias,((t,s)=>{const e=t.mesh.scale.x/2+.25;if("left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra+=this.width)}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra-=this.width)}t.mesh.position.y=75*Math.cos(t.mesh.position.x/this.width*Math.PI)-75,t.update(this.scroll.current)})),this.group.position.y=e*this.sizes.height}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"248e8d80b80e1daaef49"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDMUJOLEVBQU13QixPQUFTNUMsS0FBSzBCLE1BRXhCLE1BQU8sR0FBdUIsVUFBbkIxQixLQUFLc0MsVUFBdUIsQ0FDM0JsQixFQUFNcUIsS0FBS0UsU0FBU2IsRUFBSVUsRUFDMUJ4QyxLQUFLRCxNQUFNMkIsTUFBUSxJQUN6Qk4sRUFBTXdCLE9BQVM1QyxLQUFLMEIsTUFFeEIsQ0FFQU4sRUFBTXFCLEtBQUtFLFNBQVNaLEVBQ3lDLEdBQTNEYyxLQUFLQyxJQUFLMUIsRUFBTXFCLEtBQUtFLFNBQVNiLEVBQUk5QixLQUFLMEIsTUFBU21CLEtBQUtFLElBQVcsR0FHbEUzQixFQUFNZ0IsT0FBT3BDLEtBQUtLLE9BQU9DLFFBQVEsSUFHbkNOLEtBQUtHLE1BQU13QyxTQUFTWixFQUFJQSxFQUFJL0IsS0FBS0QsTUFBTWlELE1BQ3pDLENBTUFDLFVBQ0VqRCxLQUFLRixNQUFNb0QsWUFBWWxELEtBQUtHLE1BQzlCLGtCQzdJRmdELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YmxhemVyLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vdGJsYXplci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9nbFwiO1xuXG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IG1hcCBmcm9tIFwibG9kYXNoL21hcFwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vTWVkaWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgaW5kZXgsIGdlb21ldHJ5LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnRXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19nYWxsZXJ5X193cmFwcGVyXCIpO1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKCk7XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICBzdGFydDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGVhc2U6IDAuMSxcbiAgICAgIHZlbG9jaXR5OiAxLFxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZU1lZGlhcygpO1xuICAgIHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuICB9XG5cbiAgY3JlYXRlTWVkaWFzKCkge1xuICAgIHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFib3V0X19nYWxsZXJ5X19pbWFnZVwiKTtcblxuICAgIHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBNZWRpYSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICAgIHNjZW5lOiB0aGlzLmdyb3VwLFxuICAgICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLVxuICAgLS0tLS0tLS0tLS0tIEFOSU1BVElPTlNcbiAgIC0tLS0tLS0tLS0tLS0tICovXG5cbiAgLy8gaW1hZ2VzIGZhZGUgaW4gYW5kIG91dCBlZmZlY3RcbiAgc2hvdygpIHtcbiAgICBtYXAodGhpcy5tZWRpYXMsIChtZWRpYSkgPT4gbWVkaWEuc2hvdygpKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IG1lZGlhLmhpZGUoKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tXG4gICAtLS0tLS0tLS0tLS0gRVZFTlRTXG4gICAtLS0tLS0tLS0tLS0tLSAqL1xuXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5zaXplcyA9IGV2ZW50LnNpemVzO1xuXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoO1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwO1xuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEpID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSk7XG4gIH1cblxuICBvblRvdWNoRG93bih7IHgsIHkgfSkge1xuICAgIHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudDtcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG4gICAgY29uc3QgZGlzdCA9IHguc3RhcnQgLSB4LmVuZDtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3Q7XG4gIH1cblxuICBvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cbiAgLyogLS0tLS0tLS0tLS0tLVxuICAgLS0tLS0tLS0tLS0tIExPT1BTICYgRlJBTUVTXG4gICAtLS0tLS0tLS0tLS0tLSAqL1xuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuO1xuXG4gICAgY29uc3QgZGlzdCA9IHNjcm9sbC5jdXJyZW50IC0gc2Nyb2xsLnRhcmdldDtcbiAgICBjb25zdCB5ID0gc2Nyb2xsLmN1cnJlbnQgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IC0wLjM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XG4gICAgICB0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IDAuMztcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHkgKyBkaXN0ICogMC4wNTsgLy8gc3luYyB3aXRoIHBhZ2Ugc2Nyb2xsXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICB0aGlzLnNjcm9sbC5lYXNlXG4gICAgKTtcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMiArIDAuMjU7XG5cbiAgICAgIC8vIGhvcml6b250YWwgc2Nyb2xsXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVg7IC8vY2hlY2sgdGhlIGxlZnQgZWRnZSBvZiB0aGUgaW1hZ2VcbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICBtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoOyAvLyBtb3ZlIHRvIHRoZSByaWdodCBzaWRlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYOyAvL2NoZWNrIHRoZSByaWdodCBlZGdlIG9mIHRoZSBpbWFnZVxuICAgICAgICBpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG4gICAgICAgICAgbWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aDsgLy8gbW92ZSB0byB0aGUgbGVmdCBzaWRlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVkaWEubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgICAgTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMud2lkdGgpICogTWF0aC5QSSkgKiA3NSAtIDc1O1xuXG4gICAgICAvLyB1cGRhdGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdyb3VwLnBvc2l0aW9uLnkgPSB5ICogdGhpcy5zaXplcy5oZWlnaHQ7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tXG4gICAtLS0tLS0tLS0tLS0gREVTVFJPWVxuICAgLS0tLS0tLS0tLS0tLS0gKi9cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI0OGU4ZDgwYjgwZTFkYWFlZjQ5XCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJpbmRleCIsImdlb21ldHJ5IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImVsZW1lbnRXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwiVHJhbnNmb3JtIiwic2Nyb2xsIiwiY3VycmVudCIsInN0YXJ0IiwidGFyZ2V0IiwiZWFzZSIsInZlbG9jaXR5IiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJtYXAiLCJNZWRpYSIsInNob3ciLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdCIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImlubmVySGVpZ2h0IiwiZGlyZWN0aW9uIiwiR1NBUCIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJNYXRoIiwiY29zIiwiUEkiLCJoZWlnaHQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=