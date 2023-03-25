/*! For license information please see main.451413f4b4a34c09a8f2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatetblazer("main",{"./app/components/Canvas/Detail/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./app/shaders/plane-vertex.glsl"),o=s("./app/shaders/plane-fragment.glsl");class r{constructor({gl:e,scene:t,sizes:s,transition:h}){this.gl=e,this.scene=t,this.sizes=s,this.transition=h,this.geometry=new i.Plane(this.gl),this.element=document.querySelector(".detail__media__image"),this.createTexture(),this.createProgram(),this.createMesh(),this.show()}createTexture(){const e=this.element.getAttribute("data-src");this.texture=window.TEXTURES[e]}createProgram(){this.program=new h.Program(this.gl,{vertex:n.default,fragment:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBound({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){this.transition&&this.transition.animate((e=>{this.program.uniforms.uAlpha.value=1}))}hide(){}onResize(e){this.createBound(e),this.updateX(),this.updateY()}onTouchDown(){}onTouchMove(){}onTouchUp(){}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(){this.y=this.bounds.top/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(){this.bounds&&(this.updateX(),this.updateY())}}}},(function(e){e.h=()=>"a49c1cc5f8ec6fd94aeb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NTE0MTNmNGI0YTM0YzA5YThmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K1ZBT2UsTUFBTUEsRUFDbkJDLGFBQVksR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLEVBQUssV0FBRUMsSUFDOUJDLEtBQUtKLEdBQUtBLEVBQ1ZJLEtBQUtILE1BQVFBLEVBQ2JHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELFdBQWFBLEVBRWxCQyxLQUFLQyxTQUFXLElBQUlDLEVBQUFBLE1BQU1GLEtBQUtKLElBQy9CSSxLQUFLRyxRQUFVQyxTQUFTQyxjQUFjLHlCQUV0Q0wsS0FBS00sZ0JBQ0xOLEtBQUtPLGdCQUNMUCxLQUFLUSxhQUVMUixLQUFLUyxNQUNQLENBRUFILGdCQUNFLE1BQU1JLEVBQVFWLEtBQUtHLFFBQVFRLGFBQWEsWUFDeENYLEtBQUtZLFFBQVVDLE9BQU9DLFNBQVNKLEVBQ2pDLENBRUFILGdCQUNFUCxLQUFLZSxRQUFVLElBQUlDLEVBQUFBLFFBQVFoQixLQUFLSixHQUFJLENBQ2xDcUIsT0FBTSxVQUNOQyxTQUFRLFVBQ1JDLFNBQVUsQ0FDUkMsT0FBUSxDQUFFQyxNQUFPLEdBQ2pCQyxLQUFNLENBQ0pELE1BQU9yQixLQUFLWSxXQUlwQixDQUVBSixhQUNFUixLQUFLdUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLeEIsS0FBS0osR0FBSSxDQUM1QkssU0FBVUQsS0FBS0MsU0FDZmMsUUFBU2YsS0FBS2UsVUFFaEJmLEtBQUt1QixLQUFLRSxVQUFVekIsS0FBS0gsTUFDM0IsQ0FFQTZCLGFBQVksTUFBRTVCLElBQ1pFLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUsyQixPQUFTM0IsS0FBS0csUUFBUXlCLHdCQUUzQjVCLEtBQUs2QixZQUFZL0IsR0FDakJFLEtBQUs4QixVQUNMOUIsS0FBSytCLFNBQ1AsQ0FNQXRCLE9BQ01ULEtBQUtELFlBQ1BDLEtBQUtELFdBQVdpQyxTQUFTQyxJQUN2QmpDLEtBQUtlLFFBQVFJLFNBQVNDLE9BQU9DLE1BQVEsQ0FBQyxHQUc1QyxDQUVBYSxPQUFRLENBTVJDLFNBQVNyQyxHQUNQRSxLQUFLMEIsWUFBWTVCLEdBQ2pCRSxLQUFLOEIsVUFDTDlCLEtBQUsrQixTQUNQLENBRUFLLGNBQWUsQ0FFZkMsY0FBZSxDQUVmQyxZQUFhLENBTWJULGNBQ0U3QixLQUFLdUMsT0FBU3ZDLEtBQUsyQixPQUFPWSxPQUFTMUIsT0FBTzJCLFlBQzFDeEMsS0FBS3lDLE1BQVF6QyxLQUFLMkIsT0FBT2MsTUFBUTVCLE9BQU82QixXQUV4QzFDLEtBQUt1QixLQUFLb0IsTUFBTUMsRUFBSTVDLEtBQUtGLE1BQU0yQyxNQUFRekMsS0FBS3lDLE1BQzVDekMsS0FBS3VCLEtBQUtvQixNQUFNRSxFQUFJN0MsS0FBS0YsTUFBTXlDLE9BQVN2QyxLQUFLdUMsTUFDL0MsQ0FFQVQsVUFDRTlCLEtBQUs0QyxFQUFJNUMsS0FBSzJCLE9BQU9tQixLQUFPakMsT0FBTzZCLFdBQ25DMUMsS0FBS3VCLEtBQUt3QixTQUFTSCxHQUFLNUMsS0FBS0YsTUFBTTJDLE1BQVEsRUFBSXpDLEtBQUt1QixLQUFLb0IsTUFBTUMsRUFBSSxFQUFJNUMsS0FBSzRDLEVBQUk1QyxLQUFLRixNQUFNMkMsS0FDN0YsQ0FFQVYsVUFDRS9CLEtBQUs2QyxFQUFJN0MsS0FBSzJCLE9BQU9xQixJQUFNbkMsT0FBTzJCLFlBQ2xDeEMsS0FBS3VCLEtBQUt3QixTQUFTRixFQUFJN0MsS0FBS0YsTUFBTXlDLE9BQVMsRUFBSXZDLEtBQUt1QixLQUFLb0IsTUFBTUUsRUFBSSxFQUFJN0MsS0FBSzZDLEVBQUk3QyxLQUFLRixNQUFNeUMsTUFDN0YsQ0FFQVUsU0FDT2pELEtBQUsyQixTQUNWM0IsS0FBSzhCLFVBQ0w5QixLQUFLK0IsVUFDUCxrQkNuSEZtQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGJsYXplci8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9EZXRhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGJsYXplci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgUGxhbmUgfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSAnLi4vLi4vLi4vc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcbmltcG9ydCBmcmFnbWVudCBmcm9tICcuLi8uLi8uLi9zaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbCB7XG4gIGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgdHJhbnNpdGlvbiB9KSB7XG4gICAgdGhpcy5nbCA9IGdsXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxfX21lZGlhX19pbWFnZScpXG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcblxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZV1cbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgdmVydGV4LFxuICAgICAgZnJhZ21lbnQsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdE1hcDoge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLnRleHR1cmUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuICB9XG5cbiAgY3JlYXRlQm91bmQoeyBzaXplcyB9KSB7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG4gICAgdGhpcy51cGRhdGVYKClcbiAgICB0aGlzLnVwZGF0ZVkoKVxuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLVxuICAgLS0tLS0tLS0tLS0tIEFOSU1BVElPTlNcbiAgIC0tLS0tLS0tLS0tLS0tICovXG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZSgoXykgPT4ge1xuICAgICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gMVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge31cblxuICAvKiAtLS0tLS0tLS0tLS0tXG4gICAtLS0tLS0tLS0tLS0gRVZFTlRTXG4gICAtLS0tLS0tLS0tLS0tLSAqL1xuXG4gIG9uUmVzaXplKHNpemVzKSB7XG4gICAgdGhpcy5jcmVhdGVCb3VuZChzaXplcylcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWSgpXG4gIH1cblxuICBvblRvdWNoRG93bigpIHt9XG5cbiAgb25Ub3VjaE1vdmUoKSB7fVxuXG4gIG9uVG91Y2hVcCgpIHt9XG5cbiAgLyogLS0tLS0tLS0tLS0tLVxuICAgLS0tLS0tLS0tLS0tIExPT1BTICYgRlJBTUVTXG4gICAtLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHVwZGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0IC8vIGhlaWdodCBpbiByZW0gcGVyY2VudGFnZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoIC8vIHdpZHRoIGluIHJlbSBwZXJjZW50YWdlXG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG4gIH1cblxuICB1cGRhdGVYKCkge1xuICAgIHRoaXMueCA9IHRoaXMuYm91bmRzLmxlZnQgLyB3aW5kb3cuaW5uZXJXaWR0aCAvLyB4IHBvc2l0aW9uIGluIHJlbSBwZXJjZW50YWdlXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoXG4gIH1cblxuICB1cGRhdGVZKCkge1xuICAgIHRoaXMueSA9IHRoaXMuYm91bmRzLnRvcCAvIHdpbmRvdy5pbm5lckhlaWdodCAvLyB5IHBvc2l0aW9uIGluIHJlbSBwZXJjZW50YWdlXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSB0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuICAgIHRoaXMudXBkYXRlWCgpXG4gICAgdGhpcy51cGRhdGVZKClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTQ5YzFjYzVmOGVjNmZkOTRhZWJcIikiXSwibmFtZXMiOlsiRGV0YWlsIiwiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwic2hvdyIsImltYWdlIiwiZ2V0QXR0cmlidXRlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJjcmVhdGVCb3VuZCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJhbmltYXRlIiwiXyIsImhpZGUiLCJvblJlc2l6ZSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwieCIsInkiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=