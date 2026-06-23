import { LazyOnVisible } from "./LazyOnVisible";

export function PaymentMethods() {
  return (
    <LazyOnVisible
      load={() => import("./PaymentMethods.impl")}
      minHeight={360}
    />
  );
}