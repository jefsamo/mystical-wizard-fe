import { useEffect, useState } from "react";

type Collection = {
  image_url: string;
  name: string;
  description: string;
};

export const useCollection = () => {
  const [collection, setCollection] = useState<Collection>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const ftechCollectionDetails = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          "https://mystical-wizard.onrender.com/api/v1/collection-lists/collection"
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setCollection(data);
        // if (data.Response === "False") {
        //   throw new Error("Movie not found");
        // }
        // setCollections(data.Search);
        // setError("");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    ftechCollectionDetails();

    return () => {
      controller.abort();
    };
  }, []);

  return { collection, isLoading, error };
};
