import { createServerFn } from '@tanstack/react-start';
import { leadSchema } from './lead-schema';
export const submitLead = createServerFn({method:'POST'}).inputValidator((input:unknown)=>leadSchema.parse(input)).handler(async({data})=>{
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const common={name:data.name,email:data.email};
 const result=data.kind==='guide'?await supabaseAdmin.from('guide_requests').insert(common).select('id').single():data.kind==='company'?await supabaseAdmin.from('company_requests').insert({...common,phone:data.phone,company:data.company,sector:data.sector,people:data.people ?? null,province:data.province,message:data.message}).select('id').single():data.kind==='course'?await supabaseAdmin.from('course_registrations').insert({...common,phone:data.phone,course_slug:data.course_slug,message:data.message}).select('id').single():await supabaseAdmin.from('contact_submissions').insert({...common,phone:data.phone,message:data.message}).select('id').single();
 if(result.error)throw new Error('No pudimos guardar tu consulta. Intentá nuevamente.');
 return {success:true,id:result.data.id};
});
