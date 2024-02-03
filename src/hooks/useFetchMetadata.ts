// hooks/useFetchMetadata.ts
import { useState, useEffect } from "react";

const useFetchMetadata = (url: string) => {
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMetadata({
          title: data.data.attributes.SEO.metaTitle,
          description: data.data.attributes.SEO.metaDescription,
          // ...other metadata
        });
      } catch (error) {
        console.error("Failed to fetch metadata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { metadata, loading };
};

export default useFetchMetadata;
