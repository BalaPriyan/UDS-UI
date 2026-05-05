import React from "react";
import { ComponentDef } from "@/types";

export const elevatedButtonDef: ComponentDef = {
  id: "elevated_button",
  name: "ElevatedButton",
  props: [
    { key: "text", label: "Label", type: "text", default: "Get Started", category: "Content" },
    
    { key: "bgColor", label: "Background", type: "color", default: "#1976D2", category: "Style" },
    { key: "textColor", label: "Text color", type: "color", default: "#FFFFFF", category: "Style" },
    { key: "elevation", label: "Elevation", type: "range", min: 0, max: 16, step: 1, default: 4, category: "Style" },
    
    { key: "paddingX", label: "Horizontal Padding", type: "range", min: 0, max: 64, step: 1, default: 28, category: "Layout" },
    { key: "paddingY", label: "Vertical Padding", type: "range", min: 0, max: 64, step: 1, default: 13, category: "Layout" },
    { key: "borderRadius", label: "Border radius", type: "range", min: 0, max: 32, step: 1, default: 20, category: "Layout" },
    { key: "fullWidth", label: "Full width", type: "bool", default: false, category: "Layout" },
    
    { key: "fontSize", label: "Font Size", type: "range", min: 8, max: 48, step: 1, default: 14, category: "Typography" },
    { key: "fontWeight", label: "Font Weight", type: "select", options: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], default: "500", category: "Typography" },
    { key: "letterSpacing", label: "Letter Spacing", type: "range", min: -2, max: 10, step: 0.5, default: 0.5, category: "Typography" },
    
    { key: "borderWidth", label: "Border Width", type: "range", min: 0, max: 10, step: 0.5, default: 0, category: "Border" },
    { key: "borderColor", label: "Border Color", type: "color", default: "#000000", category: "Border" },
    
    { key: "disabled", label: "Disabled", type: "bool", default: false, category: "State" },
  ],
  preview: (p) => {
    const s = {
      background: p.disabled ? "#BDBDBD" : p.bgColor,
      color: p.disabled ? "#9E9E9E" : p.textColor,
      border: p.borderWidth > 0 ? `${p.borderWidth}px solid ${p.borderColor}` : "none",
      borderRadius: p.borderRadius + "px",
      padding: `${p.paddingY}px ${p.paddingX}px`,
      fontSize: p.fontSize + "px",
      fontWeight: p.fontWeight,
      cursor: p.disabled ? "not-allowed" : "pointer",
      width: p.fullWidth ? "100%" : "auto",
      letterSpacing: p.letterSpacing + "px",
      boxShadow: p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`,
      fontFamily: "var(--font-geist-sans), sans-serif",
      minWidth: "100px",
      transition: "all 0.15s",
      textAlign: "center" as const,
    };
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 20px" }}>
        <button style={s} disabled={p.disabled}>{p.text}</button>
      </div>
    );
  },
  generators: {
    react: (p) => `export function Button() {
  const styles = {
    background: "${p.disabled ? "#BDBDBD" : p.bgColor}",
    color: "${p.disabled ? "#9E9E9E" : p.textColor}",
    border: "${p.borderWidth > 0 ? `${p.borderWidth}px solid ${p.borderColor}` : "none"}",
    borderRadius: "${p.borderRadius}px",
    padding: "${p.paddingY}px ${p.paddingX}px",
    fontSize: "${p.fontSize}px",
    fontWeight: "${p.fontWeight}",
    cursor: "${p.disabled ? "not-allowed" : "pointer"}",
    width: "${p.fullWidth ? "100%" : "auto"}",
    letterSpacing: "${p.letterSpacing}px",
    boxShadow: "${p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`}",
    transition: "all 0.15s",
  };

  return (
    <button style={styles} disabled={${p.disabled}}>
      ${p.text}
    </button>
  );
}`,
    vue: (p) => `<template>
  <button class="custom-btn" :disabled="${p.disabled}">
    ${p.text}
  </button>
</template>

<style scoped>
.custom-btn {
  background: ${p.disabled ? "#BDBDBD" : p.bgColor};
  color: ${p.disabled ? "#9E9E9E" : p.textColor};
  border: ${p.borderWidth > 0 ? `${p.borderWidth}px solid ${p.borderColor}` : "none"};
  border-radius: ${p.borderRadius}px;
  padding: ${p.paddingY}px ${p.paddingX}px;
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  cursor: ${p.disabled ? "not-allowed" : "pointer"};
  width: ${p.fullWidth ? "100%" : "auto"};
  letter-spacing: ${p.letterSpacing}px;
  box-shadow: ${p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`};
  transition: all 0.15s;
}
</style>`,
    flutter: (p) => `ElevatedButton(
  onPressed: ${p.disabled ? "null" : "() {}"},
  style: ElevatedButton.styleFrom(
    backgroundColor: Color(0xFF${p.bgColor.replace("#", "").toUpperCase()}),
    foregroundColor: Color(0xFF${p.textColor.replace("#", "").toUpperCase()}),
    elevation: ${p.elevation}.0,
    padding: const EdgeInsets.symmetric(
      horizontal: ${p.paddingX},
      vertical: ${p.paddingY},
    ),
    textStyle: const TextStyle(
      fontSize: ${p.fontSize},
      fontWeight: FontWeight.w${p.fontWeight},
      letterSpacing: ${p.letterSpacing},
    ),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(${p.borderRadius}),
      ${p.borderWidth > 0 ? `side: BorderSide(color: Color(0xFF${p.borderColor.replace("#", "").toUpperCase()}), width: ${p.borderWidth}),` : ""}
    ),${p.fullWidth ? "\n    minimumSize: const Size(double.infinity, 48)," : ""}
  ),
  child: const Text('${p.text}'),
)`,
    html: (p) => `<button class="btn" ${p.disabled ? "disabled" : ""}>${p.text}</button>

<style>
.btn {
  background: ${p.disabled ? "#BDBDBD" : p.bgColor};
  color: ${p.disabled ? "#9E9E9E" : p.textColor};
  border: ${p.borderWidth > 0 ? `${p.borderWidth}px solid ${p.borderColor}` : "none"};
  border-radius: ${p.borderRadius}px;
  padding: ${p.paddingY}px ${p.paddingX}px;
  font-size: ${p.fontSize}px;
  font-weight: ${p.fontWeight};
  cursor: ${p.disabled ? "not-allowed" : "pointer"};
  width: ${p.fullWidth ? "100%" : "auto"};
  letter-spacing: ${p.letterSpacing}px;
  box-shadow: ${p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`};
  transition: all 0.15s;
  font-family: sans-serif;
}
</style>`,
  }
};
