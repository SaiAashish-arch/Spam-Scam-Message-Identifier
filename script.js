function analyzeMessage() {
  let msg = document.getElementById("messageInput").value.toLowerCase();
  let output = document.getElementById("output");
  let riskMeter = document.getElementById("riskMeter");
  if (msg.trim() === "") {
    output.style.color = "orange";
    output.innerText = "Please enter a message to analyze.";
    riskMeter.innerText = "";
    return;
  }
  const spamKeywords = {
    money: ["free", "win", "cash", "prize", "lottery"],
    urgency: ["urgent", "act now", "limited time", "immediately"],
    security: ["otp", "password", "bank", "account", "verify"],
    links: ["click", "link", "http", "www"]
  };
  let riskScore = 0;
  for (let category in spamKeywords) {
    spamKeywords[category].forEach(word => {
      if (msg.includes(word)) {
        riskScore++;
      }
    });
  }
  if (riskScore >= 3) {
    output.style.color = "red";
    output.innerText = "⚠ High Risk Scam Message Detected!";
    riskMeter.innerText = "Risk Level: HIGH";
  } 
  else if (riskScore === 2) {
    output.style.color = "orange";
    output.innerText = "⚠ Suspicious Message – Be Careful";
    riskMeter.innerText = "Risk Level: MEDIUM";
  } 
  else {
    output.style.color = "green";
    output.innerText = "✅ Message Appears Safe";
    riskMeter.innerText = "Risk Level: LOW";
  }
}
