const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const engineData = {
  turbo: {
    role: "Entry performance",
    name: "2.0L LTG turbocharged inline-four",
    copy: "The lightest Camaro powertrain made the Alpha chassis feel quick on its feet and gave the LT trims an affordable entry point before it was dropped for 2024.",
    hp: "275",
    torque: "295 lb-ft",
    trims: "LS, LT"
  },
  v6: {
    role: "Balanced grand touring",
    name: "3.6L LGX naturally aspirated V6",
    copy: "The V6 delivered smooth revs, 335 hp, and a useful middle ground for drivers who wanted more sound and speed without jumping to the V8 trims.",
    hp: "335",
    torque: "284 lb-ft",
    trims: "LT"
  },
  v8: {
    role: "Classic Camaro muscle",
    name: "6.2L LT1 naturally aspirated V8",
    copy: "Shared in spirit with the Corvette small-block family, the LT1 gave LT1 and SS models the unmistakable V8 pull that defines the modern Camaro.",
    hp: "455",
    torque: "455 lb-ft",
    trims: "LT1, SS"
  },
  zl1: {
    role: "Track flagship",
    name: "6.2L LT4 supercharged V8",
    copy: "The ZL1's LT4 pushed the sixth-gen chassis to its peak, backed by serious cooling, tires, brakes, and aero upgrades for track use.",
    hp: "650",
    torque: "650 lb-ft",
    trims: "ZL1"
  }
};

const tabButtons = document.querySelectorAll(".tab-button");
const role = document.querySelector("#engine-role");
const name = document.querySelector("#engine-name");
const copy = document.querySelector("#engine-copy");
const hp = document.querySelector("#engine-hp");
const torque = document.querySelector("#engine-torque");
const trims = document.querySelector("#engine-trims");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.engine;
    const engine = engineData[key];

    if (!engine || !role || !name || !copy || !hp || !torque || !trims) {
      return;
    }

    tabButtons.forEach((tab) => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    role.textContent = engine.role;
    name.textContent = engine.name;
    copy.textContent = engine.copy;
    hp.textContent = engine.hp;
    torque.textContent = engine.torque;
    trims.textContent = engine.trims;
  });
});
