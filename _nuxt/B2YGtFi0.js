import{Q as n,C as r,a4 as M,a6 as c,c as G,a as i,G as C,o as A,_ as S}from"./BguujWhJ.js";const B={AF:"usa",AX:"usa",AL:"usa",DZ:"usa",AS:"usa",AD:"usa",AO:"usa",AI:"usa",AQ:"usa",AG:"usa",AR:"usa",AM:"rus",AW:"usa",AU:"usa",AT:"usa",AZ:"rus",BS:"usa",BH:"usa",BD:"usa",BB:"usa",BY:"rus",BE:"usa",BZ:"usa",BJ:"usa",BM:"usa",BT:"usa",BO:"usa",BA:"usa",BW:"usa",BV:"usa",BR:"usa",IO:"usa",BN:"usa",BG:"usa",BF:"usa",BI:"usa",KH:"usa",CM:"usa",CA:"usa",CV:"usa",KY:"usa",CF:"usa",TD:"usa",CL:"usa",CN:"usa",CX:"usa",CC:"usa",CO:"usa",KM:"usa",CG:"usa",CD:"usa",CK:"usa",CR:"usa",CI:"usa",HR:"usa",CU:"usa",CY:"usa",CZ:"usa",DK:"usa",DJ:"usa",DM:"usa",DO:"usa",EC:"usa",EG:"usa",SV:"usa",GQ:"usa",ER:"usa",EE:"usa",ET:"usa",FK:"usa",FO:"usa",FJ:"usa",FI:"usa",FR:"usa",GF:"usa",PF:"usa",TF:"usa",GA:"usa",GM:"usa",GE:"usa",DE:"usa",GH:"usa",GI:"usa",GR:"usa",GL:"usa",GD:"usa",GP:"usa",GU:"usa",GT:"usa",GG:"usa",GN:"usa",GW:"usa",GY:"usa",HT:"usa",HM:"usa",VA:"usa",HN:"usa",HK:"usa",HU:"usa",IS:"usa",IN:"usa",ID:"usa",IR:"usa",IQ:"usa",IE:"usa",IM:"usa",IL:"usa",IT:"usa",JM:"usa",JP:"usa",JE:"usa",JO:"usa",KZ:"rus",KE:"usa",KI:"usa",KR:"usa",KP:"usa",KW:"usa",KG:"rus",LA:"usa",LV:"usa",LB:"usa",LS:"usa",LR:"usa",LY:"usa",LI:"usa",LT:"usa",LU:"usa",MO:"usa",MK:"usa",MG:"usa",MW:"usa",MY:"usa",MV:"usa",ML:"usa",MT:"usa",MH:"usa",MQ:"usa",MR:"usa",MU:"usa",YT:"usa",MX:"usa",FM:"usa",MD:"rus",MC:"usa",MN:"usa",ME:"usa",MS:"usa",MA:"usa",MZ:"usa",MM:"usa",NA:"usa",NR:"usa",NP:"usa",NL:"usa",AN:"usa",NC:"usa",NZ:"usa",NI:"usa",NE:"usa",NG:"usa",NU:"usa",NF:"usa",MP:"usa",NO:"usa",OM:"usa",PK:"usa",PW:"usa",PS:"usa",PA:"usa",PG:"usa",PY:"usa",PE:"usa",PH:"usa",PN:"usa",PL:"usa",PT:"usa",PR:"usa",QA:"usa",RE:"usa",RO:"usa",RU:"rus",RW:"usa",BL:"usa",SH:"usa",KN:"usa",LC:"usa",MF:"usa",PM:"usa",VC:"usa",WS:"usa",SM:"usa",ST:"usa",SA:"usa",SN:"usa",RS:"usa",SC:"usa",SL:"usa",SG:"usa",SK:"usa",SI:"usa",SB:"usa",SO:"usa",ZA:"usa",GS:"usa",ES:"usa",LK:"usa",SD:"usa",SR:"usa",SJ:"usa",SZ:"usa",SE:"usa",CH:"usa",SY:"usa",TW:"usa",TJ:"rus",TZ:"usa",TH:"usa",TL:"usa",TG:"usa",TK:"usa",TO:"usa",TT:"usa",TN:"usa",TR:"usa",TM:"rus",TC:"usa",TV:"usa",UG:"usa",UA:"rus",AE:"usa",GB:"usa",US:"usa",UM:"usa",UY:"usa",UZ:"rus",VU:"usa",VE:"usa",VN:"usa",VG:"usa",VI:"usa",WF:"usa",EH:"usa",YE:"usa",ZM:"usa",ZW:"usa"},T=n("/static-media-frontend/icon/tube-spinner.svg"),l=r({__name:"index",setup(R){const u=M();function t(s){return B[s]||"usa"}return c(async()=>{try{const a=await(await fetch("https://api.country.is/")).json();if(a.country){const e=a.country,o=t(e);await u.replace(`/${o}`)}else await u.replace("/usa")}catch{await u.replace("/usa")}}),(s,a)=>(A(),G("div",{class:C(s.$style.loading)},a[0]||(a[0]=[i("img",{src:T,alt:"loading..."},null,-1)]),2))}}),N="_loading_1cn25_1",E={loading:N},L={$style:E},K=S(l,[["__cssModules",L]]);export{K as default};
