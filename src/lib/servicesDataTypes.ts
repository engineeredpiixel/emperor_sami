export type ServiceContentType = {
  id: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  description: string;
  details: {
    title: string;
    text: string;
  }[];
  process: {
    step: string;
    desc: string;
  }[];
  bentoFeatures: {
    title: string;
    desc: string;
    span: number;
  }[];
  caseStudy: {
    title: string;
    image: string;
    stat1: { label: string; value: string };
    stat2: { label: string; value: string };
    stat3: { label: string; value: string };
  };
  faqs: {
    q: string;
    a: string;
  }[];
};
