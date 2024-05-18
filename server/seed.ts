import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";
import _ from "lodash";

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("weCare");
    const productsCollection = db.collection("products");
    const categoriesCollection = db.collection("categories");

    const categoryNames = ["lunch", "dinner"];
    const categories = categoryNames.map((category) => ({ name: category }));

    await categoriesCollection.insertMany(categories);

    const imageUrls = [
      "https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg",
      "https://static.vecteezy.com/system/resources/thumbnails/025/348/077/small/professional-foodgraphy-instant-noodles-ai-generated-photo.jpg",
    ];

    const products = [];

    for (let i = 0; i < 10; i++) {
      const category = _.sample(categories); 
      const imageUrl = _.sample(imageUrls); 

      const newProduct = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: category,
        imageUrl: imageUrl, 
      };

      products.push(newProduct);
    }

    console.log("Inserting Products:", products); 
    await productsCollection.insertMany(products);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
