## PR maken op je eigen branch als je gecloned hebt

- [x] Maak een backup van je project -> duplicate mapje
- [x] op github een remote maken -> Github -> new
- [x] je remote toevoegen `git remote add mine git@github.com:Reinoptland/poke-api-example.git`
- [x] We gaan branch maken met al onze veranderingen: `git checkout -b feature-i-am-done`
- [x] Push je branch met veranderingen naar github: `git push mine feature-i-am-done`
- [x] Master branch terugdraaien naar het begin
  - [x] git checkout master (of main)
  - [x] git log
  - [x] zoek de laatste commit van Nova en kopieer de "hash"
    - Zoiets: a80c162fd5f91bba509d4c2bf0df6b4fe0645369
  - [x] git reset --hard a80c162fd5f91bba509d4c2bf0df6b4fe0645369
  - [x] git push --force mine master (of main)
  - [x] maak een pullrequest op github
