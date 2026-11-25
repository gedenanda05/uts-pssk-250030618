const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const tenantForm = document.getElementById("tenantForm");
const formMessage = document.getElementById("formMessage");

tenantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!tenantForm.checkValidity()) {
    tenantForm.reportValidity();
    return;
  }
  formMessage.textContent = "Terima kasih! Data pendaftaran berhasil diperiksa pada demo ini.";
  tenantForm.reset();
});
