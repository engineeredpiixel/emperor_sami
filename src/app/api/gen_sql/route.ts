import { NextResponse } from 'next/server';
import { servicesData } from '@/lib/servicesData';

export async function GET() {
  const items = [];
  
  function escapeSql(str: string) {
     if (!str) return '';
     return str.replace(/'/g, "''");
  }

  for (const [slug, data] of Object.entries(servicesData)) {
     // Hero section
     items.push(`  ('page_service_inner', 'service.${slug}.heroTitle', 'text', '${data.heroTitle} Hero Title', '${escapeSql(data.heroTitle)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.heroSubtitle', 'text', '${data.heroTitle} Hero Subtitle', '${escapeSql(data.heroSubtitle)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.heroImage', 'image', '${data.heroTitle} Hero Image', '${data.heroImage}'),`);
     
     // Capability Overview
     items.push(`  ('page_service_inner', 'service.${slug}.capabilityImage', 'image', '${data.heroTitle} Capability Image', '${data.capabilityImage}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.description', 'text', '${data.heroTitle} Description', '${escapeSql(data.description)}'),`);
     
     // Uncompromised Execution details
     data.details.forEach((det: any, i: number) => {
       items.push(`  ('page_service_inner', 'service.${slug}.details.${i}.title', 'text', '${data.heroTitle} Detail ${i+1} Title', '${escapeSql(det.title)}'),`);
       items.push(`  ('page_service_inner', 'service.${slug}.details.${i}.text', 'text', '${data.heroTitle} Detail ${i+1} Desc', '${escapeSql(det.text)}'),`);
     });
     
     // The Workflow process
     data.process.forEach((proc: any, i: number) => {
       items.push(`  ('page_service_inner', 'service.${slug}.process.${i}.step', 'text', '${data.heroTitle} Process ${i+1} Step', '${escapeSql(proc.step)}'),`);
       items.push(`  ('page_service_inner', 'service.${slug}.process.${i}.desc', 'text', '${data.heroTitle} Process ${i+1} Desc', '${escapeSql(proc.desc)}'),`);
     });

     // Executive Mechanics Bento
     data.bentoFeatures.forEach((feat: any, i: number) => {
       items.push(`  ('page_service_inner', 'service.${slug}.bentoFeatures.${i}.title', 'text', '${data.heroTitle} Bento ${i+1} Title', '${escapeSql(feat.title)}'),`);
       items.push(`  ('page_service_inner', 'service.${slug}.bentoFeatures.${i}.desc', 'text', '${data.heroTitle} Bento ${i+1} Desc', '${escapeSql(feat.desc)}'),`);
     });

     // Case Study
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.title', 'text', '${data.heroTitle} Case Study Title', '${escapeSql(data.caseStudy.title)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.image', 'image', '${data.heroTitle} Case Study Image', '${data.caseStudy.image}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.stat1.value', 'text', '${data.heroTitle} Case Study Stat 1 Val', '${escapeSql(data.caseStudy.stat1.value)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.stat1.label', 'text', '${data.heroTitle} Case Study Stat 1 Label', '${escapeSql(data.caseStudy.stat1.label)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.stat2.value', 'text', '${data.heroTitle} Case Study Stat 2 Val', '${escapeSql(data.caseStudy.stat2.value)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.stat2.label', 'text', '${data.heroTitle} Case Study Stat 2 Label', '${escapeSql(data.caseStudy.stat2.label)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.stat3.value', 'text', '${data.heroTitle} Case Study Stat 3 Val', '${escapeSql(data.caseStudy.stat3.value)}'),`);
     items.push(`  ('page_service_inner', 'service.${slug}.caseStudy.stat3.label', 'text', '${data.heroTitle} Case Study Stat 3 Label', '${escapeSql(data.caseStudy.stat3.label)}'),`);

     // FAQs
     data.faqs.forEach((faq: any, i: number) => {
       items.push(`  ('page_service_inner', 'service.${slug}.faqs.${i}.q', 'text', '${data.heroTitle} FAQ ${i+1} Q', '${escapeSql(faq.q)}'),`);
       items.push(`  ('page_service_inner', 'service.${slug}.faqs.${i}.a', 'text', '${data.heroTitle} FAQ ${i+1} A', '${escapeSql(faq.a)}'),`);
     });
  }
  
  const sql = `INSERT INTO admin_sidebar (id, label, icon, order_index) VALUES ('page_service_inner', 'Inner Service Pages', 'FileText', 5) ON CONFLICT (id) DO NOTHING;\n\nINSERT INTO site_content (section, key, type, label, value)\nVALUES\n${items.join('\n').replace(/,$/, '')}\nON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;`;

  return new NextResponse(sql, { headers: { 'content-type': 'text/plain' } });
}
