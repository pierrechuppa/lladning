# GA4 i GTM

Nie dodano identyfikatora GA4 ani GTM.

Zdarzenie `affiliate_click` jest wysylane do `window.dataLayer` przy kliknieciu linku partnerskiego i zawiera: `affiliate_click_position`, `outbound_url`, `page_path`, `page_title`, `article_slug`, `cta_text`, `device_context`, `content_cluster`, `funnel_stage`.

Po wdrozeniu GTM utworz trigger Custom Event: `affiliate_click`, a nastepnie mapuj zmienne dataLayer do GA4. Do polityki prywatnosci dopisz uzywane narzedzia, cookies, podstawe prawna i okres retencji.
