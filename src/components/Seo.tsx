import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector.replace(/[[\]']/g, "").split("=");
    el.setAttribute(key.replace("meta", ""), val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

/** Keeps per-route title, description and canonical URL in sync. */
const Seo = ({ title, description, path }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);

    const href = `${window.location.origin}${path}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = href;
  }, [title, description, path]);

  return null;
};

export default Seo;
