select
      "firstName",
      "lastName",
      sum("amount") as "totalPaid"
  from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "totalPaid" desc;
