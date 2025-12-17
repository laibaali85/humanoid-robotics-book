/**
 * ChatbotFeatureShowcase component
 *
 * This component showcases the key features of the RAG chatbot.
 */
import React from 'react';
import styles from './LandingPage.module.css';

const features = [
  {
    title: 'AI-Powered Learning',
    description: 'Engage with an intelligent RAG chatbot that delivers instant, context-aware insights from cutting-edge robotics research.',
    icon: '🤖',
  },
  {
    title: 'Neural Knowledge Engine',
    description: 'Harness advanced semantic understanding to unlock deep technical knowledge and accelerate your mastery of Physical AI.',
    icon: '⚡',
  },
  {
    title: 'Precision Query System',
    description: 'Target any concept with surgical precision—highlight text to dive deep into complex topics and get expert-level explanations.',
    icon: '🎯',
  },
];

export function ChatbotFeatureShowcase() {
  return (
    <div className={styles.featureShowcase}>
      <div className={styles.featureContainer}>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
