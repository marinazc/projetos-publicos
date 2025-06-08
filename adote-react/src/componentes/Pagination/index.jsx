import Pagination from "@mui/material/Pagination";

export default function Paginacao({ total, atual, aoMudar }) {
  return (
    <Pagination
      count={total}
      page={atual}
      onChange={aoMudar}
      variant="outlined"
    />
  );
}
