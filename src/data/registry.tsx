import { CategoryDef } from "@/types";
import { buttonDef } from "./generators/buttons";

export const REGISTRY: CategoryDef[] = [
  {
    category: "Elements",
    items: [
      buttonDef,
    ],
  },
];
