lightTheme = document.querySelector(".light");
darkTheme = document.querySelector(".dark");
calcDiv = document.querySelector(".calculator");
visual = document.querySelector(".visual");
input = document.querySelectorAll("#input");
result = document.querySelector(".result");

lightTheme.addEventListener("click", () => {
  lightTheme.style.display = "none";
  darkTheme.style.display = "inline-block";

  calcDiv.style.backgroundColor = "#17181A";

  visual.style.backgroundColor = "#17181A";
  visual.style.color = "#78797B";

  input.forEach((element) => {
    element.style.backgroundColor = "#222427";
    element.style.color = "#FEFEFF";
  });

  result.style.backgroundColor = "#17181A";
  result.style.color = "#FEFEFF";
});

darkTheme.addEventListener("click", () => {
  lightTheme.style.display = "inline-block";
  darkTheme.style.display = "none";

  calcDiv.style.backgroundColor = "#f6f8f9";
  visual.style.backgroundColor = "#f6f8f9";

  visual.style.color = "#4e555b";

  input.forEach((element) => {
    element.style.backgroundColor = "#e8f1f4";
    element.style.color = "#4e555b";
  });

  result.style.backgroundColor = "#f6f8f9";
  result.style.color = "#131823";
});
