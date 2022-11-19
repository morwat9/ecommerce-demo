import SearchCard from "./search-card/search-card";
import styles from "./product-search.module.css";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NoResults from "./no-results/no-results";

export default function ProductSearch({ data }) {
  const [search, setSearch] = useState("");

  const searchRegex = new RegExp(search, "g");

  function handleInput(value) {
    setSearch(value);
  }

  let filteredProducts = data.filter((el) => {
    const formattedSearch = el.title.toLowerCase();
    return formattedSearch.match(searchRegex);
  });

  return (
    <div>
      <div className={styles["field-wrapper"]}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Search"
            variant="standard"
            onChange={(e) => handleInput(e.target.value.toLowerCase())}
          />
        </Box>
      </div>
      {filteredProducts.length === 0 ? (
        <NoResults />
      ) : (
        <div className={styles["card-wrapper"]}>
          {filteredProducts.map((product) => (
            <SearchCard {...product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
