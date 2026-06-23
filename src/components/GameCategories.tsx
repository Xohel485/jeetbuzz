import { LazyOnVisible } from "./LazyOnVisible";

export function GameCategories() {
  return (
    <LazyOnVisible
      load={() => import("./GameCategories.impl")}
      minHeight={420}
    />
  );
}