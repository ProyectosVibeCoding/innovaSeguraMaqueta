import {createFileRoute} from '@tanstack/react-router';
import {PageIntro,Resources} from '@/components/editorial';
import {pageHead} from '@/lib/site-data';
export const Route=createFileRoute('/recursos')({head:()=>pageHead('Recursos de prevención laboral','Guías y artículos de Innova Segura sobre normativa argentina, ART y elementos de protección personal. Recursos de Higiene y Seguridad.'),component:Page});
function Page(){return <><PageIntro label="RECURSOS GRATUITOS" title="Compartir también es prevenir" description="Un espacio para acercar la normativa y la prevención a la práctica cotidiana. Contenidos en preparación."/><Resources/></>}
