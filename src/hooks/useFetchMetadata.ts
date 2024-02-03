import { useState, useEffect } from "react";

// Define an interface for your metadata
interface Metadata {
  title: string;
  description: string;
  // Add other properties as needed
}

const useFetchMetadata = (url: string) => {
  // Initialize metadata with a specific type
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMetadata({
          title: data.data.attributes.SEO.metaTitle,
          description: data.data.attributes.SEO.metaDescription,
          // Include other metadata properties as needed
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
