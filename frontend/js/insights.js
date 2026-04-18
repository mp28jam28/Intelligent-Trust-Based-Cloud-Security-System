const slider = document.getElementById("sleepGoalInput")
const goalValue = document.getElementById("goal-value")
const button = document.getElementById("setGoalBtn")
const statusMessage = document.getElementById("statusMessage")

slider.addEventListener("input", () => {
    goalValue.textContent = slider.value + " hrs";
})

button.addEventListener("click", () => {
    const goal = slider.value;
    localStorage.setItem("sleepGoal", goal);
    statusMessage.textContent = "Goal set to " + goal + " hours";
    console.log("Goal set to " + goal + "!")
})

