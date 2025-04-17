const categoriesList = document.querySelector(".categories-list");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const subItems = item.querySelectorAll("ul li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${subItems.length}`);
});
