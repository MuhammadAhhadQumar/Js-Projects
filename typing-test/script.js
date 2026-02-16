const words = [
  "abandon",
  "beacon",
  "candy",
  "dove",
  "eagle",
  "flame",
  "grape",
  "happy",
  "ice",
  "jungle",
  "kingdom",
  "lunar",
  "mango",
  "noble",
  "ocean",
  "petal",
  "quest",
  "river",
  "shadow",
  "train",
  "umbrella",
  "vivid",
  "whale",
  "basket",
  "yellow",
  "zebra",
  "angel",
  "brave",
  "crane",
  "dusk",
  "enigma",
  "frost",
  "glow",
  "honey",
  "index",
  "juice",
  "knight",
  "lunar",
  "magic",
  "night",
  "oasis",
  "pearl",
  "quill",
  "rose",
  "scent",
  "tiger",
  "unity",
  "vortex",
  "wind",
  "xray",
  "yogurt",
  "zoned",
  "atlas",
  "bliss",
  "cider",
  "dawn",
  "epoch",
  "flame",
  "gauge",
  "heaven",
  "irony",
  "jolly",
  "koala",
  "lamb",
  "mint",
  "neon",
  "opal",
  "plum",
  "quartz",
  "ruby",
  "sunset",
  "tango",
  "urban",
  "vogue",
  "wave",
  "xerox",
  "yearn",
  "zephyr",
  "aqua",
  "bold",
  "crisp",
  "dove",
  "edge",
  "forge",
  "grace",
  "hush",
  "ink",
  "jade",
  "kite",
  "leaf",
  "mist",
  "navy",
  "oak",
  "pale",
  "quilted",
  "rare",
  "stone",
  "tone",
  "urban",
  "vibes",
  "wisp",
  "yacht",
  "zeal",
  "arc",
  "blaze",
  "core",
  "dust",
  "echo",
  "flint",
  "gaze",
  "halo",
  "iron",
  "june",
  "kale",
  "lime",
  "moss",
  "nest",
  "ore",
  "peach",
  "quail",
  "ridge",
  "snow",
  "tide",
  "use",
  "vow",
  "window",
  "xmas",
  "yoga",
  "zoo",
  "amber",
  "breeze",
  "clover",
  "drift",
  "enjoy",
  "flame",
  "grin",
  "hatch",
  "icicle",
  "jazz",
  "knack",
  "latch",
  "mocha",
  "nail",
  "open",
  "pale",
  "quiz",
  "rust",
  "sail",
  "tide",
  "ugly",
  "vowed",
  "wool",
  "xenon",
  "yawned",
  "zone",
  "awe",
  "belt",
  "charm",
  "dome",
  "elixir",
  "fawn",
  "gala",
  "hop",
  "inc",
  "june",
  "knot",
  "lump",
  "moon",
  "noon",
  "opal",
  "pier",
  "quiver",
  "ride",
  "stare",
  "twin",
  "unit",
  "vase",
  "wax",
  "yolk",
  "zoom",
  "arrow",
  "brick",
  "cloud",
  "dune",
  "eagle",
  "frost",
  "grip",
  "haze",
  "ignite",
  "jacket",
  "lure",
  "mesh",
  "nest",
  "ogre",
  "puff",
  "quilt",
  "rave",
  "swoop",
  "track",
  "urge",
  "view",
  "windy",
  "yell",
  "zen",
  "bolt",
  "clip",
  "deep",
  "echo",
  "flare",
  "gaze",
  "heron",
  "iris",
  "jolt",
  "key",
  "lily",
  "mint",
  "nook",
  "olive",
  "plow",
  "quill",
  "rust",
  "sage",
  "tick",
  "uniform",
  "vibe",
  "whip",
  "yarn",
  "zoomed",
  "art",
  "blow",
  "core",
  "dove",
  "eagle",
  "foam",
  "gloom",
  "hand",
  "ice",
  "joke",
  "knee",
  "loaf",
  "melt",
  "note",
  "open",
  "pale",
  "quill",
  "roar",
  "slug",
  "tear",
  "urge",
  "blank",
  "wait",
  "yawn",
  "zinc",
];
const text = document.getElementById("text");
const timer = document.getElementById("timer");
const tryAgainBtn = document.getElementById("try-again");
const finalScore = document.getElementById("final-score");

let totalTyped = "";
let characterIndex = 0;
let errors = 0;
let timeleft = 6;
let timerInterval;
let testStarted = false;
let longText = generateWords(words);

text.textContent = longText;

// Shuffle the words array
function shuffler(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// joining the word array to a string
function generateWords(array) {
  const selectedWords = shuffler([...array]);
  return selectedWords.join(" ");
}

// start the timer on first key press
function startTimer() {
  if (!testStarted) {
    testStarted = true;
    timerInterval = setInterval(() => {
      timeleft--;
      timer.textContent = `Time left: ${timeleft}s`;
      if (timeleft <= 0) {
        clearInterval(timerInterval);
        endTest();
      }
    }, 1000);
  }
}
// End the test and calculate the score
function endTest() {
  timer.textContent = "Time's up!";
  finalScore.textContent = `Final WPM:`;
  text.style.display = "none";
  tryAgainBtn.style.display = "block";
}
// calculate WPM and display final score
function (params) {
    
}

// handle typing and text display and scrolling
document.addEventListener("keydown", (e) => {
    startTimer();
  if (e.key === "Backspace") {
    if (totalTyped.length > 0) {
      totalTyped = totalTyped.slice(0, -1);
      characterIndex = Math.max(characterIndex - 1, 0);
    }
  } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
    totalTyped += e.key;
    characterIndex++;
  }
  const wordArray = longText.split("");
  text.innerText = "";
  errors = 0;
  for (let i = 0; i < wordArray.length; i++) {
    const span = document.createElement("span");
    if (i < totalTyped.length) {
      if (totalTyped[i] === wordArray[i]) {
        span.classList.add("correct");
      } else {
        span.classList.add("incorrect");
        errors++;
      }
    }
    span.textContent = wordArray[i];
    text.appendChild(span);
  }
  if (totalTyped.length >= 20) {
    const scrollAmount = (totalTyped.length - 20) * 14;
    text.scrollLeft = scrollAmount;
  }
});
