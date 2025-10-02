((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={aiX:function aiX(){},arg:function arg(){},Zs:function Zs(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.a=f
_.b=g
_.c=h},aur:function aur(){},aHh:function aHh(d){this.b=d},aHg:function aHg(d){this.a=d
this.b=$},a3V:function a3V(d,e){var _=this
_.c=_.b=_.a=$
_.d=null
_.f=d
_.r=e},aJ0:function aJ0(d){this.a=d},aJ1:function aJ1(){},aeA:function aeA(){},
alD(){var x=0,w=A.j(y.H)
var $async$alD=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.aJ4(),$async$alD)
case 2:return A.h(null,w)}})
return A.i($async$alD,w)},
aJ4(){var x=0,w=A.j(y.H)
var $async$aJ4=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(B.aJ6("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpeG1scXVocHp0eWZta3RobHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3ODY1NzIsImV4cCI6MjA3NDM2MjU3Mn0.Yy-0AHbkMWnd1l8jitKu67gbvyueHLaXYIYPmC0vJiQ",!1,"https://xixmlquhpztyfmkthluo.supabase.co"),$async$aJ4)
case 2:return A.h(null,w)}})
return A.i($async$aJ4,w)},
bue(d){var x=0,w=A.j(y.y),v
var $async$bue=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.aig().getItem(d)!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bue,w)},
btY(d){var x=0,w=A.j(y.T),v
var $async$btY=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.aig().getItem(d)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$btY,w)},
but(d){var x=0,w=A.j(y.H),v
var $async$but=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.aig().removeItem(d)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$but,w)},
buq(d,e){var x=0,w=A.j(y.H),v
var $async$buq=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:v=$.aig().setItem(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$buq,w)},
aJ6(a2,a3,a4){var x=0,w=A.j(y.k),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aJ6=A.e(function(a5,a6){if(a5===1)return A.f(a6,w)
while(true)switch(x){case 0:a1=$.A()
if(a1.a){$.bvk().bD(C.f9,"Supabase is already initialized. Skipping reinitialization.",null,null)
v=a1
x=1
break}a1.d=!1
u=$.bvk()
u.bD(C.f8,"Initialize Supabase v2.10.1",null,null)
t=new B.aHg(new A.b1(new A.an($.aA,y.U),y.h))
t.Hw()
s=D.W6.aNh(t)
if(s.d==null)s=s.aNf(new B.aHh("sb-"+C.c.ga9(A.d4(a4,0,null).gkN().split("."))+"-auth-token"))
t=y.N
r=A.d1(C.a8f,t,t)
q=A.hP("supabase.supabase")
p=a4+"/rest/v1"
o=A.cM(a4+"/realtime/v1","http","ws")
n=a4+"/auth/v1"
m=a4+"/storage/v1"
l=a4+"/functions/v1"
k=A.d1($.bEe(),t,t)
k.M(0,r)
r=new A.aLK()
r.dP()
j=new A.a3W(a2,C.OV,p,o,n,m,l,k,null,r,null,new A.aly(),q)
i=s.c
h=A.d1(k,t,t)
h.n(0,"apikey",a2)
h.n(0,"Authorization","Bearer "+a2)
g=y.D
f=A.bqI(!1,g)
g=A.bqI(!0,g)
e=A.hP("supabase.auth")
d=A.d1(C.a8g,t,t)
d.M(0,h)
h=new A.ar5(n,d,null,f,g,s.b,i,e)
h.w=!0
e.bD(C.f8,"Initialize GoTrueClient v2.15.0 with url: "+n+", autoRefreshToken: true, flowType: "+i.j(0)+", tickDuration: "+C.kI.j(0)+", tickThreshold: 3",null,null)
e.bD(C.bH,"Initialize with headers: "+d.j(0),null,null)
i=new A.ar3(n,d,null)
i.ga0X()
i.e!==$&&A.bu()
i.e=new A.ar4()
h.a=i
h.gq5()
h.b!==$&&A.bu()
h.b=new A.ard()
h.vr()
h.aAZ()
j.z=h
i=A.buD()
h=b.G.AbortController
i=new A.vD(new h())
i=j.y=new A.X0(i,a2,j.gatW())
h=A.d1(k,t,t)
g=A.hP("supabase.postgrest")
f=A.d1(C.a8e,t,t)
f.M(0,h)
g.bD(C.f8,"Initialize PostgrestClient with url: "+p+", schema: public",null,null)
g.bD(C.bH,"Initialize with headers: "+h.j(0),null,null)
j.ax!==$&&A.bu()
j.ax=new A.aAu(p,f,"public",i,r,!0,g)
p=A.d1(k,t,t)
h=A.hP("supabase.functions")
g=A.d1(C.a8h,t,t)
g.M(0,p)
h.bD(C.f8,"Initialize FunctionsClient v2.4.4 with url: "+l,null,null)
h.bD(C.bH,"Initialize with headers: "+p.j(0),null,null)
j.Q!==$&&A.bu()
j.Q=new A.aqh(l,g,i,r,!0,h)
r=A.d1(k,t,t)
p=A.hP("supabase.storage")
l=A.d1(C.a8j,t,t)
l.M(0,r)
l=new A.aJ5(0,p,m,l)
l.c=new A.ap_(i,A.hP("supabase.storage"))
p.bD(C.f8,"Initialize SupabaseStorageClient v2.4.1 with url: "+m+", retryAttempts: 0",null,null)
p.bD(C.bH,"Initialize with headers: "+r.j(0),null,null)
j.as!==$&&A.bu()
j.as=l
l=y.z
r=A.I(["apikey",a2],t,l)
t=A.z(t,t)
t.n(0,"apikey",a2)
t.M(0,k)
t=A.bNQ(o,null,t,i,null,r,C.kI)
j.at!==$&&A.bu()
j.at=t
q.bD(C.f8,"Initialize SupabaseClient v2.9.1 with no custom access token",null,null)
j.aAi()
a1.b=j
$.aw.ci$.push(a1)
a1.a=!0
a0=a1.c=new B.a3V($.bEc(),A.hP("supabase.supabase_flutter"))
x=3
return A.c(a0.qZ(s),$async$aJ6)
case 3:a1.e=A.bwj(a0.yF(),null,l)
u.bD(C.f9,"***** Supabase init completed *****",null,null)
v=a1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aJ6,w)}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[3],B)
D=c[6]
B.aiX.prototype={}
B.arg.prototype={}
B.Zs.prototype={
aa0(d,e){var x=d==null?this.d:d,w=e==null?this.b:e
return new B.Zs(x,!0,!0,w,this.c)},
aNh(d){return this.aa0(null,d)},
aNf(d){return this.aa0(d,null)}}
B.aur.prototype={}
B.aHh.prototype={
dP(){var x=0,w=A.j(y.H)
var $async$dP=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:return A.h(null,w)}})
return A.i($async$dP,w)},
KV(){var x=0,w=A.j(y.y),v,u=this
var $async$KV=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v=B.bue(u.b)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$KV,w)},
Je(){var x=0,w=A.j(y.T),v,u=this
var $async$Je=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:v=B.btY(u.b)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Je,w)},
W1(){var x=0,w=A.j(y.H),v=this
var $async$W1=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:B.but(v.b)
return A.h(null,w)}})
return A.i($async$W1,w)},
aUY(d){return B.buq(this.b,d)}}
B.aHg.prototype={
Hw(){var x=0,w=A.j(y.H),v=this,u
var $async$Hw=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:if($.aw==null)A.aLF()
$.aw.toString
x=2
return A.c(A.k2(),$async$Hw)
case 2:u=e
v.b!==$&&A.bu()
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
t.d=new A.fa(o,o.$ti.i("fa<1>")).yl(new B.aJ0(t),new B.aJ1())
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
t.r.bD(C.cI,"Error while setting initial session",q,p)
x=12
break
case 9:x=1
break
case 12:case 8:case 4:if(s){m=$.A().b
m===$&&A.a()
m.gag().kU(C.fM)}$.aw.ci$.push(t)
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
if(m instanceof A.mb){q=m
p=A.b3(k)
t.r.bD(C.cI,q.a,q,p)}else{o=m
n=A.b3(k)
t.r.bD(C.cI,"Error while recovering session",o,n)}x=5
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
x=u}while(true)switch(x){case 0:if($.bAa){x=1
break}$.bAa=!0
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
case 12:k=$.bEb().rA()
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
if(k instanceof A.q_){q=k
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
H7(d){return this.avG(d)},
avG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k
var $async$H7=A.e(function(e,f){if(e===1){t.push(f)
x=u}while(true)switch(x){case 0:if(C.b.m(d.gk6(),"access_token")){n=s.b
n===$&&A.a()
n=n===D.MA}else n=!1
if(!n){if(d.gfz().aG("code")){n=s.b
n===$&&A.a()
n=n===C.i5}else n=!1
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
if(m instanceof A.mb){r=m
q=A.b3(k)
n=$.A().b
n===$&&A.a()
n.gag().E5(r,q)}else{p=m
o=A.b3(k)
n.bD(C.cI,"Error while getSessionFromUrl",p,o)}x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H7,w)}}
B.aeA.prototype={}
var z=a.updateTypes([])
B.aJ0.prototype={
$1(d){var x=this.a,w=d.b
if(w!=null){x=x.a
x===$&&A.a()
x.aUY(C.ap.ug(w.d9(),null))}else if(d.a===C.fN){x=x.a
x===$&&A.a()
x.W1()}},
$S:79}
B.aJ1.prototype={
$2(d,e){},
$S:96};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.aiX,A.WP)
v(A.N,[B.arg,B.aur,B.aeA])
w(B.Zs,A.aj9)
w(B.aHh,B.aur)
w(B.aHg,B.arg)
w(B.a3V,B.aeA)
w(B.aJ0,A.nx)
w(B.aJ1,A.B8)
x(B.aeA,A.dQ)})()
A.btv(b.typeUniverse,JSON.parse('{"a3V":{"dQ":[]}}'))
var y=(function rtii(){var x=A.aB
return{D:x("rj"),Y:x("fS"),r:x("lw"),N:x("n"),k:x("NS"),h:x("b1<~>"),U:x("an<~>"),y:x("C"),z:x("@"),T:x("n?"),H:x("~")}})();(function constants(){D.MA=new A.X_(0,"implicit")
D.W6=new B.Zs(null,!0,!0,null,C.i5)})();(function staticFields(){$.bAa=!1})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bXC","bEc",()=>{var w=new B.aiX()
w.vG($.bq0())
return w})
x($,"c19","aig",()=>A.a9(A.a9(A.m7(),"window"),"localStorage"))
x($,"c1b","bvk",()=>A.hP("supabase.supabase_flutter"))})()};
(a=>{a["2jNtUWa/lDEJfl302PagwIcSm3E="]=a.current})($__dart_deferred_initializers__);