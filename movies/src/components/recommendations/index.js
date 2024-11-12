import React, { useEffect, useState }  from "react";
import { getRecommendations } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import MovieList from "../movieList/index.js";
import Grid from "@mui/material/Grid2";
import AddToPlaylist from "../cardIcons/playlistAdd";

export default function Recommendations({ movie }) {
  const { data , error, isLoading, isError } = useQuery(
    ["recommendations", { id: movie.id }],
    getRecommendations
  );
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const recommendations = data.results;


  return (
    <Grid container>
      <Grid container sx={{flex: "1 1 500px"}}>
        <MovieList action={(movie) => 
          {return <AddToPlaylist movie={movie} />
          }} 
          movies={recommendations}>
        </MovieList>
      </Grid>
    </Grid>

  // <TableContainer component={Paper}>
  //   <Table>
  //     <TableHead>
  //       <TableRow>
  //         <TableCell>Title</TableCell>
  //         <TableCell>Overview</TableCell>
  //         <TableCell>Release Date</TableCell>
  //       </TableRow>
  //     </TableHead>
  //     <TableBody>
  //       {recommendations.map((r) => (
  //         <TableRow key={r.id}>
  //           <TableCell>
  //             <Link to={`/movies/${r.id}`}>
  //               {r.title}
  //             </Link>
  //           </TableCell>
  //           <TableCell>{excerpt(r.overview)}</TableCell>
  //           <TableCell>{r.release_date}</TableCell>
  //         </TableRow>
  //       ))}
  //     </TableBody>
  //   </Table>
  // </TableContainer>
  );
}
