import { NFTItem, useNFTs } from "../../hooks/getNFTs";
import NftCard from "./NftCard";
import "./nftCards.css";

const NftCards = () => {
  const { nfts } = useNFTs();
  console.log(nfts);
  return (
    <div className="container">
      <div className="cards">
        {nfts.map((nft: NFTItem, i) => {
          return <NftCard key={i} nft={nft} />;
        })}
      </div>
    </div>
  );
};

export default NftCards;
