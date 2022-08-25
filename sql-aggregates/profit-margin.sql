WITH replacementCostTable as (
  select
      "f"."filmId",
      "f"."title",
      count("i".*) as "totalInventory",
      "f"."replacementCost",
      count("i".*) * "f". "replacementCost" as "totalReplacementCost"
  from "films" as "f"
join "inventory" as "i" using ("filmId")
group by "f"."filmId"
),


 revenueTable as (
  select
        "f"."filmId",
        "f"."title",
        SUM("p"."amount") as "totalRevenue"
    from "films" as "f"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" as "p" using ("rentalId")
  group by "f"."filmId"
)


  select
        "f"."title",
        "f"."description",
        "f"."rating",
        "rev"."totalRevenue"-"r"."totalReplacementCost" as "totalProfit"
    from "films" as "f"
  join revenueTable as "rev" using ("filmId")
  join replacementCostTable as "r" using ("filmId")
  order by "totalProfit" desc
  limit 5;
