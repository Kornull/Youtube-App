"use strict";(self.webpackChunkfinal=self.webpackChunkfinal||[]).push([[553],{7553:(K,f,o)=>{o.r(f),o.d(f,{RegistrationModule:()=>Q});var U=o(6814),w=o(9397),b=o(8180),M=o(4664),v=o(6232),q=o(6306),l=o(6223),d=o(4087),p=o(8165),x=o(617),I=o(1274),h=o(2296),Z=o(2032),c=o(9),C=o(7768),F=o(6146),t=o(9212),T=o(9922),S=o(4221);function L(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter your name!"),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const i=t.oxw();let r;t.xp6(1),t.AsE("Min name len - ",(null==(r=i.registerForm.get("name"))||null==r.errors||null==r.errors.minlength?null:r.errors.minlength.requiredLength)||"2",", name now - ",(null==(r=i.registerForm.get("name"))||null==r.errors||null==r.errors.minlength?null:r.errors.minlength.actualLength)||"0","")}}function k(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const i=t.oxw();let r;t.xp6(1),t.AsE("Max name len - ",null==(r=i.registerForm.get("name"))||null==r.errors||null==r.errors.maxlength?null:r.errors.maxlength.requiredLength,", name len now - ",null==(r=i.registerForm.get("name"))||null==r.errors||null==r.errors.maxlength?null:r.errors.maxlength.actualLength,"")}}function O(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Name cannot contain numbers or special signs."),t.qZA())}function P(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"The email is invalid! (##@##.##) "),t.qZA())}function J(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter your email! "),t.qZA())}function Y(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"User already exists!"),t.qZA())}function D(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter your password!"),t.qZA())}function z(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const i=t.oxw();let r;t.xp6(1),t.AsE("Min length password - ",null==(r=i.registerForm.get("password"))||null==r.errors||null==r.errors.minlength?null:r.errors.minlength.requiredLength,", your length - ",null==(r=i.registerForm.get("password"))||null==r.errors||null==r.errors.minlength?null:r.errors.minlength.actualLength,"")}}function B(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Your password isn't strong enough! - (!12qQ#%$S#s)"),t.qZA())}let y=(()=>{class e{constructor(i,r,n,s,m){this.regService=i,this.fb=r,this.toast=n,this.store=s,this.router=m,this.hide=!0,this.isDisabled=!0}ngOnInit(){this.store.select(F.KD).pipe((0,w.b)(i=>{i&&this.router.navigate(["/"])}),(0,b.q)(1)).subscribe(),this.registerForm=this.fb.group({name:["",[l.kI.minLength(2),l.kI.maxLength(40),l.kI.required,(0,c.qg)()]],email:["",[l.kI.email,l.kI.required,(0,c.Le)()]],password:["",[(0,c.ym)(),l.kI.minLength(8),l.kI.required]]})}onSubmit(){this.isDisabled=!1,this.regService.userSignUp({email:this.registerForm.controls.email.value,name:this.registerForm.controls.name.value,password:this.registerForm.controls.password.value}).pipe((0,M.w)(()=>(this.toast.openSnack("Registration success",!1),this.router.navigate(["./signin"]),v.E)),(0,q.K)(n=>{const{error:s}=n;return null===s&&this.toast.openSnack(n.statusText,!0),s.type===C.ZB.USER_EXIST&&(this.toast.openSnack(s.message,!0),this.registerForm.controls.email.setErrors({emailExist:!0}),this.isDisabled=!0,this.store.dispatch(F.uQ.invalidRegister({email:this.registerForm.controls.email.value}))),s.type===C.ZB.INVALID_REG_FORM&&this.toast.openSnack(s.message,!0),v.E})).subscribe()}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(T.aO),t.Y36(l.qu),t.Y36(T.cw),t.Y36(S.yh),t.Y36(d.F0))};static#r=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-registration"]],standalone:!0,features:[t._Bn([]),t.jDz],decls:35,vars:16,consts:[[1,"form-container"],[1,"form",3,"formGroup","submit"],[1,"form-title"],["color","accent",1,"form-input"],["matInput","","formControlName","name","autocomplete","off"],["matInput","","formControlName","email","autocomplete","off"],["matInput","","formControlName","password","autocomplete","new-password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit",1,"form-btn",3,"disabled"],[1,"form-link"],["routerLink","/signin",1,"form-link--click"]],template:function(r,n){if(1&r&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("submit",function(){return n.onSubmit()}),t.TgZ(2,"h2",2),t._uU(3,"Registration"),t.qZA(),t.TgZ(4,"mat-form-field",3)(5,"mat-label"),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",4),t.YNc(8,L,2,0,"mat-error")(9,N,2,2,"mat-error")(10,k,2,2,"mat-error")(11,O,2,0,"mat-error"),t.qZA(),t.TgZ(12,"mat-form-field",3)(13,"mat-label"),t._uU(14,"Email"),t.qZA(),t._UZ(15,"input",5),t.YNc(16,P,2,0,"mat-error")(17,J,2,0,"mat-error")(18,Y,2,0,"mat-error"),t.qZA(),t.TgZ(19,"mat-form-field",3)(20,"mat-label"),t._uU(21,"Enter your password!"),t.qZA(),t._UZ(22,"input",6),t.TgZ(23,"button",7),t.NdJ("click",function(){return n.hide=!n.hide}),t.TgZ(24,"mat-icon"),t._uU(25),t.qZA()(),t.YNc(26,D,2,0,"mat-error")(27,z,2,2,"mat-error")(28,B,2,0,"mat-error"),t.qZA(),t.TgZ(29,"button",8),t._uU(30," Register "),t.qZA(),t.TgZ(31,"h4",9),t._uU(32," Already have an account? \u2043\xa0 "),t.TgZ(33,"a",10),t._uU(34,"Login"),t.qZA()()()()),2&r){let s,m,A,u,E,g,R;t.xp6(1),t.Q6J("formGroup",n.registerForm),t.xp6(7),t.um2(8,n.registerForm.get("name").hasError("required")?8:-1),t.xp6(1),t.um2(9,null!=(s=n.registerForm.get("name"))&&s.hasError("minlength")&&null!=(s=n.registerForm.get("name"))&&s.touched?9:-1),t.xp6(1),t.um2(10,null!=(m=n.registerForm.get("name"))&&m.hasError("maxlength")&&null!=(m=n.registerForm.get("name"))&&m.touched?10:-1),t.xp6(1),t.um2(11,null!=(A=n.registerForm.get("name"))&&A.hasError("invalidName")?11:-1),t.xp6(5),t.um2(16,null!=(u=n.registerForm.get("email"))&&u.valid||null!=(u=n.registerForm.get("email"))&&u.hasError("required")||null!=(u=n.registerForm.get("email"))&&u.hasError("emailExist")?-1:16),t.xp6(1),t.um2(17,n.registerForm.get("email").hasError("required")?17:-1),t.xp6(1),t.um2(18,null!=(E=n.registerForm.get("email"))&&E.hasError("emailExist")?18:-1),t.xp6(4),t.Q6J("type",n.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",n.hide),t.xp6(2),t.Oqu(n.hide?"visibility_off":"visibility"),t.xp6(1),t.um2(26,n.registerForm.get("password").hasError("required")?26:-1),t.xp6(1),t.um2(27,null==(g=n.registerForm.get("password"))||!g.hasError("minlength")||null!=(g=n.registerForm.get("password"))&&g.valid||null==(g=n.registerForm.get("password"))||!g.touched?-1:27),t.xp6(1),t.um2(28,null!=(R=n.registerForm.get("password"))&&R.hasError("invalidPassword")?28:-1),t.xp6(1),t.Q6J("disabled",n.isDisabled?!n.registerForm.valid:n.registerForm.valid)}},dependencies:[p.lN,p.KE,p.hX,p.TO,p.R9,x.Ps,x.Hw,h.ot,h.lW,h.RK,Z.c,Z.Nt,I.g0,l.UX,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,d.rH],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;gap:18px;width:100%;max-width:380px;margin:0 auto;padding:10px;box-shadow:0 0 16px var(--shadow);background:var(--background-form);border-radius:10px}.form-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;height:calc(100vh - 84px)}.form-title[_ngcontent-%COMP%]{display:flex;align-items:flex-start;width:100%;font-size:22px}.form-input[_ngcontent-%COMP%]{width:100%}.form-btn[_ngcontent-%COMP%]{margin-top:10px;width:120px;font-size:18px;font-weight:500}.form-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;font-size:14px}.form-link--click[_ngcontent-%COMP%]{color:var(--link);transition:color .2s ease-out}.form-link--click[_ngcontent-%COMP%]:hover{color:var(--link-hover)}"]})}return e})();const _=[{path:"",component:y}];let j=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#r=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(_),d.Bz]})}return e})(),Q=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#r=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[U.ez,y,j]})}return e})()}}]);