// script.js
// Changes color of background and redirects to next page

document.addEventListener("DOMContentLoaded", function () {
  // Your existing script

  // Add functionality to change background color
  const changeColorBtn = document.getElementById("myBTN");

  changeColorBtn.addEventListener("click", function () {
    // Generate a random hex color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Change the background color
    document.body.style.backgroundColor = randomColor;
  });
  setTimeout(function () {
    window.location.href = "https://rplg.co/4bde4260";
  }, 1000);
});
