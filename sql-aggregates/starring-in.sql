select "g". "name" as "genre",
      count ("cm".*)
  from "castMembers" as "cm"
join "filmGenre" using ("filmId")
join "genres" as "g" using ("genreId")
where "actorId" = 178
group by "g" . "name";
