(function(e){function a(a){for(var n,i,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,i=1;i<o.length;i++){var c=o[i];0!==t[c]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"bea6dd30","chunk-0206bfa0":"8215adbc","chunk-04b93936":"2092ad3d","chunk-13a6037e":"b360e644","chunk-16015154":"7274aa04","chunk-17977988":"5995f84b","chunk-2c06842c":"211791af","chunk-2d208d90":"86fbfc27","chunk-2d21d0e2":"a7c097e9","chunk-2d22c123":"866c1c61","chunk-2e80bb9a":"ad47c0fa","chunk-3145fe0f":"e5a87fb9","chunk-328f70dd":"4d8d2d2a","chunk-3807499c":"b0b214a0","chunk-3dc647fd":"baad2e0d","chunk-4cdd78c0":"ba88f8fd","chunk-4fde0a08":"aa426fb1","chunk-515a8379":"d1043e55","chunk-53ccb27e":"1840e6af","chunk-59974754":"d56b046a","chunk-766a929b":"78721d45","chunk-839300a6":"93650def","chunk-c796899c":"6f2c2bc5","chunk-dbb9869e":"d8f4e54d",comple:"21fce977",creditos:"d1bd6be8",glosario:"63efa916",intro:"5ab91131",referencias:"9a0c4317",tema1:"b850e1ea",tema2:"e55f6fa1",tema3:"d8ffcdc9"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"77feafb9","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"bdae3807","chunk-766a929b":"92cde18b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"43f81962",creditos:"1ed47230",glosario:"d7719149",intro:"0e433876",referencias:"ed609239",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===t))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],m.parentNode.removeChild(m),o(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=t[e]=[a,o]}));a.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var o=t[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,o[1](d)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=o("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),u=l.exports,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),f=o("ae58"),p=o("7e58");d["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Componente Formativo con un nombre extremadamente largo y extenso",descripcionCurso:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Componentes",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Encabezados",hash:"encabezados"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Párrafos",hash:"parrafos"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Botones",hash:"botones"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Listas",hash:"listas"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Tablas",hash:"tablas"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Imagen",hash:"imagen"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Imagen Infográfica",hash:"imagen_infografica"},{icono:"far fa-file-alt",numero:"1.8",titulo:"Video",hash:"video"},{icono:"far fa-file-alt",numero:"1.9",titulo:"Bloques de texto destacado",hash:"texto_destacado"},{icono:"far fa-file-alt",numero:"1.10",titulo:"Sliders",hash:"sliders"},{icono:"far fa-file-alt",numero:"1.11",titulo:"Acordiones",hash:"acordiones"},{icono:"far fa-file-alt",numero:"1.12",titulo:"Pestañas o Tabs",hash:"tabs"},{icono:"far fa-file-alt",numero:"1.13",titulo:"Líneas de tiempo",hash:"lineas_tiempo"},{icono:"far fa-file-alt",numero:"1.14",titulo:"Pasos",hash:"pasos"},{icono:"far fa-file-alt",numero:"1.15",titulo:"Llamados a la acción",hash:"llamados_accion"},{icono:"far fa-file-alt",numero:"1.16",titulo:"Tarjetas",hash:"tarjetas"},{icono:"far fa-file-alt",numero:"1.17",titulo:"Tarjetas con número",hash:"tarjeta_numero"},{icono:"far fa-file-alt",numero:"1.18",titulo:"Modal",hash:"modal"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Producción Audiovisual",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Infografía Animada",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Video Motion",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Motion + Presentador",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Animación 2D",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Video interactivo",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Infografías",hash:"t_2_6"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Fundamentación Textil",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Identificación fibras por combustión",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Clasificación de los hilos",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Clasificación de tejidos",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Caracterización de los tejidos",hash:"t_3_5"},{icono:"far fa-file-alt",numero:"3.6",titulo:"Procesos textiles",hash:"t_3_6"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Zlackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ",link:"https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L"},{referencia:"Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947"},{referencia:"Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx."},{referencia:"Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549"},{referencia:"Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. "},{referencia:"Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241"},{referencia:"Áciedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551"},{referencia:"Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.",link:"https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728"}],glosario:[{termino:"MoodBoard",significado:"su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, <br/>realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico."},{termino:"Suftware",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."},{termino:"Pirognóstico",significado:"ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego."},{termino:"Áectores",significado:"en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijos."},{termino:"Moda",significado:"hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer."},{termino:"Diseño",significado:"actividad creativa orientada a soluciones idóneas a ciertas problemáticas."},{termino:"Tipología",significado:"estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas."},{termino:"Bidimensional",significado:"que se representa según su altura y su anchura y no su profundidad."},{termino:"Interés Inferior del menor",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."},{termino:"Interseccionalidad",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."},{termino:"Interés superior del menor",significado:"término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático."}],complementario:[{texto:"BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”",tipo:"Video",link:"https://www.google.com/"},{texto:"Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49",tipo:"Página web",descarga:"/downloads/prueba.pdf"},{texto:"Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.",tipo:"Artículo científico",link:"https://www.google.com/"},{texto:"Economía de Rosquilla. (s.f.).",tipo:"Página web",descarga:"/downloads/prueba.pdf"},{texto:"2 minutos para entender el desarrollo sostenible – Spanish",tipo:"Video",link:"https://www.google.com/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:["Nombre 1","Nombre 2"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});n["a"].prototype.$config=v;var k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:b,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.eb54df05.svg"},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.2beabdce.png"}});
//# sourceMappingURL=app.5eeb8355.js.map