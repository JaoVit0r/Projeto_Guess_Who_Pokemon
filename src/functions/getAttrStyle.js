export default function getAtrStyle(res) {
    let estilo = {};
    if (res) {
      estilo = {
        margin: "3px",
        padding: "3px",
        color: "rgb(135,217,132)",
        radius: "5px"
      };
    } else {
      estilo = {
        margin: "3px",
        padding: "3px",
        color: "rgb(247,139,139)",
        radius: "5px"
      };
    }
    return estilo;
  }
  