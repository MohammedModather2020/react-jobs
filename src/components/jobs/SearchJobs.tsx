import { useTranslation } from "react-i18next";

// mui
import { TextField, Typography, Box } from "@mui/material";


interface IProps {
  search: string | undefined;
  setSearch: (search: string) => void;
}

function SearchJobs({ search, setSearch }: IProps) {
  const { t } = useTranslation();
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('search-jobs')}
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          type="text"
          placeholder={t('search')}
          variant="outlined"
          fullWidth
        />
      </form>
    </Box>
  )
}

export default SearchJobs