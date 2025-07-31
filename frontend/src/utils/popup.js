// // popup.js – optional utility
// export const showPopup = (msg) => {
//   alert(msg); // you can replace this with custom toast logic
// };


export const showTemporaryPopup = (setShowPopup, duration = 1800) => {
  setShowPopup(true);
  setTimeout(() => setShowPopup(false), duration);
};

