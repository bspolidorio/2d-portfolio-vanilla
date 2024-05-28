export const displayDialog = (text, onDisplayEnd) => {
  const dialogUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");

  dialogUI.style.display = "block";

  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }
    clearInterval(intervalRef);
  }, 5);

  const closeBtn = document.getElementById("close");

  const onCloseBtnClick = () => {
    onDisplayEnd();
    dialogUI.style.display = "none";
    dialogUI.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick);
  };

  closeBtn.addEventListener("click", onCloseBtnClick);
};

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
    return;
  }
  k.camScale(k.vec2(1.5));
}
