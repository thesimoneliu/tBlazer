/*! For license information please see main.c73c49132f84a95f7763.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetblazer("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),n=s("./app/shaders/plane-vertex.glsl"),o=s("./app/shaders/plane-fragment.glsl");class d{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.index=i,this.scene=h,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=()=>this.texture.image=this.image,console.log(this.texture)}createProgram(){this.program=new h.Program(this.gl,{vertex:n.default,fragment:o.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.02*-Math.PI,.02*Math.PI)}createBound({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}onResize(e,t){this.extra={x:0,y:0},this.createBound(e),this.updateX(t?t.x:0),this.updateY(t?t.y:0)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(e+this.bounds.left)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(e+this.bounds.top)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}}}},(function(e){e.h=()=>"119cd4c4d59f90a63ee0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUIsS0FBS29CLE1BQU12QyxFQUFJLEVBQ3BCTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNMEMsT0FDcEJ6QyxLQUFLSSxNQUFNRSxDQUNmLENBRUEyQyxPQUFPVCxHQUVBeEMsS0FBS2tDLFNBQ1ZsQyxLQUFLcUMsUUFBUUcsRUFBT25DLEdBQ3BCTCxLQUFLc0MsUUFBUUUsRUFBT2xDLEdBQ3RCLGtCQzFIRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YmxhemVyLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL01lZGlhLmpzIiwid2VicGFjazovL3RibGF6ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tIFwib2dsXCI7XG5cbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSBcInNoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2xcIjtcbmltcG9ydCBmcmFnbWVudCBmcm9tIFwic2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIC8vIHJldXNhYmxlIGVsZW1lbnRzXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG5cbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgLy8gVXBsb2FkIGVtcHR5IHRleHR1cmUgd2hpbGUgc291cmNlIGxvYWRpbmdcbiAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudCk7XG4gICAgLy8gdXBkYXRlIGltYWdlIHZhbHVlIHdpdGggc291cmNlIG9uY2UgbG9hZGVkXG4gICAgdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudGV4dHVyZSk7XG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIHZlcnRleCxcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdE1hcDoge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnRleHR1cmUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTWVzaCgpIHtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDIsIE1hdGguUEkgKiAwLjAyKTtcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpO1xuICAgIHRoaXMudXBkYXRlWCgpO1xuICAgIHRoaXMudXBkYXRlWSgpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLVxuICAgLS0tLS0tLS0tLS0tIEVWRU5UU1xuICAgLS0tLS0tLS0tLS0tLS0gKi9cblxuICBvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG4gICAgdGhpcy5jcmVhdGVCb3VuZChzaXplcyk7XG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbCA/IHNjcm9sbC54IDogMCk7XG4gICAgdGhpcy51cGRhdGVZKHNjcm9sbCA/IHNjcm9sbC55IDogMCk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tXG4gICAtLS0tLS0tLS0tLS0gTE9PUFMgJiBGUkFNRVNcbiAgIC0tLS0tLS0tLS0tLS0tICovXG5cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vIGhlaWdodCBpbiByZW0gcGVyY2VudGFnZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoOyAvLyB3aWR0aCBpbiByZW0gcGVyY2VudGFnZVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTtcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGg7XG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgdXBkYXRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh4ICsgdGhpcy5ib3VuZHMubGVmdCkgLyB3aW5kb3cuaW5uZXJXaWR0aDsgLy8geCBwb3NpdGlvbiBpbiByZW0gcGVyY2VudGFnZVxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID1cbiAgICAgIC10aGlzLnNpemVzLndpZHRoIC8gMiArXG4gICAgICB0aGlzLm1lc2guc2NhbGUueCAvIDIgK1xuICAgICAgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArXG4gICAgICB0aGlzLmV4dHJhLng7XG4gIH1cblxuICB1cGRhdGVZKHkgPSAwKSB7XG4gICAgdGhpcy55ID0gKHkgKyB0aGlzLmJvdW5kcy50b3ApIC8gd2luZG93LmlubmVySGVpZ2h0OyAvLyB5IHBvc2l0aW9uIGluIHJlbSBwZXJjZW50YWdlXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuICAgICAgdGhpcy5zaXplcy5oZWlnaHQgLyAyIC1cbiAgICAgIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtXG4gICAgICB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCArXG4gICAgICB0aGlzLmV4dHJhLnk7XG4gIH1cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgLy8gcG9zaXRpb24gY2hhbmdlIGJhc2VkIG9uIHNjcm9sbCBldmVudFxuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVybjtcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpO1xuICAgIHRoaXMudXBkYXRlWShzY3JvbGwueSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExOWNkNGM0ZDU5ZjkwYTYzZWUwXCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5IiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsIndpbmRvdyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJyb3RhdGlvbiIsInoiLCJHU0FQIiwiTWF0aCIsIlBJIiwiY3JlYXRlQm91bmQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwib25SZXNpemUiLCJzY3JvbGwiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9