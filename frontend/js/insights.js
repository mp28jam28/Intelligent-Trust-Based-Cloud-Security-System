const slider = document.getElementById("sleepGoal")
const goalValue = document.getElementById("goal-value")

slider.addEventListener("input", () => {
    goalValue.textContent() = slider.value;

})