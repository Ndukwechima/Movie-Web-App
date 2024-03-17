import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

function Card({ result }) {
  return (
    <div
      className="group cursor-pointer sm:hover:shadow-slate-400
    sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 ease-in-out"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition duration-300 ease-in-out"
          alt="image"
        ></Image>
        <div className="p-3">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold text-amber-600 truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-sm">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
