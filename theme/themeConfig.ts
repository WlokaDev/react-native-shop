import { type ThemeConfig } from './types'

const themeConfig = {
  colors: {
    primary: {
      DEFAULT: '#3b82f6',
      foreground: {
        DEFAULT: '#1e40af',
      },
      background: {
        DEFAULT: '#f0f9ff',
      },
      text: {
        DEFAULT: '#ffffff',
      },
    },
    secondary: {
      DEFAULT: '#FFA451',
      foreground: {
        DEFAULT: '#92400e',
      },
      background: {
        DEFAULT: '#fffbe7',
      },
      text: {
        DEFAULT: '#ffffff',
      },
    },
    danger: {
      DEFAULT: '#ef4444',
      foreground: {
        DEFAULT: '#b91c1c',
      },
      background: {
        DEFAULT: '#fee2e2',
      },
      text: {
        DEFAULT: '#ffffff',
      },
    },
    warning: {
      DEFAULT: '#f97316',
      foreground: {
        DEFAULT: '#c2410c',
      },
      background: {
        DEFAULT: '#ffedd5',
      },
      text: {
        DEFAULT: '#000000',
      },
    },
    text: '#000000',
  },
  radius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999,
  },
  borderWidth: {
    none: 0,
    sm: 1,
    md: 2,
    lg: 4,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
  },
  size: {
    sm: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      fontSize: 12,
    },
    md: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      fontSize: 14,
    },
    lg: {
      paddingVertical: 16,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  },
} satisfies ThemeConfig

export { themeConfig }
