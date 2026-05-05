import React from "react";

export type Framework = "react" | "vue" | "flutter" | "html";

export type PropType = "text" | "textarea" | "color" | "range" | "number" | "bool" | "select";

export type PropDef = {
  key: string;
  label: string;
  type: PropType;
  default: any;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
};

export type CodeGenerators = {
  react: (props: any) => string;
  vue: (props: any) => string;
  flutter: (props: any) => string;
  html: (props: any) => string;
};

export type ComponentDef = {
  id: string;
  name: string;
  props: PropDef[];
  preview: (props: any) => React.ReactNode;
  generators: CodeGenerators;
};

export type CategoryDef = {
  category: string;
  items: ComponentDef[];
};
