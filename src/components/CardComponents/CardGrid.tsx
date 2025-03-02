import Card from "./Card";
import { Show } from "../../entities/shows";

interface CardGridProps {
  shows: Show[];
}

const CardGrid = ({ shows }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shows.map((show, index) => (
        <Card
          key={`${show.name}-${index}`}
          name={show.name}
          backdrop_path={show.backdrop_path}
          vote_average={show.vote_average}
          type={"show"}
        />
      ))}
    </div>
  );
};

export default CardGrid;
