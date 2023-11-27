import { useState } from "react";
import { useCollection } from "../../hooks/getCollection";
import "./collectionDetails.css";

const collapsedNumWords = 11;

const CollectionDetails = () => {
  const { collection } = useCollection();
  const [showExpand, setShowExpand] = useState(false);

  const shortenedDescription =
    collection?.description?.split(" ").slice(0, collapsedNumWords).join(" ") +
    "...";
  return (
    <div className="container">
      <div className="collection-details">
        <div className="details-left">
          <div className="left-content">
            <img src={`${collection?.image_url}`} alt="" />
            <p className="name">{collection?.name}</p>

            <div className="collection-description">
              {showExpand ? collection?.description : shortenedDescription}

              <span
                className="show"
                onClick={() => setShowExpand((expand) => !expand)}
              >
                {showExpand ? "   See less" : "  See more"}
              </span>
            </div>
          </div>
        </div>
        <div className="details-right"></div>
      </div>
    </div>
  );
};

export default CollectionDetails;
