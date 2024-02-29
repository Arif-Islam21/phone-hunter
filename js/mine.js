const loadPhone = async (phoneText, isShowAll) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${phoneText}`
  );
  const data = await response.json();
  const phoneData = data.data;

  displayPhones(phoneData, isShowAll);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinnerElement = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinnerElement.classList.remove("hidden");
  } else {
    loadingSpinnerElement.classList.add("hidden");
  }
};

const inputElement = document.getElementById("search-field");

function handlePhoneShow(isShowAll) {
  toggleLoadingSpinner(true);
  const inputText = inputElement.value;
  loadPhone(inputText, isShowAll);
  //   console.log(inputText);
}

const displayPhones = (phones, isShowAll) => {
  const showAllBtn = document.getElementById("showAllContainer");
  if (phones.length > 12 && !isShowAll) {
    showAllBtn.classList.remove("hidden");
    showAllBtn.classList.add("block");
  } else {
    showAllBtn.classList.add("hidden");
  }

  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";

  //   more then 12 if not show all
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

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

  //   hide loading spinner

  toggleLoadingSpinner(false);
};

// handle show all
const handleShowAll = () => {
  handlePhoneShow(true);
};
