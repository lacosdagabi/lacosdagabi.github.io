/* =============================================================
   LAÇOS DA GABI — COMPORTAMENTOS
   Depende de config.js (window.SITE_CONFIG, PRODUCTS, REVIEWS).
   Vanilla JS, sem dependências.
   ============================================================= */
(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};
  var PRODUCTS = window.PRODUCTS || [];
  var REVIEWS = window.REVIEWS || [];

  /* ---------- Ícones SVG (placeholders decorativos) ---------- */
  var bowSVG =
    '<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M100 70c-18-30-52-40-74-24-18 13-14 43 8 50 20 6 46-4 66-26z" fill="var(--color-dusty-rose)"/>' +
    '<path d="M100 70c18-30 52-40 74-24 18 13 14 43-8 50-20 6-46-4-66-26z" fill="var(--color-blush)"/>' +
    '<path d="M100 70c-14 22-26 46-30 66l24-12 24 12c-4-20-16-44-30-66z" fill="var(--color-dusty-rose)"/>' +
    '<circle cx="100" cy="70" r="16" fill="var(--color-deep-rose)"/>' +
    '<circle cx="100" cy="66" r="6" fill="var(--color-blush)"/>' +
    "</svg>";

  /* ---------- Helpers de WhatsApp ---------- */
  function digitsOnly(v) { return (v || "").replace(/\D/g, ""); }

  function buildWhatsAppLink(message) {
    var num = digitsOnly(cfg.whatsapp);
    var text = encodeURIComponent(message || cfg.whatsappMessage || "");
    if (!num) return null; // número ainda não configurado
    return "https://wa.me/" + num + "?text=" + text;
  }

  function productMessage(name) {
    return "Olá, Gabi! Vi o " + name + " no site da Laços da Gabi e gostaria de saber mais. 🎀";
  }

  var toastEl = null;
  function showToast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "wa-toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toastEl.classList.remove("is-visible");
    }, 4000);
  }

  /* Aplica href de WhatsApp a todos os elementos [data-wa].
     Se não houver número configurado, mantém acessível e avisa. */
  function wireWhatsAppLinks() {
    var links = document.querySelectorAll("[data-wa]");
    Array.prototype.forEach.call(links, function (el) {
      var custom = el.getAttribute("data-wa-message");
      var href = buildWhatsAppLink(custom);
      if (href) {
        el.setAttribute("href", href);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      } else {
        el.setAttribute("href", "#contato");
        el.addEventListener("click", function (e) {
          e.preventDefault();
          showToast("WhatsApp em breve disponível. 🎀 Configure o número em config.js.");
          var contato = document.getElementById("contato");
          if (contato) contato.scrollIntoView({ behavior: "smooth" });
        });
      }
    });
  }

  /* ---------- Renderização de produtos ---------- */
  function renderProducts() {
    var grid = document.getElementById("products-grid");
    if (!grid) return;
    grid.innerHTML = "";

    PRODUCTS.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "product";
      card.setAttribute("data-animate", "");

      var media;
      if (p.image) {
        media =
          '<div class="product__media">' +
          '<img src="' + p.image + '" alt="' + escapeHtml(p.name) +
          ' — laço infantil artesanal da Laços da Gabi" loading="lazy" width="400" height="400">' +
          "</div>";
      } else {
        media =
          '<div class="product__media ph ph--' + (p.placeholder || "a") + '">' +
          '<div class="ph-fill" style="position:absolute;inset:0"></div>' +
          bowSVG +
          "</div>";
      }

      var waLink = buildWhatsAppLink(productMessage(p.name));
      var btnAttrs = waLink
        ? 'href="' + waLink + '" target="_blank" rel="noopener"'
        : 'href="#contato" data-wa data-wa-message="' + escapeHtml(productMessage(p.name)) + '"';

      card.innerHTML =
        media +
        '<div class="product__body">' +
        '<span class="product__cat">' + escapeHtml(p.category || "") + "</span>" +
        "<h3>" + escapeHtml(p.name) + "</h3>" +
        "<p>" + escapeHtml(p.description || "") + "</p>" +
        '<a class="btn btn--soft" ' + btnAttrs + ' aria-label="Quero o modelo ' +
        escapeHtml(p.name) + ' pelo WhatsApp">Quero este modelo</a>' +
        "</div>";

      grid.appendChild(card);
    });

    // religa toasts caso algum card fique sem número
    wireWhatsAppLinks();
    observeAnimations(grid.querySelectorAll("[data-animate]"));
  }

  /* ---------- Renderização de avaliações ---------- */
  function renderReviews() {
    var section = document.getElementById("avaliacoes");
    if (!section) return;

    if (!REVIEWS.length) {
      section.hidden = true; // some quando vazio
      return;
    }
    section.hidden = false;

    var grid = section.querySelector("#reviews-grid");
    var empty = section.querySelector(".reviews__empty");
    if (empty) empty.hidden = true;
    if (!grid) return;

    grid.innerHTML = "";
    REVIEWS.forEach(function (r) {
      var stars = "";
      var n = Math.max(0, Math.min(5, r.stars || 0));
      for (var i = 0; i < 5; i++) stars += i < n ? "★" : "☆";
      var el = document.createElement("article");
      el.className = "review";
      el.setAttribute("data-animate", "");
      el.innerHTML =
        '<div class="review__stars" aria-label="' + n + ' de 5 estrelas">' + stars + "</div>" +
        '<p class="review__text">' + escapeHtml(r.text || "") + "</p>" +
        '<p class="review__meta">' + escapeHtml(r.name || "") +
        (r.source ? " · " + escapeHtml(r.source) : "") + "</p>";
      grid.appendChild(el);
    });
    observeAnimations(grid.querySelectorAll("[data-animate]"));
  }

  /* ---------- Menu mobile ---------- */
  function setupNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------- Header sombra ao rolar + WhatsApp flutuante ---------- */
  function setupScroll() {
    var header = document.querySelector(".header");
    var waFloat = document.querySelector(".wa-float");
    function onScroll() {
      var y = window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 8);
      if (waFloat) waFloat.classList.toggle("is-visible", y > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- FAQ acordeão ---------- */
  function setupFaq() {
    var items = document.querySelectorAll(".faq__q");
    Array.prototype.forEach.call(items, function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (panel) {
          panel.style.maxHeight = expanded ? "0px" : panel.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------- Animações de entrada ---------- */
  var io = null;
  function observeAnimations(nodes) {
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(nodes, function (n) { n.classList.add("is-visible"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    Array.prototype.forEach.call(nodes, function (n) { io.observe(n); });
  }

  /* ---------- Preenche dados dinâmicos (ano, links) ---------- */
  function fillDynamic() {
    var year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();

    // Links de Instagram
    var igLinks = document.querySelectorAll("[data-instagram]");
    Array.prototype.forEach.call(igLinks, function (el) {
      if (cfg.instagram) {
        el.setAttribute("href", cfg.instagram);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      } else {
        el.setAttribute("href", "#contato");
        el.addEventListener("click", function (e) {
          e.preventDefault();
          showToast("Instagram em breve. 🎀 Configure o link em config.js.");
        });
      }
    });
  }

  /* ---------- utilidade ---------- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ---------- Init ---------- */
  function init() {
    renderProducts();
    renderReviews();
    setupNav();
    setupScroll();
    setupFaq();
    fillDynamic();
    wireWhatsAppLinks();
    observeAnimations(document.querySelectorAll("[data-animate]"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
