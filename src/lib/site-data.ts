export const siteConfig = { whatsapp: '', community: '', guideUrl: '', director: '[Nombre de la directora]' };
export const courses = [
 {slug:'normativa-argentina', title:'[Curso: normativa argentina aplicada]', month:'FEBRERO', type:'curso', description:'[Programa de capacitación por confirmar]', duration:'[Duración]', price:'[Precio]'},
 {slug:'prevencion-riesgos', title:'[Webinar: prevención de riesgos]', month:'MARZO', type:'webinar', description:'[Tema y fecha por confirmar]', duration:'[Duración]', price:'Gratuito'},
 {slug:'seguridad-en-altura', title:'[Curso: seguridad en altura]', month:'ABRIL', type:'curso', description:'[Programa de capacitación por confirmar]', duration:'[Duración]', price:'[Precio]'},
];
export const articles = [
 {slug:'ley-19587', title:'Qué dice la Ley 19.587, en 5 minutos', category:'NORMATIVA ARGENTINA'},
 {slug:'cobertura-art', title:'Qué cubre la ART y qué no', category:'PREVENCIÓN LABORAL'},
 {slug:'uso-epp', title:'Errores frecuentes en el uso de EPP', category:'SEGURIDAD EN LA PRÁCTICA'},
];
export function pageHead(title:string,description:string) { return {meta:[{title:`${title} | Innova Segura`},{name:'description',content:description},{property:'og:title',content:`${title} | Innova Segura`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}; }
