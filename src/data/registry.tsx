import { CategoryDef } from "@/types";
import { elevatedButtonDef } from "./generators/buttons";

export const REGISTRY: CategoryDef[] = [
  {
    category: "Buttons",
    items: [
      elevatedButtonDef,
      // We can easily add outinedButtonDef, textButtonDef, etc. here in the future
    ],
  },
];
