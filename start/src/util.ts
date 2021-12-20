export const clearElement = (e: Element) => {
  while (e.lastChild) {
    e.removeChild(e.lastChild);
  }
};
