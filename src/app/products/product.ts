//The "IProduct" interface is used to represent a product object.
//A collection of product objects can be found in the products.json file.
//This interface stores the values located within the json file.

export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
