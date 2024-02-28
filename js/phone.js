const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  //   console.log(phones);
  displayPhone(phones);
};

const displayPhone = (phones) => {
  //   console.log(phones);

  const phoneContainer = document.getElementById("phone-container");

  phones.forEach((phone) => {
    console.log(phone);
    // create phone container div
    const phoneCard = document.createElement("div");
    phoneCard.classList =
      "card my-8 mx-4 py-8 text-center bg-gray-100 shadow-xl";
    phoneCard.innerHTML = `
        <figure>
            <img
            src=${phone.image}
            alt=${phone.slug}
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title mx-auto">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
};

loadPhone();
