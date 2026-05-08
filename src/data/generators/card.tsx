import React from "react";
import { ComponentDef } from "@/types";

export const cardDef: ComponentDef = {
  id: "card",
  name: "Card",
  props: [
    // --------------- Content ---------------
    { key: "title", label: "Title", type: "text", default: "Elevate Your Experience", category: "Content" },
    { key: "description", label: "Description", type: "text", default: "Beautifully crafted card with total control.", category: "Content" },
    { key: "overline", label: "Overline", type: "text", default: "", category: "Content" },
    { key: "image", label: "Image URL", type: "text", default: "", category: "Content" },
    { key: "imagePosition", label: "Image Position", type: "select", options: ["top", "left", "background", "none"], default: "top", category: "Content" },
    { key: "imageHeight", label: "Image Height (top)", type: "range", min: 80, max: 400, step: 5, default: 200, category: "Content", enabledIf: (p) => p.image && p.imagePosition === "top" },
    { key: "imageWidth", label: "Image Width (left)", type: "range", min: 80, max: 400, step: 5, default: 160, category: "Content", enabledIf: (p) => p.image && p.imagePosition === "left" },
    { key: "imageFit", label: "Image Fit", type: "select", options: ["cover", "contain", "fill"], default: "cover", category: "Content", enabledIf: (p) => p.image && p.imagePosition !== "none" && p.imagePosition !== "background" },
    { key: "bgImageOverlay", label: "Background Overlay Opacity", type: "range", min: 0, max: 1, step: 0.05, default: 0.4, category: "Content", enabledIf: (p) => p.image && p.imagePosition === "background" },

    // --------------- Architecture ---------------
    { key: "hasBackground", label: "Background Layer", type: "bool", default: true, category: "Architecture" },
    { key: "hasBorder", label: "Border Layer", type: "bool", default: false, category: "Architecture" },
    { key: "hasGlass", label: "Glass Layer", type: "bool", default: false, category: "Architecture" },
    { key: "hasShadow", label: "Shadow Layer", type: "bool", default: true, category: "Architecture" },
    { key: "hasGradient", label: "Gradient Background", type: "bool", default: false, category: "Architecture" },

    // --------------- Style ---------------
    { key: "bgColor", label: "Background Color", type: "color", default: "#FFFFFF", category: "Style", enabledIf: (p) => p.hasBackground || p.hasGlass },
    { key: "textColor", label: "Text Color", type: "color", default: "#111111", category: "Style" },
    { key: "elevation", label: "Elevation Intensity", type: "range", min: 0, max: 24, step: 1, default: 6, category: "Style", enabledIf: (p) => p.hasShadow },
    { key: "shadowColor", label: "Shadow Color", type: "color", default: "#000000", category: "Style", enabledIf: (p) => p.hasShadow },
    { key: "shadowBlur", label: "Shadow Blur", type: "range", min: 0, max: 60, step: 1, default: 20, category: "Style", enabledIf: (p) => p.hasShadow },
    { key: "shadowSpread", label: "Shadow Spread", type: "range", min: -10, max: 20, step: 1, default: 0, category: "Style", enabledIf: (p) => p.hasShadow },
    { key: "gradientStart", label: "Gradient Start", type: "color", default: "#667eea", category: "Style", enabledIf: (p) => p.hasGradient },
    { key: "gradientEnd", label: "Gradient End", type: "color", default: "#764ba2", category: "Style", enabledIf: (p) => p.hasGradient },
    { key: "gradientAngle", label: "Gradient Angle", type: "range", min: 0, max: 360, step: 1, default: 135, category: "Style", enabledIf: (p) => p.hasGradient },

    // --------------- Layout ---------------
    { key: "paddingX", label: "Horizontal Padding", type: "range", min: 0, max: 80, step: 4, default: 28, category: "Layout" },
    { key: "paddingY", label: "Vertical Padding", type: "range", min: 0, max: 80, step: 4, default: 24, category: "Layout" },
    { key: "borderRadius", label: "Border Radius", type: "range", min: 0, max: 64, step: 1, default: 20, category: "Layout" },
    { key: "fullWidth", label: "Full Width", type: "bool", default: false, category: "Layout" },
    { key: "maxWidth", label: "Max Width", type: "range", min: 100, max: 1200, step: 10, default: 400, category: "Layout" },
    { key: "contentAlign", label: "Content Align", type: "select", options: ["left", "center", "right"], default: "left", category: "Layout" },
    { key: "titleDescGap", label: "Title-Description Gap", type: "range", min: 0, max: 40, step: 2, default: 8, category: "Layout" },

    // --------------- Border ---------------
    { key: "borderWidth", label: "Border Width", type: "range", min: 0, max: 10, step: 0.5, default: 1.5, category: "Border", enabledIf: (p) => p.hasBorder },
    { key: "borderColor", label: "Border Color", type: "color", default: "#E0E0E0", category: "Border", enabledIf: (p) => p.hasBorder },
    { key: "borderStyle", label: "Border Style", type: "select", options: ["solid", "dashed", "dotted"], default: "solid", category: "Border", enabledIf: (p) => p.hasBorder },

    // --------------- Glass ---------------
    { key: "blur", label: "Glass Blur", type: "range", min: 0, max: 40, step: 1, default: 10, category: "Glass", enabledIf: (p) => p.hasGlass },
    { key: "opacity", label: "Glass Opacity", type: "range", min: 0, max: 1, step: 0.05, default: 0.15, category: "Glass", enabledIf: (p) => p.hasGlass },

    // --------------- Typography ---------------
    { key: "titleFontSize", label: "Title Size", type: "range", min: 8, max: 64, step: 1, default: 20, category: "Typography" },
    { key: "descFontSize", label: "Description Size", type: "range", min: 8, max: 64, step: 1, default: 14, category: "Typography" },
    { key: "fontWeight", label: "Font Weight", type: "select", options: ["100","200","300","400","500","600","700","800","900"], default: "500", category: "Typography" },
    { key: "overlineFontSize", label: "Overline Size", type: "range", min: 8, max: 40, step: 1, default: 12, category: "Typography", enabledIf: (p) => !!p.overline },
    { key: "overlineColor", label: "Overline Color", type: "color", default: "#1976D2", category: "Typography", enabledIf: (p) => !!p.overline },

    // --------------- Actions ---------------
    { key: "showPrimary", label: "Show Primary Button", type: "bool", default: false, category: "Actions" },
    { key: "primaryLabel", label: "Primary Button Text", type: "text", default: "Action", category: "Actions", enabledIf: (p) => p.showPrimary },
    { key: "showSecondary", label: "Show Secondary Button", type: "bool", default: false, category: "Actions" },
    { key: "secondaryLabel", label: "Secondary Button Text", type: "text", default: "Learn More", category: "Actions", enabledIf: (p) => p.showSecondary },
    { key: "footerText", label: "Footer Text", type: "text", default: "", category: "Actions" },

    // --------------- Decorations ---------------
    { key: "badgeText", label: "Badge Text", type: "text", default: "", category: "Decorations" },
    { key: "badgeBgColor", label: "Badge Background", type: "color", default: "#FF5722", category: "Decorations", enabledIf: (p) => !!p.badgeText },
    { key: "badgePosition", label: "Badge Position", type: "select", options: ["top-left", "top-right"], default: "top-right", category: "Decorations", enabledIf: (p) => !!p.badgeText },
    { key: "icon", label: "Icon (emoji/text)", type: "text", default: "", category: "Decorations" },

    // --------------- Hover ---------------
    { key: "hoverEffect", label: "Hover Effect", type: "select", options: ["none", "lift", "glow"], default: "none", category: "Hover" },
    { key: "hoverIntensity", label: "Hover Intensity", type: "range", min: 1, max: 20, step: 0.5, default: 5, category: "Hover", enabledIf: (p) => p.hoverEffect !== "none" },

    // --------------- State ---------------
    { key: "disabled", label: "Disabled State", type: "bool", default: false, category: "State" },
  ],

  // ------------- Preview -------------
  preview: (p) => {
    const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
    const glassBg = `${p.bgColor}${opacityHex}`;
    const shadowColor = p.shadowColor || "#000000";
    const hasImg = p.image && p.imagePosition !== "none";
    const isBgImg = p.imagePosition === "background" && p.image;
    const isLeftImg = p.imagePosition === "left" && p.image;
    const isTopImg = p.imagePosition === "top" && p.image;

    // Build background value
    let backgroundValue = "transparent";
    if (p.hasGradient) {
      backgroundValue = `linear-gradient(${p.gradientAngle}deg, ${p.gradientStart}, ${p.gradientEnd})`;
    } else if (p.hasBackground || p.hasGlass) {
      backgroundValue = p.hasGlass ? glassBg : p.bgColor;
    }
    if (isBgImg) {
      // Overlay above image, background image behind
      const overlayAlpha = p.bgImageOverlay;
      backgroundValue = `linear-gradient(rgba(0,0,0,${overlayAlpha}), rgba(0,0,0,${overlayAlpha})), url(${p.image}) center/cover no-repeat`;
    }

    const borderString = p.hasBorder
      ? `${p.borderWidth}px ${p.borderStyle} ${p.hasGlass ? `rgba(255,255,255,${(p.opacity + 0.2).toFixed(2)})` : p.borderColor}`
      : "none";

    const boxShadow = (!p.hasShadow || p.disabled)
      ? "none"
      : `${p.shadowBlur / 2}px ${p.shadowBlur}px ${p.shadowBlur * 2}px ${p.shadowSpread}px ${shadowColor}${p.hasGlass ? "33" : "1A"}`; // slightly more transparent for glass

    const hoverTransform = p.hoverEffect === "lift" && !p.disabled
      ? `translateY(-${p.hoverIntensity}px)`
      : "none";
    const hoverShadow = p.hoverEffect === "glow" && !p.disabled
      ? `0 ${p.hoverIntensity * 2}px ${p.hoverIntensity * 4}px ${shadowColor}40`
      : boxShadow;

    const cardDynamicStyles: React.CSSProperties = {
      background: backgroundValue,
      border: borderString,
      boxShadow: boxShadow,
      backdropFilter: p.hasGlass ? `blur(${p.blur}px)` : "none",
      WebkitBackdropFilter: p.hasGlass ? `blur(${p.blur}px)` : "none",
      borderRadius: p.borderRadius + "px",
      padding: `${p.paddingY}px ${p.paddingX}px`,
      width: p.fullWidth ? "100%" : "auto",
      maxWidth: p.maxWidth + "px",
      opacity: p.disabled ? 0.5 : 1,
      transition: "all 0.3s ease",
      transform: hoverTransform,
      textAlign: p.contentAlign as any,
      display: isLeftImg ? "flex" : "block",
      flexDirection: isLeftImg ? "row" : undefined,
      gap: isLeftImg ? "20px" : undefined,
      overflow: "hidden",
      position: "relative",
    };

    const imageStyles: React.CSSProperties = {
      width: isLeftImg ? p.imageWidth + "px" : "100%",
      height: isTopImg ? p.imageHeight + "px" : isLeftImg ? "auto" : "auto",
      objectFit: p.imageFit as any,
      borderRadius: isTopImg ? `${p.borderRadius}px ${p.borderRadius}px 0 0` : isLeftImg ? `${p.borderRadius}px 0 0 ${p.borderRadius}px` : "0",
      marginBottom: isTopImg ? "16px" : "0",
    };

    return (
      <div className="flex items-center justify-center h-full w-full p-8 rounded-xl">
        <div style={cardDynamicStyles}>
          {/* Badge */}
          {p.badgeText && (
            <span
              style={{
                position: "absolute",
                top: 8,
                [p.badgePosition === "top-left" ? "left" : "right"]: 8,
                background: p.badgeBgColor,
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                padding: "2px 8px",
                borderRadius: 12,
                letterSpacing: "0.5px",
                zIndex: 2,
              }}
            >
              {p.badgeText}
            </span>
          )}

          {/* Image (top or left) */}
          {!isBgImg && hasImg && (
            <img
              src={p.image}
              alt="card"
              style={imageStyles}
            />
          )}

          <div style={{ flex: 1 }}>
            {/* Icon + Overline */}
            {p.icon && <span style={{ fontSize: 24, marginRight: 8 }}>{p.icon}</span>}
            {p.overline && (
              <div
                style={{
                  color: p.disabled ? "#9E9E9E" : p.overlineColor,
                  fontSize: p.overlineFontSize + "px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                {p.overline}
              </div>
            )}

            {/* Title */}
            <h3
              style={{
                color: p.disabled ? "#9E9E9E" : p.textColor,
                fontSize: p.titleFontSize + "px",
                fontWeight: p.fontWeight as any,
                marginBottom: p.titleDescGap + "px",
                lineHeight: 1.3,
              }}
            >
              {p.icon && <span style={{ marginRight: 8 }}>{p.icon}</span>}
              {p.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: p.disabled ? "#9E9E9E" : p.textColor,
                fontSize: p.descFontSize + "px",
                fontWeight: 400,
                opacity: 0.75,
                lineHeight: 1.6,
                marginBottom: p.showPrimary || p.showSecondary || p.footerText ? 16 : 0,
              }}
            >
              {p.description}
            </p>

            {/* Action Buttons */}
            {(p.showPrimary || p.showSecondary) && (
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: p.contentAlign === "center" ? "center" : p.contentAlign === "right" ? "flex-end" : "flex-start",
                  flexWrap: "wrap",
                }}
              >
                {p.showPrimary && (
                  <button
                    style={{
                      padding: "8px 20px",
                      borderRadius: 8,
                      background: p.bgColor === "#FFFFFF" ? "#1976D2" : p.textColor,
                      color: p.bgColor === "#FFFFFF" ? "#FFFFFF" : p.bgColor,
                      border: "none",
                      fontWeight: 600,
                      cursor: p.disabled ? "not-allowed" : "pointer",
                      opacity: p.disabled ? 0.5 : 1,
                    }}
                    disabled={p.disabled}
                  >
                    {p.primaryLabel}
                  </button>
                )}
                {p.showSecondary && (
                  <button
                    style={{
                      padding: "8px 20px",
                      borderRadius: 8,
                      background: "transparent",
                      color: p.textColor,
                      border: `1px solid ${p.textColor}`,
                      fontWeight: 600,
                      cursor: p.disabled ? "not-allowed" : "pointer",
                      opacity: p.disabled ? 0.5 : 1,
                    }}
                    disabled={p.disabled}
                  >
                    {p.secondaryLabel}
                  </button>
                )}
              </div>
            )}

            {/* Footer text */}
            {p.footerText && (
              <div
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: p.disabled ? "#9E9E9E" : p.textColor,
                  opacity: 0.6,
                }}
              >
                {p.footerText}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },

  // ------------- Generators (React, Vue, Flutter, HTML) -------------
  generators: {
    react: (p) => {
      const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
      const glassBg = `${p.bgColor}${opacityHex}`;
      const shadowColor = p.shadowColor || "#000000";
      const isBgImg = p.imagePosition === "background" && p.image;
      const isLeftImg = p.imagePosition === "left" && p.image;
      const isTopImg = p.imagePosition === "top" && p.image;

      const bgClass = p.hasGradient
        ? `bg-gradient-to-br from-[${p.gradientStart}] to-[${p.gradientEnd}]`
        : p.hasBackground || p.hasGlass
        ? `bg-[${p.hasGlass ? glassBg : p.bgColor}]`
        : "bg-transparent";

      const shadowClass =
        p.hasShadow && !p.disabled
          ? `shadow-[${p.shadowBlur / 2}px_${p.shadowBlur}px_${p.shadowBlur * 2}px_${p.shadowSpread}px_${shadowColor}19]`
          : "shadow-none";

      const hoverEffectClass =
        p.hoverEffect === "lift"
          ? `hover:-translate-y-[${p.hoverIntensity}px]`
          : p.hoverEffect === "glow"
          ? `hover:shadow-[0_${p.hoverIntensity * 2}px_${p.hoverIntensity * 4}px_${shadowColor}40]`
          : "";

      return `export function Card() {
  return (
    <div
      className={[
        "relative overflow-hidden transition-all duration-300",
        ${p.fullWidth ? '"w-full"' : '"w-auto"'},
        "max-w-[${p.maxWidth}px]",
        "rounded-[${p.borderRadius}px]",
        "p-[${p.paddingY}px_${p.paddingX}px]",
        ${p.disabled ? '"opacity-50"' : '""'},
        ${p.hasGlass ? `"backdrop-blur-[${p.blur}px]"` : '""'},
        ${isLeftImg ? '"flex gap-5"' : '""'},
        "${bgClass}",
        "${shadowClass}",
        "${hoverEffectClass}",
        \`border-[${
          p.hasBorder
            ? `${p.borderWidth}px_${p.borderStyle}_${
                p.hasGlass ? `rgba(255,255,255,${(p.opacity + 0.2).toFixed(2)})` : p.borderColor
              }`
            : "none"
        }]\`,
      ].join(" ")}
      style={{ textAlign: "${p.contentAlign}" }}
    >
      {${p.badgeText ? `<span className="absolute top-2 ${p.badgePosition === 'top-left' ? 'left-2' : 'right-2'} bg-[${p.badgeBgColor}] text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">${p.badgeText}</span>` : "null"}}
      {${isBgImg ? `<div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: \`linear-gradient(rgba(0,0,0,${p.bgImageOverlay}), rgba(0,0,0,${p.bgImageOverlay})), url(${p.image})\` }} />` : "null"}}
      {${(!isBgImg && p.image) ? `<img src="${p.image}" alt="card" className="${isTopImg ? `w-full h-[${p.imageHeight}px] object-${p.imageFit} rounded-t-[${p.borderRadius}px] mb-4` : `w-[${p.imageWidth}px] object-${p.imageFit} rounded-l-[${p.borderRadius}px]`}" />` : "null"}}
      <div className="flex-1">
        {${p.overline ? `<div className="text-[${p.overlineColor}] text-[${p.overlineFontSize}px] font-semibold uppercase tracking-wider mb-1">${p.overline}</div>` : "null"}}
        <h3 className="text-[${p.textColor}] text-[${p.titleFontSize}px] font-[${p.fontWeight}] mb-[${p.titleDescGap}px] leading-tight">
          {${p.icon ? `<span className="mr-2">${p.icon}</span>` : ""}}${p.title}
        </h3>
        <p className="text-[${p.textColor}] text-[${p.descFontSize}px] font-normal opacity-75 leading-relaxed">
          ${p.description}
        </p>
        {${(p.showPrimary || p.showSecondary) ? `<div className="flex gap-3 mt-4" style={{ justifyContent: "${p.contentAlign}" }}>` +
          (p.showPrimary ? `<button className="px-5 py-2 rounded-lg font-semibold" style={{ background: "${p.bgColor === '#FFFFFF' ? '#1976D2' : p.textColor}", color: "${p.bgColor === '#FFFFFF' ? '#FFFFFF' : p.bgColor}" }} disabled={${p.disabled}}>${p.primaryLabel}</button>` : "") +
          (p.showSecondary ? `<button className="px-5 py-2 rounded-lg border font-semibold" style={{ borderColor: "${p.textColor}", color: "${p.textColor}" }} disabled={${p.disabled}}>${p.secondaryLabel}</button>` : "") +
          `</div>` : "null"}}
        {${p.footerText ? `<p className="text-xs mt-3 opacity-60">${p.footerText}</p>` : "null"}}
      </div>
    </div>
  );
}`;
    },

    vue: (p) => {
      const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
      const glassBg = `${p.bgColor}${opacityHex}`;
      const shadowColor = p.shadowColor || "#000000";

      return `<template>
  <div
    class="relative overflow-hidden transition-all duration-300"
    :class="[
      ${p.fullWidth ? "'w-full'" : "'w-auto'"},
      'max-w-[${p.maxWidth}px]',
      'rounded-[${p.borderRadius}px]',
      'p-[${p.paddingY}px_${p.paddingX}px]',
      ${p.disabled ? "'opacity-50'" : "''"},
      ${p.hasGlass ? `'backdrop-blur-[${p.blur}px]'` : "''"},
      ${p.image && p.imagePosition === 'left' ? "'flex gap-5'" : "''"},
      ${p.hasGradient ? `'bg-gradient-to-br from-[${p.gradientStart}] to-[${p.gradientEnd}]'` : p.hasBackground || p.hasGlass ? `'bg-[${p.hasGlass ? glassBg : p.bgColor}]'` : "'bg-transparent'"},
      ${p.hasShadow && !p.disabled ? `'shadow-[${p.shadowBlur / 2}px_${p.shadowBlur}px_${p.shadowBlur * 2}px_${p.shadowSpread}px_${shadowColor}19]'` : "'shadow-none'"},
      ${p.hoverEffect === 'lift' ? `'hover:-translate-y-[${p.hoverIntensity}px]'` : p.hoverEffect === 'glow' ? `'hover:shadow-[0_${p.hoverIntensity * 2}px_${p.hoverIntensity * 4}px_${shadowColor}40]'` : "''"},
      \`border-[${
        p.hasBorder
          ? `${p.borderWidth}px_${p.borderStyle}_${
              p.hasGlass ? `rgba(255,255,255,${(p.opacity + 0.2).toFixed(2)})` : p.borderColor
            }`
          : "none"
      }]\`,
    ]"
    style="textAlign: '${p.contentAlign}'"
  >
    <span v-if="${!!p.badgeText}" class="absolute top-2 ${p.badgePosition === 'top-left' ? 'left-2' : 'right-2'} bg-[${p.badgeBgColor}] text-white text-xs font-bold px-2 py-0.5 rounded-full">
      ${p.badgeText}
    </span>
    <div v-if="${p.image && p.imagePosition === 'background'}" class="absolute inset-0 bg-center bg-cover" :style="{ backgroundImage: \`linear-gradient(rgba(0,0,0,${p.bgImageOverlay}), rgba(0,0,0,${p.bgImageOverlay})), url(${p.image})\` }" />
    <img v-if="${p.image && p.imagePosition !== 'none' && p.imagePosition !== 'background'}" src="${p.image}" alt="card" class="${p.imagePosition === 'top' ? `w-full h-[${p.imageHeight}px] object-${p.imageFit} rounded-t-[${p.borderRadius}px] mb-4` : `w-[${p.imageWidth}px] object-${p.imageFit} rounded-l-[${p.borderRadius}px]`}" />
    <div class="flex-1">
      <div v-if="${!!p.overline}" class="text-[${p.overlineColor}] text-[${p.overlineFontSize}px] font-semibold uppercase tracking-wider mb-1">${p.overline}</div>
      <h3 class="text-[${p.textColor}] text-[${p.titleFontSize}px] font-[${p.fontWeight}] mb-[${p.titleDescGap}px] leading-tight">
        <span v-if="${!!p.icon}" class="mr-2">${p.icon}</span>${p.title}
      </h3>
      <p class="text-[${p.textColor}] text-[${p.descFontSize}px] font-normal opacity-75 leading-relaxed">${p.description}</p>
      <div v-if="${p.showPrimary || p.showSecondary}" class="flex gap-3 mt-4" :style="{ justifyContent: '${p.contentAlign}' }">
        <button v-if="${p.showPrimary}" class="px-5 py-2 rounded-lg font-semibold" :style="{ background: '${p.bgColor === '#FFFFFF' ? '#1976D2' : p.textColor}', color: '${p.bgColor === '#FFFFFF' ? '#FFFFFF' : p.bgColor}' }" :disabled="${p.disabled}">${p.primaryLabel}</button>
        <button v-if="${p.showSecondary}" class="px-5 py-2 rounded-lg border font-semibold" :style="{ borderColor: '${p.textColor}', color: '${p.textColor}' }" :disabled="${p.disabled}">${p.secondaryLabel}</button>
      </div>
      <p v-if="${!!p.footerText}" class="text-xs mt-3 opacity-60">${p.footerText}</p>
    </div>
  </div>
</template>`;
    },

    flutter: (p) => {
      const colorHex = p.bgColor.replace("#", "").toUpperCase();
      const textColorHex = p.textColor.replace("#", "").toUpperCase();
      const borderColorHex = p.borderColor.replace("#", "").toUpperCase();
      const shadowColorHex = (p.shadowColor || "#000000").replace("#", "").toUpperCase();

      // Build container decoration
      let bgWidget = "";
      if (p.hasGradient) {
        bgWidget = `gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF${p.gradientStart.replace("#", "").toUpperCase()}), Color(0xFF${p.gradientEnd.replace("#", "").toUpperCase()})],
        ),`;
      } else if (p.hasBackground || p.hasGlass) {
        bgWidget = `color: Color(0x${p.hasGlass ? Math.round(p.opacity * 255).toString(16).padStart(2, '0') : "FF"}${colorHex}),`;
      } else {
        bgWidget = `color: Colors.transparent,`;
      }

      const hasBgImage = p.image && p.imagePosition === "background";
      const imageWidget = p.image && p.imagePosition !== "none" && p.imagePosition !== "background"
        ? `ClipRRect(
            borderRadius: BorderRadius.only(${p.imagePosition === "top" ? `topLeft: Radius.circular(${p.borderRadius}), topRight: Radius.circular(${p.borderRadius})` : `topLeft: Radius.circular(${p.borderRadius}), bottomLeft: Radius.circular(${p.borderRadius})`}),
            child: Image.network('${p.image}', fit: BoxFit.${p.imageFit}, ${p.imagePosition === "top" ? `height: ${p.imageHeight},` : `width: ${p.imageWidth},`}),
          ),`
        : "";

      const contentAlignMap: Record<string, string> = {
        left: "CrossAxisAlignment.start",
        center: "CrossAxisAlignment.center",
        right: "CrossAxisAlignment.end",
      };

      return `Card(
  elevation: ${p.hasShadow && !p.disabled ? p.elevation : 0}.0,
  shadowColor: Color(0x${p.hasShadow ? "66" + shadowColorHex : "00000000"}),
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(${p.borderRadius}),
    ${p.hasBorder ? `side: BorderSide(color: Color(0xFF${borderColorHex}), width: ${p.borderWidth}, style: BorderStyle.${p.borderStyle}),` : ""}
  ),
  ${p.fullWidth ? "margin: EdgeInsets.zero," : ""}
  clipBehavior: Clip.antiAlias,
  child: ${p.hasGlass ? `BackdropFilter(
    filter: ImageFilter.blur(sigmaX: ${p.blur}, sigmaY: ${p.blur}),
    child: ` : ""}Container(
    width: ${p.fullWidth ? "double.infinity" : "null"},
    constraints: BoxConstraints(maxWidth: ${p.maxWidth}),
    padding: const EdgeInsets.symmetric(horizontal: ${p.paddingX}, vertical: ${p.paddingY}),
    decoration: BoxDecoration(
      ${bgWidget}
      borderRadius: BorderRadius.circular(${p.borderRadius}),
      ${hasBgImage ? `image: DecorationImage(image: NetworkImage('${p.image}'), fit: BoxFit.cover, colorFilter: ColorFilter.mode(Colors.black.withOpacity(${p.bgImageOverlay}), BlendMode.darken)),` : ""}
    ),
    child: ${p.image && p.imagePosition === "left" ? "Row(children: [" : "Column(crossAxisAlignment: " + contentAlignMap[p.contentAlign] + ", mainAxisSize: MainAxisSize.min, children: ["}
      ${imageWidget}
      ${p.image && p.imagePosition === "left" ? "const SizedBox(width: 16)," : ""}
      Expanded(
        child: Column(
          crossAxisAlignment: ${contentAlignMap[p.contentAlign]},
          mainAxisSize: MainAxisSize.min,
          children: [
            ${p.badgeText ? `Align(
              alignment: Alignment.${p.badgePosition === "top-left" ? "topLeft" : "topRight"},
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                decoration: BoxDecoration(color: Color(0xFF${p.badgeBgColor.replace("#", "").toUpperCase()}), borderRadius: BorderRadius.circular(12)),
                child: Text('${p.badgeText}', style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold)),
              ),
            ),` : ""}
            ${p.overline ? `Text('${p.overline}', style: TextStyle(color: Color(0xFF${p.overlineColor.replace("#", "").toUpperCase()}), fontSize: ${p.overlineFontSize}, fontWeight: FontWeight.w600, letterSpacing: 1)),` : ""}
            ${p.icon ? `const SizedBox(height: 4),` : ""}
            Row(children: [
              ${p.icon ? `Text('${p.icon}', style: const TextStyle(fontSize: 24)), const SizedBox(width: 8),` : ""}
              Text('${p.title}', style: TextStyle(color: Color(0xFF${textColorHex}), fontSize: ${p.titleFontSize}, fontWeight: FontWeight.w${p.fontWeight})),
            ]),
            SizedBox(height: ${p.titleDescGap}),
            Text('${p.description}', style: TextStyle(color: Color(0xFF${textColorHex}).withOpacity(0.75), fontSize: ${p.descFontSize}, height: 1.6)),
            ${p.showPrimary || p.showSecondary ? `const SizedBox(height: 16),
            Row(mainAxisAlignment: ${p.contentAlign === "center" ? "MainAxisAlignment.center" : p.contentAlign === "right" ? "MainAxisAlignment.end" : "MainAxisAlignment.start"}, children: [` +
              (p.showPrimary ? `ElevatedButton(onPressed: ${p.disabled ? "null" : "() {}"}, child: Text('${p.primaryLabel}'), style: ElevatedButton.styleFrom(primary: Color(0xFF${(p.bgColor === "#FFFFFF" ? "1976D2" : textColorHex)}), onPrimary: Color(0xFF${(p.bgColor === "#FFFFFF" ? "FFFFFF" : colorHex)}))),` : "") +
              (p.showSecondary ? `OutlinedButton(onPressed: ${p.disabled ? "null" : "() {}"}, child: Text('${p.secondaryLabel}', style: TextStyle(color: Color(0xFF${textColorHex}))), style: OutlinedButton.styleFrom(side: BorderSide(color: Color(0xFF${textColorHex})))),` : "") +
              `],),` : ""}
            ${p.footerText ? `const SizedBox(height: 12), Text('${p.footerText}', style: TextStyle(color: Color(0xFF${textColorHex}).withOpacity(0.6), fontSize: 12)),` : ""}
          ],
        ),
      ),
    ]),
  )${p.hasGlass ? ")" : ""},
)`;
    },

    html: (p) => {
      const opacityHex = Math.round(p.opacity * 255).toString(16).padStart(2, '0');
      const glassBg = `${p.bgColor}${opacityHex}`;
      const shadowColor = p.shadowColor || "#000000";

      const bgStyle = p.hasGradient
        ? `background: linear-gradient(${p.gradientAngle}deg, ${p.gradientStart}, ${p.gradientEnd});`
        : p.hasBackground || p.hasGlass
        ? `background: ${p.hasGlass ? glassBg : p.bgColor};`
        : "background: transparent;";

      const bgImageStyle = p.image && p.imagePosition === "background"
        ? `background-image: linear-gradient(rgba(0,0,0,${p.bgImageOverlay}), rgba(0,0,0,${p.bgImageOverlay})), url(${p.image}); background-size: cover; background-position: center;`
        : "";

      const borderStyle = p.hasBorder
        ? `border: ${p.borderWidth}px ${p.borderStyle} ${p.hasGlass ? `rgba(255,255,255,${(p.opacity + 0.2).toFixed(2)})` : p.borderColor};`
        : "border: none;";

      const shadowStyle = p.hasShadow && !p.disabled
        ? `box-shadow: ${p.shadowBlur / 2}px ${p.shadowBlur}px ${p.shadowBlur * 2}px ${p.shadowSpread}px ${shadowColor}19;`
        : "box-shadow: none;";

      const hoverStyle = p.hoverEffect === "lift"
        ? `transform: translateY(-${p.hoverIntensity}px);`
        : p.hoverEffect === "glow"
        ? `box-shadow: 0 ${p.hoverIntensity * 2}px ${p.hoverIntensity * 4}px ${shadowColor}40;`
        : "";

      return `<div style="
  max-width: ${p.maxWidth}px; padding: ${p.paddingY}px ${p.paddingX}px;
  border-radius: ${p.borderRadius}px; overflow: hidden; transition: all 0.3s ease;
  text-align: ${p.contentAlign};
  ${p.fullWidth ? "width: 100%;" : ""}
  ${bgStyle}
  ${bgImageStyle}
  ${borderStyle}
  ${shadowStyle}
  ${p.hasGlass ? `backdrop-filter: blur(${p.blur}px); -webkit-backdrop-filter: blur(${p.blur}px);` : ""}
  ${p.disabled ? "opacity: 0.5;" : ""}
  ${p.image && p.imagePosition === "left" ? "display: flex; gap: 20px;" : ""}
  position: relative;
">
  ${p.badgeText ? `<span style="position: absolute; top: 8px; ${p.badgePosition === 'top-left' ? 'left: 8px;' : 'right: 8px;'} background: ${p.badgeBgColor}; color: white; font-size: 12px; font-weight: bold; padding: 2px 8px; border-radius: 12px; z-index: 2;">${p.badgeText}</span>` : ""}
  ${p.image && p.imagePosition !== "none" && p.imagePosition !== "background" ? `<img src="${p.image}" style="${p.imagePosition === 'top' ? `width: 100%; height: ${p.imageHeight}px; object-fit: ${p.imageFit}; border-radius: ${p.borderRadius}px ${p.borderRadius}px 0 0; margin-bottom: 16px;` : `width: ${p.imageWidth}px; object-fit: ${p.imageFit}; border-radius: ${p.borderRadius}px 0 0 ${p.borderRadius}px;`}" />` : ""}
  <div style="flex: 1;">
    ${p.overline ? `<div style="color: ${p.overlineColor}; font-size: ${p.overlineFontSize}px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">${p.overline}</div>` : ""}
    <h3 style="color: ${p.textColor}; font-size: ${p.titleFontSize}px; font-weight: ${p.fontWeight}; margin-bottom: ${p.titleDescGap}px; line-height: 1.3;">
      ${p.icon ? `<span style="margin-right: 8px;">${p.icon}</span>` : ""}${p.title}
    </h3>
    <p style="color: ${p.textColor}; font-size: ${p.descFontSize}px; opacity: 0.75; line-height: 1.6;">${p.description}</p>
    ${(p.showPrimary || p.showSecondary) ? `<div style="display: flex; gap: 12px; margin-top: 16px; justify-content: ${p.contentAlign};">
      ${p.showPrimary ? `<button style="padding: 8px 20px; border-radius: 8px; background: ${p.bgColor === '#FFFFFF' ? '#1976D2' : p.textColor}; color: ${p.bgColor === '#FFFFFF' ? '#FFFFFF' : p.bgColor}; border: none; font-weight: 600; cursor: ${p.disabled ? 'not-allowed' : 'pointer'}; opacity: ${p.disabled ? 0.5 : 1};">${p.primaryLabel}</button>` : ""}
      ${p.showSecondary ? `<button style="padding: 8px 20px; border-radius: 8px; background: transparent; color: ${p.textColor}; border: 1px solid ${p.textColor}; font-weight: 600; cursor: ${p.disabled ? 'not-allowed' : 'pointer'}; opacity: ${p.disabled ? 0.5 : 1};">${p.secondaryLabel}</button>` : ""}
    </div>` : ""}
    ${p.footerText ? `<p style="font-size: 12px; opacity: 0.6; margin-top: 12px;">${p.footerText}</p>` : ""}
  </div>
</div>`;
    },
  }
};