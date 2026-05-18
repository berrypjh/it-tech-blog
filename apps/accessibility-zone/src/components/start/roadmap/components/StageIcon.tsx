import type { LearningStage } from '../content';

type Props = { id: LearningStage['iconId'] };

export const StageIcon = ({ id }: Props) => {
  switch (id) {
    case 'flag':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path
            d="M5 21V4l11 2-2 4 2 4-11-1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path
            d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'keyboard':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'speaker':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path
            d="M11 5L6 9H2v6h4l5 4V5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 8.5a5 5 0 010 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'form':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 9h8M8 13h6M8 17h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'cube':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path
            d="M12 3l9 5v8l-9 5-9-5V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M3 8l9 5 9-5M12 13v8" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path
            d="M12 3a9 9 0 100 18c1 0 1.5-1 1.5-2s-1-1.5-1-2.5S13 14 14 14h3a4 4 0 004-4 7 7 0 00-9-7z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <circle cx="7" cy="13" r="1" fill="currentColor" />
          <circle cx="11" cy="7" r="1" fill="currentColor" />
          <circle cx="15" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case 'check-list':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 9l2 2 4-4M8 16h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'rocket':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <path
            d="M5 19l4-4M14 4c4 0 6 2 6 6l-7 7-5-5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="9" r="1.5" fill="currentColor" />
          <path
            d="M5 19v-3l3-1M8 16l3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};
