import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { venueData } from "../../data/venueData";
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_NAME,
  SITE_URL,
  VENUE_SEO,
} from "../../data/siteMetadata";

const DEFAULT_DESCRIPTION =
  "Discover T-HOSPITALITY GROUP and six distinctive Bangkok destinations: THAY, TDERM, GOT, REC., XIM, and CHARTER.";

function setMeta(selector, attributes, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

function absoluteUrl(value) {
  if (!value) return DEFAULT_SOCIAL_IMAGE;
  return new URL(value, SITE_URL).href;
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "T-Hospitality",
    url: SITE_URL,
    logo: DEFAULT_SOCIAL_IMAGE,
    sameAs: Object.values(VENUE_SEO).flatMap((venue) => venue.sameAs),
  };
}

function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function venueSchema(slug, venue, image) {
  const url = `${SITE_URL}/venue/${slug}`;
  const schema = {
    "@type": "LocalBusiness",
    "@id": `${url}#venue`,
    name: venue.name,
    url,
    image,
    description: venue.description,
    telephone: venue.telephone,
    address: { "@type": "PostalAddress", ...venue.address },
    sameAs: venue.sameAs,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: venue.telephone,
      url: venue.lineUrl,
      availableLanguage: ["English", "Thai"],
    },
  };

  if (venue.openingHours) schema.openingHours = venue.openingHours;
  return schema;
}

function getSeoForPath(pathname) {
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const segments = cleanPath.split("/").filter(Boolean);
  const slug = segments[0] === "venue" ? segments[1] : null;
  const venue = slug ? VENUE_SEO[slug] : null;
  const isHighlights = Boolean(venue && segments[2] === "highlight");

  if (cleanPath === "/") {
    return {
      title: `${SITE_NAME} | Bangkok Hospitality & Nightlife Collective`,
      description: DEFAULT_DESCRIPTION,
      canonical: `${SITE_URL}/`,
      image: DEFAULT_SOCIAL_IMAGE,
      type: "website",
      robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          organizationSchema(),
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: SITE_NAME,
            alternateName: "T-Hospitality",
            url: `${SITE_URL}/`,
            inLanguage: ["en", "th"],
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          {
            "@type": "ItemList",
            name: "T-HOSPITALITY venues",
            itemListElement: Object.entries(VENUE_SEO).map(([venueSlug, item], index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              url: `${SITE_URL}/venue/${venueSlug}`,
            })),
          },
        ],
      },
    };
  }

  if (cleanPath === "/venues") {
    const canonical = `${SITE_URL}/venues`;
    const title = `Our Bangkok Venues | ${SITE_NAME}`;
    const description =
      "Explore all T-HOSPITALITY destinations in Bangkok, including THAY, TDERM, GOT, REC., XIM, and CHARTER.";

    return {
      title,
      description,
      canonical,
      image: DEFAULT_SOCIAL_IMAGE,
      type: "website",
      robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          organizationSchema(),
          {
            "@type": "CollectionPage",
            "@id": `${canonical}#webpage`,
            name: title,
            url: canonical,
            description,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: Object.entries(VENUE_SEO).map(([venueSlug, item], index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                url: `${SITE_URL}/venue/${venueSlug}`,
              })),
            },
          },
          breadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Venues", url: canonical },
          ]),
        ],
      },
    };
  }

  if (cleanPath === "/contact") {
    return {
      title: `Contact Our Bangkok Venues | ${SITE_NAME}`,
      description: "Find locations, telephone numbers, and official LINE accounts for every T-HOSPITALITY venue in Bangkok.",
      canonical: `${SITE_URL}/contact`,
      image: DEFAULT_SOCIAL_IMAGE,
      type: "website",
      robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          organizationSchema(),
          {
            "@type": "ContactPage",
            "@id": `${SITE_URL}/contact#webpage`,
            name: `Contact ${SITE_NAME}`,
            url: `${SITE_URL}/contact`,
            description: "Contact details for all T-HOSPITALITY venues in Bangkok.",
            mainEntity: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Contact", url: `${SITE_URL}/contact` },
          ]),
        ],
      },
    };
  }

  if (venue) {
    const venueImage = absoluteUrl(venueData[slug]?.heroImage);
    const canonical = `${SITE_URL}/venue/${slug}${isHighlights ? "/highlight" : ""}`;
    const title = isHighlights
      ? `${venue.name} Event Highlights | ${SITE_NAME}`
      : `${venue.name} Bangkok | ${SITE_NAME}`;
    const description = isHighlights
      ? `Explore event highlights, nightlife moments, and photo galleries from ${venue.name} Bangkok.`
      : venue.description;
    const schemas = [
      organizationSchema(),
      venueSchema(slug, venue, venueImage),
      breadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: venue.name, url: `${SITE_URL}/venue/${slug}` },
        ...(isHighlights ? [{ name: "Event Highlights", url: canonical }] : []),
      ]),
    ];

    if (isHighlights) {
      schemas.push({
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        name: title,
        url: canonical,
        description,
        about: { "@id": `${SITE_URL}/venue/${slug}#venue` },
      });
    } else {
      schemas.push({
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        name: title,
        url: canonical,
        description,
        about: { "@id": `${canonical}#venue` },
      });
    }

    return {
      title,
      description,
      canonical,
      image: venueImage,
      type: "website",
      robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      schema: { "@context": "https://schema.org", "@graph": schemas },
    };
  }

  return {
    title: `Page Not Found | ${SITE_NAME}`,
    description: "The requested T-HOSPITALITY page could not be found.",
    canonical: `${SITE_URL}${cleanPath}`,
    image: DEFAULT_SOCIAL_IMAGE,
    type: "website",
    robots: "noindex,nofollow",
    schema: { "@context": "https://schema.org", "@graph": [organizationSchema()] },
  };
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    document.title = seo.title;
    setCanonical(seo.canonical);
    setMeta('meta[name="description"]', { name: "description" }, seo.description);
    setMeta('meta[name="robots"]', { name: "robots" }, seo.robots);
    setMeta('meta[name="googlebot"]', { name: "googlebot" }, seo.robots);
    setMeta('meta[property="og:type"]', { property: "og:type" }, seo.type);
    setMeta('meta[property="og:url"]', { property: "og:url" }, seo.canonical);
    setMeta('meta[property="og:site_name"]', { property: "og:site_name" }, SITE_NAME);
    setMeta('meta[property="og:title"]', { property: "og:title" }, seo.title);
    setMeta('meta[property="og:description"]', { property: "og:description" }, seo.description);
    setMeta('meta[property="og:image"]', { property: "og:image" }, seo.image);
    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, seo.title);
    setMeta('meta[name="twitter:description"]', { name: "twitter:description" }, seo.description);
    setMeta('meta[name="twitter:image"]', { name: "twitter:image" }, seo.image);

    const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
    if (verification) {
      setMeta(
        'meta[name="google-site-verification"]',
        { name: "google-site-verification" },
        verification,
      );
    }

    let schemaScript = document.head.querySelector("#site-structured-data");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "site-structured-data";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(seo.schema);
  }, [pathname]);

  return null;
}
