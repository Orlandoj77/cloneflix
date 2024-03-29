import React from "react";
import "./FeatureMovie.css";

export default function FeatureMovie({ item }) {
  console.log("item");
  console.log(item);

  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let descr = item.overview;
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + "...";
  }

  return (
    <section
      className="feature"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      {" "}
      {/*4.0 - exibindo oas dados do fileme selecionado - percorrendo as chaves dos objeto(s)*/}{" "}
      <div className="feature__vertical">
        <div className="feature__horizontal">
          <div className="feature__name"> {item.original_name} </div>{" "}
          <div className="feature__info">
            <div className="feature__points">
              {" "}
              {item.vote_average}
              pontos{" "}
            </div>{" "}
            {/*4.2 - getFullYear é o metodo que pega apenas o ano  data  nova -  according to local time.
             */}{" "}
            <div className="feature__year"> {firstDate.getFullYear} </div>{" "}
            <div className="feature__seasons">
              {" "}
              {item.number_of_seasons}
              temporada {item.number_of_seasons !== 1 ? "s" : ""}{" "}
            </div>{" "}
            <div className="feature__description"> {descr} </div>{" "}
            <div className="feature__buttons">
              <a className="feature__watch_button" href={`/watch/${item.id}`}>
                Assistir por 50kz{" "}
              </a>{" "}
              <a className="feature__mylist_button" href={`/list/${item.id}`}>
                Meus filmes{" "}
              </a>{" "}
            </div>{" "}
            <div className="feature__genres">
              {" "}
              {/* //4.6 -  Join vai juntar as informaçoes do arrei, usando  avirgura como separador*/}{" "}
              <strong> Gêneros: {genres.join(", ")} </strong>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
