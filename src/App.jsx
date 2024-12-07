import "./index.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <TopBar />
        <Footer />
      </div>
    </>
  );
}
