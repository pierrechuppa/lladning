(function(){
  window.dataLayer = window.dataLayer || [];
  var menu = document.querySelector(".menu-btn");
  var links = document.querySelector(".navlinks");
  if (menu && links) {
    menu.addEventListener("click", function(){
      var open = links.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
  }
  var sticky = document.querySelector(".sticky-cta");
  var toggleSticky = function(){
    if (!sticky) return;
    sticky.classList.toggle("is-visible", matchMedia("(max-width: 860px)").matches && window.scrollY > 520);
  };
  toggleSticky();
  addEventListener("scroll", toggleSticky, { passive: true });
  addEventListener("resize", toggleSticky);
  document.querySelectorAll("a.outbound[href^='https://radarkobiet.pl/link/3019/19099102']").forEach(function(link){
    link.addEventListener("click", function(){
      window.dataLayer.push({
        event: "affiliate_click",
        affiliate_click_position: link.dataset.position || "unknown",
        outbound_url: link.href,
        page_path: location.pathname,
        page_title: document.title,
        article_slug: document.body.dataset.pageSlug || "",
        cta_text: link.textContent.trim(),
        device_context: matchMedia("(max-width: 860px)").matches ? "mobile" : "desktop",
        content_cluster: link.dataset.contentCluster || document.body.dataset.contentCluster || "",
        funnel_stage: link.dataset.funnelStage || document.body.dataset.funnelStage || ""
      });
    });
  });
})();
