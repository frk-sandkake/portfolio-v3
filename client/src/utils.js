/** @format */

function timeFormat(input) {
  return new Date(input).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  })
}

export default timeFormat
