import { baseUrl } from "../shared";

import { useEffect, useState } from "react";

import NewsCard from "../components/NewsCard";

export default function NewsOverview() {
  const [error, setError] = useState();

  const [newsArticels, setArticles] = useState({
    id: "",
    title: "",
    description: "",
  });

  const url = baseUrl + "api/newslist/";

  // //Initial Load of the Webpage
  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        //Check if there is an error with the fetch
        if (response.status === 404) {
          //render a 404 component in this page
        } else if (response.status === 401) {
        }

        //If not return the JSON of the request
        return response.json();
      })
      .then((data) => {
        //Assign the data to "Articles" => it's an object
        setArticles({ data });
      })
      .catch((e) => {
        setError(e.message);
        console.log(error);
      });
  }, [error, url]); // Empty array ensures this only runs once => i add here now "error" and "url" to fix the eslint warning

  return (
    <>
      <h1 id="newsHeadline">News Overview</h1>

      {Array.isArray(newsArticels.data) ? (
        <div className="row row-cols-1 row-cols-md-4 g-3 mt-1">
          {newsArticels.data.map((article) => (
            <>
              <NewsCard
                id={article.id}
                image={article.image}
                title={article.title}
                description={article.description}
              />
            </>
          ))}
        </div>
      ) : (
        <p>No data available or data is not an array.</p>
      )}
    </>
  );
}
