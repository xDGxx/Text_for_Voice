function falar() {
    let texto = document.getElementById("texto").value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = texto;
    window.speechSynthesis.speak(msg);
  }