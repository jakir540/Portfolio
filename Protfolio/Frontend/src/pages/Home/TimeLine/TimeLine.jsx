import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import  './Timeline.css'

import Typography from "@mui/material/Typography";
import { Event } from "@mui/icons-material";

const TimeLine = ({ timelines }) => {
    console.log(timelines)
  return (
    <div>
      <Timeline position="alternate">
        {
            timelines?.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
              className="date"
            >
            {item.endDate}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>

              <Event/>
              </TimelineDot>

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography className="title" variant="h6">{item.title}</Typography>
              <Typography className="description" variant="h6">{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
            ))
        }
      </Timeline>
    </div>
  );
};

export default TimeLine;
