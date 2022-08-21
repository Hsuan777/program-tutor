module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        'azeret': ['Azeret Mono', 'monospace'],
      },
    },
    container: {
      center: true,
      padding: "12px",
    },
    fontSize: {
      "xs": ["12px", "1.5"],
      "sm": ["14px", "1.5"],
      "base":["16px", "1.5"],
      "lg": ["18px", "1.5"],
      "xl": ['20px', "1.5"],
      "2xl": ["24px", "1.5"],
      "3xl": ["28px", "1.5"],
      "4xl": ["32px", "1.5"],
      "5xl": ["48px", "1.5"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#62DB54",
          "secondary": "#09ACF5",
          "neutral": "#2D2D2D",
          "accent": "#1FB2A6",
          "info": "#3ABFF8",
          "base-300": "#1C1C1C",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
