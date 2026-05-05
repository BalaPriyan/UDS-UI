import React from "react";
import styles from "@/app/page.module.css";
import { PropDef } from "@/types";

export function PropControl({ prop, value, onChange }: { prop: PropDef; value: any; onChange: (v: any) => void }) {
  const lb = <div className={styles.propLabel}>{prop.label}</div>;
  let ctrl;
  
  if (prop.type === "text") {
    ctrl = <input type="text" value={value} onChange={e => onChange(e.target.value)} className={styles.input} />;
  } else if (prop.type === "textarea") {
    ctrl = <textarea value={value} onChange={e => onChange(e.target.value)} rows={2} className={styles.textarea} />;
  } else if (prop.type === "color") {
    ctrl = (
      <div className={styles.colorControl}>
        <input type="color" value={value} onChange={e => onChange(e.target.value)} className={styles.colorPicker} />
        <input type="text" value={value} onChange={e => { if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) onChange(e.target.value); }} className={styles.colorInput} />
      </div>
    );
  } else if (prop.type === "range") {
    ctrl = (
      <div className={styles.rangeControl}>
        <input type="range" min={prop.min} max={prop.max} step={prop.step || 1} value={value} onChange={e => onChange(prop.step && prop.step < 1 ? parseFloat(e.target.value) : parseInt(e.target.value))} className={styles.rangeSlider} />
        <span className={styles.rangeValue}>{value}</span>
      </div>
    );
  } else if (prop.type === "number") {
    ctrl = <input type="number" value={value} onChange={e => onChange(parseFloat(e.target.value))} className={styles.input} />;
  } else if (prop.type === "bool") {
    ctrl = (
      <label className={styles.boolControl}>
        <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} className={styles.checkbox} />
        <span className={styles.boolLabel}>{value ? "true" : "false"}</span>
      </label>
    );
  } else if (prop.type === "select") {
    ctrl = (
      <select value={value} onChange={e => onChange(e.target.value)} className={styles.select}>
        {prop.options?.map((o: string) => <option key={o} value={o}>{o}</option>)}
      </select>
    );
  }
  
  return <div className={styles.propGroup}>{lb}{ctrl}</div>;
}
