if (typeof DeviceMotionEvent.requestPermission === "function") {
  const button = document.querySelector(".grant--js");
  button.addEventListener("click", () => {
    DeviceMotionEvent.requestPermission().then((response) => {
      if (response == "granted") {
        window.addEventListener("devicemotion", (e) => {
          console.log(e);
        });
      }
    });
  });
} else {
  // non iOS 13+
}
