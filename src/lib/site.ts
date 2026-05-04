/** Central place to update business details for the whole site. */
export const SITE = {
  name: "Samvan Technologies",
  shortName: "SamvanTech",
  tagline: "Practical IT delivery—from integrations to full product builds.",
  /** General inquiries */
  email: "pavankumardongri@gmail.com",
  /** HR / office */
  officeEmail: "hr@samvantechnologies.com",
  phone: "+91 86885 04460",
  phoneTel: "+918688504460",
  address: {
    line1: "Muthampet",
    line2: "Koutala",
    city: "Kumuram Bheem Asifabad",
    region: "Telangana",
    postal: "504299",
    country: "India",
  },
  /** Link for “View on map” */
  mapUrl:
    "https://www.openstreetmap.org/search?query=Muthampet%2C%20Koutala%2C%20Kumuram%20Bheem%20Asifabad%2C%20Telangana",
  /** Region map (district area) */
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=79.05%2C19.18%2C79.48%2C19.52&layer=mapnik",
} as const;

export function formatAddressLines() {
  const { line1, line2, city, region, postal, country } = SITE.address;
  return [line1, line2, `${city}, ${region} ${postal}`, country] as const;
}
