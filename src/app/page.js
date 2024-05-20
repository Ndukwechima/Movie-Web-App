import Results from "@/components/Results";

// const API_KEY = "981512264034990ace65fe84a822b7c5";
const API_KEY = process.env.NEXT_PUBLIC_MY_API_KEY;
// console.log("API_KEY:", process.env.MY_API_KEY);
async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(data.results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

export default Home;
