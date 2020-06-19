const BASE_URL = "https://swapi.dev/api/";

export const getAllPagesPlanets = async () => {
  try {
    const page1 = await fetch(`${BASE_URL}planets/?page=1`);
    const parsedPage1 = await page1.json();
    const page2 = await fetch(`${BASE_URL}planets/?page=2`);
    const parsedPage2 = await page2.json();
    const page3 = await fetch(`${BASE_URL}planets/?page=3`);
    const parsedPage3 = await page3.json();
    const page4 = await fetch(`${BASE_URL}planets/?page=4`);
    const parsedPage4 = await page4.json();
    const page5 = await fetch(`${BASE_URL}planets/?page=5`);
    const parsedPage5 = await page5.json();
    const page6 = await fetch(`${BASE_URL}planets/?page=6`);
    const parsedPage6 = await page6.json();
    const allPagesPlanets = [
      parsedPage1,
      parsedPage2,
      parsedPage3,
      parsedPage4,
      parsedPage5,
      parsedPage6,
    ];
    const allPagesResults = allPagesPlanets.reduce((acc, curr) => {
      return [...acc, ...curr.results];
    }, []);
    return allPagesResults;
  } catch (e) {
    console.log(e);
  }
};
