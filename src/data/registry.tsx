import { CategoryDef } from "@/types";
import { buttonDef } from "./generators/buttons";
import { cardDef } from "./generators/card";

export const REGISTRY: CategoryDef[] = [
  {
    category: "Elements",
    items: [
      buttonDef,
      cardDef
    ],
  },
];
