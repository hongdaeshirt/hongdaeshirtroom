(function () {
  function boot(el) {
    var src = el.getAttribute("data-src");
    if (!src) return;
    el.classList.add("is-on");
    el.innerHTML =
      '<iframe title="홍대입구역 2호선 지도" src="' +
      src +
      '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
  }
  document.querySelectorAll(".map-shell, .map-facade").forEach(function (el) {
    var btn = el.querySelector(".map-load-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      boot(el);
    });
  });
})();
