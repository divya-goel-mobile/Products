import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./home.css";

export default function Plans() {
  let [plan, setPlan] = useState(-1);
  let [amount, setAmount] = useState(null);
  function selectCard(item, index) {
    setPlan(index);
    setAmount(item.amount);
    console.log(item.amount);
  }

  let plans = [
    {
      name: "Plan A",
      benefits: ["Benefits 1", "Benefits 2", "Benefits 3", "Benefits 4"],
      amount: 1500,
    },
    {
      name: "Plan B",
      benefits: [
        "Benefits 1",
        "Benefits 2",
        "Benefits 3",
        "Benefits 4",
        "Benefits 5",
      ],
      amount: 2500,
    },
    {
      name: "Plan C",
      benefits: [
        "Benefits 1",
        "Benefits 2",
        "Benefits 3",
        "Benefits 4",
        "Benefits 5",
        "Benefits 6",
      ],
      amount: 3500,
    },
  ];
  const CardWrapper = (props) => {
    let { name, benefits, amount } = props.data;
    return (
      <>
        <CardContent key={name}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {"₹ " + amount}
          </Typography>
          <Typography variant="h6" component="div">
            Top benefits include:
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {benefits.map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value}>
                  <ListItemIcon>
                    <CheckCircleRoundedIcon></CheckCircleRoundedIcon>
                  </ListItemIcon>
                  <ListItemText
                    color="text.secondary"
                    id={labelId}
                    secondary={`Line item ${value}`}
                  />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </>
    );
  };
  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">Choose a plan which suits you</h3>
            <Grid container justifyContent="center" spacing={5}>
              {plans.map((elem, index) => {
                return (
                  <Grid item key={index}>
                    <div className={plan == index ? "active-item" : null}>
                      <Card
                        style={{ width: "300px", cursor: "pointer" }}
                        onClick={() => selectCard(elem, index)}
                        variant="outlined"
                      >
                        <CardWrapper data={elem}></CardWrapper>
                      </Card>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </span>
      {amount && (
        <AppBar
          position="fixed"
          sx={{
            top: "auto",
            bottom: 0,
            color: "black",
            backgroundColor: "white",
          }}
        >
          <Toolbar style={{ "text-align": "right" }}>
            <div className="action-bar">
              <span className="premium">
                <div className="premium-label">Total Premium</div>
                <div className="premium-amount">Rs {amount}</div>
              </span>
              <Button
                color="error"
                sx={{ borderRadius: "20px" }}
                size="large"
                variant="contained"
              >
                Buy now
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </section>
  );
}
