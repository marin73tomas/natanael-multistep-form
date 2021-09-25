const BLUE_COLOR = "#0061F2"

const style = (theme) => ({
  root: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    boxSizing: "border-box",
    fontFamily:
      "Metropolis, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    backgroundColor: BLUE_COLOR,
    height: "100%",

    padding: "2.5rem !important",
  },
  formCard: {
    height: "520px",
    position: "relative",
  },
  formWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: "1rem 1.35rem",
  },
  formHeader: {
    padding: "1rem 1.35rem",
    marginBottom: "0",
    backgroundColor: "rgba(33, 40, 50, 0.03)",
    borderBottom: "1px solid rgba(33, 40, 50, 0.125)",
    borderBottomColor: "rgba(33, 40, 50, 0.125)",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderRadius: "0.35rem 0.35rem 0 0",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "105px",
  },
  formFooter: {
    borderRadius: "0 0 0.35rem 0.35rem",
    textAlign: "center !important",
    padding: "1rem 1.35rem",
    backgroundColor: "rgba(33, 40, 50, 0.03)",
    borderTop: "1px solid rgba(33, 40, 50, 0.125)",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "54px",
  },

  btn: {
    fontWeight: "400",
    padding: "0.875rem 1.125rem",
    fontSize: "0.875rem",
    borderRadius: "0.35rem",
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  },
  btnPrimary: {
    color: "#fff",
    backgroundColor: "#0061f2",
    borderColor: "#0061f2",
    "&focus": {
      color: "#fff",
      backgroundColor: "#0052ce",
      borderColor: "#004ec2",
      boxShadow: "0 0 0 0.25rem rgba(38, 121, 244, 0.5)",
    },
  },
  h3: {
    fontSize: "1.3rem !important",
    lineHeight: "1.2 !important",
    color: "#363d47 !important",
  },
  regularForm: {
    "& label": {
      fontSize: "0.875em",
      marginBottom: "0.25rem !important",
    },
    "& input": {
      color: "#69707a",
      opacity: "1",
      display: "block",
      width: "100%",
      minWidth: "300px",
      padding: "0.875rem 1.125rem",
      fontSize: "0.875rem",
      fontWeight: "400",
      lineHeight: "1",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #c5ccd6",
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      borderRadius: "0.35rem",
      transition:
        "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      "&focus": {
        color: "#69707a",
        backgroundColor: "#fff",
        borderColor: "transparent",
        outline: "0",
        boxShadow: "0 0 0 0.25rem rgba(0, 97, 242, 0.25)",
      },
    },
  },
  formNameContainer: {
    width: "50%",
  },
  choiceItem: {
    display: "flex",
    justifyContent: "center",
    "&.active > div": {
      backgroundColor: BLUE_COLOR,
    },
    "&.active > div *": {
      color: "white !important",
    },
  },
  stepper: {
    "& svg": { width: "30px !important", height: "30px !important" },
    "& .MuiStepLabel-label .Mui-active": {
      color: "white !important",
      fontWeight: "600",
      marginTop: "5px",
    },
    "& .MuiStepLabel-label": {
      fontSize: "16px",
    },
  },
});

export default style;
