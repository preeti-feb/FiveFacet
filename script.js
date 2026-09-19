const questions = [
  { id: 1, text: "I often get lost in my own thoughts and ideas.", reverse: false },
  { id: 2, text: "I enjoy daydreaming about possibilities that don't yet exist.", reverse: false },
  { id: 3, text: "I find myself inventing stories or scenarios in my head.", reverse: false },
  { id: 4, text: "I can easily picture things that aren't in front of me.", reverse: false },
  { id: 5, text: "My mind wanders into imaginative territory even during routine tasks.", reverse: false },
  { id: 6, text: "I enjoy discussing abstract or theoretical ideas.", reverse: false },
  { id: 7, text: "I like digging into a subject just to understand it better, even if it has no practical use.", reverse: false },
  { id: 8, text: "I ask 'why' or 'how' more than most people around me.", reverse: false },
  { id: 9, text: "I'm drawn to books, articles, or conversations that challenge how I think.", reverse: false },
  { id: 10, text: "I enjoy debating ideas even when I don't have a strong stake in the outcome.", reverse: false },
  { id: 11, text: "I'm moved by art, music, or poetry.", reverse: false },
  { id: 12, text: "I notice small details of beauty in everyday surroundings.", reverse: false },
  { id: 13, text: "I can spend a long time absorbed in a piece of music, writing, or visual art.", reverse: false },
  { id: 14, text: "Certain songs, paintings, or scenes affect my mood in a strong way.", reverse: false },
  { id: 15, text: "I actively seek out artistic or creative experiences (galleries, concerts, films, literature).", reverse: false },
  { id: 16, text: "I like trying activities I've never done before.", reverse: false },
  { id: 17, text: "I'm drawn to unfamiliar places, foods, or cultures.", reverse: false },
  { id: 18, text: "I get excited by the idea of an unplanned trip or spontaneous experience.", reverse: false },
  { id: 19, text: "I'd rather explore something new than stick with what I know works.", reverse: false },
  { id: 20, text: "I look forward to situations that push me outside my comfort zone.", reverse: false },
  { id: 21, text: "I prefer familiar ways of doing things over new approaches.", reverse: true },
  { id: 22, text: "Unusual people or ideas make me uneasy.", reverse: true },
  { id: 23, text: "I feel most comfortable when everyone follows the same accepted norms.", reverse: true },
  { id: 24, text: "I tend to dismiss ideas that sound too strange or unconventional at first.", reverse: true },
  { id: 25, text: "I prefer clear rules and traditional methods over experimental ones.", reverse: true },
  { id: 26, text: "I like having a predictable daily routine.", reverse: true },
  { id: 27, text: "I get restless if my schedule stays the same for too long.", reverse: false },
  { id: 28, text: "I'd rather revisit a place or activity I already know than try something new.", reverse: true },
  { id: 29, text: "I actively look for ways to mix up my regular routine.", reverse: false },
  { id: 30, text: "Sticking to a fixed plan feels more comfortable to me than improvising.", reverse: true }
];

let currentQuestion = 0;
const answers = [];

document.getElementById("start-btn").addEventListener("click", function() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("question-screen").style.display = "block";
  document.getElementById("question-text").textContent = questions[0].text;
  document.getElementById("progress").textContent = "Question 1 of 30";
});

document.getElementById("next-btn").addEventListener("click", function() {
  const selected = document.querySelector('input[name="response"]:checked');
  const selectedValue = selected.value;
  answers[currentQuestion] = Number(selectedValue);
  currentQuestion++;

  if (currentQuestion === questions.length) {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("results-screen").style.display = "block";

    let score = calculateScore();
    let result = getBand(score);
    document.getElementById("trait-descriptions").innerHTML =
      "<h3>" + result.label + "</h3><p>" + result.text + "</p>";

    document.getElementById("bar-fill").style.width = (score / 5 * 100) + "%";
    document.getElementById("score-number").textContent = score.toFixed(1);
  } else {
    document.getElementById("question-text").textContent = questions[currentQuestion].text;
    document.getElementById("progress").textContent = "Question " + (currentQuestion + 1) + " of 30";
    document.getElementById("response-form").reset();
  }
});

document.getElementById("back-btn").addEventListener("click", function() {
  if (currentQuestion > 0) {
    currentQuestion--;

    document.getElementById("question-text").textContent = questions[currentQuestion].text;
    document.getElementById("progress").textContent = "Question " + (currentQuestion + 1) + " of 30";

    let previousAnswer = answers[currentQuestion];
    document.querySelector('input[name="response"][value="' + previousAnswer + '"]').checked = true;
  }
});

document.getElementById("retake-btn").addEventListener("click", function() {
  currentQuestion = 0;
  answers.length = 0;

  document.getElementById("results-screen").style.display = "none";
  document.getElementById("intro-screen").style.display = "block";
  document.getElementById("trait-descriptions").innerHTML = "";

  document.getElementById("bar-fill").style.width = "0%";
  document.getElementById("score-number").textContent = "0.0";
});

const resultBands = {
  overall: [
    { max: 1.9, label: "The Traditionalist", text: "You gravitate toward the familiar, concrete, and proven. You feel most comfortable with routine, established norms, and practical thinking rather than abstract exploration." },
    { max: 2.9, label: "The Grounded Realist", text: "You're generally practical and steady, with occasional openness to new ideas or experiences when they feel worthwhile." },
    { max: 3.4, label: "The Balanced Thinker", text: "You move comfortably between structure and exploration — open to new ideas and experiences without needing constant novelty." },
    { max: 4.2, label: "The Explorer", text: "You're genuinely drawn to new ideas, experiences, and creative expression. Curiosity and imagination play an active role in how you engage with the world." },
    { max: 5.0, label: "The Visionary", text: "Openness defines much of your personality. You're imaginative, intellectually curious, aesthetically sensitive, adventurous, and drawn to the unconventional — often all at once." }
  ]
};

function calculateScore() {
  let total = 0;

  for (let i = 0; i < answers.length; i++) {
    let value = answers[i];

    if (questions[i].reverse) {
      value = 6 - value;
    }

    total = total + value;
  }

  let average = total / answers.length;
  return average;
}

function getBand(score) {
  for (let i = 0; i < resultBands.overall.length; i++) {
    let band = resultBands.overall[i];
    if (band.max >= score) {
      return band;
    }
  }
}