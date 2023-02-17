let tabs = document.querySelectorAll("ul li");
let content = document.querySelectorAll(".content div");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    content.forEach((div) => {
      div.style.display = "none";
    });
    //console.log(e.currentTarget.getAttribute('data'))
    let classData = e.currentTarget.getAttribute("data");
    content.forEach((div) => {
      div.getAttribute("class") == classData
        ? (div.style.display = "block")
        : (div.style.display = "none");
    });
  });
});
