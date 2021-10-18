window.onload = function(){
  const checked = document.getElementById("dark-mode");
  checked.addEventListener("change",function(){
    darkMode();
  })
  function darkMode(){
    document.body.classList.toggle("light");
    const titleParaghraph = document.querySelector(".title p");
    const darkModeText = document.querySelector(".dark-mode p");
    const box = document.querySelectorAll(".box");
    const boxOverview = document.querySelectorAll(".box-overview");
    titleParaghraph.classList.toggle("light-text");
    darkModeText.classList.toggle("light-text-mode");
    for (let i = 0; i < box.length; i++) {
      box[i].classList.toggle("light-box");
    }
    for (let i = 0; i < boxOverview.length; i++) {
      boxOverview[i].classList.toggle("light-box");
    }
    const boxHeaderTitle = document.querySelectorAll(".box header h3");
    for (let i = 0; i < boxHeaderTitle.length; i++) {
      boxHeaderTitle[i].classList.toggle("light-text");
    }
    const folowers= document.querySelectorAll(".folowers");
    for (let i = 0; i < folowers.length; i++) {
      folowers[i].classList.toggle("light-text");
    }
    const boxOverviewTitle =document.querySelectorAll(".box-overview-title");
    for (let i = 0; i < boxOverviewTitle.length; i++) {
      boxOverviewTitle[i].classList.toggle("light-text");
    }
    const numberOoverview = document.querySelectorAll(".number-overview");
    for (let i = 0; i < numberOoverview.length; i++) {
      numberOoverview[i].classList.toggle("light-text-dark");
    }
    
  }
}