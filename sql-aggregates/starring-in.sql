select "g". "name" as "genre",
      count ("cm".*)
  from "castMembers" as "cm"
join "actors" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" as "g" using ("genreId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "g" . "name";
