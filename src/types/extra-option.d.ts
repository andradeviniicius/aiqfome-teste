type SingleOption = {
  name: string;
  items: { name: string; price?: string; promotion?: string }[];
};

type MultipleOptions = {
  name: string;
  price: string;
  promotion?: string;
};

type QuantitativeOptions = {
  name: string;
  price: string;
  promotion?: string;
};

export type ExtraOptionsProps = {
  title: string;
  subtitle: string;
  mandatory?: boolean;
  singleOption?: SingleOption;
  chooseQuantityType?: QuantitativeOptions[];
  multipleOptions?: MultipleOptions[];
  modelValue?: any;
};
