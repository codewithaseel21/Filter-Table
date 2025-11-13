const carArr = [
    { id: 1, name: "Rolls-Royce Phantom", tagline: "The ultimate expression of luxury", category: "Sedan", fuel: "Petrol Car", price: "10–12 Crore" },

    { id: 2, name: "Bentley Flying Spur", tagline: "Elegance meets performance", category: "Sedan", fuel: "Petrol Car", price: "8–9 Crore" },

    { id: 3, name: "Mercedes-Maybach S680", tagline: "Luxury without compromise", category: "Sedan", fuel: "Petrol Car", price: "7–8 Crore" },

    { id: 4, name: "Lamborghini Aventador SVJ", tagline: "Pure V12 performance", category: "Supercar", fuel: "Petrol Car", price: "12–15 Crore" },

    { id: 5, name: "Ferrari SF90 Stradale", tagline: "Hybrid supercar perfection", category: "Coupe", fuel: "Hybrid Car", price: "9–11 Crore" },

    { id: 6, name: "Bugatti Chiron Super Sport", tagline: "The speed king of the world", category: "Hypercar", fuel: "Petrol Car", price: "30–35 Crore" },

    { id: 7, name: "Koenigsegg Jesko", tagline: "Engineering beyond imagination", category: "Hypercar", fuel: "Petrol Car", price: "25–30 Crore" },

    { id: 8, name: "Pagani Huayra Roadster BC", tagline: "Art meets aerodynamics", category: "Hypercar", fuel: "Petrol Car", price: "28–32 Crore" },

    { id: 9, name: "McLaren 720S", tagline: "The everyday supercar", category: "Coupe", fuel: "Petrol Car", price: "6–8 Crore" },

    { id: 10, name: "Aston Martin DB12", tagline: "The definition of grand touring", category: "Coupe", fuel: "Petrol Car", price: "5–6 Crore" },

    { id: 11, name: "Porsche Taycan Turbo S", tagline: "Electric thrill redefined", category: "Sedan", fuel: "Electric Car", price: "4–5 Crore" },

    { id: 12, name: "Tesla Model S Plaid", tagline: "Quickest electric sedan ever made", category: "Sedan", fuel: "Electric Car", price: "3–3.5 Crore" },

    { id: 13, name: "Lucid Air Sapphire", tagline: "Luxury meets 1200hp power", category: "Sedan", fuel: "Electric Car", price: "3.5–4 Crore" },

    { id: 14, name: "Rimac Nevera", tagline: "The fastest electric hypercar", category: "Hypercar", fuel: "Electric Car", price: "20–25 Crore" },

    { id: 15, name: "BMW i7 M70", tagline: "Luxury electric limousine", category: "Sedan", fuel: "Electric Car", price: "4–5 Crore" },

    { id: 16, name: "Mercedes-AMG GT Black Series", tagline: "Born for the racetrack", category: "Coupe", fuel: "Petrol Car", price: "7–8 Crore" },

    { id: 17, name: "Range Rover SV Autobiography", tagline: "The SUV of the elite", category: "SUV", fuel: "Diesel Car", price: "6–7 Crore" },

    { id: 18, name: "Rolls-Royce Cullinan", tagline: "Luxury SUV redefined", category: "SUV", fuel: "Petrol Car", price: "9–10 Crore" },

    { id: 19, name: "Bentley Bentayga Hybrid", tagline: "Opulence with responsibility", category: "SUV", fuel: "Hybrid Car", price: "7–8 Crore" },

    { id: 20, name: "Lamborghini Urus Performante", tagline: "Super SUV with a raging bull soul", category: "SUV", fuel: "Petrol Car", price: "8–9 Crore" },

    { id: 21, name: "Ferrari Purosangue", tagline: "Ferrari’s first luxury SUV", category: "SUV", fuel: "Petrol Car", price: "12–14 Crore" },

    { id: 22, name: "Porsche Cayenne Turbo GT", tagline: "Unmatched SUV performance", category: "SUV", fuel: "Petrol Car", price: "5–6 Crore" },

    { id: 23, name: "Audi RS e-Tron GT", tagline: "Electric power with RS DNA", category: "Sedan", fuel: "Electric Car", price: "3–3.5 Crore" },

    { id: 24, name: "BMW XM", tagline: "M Power meets hybrid luxury", category: "SUV", fuel: "Hybrid Car", price: "6–7 Crore" },

    { id: 25, name: "Maserati MC20", tagline: "The rebirth of Italian performance", category: "Coupe", fuel: "Petrol Car", price: "6–7 Crore" },

    { id: 26, name: "Aston Martin Valkyrie", tagline: "Formula 1 technology for the road", category: "Hypercar", fuel: "Hybrid Car", price: "25–30 Crore" },

    { id: 27, name: "Bugatti Mistral", tagline: "The last pure W16 roadster", category: "Hypercar", fuel: "Petrol Car", price: "35–40 Crore" },

    { id: 28, name: "Lotus Eletre R", tagline: "Electric hyper SUV from Britain", category: "SUV", fuel: "Electric Car", price: "4–5 Crore" },

    { id: 29, name: "NIO ET9", tagline: "Next-gen Chinese luxury EV", category: "Sedan", fuel: "Electric Car", price: "3–3.5 Crore" },

    { id: 30, name: "Hennessey Venom F5", tagline: "The pursuit of 500 km/h", category: "Hypercar", fuel: "Petrol Car", price: "25–30 Crore" },
];

// ---------------DOM elements--------------
const showCarsCardEl = document.getElementById("show-cars-card");
const selectCategoryEl = document.getElementById("selectCategory");
const serchingValEl = document.getElementById("serchingVal");
const resetBtn = document.getElementById("resetBtn");

// ----------------Render cards----------------
function render(cars = carArr) {
    showCarsCardEl.innerHTML = "";
    cars.forEach(car => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
      <div class="card h-100">
        <div class="card-header">${car.name}</div>
        <div class="card-body">
          <h5 class="card-title">${car.tagline}</h5>
          <p class="card-text mb-1"><strong>Category:</strong> ${car.category}</p>
          <p class="card-text"><strong>Fuel Type:</strong> ${car.fuel}</p>
          <a href="#" class="btn btn-primary w-100">Price: ${car.price}</a>
        </div>
      </div>
    `;
        showCarsCardEl.appendChild(card);
    });
}

// ---------------Searching & Filtering--------------
function searching() {
    const searchVal = serchingValEl.value.trim().toLowerCase();
    const selectedFuel = selectCategoryEl.value;

    const filteredCars = carArr.filter(car => {
        const matchesName = car.name.toLowerCase().includes(searchVal);
        const matchesFuel = selectedFuel === "" || car.fuel === selectedFuel;
        return matchesName && matchesFuel;
    });

    render(filteredCars);
}

//------------------------------------ Reset Button
resetBtn.addEventListener("click", () => {
    serchingValEl.value = "";
    selectCategoryEl.value = "";
    render();
});

// Events
selectCategoryEl.addEventListener("change", searching);
serchingValEl.addEventListener("input", searching);

//---------------------- Initial render
render();
