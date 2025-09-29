((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={aiI:function aiI(){},ar1:function ar1(){},Zi:function Zi(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},au8:function au8(){},aGZ:function aGZ(d){this.b=d},aGY:function aGY(d){this.a=d
this.b=$},a3L:function a3L(d,e){var _=this
_.c=_.b=_.a=$
_.d=null
_.f=d
_.r=e},aII:function aII(d){this.a=d},aIJ:function aIJ(){},aem:function aem(){},
alo(){var x=0,w=A.j(y.H)
var $async$alo=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.aIM(),$async$alo)
case 2:return A.h(null,w)}})
return A.i($async$alo,w)},
aIM(){var x=0,w=A.j(y.H)
var $async$aIM=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.aIO("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeG1scXVocHp0eWZta3RobHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3ODY1NzIsImV4cCI6MjA3NDM2MjU3Mn0.Yy-0AHbkMWnd1l8jitKu67gbvyueHLaXYIYPmC0vJiQ",!1,"https://xixmlquhpztyfmkthluo.supabase.co"),$async$aIM)
case 2:return A.h(null,w)}})
return A.i($async$aIM,w)},
btM(d){var x=0,w=A.j(y.y),v
var $async$btM=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.ai2().getItem(d)!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$btM,w)},
btv(d){var x=0,w=A.j(y.T),v
var $async$btv=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.ai2().getItem(d)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$btv,w)},
bu0(d){var x=0,w=A.j(y.H),v
var $async$bu0=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.ai2().removeItem(d)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bu0,w)},
btY(d,e){var x=0,w=A.j(y.H),v
var $async$btY=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:v=$.ai2().setItem(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$btY,w)},
aIO(a2,a3,a4){var x=0,w=A.j(y.k),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aIO=A.e(function(a5,a6){if(a5===1)return A.f(a6,w)
while(true)switch(x){case 0:a1=$.A()
if(a1.a){$.buS().bD(C.f6,"Supabase is already initialized. Skipping reinitialization.",null,null)
v=a1
x=1
break}a1.d=!1
u=$.buS()
u.bD(C.f5,"Initialize Supabase v2.10.1",null,null)
t=new B.aGY(new A.b1(new A.an($.aA,y.U),y.h))
t.Hw()
s=D.W3.aNe(t)
if(s.d==null)s=s.aNc(new B.aGZ("sb-"+C.c.ga9(A.d9(a4,0,null).glx().split("."))+"-auth-token"))
t=y.N
r=A.d1(C.a85,t,t)
q=A.hP("supabase.supabase")
p=a4+"/rest/v1"
o=A.cM(a4+"/realtime/v1","http","ws")
n=a4+"/auth/v1"
m=a4+"/storage/v1"
l=a4+"/functions/v1"
k=A.d1($.bDM(),t,t)
k.M(0,r)
r=new A.aLr()
r.dP()
j=new A.a3M(a2,C.OT,p,o,n,m,l,k,null,r,null,new A.alj(),q)
i=s.c
h=A.d1(k,t,t)
h.n(0,"apikey",a2)
h.n(0,"Authorization","Bearer "+a2)
g=y.D
f=A.bqf(!1,g)
g=A.bqf(!0,g)
e=A.hP("supabase.auth")
d=A.d1(C.a86,t,t)
d.M(0,h)
h=new A.aqR(n,d,null,f,g,s.b,i,e)
h.w=!0
e.bD(C.f5,"Initialize GoTrueClient v2.15.0 with url: "+n+", autoRefreshToken: true, flowType: "+i.j(0)+", tickDuration: "+C.kE.j(0)+", tickThreshold: 3",null,null)
e.bD(C.bH,"Initialize with headers: "+d.j(0),null,null)
i=new A.aqP(n,d,null)
i.ga0X()
i.e!==$&&A.bu()
i.e=new A.aqQ()
h.a=i
h.gq4()
h.b!==$&&A.bu()
h.b=new A.aqZ()
h.vr()
h.aAX()
j.z=h
i=A.bua()
h=b.G.AbortController
i=new A.vw(new h())
i=j.y=new A.WR(i,a2,j.gatV())
h=A.d1(k,t,t)
g=A.hP("supabase.postgrest")
f=A.d1(C.a84,t,t)
f.M(0,h)
g.bD(C.f5,"Initialize PostgrestClient with url: "+p+", schema: public",null,null)
g.bD(C.bH,"Initialize with headers: "+h.j(0),null,null)
j.ax!==$&&A.bu()
j.ax=new A.aAb(p,f,"public",i,r,!0,g)
p=A.d1(k,t,t)
h=A.hP("supabase.functions")
g=A.d1(C.a87,t,t)
g.M(0,p)
h.bD(C.f5,"Initialize FunctionsClient v2.4.4 with url: "+l,null,null)
h.bD(C.bH,"Initialize with headers: "+p.j(0),null,null)
j.Q!==$&&A.bu()
j.Q=new A.aq2(l,g,i,r,!0,h)
r=A.d1(k,t,t)
p=A.hP("supabase.storage")
l=A.d1(C.a89,t,t)
l.M(0,r)
l=new A.aIN(0,p,m,l)
l.c=new A.aoL(i,A.hP("supabase.storage"))
p.bD(C.f5,"Initialize SupabaseStorageClient v2.4.1 with url: "+m+", retryAttempts: 0",null,null)
p.bD(C.bH,"Initialize with headers: "+r.j(0),null,null)
j.as!==$&&A.bu()
j.as=l
l=y.z
r=A.I(["apikey",a2],t,l)
t=A.z(t,t)
t.n(0,"apikey",a2)
t.M(0,k)
t=A.bNk(o,null,t,i,null,r,C.kE)
j.at!==$&&A.bu()
j.at=t
q.bD(C.f5,"Initialize SupabaseClient v2.9.1 with no custom access token",null,null)
j.aAg()
a1.b=j
$.aw.ci$.push(a1)
a1.a=!0
a0=a1.c=new B.a3L($.bDK(),A.hP("supabase.supabase_flutter"))
x=3
return A.c(a0.qY(s),$async$aIO)
case 3:a1.e=A.bvR(a0.yD(),null,l)
u.bD(C.f6,"***** Supabase init completed *****",null,null)
v=a1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aIO,w)}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[3],B)
D=c[6]
B.aiI.prototype={}
B.ar1.prototype={}
B.Zi.prototype={
aa0(d,e){var x=d==null?this.d:d,w=e==null?this.b:e
return new B.Zi(x,!0,!0,w,this.c)},
aNe(d){return this.aa0(null,d)},
aNc(d){return this.aa0(d,null)}}
B.au8.prototype={}
B.aGZ.prototype={
dP(){var x=0,w=A.j(y.H)
var $async$dP=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:return A.h(null,w)}})
return A.i($async$dP,w)},
KV(){var x=0,w=A.j(y.y),v,u=this
var $async$KV=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v=B.btM(u.b)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$KV,w)},
Je(){var x=0,w=A.j(y.T),v,u=this
var $async$Je=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v=B.btv(u.b)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Je,w)},
W1(){var x=0,w=A.j(y.H),v=this
var $async$W1=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:B.bu0(v.b)
return A.h(null,w)}})
return A.i($async$W1,w)},
aUU(d){return B.btY(this.b,d)}}
B.aGY.prototype={
Hw(){var x=0,w=A.j(y.H),v=this,u
var $async$Hw=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:if($.aw==null)A.aLm()
$.aw.toString
x=2
return A.c(A.k2(),$async$Hw)
case 2:u=e
v.b!==$&&A.bu()
v.b=u
v.a.fH()
return A.h(null,w)}})
return A.i($async$Hw,w)},
F4(d){return this.ag4(d)},
ag4(d){var x=0,w=A.j(y.T),v,u=this,t
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
yH(d){return this.aVP(d)},
aVP(d){var x=0,w=A.j(y.H),v=this,u
var $async$yH=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:x=2
return A.c(v.a.a,$async$yH)
case 2:u=v.b
u===$&&A.a()
x=3
return A.c(u.J(0,d),$async$yH)
case 3:return A.h(null,w)}})
return A.i($async$yH,w)},
vl(d,e){return this.ah4(d,e)},
ah4(d,e){var x=0,w=A.j(y.H),v=this,u
var $async$vl=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:x=2
return A.c(v.a.a,$async$vl)
case 2:u=v.b
u===$&&A.a()
x=3
return A.c(u.tD("String",d,e),$async$vl)
case 3:return A.h(null,w)}})
return A.i($async$vl,w)}}
B.a3L.prototype={
qY(d){return this.aRU(d)},
aRU(d){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$qY=A.e(function(e,f){if(e===1){u.push(f)
x=v}while(true)switch(x){case 0:m=d.d
m.toString
t.a=m
t.b=d.c
t.c=!0
m=$.A()
o=m.b
o===$&&A.a()
o=o.gag().z
t.d=new A.f9(o,o.$ti.i("f9<1>")).yj(new B.aII(t),new B.aIJ())
x=2
return A.c(t.a.dP(),$async$qY)
case 2:s=!0
x=5
return A.c(t.a.KV(),$async$qY)
case 5:x=f?3:4
break
case 3:x=6
return A.c(t.a.Je(),$async$qY)
case 6:r=f
x=r!=null?7:8
break
case 7:v=10
x=13
return A.c(m.b.gag().Ft(r),$async$qY)
case 13:s=!1
v=1
x=12
break
case 10:v=9
l=u.pop()
q=A.F(l)
p=A.b3(l)
t.r.bD(C.cI,"Error while setting initial session",q,p)
x=12
break
case 9:x=1
break
case 12:case 8:case 4:if(s){m=$.A().b
m===$&&A.a()
m.gag().kT(C.fJ)}$.aw.ci$.push(t)
x=14
return A.c(t.II(),$async$qY)
case 14:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$qY,w)},
yD(){var x=0,w=A.j(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k
var $async$yD=A.e(function(d,e){if(d===1){u.push(e)
x=v}while(true)switch(x){case 0:v=3
m=t.a
m===$&&A.a()
x=6
return A.c(m.KV(),$async$yD)
case 6:s=e
x=s?7:8
break
case 7:x=9
return A.c(t.a.Je(),$async$yD)
case 9:r=e
x=r!=null?10:11
break
case 10:m=$.A().b
m===$&&A.a()
x=12
return A.c(m.gag().yE(r),$async$yD)
case 12:case 11:case 8:v=1
x=5
break
case 3:v=2
k=u.pop()
m=A.F(k)
if(m instanceof A.ma){q=m
p=A.b3(k)
t.r.bD(C.cI,q.a,q,p)}else{o=m
n=A.b3(k)
t.r.bD(C.cI,"Error while recovering session",o,n)}x=5
break
case 2:x=1
break
case 5:return A.h(null,w)
case 1:return A.f(u.at(-1),w)}})
return A.i($async$yD,w)},
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
x=u}while(true)switch(x){case 0:if($.bzI){x=1
break}$.bzI=!0
u=4
r=null
u=8
k=A.h_(s.f.X1(),y.z)
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
case 12:k=$.bDJ().rA()
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
if(k instanceof A.pV){q=k
p=A.b3(h)
k=q.b
if(k==null)k=q
s.r.bD(C.cI,"Error while receiving deeplink",k,p)}else if(y.Y.b(k)){o=k
n=A.b3(h)
s.r.bD(C.cI,"Error while receiving deeplink",o.guJ(),n)}else{m=k
l=A.b3(h)
s.r.bD(C.cI,"Error while receiving deeplink",m,l)}x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$w6,w)},
H7(d){return this.avF(d)},
avF(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$H7=A.e(function(e,f){if(e===1){t.push(f)
x=u}while(true)switch(x){case 0:if(C.b.m(d.gk6(),"access_token")){n=s.b
n===$&&A.a()
n=n===D.My}else n=!1
if(!n){if(d.gfz().aG("code")){n=s.b
n===$&&A.a()
n=n===C.i2}else n=!1
n=n||C.b.m(d.gk6(),"error_description")}else n=!0
if(!n){x=1
break}n=s.r
n.bD(C.bH,"handle deeplink uri: "+d.j(0),null,null)
n.bD(C.f6,"handle deeplink uri",null,null)
u=4
m=$.A().b
m===$&&A.a()
x=7
return A.c(m.gag().z9(d),$async$H7)
case 7:u=2
x=6
break
case 4:u=3
k=t.pop()
m=A.F(k)
if(m instanceof A.ma){r=m
q=A.b3(k)
n=$.A().b
n===$&&A.a()
n.gag().E4(r,q)}else{p=m
o=A.b3(k)
n.bD(C.cI,"Error while getSessionFromUrl",p,o)}x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H7,w)}}
B.aem.prototype={}
var z=a.updateTypes([])
B.aII.prototype={
$1(d){var x=this.a,w=d.b
if(w!=null){x=x.a
x===$&&A.a()
x.aUU(C.ap.ug(w.d9(),null))}else if(d.a===C.fK){x=x.a
x===$&&A.a()
x.W1()}},
$S:76}
B.aIJ.prototype={
$2(d,e){},
$S:91};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.aiI,A.WF)
v(A.N,[B.ar1,B.au8,B.aem])
w(B.Zi,A.aiV)
w(B.aGZ,B.au8)
w(B.aGY,B.ar1)
w(B.a3L,B.aem)
w(B.aII,A.nv)
w(B.aIJ,A.B2)
x(B.aem,A.dQ)})()
A.bt2(b.typeUniverse,JSON.parse('{"a3L":{"dQ":[]}}'))
var y=(function rtii(){var x=A.aB
return{D:x("rc"),Y:x("fS"),r:x("lv"),N:x("n"),k:x("NI"),h:x("b1<~>"),U:x("an<~>"),y:x("C"),z:x("@"),T:x("n?"),H:x("~")}})();(function constants(){D.My=new A.WQ(0,"implicit")
D.W3=new B.Zi(null,!0,!0,null,C.i2)})();(function staticFields(){$.bzI=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bX6","bDK",()=>{var w=new B.aiI()
w.vG($.bpy())
return w})
x($,"c0E","ai2",()=>A.a8(A.a8(A.m6(),"window"),"localStorage"))
x($,"c0G","buS",()=>A.hP("supabase.supabase_flutter"))})()};
(a=>{a["HAzuwpvx7zFFAqQXnUoYZyl3y5o="]=a.current})($__dart_deferred_initializers__);