// Write your code in this file!
function scuberGreetingForFeet(number) {
  if (number <= 400) {
    return "This one is on me!"
  }
  else if (number > 2500) {
    return "No can do."
  }
  else if (number > 2000) {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  else if (city !== "NYC") {
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
    return "Thank you so much."
  }
  else if (tip === "not as generous") {
    return "Thank you."
  }
  else if (tip !== "generous" || "not so generous") {
    return "Bye."
  }
}
