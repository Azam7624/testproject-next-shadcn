// components/RequestCodeButton.tsx
'use client';

import { useState } from 'react';

type Props = {
  onCodeRequested: () => void;
};

export default function RequestCodeButton({ onCodeRequested }: Props) {
  const [loading, setLoading] = useState(false);

  const requestCode = async () => {
    setLoading(true);
    try {
      await fetch('/api/send-code', { method: 'POST' });
      onCodeRequested(); // Tell parent to start timer
    } catch (error) {
      console.error('Failed to request code', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={requestCode} disabled={loading}>
      {loading ? 'Sending...' : 'Send Code'}
    </button>
  );
}
