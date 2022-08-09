# Czech weather - NextJS course

## Zadání
- projekt bude mít 2 stránky
    - home page
    - detail page

### Homepage
- homepage bude obsahovat list všech měst ze souboru `./data/cities.ts`
- každé vypsáné město bude obsahovat název, obrázek města a odkaz na detail page
- obrázek města bude využívat [`Image` komponenty](https://nextjs.org/docs/basic-features/image-optimization) z Next.JS
- odkazy na jednotlivé detail pages jsou definovány v každém objektu města jako property `slug`
- odkaz na detail page bude využívat [`Link` komponenty](https://nextjs.org/docs/api-reference/next/link) z Next.JS
- použij getStaticProps nebo getServerSideProps
    - rozhodni se, která z funkcí bude lepší pro homepage
    - při rozhodování mysli na to, že datový soubor `cities.ts` může být měněn pouze před builděním projektu

### Detail page
 - bude obsahovat jméno, obrázek a popis města a aktuální teplotu ve městě získanou z [API](#weather-api)
 - obrázek města bude využívat [`Image` komponenty](https://nextjs.org/docs/basic-features/image-optimization) z Next.JS
 - použít getStaticProps nebo getServerSideProps
    - rozhodni se, která z funkcí bude lepší pro homepage
    - při rozhodování mysli na to, že při navšívení stránky chceme vždy zobrazit aktuální teplotu v daném městě
    
## Cíle
- naučit se s funkcemi getStaticProps/getServerSideProps a pochopit správný způsob užití těchto funkcí
- naučit se s `<Image />` komponentou
- naučit se s `<Link />` komponentou

## Weather API
[documentation](https://openweathermap.org/current)

endpoint: https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME},cz&appid={API_KEY}

api key: `**********************`