// // popup.js – optional utility
// export const showPopup = (msg) => {
//   alert(msg); // you can replace this with custom toast logic
// };


export const showTemporaryPopup = (setState, duration = 1800) => {
  setState(true);
  setTimeout(() => setState(false), duration);
};
