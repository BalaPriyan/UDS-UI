import React from "react";
import { ComponentDef } from "@/types";

export const buttonDef: ComponentDef = {
  id: "button",
  name: "Button",
  props: [
    { key: "text", label: "Label", type: "text", default: "Get Started", category: "Content" },
    
    { key: "hasBackground", label: "Background Layer", type: "bool", default: true, category: "Architecture" },
    { key: "hasBorder", label: "Border Layer", type: "bool", default: false, category: "Architecture" },
    { key: "hasGlass", label: "Glass Layer", type: "bool", default: false, category: "Architecture" },
    { key: "hasShadow", label: "Shadow Layer", type: "bool", default: true, category: "Architecture" },
    
    { key: "bgColor", label: "Background Color", type: "color", default: "#1976D2", category: "Style", enabledIf: (p) => p.hasBackground || p.hasGlass },
    { key: "textColor", label: "Text Color", type: "color", default: "#FFFFFF", category: "Style" },
    { key: "elevation", label: "Elevation Intensity", type: "range", min: 0, max: 24, step: 1, default: 4, category: "Style", enabledIf: (p) => p.hasShadow },
    
    { key: "paddingX", label: "Horizontal Padding", type: "range", min: 0, max: 80, step: 1, default: 28, category: "Layout" },
    { key: "paddingY", label: "Vertical Padding", type: "range", min: 0, max: 80, step: 1, default: 14, category: "Layout" },
    { key: "borderRadius", label: "Border Radius", type: "range", min: 0, max: 64, step: 1, default: 20, category: "Layout" },
    { key: "fullWidth", label: "Full Width", type: "bool", default: false, category: "Layout" },
    
    { key: "borderWidth", label: "Border Width", type: "range", min: 0, max: 10, step: 0.5, default: 1.5, category: "Border", enabledIf: (p) => p.hasBorder },
    { key: "borderColor", label: "Border Color", type: "color", default: "#1976D2", category: "Border", enabledIf: (p) => p.hasBorder },
    
    { key: "blur", label: "Glass Blur", type: "range", min: 0, max: 40, step: 1, default: 10, category: "Glass", enabledIf: (p) => p.hasGlass },
    { key: "opacity", label: "Glass Opacity", type: "range", min: 0, max: 1, step: 0.05, default: 0.1, category: "Glass", enabledIf: (p) => p.hasGlass },
    
    { key: "fontSize", label: "Font Size", type: "range", min: 8, max: 64, step: 1, default: 14, category: "Typography" },
    { key: "fontWeight", label: "Font Weight", type: "select", options: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], default: "600", category: "Typography" },
    { key: "letterSpacing", label: "Letter Spacing", type: "range", min: -2, max: 10, step: 0.5, default: 0.5, category: "Typography" },
    { key: "uppercase", label: "Uppercase", type: "bool", default: false, category: "Typography" },
    
    { key: "disabled", label: "Disabled State", type: "bool", default: false, category: "State" },
  ],
  preview: (p) => {
    const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
    const glassBg = `${p.bgColor}${opacityHex}`;

    const dynamicStyles: React.CSSProperties = {
      color: p.disabled ? "rgba(158, 158, 158, 0.6)" : p.textColor,
      padding: `${p.paddingY}px ${p.paddingX}px`,
      borderRadius: p.borderRadius + "px",
      fontSize: p.fontSize + "px",
      fontWeight: p.fontWeight as any,
      letterSpacing: p.letterSpacing + "px",
      textTransform: p.uppercase ? "uppercase" : "none",
      background: !p.hasBackground ? "transparent" : p.hasGlass ? glassBg : p.bgColor,
      border: !p.hasBorder ? "none" : `${p.borderWidth}px solid ${p.hasGlass ? `rgba(255,255,255,${(p.opacity + 0.1).toFixed(2)})` : p.borderColor}`,
      boxShadow: (!p.hasShadow || p.disabled) ? "none" : p.hasGlass ? "0 8px 32px 0 rgba(0, 0, 0, 0.3)" : `0 ${p.elevation / 2}px ${p.elevation}px rgba(0,0,0,0.3)`,
      backdropFilter: p.hasGlass ? `blur(${p.blur}px)` : "none",
      WebkitBackdropFilter: p.hasGlass ? `blur(${p.blur}px)` : "none",
      cursor: p.disabled ? "not-allowed" : "pointer",
      width: p.fullWidth ? "100%" : "auto",
      opacity: p.disabled ? 0.6 : 1,
    };

    return (
      <div className="flex items-center justify-center h-full w-full p-10 rounded-xl">
        <button 
          style={dynamicStyles} 
          className="transition-all duration-200 ease-in-out active:scale-95 font-sans text-center"
          disabled={p.disabled}
        >
          {p.text}
        </button>
      </div>
    );
  },
  generators: {
    react: (p) => {
      const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
      const glassBg = `${p.bgColor}${opacityHex}`;
      
      const classes = [
        "transition-all duration-200 active:scale-95",
        p.fullWidth ? "w-full" : "w-auto",
        p.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:brightness-110",
        `text-[${p.textColor}]`,
        `px-[${p.paddingX}px]`,
        `py-[${p.paddingY}px]`,
        `rounded-[${p.borderRadius}px]`,
        `text-[${p.fontSize}px]`,
        `font-[${p.fontWeight}]`,
        `tracking-[${p.letterSpacing}px]`,
        p.uppercase ? "uppercase" : "normal-case",
        !p.hasBackground ? "bg-transparent" : p.hasGlass ? `bg-[${glassBg}] backdrop-blur-[${p.blur}px]` : `bg-[${p.bgColor}]`,
        p.hasBorder ? `border-[${p.borderWidth}px] border-[${p.hasGlass ? `rgba(255,255,255,0.2)` : p.borderColor}]` : "border-none",
        (p.hasShadow && !p.disabled) ? (p.hasGlass ? "shadow-xl" : `shadow-[0_${p.elevation / 2}px_${p.elevation}px_rgba(0,0,0,0.3)]`) : "shadow-none"
      ].filter(Boolean).join(" ");

      return `export function Button() {
  return (
    <button 
      className="${classes}"
      disabled={${p.disabled}}
    >
      ${p.text}
    </button>
  );
}`;
    },
    vue: (p) => {
      const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
      const glassBg = `${p.bgColor}${opacityHex}`;
      
      const classes = [
        "transition-all duration-200 active:scale-95",
        p.fullWidth ? "w-full" : "w-auto",
        p.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:brightness-110",
        `text-[${p.textColor}]`,
        `px-[${p.paddingX}px]`,
        `py-[${p.paddingY}px]`,
        `rounded-[${p.borderRadius}px]`,
        `text-[${p.fontSize}px]`,
        `font-[${p.fontWeight}]`,
        `tracking-[${p.letterSpacing}px]`,
        p.uppercase ? "uppercase" : "normal-case",
        !p.hasBackground ? "bg-transparent" : p.hasGlass ? `bg-[${glassBg}] backdrop-blur-[${p.blur}px]` : `bg-[${p.bgColor}]`,
        p.hasBorder ? `border-[${p.borderWidth}px] border-[${p.hasGlass ? `rgba(255,255,255,0.2)` : p.borderColor}]` : "border-none",
        (p.hasShadow && !p.disabled) ? (p.hasGlass ? "shadow-xl" : `shadow-[0_${p.elevation / 2}px_${p.elevation}px_rgba(0,0,0,0.3)]`) : "shadow-none"
      ].filter(Boolean).join(" ");

      return `<template>
  <button 
    class="${classes}"
    :disabled="${p.disabled}"
  >
    ${p.text}
  </button>
</template>`;
    },
    flutter: (p) => {
      const colorHex = p.bgColor.replace("#", "").toUpperCase();
      const textColorHex = p.textColor.replace("#", "").toUpperCase();
      const borderColorHex = p.borderColor.replace("#", "").toUpperCase();
      
      if (p.hasGlass) {
        const opacity = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        return `ClipRRect(
  borderRadius: BorderRadius.circular(${p.borderRadius}),
  child: BackdropFilter(
    filter: ImageFilter.blur(sigmaX: ${p.blur}, sigmaY: ${p.blur}),
    child: Container(
      width: ${p.fullWidth ? "double.infinity" : "null"},
      decoration: BoxDecoration(
        color: Color(0x${opacity}${colorHex}),
        borderRadius: BorderRadius.circular(${p.borderRadius}),
        ${p.hasBorder ? `border: Border.all(color: Colors.white.withOpacity(0.2), width: ${p.borderWidth}),` : ""}
        ${p.hasShadow ? "boxShadow: [BoxShadow(color: Colors.black26, blurRadius: 10, offset: Offset(0, 4))]," : ""}
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: ${p.disabled ? "null" : "() {}"},
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: ${p.paddingX}, vertical: ${p.paddingY}),
            child: Text(
              '${p.text}',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Color(0xFF${textColorHex}),
                fontSize: ${p.fontSize},
                fontWeight: FontWeight.w${p.fontWeight},
                letterSpacing: ${p.letterSpacing},
              ),
            ),
          ),
        ),
      ),
    ),
  ),
)`;
      }

      return `ElevatedButton(
  onPressed: ${p.disabled ? "null" : "() {}"},
  style: ElevatedButton.styleFrom(
    backgroundColor: ${p.hasBackground ? `Color(0xFF${colorHex})` : "Colors.transparent"},
    foregroundColor: Color(0xFF${textColorHex}),
    elevation: ${p.hasShadow ? p.elevation : 0}.0,
    padding: const EdgeInsets.symmetric(horizontal: ${p.paddingX}, vertical: ${p.paddingY}),
    textStyle: TextStyle(
      fontSize: ${p.fontSize},
      fontWeight: FontWeight.w${p.fontWeight},
      letterSpacing: ${p.letterSpacing},
    ),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(${p.borderRadius}),
      ${p.hasBorder ? `side: BorderSide(color: Color(0xFF${borderColorHex}), width: ${p.borderWidth}),` : ""}
    ),${p.fullWidth ? "\n    minimumSize: const Size(double.infinity, 48)," : ""}
  ),
  child: Text('${p.uppercase ? p.text.toUpperCase() : p.text}'),
)`;
    },
    html: (p) => {
      const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
      const glassBg = `${p.bgColor}${opacityHex}`;

      const classes = [
        "transition-all duration-200 active:scale-95 outline-none",
        p.fullWidth ? "w-full" : "w-auto",
        p.disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:brightness-110",
        `text-[${p.textColor}]`,
        `px-[${p.paddingX}px]`,
        `py-[${p.paddingY}px]`,
        `rounded-[${p.borderRadius}px]`,
        `text-[${p.fontSize}px]`,
        `font-[${p.fontWeight}]`,
        `tracking-[${p.letterSpacing}px]`,
        p.uppercase ? "uppercase" : "normal-case",
        !p.hasBackground ? "bg-transparent" : p.hasGlass ? `bg-[${glassBg}] backdrop-blur-[${p.blur}px]` : `bg-[${p.bgColor}]`,
        p.hasBorder ? `border-[${p.borderWidth}px] border-[${p.hasGlass ? `rgba(255,255,255,0.2)` : p.borderColor}]` : "border-none",
        (p.hasShadow && !p.disabled) ? (p.hasGlass ? "shadow-xl" : `shadow-[0_${p.elevation / 2}px_${p.elevation}px_rgba(0,0,0,0.3)]`) : "shadow-none"
      ].filter(Boolean).join(" ");

      return `<button class="${classes}" ${p.disabled ? "disabled" : ""}>
  ${p.text}
</button>`;
    },
  }
};
