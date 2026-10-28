/**
 * Discover Sumur - Site Configuration
 * Central configuration file for tourism website identity, contact details,
 * verified coordinates, map links, and general settings.
 */

export interface ContactInfoConfig {
  tourismInquiries: string;
  localGuides: string;
  homestayInquiries: string;
  emailAddress: string;
  phoneNumber: string;
  postalAddress: string;
  isVerified: boolean;
  statusNotice: string;
}

export interface SiteConfig {
  siteName: string;
  tagline: string;
  heroSmallHeading: string;
  heroMainHeading: string;
  heroDescription: string;
  location: {
    village: string;
    valley: string;
    region: string;
    country: string;
    altitudeMeters: number;
    altitudeFeet: number;
    coordinates: {
      latitude: number;
      longitude: number;
      display: string;
    };
    googleMapsUrl: string;
  };
  contact: ContactInfoConfig;
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  siteName: "DISCOVER SUMOOR",
  tagline: "Discover the Beauty, Culture and Peace of Ladakh.",
  heroSmallHeading: "EXPLORE NUBRA VALLEY, LADAKH",
  heroMainHeading: "Discover the Hidden Beauty of Sumoor",
  heroDescription:
    "Explore the peaceful landscapes, Buddhist heritage, local culture, and natural beauty of Sumoor, Nubra Valley, Ladakh.",
  location: {
    village: "Sumoor",
    valley: "Nubra Valley",
    region: "Ladakh",
    country: "India",
    altitudeMeters: 3100,
    altitudeFeet: 10170,
    coordinates: {
      latitude: 34.6342,
      longitude: 77.6288,
      display: "34°38'03\" N, 77°37'44\" E",
    },
    // Configurable Google Maps link for Sumur Village in Nubra Valley
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sumur+Village+Nubra+Valley+Ladakh",
  },
  contact: {
    tourismInquiries: "General visitor assistance for travel planning in Sumur",
    localGuides: "Local community guides knowledgeable in monastery heritage & village trails",
    homestayInquiries: "Direct support for respectful village homestays",
    emailAddress: "", // Editable: user can add verified email here
    phoneNumber: "", // Editable: user can add verified phone here
    postalAddress: "Sumur Village, Nubra Sub-Division, Leh District, Ladakh, 194401, India",
    isVerified: false,
    statusNotice: "Local tourism contact information will be added soon.",
  },
  disclaimer:
    "Discover Sumur celebrates the natural beauty, culture, and heritage of Nubra Valley, Ladakh. This website is an independent informational tourism resource and not an official government portal.",
};
