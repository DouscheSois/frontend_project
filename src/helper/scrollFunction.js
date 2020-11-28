export const scrollFunction = () => {
  let buttoncss = document.getElementById("buttoncss");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttoncss.style.display = "block";
  } else {
    buttoncss.style.display = "none";
  }
};
