import React from "react";
import { Highlight, themes } from "prism-react-renderer";

export function CodeBlock({ code, language }: { code: string; language: string }) {
  // Map our framework names to prism languages
  const langMap: Record<string, string> = {
    react: "jsx",
    vue: "html",
    flutter: "dart",
    html: "html",
  };

  const prismLang = langMap[language] || "markup";

  return (
    <Highlight theme={themes.vsDark} code={code.trim()} language={prismLang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, margin: 0, padding: 0, background: "transparent", fontSize: "14px", fontFamily: "var(--font-geist-mono), monospace" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
