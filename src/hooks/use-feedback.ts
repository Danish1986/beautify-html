import { useState, useEffect } from 'react';

interface FeedbackStats {
  totalConversions: number;
  helpfulVotes: number;
  notHelpfulVotes: number;
}

const STORAGE_PREFIX = 'tool_feedback_';

export function useFeedback(toolName: string) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [stats, setStats] = useState<FeedbackStats>({
    totalConversions: 0,
    helpfulVotes: 0,
    notHelpfulVotes: 0,
  });

  const storageKey = `${STORAGE_PREFIX}${toolName}`;

  // Load stats from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setStats(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load feedback stats:', error);
    }
  }, [storageKey]);

  // Save stats to localStorage
  const saveStats = (newStats: FeedbackStats) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(newStats));
      setStats(newStats);
    } catch (error) {
      console.error('Failed to save feedback stats:', error);
    }
  };

  // Record feedback
  const recordFeedback = (type: 'conversion' | 'helpful' | 'not-helpful') => {
    const newStats = { ...stats };

    if (type === 'conversion') {
      newStats.totalConversions += 1;
      setShowFeedback(true);
    } else if (type === 'helpful') {
      newStats.helpfulVotes += 1;
      setShowFeedback(false);
    } else if (type === 'not-helpful') {
      newStats.notHelpfulVotes += 1;
      setShowFeedback(false);
    }

    saveStats(newStats);
  };

  return {
    showFeedback,
    stats,
    recordFeedback,
  };
}
