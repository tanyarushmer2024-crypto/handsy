((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={aiX:function aiX(){},arg:function arg(){},Zr:function Zr(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},aus:function aus(){},aHi:function aHi(d){this.b=d},aHh:function aHh(d){this.a=d
this.b=$},a3V:function a3V(d,e){var _=this
_.c=_.b=_.a=$
_.d=null
_.f=d
_.r=e},aJ1:function aJ1(d){this.a=d},aJ2:function aJ2(){},aeA:function aeA(){},
alD(){var x=0,w=A.j(y.H)
var $async$alD=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.aJ5(),$async$alD)
case 2:return A.h(null,w)}})
return A.i($async$alD,w)},
aJ5(){var x=0,w=A.j(y.H)
var $async$aJ5=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.aJ7("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeG1scXVocHp0eWZta3RobHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3ODY1NzIsImV4cCI6MjA3NDM2MjU3Mn0.Yy-0AHbkMWnd1l8jitKu67gbvyueHLaXYIYPmC0vJiQ",!1,"https://xixmlquhpztyfmkthluo.supabase.co"),$async$aJ5)
case 2:return A.h(null,w)}})
return A.i($async$aJ5,w)},
bus(d){var x=0,w=A.j(y.y),v
var $async$bus=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.aig().getItem(d)!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bus,w)},
bub(d){var x=0,w=A.j(y.T),v
var $async$bub=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.aig().getItem(d)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bub,w)},
buH(d){var x=0,w=A.j(y.H),v
var $async$buH=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.aig().removeItem(d)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$buH,w)},
buE(d,e){var x=0,w=A.j(y.H),v
var $async$buE=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:v=$.aig().setItem(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$buE,w)},
aJ7(a2,a3,a4){var x=0,w=A.j(y.k),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aJ7=A.e(function(a5,a6){if(a5===1)return A.f(a6,w)
while(true)switch(x){case 0:a1=$.A()
if(a1.a){$.bvy().bD(C.f9,"Supabase is already initialized. Skipping reinitialization.",null,null)
v=a1
x=1
break}a1.d=!1
u=$.bvy()
u.bD(C.f8,"Initialize Supabase v2.10.1",null,null)
t=new B.aHh(new A.b1(new A.an($.aB,y.U),y.h))
t.Hw()
s=D.Wa.aNh(t)
if(s.d==null)s=s.aNf(new B.aHi("sb-"+C.c.ga9(A.d4(a4,0,null).gkN().split("."))+"-auth-token"))
t=y.N
r=A.d1(C.a8g,t,t)
q=A.hQ("supabase.supabase")
p=a4+"/rest/v1"
o=A.cN(a4+"/realtime/v1","http","ws")
n=a4+"/auth/v1"
m=a4+"/storage/v1"
l=a4+"/functions/v1"
k=A.d1($.bEr(),t,t)
k.M(0,r)
r=new A.aLL()
r.dP()
j=new A.a3W(a2,C.OZ,p,o,n,m,l,k,null,r,null,new A.aly(),q)
i=s.c
h=A.d1(k,t,t)
h.n(0,"apikey",a2)
h.n(0,"Authorization","Bearer "+a2)
g=y.D
f=A.bqW(!1,g)
g=A.bqW(!0,g)
e=A.hQ("supabase.auth")
d=A.d1(C.a8h,t,t)
d.M(0,h)
h=new A.ar5(n,d,null,f,g,s.b,i,e)
h.w=!0
e.bD(C.f8,"Initialize GoTrueClient v2.15.0 with url: "+n+", autoRefreshToken: true, flowType: "+i.j(0)+", tickDuration: "+C.kI.j(0)+", tickThreshold: 3",null,null)
e.bD(C.bH,"Initialize with headers: "+d.j(0),null,null)
i=new A.ar3(n,d,null)
i.ga0X()
i.e!==$&&A.bv()
i.e=new A.ar4()
h.a=i
h.gq5()
h.b!==$&&A.bv()
h.b=new A.ard()
h.vr()
h.aAZ()
j.z=h
i=A.buR()
h=b.G.AbortController
i=new A.vD(new h())
i=j.y=new A.X_(i,a2,j.gatW())
h=A.d1(k,t,t)
g=A.hQ("supabase.postgrest")
f=A.d1(C.a8f,t,t)
f.M(0,h)
g.bD(C.f8,"Initialize PostgrestClient with url: "+p+", schema: public",null,null)
g.bD(C.bH,"Initialize with headers: "+h.j(0),null,null)
j.ax!==$&&A.bv()
j.ax=new A.aAv(p,f,"public",i,r,!0,g)
p=A.d1(k,t,t)
h=A.hQ("supabase.functions")
g=A.d1(C.a8i,t,t)
g.M(0,p)
h.bD(C.f8,"Initialize FunctionsClient v2.4.4 with url: "+l,null,null)
h.bD(C.bH,"Initialize with headers: "+p.j(0),null,null)
j.Q!==$&&A.bv()
j.Q=new A.aqh(l,g,i,r,!0,h)
r=A.d1(k,t,t)
p=A.hQ("supabase.storage")
l=A.d1(C.a8k,t,t)
l.M(0,r)
l=new A.aJ6(0,p,m,l)
l.c=new A.ap_(i,A.hQ("supabase.storage"))
p.bD(C.f8,"Initialize SupabaseStorageClient v2.4.1 with url: "+m+", retryAttempts: 0",null,null)
p.bD(C.bH,"Initialize with headers: "+r.j(0),null,null)
j.as!==$&&A.bv()
j.as=l
l=y.z
r=A.I(["apikey",a2],t,l)
t=A.z(t,t)
t.n(0,"apikey",a2)
t.M(0,k)
t=A.bO2(o,null,t,i,null,r,C.kI)
j.at!==$&&A.bv()
j.at=t
q.bD(C.f8,"Initialize SupabaseClient v2.9.1 with no custom access token",null,null)
j.aAi()
a1.b=j
$.aw.ci$.push(a1)
a1.a=!0
a0=a1.c=new B.a3V($.bEp(),A.hQ("supabase.supabase_flutter"))
x=3
return A.c(a0.qZ(s),$async$aJ7)
case 3:a1.e=A.bwx(a0.yF(),null,l)
u.bD(C.f9,"***** Supabase init completed *****",null,null)
v=a1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aJ7,w)}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[3],B)
D=c[6]
B.aiX.prototype={}
B.arg.prototype={}
B.Zr.prototype={
aa0(d,e){var x=d==null?this.d:d,w=e==null?this.b:e
return new B.Zr(x,!0,!0,w,this.c)},
aNh(d){return this.aa0(null,d)},
aNf(d){return this.aa0(d,null)}}
B.aus.prototype={}
B.aHi.prototype={
dP(){var x=0,w=A.j(y.H)
var $async$dP=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:return A.h(null,w)}})
return A.i($async$dP,w)},
KV(){var x=0,w=A.j(y.y),v,u=this
var $async$KV=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v=B.bus(u.b)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$KV,w)},
Je(){var x=0,w=A.j(y.T),v,u=this
var $async$Je=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v=B.bub(u.b)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Je,w)},
W1(){var x=0,w=A.j(y.H),v=this
var $async$W1=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:B.buH(v.b)
return A.h(null,w)}})
return A.i($async$W1,w)},
aUY(d){return B.buE(this.b,d)}}
B.aHh.prototype={
Hw(){var x=0,w=A.j(y.H),v=this,u
var $async$Hw=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:if($.aw==null)A.aLG()
$.aw.toString
x=2
return A.c(A.k3(),$async$Hw)
case 2:u=e
v.b!==$&&A.bv()
v.b=u
v.a.fH()
return A.h(null,w)}})
return A.i($async$Hw,w)},
F4(d){return this.ag5(d)},
ag5(d){var x=0,w=A.j(y.T),v,u=this,t
var $async$F4=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:x=3
return A.c(u.a.a,$async$F4)
case 3:t=u.b
t===$&&A.a()
v=A.r(t.a.h(0,d))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$F4,w)},
yJ(d){return this.aVT(d)},
aVT(d){var x=0,w=A.j(y.H),v=this,u
var $async$yJ=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:x=2
return A.c(v.a.a,$async$yJ)
case 2:u=v.b
u===$&&A.a()
x=3
return A.c(u.J(0,d),$async$yJ)
case 3:return A.h(null,w)}})
return A.i($async$yJ,w)},
vl(d,e){return this.ah5(d,e)},
ah5(d,e){var x=0,w=A.j(y.H),v=this,u
var $async$vl=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:x=2
return A.c(v.a.a,$async$vl)
case 2:u=v.b
u===$&&A.a()
x=3
return A.c(u.tD("String",d,e),$async$vl)
case 3:return A.h(null,w)}})
return A.i($async$vl,w)}}
B.a3V.prototype={
qZ(d){return this.aRX(d)},
aRX(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$qZ=A.e(function(e,f){if(e===1){u.push(f)
x=v}while(true)switch(x){case 0:m=d.d
m.toString
t.a=m
t.b=d.c
t.c=!0
m=$.A()
o=m.b
o===$&&A.a()
o=o.gag().z
t.d=new A.fb(o,o.$ti.i("fb<1>")).yl(new B.aJ1(t),new B.aJ2())
x=2
return A.c(t.a.dP(),$async$qZ)
case 2:s=!0
x=5
return A.c(t.a.KV(),$async$qZ)
case 5:x=f?3:4
break
case 3:x=6
return A.c(t.a.Je(),$async$qZ)
case 6:r=f
x=r!=null?7:8
break
case 7:v=10
x=13
return A.c(m.b.gag().Ft(r),$async$qZ)
case 13:s=!1
v=1
x=12
break
case 10:v=9
l=u.pop()
q=A.F(l)
p=A.b3(l)
t.r.bD(C.cK,"Error while setting initial session",q,p)
x=12
break
case 9:x=1
break
case 12:case 8:case 4:if(s){m=$.A().b
m===$&&A.a()
m.gag().kU(C.fN)}$.aw.ci$.push(t)
x=14
return A.c(t.II(),$async$qZ)
case 14:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$qZ,w)},
yF(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$yF=A.e(function(d,e){if(d===1){u.push(e)
x=v}while(true)switch(x){case 0:v=3
m=t.a
m===$&&A.a()
x=6
return A.c(m.KV(),$async$yF)
case 6:s=e
x=s?7:8
break
case 7:x=9
return A.c(t.a.Je(),$async$yF)
case 9:r=e
x=r!=null?10:11
break
case 10:m=$.A().b
m===$&&A.a()
x=12
return A.c(m.gag().yG(r),$async$yF)
case 12:case 11:case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
m=A.F(k)
if(m instanceof A.mc){q=m
p=A.b3(k)
t.r.bD(C.cK,q.a,q,p)}else{o=m
n=A.b3(k)
t.r.bD(C.cK,"Error while recovering session",o,n)}x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$yF,w)},
oK(d){var x
switch(d.a){case 1:this.c===$&&A.a()
x=$.A().b
x===$&&A.a()
x.gag().vr()
break
case 0:case 4:x=$.A().b
x===$&&A.a()
x.gag().XW()
break}},
II(){var x=0,w=A.j(y.H),v=this
var $async$II=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v.r.bD(C.bA,"Starting deeplink observer",null,null)
x=2
return A.c(v.w6(),$async$II)
case 2:return A.h(null,w)}})
return A.i($async$II,w)},
w6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$w6=A.e(function(d,e){if(d===1){t.push(e)
x=u}while(true)switch(x){case 0:if($.bAn){x=1
break}$.bAn=!0
u=4
r=null
u=8
k=A.h0(s.f.X1(),y.z)
x=11
return A.c(k,$async$w6)
case 11:r=e
u=4
x=10
break
case 8:u=7
i=t.pop()
x=y.r.b(A.F(i))?12:14
break
case 12:k=$.bEo().rA()
x=15
return A.c(k,$async$w6)
case 15:r=e
x=13
break
case 14:throw i
case 13:x=10
break
case 7:x=4
break
case 10:x=r!=null?16:17
break
case 16:x=18
return A.c(s.H7(r),$async$w6)
case 18:case 17:u=2
x=6
break
case 4:u=3
h=t.pop()
k=A.F(h)
if(k instanceof A.q0){q=k
p=A.b3(h)
k=q.b
if(k==null)k=q
s.r.bD(C.cK,"Error while receiving deeplink",k,p)}else if(y.Y.b(k)){o=k
n=A.b3(h)
s.r.bD(C.cK,"Error while receiving deeplink",o.guJ(),n)}else{m=k
l=A.b3(h)
s.r.bD(C.cK,"Error while receiving deeplink",m,l)}x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$w6,w)},
H7(d){return this.avG(d)},
avG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$H7=A.e(function(e,f){if(e===1){t.push(f)
x=u}while(true)switch(x){case 0:if(C.b.m(d.gk6(),"access_token")){n=s.b
n===$&&A.a()
n=n===D.MD}else n=!1
if(!n){if(d.gfz().aG("code")){n=s.b
n===$&&A.a()
n=n===C.i9}else n=!1
n=n||C.b.m(d.gk6(),"error_description")}else n=!0
if(!n){x=1
break}n=s.r
n.bD(C.bH,"handle deeplink uri: "+d.j(0),null,null)
n.bD(C.f9,"handle deeplink uri",null,null)
u=4
m=$.A().b
m===$&&A.a()
x=7
return A.c(m.gag().zb(d),$async$H7)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.F(k)
if(m instanceof A.mc){r=m
q=A.b3(k)
n=$.A().b
n===$&&A.a()
n.gag().E5(r,q)}else{p=m
o=A.b3(k)
n.bD(C.cK,"Error while getSessionFromUrl",p,o)}x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H7,w)}}
B.aeA.prototype={}
var z=a.updateTypes([])
B.aJ1.prototype={
$1(d){var x=this.a,w=d.b
if(w!=null){x=x.a
x===$&&A.a()
x.aUY(C.ap.ug(w.d9(),null))}else if(d.a===C.fO){x=x.a
x===$&&A.a()
x.W1()}},
$S:73}
B.aJ2.prototype={
$2(d,e){},
$S:88};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.aiX,A.WO)
v(A.N,[B.arg,B.aus,B.aeA])
w(B.Zr,A.aj9)
w(B.aHi,B.aus)
w(B.aHh,B.arg)
w(B.a3V,B.aeA)
w(B.aJ1,A.nz)
w(B.aJ2,A.B5)
x(B.aeA,A.dQ)})()
A.btJ(b.typeUniverse,JSON.parse('{"a3V":{"dQ":[]}}'))
var y=(function rtii(){var x=A.aC
return{D:x("rj"),Y:x("fT"),r:x("lw"),N:x("n"),k:x("NR"),h:x("b1<~>"),U:x("an<~>"),y:x("C"),z:x("@"),T:x("n?"),H:x("~")}})();(function constants(){D.MD=new A.WZ(0,"implicit")
D.Wa=new B.Zr(null,!0,!0,null,C.i9)})();(function staticFields(){$.bAn=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bXP","bEp",()=>{var w=new B.aiX()
w.vG($.bqe())
return w})
x($,"c1m","aig",()=>A.a9(A.a9(A.m7(),"window"),"localStorage"))
x($,"c1o","bvy",()=>A.hQ("supabase.supabase_flutter"))})()};
(a=>{a["0nFUhfLNJ/fT2/u78CKa79uSOTg="]=a.current})($__dart_deferred_initializers__);