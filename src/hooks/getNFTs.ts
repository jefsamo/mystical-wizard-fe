import { useEffect, useState } from "react";

export type NFTItem = {
  identifier: string;
  name: string;
  image_url: string;
};

export const useNFTs = () => {
  const [nfts, setNfts] = useState<NFTItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchNFTs = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          "https://mystical-wizard.onrender.com/api/v1/collection-lists"
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setNfts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNFTs();

    return () => {
      controller.abort();
    };
  }, []);

  return { nfts, isLoading, error };
};
