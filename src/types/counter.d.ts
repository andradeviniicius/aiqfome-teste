export type CounterProps = {
  name?: string;
  isPromotion?: string | undefined;
  price?: string;
  size?: string;
  showTrashCanWhenCounterZero?: boolean;
  startCounterAt?: number;
  modelValue?: any;
  counter: number;
};
