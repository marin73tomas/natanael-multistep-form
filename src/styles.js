const style = (theme) => ({
  root: {
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    boxSizing: "border-box",
    fontFamily:
      "Metropolis, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
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
    fontSize: "1.3rem",
    lineHeight: "1.2",
    color: "#363d47",
  },
});

export default style;
