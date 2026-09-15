const waitlistUrl = import.meta.env.VITE_WAITLIST_URL || "";
const affiliateUrl = import.meta.env.VITE_AFFILIATE_URL || "";

const affiliate = document.querySelector(".gun .btn");
if (affiliate) {
  if (affiliateUrl) {
    affiliate.href = affiliateUrl;
    affiliate.target = "_blank";
    affiliate.rel = "noopener sponsored";
  } else {
    affiliate.href = "#gun";
    affiliate.removeAttribute("target");
    affiliate.removeAttribute("rel");
  }
}

const form = document.getElementById("signup");
const thanks = document.getElementById("thanks");

function showThanks() {
  form.style.display = "none";
  thanks.style.display = "block";
}

form.addEventListener("submit", function (e) {
  const email = document.getElementById("email");
  if (!email.value || !email.checkValidity()) {
    email.focus();
    e.preventDefault();
    return;
  }

  e.preventDefault();

  if (!waitlistUrl) {
    showThanks();
    return;
  }

  const data = new FormData(form);
  fetch(waitlistUrl, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  })
    .catch(function () {
      /* still show thanks — keep the source UX even if the provider is down */
    })
    .finally(showThanks);
});
