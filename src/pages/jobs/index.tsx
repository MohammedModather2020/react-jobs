import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// api
import ApiConfig from "../../api/ApiConfig";


// mui
import { Box, Typography, CircularProgress } from "@mui/material";


// custom-deps
import Jobs from "../../components/jobs/Jobs";
import SearchJobs from "../../components/jobs/SearchJobs"
import Pagination from "../../components/helper/Pagination";

/// interface
import { IJobsResponse } from "../../interface";

function JobsPage() {
  const itemsPerPage = 15;
  const { t } = useTranslation();

  const [jobs, setJobs] = useState<IJobsResponse>();
  const [search, setSearch] = useState<string>('');
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Set loading state to true when the effect starts
    setIsLoading(true);

    // Introduce a delay before making the API call
    const timeOut = setTimeout(() => {
      // Make API call to fetch jobs based on search query, items per page, and current page
      ApiConfig.get(`jobs?${search ? `itemQuery=${search.trim().toLowerCase()}&` : ''}limit=${itemsPerPage}&page=${currentPage - 1}`)
        .then((res) => {
          // If the response is successful, update jobs and total items state
          if (res.status === 200) {
            setJobs(res?.data.results);
            setTotalItems(res.data.results.total);
          }
        })
        .catch((error) => {
          // Log any errors that occur during the API call
          console.error('Error fetching jobs:', error);
        })
        .finally(() => {
          // Set loading state to false after the API call is complete
          setIsLoading(false);
        });
    }, 1000); // Delay the API call by 1 second

    // Cleanup function to clear the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeOut);
  }, [currentPage, search]); // Effect runs when currentPage or search changes

  // Function to handle page changes and update current page state
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box sx={{ my: 2, mx: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('job-list')}
      </Typography>
      <SearchJobs search={search} setSearch={setSearch} />
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Jobs jobs={jobs?.jobs} />
          {totalItems > itemsPerPage && (
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  )
}

export default JobsPage