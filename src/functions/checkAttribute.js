import filters from "../db/filters.json";

export default function checkAttribute(attribute) {
  let result = "";
  let lorem = "";
  filters.types.includes(attribute) ? (result = "types") : (lorem = "");
  filters.color.includes(attribute) ? (result = "color") : (lorem = "");
  filters.habitat.includes(attribute) ? (result = "habitat") : (lorem = "");
  filters.shape.includes(attribute) ? (result = "shape") : (lorem = "");
  filters.generation.includes(attribute)
    ? (result = "generation")
    : (lorem = "");
  if (attribute === "true" || attribute === "false") {
    result = "isLegendary";
  }
  return result;
}
