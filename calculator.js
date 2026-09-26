/* tool-ibutg · ELUCENIA · https://github.com/Elucenia/tool-ibutg
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"ibutg","title":"IBUTG e limite de exposição ao calor (NR-15)","fields":[["amb","Local da atividade","radio",{"opts":{"fechado":"Ambiente fechado ou com fonte artificial de calor","aberto":"Céu aberto, sem fonte artificial de calor"}}],["solar","Há carga solar direta no ponto de medição?","radio",{"opts":{"0":"Não","1":"Sim"}}],["tbn","Temperatura de bulbo úmido natural (tbn)","num",{"min":0,"max":45,"step":0.1,"unit":"°C","ph":"25"}],["tg","Temperatura de globo (tg)","num",{"min":0,"max":90,"step":0.1,"unit":"°C","ph":"40"}],["tbs","Temperatura de bulbo seco (tbs), só com carga solar","num",{"min":0,"max":60,"step":0.1,"unit":"°C","opt":true}],["m","Taxa metabólica média da atividade (Quadro 2 da NR-15)","num",{"min":100,"max":606,"step":1,"unit":"W","ph":"300"}],["roupa","Vestimenta","sel",{"opts":{"0":"Uniforme (calça e camisa de manga longa) ou macacão de tecido: +0","2":"Macacão de poliolefina: +2 °C","3":"Vestimenta ou macacão forrado (tecido duplo): +3 °C","4":"Avental longo de manga longa impermeável ao vapor: +4 °C","10":"Macacão impermeável ao vapor: +10 °C","12":"Macacão impermeável ao vapor sobre a roupa de trabalho: +12 °C","0.5":"Macacão de polipropileno SMS: +0,5 °C"}}],["capuz","Vestimenta com capuz (+1 °C)","chk",{"pts":0}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var i=function(a){return null==a||""===a||isNaN(+a)?0:+a};
var c;
var u=[100,102,104,106,108,110,112,115,117,119,122,124,127,129,132,135,137,140,143,146,149,152,155,158,161,165,168,171,175,178,182,186,189,193,197,201,205,209,214,218,222,227,231,236,241,246,251,256,261,266,272,277,283,289,294,300,306,313,319,325,332,339,346,353,360,367,374,382,390,398,406,414,422,431,440,448,458,467,476,486,496,506,516,526,537,548,559,570,582,594,606].map(function(a,e){return[a,Math.round(10*(33.7-.1*e))/10]});
var p=(c=[100,101,103,105,106,108,110,112,114,115,117,119,121,123,125,127,129,132,134,136,138,140,143,145,148,150,152,155,158,160,163,165,168,171,174,177,180,183,186,189,192,195,198,201,205,208,212,215,219,222,226,230,233,237,241,245,249,253,257,262,266,270,275,279,284,289,293,298,303,308,313,318,324,329,334,340,345,351,357,363,369,375,381,387,394,400,407,414,420,427,434,442,449,456,464].map(function(a,e){return[a,Math.round(10*(31.7-.1*e))/10]}),[[479,22.1],[487,22],[495,21.9],[503,21.8],[511,21.7],[520,21.6],[528,21.5],[537,21.4],[546,21.3],[555,21.2],[564,21.1],[573,21],[583,20.9],[593,20.8],[602,20.7]].forEach(function(a){c.push(a)}),c);
function v(a,e){for(var o=null,r=0;r<a.length;r++)e>=a[r][0]&&(o=a[r][1]);return o}
a.def("ibutg",function(a){var r="1"===a.solar;if(r&&null==a.tbs)return{error:"Com carga solar direta, informe também a temperatura de bulbo seco (tbs)."};var t,n=r?.7*a.tbn+.1*a.tbs+.2*a.tg:.7*a.tbn+.3*a.tg,s=i(a.roupa)+(e.yes(a.capuz)?1:0),d=n+s,l=+a.m,m=v(u,l),c=v(p,l),f="aberto"===a.amb,h=d>m?"high":d>c?"mid":"low";t="high"===h?f?"Acima do limite de exposição ocupacional: medidas corretivas obrigatórias (NR-9). A insalubridade do Anexo 3 da NR-15 não se aplica a atividades a céu aberto sem fonte artificial de calor":"Acima do limite de exposição: atividade insalubre em grau médio (NR-15, Anexo 3) e medidas corretivas obrigatórias (NR-9)":"mid"===h?"Acima do nível de ação e abaixo do limite: medidas preventivas (água fresca, trabalho pesado nos horários mais amenos, aclimatização)":"Abaixo do nível de ação para esta taxa metabólica";var b=[["IBUTG calculado (sem ajuste de vestimenta)",o(n,1)+" °C"],["Limite de exposição para "+o(l,0)+" W (IBUTG máx.)",o(m,1)+" °C"],["Nível de ação para "+o(l,0)+" W",o(c,1)+" °C"]];return s&&b.splice(1,0,["Ajuste de vestimenta","+"+o(s,1)+" °C"]),{main:[o(d,1),"°C"],label:"IBUTG"+(s?" ajustado pela vestimenta":""),level:h,verdict:t,rows:b,note:"A avaliação legal exige o IBUTG médio e a taxa metabólica média da pior janela de 60 minutos corridos, medidos conforme a NHO 06 da Fundacentro.",raw:{ibutg:d,base:n,lim:m,acao:c}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
