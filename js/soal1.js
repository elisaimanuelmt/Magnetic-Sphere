// Code by Elisa Imanuel Liminto

// Array untuk menampung jawaban benar
const correctAnswers = {
  q1: "q1a",
  q2: "q2a",
  q3: "q3b",
  q4: "q4d",
  q5: "q5c",
  q6: "q6a",
  q7: "q7b",
};

// Audio files
const correctSound = new Audio("Sound/correctSound.mp3"); // Ubah sesuai dengan ekstensi file yang Anda gunakan
const wrongSound = new Audio("Sound/wrongSound.mp3"); // Ubah sesuai dengan ekstensi file yang Anda gunakan

// Event listener untuk setiap soal
document.querySelectorAll(".answer").forEach((answer) => {
  answer.addEventListener("click", function () {
    const questionId = this.id.slice(0, 2); // Misalnya "q1", "q2", dst.
    if (this.id === correctAnswers[questionId]) {
      this.classList.add("correct");
      correctSound.play();
    } else {
      this.classList.add("wrong");
      wrongSound.play();
    }
  });
});
