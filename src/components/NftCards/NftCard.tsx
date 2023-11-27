import { NFTItem } from "../../hooks/getNFTs";

type CardProps = {
  nft: NFTItem;
};

const NftCard = ({ nft }: CardProps) => {
  return (
    <div className="card">
      <img src={`${nft.image_url}`} alt="" className="card-image" />
      <div className="nft-details">
        <p className="name">{nft.name.slice(0, 22)}...</p>
        <p className="item-id">{nft.identifier}</p>
      </div>
    </div>
  );
};

export default NftCard;
