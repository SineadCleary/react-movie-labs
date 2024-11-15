import React, { useEffect, useState }  from "react";
import { getTranslations } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

export default function Translations({ movie }) {
  const { data , error, isLoading, isError } = useQuery(
    ["translations", { id: movie.id }],
    getTranslations
  );
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const translations = data.translations;

  return (
    // console.log(translations)

    <>
    {translations.map((t) => (
      // iso_3166_1 is the country code
      <li key={t.iso_3166_1}> 
        <Link to={`/movies/${movie.id}/${t.iso_639_1}-${t.iso_3166_1}`}>
          <Chip label={t.name} clickable variant="outlined" />
        </Link>
      </li>
    ))}
    </> 
  );
}
