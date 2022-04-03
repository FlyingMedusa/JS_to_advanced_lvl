 // 3. Napisz kod, który za pomocą jednego ciągu (możesz skorzystać z programowania funkcyjnego i rozdzielić na funkcje) osiągnie następujący efekt:
 // Wyświetli pojedynczo każdą nazwę miasta, która ma parzystą liczbę znaków. Nazwy miast powinny być pisane wielkimi literami.

const onlyEvenLength = city => city.length % 2 === 0;
const upperCaseNames = city => city.toUpperCase();
const show = city => console.log(city);

const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

cities
    .filter(onlyEvenLength)
    .map(upperCaseNames)
    .forEach(show);