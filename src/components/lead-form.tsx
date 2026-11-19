import { useId, useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { ArrowUpRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { leadSchema } from '@/lib/lead-schema';
import { submitLead } from '@/lib/leads.functions';
export function LeadForm({kind='contact',courseSlug=''}:{kind?:'contact'|'company'|'course'|'guide';courseSlug?:string}) {
 const id=useId();const [status,setStatus]=useState<'idle'|'loading'|'success'|'error'>('idle');const [error,setError]=useState('');const send=useServerFn(submitLead);
 if(status==='success')return <div className="form-feedback" role="status"><CheckCircle2 className="mb-3 text-brand"/><strong>{kind==='guide'?'Tu interés en la guía quedó registrado.':'¡Recibimos tu consulta!'}</strong><p>{kind==='guide'?'La guía está en preparación.':'Gracias por escribir a Innova Segura.'}</p><Button variant="outline" onClick={()=>setStatus('idle')}>Enviar otra consulta</Button></div>;
 const field=(name:string,label:string,required=false,type='text')=><label className="field" htmlFor={`${id}-${name}`}><span>{label}{required?' *':''}</span><input id={`${id}-${name}`} name={name} type={type} required={required} maxLength={name==='email'?255:150} min={type==='number'?1:undefined} max={type==='number'?100000:undefined}/></label>;
 return <form onSubmit={async(e)=>{e.preventDefault();const fd=new FormData(e.currentTarget);const values=Object.fromEntries(fd);const parsed=leadSchema.safeParse({...values,kind,course_slug:courseSlug,people:fd.get('people')?Number(fd.get('people')):undefined});if(!parsed.success){setError(parsed.error.issues[0]?.message??'Revisá los campos.');setStatus('error');return;}setStatus('loading');try{await send({data:parsed.data});setStatus('success');}catch(err){setError(err instanceof Error?err.message:'No pudimos enviar tu consulta.');setStatus('error');}}}>
 <div className="form-grid">{field('name','Nombre y apellido',true)}{field('email','Email',true,'email')}{kind!=='guide'&&field('phone','Teléfono')}{kind==='company'&&<>{field('company','Empresa',true)}{field('sector','Rubro')}{field('people','Cantidad de personas',false,'number')}{field('province','Provincia')}</>}{kind!=='guide'&&<label className="field full" htmlFor={`${id}-message`}>Tu consulta{kind==='contact'?' *':''}<textarea id={`${id}-message`} name="message" required={kind==='contact'} maxLength={2000}/></label>}</div>
 {status==='error'&&<p className="form-feedback text-brand" role="alert">{error}</p>}<Button className="mt-5" variant="brand" disabled={status==='loading'} type="submit">{status==='loading'?<LoaderCircle className="animate-spin"/>:<ArrowUpRight/>}{kind==='guide'?'Avisame cuando esté disponible':kind==='company'?'Pedir propuesta':kind==='course'?'Solicitar inscripción':'Enviar consulta'}</Button><p className="pending-note mt-3">Usaremos tus datos para responder esta solicitud.</p>
 </form>;
}
