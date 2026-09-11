/* Alheib Primary School — polish interactions */
(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var scrolled = false;

  function onScroll() {
    var top = window.scrollY || window.pageYOffset;
    if (top > 40 && !scrolled) {
      header && header.classList.add("nav-scrolled");
      scrolled = true;
    } else if (top <= 40 && scrolled) {
      header && header.classList.remove("nav-scrolled");
      scrolled = false;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("reveal-visible");
    });
  }
})();

(function () {
  "use strict";

  var gallery = document.querySelector(".w3l-gallery");
  if (!gallery) return;

  var links = Array.prototype.filter.call(
    gallery.querySelectorAll(".grids5-info a"),
    function (a) {
      return a.querySelector("img");
    }
  );
  if (!links.length) return;

  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Photo viewer");
  lb.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close photo">&#10005;</button>' +
    '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous photo">&#10094;</button>' +
    '<figure class="lightbox-figure">' +
    '<img class="lightbox-img" src="" alt="" draggable="false" />' +
    '<figcaption class="lightbox-caption"></figcaption>' +
    "</figure>" +
    '<button type="button" class="lightbox-nav lightbox-next" aria-label="Next photo">&#10095;</button>';
  document.body.appendChild(lb);

  var img = lb.querySelector(".lightbox-img");
  var figcaption = lb.querySelector(".lightbox-caption");
  var index = 0;
  var lastTrigger = null;

  function render() {
    var link = links[index];
    var source = link.querySelector("img");
    var info = link.closest(".grids5-info");
    var title = info && info.querySelector(".blog-info h4 a");
    var text = title ? title.textContent.trim() : "";
    var href = link.getAttribute("href") || "";
    img.src = source ? source.getAttribute("src") : "";
    img.alt = source ? source.getAttribute("alt") : "";
    var target = "";
    if (href.indexOf("facebook") > -1) target = "Facebook";
    else if (href.indexOf("tiktok") > -1) target = "TikTok";
    if (target) {
      figcaption.innerHTML =
        text +
        ' <a href="' +
        href +
        '" target="_blank" rel="noopener">Open on ' +
        target +
        " &#8599;</a>";
    } else {
      figcaption.textContent = text;
    }
  }

  function open(i) {
    index = (i + links.length) % links.length;
    render();
    lastTrigger = links[index];
    lb.classList.add("open");
    document.body.classList.add("noscroll");
    lb.querySelector(".lightbox-close").focus();
  }

  function close() {
    lb.classList.remove("open");
    document.body.classList.remove("noscroll");
    if (lastTrigger) lastTrigger.focus();
  }

  links.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      open(i);
    });
  });

  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.querySelector(".lightbox-prev").addEventListener("click", function () {
    open(index - 1);
  });
  lb.querySelector(".lightbox-next").addEventListener("click", function () {
    open(index + 1);
  });
  lb.addEventListener("click", function (e) {
    if (e.target === lb) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") open(index - 1);
    else if (e.key === "ArrowRight") open(index + 1);
  });
})();