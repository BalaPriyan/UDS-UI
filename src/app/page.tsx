"use client";

import React, { useState, useMemo } from "react";
import { REGISTRY } from "@/data/registry";
import { PropControl } from "@/components/ui/PropControl";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Search, Copy, Download, Code2, MonitorSmartphone, Globe, Box, Layers, Smartphone, Tablet, Monitor, AlertCircle, ChevronDown, ChevronRight } from "lucide-react";
import { Framework } from "@/types";
import styles from "./page.module.css";

type ViewportSize = "mobile" | "tablet" | "desktop";

const FRAMEWORKS: { id: Framework; label: string; icon: React.ReactNode }[] = [
  { id: "react", label: "React", icon: <Box size={14} /> },
  { id: "vue", label: "Vue", icon: <Layers size={14} /> },
  { id: "flutter", label: "Flutter", icon: <Globe size={14} /> },
  { id: "html", label: "HTML/CSS", icon: <Globe size={14} /> },
];

const VIEWPORTS: { id: ViewportSize; label: string; icon: React.ReactNode }[] = [
  { id: "mobile", label: "Mobile", icon: <Smartphone size={14} /> },
  { id: "tablet", label: "Tablet", icon: <Tablet size={14} /> },
  { id: "desktop", label: "Desktop", icon: <Monitor size={14} /> },
];

export default function UniversalComponentStudio() {
  const [selId, setSelId] = useState("button");
  const [vals, setVals] = useState<Record<string, any>>({});
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<ViewportSize>("mobile");
  const [framework, setFramework] = useState<Framework>("react");
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [previewBg, setPreviewBg] = useState("#f5f5f7");

  const allItems = useMemo(() => REGISTRY.flatMap(c => c.items), []);
  const comp = useMemo(() => allItems.find(c => c.id === selId) || allItems[0], [selId, allItems]);

  const curProps = useMemo(() => {
    const props: Record<string, any> = {};
    comp.props.forEach(p => {
      props[p.key] = vals[selId + "_" + p.key] ?? p.default;
    });
    return props;
  }, [comp, vals, selId]);

  const setProp = (key: string, val: any) => setVals(prev => ({ ...prev, [selId + "_" + key]: val }));

  const code = useMemo(() => comp.generators[framework](curProps), [comp, curProps, framework]);

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const download = () => {
    const extensions: Record<Framework, string> = {
      react: "tsx",
      vue: "vue",
      flutter: "dart",
      html: "html",
    };
    const b = new Blob([code], { type: "text/plain" });
    const u = URL.createObjectURL(b);
    const a = document.createElement("a");
    a.href = u;
    a.download = `${selId}.${extensions[framework]}`;
    a.click();
    URL.revokeObjectURL(u);
  };

  const filtered = search
    ? REGISTRY.map(c => ({
        ...c,
        items: c.items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
      })).filter(c => c.items.length > 0)
    : REGISTRY;

  const toggleCat = (cat: string) => setCollapsed(prev => ({ ...prev, [cat]: !prev[cat] }));

  return (
    <>
      {/* Mobile Warning Overlay */}
      <div className={styles.mobileWarning}>
        <AlertCircle size={48} className={styles.warningIcon} />
        <h1 className={styles.warningTitle}>Desktop & Tablet Only</h1>
        <p className={styles.warningText}>
          The Universal Design Space is a professional prototyping tool optimized for larger screens. 
          Please open this site on a desktop or tablet for the best experience.
        </p>
      </div>

      <div className={styles.layout}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2 className={styles.sidebarTitle}>Components</h2>
            <div className={styles.searchBox}>
              <Search size={14} className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search..." 
                value={search} 
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
          
          <div className={styles.sidebarContent}>
            {filtered.map(cat => (
              <div key={cat.category}>
                <div className={styles.categoryTitle}>{cat.category}</div>
                {cat.items.map(item => (
                  <div 
                    key={item.id}
                    className={`${styles.navItem} ${selId === item.id ? styles.navItemActive : ''}`}
                    onClick={() => { setSelId(item.id); setTab("preview"); }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Properties Panel */}
        <div className={styles.propsPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelSubtitle}>Configuration</div>
            <div className={styles.panelTitle}>{comp.name}</div>
          </div>
          <div className={styles.propsContent}>
            {Object.entries(
              comp.props.reduce((acc, p) => {
                const cat = p.category || "General";
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(p);
                return acc;
              }, {} as Record<string, typeof comp.props>)
            ).map(([cat, props]) => {
              const isCollapsed = collapsed[cat];
              return (
                <div key={cat} className={styles.propCategoryGroup}>
                  <div className={styles.propCategoryTitle} onClick={() => toggleCat(cat)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{cat}</span>
                    {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                  </div>
                  {!isCollapsed && (
                    <div className={styles.propCategoryContent}>
                      {props.map(p => (
                        <PropControl 
                          key={p.key} 
                          prop={p} 
                          value={curProps[p.key]} 
                          onChange={v => setProp(p.key, v)} 
                          disabled={p.enabledIf ? !p.enabledIf(curProps) : false}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Viewport */}
        <div className={styles.mainPanel}>
          <div className={styles.tabsHeader}>
            <div className={styles.tabsList}>
              <button 
                className={`${styles.tabButton} ${tab === "preview" ? styles.tabActive : ''}`}
                onClick={() => setTab("preview")}
              >
                <MonitorSmartphone size={14} /> Preview
              </button>
              <button 
                className={`${styles.tabButton} ${tab === "code" ? styles.tabActive : ''}`}
                onClick={() => setTab("code")}
              >
                <Code2 size={14} /> Code
              </button>
            </div>

            {tab === "preview" && (
              <div className={styles.frameworkSelector}>
                <div className={styles.previewBgTool}>
                  <input 
                    type="color" 
                    value={previewBg} 
                    onChange={e => setPreviewBg(e.target.value)} 
                    className={styles.miniColorPicker}
                    title="Change Preview Background"
                  />
                </div>
                {VIEWPORTS.map(vp => (
                  <button
                    key={vp.id}
                    className={`${styles.fwButton} ${viewport === vp.id ? styles.fwActive : ''}`}
                    onClick={() => setViewport(vp.id)}
                    title={vp.label}
                  >
                    {vp.icon}
                    <span>{vp.label}</span>
                  </button>
                ))}
              </div>
            )}

            {tab === "code" && (
              <div className={styles.frameworkSelector}>
                {FRAMEWORKS.map(fw => (
                  <button
                    key={fw.id}
                    className={`${styles.fwButton} ${framework === fw.id ? styles.fwActive : ''}`}
                    onClick={() => setFramework(fw.id)}
                    title={fw.label}
                  >
                    {fw.icon}
                    <span>{fw.label}</span>
                  </button>
                ))}
              </div>
            )}
            
            <div className={styles.actionsList}>
              {tab === "code" && (
                <>
                  <button className={styles.actionButton} onClick={copy}>
                    <Copy size={14} /> {copied ? "Copied!" : "Copy"}
                  </button>
                  <button className={`${styles.actionButton} ${styles.actionPrimary}`} onClick={download}>
                    <Download size={14} /> .{framework === 'flutter' ? 'dart' : framework === 'react' ? 'tsx' : framework === 'vue' ? 'vue' : 'html'}
                  </button>
                </>
              )}
            </div>
          </div>

          <div className={styles.panelBody}>
            {tab === "preview" ? (
              <div className={styles.previewContainer}>
                <div className={`${styles.deviceFrame} ${styles[viewport]}`}>
                  {viewport === "mobile" && (
                    <div className={styles.deviceHeader}>
                      <span>9:41</span>
                      <div className={styles.notch} />
                      <span></span>
                    </div>
                  )}
                  {viewport !== "desktop" && (
                    <div className={styles.appBar}>
                      <span className={styles.backIcon}>←</span>
                      <span className={styles.appTitle}>{comp.name}</span>
                    </div>
                  )}
                  <div className={styles.deviceContent} style={{ background: previewBg }}>
                    {comp.preview(curProps)}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.codeContainer}>
                <CodeBlock code={code} language={framework} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
