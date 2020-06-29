if (typeof DeviceMotionEvent.requestPermission === "function") {
  const button = document.querySelector(".grant--js");
  button.addEventListener("click", () => {
    DeviceMotionEvent.requestPermission().then((response) => {
      if (response == "granted") {
        window.addEventListener("devicemotion", (e) => {
          document.documentElement.style.setProperty(
            "--change-x",
            `${e.acceleration.x * 100}px`
          );
          document.documentElement.style.setProperty(
            "--change-y",
            `${e.acceleration.y * 100}px`
          );
        });
      }
    });
  });
} else {
  alert("non 13");
}
