import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import'./Style.css'
import Swal from "sweetalert2";

function Feedback() {
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: "Very Satisfied",
    },
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  const Success =()=>{
    Swal.fire(

      'Feedback sucessfully Recorded! 😉',

      'Thank You!',
    )
  }
  return (
    <>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <form >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20ch" },
            }}
          >
            <h2 style={{textDecoration:"underline"}}>Feedback Form</h2>
            <TextField
              id="outlined-name"
              label=" First Name"
              placeholder="Enter First Name Here..."
              size="small"
            />
            <TextField
              id="outlined-name"
              label="Last Name"
              placeholder="Enter Last Name Here..."
              size="small"
            />
            <div>
              <TextField
                fullWidth
                label="Mail-Id"
                id="fullWidth"
                size="small"
                style={{ width: "422px" }}
              />
            </div>
            <div>
              <Rating
                name="highlight-selected-only"
                defaultValue={3}
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
              />
            </div>

            <div>
              <Button variant="contained" onClick={Success} style={{alignItems:"center"}} endIcon={<SendIcon />}>
                Submit
              </Button>
            </div>
          </Box>
        </form>
      </div>
    </>
  );
}

export default Feedback;
