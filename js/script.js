document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("liveWinsTrack");
  if (!track) return;

const names = [
  "DerekO","SavageK","QueenB","MikeD","ClutchAJ","NikoX","Ace99","NovaRush",
  "BlazePro","KaiFX","RogueLive","JettElite","SkyeWin","ZaneUp","BrickBoss","SoloKing",

  "xXBlazeXx","TiltMaster","QuickHands","CashSniper","LuckyFlip","GridKing",
  "WinStreak","SharpEdge","NoTilt","ColdRun","HotHand","AlphaPlay",

  "MoneyMoves","CashFlowX","StackBuilder","BankRoller","FastPayout","ChipStacker",
  "BigWinEnergy","ProfitMode","LowRiskHighIQ","EdgePlayer","ClutchMoney","QuickCash",

  "ETHKing","BTCBandit","DeFiDerek","CryptoClutch","TokenSniper","ChainRunner",
  "GasFeeGamer","AltcoinAce","BlockBoss","LedgerLive","SatoshiSpin","MetaWallet",

  "SoloGrinder","NightPlayer","DayTraderX","FocusMode","ZeroMistakes","HighIQPlay",
  "CalculatedWin","MindGame","PrecisionX","NextMove","OutplayPro","NoLuckNeeded",

  "WinMachine","PlayToWin","FastHands","SharpMind","ElitePlayer","TopTierX",
  "SkillGap","OutplayKing","ClutchMode","FinalRound","LastStand","GameCloser",

  "BrickBreaker","TileMaster","StackAttack","GridRunner","SpeedSolver","PerfectRun",
  "ComboKing","ChainBreaker","ScoreHunter","PointStacker","PuzzlePro","RapidFire"
];

  const games = ["Brick", "Solitaire"];

  function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

function getAmount() {
  const r = Math.random();

  if (r < 0.65) return Math.floor(Math.random() * 30) + 5;     // $5–35
  if (r < 0.9) return Math.floor(Math.random() * 60) + 35;     // $35–95
  return Math.floor(Math.random() * 200) + 100;                // $100–300 (rare big win)
}

  function createCard() {
    const el = document.createElement("div");
    el.className = "live-card";
    el.innerHTML = `
      <strong>${rand(names)}</strong>
      <span>won in ${rand(games)}</span>
      <em>$${getAmount()}</em>
    `;
    return el;
  }

  function seedInitialCards() {
    for (let i = 0; i < 8; i++) {
      track.appendChild(createCard());
    }
  }

  seedInitialCards();

  let offset = 0;
  const speed = 0.45; // pixels per frame, increase for faster movement

  function animate() {
    offset += speed;
    track.style.transform = `translateX(-${offset}px)`;

    const firstCard = track.firstElementChild;
    if (firstCard) {
      const firstStyle = getComputedStyle(track);
      const gap = parseFloat(firstStyle.columnGap || firstStyle.gap || 10);
      const firstCardWidth = firstCard.getBoundingClientRect().width + gap;

      if (offset >= firstCardWidth) {
        offset -= firstCardWidth;
        track.style.transform = `translateX(-${offset}px)`;
        firstCard.remove();
        track.appendChild(createCard());
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
