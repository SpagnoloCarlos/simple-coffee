import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
function App() {
  const [option, setOption] = useState<"all" | "available">("all");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (opt: "all" | "available") => {
    if (opt === "available") {
      const filteredData = data?.filter(({ available }) => available);
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
    setOption(opt);
  };

  return (
    <main>
      <section>
        <header>
          <h1>Our Collection</h1>
          <h3>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </h3>
          <div>
            <button
              data-selected={option === "all" ? "yes" : "no"}
              onClick={() => handleClick("all")}
            >
              All Products
            </button>
            <button
              data-selected={option === "available" ? "yes" : "no"}
              onClick={() => handleClick("available")}
            >
              Available Now
            </button>
          </div>
        </header>
        <ul>
          {filteredData?.length > 0 &&
            filteredData.map(
              ({
                id,
                image,
                name,
                popular,
                price,
                votes,
                rating,
                available,
              }) => (
                <Card
                  key={`card_product_${id}`}
                  id={id}
                  name={name}
                  image={image}
                  popular={popular}
                  price={price}
                  votes={votes}
                  rating={rating}
                  available={available}
                />
              )
            )}
        </ul>
      </section>
    </main>
  );
}

export default App;
