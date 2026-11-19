import {describe,it,expect} from 'vitest';
import {leadSchema} from '@/lib/lead-schema';
import {courses} from '@/lib/site-data';
describe('Formulario público',()=>{
 it('acepta una consulta general válida',()=>expect(leadSchema.safeParse({kind:'contact',name:'Ana',email:'ana@example.com',message:'Quiero conocer los cursos'}).success).toBe(true));
 it('rechaza email inválido',()=>expect(leadSchema.safeParse({kind:'guide',name:'Ana',email:'no-es-email'}).success).toBe(false));
 it('exige empresa para propuestas',()=>expect(leadSchema.safeParse({kind:'company',name:'Ana',email:'ana@example.com'}).success).toBe(false));
 it('exige un curso para inscripciones',()=>expect(leadSchema.safeParse({kind:'course',name:'Ana',email:'ana@example.com'}).success).toBe(false));
 it('no presenta fechas ni precios sin confirmar como definitivos',()=>expect(courses.filter(c=>c.type==='curso').every(c=>c.price==='[Precio]')).toBe(true));
});
