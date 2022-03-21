let navArr = [
  "intro",
  "about me / my process",
  "everything you want to know",
  "testimonials",
];
let splitStringNav = [];
export function getNavLinks() {
  return splitStringNav;
}

navArr.forEach((item) => {
  const splitString = item.split(" ");
  return splitStringNav.push(splitString[0]);
});
console.log(splitStringNav);
