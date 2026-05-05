import React from "react";

export function DartCode({ code }: { code: string }) {
  const kw = new Set(["const", "null", "true", "false", "final", "var", "class", "void", "return", "new"]);
  const ty = new Set([
    "Color", "Text", "Icons", "FontWeight", "TextAlign", "BorderRadius", "BorderSide",
    "OutlineInputBorder", "UnderlineInputBorder", "EdgeInsets", "Size", "RoundedRectangleBorder",
    "CircleBorder", "TextStyle", "SizedBox", "Column", "Padding", "Align", "Alignment", "Container",
    "Colors", "double", "infinity", "String", "int", "bool", "Badge", "Switch", "Icon", "Chip", "Card",
    "Slider", "Checkbox", "ListTile", "TextField", "InputDecoration", "CircleAvatar", "FloatingActionButton",
    "ElevatedButton", "OutlinedButton", "TextButton", "LinearProgressIndicator", "CircularProgressIndicator"
  ]);

  return (
    <>
      {code.split("\n").map((line, i) => {
        const parts: React.ReactNode[] = [];
        let k = 0;
        if (line.trim().startsWith("//")) {
          return (
            <div key={i}>
              <span style={{ color: "#6A9955" }}>{line}</span>
            </div>
          );
        }
        
        const segs: { t: string; v: string }[] = [];
        let str = line;
        let li = 0;
        const re = /'[^']*'/g;
        let m;
        
        while ((m = re.exec(str)) !== null) {
          if (m.index > li) segs.push({ t: "c", v: str.slice(li, m.index) });
          segs.push({ t: "s", v: m[0] });
          li = m.index + m[0].length;
        }
        if (li < str.length) segs.push({ t: "c", v: str.slice(li) });
        
        segs.forEach((seg) => {
          if (seg.t === "s") {
            parts.push(<span key={k++} style={{ color: "#CE9178" }}>{seg.v}</span>);
            return;
          }
          seg.v.split(/(\b)/).forEach((w) => {
            if (kw.has(w)) parts.push(<span key={k++} style={{ color: "#569CD6" }}>{w}</span>);
            else if (ty.has(w)) parts.push(<span key={k++} style={{ color: "#4EC9B0" }}>{w}</span>);
            else if (/^\d+(\.\d+)?$/.test(w)) parts.push(<span key={k++} style={{ color: "#B5CEA8" }}>{w}</span>);
            else parts.push(<span key={k++}>{w}</span>);
          });
        });
        
        return <div key={i}>{parts}</div>;
      })}
    </>
  );
}
