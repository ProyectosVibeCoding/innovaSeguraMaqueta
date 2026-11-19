import {createFileRoute} from '@tanstack/react-router';
import {PageIntro,CourseCalendar,QuoteBand} from '@/components/editorial';
import {pageHead} from '@/lib/site-data';
export const Route=createFileRoute('/cursos')({head:()=>pageHead('Cursos de Higiene y Seguridad online 2027','Calendario 2027 de cursos y webinars de Higiene y Seguridad online en vivo, con normativa argentina y acompañamiento personal.'),component:Page});
function Page(){return <><PageIntro label="CALENDARIO 2027 · ONLINE EN VIVO" title="Formación para dar el próximo paso" description="De febrero a diciembre, un espacio para seguir creciendo en prevención. Calendario preliminar pendiente de confirmación."/><CourseCalendar/><QuoteBand/></>}
