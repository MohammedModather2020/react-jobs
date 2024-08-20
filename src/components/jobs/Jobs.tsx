import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// mui
import { List, ListItem, ListItemText, Typography } from "@mui/material";

// interface
import { IJobs } from "../../interface";

interface IProps {
  jobs: IJobs[] | undefined;
}

function Jobs({ jobs }: IProps) {
  const { t } = useTranslation();

  return jobs?.length ? (
    <List>
      {jobs.map((job: IJobs) => (
        <ListItem key={job.uuid} component={Link} to={`/jobs/${job.uuid}`} state={{ job, jobs }} button>
          <ListItemText primary={job.title} />
        </ListItem>
      ))}
    </List>
  ) : (
    <Typography variant="body1">{t('dont-have-jobs')}</Typography>
  );
}

export default Jobs;
