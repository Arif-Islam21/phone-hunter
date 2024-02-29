const loadPhone = async (phoneText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phoneText}`
  );
  const data = await response.json();
  const phoneData = data.data;

  displayPhones(phoneData);
};

const inputElement = document.getElementById("search-field");

document.getElementById("search-btn").addEventListener("click", function () {
  const inputText = inputElement.value;
  loadPhone(inputText);
  //   console.log(inputText);
});

const displayPhones = (phones) => {
  if (phones.length > 12) {
    const showAllBtn = document.getElementById("showAllContainer");
    showAllBtn.classList.remove("hidden");
    showAllBtn.classList.add("block");
    console.log(showAllBtn);
  }

  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";

  //   more then 12
  phones = phones.slice(0, 5);

  for (const phone of phones) {
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="card  bg-gray-100 my-4 gap-4 py-4 shadow-xl">
  <figure><img src=${phone.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.slug}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  `;
    phoneContainer.appendChild(div);
  }
};
