import React from "react";
import { ComponentDef } from "@/types";

export const elevatedButtonDef: ComponentDef = {
  id: "elevated_button",
  name: "ElevatedButton",
  props: [
    { key: "text", label: "Label", type: "text", default: "Get Started" },
    { key: "bgColor", label: "Background", type: "color", default: "#1976D2" },
    { key: "textColor", label: "Text color", type: "color", default: "#FFFFFF" },
    { key: "borderRadius", label: "Border radius", type: "range", min: 0, max: 32, step: 1, default: 20 },
    { key: "disabled", label: "Disabled", type: "bool", default: false },
    { key: "fullWidth", label: "Full width", type: "bool", default: false },
    { key: "elevation", label: "Elevation", type: "range", min: 0, max: 16, step: 1, default: 4 },
  ],
  preview: (p) => {
    const s = {
      background: p.disabled ? "#BDBDBD" : p.bgColor,
      color: p.disabled ? "#9E9E9E" : p.textColor,
      border: "none",
      borderRadius: p.borderRadius + "px",
      padding: "13px 28px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: p.disabled ? "not-allowed" : "pointer",
      width: p.fullWidth ? "100%" : "auto",
      letterSpacing: "0.5px",
      boxShadow: p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`,
      fontFamily: "var(--font-geist-sans), sans-serif",
      minWidth: "100px",
      transition: "all 0.15s",
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
    border: "none",
    borderRadius: "${p.borderRadius}px",
    padding: "13px 28px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "${p.disabled ? "not-allowed" : "pointer"}",
    width: "${p.fullWidth ? "100%" : "auto"}",
    boxShadow: "${p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`}",
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
  border: none;
  border-radius: ${p.borderRadius}px;
  padding: 13px 28px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${p.disabled ? "not-allowed" : "pointer"};
  width: ${p.fullWidth ? "100%" : "auto"};
  box-shadow: ${p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`};
}
</style>`,
    flutter: (p) => `ElevatedButton(
  onPressed: ${p.disabled ? "null" : "() {}"},
  style: ElevatedButton.styleFrom(
    backgroundColor: Color(0xFF${p.bgColor.replace("#", "").toUpperCase()}),
    foregroundColor: Color(0xFF${p.textColor.replace("#", "").toUpperCase()}),
    elevation: ${p.elevation}.0,
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(${p.borderRadius}),
    ),${p.fullWidth ? "\n    minimumSize: const Size(double.infinity, 48)," : ""}
  ),
  child: const Text('${p.text}'),
)`,
    html: (p) => `<button class="btn" ${p.disabled ? "disabled" : ""}>${p.text}</button>

<style>
.btn {
  background: ${p.disabled ? "#BDBDBD" : p.bgColor};
  color: ${p.disabled ? "#9E9E9E" : p.textColor};
  border: none;
  border-radius: ${p.borderRadius}px;
  padding: 13px 28px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${p.disabled ? "not-allowed" : "pointer"};
  width: ${p.fullWidth ? "100%" : "auto"};
  box-shadow: ${p.disabled ? "none" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`};
}
</style>`,
  }
};
