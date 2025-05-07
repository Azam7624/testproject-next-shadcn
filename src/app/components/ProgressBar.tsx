// components/ProgressBar.tsx
import React from "react";
import styles from "./ProgressBar.module.css"; // در صورت نیاز به استایل

interface ProgressBarProps {
  currentStep: number;    // مرحله فعلی
  steps: string[];        // آرایه‌ای از نام مراحل
}

export default function ProgressBar({ currentStep, steps }: ProgressBarProps) {
  return (
    <div className={styles.progressContainer}>
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        return (
          <div key={index} className={styles.stepItem}>
            <div className={`${styles.stepCircle} ${isActive ? styles.active : ""}`}>
              {isActive ? "✔" : index + 1}
            </div>
            <span className={styles.stepLabel}>{step}</span>
          </div>
        );
      })}
    </div>
  );
}
