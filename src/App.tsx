import "./App.css";
import CollectionDetails from "./components/CollectionDetails/CollectionDetails";
import Navbar from "./components/Navbar/Navbar";
import NftCards from "./components/NftCards/NftCards";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <CollectionDetails />
      <NftCards />
    </div>
  );
}

export default App;
