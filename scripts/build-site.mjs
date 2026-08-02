import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const site = "https://gaypolska.pl";
const affiliate = "https://radarkobiet.pl/link/3019/19099102";
const updated = "2026-08-02";
const homeFaq = [
  ["Czy GayPolska.pl jest portalem randkowym?", "Nie. To serwis informacyjny. Rejestracja oraz rozmowy odbywaja sie w zewnetrznych serwisach."],
  ["Czy klikniecie oznacza platnosc?", "Nie. Klikniecie prowadzi do zewnetrznej oferty. Przed zakupem jakiejkolwiek uslugi sprawdz warunki na stronie docelowej."],
  ["Czy gwarantujecie profile z mojej okolicy?", "Nie. Dostepnosc profili zalezy od platformy, lokalizacji i momentu korzystania z uslugi."]
];
const featuredArticles = [
  ["erodate", "Erodate", "Sprawdz Erodate", "Krotki przewodnik przed kliknieciem: rejestracja, prywatnosc, funkcje, warunki i bezpieczny start rozmowy."],
  ["erodate-dla-gejow", "Erodate", "Erodate dla gejow", "Dla osob, ktore chca szybko sprawdzic Erodate pod katem randek z mezczyznami, rejestracji, prywatnosci i pierwszego kontaktu."],
  ["gej-randki-online", "Randki online", "Gej randki online", "Jak wybrac platforme, zaczac rozmowe i przejsc do rejestracji bez tracenia czasu na przypadkowe aplikacje."],
  ["portal-randkowy-dla-gejow", "Aplikacje i platformy", "Portal randkowy dla gejow", "Na co patrzec przy wyborze portalu randkowego dla gejow i kiedy warto sprawdzic Erodate."],
  ["alternatywa-dla-grindr", "Porownania i alternatywy", "Alternatywa dla Grindr", "Co sprawdzic, gdy szukasz innej sciezki niz aplikacje geolokalizacyjne i chcesz przejsc do Erodate."],
  ["aplikacja-dla-gejow-bez-zdjecia", "Prywatnosc", "Aplikacja dla gejow bez zdjecia", "Jak zaczac ostrozniej, ograniczyc dane w profilu i sprawdzic, czy platforma pozwala stopniowo ujawniac informacje."],
  ["ranking-aplikacji-randkowych-dla-gejow", "Aplikacje i platformy randkowe", "Ranking aplikacji randkowych dla gejow", "Ranking i porownanie aplikacji randkowych dla gejow bez fikcyjnych ocen: kryteria, prywatnosc, ograniczenia i wyrozniona oferta."],
  ["bezpieczne-randki-online", "Bezpieczenstwo i prywatnosc", "Bezpieczne randki online dla gejow", "Jak bezpiecznie randkowac online: prywatnosc, pierwsze spotkanie, falszywe profile, pieniadze, zdjecia intymne i szybkie reakcje na naduzycia."],
  ["dyskretne-randki-dla-gejow", "Dyskretne randki", "Dyskretne randki dla gejow", "Jak randkowac dyskretnie bez obiecywania anonimowosci: ustawienia profilu, zdjecia, komunikatory, lokalizacja i bezpieczna rejestracja."],
  ["jak-rozpoznac-falszywy-profil", "Problemy, oszustwa i szantaz", "Jak rozpoznac falszywy profil?", "Najczestsze oznaki falszywego profilu: zdjecia, presja, prosby o pieniadze, niespojne historie i bezpieczne kroki przed spotkaniem."],
  ["pierwsza-randka-z-mezczyzna", "Pierwsze spotkanie i relacje", "Pierwsza randka z mezczyzna", "Praktyczny poradnik przed pierwsza randka z mezczyzna: jak wybrac miejsce, ustalic oczekiwania, zadbac o komfort i unikac presji."],
  ["jak-napisac-pierwsza-wiadomosc", "Profil, rozmowa i pierwsza wiadomosc", "Jak napisac pierwsza wiadomosc do faceta", "Gotowe zasady i przyklady pierwszej wiadomosci: jak pisac konkretnie, naturalnie i bez nachalnych formul, zeby rozpoczac rozmowe."],
  ["randki-dla-gejow-po-40", "Randki wedlug wieku", "Randki dla gejow po 40", "Randki dla gejow po 40 bez presji: profil, oczekiwania, bezpieczenstwo, dyskrecja i wybor platformy dopasowanej do stylu zycia."],
  ["jak-usunac-dane-z-aplikacji-randkowej", "Usuwanie danych i kont", "Jak usunac konto i dane z aplikacji randkowej", "Usuniecie konta randkowego a dezaktywacja: co sprawdzic w ustawieniach, jak zadac skasowania danych i co zapisac przed usunieciem."]
];

const nav = [
  ["/erodate/", "Erodate"],
  ["/ranking-aplikacji-randkowych-dla-gejow/", "Ranking"],
  ["/poradniki/", "Poradniki"],
  ["/bezpieczne-randki-online/", "Bezpieczenstwo"],
  ["/dyskretne-randki-dla-gejow/", "Prywatnosc"],
];

const pages = [
  {
    slug: "",
    title: "Randki dla gejow w Polsce: aplikacje, prywatnosc i poradniki | GayPolska.pl",
    description: "Porownaj aplikacje randkowe dla gejow, sprawdz bezpieczna rejestracje, prywatnosc, pierwsze wiadomosci i poradniki dla osob 18+ w Polsce.",
    h1: "Randki dla gejow w Polsce bez zgadywania: platformy, prywatnosc i bezpieczenstwo",
    cluster: "Portal glowny",
    stage: "decision",
    type: "home",
    faq: homeFaq,
    body: `
      <section class="hero">
        <div class="wrap hero-grid">
          <div>
            <p class="badge">Serwis informacyjny dla osob 18+</p>
            <h1>Randki dla gejow w Polsce bez zgadywania: <span>platformy, prywatnosc i bezpieczenstwo</span></h1>
            <p class="lead">Pomagamy wybrac miejsce do rozmowy lub randki, a jesli chcesz dzialac od razu, kierujemy do Erodate. Po kliknieciu samodzielnie sprawdzisz rejestracje, funkcje i warunki platformy.</p>
            <div class="hero-actions">
              ${cta("Sprawdz Erodate", "hero")}
              <a class="btn secondary" href="/poradniki/">Najpierw przeczytaj poradniki</a>
            </div>
            <p class="hint">Po kliknieciu przejdziesz do zewnetrznej oferty. Utworzenie konta moze byc bezplatne, ale funkcje platne sprawdzisz juz w serwisie docelowym.</p>
          </div>
          <picture><img src="/assets/hero-dating-safety.png" width="1693" height="929" alt="Neutralna ilustracja telefonu z interfejsem randkowym i akcentami prywatnosci" fetchpriority="high"></picture>
        </div>
      </section>
      ${hubGrid()}
      ${conversionStrip("home_boost")}
      <section class="band">
        <div class="wrap two">
          <div>
            <p class="eyebrow">Wyrozniona oferta</p>
            <h2>Erodate: szybkie przejscie do rejestracji</h2>
            <p>To glowny kierunek konwersji serwisu. Zamiast udawac niezalezny test z fikcyjnymi ocenami, jasno pokazujemy uzytkownikowi, co moze sprawdzic po kliknieciu: rejestracje, funkcje, prywatnosc i ewentualne koszty.</p>
            <ul class="checks"><li>dla osob gotowych sprawdzic platforme teraz</li><li>bez fałszywych licznikow, ocen i obietnic</li><li>jedno klikniecie do strony docelowej</li></ul>
          </div>
          <aside class="offer">
            <strong>Erodate</strong>
            <p>Sprawdz, czy sposob rejestracji oraz warunki Erodate pasuja do tego, czego szukasz.</p>
            ${cta("Sprawdz Erodate", "featured_offer")}
            <a class="text-link" href="/erodate/">Co sprawdzic przed rejestracja?</a>
          </aside>
        </div>
      </section>
      ${popularArticles()}
      <section class="section">
        <div class="wrap two">
          <div>
            <p class="eyebrow">Bezpieczenstwo</p>
            <h2>Zanim wyslesz zdjecie albo umowisz spotkanie</h2>
            <p>Najwieksze ryzyka w randkach online rzadko wygladaja groznie na poczatku. Zwykle zaczynaja sie od presji, przenoszenia rozmowy poza platforme, prosb o dyskrecje bez wzajemnosci albo pytan o pieniadze.</p>
            <a class="text-link" href="/bezpieczne-randki-online/">Przejdz do checklisty bezpieczenstwa</a>
          </div>
          <div class="mini-list">
            <a href="/jak-rozpoznac-falszywy-profil/">Falszywe profile</a>
            <a href="/szantaz-intymnymi-zdjeciami/">Szantaz zdjeciami</a>
            <a href="/jak-usunac-dane-z-aplikacji-randkowej/">Usuwanie danych</a>
          </div>
        </div>
      </section>
      ${faqBlock()}`
  },
  {
    slug: "erodate",
    title: "Erodate: sprawdz oferte i warunki rejestracji",
    description: "Przed przejsciem do Erodate sprawdz, na co zwrocic uwage: rejestracja, prywatnosc, funkcje i platnosci.",
    h1: "Sprawdz Erodate",
    cluster: "Erodate",
    stage: "decision",
    type: "landing",
    body: `
      <section class="article-head offer-head">
        <div class="wrap narrow">
          <p class="badge">Erodate | 18+</p>
          <h1>Sprawdz Erodate</h1>
          <p class="lead">Jesli chcesz przejsc od poradnika do realnego sprawdzenia platformy, to jest najkrotsza sciezka. Po kliknieciu samodzielnie zobaczysz rejestracje, funkcje i aktualne warunki.</p>
          <div class="hero-actions">${cta("Przejdz do Erodate", "article_top")}<a class="btn secondary" href="/ranking-aplikacji-randkowych-dla-gejow/">Porownaj kryteria</a></div>
          <p class="hint dark">Nie gwarantujemy liczby profili, odpowiedzi ani rezultatu randkowego. Aktualne warunki sprawdzisz po przejsciu do serwisu.</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap two">
          <article class="content">
            <div class="summary"><strong>Przed kliknieciem sprawdzisz:</strong><ul><li>czy chcesz zalozyc konto w zewnetrznym serwisie,</li><li>jakie dane sa wymagane przy rejestracji,</li><li>czy funkcje i warunki sa dla Ciebie akceptowalne.</li></ul></div>
            <h2>Dla kogo ta sciezka ma sens?</h2>
            <p>Dla osoby, ktora nie chce czytac kolejnych porownan i jest gotowa samodzielnie sprawdzic Erodate. Najlepiej kliknac wtedy, gdy masz kilka minut na spokojna rejestracje i mozesz od razu zweryfikowac ustawienia prywatnosci.</p>
            <div class="inline-cta"><p>Gotowy sprawdzic aktualna oferte?</p>${cta("Zobacz aktualna oferte", "article_middle")}</div>
            <h2>Co sprawdzic po przejsciu?</h2>
            <p>Zwroc uwage na wymagane dane, regulamin, polityke prywatnosci, widocznosc profilu, ewentualne platne funkcje i mozliwosc usuniecia konta. Jesli cokolwiek jest niejasne, nie kupuj dodatkowych funkcji pod presja.</p>
            <h2>Jak zaczac bezpiecznie?</h2>
            <p>Nie podawaj w profilu pelnego adresu, miejsca pracy ani danych finansowych. Do pierwszych rozmow uzywaj informacji, ktore nie pozwalaja latwo polaczyc konta z Twoja codzienna tozsamoscia.</p>
            <div class="inline-cta end"><p>Najkrotsza sciezka do sprawdzenia Erodate:</p>${cta("Sprawdz Erodate", "article_end")}</div>
          </article>
          <aside class="offer sticky-offer">
            <strong>Erodate</strong>
            <p>Jeden kierunek, jasne oznaczenie i brak fikcyjnych obietnic. Klik prowadzi do zewnetrznej oferty Erodate.</p>
            ${cta("Sprawdz Erodate", "sidebar")}
          </aside>
        </div>
      </section>`
  },
  {
    slug: "erodate-dla-gejow",
    title: "Erodate dla gejow: jak sprawdzic oferte i rejestracje",
    description: "Erodate dla gejow: kiedy warto sprawdzic platforme, jak podejsc do rejestracji i prywatnosci.",
    h1: "Erodate dla gejow",
    cluster: "Erodate",
    stage: "decision",
    type: "landing",
    body: article("Erodate dla gejow", [
      ["Najkrotsza odpowiedz", "Jesli szukasz szybkiego przejscia do platformy randkowej, Erodate jest dostepne po kliknieciu przycisku. Decyzje o rejestracji podejmujesz juz po sprawdzeniu warunkow w zewnetrznym serwisie."],
      ["Dlaczego kierujemy do tej oferty", "To strona dla uzytkownika, ktory ma intencje dzialania, a nie tylko czytania poradnikow. Nie udajemy neutralnego rankingu z niepotwierdzonymi ocenami: pokazujemy jedna konkretna sciezke do sprawdzenia."],
      ["Co sprawdzic po kliknieciu", "Zobacz, jakie dane sa wymagane, czy profil da sie ustawic ostroznie, jak wygladaja funkcje kontaktu, jakie sa opcje platne i jak mozna usunac konto."],
      ["Jak zwiekszyc szanse dobrej rejestracji", "Wejdz wtedy, gdy masz chwile na spokojne przejscie formularza. Przygotuj neutralny opis, nie wrzucaj od razu najbardziej prywatnych zdjec i po rejestracji sprawdz ustawienia widocznosci."]
    ], "article_middle", true)
  },
  {
    slug: "gej-randki-online",
    title: "Gej randki online: jak zaczac i gdzie przejsc do rejestracji",
    description: "Gej randki online krok po kroku: wybor platformy, profil, pierwsza wiadomosc, bezpieczenstwo i przejscie do Erodate.",
    h1: "Gej randki online",
    cluster: "Aplikacje i platformy randkowe",
    stage: "decision",
    type: "article",
    body: article("Gej randki online", [
      ["Najprostsza sciezka", "Jesli chcesz szybko zaczac, najpierw wybierz jedna platforme, przygotuj prosty profil i sprawdz warunki rejestracji. Na tej stronie glowna sciezka CTA prowadzi do Erodate."],
      ["Co wpisac w profilu", "Napisz kogo chcesz poznac, w jakim tempie lubisz rozmawiac i czego nie szukasz. Unikaj zbyt prywatnych danych, ale nie zostawiaj pustego opisu, bo pusty profil rzadko budzi zaufanie."],
      ["Jak zaczac rozmowe", "Najlepiej dziala krotkie nawiazanie do profilu i jedno pytanie. Nie musisz pisac idealnie; wazniejsze jest, zeby wiadomosc brzmiala normalnie i nie wywierala presji."],
      ["Kiedy kliknac w oferte", "Kliknij wtedy, gdy chcesz sprawdzic aktualny formularz, widocznosc profilu i funkcje kontaktu. Po przejsciu nie plac za dodatki, dopoki nie przeczytasz warunkow w serwisie docelowym."]
    ], "article_middle", true)
  },
  {
    slug: "portal-randkowy-dla-gejow",
    title: "Portal randkowy dla gejow: jak wybrac bezpieczna platforme",
    description: "Jaki portal randkowy dla gejow wybrac? Sprawdz kryteria, prywatnosc, rejestracje, pierwsze rozmowy i oferte Erodate.",
    h1: "Portal randkowy dla gejow",
    cluster: "Aplikacje i platformy randkowe",
    stage: "decision",
    type: "article",
    body: article("Portal randkowy dla gejow", [
      ["Czego szukac w portalu", "Dobry wybor zaczyna sie od jasnej rejestracji, czytelnych zasad, mozliwosci ustawienia profilu i prostego sposobu rezygnacji. Nie warto wybierac platformy tylko po obietnicach marketingowych."],
      ["Portal czy aplikacja?", "Portal moze byc wygodniejszy, jesli chcesz spokojniej opisac profil i sprawdzic warunki przed rozmowa. Aplikacja bywa szybsza, ale czesto mocniej opiera sie na natychmiastowej reakcji."],
      ["Jak ocenic oferte", "Po kliknieciu sprawdz wymagane dane, regulamin, widocznosc profilu, funkcje kontaktu i ewentualne koszty. To wazniejsze niz hasla o popularnosci, ktorych nie da sie latwo zweryfikowac."],
      ["Nasza rekomendowana sciezka", "Na GayPolska.pl glowna sciezka rejestracyjna prowadzi do Erodate. Uzytkownik powinien wiedziec, ze po kliknieciu przejdzie do zewnetrznego serwisu, gdzie sam sprawdzi aktualne warunki."]
    ], "article_middle", true)
  },
  {
    slug: "alternatywa-dla-grindr",
    title: "Alternatywa dla Grindr: co sprawdzic przed wyborem platformy",
    description: "Szukasz alternatywy dla Grindr? Sprawdz kryteria wyboru, prywatnosc, styl kontaktu i przejscie do Erodate.",
    h1: "Alternatywa dla Grindr",
    cluster: "Porownania i alternatywy",
    stage: "decision",
    type: "article",
    body: article("Alternatywa dla Grindr", [
      ["Kiedy szukac alternatywy", "Alternatywa ma sens, jesli nie chcesz aplikacji mocno opartej na geolokalizacji, zalezy Ci na innym tempie rozmowy albo chcesz sprawdzic platforme w bardziej klasycznym modelu rejestracji."],
      ["Nie mylimy marek", "Przyciski na tej stronie nie prowadza do Grindr. Prowadza do Erodate, czyli do innej sciezki, ktora warto ocenic samodzielnie."],
      ["Na co patrzec", "Sprawdz prywatnosc profilu, wymagane dane, mozliwosc blokowania kontaktow, jasnosc platnych funkcji i to, czy latwo przerwac korzystanie z konta."],
      ["Kiedy kliknac", "Klik ma sens, gdy chcesz od razu zobaczyc aktualna rejestracje i nie potrzebujesz kolejnego ogolnego poradnika. Jesli nadal porownujesz opcje, zacznij od rankingu."]
    ], "article_middle", true)
  },
  {
    slug: "aplikacja-dla-gejow-bez-zdjecia",
    title: "Aplikacja dla gejow bez zdjecia: prywatny start i rejestracja",
    description: "Czy da sie zaczac randki dla gejow bez zdjecia? Jak ograniczyc ryzyko, sprawdzic prywatnosc i przejsc do Erodate.",
    h1: "Aplikacja dla gejow bez zdjecia",
    cluster: "Dyskretne randki",
    stage: "decision",
    type: "article",
    body: article("Aplikacja dla gejow bez zdjecia", [
      ["Czy start bez zdjecia ma sens?", "Tak, jesli zalezy Ci na ostroznym poczatku, ale brak zdjecia moze zmniejszac liczbe odpowiedzi. Rozsadnym kompromisem jest neutralny opis i stopniowe ujawnianie prywatniejszych informacji."],
      ["Co sprawdzic w platformie", "Po przejsciu do oferty zobacz, czy zdjecie jest wymagane, kto widzi profil, czy mozna kontrolowac opis i czy ustawienia prywatnosci sa zrozumiale."],
      ["Czego nie dodawac od razu", "Nie pokazuj miejsca pracy, adresu, rozpoznawalnego mieszkania, tablic rejestracyjnych ani zdjec, ktore latwo znalezc w innych mediach spolecznosciowych."],
      ["Sciezka do rejestracji", "Jesli chcesz sprawdzic warunki teraz, przycisk prowadzi do Erodate. Zanim zaplacisz za jakakolwiek funkcje, przeczytaj warunki w serwisie docelowym."]
    ], "article_middle", true)
  },
  {
    slug: "anonimowe-randki-dla-gejow",
    title: "Anonimowe randki dla gejow: co jest realne, a co obietnica",
    description: "Anonimowe randki dla gejow bez zludzen: jak ograniczac dane, unikac ryzyka i sprawdzic Erodate.",
    h1: "Anonimowe randki dla gejow",
    cluster: "Dyskretne randki",
    stage: "consideration",
    type: "article",
    body: article("Anonimowe randki dla gejow", [
      ["Anonimowosc ma granice", "Nie obiecujemy pelnej anonimowosci, bo kazda rejestracja i kazda rozmowa zostawia jakis slad. Mozesz jednak ograniczyc dane, ktore lacza profil z Twoja codzienna tozsamoscia."],
      ["Bezpieczniejszy start", "Uzyj neutralnego opisu, nie podawaj miejsca pracy, dzielnicy ani danych finansowych. Zdjecia udostepniaj etapami i tylko wtedy, gdy rozmowa nie wywiera presji."],
      ["Co sprawdzic przed rejestracja", "Zobacz, jakie dane sa obowiazkowe, czy mozna usunac konto, jak dzialaja ustawienia widocznosci i czy platne funkcje sa opisane zrozumiale."],
      ["Kiedy przejsc do oferty", "Gdy wiesz juz, jakie granice chcesz zachowac, mozesz przejsc do Erodate i sprawdzic, czy platforma pasuje do Twojego poziomu dyskrecji."]
    ], "article_middle", true)
  },
  {
    slug: "randki-dla-gejow-w-mniejszym-miescie",
    title: "Randki dla gejow w mniejszym miescie: dyskrecja i wybor platformy",
    description: "Jak podejsc do randek dla gejow w mniejszej miejscowosci: prywatnosc, tempo rozmowy, spotkanie i sprawdzenie Erodate.",
    h1: "Randki dla gejow w mniejszym miescie",
    cluster: "Randki w Polsce i mniejszych miejscowosciach",
    stage: "consideration",
    type: "article",
    body: article("Randki dla gejow w mniejszym miescie", [
      ["Inna dynamika niz w duzym miescie", "W mniejszej miejscowosci prywatnosc czesto jest wazniejsza, bo latwiej o wspolne znajomosci i przypadkowe rozpoznanie. Dlatego profil powinien byc konkretny, ale nie nadmiernie identyfikujacy."],
      ["Jak zaczac ostroznie", "Nie podawaj dokladnej lokalizacji, miejsca pracy ani rutyny dnia. Pierwsze rozmowy prowadz w tempie, ktore pozwala sprawdzic intencje bez presji."],
      ["Spotkanie", "Dobrym wyborem bywa neutralne publiczne miejsce poza najblizszym otoczeniem. Zachowaj wlasny transport i nie musisz tlumaczyc, jesli chcesz zakonczyc spotkanie."],
      ["Platforma do sprawdzenia", "Jesli chcesz przejsc od planowania do dzialania, mozesz sprawdzic Erodate i samodzielnie ocenic dostepne ustawienia oraz warunki."]
    ], "article_middle", true)
  },
  {
    slug: "gdzie-poznac-geja",
    title: "Gdzie poznac geja: online, lokalnie i bezpiecznie",
    description: "Gdzie poznac geja w Polsce: platformy online, znajomi, wydarzenia, mniejsze miasta, dyskrecja i szybka sciezka do Erodate.",
    h1: "Gdzie poznac geja",
    cluster: "Pierwsze spotkanie i relacje",
    stage: "consideration",
    type: "article",
    body: article("Gdzie poznac geja", [
      ["Najbardziej praktyczne opcje", "Najlatwiej zaczac online, bo masz wieksza kontrole nad tempem rozmowy i zakresem danych. Poza internetem dzialaja znajomi, wydarzenia, miejsca LGBT+ i aktywnosci, w ktorych naturalnie poznajesz ludzi."],
      ["Kiedy wybrac online", "Online ma sens, gdy mieszkasz w mniejszej miejscowosci, zalezy Ci na dyskrecji albo chcesz najpierw porozmawiac bez presji spotkania. Wtedy platforma randkowa moze byc po prostu szybsza."],
      ["Jak nie tracic czasu", "Ustal, czy szukasz rozmowy, randek czy relacji. Profil bez celu przyciaga przypadkowe kontakty, a zbyt dluga lista wymagan moze blokowac normalna rozmowe."],
      ["Sciezka do sprawdzenia", "Jesli chcesz przejsc do konkretnej platformy, przycisk prowadzi do Erodate. Po kliknieciu sprawdz warunki rejestracji i ustawienia prywatnosci."]
    ], "article_middle", true)
  },
  {
    slug: "jak-poznac-geja-online",
    title: "Jak poznac geja online: profil, rozmowa i bezpieczny start",
    description: "Jak poznac geja online bez chaosu: wybor platformy, opis profilu, pierwsza wiadomosc, czerwone flagi i Erodate.",
    h1: "Jak poznac geja online",
    cluster: "Profil, rozmowa i pierwsza wiadomosc",
    stage: "consideration",
    type: "article",
    body: article("Jak poznac geja online", [
      ["Zacznij od celu", "Inaczej pisze sie profil pod rozmowe, inaczej pod randke, a inaczej pod relacje. Jedno szczere zdanie o intencji zwykle dziala lepiej niz dlugi opis bez konkretu."],
      ["Pierwsza wiadomosc", "Napisz krotko i normalnie: nawiazanie do profilu plus jedno pytanie. Nie zaczynaj od presji na zdjecia, spotkanie albo przejscie na prywatny komunikator."],
      ["Weryfikacja bez stresu", "Zanim sie spotkasz, sprawdz spojnosc historii, popros o neutralna forme potwierdzenia i zwroc uwage, czy druga osoba respektuje granice."],
      ["Kiedy przejsc dalej", "Jesli chcesz sprawdzic platforme zamiast czytac kolejne porady, mozesz przejsc do Erodate i ocenic rejestracje samodzielnie."]
    ], "article_middle", true)
  },
  {
    slug: "randki-dla-gejow-po-50",
    title: "Randki dla gejow po 50: spokojny start i wybor platformy",
    description: "Randki dla gejow po 50: jak opisac profil, ustalic tempo znajomosci, zadbac o dyskrecje i sprawdzic Erodate.",
    h1: "Randki dla gejow po 50",
    cluster: "Randki wedlug wieku",
    stage: "consideration",
    type: "article",
    body: article("Randki dla gejow po 50", [
      ["Bez pospiechu", "Po 50 wiele osob szuka spokojniejszego kontaktu, jasnych intencji i rozmowy bez gier. To moze byc przewaga, bo latwiej szybciej odrzucic kontakty, ktore nie pasuja."],
      ["Opis profilu", "Napisz, czy interesuje Cie rozmowa, randki, relacja czy poznawanie bez presji. Nie musisz ujawniac zbyt wielu prywatnych danych, zeby profil byl wiarygodny."],
      ["Bezpieczenstwo", "Umawiaj pierwsze spotkania w publicznych miejscach, nie przesylaj pieniedzy i nie przyjmuj presji na prywatne zdjecia. Zaufanie powinno rosnac etapami."],
      ["Platforma do sprawdzenia", "Jesli chcesz sprawdzic aktualna oferte, CTA prowadzi do Erodate. Warunki i funkcje oceniasz juz w serwisie docelowym."]
    ], "article_middle", true)
  },
  {
    slug: "aplikacja-dla-gejow-bez-numeru-telefonu",
    title: "Aplikacja dla gejow bez numeru telefonu: co sprawdzic",
    description: "Aplikacja dla gejow bez numeru telefonu: prywatnosc, alternatywne logowanie, ryzyka, ustawienia konta i oferta Erodate.",
    h1: "Aplikacja dla gejow bez numeru telefonu",
    cluster: "Dyskretne randki",
    stage: "decision",
    type: "article",
    body: article("Aplikacja dla gejow bez numeru telefonu", [
      ["Czy to zawsze mozliwe?", "Nie kazda platforma pozwala zalozyc konto bez numeru telefonu. Po przejsciu sprawdz aktualny formularz i wymagane dane bezposrednio w serwisie."],
      ["Dlaczego ludzie tego szukaja", "Najczesciej chodzi o prywatnosc, dyskrecje i oddzielenie randek od codziennej tozsamosci. To rozsadna intencja, ale nie powinna prowadzic do ignorowania regulaminu."],
      ["Co sprawdzic", "Zobacz, czy wymagany jest numer telefonu, e-mail, logowanie spolecznosciowe albo inna forma weryfikacji. Sprawdz tez, czy da sie usunac konto i zmienic ustawienia widocznosci."],
      ["Sciezka do Erodate", "Jesli chcesz sprawdzic aktualne wymagania, przycisk prowadzi do Erodate. Nie podawaj danych, ktorych nie chcesz ujawniac, zanim przeczytasz zasady."]
    ], "article_middle", true)
  },
  {
    slug: "poradniki",
    title: "Poradniki randkowe dla gejow: profil, rozmowa, bezpieczenstwo | GayPolska.pl",
    description: "Praktyczny hub poradnikow o randkach dla gejow: profil, pierwsza wiadomosc, prywatnosc, falszywe konta, pierwsze spotkanie i usuwanie danych.",
    h1: "Poradniki randkowe dla gejow",
    cluster: "Hub poradnikow",
    stage: "research",
    type: "hub",
    body: articleIntro("Poradniki randkowe dla gejow", "Tu zebrane sa teksty, ktore odpowiadaja na konkretne pytania: jak wybrac platforme, co wpisac w profilu, jak zaczac rozmowe i kiedy przerwac kontakt.") + popularArticles(true) + hubGrid()
  },
  {
    slug: "ranking-aplikacji-randkowych-dla-gejow",
    title: "Ranking aplikacji randkowych dla gejow: kryteria wyboru i alternatywy",
    description: "Ranking i porownanie aplikacji randkowych dla gejow bez fikcyjnych ocen: kryteria, prywatnosc, ograniczenia i wyrozniona oferta.",
    h1: "Ranking aplikacji randkowych dla gejow",
    cluster: "Aplikacje i platformy randkowe",
    stage: "decision",
    type: "ranking",
    body: article("Ranking aplikacji randkowych dla gejow", [
      ["Jak czytac ten ranking", "Traktuj ranking jako praktyczna rame decyzyjna, nie jako obietnice efektu. Nie przypisujemy platformom fikcyjnych ocen liczbowych, bo bez stalego, jawnego badania uzytkownikow takie liczby bylyby mylace."],
      ["Kryteria porownania", "Patrzymy na jasnosc rejestracji, mozliwosc ograniczania danych w profilu, przejrzystosc platnych funkcji, bezpieczenstwo pierwszego kontaktu, latwosc usuniecia konta i to, czy komunikaty marketingowe nie obiecuja zbyt wiele."],
      ["Wyrozniona oferta", "Dla osob gotowych sprawdzic platforme od razu pokazujemy przejscie do Erodate. Przed rejestracja sprawdz regulamin, prywatnosc, widocznosc profilu i ewentualne platne funkcje."],
      ["Alternatywy dla popularnych aplikacji", "Jesli znasz aplikacje takie jak Grindr lub Scruff, nie klikaj przyciskow z zalozeniem, ze trafisz do tych marek. Nasze CTA prowadzi do innej, wyroznionej oferty."]
    ], "ranking", true)
  },
  {
    slug: "bezpieczne-randki-online",
    title: "Bezpieczne randki online dla gejow: checklisty i czerwone flagi",
    description: "Jak bezpiecznie randkowac online: prywatnosc, pierwsze spotkanie, falszywe profile, pieniadze, zdjecia intymne i szybkie reakcje na naduzycia.",
    h1: "Bezpieczne randki online dla gejow",
    cluster: "Bezpieczenstwo i prywatnosc",
    stage: "research",
    type: "article",
    body: article("Bezpieczne randki online dla gejow", [
      ["Najkrotsza zasada", "Nie wysylaj danych, zdjec ani pieniedzy osobie, ktorej tozsamosci nie potrafisz spokojnie zweryfikowac. Tempo rozmowy powinno byc wygodne dla obu stron, bez presji i bez karania za odmowe."],
      ["Czerwone flagi", "Uwazaj na prosby o pieniadze, nagle historie kryzysowe, nacisk na przeniesienie rozmowy poza platforme, niechec do podstawowej weryfikacji oraz zbyt szybkie prosby o intymne materialy."],
      ["Pierwsze spotkanie", "Wybierz publiczne miejsce, miej wlasny transport, poinformuj zaufana osobe gdzie idziesz i umow sie na krotkie pierwsze spotkanie. Nie musisz tlumaczyc sie z wyjscia, jesli cos jest nie tak."],
      ["Gdy cos pojdzie zle", "Zrob zrzuty ekranu, nie plac szantazyscie, zablokuj kontakt i zglos konto w platformie. W przypadku realnych grózb rozwaz kontakt z policja lub prawnikiem."]
    ], "article_middle", true)
  },
  {
    slug: "dyskretne-randki-dla-gejow",
    title: "Dyskretne randki dla gejow: profil, zdjecia i prywatnosc",
    description: "Jak randkowac dyskretnie bez obiecywania anonimowosci: ustawienia profilu, zdjecia, komunikatory, lokalizacja i bezpieczna rejestracja.",
    h1: "Dyskretne randki dla gejow",
    cluster: "Dyskretne randki",
    stage: "consideration",
    type: "article",
    body: article("Dyskretne randki dla gejow", [
      ["Dyskrecja to ograniczanie ryzyka, nie magia", "Zadna platforma nie daje absolutnej anonimowosci w kazdej sytuacji. Mozesz jednak ograniczyc liczbe danych, ktore lacza profil z Twoja praca, rodzina lub stalym adresem."],
      ["Profil bez nadmiaru danych", "Nie podawaj pelnego imienia, miejsca pracy, dokladnej dzielnicy ani zdjec latwych do znalezienia w wyszukiwarce obrazow. Uzyj opisu, ktory mowi o intencjach, ale nie zdradza prywatnych szczegolow."],
      ["Zdjecia i komunikatory", "Zanim wyslesz zdjecie twarzy lub material intymny, zapytaj siebie, co stanie sie, gdy rozmowa zostanie udostepniona dalej. Do pierwszego kontaktu lepiej trzymac sie platformy, ktora pozwala blokowac i zglaszac konta."],
      ["Rejestracja", "Przed zalozeniem konta sprawdz, jakie dane sa wymagane, co widza inni i jak usunac konto. Jesli chcesz szybko porownac warunki, mozesz przejsc do wyroznionej oferty."]
    ], "article_middle", true)
  },
  {
    slug: "jak-rozpoznac-falszywy-profil",
    title: "Jak rozpoznac falszywy profil na aplikacji randkowej?",
    description: "Najczestsze oznaki falszywego profilu: zdjecia, presja, prosby o pieniadze, niespojne historie i bezpieczne kroki przed spotkaniem.",
    h1: "Jak rozpoznac falszywy profil?",
    cluster: "Problemy, oszustwa i szantaz",
    stage: "problem",
    type: "article",
    body: article("Jak rozpoznac falszywy profil?", [
      ["Szybka odpowiedz", "Falszywy profil najczesciej zdradza sie pospiechem, niespojnymi odpowiedziami, brakiem zwyklej weryfikacji i przenoszeniem rozmowy w miejsce, gdzie trudniej zglosic naduzycie."],
      ["Sprawdz zdjecia", "Uwazaj na zdjecia wygladajace jak katalogowe, bardzo niska liczbe szczegolow oraz odmowe wyslania neutralnej weryfikacji, na przyklad krotkiej wiadomosci glosowej bez danych wrazliwych."],
      ["Pieniadze i szantaz", "Prosba o przelew, doladowanie, inwestycje albo pomoc w naglym kryzysie to sygnal stop. Nie plac za obietnice spotkania i nie wysylaj materialow, ktore moga posluzyc do szantazu."],
      ["Co zrobic", "Zakoncz rozmowe, zachowaj dowody, zablokuj konto i zglos je w aplikacji. Jesli chcesz zaczac od nowa, wybierz platforme, na ktorej od poczatku ograniczysz dane w profilu."]
    ], "article_end", true)
  },
  {
    slug: "pierwsza-randka-z-mezczyzna",
    title: "Pierwsza randka z mezczyzna: miejsce, rozmowa i bezpieczenstwo",
    description: "Praktyczny poradnik przed pierwsza randka z mezczyzna: jak wybrac miejsce, ustalic oczekiwania, zadbac o komfort i unikac presji.",
    h1: "Pierwsza randka z mezczyzna",
    cluster: "Pierwsze spotkanie i relacje",
    stage: "consideration",
    type: "article",
    body: article("Pierwsza randka z mezczyzna", [
      ["Najpierw komfort", "Dobra pierwsza randka nie musi byc widowiskowa. Powinna byc wystarczajaco krotka, publiczna i latwa do zakonczenia, jesli nie ma chemii albo pojawia sie dyskomfort."],
      ["Ustal oczekiwania", "Przed spotkaniem warto nazwac podstawy: czy to kawa, spacer, rozmowa o relacji, czy luźne poznanie. Jasnosc zmniejsza napiecie i ogranicza nieporozumienia."],
      ["Bezpieczne miejsce", "Wybierz lokal, park w ciagu dnia albo inne miejsce z ludzmi. Nie podawaj od razu prywatnego adresu i zostaw sobie mozliwosc samodzielnego powrotu."],
      ["Po randce", "Jesli chcesz kontynuowac, napisz konkretnie. Jesli nie, krotka uprzejma odpowiedz jest lepsza niz znikniecie, o ile druga osoba nie przekracza granic."]
    ], "article_middle", false)
  },
  {
    slug: "jak-napisac-pierwsza-wiadomosc",
    title: "Jak napisac pierwsza wiadomosc do faceta na portalu randkowym",
    description: "Gotowe zasady i przyklady pierwszej wiadomosci: jak pisac konkretnie, naturalnie i bez nachalnych formul, zeby rozpoczac rozmowe.",
    h1: "Jak napisac pierwsza wiadomosc do faceta",
    cluster: "Profil, rozmowa i pierwsza wiadomosc",
    stage: "consideration",
    type: "article",
    body: article("Jak napisac pierwsza wiadomosc do faceta", [
      ["Dobra wiadomosc jest konkretna", "Najlepiej dziala krotka wiadomosc odnoszaca sie do profilu, miejsca albo wspolnego tematu. Samo 'hej' nie jest zbrodnia, ale zwykle nie daje drugiej osobie punktu zaczepienia."],
      ["Prosty schemat", "Napisz jedno zdanie nawiazania, jedno pytanie i zostaw przestrzen na odpowiedz. Unikaj przesluchania, przesadnych komplementow i kopiowania tej samej tresci do wszystkich."],
      ["Przyklady", "Mozesz napisac: 'Widze, ze lubisz spokojne kino. Masz ostatnio cos, co warto obejrzec?' albo 'Szukam rozmowy bez presji. Co zwykle sprawia, ze profil przyciaga Twoja uwage?'"],
      ["Kiedy odpuscic", "Brak odpowiedzi nie wymaga ponaglania. Jedna spokojna wiadomosc jest lepsza niz seria prob, ktore druga osoba odbierze jako nacisk."]
    ], "article_middle", true)
  },
  {
    slug: "randki-dla-gejow-po-40",
    title: "Randki dla gejow po 40: jak wybrac platforme i tempo relacji",
    description: "Randki dla gejow po 40 bez presji: profil, oczekiwania, bezpieczenstwo, dyskrecja i wybor platformy dopasowanej do stylu zycia.",
    h1: "Randki dla gejow po 40",
    cluster: "Randki wedlug wieku",
    stage: "consideration",
    type: "article",
    body: article("Randki dla gejow po 40", [
      ["Inne tempo jest normalne", "Po 40 wiele osob wie lepiej, czego nie chce: chaosu, ukrytych oczekiwan albo rozmow bez celu. To zaleta, jesli profil i pierwsze wiadomosci sa szczere."],
      ["Co wpisac w profilu", "Napisz, czy szukasz rozmowy, randek, relacji czy spokojnego poznawania. Unikaj listy zakazow; lepiej opisac styl zycia i granice."],
      ["Bezpieczenstwo i prywatnosc", "Jesli zalezy Ci na dyskrecji, ogranicz dane identyfikujace i sprawdz ustawienia widocznosci profilu. Zaufanie buduj stopniowo."],
      ["Wybor platformy", "Sprawdz, czy rejestracja jest zrozumiala, czy da sie usunac konto i czy komunikacja nie wymusza natychmiastowego ujawniania prywatnych danych."]
    ], "article_middle", true)
  },
  {
    slug: "szantaz-intymnymi-zdjeciami",
    title: "Szantaz intymnymi zdjeciami: co zrobic krok po kroku",
    description: "Co zrobic przy szantazu intymnymi zdjeciami: nie plac, zabezpiecz dowody, zglos konto, ogranicz kontakt i zadbaj o bezpieczenstwo.",
    h1: "Szantaz intymnymi zdjeciami",
    cluster: "Problemy, oszustwa i szantaz",
    stage: "problem",
    type: "article",
    body: article("Szantaz intymnymi zdjeciami", [
      ["Najwazniejsze: nie plac", "Platnosc rzadko konczy szantaz. Czesto pokazuje sprawcy, ze presja dziala. Zamiast negocjowac, zabezpiecz dowody i ogranicz dalszy kontakt."],
      ["Zabezpiecz dowody", "Zrob zrzuty ekranu profilu, rozmowy, linkow, numerow kont i nazw uzytkownika. Nie edytuj ich i zapisz kopie w bezpiecznym miejscu."],
      ["Zglos i zablokuj", "Zglos konto w aplikacji, zablokuj kontakt i sprawdz prywatnosc swoich profili spolecznosciowych. Jesli pojawiaja sie grozby, rozwaz kontakt z policja lub prawnikiem."],
      ["Jak zmniejszyc ryzyko na przyszlosc", "Nie wysylaj materialow z twarza, tatuazami, mieszkaniem lub innymi identyfikatorami. Zaufanie w randkach online powinno rosnac etapami."]
    ], "article_end", false)
  },
  {
    slug: "jak-usunac-dane-z-aplikacji-randkowej",
    title: "Jak usunac konto i dane z aplikacji randkowej",
    description: "Usuniecie konta randkowego a dezaktywacja: co sprawdzic w ustawieniach, jak zadac skasowania danych i co zapisac przed usunieciem.",
    h1: "Jak usunac konto i dane z aplikacji randkowej",
    cluster: "Usuwanie danych i kont",
    stage: "problem",
    type: "article",
    body: article("Jak usunac konto i dane z aplikacji randkowej", [
      ["Usuniecie aplikacji to za malo", "Samo skasowanie aplikacji z telefonu zwykle nie usuwa konta ani danych z serwisu. Trzeba znalezc ustawienia konta, dezaktywacje lub procedurę usuniecia danych."],
      ["Co sprawdzic przed usunieciem", "Zapisz potwierdzenia platnosci, anuluj subskrypcje, usun zdjecia, sprawdz polaczone logowania i pobierz dane, jesli platforma daje taka mozliwosc."],
      ["Prosba o usuniecie danych", "Jesli w panelu nie ma jasnej opcji, skontaktuj sie z administratorem platformy. W tresci podaj identyfikator konta i popros o potwierdzenie usuniecia."],
      ["Nowe konto ostrozniej", "Przy kolejnej rejestracji podawaj tylko dane potrzebne do korzystania z uslugi i sprawdz, czy regulamin jasno opisuje usuwanie konta."]
    ], "article_middle", false)
  },
  {
    slug: "o-serwisie",
    title: "O serwisie GayPolska.pl: zasady redakcyjne i 18+",
    description: "Informacje o GayPolska.pl: charakter serwisu, zasady redakcyjne, ograniczenia odpowiedzialnosci i wymagane dane wlasciciela.",
    h1: "O serwisie GayPolska.pl",
    cluster: "Dokumenty i zaufanie",
    stage: "trust",
    type: "about",
    body: article("O serwisie GayPolska.pl", [
      ["Czym jest serwis", "GayPolska.pl to serwis informacyjny dla pelnoletnich osob zainteresowanych randkami online, prywatnoscia i bezpieczenstwem. Nie jestesmy portalem randkowym i nie obslugujemy rejestracji uzytkownikow."],
      ["Model dzialania", "Czesc przyciskow prowadzi do zewnetrznych ofert. Uzytkownik nie ponosi dodatkowego kosztu za samo przejscie ze strony."],
      ["Dane do uzupelnienia", "Wlasciciel: [UZUPEŁNIJ DANE WŁAŚCICIELA]. Firma: [UZUPEŁNIJ DANE FIRMY]. Data ostatniej weryfikacji danych: [UZUPEŁNIJ DATĘ]."]
    ], "footer", false)
  },
  {
    slug: "metodologia-rankingu",
    title: "Metodologia rankingu aplikacji randkowych dla gejow",
    description: "Jawna metodologia rankingu GayPolska.pl: kryteria porownania, ograniczenia i zasady aktualizacji tresci.",
    h1: "Metodologia rankingu",
    cluster: "Aplikacje i platformy randkowe",
    stage: "trust",
    type: "article",
    body: article("Metodologia rankingu", [
      ["Czego ranking nie robi", "Ranking nie jest badaniem rynku i nie uzywa fikcyjnych ocen, gwiazdek ani deklaracji o liczbie profili. Nie obiecujemy wynikow randkowych."],
      ["Kryteria", "Uwzgledniamy przejrzystosc rejestracji, informacje o platnych funkcjach, mozliwosc ograniczenia widocznosci danych, latwosc usuniecia konta, jakosc informacji pomocniczych i dopasowanie do intencji uzytkownika."],
      ["Oznaczenia techniczne", "Wybrane linki zewnetrzne moga miec atrybuty nofollow sponsored oraz zdarzenia dataLayer do pomiaru klikniec."],
      ["Aktualizacje", "Data aktualizacji tresci: 2026-08-02. Dane wlasciciela i kontakt wymagaja recznego uzupelnienia przed publikacja."]
    ], "featured_offer", false)
  },
  {
    slug: "kontakt",
    title: "Kontakt z GayPolska.pl",
    description: "Kontakt redakcyjny GayPolska.pl, zgloszenia bledow i dane wymagajace uzupelnienia przed publikacja.",
    h1: "Kontakt",
    cluster: "Dokumenty i zaufanie",
    stage: "trust",
    type: "contact",
    body: article("Kontakt", [
      ["Kontakt redakcyjny", "Adres e-mail: [UZUPEŁNIJ ADRES E-MAIL]. Dane wlasciciela: [UZUPEŁNIJ DANE WŁAŚCICIELA]."],
      ["Co warto wyslac", "Przy zgloszeniu bledu podaj adres URL, opis problemu i zrzut ekranu, jesli pomaga zrozumiec sytuacje."],
      ["Pilne sprawy bezpieczenstwa", "Jesli doswiadczasz szantazu, grózb lub przemocy, skontaktuj sie z odpowiednimi sluzbami albo prawnikiem. Ten serwis nie zapewnia pomocy kryzysowej."]
    ], "footer", false)
  },
  {
    slug: "polityka-prywatnosci",
    title: "Polityka prywatnosci GayPolska.pl",
    description: "Polityka prywatnosci serwisu GayPolska.pl: podstawowe informacje o danych, cookies, linkach zewnetrznych i miejscach do uzupelnienia.",
    h1: "Polityka prywatnosci",
    cluster: "Dokumenty i zaufanie",
    stage: "trust",
    type: "legal",
    body: article("Polityka prywatnosci", [
      ["Administrator", "Administrator danych: [UZUPEŁNIJ DANE WŁAŚCICIELA]. Kontakt: [UZUPEŁNIJ ADRES E-MAIL]."],
      ["Zakres danych", "Statyczna strona moze przetwarzac podstawowe dane techniczne serwera oraz zdarzenia klikniec, jesli zostanie wdrozony system analityczny."],
      ["Cookies i analityka", "Nie dodano identyfikatora GA4 ani GTM. Po wdrozeniu narzedzi analitycznych nalezy uzupelnic informacje o cookies, podstawach prawnych i okresach przechowywania."],
      ["Linki zewnetrzne", "Klikniecie w link zewnetrzny przenosi do innego serwisu, ktory ma wlasne regulaminy i polityki prywatnosci."]
    ], "footer", false)
  },
  {
    slug: "regulamin",
    title: "Regulamin korzystania z GayPolska.pl",
    description: "Regulamin statycznego serwisu informacyjnego GayPolska.pl, zasady korzystania, 18+ i ograniczenia odpowiedzialnosci.",
    h1: "Regulamin",
    cluster: "Dokumenty i zaufanie",
    stage: "trust",
    type: "legal",
    body: article("Regulamin", [
      ["Charakter serwisu", "Serwis ma charakter informacyjny. Nie swiadczy uslug randkowych i nie odpowiada za dzialanie zewnetrznych platform."],
      ["Warunek wieku", "Tresci sa przeznaczone dla osob pelnoletnich. Korzystajac z serwisu potwierdzasz, ze masz co najmniej 18 lat."],
      ["Dane do uzupelnienia", "Wlasciciel: [UZUPEŁNIJ DANE WŁAŚCICIELA]. Firma: [UZUPEŁNIJ DANE FIRMY]. Data obowiazywania: [UZUPEŁNIJ DATĘ]."]
    ], "footer", false)
  },
  {
    slug: "informacja-reklamowa",
    title: "Informacja reklamowa GayPolska.pl",
    description: "Jak dzialaja linki zewnetrzne na GayPolska.pl: oznaczenia, brak dodatkowego kosztu i niezaleznosc tresci poradnikowych.",
    h1: "Informacja reklamowa",
    cluster: "Dokumenty i zaufanie",
    stage: "trust",
    type: "legal",
    body: article("Informacja reklamowa", [
      ["Jak dzialaja linki", "Czesc przyciskow prowadzi do zewnetrznych ofert. Samo przejscie ze strony nie oznacza dodatkowej oplaty dla uzytkownika."],
      ["Oznaczenia", "Wybrane linki zewnetrzne moga miec atrybuty rel nofollow sponsored oraz metadane pozwalajace mierzyc klikniecia w dataLayer."],
      ["Ograniczenia", "Nie gwarantujemy dostepnosci profili, skutecznosci rozmow ani rezultatu randkowego. Warunki uslugi sprawdzaj bezposrednio w serwisie docelowym."]
    ], "footer", false)
  }
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[m]);
}

function urlFor(slug) {
  return `${site}/${slug ? `${slug}/` : ""}`;
}

function cta(label, position) {
  return `<a class="btn outbound" href="${affiliate}" target="_blank" rel="nofollow sponsored noopener noreferrer" data-affiliate="radarkobiet" data-position="${position}" data-content-cluster="" data-funnel-stage="">${label}</a>`;
}

function hubGrid() {
  const hubs = [
    ["/ranking-aplikacji-randkowych-dla-gejow/", "Aplikacje i platformy", "Jak porownywac opcje bez fikcyjnych ocen i bez mylenia marek."],
    ["/erodate/", "Erodate", "Szybka sciezka dla osob gotowych sprawdzic rejestracje i warunki."],
    ["/erodate-dla-gejow/", "Erodate dla gejow", "Dedykowana strona dla uzytkownikow gotowych przejsc do rejestracji."],
    ["/gej-randki-online/", "Gej randki online", "Start dla osob, ktore szukaja platformy i chca szybko przejsc do rozmowy."],
    ["/portal-randkowy-dla-gejow/", "Portal randkowy dla gejow", "Kryteria wyboru portalu oraz naturalna sciezka do Erodate."],
    ["/alternatywa-dla-grindr/", "Alternatywa dla Grindr", "Inna sciezka niz aplikacje geolokalizacyjne, z szybkim przejsciem do Erodate."],
    ["/bezpieczne-randki-online/", "Bezpieczenstwo i prywatnosc", "Czerwone flagi, pierwsze spotkanie, pieniadze i prywatne zdjecia."],
    ["/jak-napisac-pierwsza-wiadomosc/", "Profil i rozmowa", "Pierwsza wiadomosc, naturalny opis i tempo kontaktu."],
    ["/randki-dla-gejow-po-40/", "Randki wedlug wieku", "Oczekiwania, dyskrecja i spokojniejsze tempo znajomosci."],
    ["/dyskretne-randki-dla-gejow/", "Dyskretne randki", "Ograniczanie danych, zdjec i informacji identyfikujacych."],
    ["/gdzie-poznac-geja/", "Gdzie poznac geja", "Online, lokalnie i w mniejszym miescie bez przypadkowego ujawniania danych."],
    ["/jak-poznac-geja-online/", "Jak poznac geja online", "Profil, pierwsza wiadomosc i bezpieczny start rozmowy."],
    ["/randki-dla-gejow-po-50/", "Randki po 50", "Spokojniejszy start, jasne oczekiwania i bezpieczna rejestracja."],
    ["/jak-usunac-dane-z-aplikacji-randkowej/", "Usuwanie kont i danych", "Dezaktywacja, subskrypcje, prosby o skasowanie danych."]
  ];
  return `<section class="section"><div class="wrap"><p class="eyebrow">Klastry tematyczne</p><h2>Znajdz poradnik wedlug sytuacji</h2><div class="grid">${hubs.map(([href, title, text]) => `<a class="card" href="${href}"><h3>${title}</h3><p>${text}</p></a>`).join("")}</div></div></section>`;
}

function conversionStrip(position) {
  return `<section class="conversion-strip"><div class="wrap conversion-grid"><div><p class="eyebrow">Szybka sciezka do rejestracji</p><h2>Chcesz od razu sprawdzic Erodate?</h2><p>Zobacz aktualne warunki w zewnetrznym serwisie i zdecyduj, czy rejestracja ma dla Ciebie sens.</p></div><div class="conversion-actions">${cta("Sprawdz Erodate", position)}<a class="text-link" href="/erodate-dla-gejow/">Najpierw przeczytaj, co sprawdzic</a></div></div></section>`;
}

function popularArticles(listOnly = false) {
  const html = `<div class="grid">${featuredArticles.map(([slug, cluster, h1, description]) => `<a class="card" href="/${slug}/"><span class="eyebrow">${cluster}</span><h3>${h1}</h3><p>${description}</p></a>`).join("")}</div>`;
  return listOnly ? `<section class="section"><div class="wrap">${html}</div></section>` : `<section class="section"><div class="wrap"><p class="eyebrow">Najpopularniejsze poradniki</p><h2>Najkrotsza droga od pytania do decyzji</h2>${html}</div></section>`;
}

function articleIntro(title, text) {
  return `<section class="article-head"><div class="wrap narrow"><p class="badge">18+ | aktualizacja: ${updated}</p><h1>${title}</h1><p class="lead">${text}</p><p class="byline">Opracowanie redakcyjne GayPolska.pl. Tresc ma charakter informacyjny i nie gwarantuje liczby profili, odpowiedzi ani rezultatu randkowego.</p></div></section>`;
}

function article(title, sections, ctaPosition, showCta) {
  return `${articleIntro(title, sections[0][1])}<section class="section"><div class="wrap article-layout"><article class="content">${sections.map(([h, p], i) => `${i ? "" : '<div class="summary"><strong>W skrocie</strong><ul><li>Sprawdzaj warunki i prywatnosc przed rejestracja.</li><li>Nie wysylaj danych ani pieniedzy pod presja.</li><li>CTA prowadzi do zewnetrznej oferty Erodate.</li></ul></div>'}<h2>${h}</h2><p>${p}</p>${showCta && i === 1 ? `<div class="inline-cta"><p>Gotowy sprawdzic Erodate i aktualne warunki rejestracji?</p>${cta("Sprawdz Erodate", ctaPosition)}</div>` : ""}`).join("")}${faqMini()}<div class="inline-cta end"><p>Chcesz porownac opcje z konkretnymi kryteriami przed rejestracja?</p><a class="btn secondary" href="/ranking-aplikacji-randkowych-dla-gejow/">Przejdz do rankingu</a>${showCta ? cta("Sprawdz Erodate", "article_end") : ""}</div></article><aside class="sidebar"><strong>Powiazane</strong>${relatedLinks().map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}${cta("Sprawdz Erodate", "sidebar")}</aside></div></section>`;
}

function faqMini() {
  return `<section class="faq small"><h2>FAQ</h2><details><summary>Czy warto zakladac konto od razu?</summary><p>Tak, jesli rozumiesz warunki platformy i chcesz samodzielnie sprawdzic funkcje. Jesli masz watpliwosci, zacznij od poradnikow.</p></details><details><summary>Czego nie podawac w pierwszej rozmowie?</summary><p>Adresu, miejsca pracy, danych finansowych, prywatnych zdjec pod presja i informacji, ktore latwo polaczyc z Twoja tozsamoscia.</p></details></section>`;
}

function faqBlock() {
  return `<section class="section faq"><div class="wrap narrow"><h2>Najczestsze pytania</h2>${homeFaq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></section>`;
}

function relatedLinks() {
  return [
    ["/erodate-dla-gejow/", "Erodate dla gejow"],
    ["/erodate/", "Sprawdz Erodate"],
    ["/gej-randki-online/", "Gej randki online"],
    ["/portal-randkowy-dla-gejow/", "Portal randkowy dla gejow"],
    ["/poradniki/", "Wszystkie poradniki"],
    ["/bezpieczne-randki-online/", "Bezpieczne randki online"],
    ["/dyskretne-randki-dla-gejow/", "Dyskretne randki"],
    ["/jak-rozpoznac-falszywy-profil/", "Falszywe profile"]
  ];
}

function breadcrumbs(page) {
  const items = [{ name: "Strona glowna", item: site + "/" }];
  if (page.slug) items.push({ name: page.h1, item: urlFor(page.slug) });
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><div class="wrap"><a href="/">Strona glowna</a>${page.slug ? `<span aria-hidden="true">/</span><span>${page.h1}</span>` : ""}</div></nav>`;
}

function jsonLd(page) {
  const data = [
    { "@context": "https://schema.org", "@type": "WebSite", name: "GayPolska.pl", url: site, inLanguage: "pl-PL" },
    { "@context": "https://schema.org", "@type": page.type === "about" ? "AboutPage" : page.type === "contact" ? "ContactPage" : page.type === "article" || page.type === "ranking" ? "Article" : "WebPage", headline: page.h1, name: page.h1, description: page.description, url: urlFor(page.slug), inLanguage: "pl-PL", dateModified: updated, datePublished: updated },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Strona glowna", item: site + "/" }, ...(page.slug ? [{ "@type": "ListItem", position: 2, name: page.h1, item: urlFor(page.slug) }] : [])] }
  ];
  if (page.faq) data.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) });
  return data.map((entry) => `<script type="application/ld+json">${JSON.stringify(entry)}</script>`).join("");
}

function layout(page) {
  const canonical = urlFor(page.slug);
  const body = page.body.replaceAll('data-content-cluster=""', `data-content-cluster="${esc(page.cluster)}"`).replaceAll('data-funnel-stage=""', `data-funnel-stage="${esc(page.stage)}"`);
  return `<!doctype html>
<html lang="pl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#10171f">
  <meta property="og:type" content="${page.type === "home" ? "website" : "article"}">
  <meta property="og:locale" content="pl_PL">
  <meta property="og:site_name" content="GayPolska.pl">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site}/assets/hero-dating-safety.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/manifest.webmanifest">
  <link rel="preload" href="/assets/hero-dating-safety.png" as="image" imagesrcset="/assets/hero-dating-safety.png" fetchpriority="high">
  <link rel="stylesheet" href="/assets/style.css?v=20260802b">
  ${jsonLd(page)}
</head>
<body data-page-slug="${page.slug || "home"}" data-content-cluster="${esc(page.cluster)}" data-funnel-stage="${esc(page.stage)}">
  <a class="skip" href="#main">Przejdz do tresci</a>
  <header class="site-header">
    <div class="wrap nav">
      <a class="logo" href="/" aria-label="GayPolska.pl - strona glowna">Gay<b>Polska</b>.pl</a>
      <button class="menu-btn" aria-expanded="false" aria-controls="navlinks">Menu</button>
      <nav id="navlinks" class="navlinks" aria-label="Glowna nawigacja">${nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}${cta("Załóż darmowe konto", "header")}</nav>
    </div>
  </header>
  ${breadcrumbs(page)}
  <main id="main">${body}</main>
  <div class="sticky-cta">${cta("Sprawdz dostepne profile", "mobile_sticky")}</div>
  <footer class="footer">
    <div class="wrap footer-grid">
      <div><strong>GayPolska.pl</strong><p>Serwis informacyjny dla osob 18+. Nie jestesmy portalem randkowym.</p></div>
      <div><strong>Serwis</strong><a href="/o-serwisie/">O serwisie</a><a href="/metodologia-rankingu/">Metodologia</a><a href="/kontakt/">Kontakt</a><a href="/poradniki/">Poradniki</a></div>
      <div><strong>Dokumenty</strong><a href="/polityka-prywatnosci/">Polityka prywatnosci</a><a href="/regulamin/">Regulamin</a><a href="/informacja-reklamowa/">Informacja reklamowa</a>${cta("Zobacz oferte", "footer")}</div>
    </div>
    <div class="wrap footnote">© 2026 GayPolska.pl. Tresci sa przeznaczone dla osob pelnoletnich. Warunki zewnetrznych uslug sprawdzaj w serwisie docelowym.</div>
  </footer>
  <script src="/assets/site.js?v=20260802b" defer></script>
</body>
</html>`;
}

for (const page of pages) {
  const dir = page.slug ? path.join(root, page.slug) : root;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), layout(page));
}

fs.writeFileSync(path.join(root, "404.html"), layout({
  slug: "404",
  title: "Nie znaleziono strony | GayPolska.pl",
  description: "Nie znaleziono strony. Wroc do poradnikow, rankingu aplikacji randkowych dla gejow albo informacji o bezpieczenstwie.",
  h1: "Nie znaleziono strony",
  cluster: "Techniczne",
  stage: "recovery",
  type: "webpage",
  body: articleIntro("Nie znaleziono strony", "Ten adres nie prowadzi do aktywnej podstrony. Najszybciej wrocisz do poradnikow albo rankingu.") + `<section class="section"><div class="wrap narrow"><a class="btn secondary" href="/poradniki/">Przejdz do poradnikow</a> ${cta("Sprawdz Erodate", "article_end")}</div></section>`
}));

fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${urlFor(p.slug)}</loc><lastmod>${updated}</lastmod></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
fs.writeFileSync(path.join(root, "manifest.webmanifest"), JSON.stringify({ name: "GayPolska.pl", short_name: "GayPolska", start_url: "/", display: "standalone", background_color: "#f6f7f9", theme_color: "#10171f", icons: [{ src: "/assets/favicon.svg", sizes: "any", type: "image/svg+xml" }] }, null, 2));
fs.writeFileSync(path.join(root, "docs/ga4-gtm-tracking.md"), `# GA4 i GTM\n\nNie dodano identyfikatora GA4 ani GTM.\n\nZdarzenie \`affiliate_click\` jest wysylane do \`window.dataLayer\` przy kliknieciu linku partnerskiego i zawiera: \`affiliate_click_position\`, \`outbound_url\`, \`page_path\`, \`page_title\`, \`article_slug\`, \`cta_text\`, \`device_context\`, \`content_cluster\`, \`funnel_stage\`.\n\nPo wdrozeniu GTM utworz trigger Custom Event: \`affiliate_click\`, a nastepnie mapuj zmienne dataLayer do GA4. Do polityki prywatnosci dopisz uzywane narzedzia, cookies, podstawe prawna i okres retencji.\n`);
fs.writeFileSync(path.join(root, "docs/final-audit-notes.md"), `# Notatki audytowe\n\n## Problemy poczatkowe\n- W katalogu repo brakowalo plikow strony poza .git; dostepny byl pojedynczy eksport HTML w Downloads.\n- Brak pelnej architektury portalu, sitemap, robots, manifestu, strony 404 i dokumentacji trackingu.\n- Istniejacy HTML mial podstawowe CTA, ale pozycje nie byly zgodne z pelna taksonomia briefu, a rel target blank nie zawieral pelnego zestawu noopener noreferrer.\n\n## Strategia slow kluczowych\n- Strona glowna: randki dla gejow, gej randki, gay dating Polska; etap decision.\n- Ranking: aplikacje dla gejow, strony randkowe dla gejow, alternatywa dla Grindr; etap decision.\n- Bezpieczenstwo: bezpieczne randki online, falszywy profil, szantaz intymnymi zdjeciami; etap problem/research.\n- Dyskrecja: dyskretne randki dla gejow, anonimowe randki dla gejow, aplikacja bez zdjecia; etap consideration.\n- Profil/rozmowa: jak napisac do faceta, pierwsza wiadomosc; etap consideration.\n- Wiek: randki dla gejow po 40; etap consideration.\n\n## CTA do testow A/B\n- Sprawdz wyrozniona opcje\n- Zobacz oferte\n- Zaloz darmowe konto\n- Przejdz do platformy\n- Sprawdz, jak dziala rejestracja\n\n## Do uzupelnienia przed publikacja\n- [UZUPEŁNIJ DANE WŁAŚCICIELA]\n- [UZUPEŁNIJ ADRES E-MAIL]\n- [UZUPEŁNIJ DATĘ]\n- [UZUPEŁNIJ DANE FIRMY]\n\n## Konfiguracja po wdrozeniu\n- Dodac realny GTM/GA4 dopiero po decyzji wlasciciela.\n- Skonfigurowac naglowki bezpieczenstwa na hostingu: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.\n- Ustawic prawdziwa obsluge 404 po stronie serwera/CDN.\n- Zweryfikowac finalny regulamin i polityke prywatnosci prawnie.\n`);
