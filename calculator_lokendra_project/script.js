document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.forms["calc"];
    const clearButton = document.querySelector(".clear");
    const equalButton = document.querySelector(".equal");
    const delButton = document.querySelector(".del");

    const historyContainer = document.querySelector("#history-container"); 
    const historyContent = document.getElementById("history-content");
    const clearHistoryButton = document.getElementById("clear-history-btn");


    const lightTheme = "style_light.css";
const darkTheme = "style_dark.css";
const themeIcon = document.getElementById("theme-icon");
const themeButton = document.querySelector(".theme-button");

document.body.classList.add("theme-transition");

themeButton.addEventListener("click", changeTheme);

function changeTheme() {
  const theme = document.getElementById("theme");
  
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.classList.remove("ri-sun-fill");
    themeIcon.classList.add("ri-moon-fill");
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.classList.remove("ri-moon-fill");
    themeIcon.classList.add("ri-sun-fill");
  }
}


    let history = [];
  
    clearButton.addEventListener("click", function () {
      calculatorForm.txt.value = '';
    });


    equalButton.addEventListener("click", function () {
        const expression = calculatorForm.txt.value;
        const result = eval(expression);
        
        calculatorForm.txt.value = result;
        

        addToHistory(expression, result);
        updateHistoryDisplay()
        
    });


    historyContainer.addEventListener("click", function () {
        toggleHistoryVisibility();
      });
    
      function toggleHistoryVisibility() {
       
        if (historyContent.style.display === "none" || historyContent.style.display === "") {
            historyContent.style.display = "block";
        } else {
            historyContent.style.display = "none";
        }

        updateHistoryDisplay();
      }
      

    delButton.addEventListener("click", function () {
        calculatorForm.txt.value = calculatorForm.txt.value.slice(0, -1);
      });
    
      function addToHistory(expression, result) {
        history.push({ expression, result });
      }




      clearHistoryButton.addEventListener("click", function () {
  
        clearHistory();
        updateHistoryDisplay();
      });
    
      function clearHistory() {
        history = [];
      }

    
      function updateHistoryDisplay() {
          updateHeadingsAndStyles();
        const historydiv = document.getElementById("history_div");
        historydiv.innerHTML = ''; 
        
        history.forEach((item, index) => {
            const historyItem = document.createElement("div");
            historyItem.innerHTML = `<strong>${index + 1}:</strong> ${item.expression} = ${item.result}`;
            historydiv.appendChild(historyItem);
        });
        
      }
      
      function updateHeadingsAndStyles() {
  
        const historyHeading = document.getElementById("history-heading");
        const historySubheading = document.getElementById("history-subheading");
        const calculationDetails = document.getElementById("calculation-details");
      
      
        historyHeading.innerText = "History";
        historySubheading.innerText = "Recent Calculations";
        calculationDetails.innerText = "Details";
      
        historyHeading.style.color = "white";
        historySubheading.style.color = "yellow";
        calculationDetails.style.color = "wheat";
      }
      
    
      const numButtons = document.querySelectorAll(".num:not(.clear):not(.equal):not(.del)");

      numButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          calculatorForm.txt.value += button.innerText;
        });
      });
    });
  