import { Navigation } from "@/components/PageComponents/Navigation";
import PageHeading from "@/components/PageComponents/PageHeading";
import ShowDetails from "../components/ShowDetails/ShowDetails";
import { useParams } from "react-router-dom";
import dragon from "../assets/dragon.webp";
import knight from "../assets/knight.webp";
import wizard from "../assets/wizard.webp";

const ShowDetailsPage = () => {
  const { title } = useParams();

  const show = {
    id: 1,
    title: "Show 1",
    description: "Description for Show 1",
    images: [dragon, knight, wizard],
    rating: 8.5,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <PageHeading title={title} />
      <main className="flex h-full">
        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <ShowDetails show={show} />
        </div>
      </main>
    </div>
  );
};

export default ShowDetailsPage;
