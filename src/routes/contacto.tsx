import {createFileRoute} from '@tanstack/react-router';
import {PageIntro,Eyebrow} from '@/components/editorial';
import {LeadForm} from '@/components/lead-form';
import {CommunityButton} from '@/components/site-shell';
import {pageHead} from '@/lib/site-data';
export const Route=createFileRoute('/contacto')({head:()=>pageHead('Contacto y consultas','Contactá a Innova Segura para conocer sus cursos de Higiene y Seguridad online en vivo y capacitaciones para empresas en Argentina.'),component:Page});
function Page(){return <><PageIntro label="ESTAMOS PARA ACOMPAÑARTE" title="Empecemos una conversación" description="¿Querés conocer una capacitación o tenés una consulta? Contanos cómo podemos ayudarte."/><section className="section"><div className="container split items-start"><div><Eyebrow>CONTACTO</Eyebrow><h2>Tu consulta importa.</h2><p className="body-copy">Córdoba, Argentina<br/>[Email de contacto]<br/>[Número de WhatsApp]</p><CommunityButton/></div><LeadForm/></div></section></>}
