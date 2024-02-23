export type QuantitativeItem = {
  name: string;
  quantity: number;
  price: string;
};
export type Item = {
  name: string;
  price: string;
};

export type FormData = {
  productSize: Item;
  selectedDrinks: QuantitativeItem[];
  extraSilverware: Item;
  extraItems: Item[];
};

