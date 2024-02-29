const loadPhone = async (phoneText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phoneText}`
  );
  const data = response.json();
  console.log(data);
};

const inputElement = document.getElementById("search-field");

document.getElementById("search-btn").addEventListener("click", function () {
  const inputText = inputElement.value;
  loadPhone(phoneText);
  //   console.log(inputText);
});

loadPhone();
