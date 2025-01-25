import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
  iframe: {
    border: "none",
    //position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

const Typebot = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.iframe}>
        <iframe
          className={classes.iframe}
          src="https://typebot.whatisac.com.br/pt-BR/typebots"
        ></iframe>
      </div>
    </>
  );
};

export default Typebot;
