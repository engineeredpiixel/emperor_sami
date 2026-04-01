import { ServiceContentType } from "./servicesDataTypes";
import { residentialServicesData } from "./servicesDataResidential";
import { commercialServicesData } from "./servicesDataCommercial";

// Re-export the type so existing components importing it from here do not break
export type { ServiceContentType };

// Consolidate the massive data structures into the single master dictionary Next.js requires
export const servicesData: Record<string, ServiceContentType> = {
  ...residentialServicesData,
  ...commercialServicesData
};
