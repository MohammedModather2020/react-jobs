import React from 'react';
import { useTranslation } from 'react-i18next';


// mui
import { Button, Box, Typography } from "@mui/material";


interface IProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;

}

const Pagination: React.FC<IProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const { t } = useTranslation();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  // Determine the start and end of the page number range
  const startPage = Math.max(1, currentPage - 3);
  const endPage = Math.min(totalPages, currentPage + 3);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        sx={{ mr: 1 }}
      >
        {t('previous')}
      </Button>

      {startPage > 1 && (
        <>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handlePageChange(1)}
            sx={{ mx: 0.5 }}
          >
            1
          </Button>
          {startPage > 2 && <Typography variant="body2" sx={{ mx: 0.5 }}>...</Typography>}
        </>
      )}

      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={pageNumber === currentPage ? "contained" : "outlined"}
          color="primary"
          onClick={() => handlePageChange(pageNumber)}
          disabled={pageNumber === currentPage}
          sx={{ mx: 0.5 }}
        >
          {pageNumber}
        </Button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <Typography variant="body2" sx={{ mx: 0.5 }}>...</Typography>}
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handlePageChange(totalPages)}
            sx={{ mx: 0.5 }}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        sx={{ ml: 1 }}
      >
        {t('next')}
      </Button>
    </Box>
  );
}



export default Pagination;

