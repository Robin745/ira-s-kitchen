const setCart = (id, items, catagory) => {
  let myObj = {};
  const cart = localStorage.getItem(catagory);
  if (cart) {
    myObj = JSON.parse(cart);
  }
  const quantity = items;
  if (quantity) {
    myObj[id] = items;
  }
  localStorage.setItem(catagory, JSON.stringify(myObj));
};
const getCart = (catagory) => {
  let myObj = {};
  const cart = localStorage.getItem(catagory);
  myObj = JSON.parse(cart);
  return myObj;
};
const removeElement = (id,catagory) => {
  let myObj = {};
  const cart = localStorage.getItem(catagory);
  myObj = JSON.parse(cart);
  delete myObj[id];
  localStorage.setItem(catagory, JSON.stringify(myObj));

};
export { setCart, getCart, removeElement };
