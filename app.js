const increment = (team) => {
  const HomeEl = document.getElementById("score-home");
  const VisitorEl = document.getElementById("score-visitor");

  team === "home"
    ? (HomeEl.innerHTML = Number(HomeEl.innerHTML) + 1)
    : (VisitorEl.innerHTML = Number(VisitorEl.innerHTML) + 1);
};

const reset = () => {
  document.getElementById("score-home").innerHTML = 0;
  document.getElementById("score-visitor").innerHTML = 0;
};
