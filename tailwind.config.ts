
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				islamic: {
					green: '#2C9F7E',     // Updated: Fresher teal green
					'light-green': '#8BDFC7', // Updated: Brighter mint green
					gold: '#F5B841',      // Updated: Vibrant gold
					'light-gold': '#FFDD94', // Updated: Warmer light gold
					cream: '#FEF8EC',     // Updated: Softer cream
					brown: '#6D5D4B',     // Updated: Lighter brown
					'dark-blue': '#1E5D8C', // Updated: More vibrant blue
					teal: '#00A9A5',      // New: Vibrant teal
					coral: '#FF7F66',     // New: Warm coral accent
					indigo: '#5B5EDB',    // New: Rich indigo
					lilac: '#B9B4F4',     // New: Soft lilac
					azure: '#0094C6',     // New: Bright azure blue
					sage: '#95C9B8',      // New: Calming sage green
					sand: '#E1C19D',      // New: Warm sand color
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0", opacity: "0" },
					to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
					to: { height: "0", opacity: "0" }
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"page-transition": {
					"0%": { 
						opacity: "0",
						transform: "translateX(20px)"
					},
					"100%": { 
						opacity: "1", 
						transform: "translateX(0)" 
					}
				},
				"pulse-soft": {
					"0%": { 
						transform: "scale(1)" 
					},
					"50%": { 
						transform: "scale(1.02)" 
					},
					"100%": { 
						transform: "scale(1)" 
					}
				},
				"float": {
					"0%, 100%": { 
						transform: "translateY(0)" 
					},
					"50%": { 
						transform: "translateY(-5px)" 
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"page-transition": "page-transition 0.4s ease-out",
				"pulse-soft": "pulse-soft 3s infinite ease-in-out",
				"float": "float 6s infinite ease-in-out"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
