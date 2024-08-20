import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";


// mui
import { Box, Drawer, Typography, Divider } from "@mui/material";


// custom-deps
import Jobs from "../../components/jobs/Jobs";

function JobDetailsPage() {
  const { t, i18n } = useTranslation();
  const { state: { job, jobs } } = useLocation()

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor={i18n.dir() === 'ltr' ? 'left' : 'right'}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <Typography variant="h3" sx={{ mx: 2 }}>
            {t('jobs')}
          </Typography>
          <Divider />
          <Jobs jobs={jobs} />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h6" >
          {t('job-details')}
        </Typography>
        <Divider />
        <Typography variant="h6">{t('job-title')}: {job.title}</Typography>
        <Typography variant="subtitle1">{t('job-category')}: {job.category.join(", ")}</Typography>
        <Typography variant="subtitle1">{t('job-type')}: {job.job_type.join(", ")}</Typography>
      </Box>
    </Box>
  )
}

export default JobDetailsPage