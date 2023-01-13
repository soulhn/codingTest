function letterCapitalize(str) {
  return str
    .split(" ")
    .map((a) => {
      return a[0] ? a[0].toUpperCase() + a.slice(1) : "";
    })
    .join(" ");
}
