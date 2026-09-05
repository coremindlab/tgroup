import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const isValidMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId || "");

function initializeGoogleAnalytics() {
  if (!isValidMeasurementId || window.__tHospitalityGaInitialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.id = "google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });
  window.__tHospitalityGaInitialized = true;
}

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  useEffect(() => {
    if (!isValidMeasurementId) return;

    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    if (window.__tHospitalityLastPageView === pagePath) return;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    });
    window.__tHospitalityLastPageView = pagePath;
  }, [location]);

  return null;
}
