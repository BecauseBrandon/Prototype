const main = document.querySelector("main");
const button = (label, path, secondary = false) =>
  `<a class="button${secondary ? " secondary" : ""}" href="#/${path}">${label}</a>`;
const intro = (title, description, parent = "") =>
  `<section class="intro"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>${parent ? `<span>/</span><a href="#/${parent.path}">${parent.label}</a>` : ""}<span>/</span><span aria-current="page">${title}</span></nav><h1>${title}</h1><p>${description}</p></div></section>`;
const info = (label, value) => `<div><dt>${label}</dt><dd>${value}</dd></div>`;
const card = (title, copy, path, label, tag = "") =>
  `<article class="card">${tag ? `<span class="overline">${tag}</span>` : ""}<h2>${title}</h2><p>${copy}</p>${button(label, path, true)}</article>`;
const stays = {
  hotel: {
    name: "Family-owned hotels",
    tag: "A smaller island stay",
    text: "Taniti has many small, family-owned hotels. Use this option as a starting point for arranging accommodation for a family or group.",
    features: [
      ["Accommodation", "Small, family-owned hotel"],
      [
        "Family and group needs",
        "Ask the hotel about room capacity, adjoining rooms and extra beds.",
      ],
      [
        "Quality checks",
        "All lodging is strictly regulated and regularly inspected by the Tanitian government.",
      ],
      [
        "Location and arrival",
        "Confirm the address and airport transportation with the hotel.",
      ],
      [
        "Rates and amenities",
        "Confirm room prices, meals, amenities and cancellation policies before booking.",
      ],
    ],
  },
  resort: {
    name: "Four-star resort",
    tag: "Resort accommodation",
    text: "Taniti has one large, four-star resort. Check room choices, amenities and availability directly before making your reservation.",
    features: [
      ["Accommodation", "One large, four-star resort"],
      [
        "Room choices",
        "Ask about rooms that suit your party size and any accessibility needs.",
      ],
      [
        "Quality checks",
        "All lodging is strictly regulated and regularly inspected by the Tanitian government.",
      ],
      [
        "Getting there",
        "Confirm the resort address and transportation from the airport.",
      ],
      [
        "Before booking",
        "Check current rates, included amenities and cancellation policies.",
      ],
    ],
  },
  bedbreakfast: {
    name: "Bed and breakfasts",
    tag: "A smaller place to settle in",
    text: "A growing number of bed and breakfasts offer another way to stay on Taniti. Confirm the details of your preferred property before you book.",
    features: [
      ["Accommodation", "Bed and breakfast"],
      ["Meals", "Confirm which meals, if any, are included in the rate."],
      [
        "Quality checks",
        "All lodging is strictly regulated and regularly inspected by the Tanitian government.",
      ],
      [
        "Room details",
        "Check capacity, private facilities and accessibility with the property.",
      ],
      [
        "Before booking",
        "Confirm location, availability, rates and cancellation policies.",
      ],
    ],
  },
  hostel: {
    name: "Hostel",
    tag: "An inexpensive option",
    text: "Taniti’s accommodation options include an inexpensive hostel. Confirm the room arrangement and facilities before your stay.",
    features: [
      ["Accommodation", "Hostel"],
      ["Room arrangement", "Ask about shared or private room availability."],
      [
        "Quality checks",
        "All lodging is strictly regulated and regularly inspected by the Tanitian government.",
      ],
      [
        "Facilities",
        "Confirm luggage storage, cooking facilities and any accessibility needs.",
      ],
      [
        "Before booking",
        "Check rates, availability, location and cancellation conditions.",
      ],
    ],
  },
};
const activities = {
  rainforest: {
    name: "Explore the rainforest",
    tag: "Nature & adventure",
    text: "Discover Taniti’s lush rainforest on a hike, or explore the available zip-lining options.",
    features: [
      ["Experience", "Rainforest hikes and zip-lining"],
      [
        "Before you go",
        "Confirm route difficulty, duration and participation requirements with the operator.",
      ],
      [
        "What to arrange",
        "Ask about a meeting point, transportation and required equipment.",
      ],
      [
        "Availability and cost",
        "Confirm current schedules, prices and cancellation terms directly.",
      ],
    ],
  },
  snorkeling: {
    name: "Go snorkeling",
    tag: "On the water",
    text: "Snorkeling is one of the activities available on Taniti. Find out what an operator offers before arranging your outing.",
    features: [
      ["Experience", "Snorkeling"],
      [
        "Before you go",
        "Ask about swimming ability, age requirements and any health restrictions.",
      ],
      [
        "Included equipment",
        "Confirm whether gear and instruction are included.",
      ],
      [
        "Meeting point and duration",
        "Confirm the departure location, transportation and trip length.",
      ],
      [
        "Availability and cost",
        "Check dates, weather arrangements, prices and cancellation terms with the operator.",
      ],
    ],
  },
  sightseeing: {
    name: "See the island",
    tag: "Boat & bus tours",
    text: "Boat and bus tours provide ways to explore Taniti. Taniti City is also known for its native architecture and the white-sand beaches around Yellow Leaf Bay.",
    features: [
      ["Experience", "Boat or bus sightseeing tour"],
      ["Route", "Ask which stops and attractions the tour includes."],
      [
        "Meeting point and duration",
        "Confirm where the tour starts, how long it lasts and how to reach it.",
      ],
      [
        "Availability and cost",
        "Confirm schedules, prices, accessibility and any holiday changes.",
      ],
    ],
  },
  volcano: {
    name: "Visit the volcano",
    tag: "The mountainous interior",
    text: "Taniti’s mountainous interior includes a small, active volcano, one of the island’s popular attractions.",
    features: [
      ["Experience", "Volcano sightseeing"],
      [
        "Access and conditions",
        "Confirm current access and conditions with local operators before visiting.",
      ],
      [
        "Tour requirements",
        "Ask about the route, fitness requirements and recommended equipment.",
      ],
      [
        "Plan the day",
        "Check duration, transportation, cost and availability with the provider.",
      ],
    ],
  },
  beaches: {
    name: "Enjoy the beaches",
    tag: "Time by the water",
    text: "Taniti has sandy and rocky beaches. White, sandy beaches surround Yellow Leaf Bay near Taniti City.",
    features: [
      ["Location", "Yellow Leaf Bay and other coastal areas"],
      [
        "Plan your visit",
        "Check local access, swimming conditions and available facilities.",
      ],
      [
        "Getting around",
        "Taniti City is fairly flat and walkable. Many visitors also explore Merriton Landing on foot.",
      ],
    ],
  },
  entertainment: {
    name: "Discover Merriton Landing",
    tag: "Arts & entertainment",
    text: "Merriton Landing, on the north side of Yellow Leaf Bay, is a growing area with many of the island’s entertainment options.",
    features: [
      [
        "Things to explore",
        "Art galleries, pubs and a microbrewery, dancing, movies, an arcade and bowling are among Taniti’s activities.",
      ],
      [
        "Island history",
        "Visit the local history museum to learn more about Taniti.",
      ],
      [
        "Plan ahead",
        "Confirm exact locations, opening hours and holiday closures.",
      ],
    ],
  },
};
const food = {
  local: {
    name: "Local fish and rice",
    text: "Five of Taniti’s ten restaurants serve mostly local fish and rice.",
  },
  american: {
    name: "American-style dining",
    text: "Three restaurants serve American-style meals.",
  },
  panasian: {
    name: "Pan-Asian dining",
    text: "Two restaurants serve Pan-Asian cuisine.",
  },
};
function home() {
  return `<section class="hero"><div class="hero-copy"><p class="eyebrow">Welcome to Taniti</p><h1>Your island.<br>Your kind of escape.</h1><p>Find a place to stay, discover the rainforest and leave a little time for the beach.</p><div class="actions">${button("Find a place to stay", "stays")}${button("Explore things to do", "activities", true)}</div></div><div class="hero-image"><img src="assets/taniti-hero.png" width="1672" height="941" alt="Illustration of a tropical bay with white sand, rainforest and a distant volcanic mountain"></div></section><p style="padding-left:50%">AI-generated illustration created with OpenAI, 2026.</p><section class="wrap"><div class="section-head"><h2>Make the island your own</h2><p>Start with the essentials for a visit that feels right for you.</p></div><div class="cards">${card("Places to stay", "Family-owned hotels, bed and breakfasts, an inexpensive hostel and a four-star resort.", "stays", "Browse accommodation", "Rest & recharge")}${card("Things to do", "White-sand beaches, rainforest walks, snorkeling and a little island history.", "activities", "Explore activities", "Get out & explore")}${card("Food & drink", "Local fish and rice, familiar favorites and Pan-Asian cooking.", "dining", "Find dining options", "A taste of Taniti")}</div></section><section class="planning"><div class="wrap"><div><h2>A little planning goes a long way</h2><p>Arrivals, local transportation and the things to know before you go.</p></div><div class="actions">${button("Getting here & around", "transport")}${button("Visitor information", "visitor-info", true)}</div></div></section>`;
}
// Illustrative inventory for usability testing; these are not verified provider offers.
const listingData = {
  stays: {
    hotel: {
      price: 160,
      unit: "room / night",
      capacity: 5,
      location: "Taniti City",
      amenities: "Family room, Wi-Fi, breakfast",
    },
    resort: {
      price: 320,
      unit: "suite / night",
      capacity: 6,
      location: "Yellow Leaf Bay area",
      amenities: "Pool, restaurant, family suite",
    },
    bedbreakfast: {
      price: 110,
      unit: "room / night",
      capacity: 2,
      location: "Near Taniti City",
      amenities: "Breakfast, private bathroom, Wi-Fi",
    },
    hostel: {
      price: 35,
      unit: "person / night",
      capacity: 1,
      location: "Taniti City",
      amenities: "Shared kitchen, lockers, shared bathroom",
    },
  },
  activities: {
    rainforest: {
      price: 65,
      unit: "person",
      capacity: 8,
      location: "Rainforest interior",
      amenities: "Guide, safety briefing",
      category: "nature",
      duration: 3,
      difficulty: "moderate",
    },
    snorkeling: {
      price: 85,
      unit: "person",
      capacity: 10,
      location: "Yellow Leaf Bay departure",
      amenities: "Snorkel gear, instruction",
      category: "water",
      duration: 2,
      difficulty: "moderate",
    },
    sightseeing: {
      price: 45,
      unit: "person",
      capacity: 16,
      location: "Taniti City departure",
      amenities: "Guide, bus transportation",
      category: "sightseeing",
      duration: 3,
      difficulty: "easy",
    },
    volcano: {
      price: 120,
      unit: "person",
      capacity: 6,
      location: "Mountainous interior",
      amenities: "Guide, transportation",
      category: "nature",
      duration: 5,
      difficulty: "challenging",
    },
    beaches: {
      price: 0,
      unit: "person",
      capacity: null,
      location: "Yellow Leaf Bay",
      amenities: "Self-guided visit; facilities to confirm",
      category: "water",
      duration: 1,
      difficulty: "easy",
    },
    entertainment: {
      price: 25,
      unit: "person",
      capacity: 6,
      location: "Merriton Landing",
      amenities: "Sample bowling session, equipment",
      category: "entertainment",
      duration: 1,
      difficulty: "easy",
    },
  },
};
const filters = {
  stays: { price: "all", guests: "all" },
  activities: {
    price: "all",
    category: "all",
    duration: "all",
    difficulty: "all",
  },
};
const sampleNote =
  "Sample listings for usability testing. Prices in USD, capacities, property areas, amenities and activity requirements are illustrative, not verified offers. Confirm all details and total charges with the provider.";
function listingFacts(type, id) {
  const d = listingData[type][id];
  return `<p class="sample-label">Illustrative listing details</p><dl class="listing-facts">${info("Sample price", `${d.price === 0 ? "Free" : `$${d.price}`} / ${d.unit}${type === "stays" ? " · taxes and fees not included" : ""}`)}${info(type === "stays" ? "Guest capacity" : "Group capacity", d.capacity ? `${d.capacity} ${type === "stays" ? (d.capacity === 1 ? "guest per bed" : "guests per room or suite") : "participants per group"}` : "No fixed group limit; confirm access")}${info("Location", d.location)}${info(type === "stays" ? "Key amenities" : "Included / facilities", d.amenities)}${type === "activities" ? info("Duration", `${d.duration} ${d.duration === 1 ? "hour" : "hours"}`) + info("Activity level", d.difficulty[0].toUpperCase() + d.difficulty.slice(1)) : ""}</dl>`;
}
function selectFilter(type, key, label, options) {
  return `<div class="filter-field"><label for="${type}-${key}">${label}</label><select id="${type}-${key}" data-filter="${key}">${options.map(([value, text]) => `<option value="${value}"${filters[type][key] === value ? " selected" : ""}>${text}</option>`).join("")}</select></div>`;
}
function filterControls(type) {
  const activity = type === "activities";
  return `<form class="listing-filters" data-listing-type="${type}" aria-label="${activity ? "Activity" : "Accommodation"} filters">${selectFilter(
    type,
    "price",
    activity ? "Price per person (USD)" : "Price per room or bed / night (USD)",
    activity
      ? [
          ["all", "Any price"],
          ["free", "Free"],
          ["under50", "Under $50"],
          ["50to100", "$50–$100"],
          ["over100", "Over $100"],
        ]
      : [
          ["all", "Any price"],
          ["under100", "Under $100"],
          ["100to200", "$100–$200"],
          ["over200", "Over $200"],
        ],
  )}${
    activity
      ? selectFilter(type, "category", "Activity type", [
          ["all", "All activities"],
          ["nature", "Nature & adventure"],
          ["water", "Water & beaches"],
          ["sightseeing", "Sightseeing"],
          ["entertainment", "Entertainment"],
        ]) +
        selectFilter(type, "duration", "Duration", [
          ["all", "Any duration"],
          ["short", "Up to 2 hours"],
          ["long", "More than 2 hours"],
        ]) +
        selectFilter(type, "difficulty", "Activity level", [
          ["all", "Any level"],
          ["easy", "Easy"],
          ["moderate", "Moderate"],
          ["challenging", "Challenging"],
        ])
      : selectFilter(type, "guests", "Guests in one room or suite", [
          ["all", "Any capacity"],
          ["2", "At least 2"],
          ["4", "At least 4"],
          ["5", "At least 5"],
          ["6", "At least 6"],
        ])
  }<button type="reset" class="secondary">Clear filters</button></form>`;
}
function matchesPrice(price, range) {
  switch (range) {
    case "free":
      return price === 0;
    case "under50":
      return price < 50;
    case "50to100":
      return price >= 50 && price <= 100;
    case "over100":
      return price > 100;
    case "under100":
      return price < 100;
    case "100to200":
      return price >= 100 && price <= 200;
    case "over200":
      return price > 200;
    default:
      return true;
  }
}
function filteredListings(type) {
  const f = filters[type];
  return Object.entries(type === "stays" ? stays : activities).filter(
    ([id]) => {
      const d = listingData[type][id];
      return (
        matchesPrice(d.price, f.price) &&
        (type === "stays"
          ? f.guests === "all" || d.capacity >= Number(f.guests)
          : (f.category === "all" || d.category === f.category) &&
            (f.difficulty === "all" || d.difficulty === f.difficulty) &&
            (f.duration === "all" ||
              (f.duration === "short" ? d.duration <= 2 : d.duration > 2)))
      );
    },
  );
}
function listingCards(type) {
  const entries = filteredListings(type);
  return entries.length
    ? entries
        .map(
          ([id, d]) =>
            `<article class="card"><span class="overline">${d.tag}</span><h2>${d.name}</h2><p>${d.text}</p>${listingFacts(type, id)}${button(type === "stays" ? "View accommodation" : "View activity", `${type}/${id}`, true)}</article>`,
        )
        .join("")
    : '<p class="empty-results">No listings match these filters. Change a selection or use Clear filters to see all options.</p>';
}
function resultCount(type) {
  const n = filteredListings(type).length;
  return `${n} ${n === 1 ? "listing" : "listings"} match your filters`;
}
function catalog(type) {
  const activity = type === "activities";
  return `${intro(activity ? "Things to do" : "Places to stay", activity ? "Compare experiences and narrow your choices by activity, price, duration and level." : "Compare prices, guest capacity, location and amenities before choosing a stay.")}<section class="wrap"><p class="notice">${sampleNote}</p>${filterControls(type)}<p id="listing-count" role="status" aria-live="polite" aria-atomic="true">${resultCount(type)}</p><div class="cards" id="listing-results">${listingCards(type)}</div><p class="notice">${activity ? 'Check holiday closures before planning a visit. <a href="#/visitor-info">Read visitor information</a>.' : "All lodging on Taniti is regulated and regularly inspected by the government. Compare the pricing unit carefully: hostel prices are per person; other sample rates cover one room or suite."}</p></section>`;
}
function stayList() {
  return catalog("stays");
}
function activityList() {
  return catalog("activities");
}
main.addEventListener("change", (event) => {
  const form = event.target.closest("[data-listing-type]");
  if (!form || !event.target.dataset.filter) return;
  const type = form.dataset.listingType;
  filters[type][event.target.dataset.filter] = event.target.value;
  updateListingResults(type);
});
main.addEventListener("reset", (event) => {
  const form = event.target.closest("[data-listing-type]");
  if (!form) return;
  event.preventDefault();
  const type = form.dataset.listingType;
  Object.keys(filters[type]).forEach((key) => (filters[type][key] = "all"));
  form.querySelectorAll("select").forEach((select) => (select.value = "all"));
  updateListingResults(type);
});
main.addEventListener("submit", (event) => {
  if (event.target.matches("[data-listing-type]")) event.preventDefault();
});
function updateListingResults(type) {
  document.querySelector("#listing-results").innerHTML = listingCards(type);
  document.querySelector("#listing-count").textContent = resultCount(type);
}
function detail(type, id) {
  const d = (type === "stays" ? stays : activities)[id];
  if (!d) return missing();
  const isStay = type === "stays";
  const bookable = isStay || !["beaches", "entertainment"].includes(id);
  return `${intro(d.name, d.text, { path: type, label: isStay ? "Places to stay" : "Things to do" })}<div class="wrap content-grid"><section><p class="eyebrow">${d.tag}</p><h2>${isStay ? "Know before you book" : "Plan your experience"}</h2><p class="notice">${sampleNote}</p>${listingFacts(type, id)}<dl class="detail-list">${d.features.map(([a, b]) => info(a, b)).join("")}</dl><div class="actions">${button("Getting here & around", "transport", true)}${button(isStay ? "Back to places to stay" : "Back to things to do", type, true)}</div></section><aside class="booking-panel"><h2>${bookable ? "Arrange your visit" : "Make a day of it"}</h2><p>${bookable ? "Check availability, prices and conditions directly with the provider." : "Find practical travel information and plan how to get around."}</p>${bookable ? button("Check availability", `booking/${type}/${id}`) : button("Plan transportation", "transport")}<p class="fineprint" style="color:var(--muted)">${bookable ? "Booking handoff demonstration. No reservation or payment is made." : "Confirm current access and opening hours locally."}</p>${bookable ? '<p class="status-line">Provider contact details are awaiting confirmation.</p>' : ""}</aside></div>`;
}
function booking(type, id) {
  const d = (type === "stays" ? stays : activities)[id];
  if (!d) return missing();
  return `${intro("Check availability", d.name, { path: `${type}/${id}`, label: d.name })}<section class="wrap center-panel"><p class="eyebrow">Booking handoff preview</p><h2>Continue with a provider</h2><p>In the completed website, this step opens the selected provider’s booking page. No live provider has been connected in this prototype.</p><ol class="step-list"><li>Choose your dates and number of travelers.</li><li>Review availability, the full price and cancellation conditions.</li><li>Complete the reservation directly with the provider.</li></ol><p class="notice">This is the end of the demonstration. No booking has been created and no payment information is requested.</p><div class="actions">${button("Return to details", `${type}/${id}`)}${button("Back to home", "", true)}</div></section>`;
}
function dining() {
  return `${intro("Food & drink", "Choose local cooking, familiar favorites or Pan-Asian flavors.")}<section class="wrap"><div class="cards">${Object.entries(
    food,
  )
    .map(([id, d]) =>
      card(d.name, d.text, `dining/${id}`, "View dining information"),
    )
    .join(
      "",
    )}</div><section class="text-section" style="margin-top:38px"><h2>Pick up the essentials</h2><p>Taniti has two supermarkets, two smaller grocery stores and one convenience store open 24 hours a day.</p><p>Many restaurants close on national holidays. Check opening hours before your visit.</p>${button("Visitor information", "visitor-info", true)}</section></section>`;
}
function diningDetail(id) {
  const d = food[id];
  if (!d) return missing();
  return `${intro(d.name, d.text, { path: "dining", label: "Food & drink" })}<section class="wrap content-grid"><div><h2>Plan your meal</h2><p>Confirm the menu, dietary requirements, opening hours and reservation arrangements with the restaurant.</p><dl class="detail-list">${info("Opening hours", "Confirm hours and national-holiday closures with the restaurant.")}${info("Location", "Restaurant addresses and map links will be added when verified.")}${info("Reservations", "Restaurant phone numbers and reservation links have not been supplied.")}</dl><div class="actions">${button("Back to food & drink", "dining", true)}</div></div><aside class="booking-panel"><h2>Getting to dinner</h2><p>Taniti City is walkable, with buses and taxis available. Check options for travel beyond the city.</p>${button("Getting around", "transport")}</aside></section>`;
}
function transport() {
  return `${intro("Getting here & around", "Start with your arrival, then choose the way you want to explore.")}<section class="wrap content-grid"><div><section class="text-section"><h2>Arriving on Taniti</h2><p>Most visitors arrive by air. Taniti’s small airport accommodates small jets and propeller planes.</p><p>A small cruise ship docks in Yellow Leaf Bay for one night each week. Confirm schedules and travel arrangements with the carrier.</p></section><section class="text-section"><h2>Buses</h2><dl class="detail-list">${info("Taniti City public buses", "Daily, 5:00 a.m. to 11:00 p.m.")}${info("Beyond the city", "Private buses serve the rest of the island.")}${info("Routes and fares", "Confirm current routes, stops and fares locally; these details were not supplied.")}</dl></section><section class="text-section"><h2>Taxis and rental cars</h2><p>Taxis are available in Taniti City. A local rental agency near the airport offers rental cars.</p><p>Confirm pickup details, vehicle capacity, prices and rental requirements directly with the provider.</p></section><section class="text-section"><h2>Walking and cycling</h2><p>Taniti City is fairly flat and very walkable. Merriton Landing is also easy to explore on foot.</p><p>Several vendors rent bicycles and helmets. Helmets are required by law.</p></section></div><aside class="booking-panel"><h2>Bring your plans together</h2><p>Choose where to stay and what to do, then check transportation for each part of your visit.</p>${button("Places to stay", "stays")}<div class="actions">${button("Things to do", "activities", true)}</div></aside></section>`;
}
function visitor() {
  return `${intro("Visitor information", "Useful details for a comfortable, well-planned stay.")}<div class="wrap content-grid"><section aria-label="Frequently asked questions"><details open><summary>What currency can I use?</summary><p>Taniti uses the U.S. dollar. Many businesses also accept euros and yen, and many accept major credit cards. Several banks offer currency exchange.</p></details><details><summary>Will holidays affect my plans?</summary><p>Taniti observes many national holidays. Many attractions and restaurants close on holidays, so confirm opening hours before you plan a visit. A verified holiday calendar has not been supplied.</p></details><details><summary>What power outlets are used?</summary><p>Power outlets are 120 volts, the same as in the United States.</p></details><details><summary>Is English widely spoken?</summary><p>Many younger Tanitians speak fluent English. English is less commonly spoken in rural areas, especially by older residents.</p></details><details><summary>What medical services are available?</summary><p>Taniti has one hospital and several clinics. The hospital has many multilingual employees. Verified addresses and emergency contact numbers have not been supplied.</p></details><details><summary>What should I know about personal safety?</summary><p>The island brief reports that violent crime is very rare, but pickpocketing and other petty crimes have increased with tourism. Take care of your belongings.</p></details><details><summary>What are the alcohol rules?</summary><p>The drinking age is 18. Alcohol cannot be served or sold between midnight and 9:00 a.m.</p></details><details><summary>Do I need a bicycle helmet?</summary><p>Yes. Helmets are required by law, and rental vendors offer bikes and helmets.</p></details></section><aside class="booking-panel"><h2>Keep your days flexible</h2><p>Check activity schedules, restaurant hours and transportation before setting out.</p>${button("Getting here & around", "transport")}<div class="actions">${button("Things to do", "activities", true)}</div></aside></div>`;
}
function missing() {
  return `${intro("Page not found", "Let’s get you back to planning your visit.")}<div class="wrap">${button("Back to home", "")}</div>`;
}
function render() {
  if (location.hash === "#main") return;
  const [section, id, third] = (location.hash.replace(/^#\/?/, "") || "").split(
    "/",
  );
  let html;
  switch (section) {
    case "":
      html = home();
      break;
    case "stays":
      html = id ? detail("stays", id) : stayList();
      break;
    case "activities":
      html = id ? detail("activities", id) : activityList();
      break;
    case "booking":
      html = booking(id, third);
      break;
    case "dining":
      html = id ? diningDetail(id) : dining();
      break;
    case "transport":
      html = transport();
      break;
    case "visitor-info":
      html = visitor();
      break;
    default:
      html = missing();
  }
  main.innerHTML = html;
  document.title =
    (main.querySelector("h1")?.textContent.replace(/\s+/g, " ") ||
      "Visit Taniti") + " | Visit Taniti";
  document.querySelectorAll("#site-nav a").forEach((a) => {
    if (a.hash === `#/${section}`) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  document.querySelector("#site-nav").classList.remove("open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "instant" });
}
document.querySelector(".menu-button").addEventListener("click", (e) => {
  const nav = document.querySelector("#site-nav");
  nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
});
window.addEventListener("hashchange", () => {
  render();
  if (location.hash !== "#main") {
    main.setAttribute("tabindex", "-1");
    main.focus({ preventScroll: true });
  }
});
render();
