# Notatki audytowe

## Problemy poczatkowe
- W katalogu repo brakowalo plikow strony poza .git; dostepny byl pojedynczy eksport HTML w Downloads.
- Brak pelnej architektury portalu, sitemap, robots, manifestu, strony 404 i dokumentacji trackingu.
- Istniejacy HTML mial podstawowe CTA, ale pozycje nie byly zgodne z pelna taksonomia briefu, a rel target blank nie zawieral pelnego zestawu noopener noreferrer.

## Strategia slow kluczowych
- Strona glowna: randki dla gejow, gej randki, gay dating Polska; etap decision.
- Ranking: aplikacje dla gejow, strony randkowe dla gejow, alternatywa dla Grindr; etap decision.
- Bezpieczenstwo: bezpieczne randki online, falszywy profil, szantaz intymnymi zdjeciami; etap problem/research.
- Dyskrecja: dyskretne randki dla gejow, anonimowe randki dla gejow, aplikacja bez zdjecia; etap consideration.
- Profil/rozmowa: jak napisac do faceta, pierwsza wiadomosc; etap consideration.
- Wiek: randki dla gejow po 40; etap consideration.

## CTA do testow A/B
- Sprawdz wyrozniona opcje
- Zobacz oferte
- Zaloz darmowe konto
- Przejdz do platformy
- Sprawdz, jak dziala rejestracja

## Do uzupelnienia przed publikacja
- [UZUPEŁNIJ DANE WŁAŚCICIELA]
- [UZUPEŁNIJ ADRES E-MAIL]
- [UZUPEŁNIJ DATĘ]
- [UZUPEŁNIJ DANE FIRMY]

## Konfiguracja po wdrozeniu
- Dodac realny GTM/GA4 dopiero po decyzji wlasciciela.
- Skonfigurowac naglowki bezpieczenstwa na hostingu: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- Ustawic prawdziwa obsluge 404 po stronie serwera/CDN.
- Zweryfikowac finalny regulamin i polityke prywatnosci prawnie.
