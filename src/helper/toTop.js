export const toTop = () => {
  let rootElement = document.documentElement;
  rootElement.scrollTo({ top: 0, behavior: "smooth" });
};
