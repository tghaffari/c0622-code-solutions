select "c"."name" as "country",
        count ("ci".*) as "totalCities"
  from "countries" as "c"
join "cities" as "ci" using ("countryId")
group by "countryId";
