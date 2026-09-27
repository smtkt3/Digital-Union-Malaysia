export const businessAddress = "UG 14, Complex Wilayah, 50100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur";

export const businessMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;

export const businessPostalAddress = {
  "@type": "PostalAddress",
  streetAddress: "UG 14, Complex Wilayah",
  postalCode: "50100",
  addressLocality: "Kuala Lumpur",
  addressRegion: "Wilayah Persekutuan Kuala Lumpur",
  addressCountry: "MY"
};
