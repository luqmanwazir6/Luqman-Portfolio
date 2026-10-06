import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Code2,
  Database,
  Server,
  Layers,
  Terminal,
  ExternalLink,
  Mail,
  Phone,
  Copy,
  Check,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  X,
  Sun,
  Moon,
  Send,
  Eye,
  CheckCircle2,
  Cpu,
  Monitor,
  Palette,
  Video,
  FileCode2,
  Compass,
  ArrowUpRight,
  MessageCircle,
  FileText,
  Download,
} from 'lucide-react'
import './index.css'
import { WEB3FORMS_KEY, WHATSAPP } from './config.js'
import { CERTS } from './certificates.js'

function GithubIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function XTwitterIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

// ================= REAL BRAND TECH ICONS (MERN & ECOSYSTEM) =================
function ReactIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function NextjsIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className}>
      <circle cx="90" cy="90" r="88" fill="#050505" stroke="rgba(255,255,255,0.25)" strokeWidth="4" />
      <path
        d="M149.5 157.5L69.1 54H54v72h12.1V69.4L140 164.8c3.3-2.2 6.5-4.6 9.5-7.3z"
        fill="url(#nextGrad1)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#nextGrad2)" />
      <defs>
        <linearGradient id="nextGrad1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nextGrad2" x1="121" y1="54" x2="120.8" y2="106.9" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function TypeScriptIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path
        d="M72 60.1V49H34v11.1h12.6v57.9h12.8V60.1H72zm14.2 38.4c3.9 5.6 9.4 9.1 17 9.1 6.8 0 11.5-3.4 11.5-8.8 0-5.8-4.4-7.9-12.9-11.5-12.3-5.3-17.8-11-17.8-21.7 0-12 9.4-20.7 24.3-20.7 10.4 0 18.3 3.9 23.3 11.2l-8.7 7c-3.2-4.6-7.8-7.1-14.4-7.1-6.1 0-10.1 3.5-10.1 8.1 0 5.3 3.8 7.2 12.6 11 12.8 5.5 18.2 11.2 18.2 22.3 0 13.1-10 21.7-25.8 21.7-12.8 0-21.8-5.3-26.7-13.6l9.5-7z"
        fill="#ffffff"
      />
    </svg>
  )
}

function JavaScriptIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path
        d="M74.9 98.4c2.2 3.7 5.2 6.1 9.7 6.1 4.9 0 8-2.4 8-5.8 0-4-3.2-5.5-8.6-7.8l-3-1.3c-8.5-3.6-14.1-8.2-14.1-18.3 0-9.1 7-16 17.7-16 7.7 0 13.3 2.7 17.2 9.4l-7.5 4.8c-2-3.6-4.2-5.1-8.7-5.1-4.1 0-7 2.6-7 5.6 0 3.7 2.7 5.3 7.4 7.3l3 1.3c10.1 4.3 15.5 8.8 15.5 19 0 10.8-8.5 16.7-19.8 16.7-11 0-18-5.2-21.8-12.8l9.1-5.1zm-38.9 1.1c1.7 2.9 3.9 5.4 8.1 5.4 4.3 0 7.1-2.1 7.1-10.4V46h11.2v48.7c0 14.2-8.3 20.4-20.1 20.4-9.2 0-14.8-4.6-17.8-11.1l11.5-4.5z"
        fill="#000000"
      />
    </svg>
  )
}

function NodejsIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path d="M64 8.4l48.6 28.1v56.2L64 120.7 15.4 92.6V36.5L64 8.4z" fill="#339933" />
      <path d="M64 8.4L15.4 36.5l48.6 28.1 48.6-28.1L64 8.4z" fill="#66CC33" />
      <path d="M64 64.5L15.4 36.5v56.2L64 120.7V64.5z" fill="#539E43" />
      <path d="M64 64.5v56.2l48.6-28.1V36.5L64 64.5z" fill="#339933" />
    </svg>
  )
}

function ExpressIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="58" fill="rgba(255,255,255,0.06)" stroke="currentColor" strokeWidth="3" opacity="0.45" />
      <text
        x="64"
        y="80"
        textAnchor="middle"
        fill="currentColor"
        fontSize="54"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-3"
      >
        ex
      </text>
    </svg>
  )
}

function MongoIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        d="M64 12c-2.3 8.2-13.6 27.5-22.3 47.7-10.4 24.3-7.5 45.4 6.8 57.9 3.9 3.4 9.1 5.9 15.5 7.4V12z"
        fill="#47A248"
      />
      <path
        d="M64 12c2.3 8.2 13.6 27.5 22.3 47.7 10.4 24.3 7.5 45.4-6.8 57.9-3.9 3.4-9.1 5.9-15.5 7.4V12z"
        fill="#5BBF5C"
      />
      <path
        d="M64 125c-.2-.5-.5-1.1-.7-1.7-1.1-2.9-1.3-6.1-.6-9.1.7-3.1 2.3-5.9 4.6-8.1.4.6.7 1.2.9 1.8 1.1 2.9 1.3 6.1.6 9.1-.8 3.1-2.4 5.9-4.8 8z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

function PostgresIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        d="M64 14C36.4 14 14 36.4 14 64c0 19.3 11 36.1 27.2 44.5 1.5-6.5 2.8-13.8 3.8-21.7-7-1.8-12-8.2-12-15.8 0-9 7.3-16.3 16.3-16.3 4.2 0 8.1 1.6 11 4.2 4.4-4.8 10.7-7.9 17.7-7.9 5.2 0 10 1.7 13.9 4.6 2.6-3 6.4-4.9 10.8-4.9 7.9 0 14.3 6.4 14.3 14.3 0 7.1-5.1 13-11.9 14.1 1.2 8.4 2.7 16.2 4.4 23.1C103 99.8 114 83.2 114 64c0-27.6-22.4-50-50-50z"
        fill="#336791"
      />
      <circle cx="53" cy="59" r="4.5" fill="#ffffff" />
      <circle cx="75" cy="59" r="4.5" fill="#ffffff" />
      <path d="M48 82c5-3 10-4 16-4s11 1 16 4" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function TailwindIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        d="M32 48c4-8 10-12 18-12 12 0 15 9 22 10 7 1 12-4 16-10-4 8-10 12-18 12-12 0-15-9-22-10-7-1-12 4-16 10zm-16 32c4-8 10-12 18-12 12 0 15 9 22 10 7 1 12-4 16-10-4 8-10 12-18 12-12 0-15-9-22-10-7-1-12 4-16 10z"
        fill="#38BDF8"
      />
    </svg>
  )
}

function ReduxIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <g fill="#764ABC">
        <path d="M64 20c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-30.8 17.8c-4.4 0-8 3.6-8 8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-4.4-3.6-8-8-8zm61.6 0c-4.4 0-8 3.6-8 8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-4.4-3.6-8-8-8zm-46.2 46.2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm30.8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
        <ellipse cx="64" cy="64" rx="34" ry="16" fill="none" stroke="#764ABC" strokeWidth="4" transform="rotate(-30 64 64)" />
        <ellipse cx="64" cy="64" rx="34" ry="16" fill="none" stroke="#764ABC" strokeWidth="4" transform="rotate(30 64 64)" />
        <ellipse cx="64" cy="64" rx="34" ry="16" fill="none" stroke="#764ABC" strokeWidth="4" transform="rotate(90 64 64)" />
      </g>
    </svg>
  )
}

function GitIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        d="M123.6 57.5L70.5 4.4c-3.2-3.2-8.4-3.2-11.6 0L47.3 16c4.3 2.6 7.4 7 8.3 12.2 4.8 1.9 8.2 6.5 8.3 11.9 0 1.2-.2 2.3-.5 3.4l16.1 16.1c1.1-.3 2.2-.5 3.4-.5 7.1 0 12.8 5.7 12.8 12.8s-5.7 12.8-12.8 12.8-12.8-5.7-12.8-12.8c0-1.2.2-2.3.5-3.4L55 52.4c-1.1.3-2.2.5-3.4.5-4.5 0-8.5-2.4-10.8-6l-20 20c-3.2 3.2-3.2 8.4 0 11.6l53.1 53.1c3.2 3.2 8.4 3.2 11.6 0l53.1-53.1c3.2-3.2 3.2-8.4 0-11.6z"
        fill="#F05032"
      />
      <circle cx="51.6" cy="38.7" r="7.7" fill="#ffffff" />
      <circle cx="83.1" cy="71.9" r="7.7" fill="#ffffff" />
      <path d="M51.6 44v34.4" stroke="#ffffff" strokeWidth="5.5" />
      <circle cx="51.6" cy="85.4" r="7.7" fill="#ffffff" />
    </svg>
  )
}

function DockerIcon({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path
        d="M120.5 56.4c-1.6-.9-10.5-5.3-21.7-2.3-1.6-4.9-5-9.2-9.6-12.2l-2.4 2.1c4.5 3.8 6.9 8.5 7.3 14.1-1.3.8-3.4 1.8-6.1 2.3H5.9c-2.4 8.7-.3 23.9 9.8 33.3 11.4 10.6 28.5 13.5 52.8 13.5 38.6 0 54.4-16.7 57.3-36.2 3.8-2 6.6-5.8 7.2-9.9l-12.5-4.7z"
        fill="#2496ED"
      />
      <g fill="#2496ED">
        <rect x="18" y="47" width="10" height="9" rx="1.5" />
        <rect x="31" y="47" width="10" height="9" rx="1.5" />
        <rect x="44" y="47" width="10" height="9" rx="1.5" />
        <rect x="57" y="47" width="10" height="9" rx="1.5" />
        <rect x="70" y="47" width="10" height="9" rx="1.5" />
        <rect x="31" y="35" width="10" height="9" rx="1.5" />
        <rect x="44" y="35" width="10" height="9" rx="1.5" />
        <rect x="57" y="35" width="10" height="9" rx="1.5" />
        <rect x="44" y="23" width="10" height="9" rx="1.5" />
      </g>
    </svg>
  )
}

gsap.registerPlugin(ScrollTrigger)

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'MERN Stack' },
  { id: 'work', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

// 12 Curated Professional Color Palettes (Default is Sage & Gold requested by user)
const PALETTES = [
  {
    id: 'sage-gold',
    name: 'Sage & Gold (Default)',
    primary: '#8FA28A',
    secondary: '#C7D3C0',
    baseLight: '#F7F4ED',
    gold: '#C8A96B',
  },
  {
    id: 'emerald-mint',
    name: 'Emerald & Mint',
    primary: '#059669',
    secondary: '#6EE7B7',
    baseLight: '#F0FDF4',
    gold: '#F59E0B',
  },
  {
    id: 'ocean-blue',
    name: 'Ocean & Sky',
    primary: '#2563EB',
    secondary: '#93C5FD',
    baseLight: '#F0F9FF',
    gold: '#D97706',
  },
  {
    id: 'indigo-electric',
    name: 'Indigo & Electric',
    primary: '#6366F1',
    secondary: '#A5B4FC',
    baseLight: '#EEF2FF',
    gold: '#F59E0B',
  },
  {
    id: 'royal-purple',
    name: 'Royal Purple',
    primary: '#7C3AED',
    secondary: '#C4B5FD',
    baseLight: '#FAF5FF',
    gold: '#F59E0B',
  },
  {
    id: 'teal-cyan',
    name: 'Teal & Cyan',
    primary: '#0D9488',
    secondary: '#5EEAD4',
    baseLight: '#F0FDFA',
    gold: '#EA580C',
  },
  {
    id: 'rose-blush',
    name: 'Rose & Champagne',
    primary: '#E11D48',
    secondary: '#FDA4AF',
    baseLight: '#FFF1F2',
    gold: '#D97706',
  },
  {
    id: 'warm-amber',
    name: 'Amber & Bronze',
    primary: '#D97706',
    secondary: '#FDE68A',
    baseLight: '#FFFBEB',
    gold: '#B45309',
  },
  {
    id: 'olive-lime',
    name: 'Olive & Sand',
    primary: '#65A30D',
    secondary: '#BEF264',
    baseLight: '#FEFCE8',
    gold: '#CA8A04',
  },
  {
    id: 'terracotta',
    name: 'Terracotta & Rust',
    primary: '#C2410C',
    secondary: '#FDBA74',
    baseLight: '#FFF7ED',
    gold: '#B45309',
  },
  {
    id: 'slate-blue',
    name: 'Slate & Silver',
    primary: '#475569',
    secondary: '#CBD5E1',
    baseLight: '#F8FAFC',
    gold: '#3B82F6',
  },
  {
    id: 'obsidian',
    name: 'Obsidian Minimal',
    primary: '#27272A',
    secondary: '#A1A1AA',
    baseLight: '#F4F4F5',
    gold: '#71717A',
  },
]

const MERN_PILLARS = [
  {
    name: 'MongoDB',
    icon: MongoIcon,
    brandColor: '#47A248',
    glowColor: 'rgba(71, 162, 72, 0.35)',
    title: 'NoSQL Database & Modeling',
    description: 'Document-oriented database with flexible JSON schemas, Mongoose ODM, complex aggregations, and MongoDB Atlas cloud deployment.',
    skills: ['Mongoose ODM', 'Aggregation Pipelines', 'Schema Validation', 'Atlas Cluster', 'Data Indexing'],
  },
  {
    name: 'Express.js',
    icon: ExpressIcon,
    brandColor: 'var(--palette-gold)',
    glowColor: 'rgba(200, 169, 107, 0.35)',
    title: 'Fast RESTful API Architecture',
    description: 'Minimalist web framework building scalable REST APIs, secure middleware pipelines, JWT auth, and structured error handling.',
    skills: ['RESTful Routing', 'JWT & bcrypt Auth', 'Middleware Chaining', 'CORS & Security', 'Validation'],
  },
  {
    name: 'React.js',
    icon: ReactIcon,
    brandColor: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.35)',
    title: 'Interactive User Interfaces',
    description: 'Modern component-driven SPAs with React hooks, context state management, responsive design, and fluid GSAP micro-animations.',
    skills: ['Hooks & Custom Hooks', 'Context API', 'GSAP Animation', 'Component Architecture', 'Tailwind / CSS3'],
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
    brandColor: '#5FA04E',
    glowColor: 'rgba(95, 160, 78, 0.35)',
    title: 'Asynchronous Server Runtime',
    description: 'Event-driven, non-blocking I/O runtime executing backend logic, file processing, REST servers, and third-party API integrations.',
    skills: ['Async/Await & Streams', 'NPM Ecosystem', 'Environment Config', 'Modular Architecture', 'API Services'],
  },
]

// 12 Authentic Technologies Grid matching Image 3
const TECH_GRID_ITEMS = [
  { name: 'React', icon: ReactIcon, glowColor: 'rgba(97, 218, 251, 0.4)' },
  { name: 'Next.js', icon: NextjsIcon, glowColor: 'rgba(255, 255, 255, 0.3)' },
  { name: 'TypeScript', icon: TypeScriptIcon, glowColor: 'rgba(49, 120, 198, 0.4)' },
  { name: 'JavaScript', icon: JavaScriptIcon, glowColor: 'rgba(247, 223, 30, 0.4)' },
  { name: 'Node.js', icon: NodejsIcon, glowColor: 'rgba(95, 160, 78, 0.4)' },
  { name: 'Express', icon: ExpressIcon, glowColor: 'rgba(200, 200, 200, 0.3)' },
  { name: 'MongoDB', icon: MongoIcon, glowColor: 'rgba(71, 162, 72, 0.4)' },
  { name: 'PostgreSQL', icon: PostgresIcon, glowColor: 'rgba(51, 103, 145, 0.4)' },
  { name: 'Tailwind CSS', icon: TailwindIcon, glowColor: 'rgba(56, 189, 248, 0.4)' },
  { name: 'Redux', icon: ReduxIcon, glowColor: 'rgba(118, 74, 188, 0.4)' },
  { name: 'Git', icon: GitIcon, glowColor: 'rgba(240, 80, 50, 0.4)' },
  { name: 'Docker', icon: DockerIcon, glowColor: 'rgba(36, 150, 237, 0.4)' },
]

// All "Mastery" replaced with "Proficient" as requested
const SKILLS_MATRIX = [
  { name: 'React.js (v18+)', category: 'frontend', level: 'Advanced', icon: ReactIcon },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Advanced', icon: JavaScriptIcon },
  { name: 'TypeScript', category: 'frontend', level: 'Proficient', icon: TypeScriptIcon },
  { name: 'Next.js', category: 'frontend', level: 'Proficient', icon: NextjsIcon },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Proficient', icon: TailwindIcon },
  { name: 'Redux State', category: 'frontend', level: 'Proficient', icon: ReduxIcon },
  { name: 'HTML5 & CSS3', category: 'frontend', level: 'Proficient', icon: Layers },
  { name: 'Bootstrap 5', category: 'frontend', level: 'Advanced', icon: Layers },
  { name: 'GSAP Animation', category: 'frontend', level: 'Advanced', icon: Sparkles },
  { name: 'Responsive Design', category: 'frontend', level: 'Proficient', icon: Monitor },
  { name: 'Node.js Runtime', category: 'backend', level: 'Proficient', icon: NodejsIcon },
  { name: 'Express.js APIs', category: 'backend', level: 'Proficient', icon: ExpressIcon },
  { name: 'RESTful API Design', category: 'backend', level: 'Advanced', icon: Cpu },
  { name: 'JWT & Authentication', category: 'backend', level: 'Proficient', icon: CheckCircle2 },
  { name: 'MongoDB & Mongoose', category: 'database', level: 'Proficient', icon: MongoIcon },
  { name: 'PostgreSQL Database', category: 'database', level: 'Proficient', icon: PostgresIcon },
  { name: 'SQLite Database', category: 'database', level: 'Proficient', icon: Database },
  { name: 'Prisma ORM', category: 'database', level: 'Familiar', icon: Database },
  { name: 'Docker Containers', category: 'tools', level: 'Proficient', icon: DockerIcon },
  { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: GitIcon },
  { name: 'Electron.js (Desktop)', category: 'tools', level: 'Proficient', icon: Monitor },
  { name: 'Postman API Testing', category: 'tools', level: 'Proficient', icon: Terminal },
  { name: 'Vite & Build Tools', category: 'tools', level: 'Advanced', icon: Cpu },
  { name: 'Graphic Design', category: 'creative', level: '1+ Year Studio', icon: Palette },
  { name: 'Video Editing', category: 'creative', level: '100+ Projects', icon: Video },
]

const MARQUEE_ITEMS = [
  'MongoDB',
  'Express.js',
  'React.js',
  'Node.js',
  'JavaScript ES6+',
  'REST APIs',
  'GSAP Animation',
  'Tailwind CSS',
  'SQLite & Prisma',
  'Electron Desktop Apps',
  'JWT Authentication',
  'UI/UX Design',
  'Prozila Studio',
  'Saylani Mass IT',
]

const WORDS = [
  'Full-Stack MERN Developer',
  'React & Node.js Engineer',
  'GSAP UI Animator',
  'Desktop App Builder (Electron)',
  'Creative Visual Designer',
]

const STATS = [
  { num: 6, suffix: '+', label: 'Production Projects Delivered' },
  { num: 1, suffix: '+', label: 'Year Studio Design Experience' },
  { num: 100, suffix: '+', label: 'Creative & Video Deliverables' },
  { num: 90, suffix: '%', label: 'Client Engagement Lift (Prozila)' },
]

const PROJECTS = [
  {
    title: 'D.I. Khan Health Finder',
    subtitle: 'Healthcare Directory & Emergency Portal',
    badge: 'Full-Stack · Live Web App',
    bannerClass: 'banner-p0',
    image: 'health-finder.jpg',
    description:
      'A modern full-stack healthcare directory and emergency locator engineered for Dera Ismail Khan, connecting citizens with verified doctors, clinics, emergency facilities, and blood donor contacts.',
    features: [
      'Verified doctor & clinic directory with specialty search & clinic timings',
      'Emergency service locator for ambulances, 24/7 pharmacies, & ER units',
      'Direct dial action and location directions for emergency patient care',
      'Fast responsive search and filtering built with React & modern web APIs',
    ],
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'REST APIs', 'Vercel'],
    github: 'https://github.com/luqmanwazir06',
    demo: 'https://d-i-khan-health-finder.vercel.app/',
  },
  {
    title: 'Clinic Management System',
    subtitle: 'Desktop EHR & Automated Billing',
    badge: 'Desktop App · Offline First',
    bannerClass: 'banner-p1',
    image: 'clinic-system.jpg',
    description:
      'A robust, 100% offline desktop application engineered for healthcare clinics and doctors to manage daily operations securely without relying on continuous internet connectivity.',
    features: [
      'Multi-role Role-Based Access Control (Admin, Receptionist, Doctor)',
      'Patient electronic medical records, visit logs, and appointments',
      'Digital prescription composer with automatic branded PDF export',
      'Local persistence with SQLite database & Prisma ORM',
    ],
    tags: ['Electron.js', 'React.js', 'SQLite', 'Prisma ORM', 'Tailwind CSS'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
  {
    title: 'Restaurant Management & POS Suite',
    subtitle: 'Point-of-Sale & Live Kitchen Ops',
    badge: 'Full-Stack · Multi-Channel',
    bannerClass: 'banner-p2',
    image: 'restaurant-pos.jpg',
    description:
      'An end-to-end multi-module point-of-sale and restaurant administration suite supporting dine-in, takeaway, and delivery operations with synchronized kitchen workflows.',
    features: [
      '15 integrated modules: billing, inventory, table management & reports',
      'Kitchen Display System (KDS) & instant receipt generation',
      'Multi-lingual localization with support for English, Urdu, and Pashto',
      'Cross-platform accessibility: desktop application + mobile version',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'SQLite', 'REST APIs'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
  {
    title: 'Amazon E-Commerce Platform',
    subtitle: 'High-Fidelity Storefront & Cart',
    badge: 'Frontend · Responsive Web',
    bannerClass: 'banner-p3',
    image: 'amazon-clone.jpg',
    description:
      'A responsive e-commerce web platform inspired by Amazon featuring dynamic product categorization, cart state management, and modern fluid component styling.',
    features: [
      'Dynamic product showcase grids with multi-level category filters',
      'Shopping cart state management with real-time subtotal calculations',
      'Pixel-perfect responsive layout optimized across mobile, tablet, & desktop',
      'Clean interactive UI with modern drawer navigation and micro-animations',
    ],
    tags: ['React.js', 'JavaScript ES6+', 'HTML5', 'Bootstrap 5', 'GSAP'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
  {
    title: 'Prozila Creative Agency Platform',
    subtitle: 'Branding & Digital Showcase',
    badge: 'Full-Stack · Agency UI',
    bannerClass: 'banner-p4',
    image: 'prozila-agency.jpg',
    description:
      'A modern visual portfolio and digital agency platform engineered for Prozila Studio, featuring case study deep-dives, video showcases, and client conversion funnels.',
    features: [
      'Interactive client case studies with high-fidelity visual showcases',
      'Video reel presentation with fluid GSAP micro-animations',
      'Direct WhatsApp & Web3Forms consultation pipeline',
      'Engaging responsive design driving 90% client engagement growth',
    ],
    tags: ['React.js', 'GSAP Animation', 'Tailwind CSS', 'UI/UX Design'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
  {
    title: 'Saylani Mass IT Developer Hub',
    subtitle: 'LMS & Developer Learning Portal',
    badge: 'MERN Stack · LMS Platform',
    bannerClass: 'banner-p5',
    image: 'saylani-portal.jpg',
    description:
      'A collaborative learning management and student assignment portal engineered for Saylani Web Development batches, featuring course tracks, code reviews, and student progress metrics.',
    features: [
      'Student & instructor role-based dashboards with secure JWT auth',
      'Assignment submission pipeline with automated deadline validation',
      'Resource hub for JavaScript, React, Express, & MongoDB study tracks',
      'Scalable MongoDB database schemas and Express.js REST APIs',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
    github: 'https://github.com/luqmanwazir06',
    demo: null,
  },
]

const SERVICES = [
  {
    icon: Code2,
    title: 'Full-Stack MERN Web Apps',
    desc: 'Engineering complete, responsive web applications with React on the client, Express and Node.js on the server, and MongoDB for flexible database architecture.',
  },
  {
    icon: Server,
    title: 'REST API & Backend Architecture',
    desc: 'Designing clean, documented RESTful APIs with JWT authentication, role-based authorization, database schemas, and structured error handling.',
  },
  {
    icon: Monitor,
    title: 'Desktop & Offline Software',
    desc: 'Building cross-platform desktop applications utilizing Electron and SQLite for clinic, POS, and business environments where 100% offline uptime is required.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design & GSAP Motion',
    desc: 'Creating pixel-perfect, interactive interfaces with smooth GSAP animations and studio-grade visual polish backed by professional design experience.',
  },
]

const JOURNEY = [
  {
    period: '2024 — 2028',
    role: 'BS Computer Science',
    org: 'Govt. Degree College No. 1, Dera Ismail Khan',
    desc: 'Undergraduate studies focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering principles.',
    icon: GraduationCap,
  },
  {
    period: 'Feb 2025 · 1 Year',
    role: 'Graphic & Visual Designer',
    org: 'Prozila Studio — Dera Ismail Khan',
    desc: 'Executed end-to-end visual branding, client marketing assets, and user interface designs. Spearheaded a comprehensive client redesign that lifted brand engagement by 90%.',
    icon: Briefcase,
  },
  {
    period: 'Training Course',
    role: 'Full-Stack Web Development',
    org: 'Saylani Mass IT Training (SMIT)',
    desc: 'Intensive front-end and full-stack curriculum covering modern JavaScript, responsive interfaces, state management, and web engineering best practices.',
    icon: Award,
  },
  {
    period: '2022 — 2024',
    role: 'FSc Pre-Medical (981 / 1200)',
    org: 'Ummah Children Academy, Nowshera',
    desc: 'Graduated with high academic distinction (981/1200). Complementary credentials include a formal Diploma in Information Technology (DIT) and Matriculation (849/1100).',
    icon: GraduationCap,
  },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', value: 'luqmanwazir06', href: 'https://github.com/luqmanwazir06', icon: GithubIcon },
  { label: 'LinkedIn', value: 'luqman06', href: 'https://www.linkedin.com/in/luqman06', icon: LinkedinIcon },
  { label: 'WhatsApp', value: '+92 345 0541641', href: 'https://wa.me/923450541641', icon: MessageCircle },
  { label: 'Instagram', value: '@luqmanwazir.69', href: 'https://www.instagram.com/luqmanwazir.69', icon: InstagramIcon },
  { label: 'X (Twitter)', value: '@luqmanwazir.69', href: 'https://x.com/luqmanwazir.69', icon: XTwitterIcon },
  { label: 'Email', value: 'meluqman06@gmail.com', href: 'mailto:meluqman06@gmail.com', icon: Mail },
]

export default function App() {
  // Theme defaults to 'light' (white) as requested!
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [selectedPalette, setSelectedPalette] = useState(
    () => localStorage.getItem('portfolio-palette') || 'sage-gold'
  )
  const [paletteMenuOpen, setPaletteMenuOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [terminalTab, setTerminalTab] = useState('luqman.js')
  const [skillCategory, setSkillCategory] = useState('all')
  const [certCategory, setCertCategory] = useState('all')
  const [activeModalCert, setActiveModalCert] = useState(null)
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [contactStatus, setContactStatus] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const toastTimeoutRef = useRef(null)
  const palettePickerRef = useRef(null)

  // Typing animation state
  const [typedText, setTypedText] = useState(WORDS[0])

  // Synchronize theme with DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Apply color palette
  const applyPalette = (pal) => {
    setSelectedPalette(pal.id)
    localStorage.setItem('portfolio-palette', pal.id)
    const root = document.documentElement
    root.style.setProperty('--palette-primary', pal.primary)
    root.style.setProperty('--palette-secondary', pal.secondary)
    root.style.setProperty('--palette-base-light', pal.baseLight)
    root.style.setProperty('--palette-gold', pal.gold)
    showToast(`Palette switched to ${pal.name}`)
  }

  // Load saved palette on mount
  useEffect(() => {
    const savedId = localStorage.getItem('portfolio-palette') || 'sage-gold'
    const found = PALETTES.find((p) => p.id === savedId) || PALETTES[0]
    const root = document.documentElement
    root.style.setProperty('--palette-primary', found.primary)
    root.style.setProperty('--palette-secondary', found.secondary)
    root.style.setProperty('--palette-base-light', found.baseLight)
    root.style.setProperty('--palette-gold', found.gold)
  }, [])

  // Close palette dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (palettePickerRef.current && !palettePickerRef.current.contains(e.target)) {
        setPaletteMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalCert(null)
        setCvModalOpen(false)
        setPaletteMenuOpen(false)
        setNavOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])


  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const showToast = (msg) => {
    setToastMessage(msg)
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage('')
    }, 3200)
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard?.writeText(text).then(
      () => showToast(`${label} copied to clipboard!`),
      () => showToast(`Copied: ${text}`)
    )
  }

  // Typing effect
  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timer

    const tick = () => {
      const currentWord = WORDS[wordIndex]
      if (!isDeleting) {
        charIndex++
        setTypedText(currentWord.slice(0, charIndex))
        if (charIndex === currentWord.length) {
          isDeleting = true
          timer = setTimeout(tick, 1800)
          return
        }
      } else {
        charIndex--
        setTypedText(currentWord.slice(0, charIndex))
        if (charIndex === 0) {
          isDeleting = false
          wordIndex = (wordIndex + 1) % WORDS.length
        }
      }
      timer = setTimeout(tick, isDeleting ? 40 : 80)
    }

    timer = setTimeout(tick, 1000)
    return () => clearTimeout(timer)
  }, [])

  // GSAP animations and ScrollTrigger
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero element reveals
      gsap.from('.hero-reveal', {
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
      })

      // Terminal entrance
      gsap.from('.code-window', {
        scale: 0.9,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.35,
      })

      // Scroll Progress Bar
      gsap.to('#scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      })

      // Marquee continuous loop with scroll acceleration
      const marqueeTween = gsap.to('.marquee-track', {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      })

      ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity()) / 250
          marqueeTween.timeScale(1 + velocity)
          gsap.to(marqueeTween, { timeScale: 1, duration: 0.8, delay: 0.1, overwrite: true })
        },
      })

      // Staggered reveals for cards
      const sections = document.querySelectorAll('.fade-section')
      sections.forEach((sec) => {
        gsap.from(sec.querySelectorAll('.fade-item'), {
          y: 40,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            once: true,
          },
        })
      })

      // Timeline vertical bar fill
      gsap.to('.timeline-progress-bar', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 75%',
          end: 'bottom 75%',
          scrub: true,
        },
      })
    })

    // Active nav indicator on scroll
    const navAnchors = document.querySelectorAll('.nav-links a')
    NAV_ITEMS.forEach((item, index) => {
      const el = document.getElementById(item.id)
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => {
            if (self.isActive) {
              navAnchors.forEach((a, k) => a.classList.toggle('active', k === index))
            }
          },
        })
      }
    })

    return () => {
      mm.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Contact form submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    if (!WEB3FORMS_KEY) {
      window.location.href = `mailto:meluqman06@gmail.com?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${name}`
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
      showToast('Opening default mail client...')
      return
    }

    setContactStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Message from ${name}`,
          name,
          email,
          message,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setContactStatus('ok')
        form.reset()
        showToast('Message delivered successfully! I will reply soon.')
      } else {
        setContactStatus('err')
      }
    } catch {
      setContactStatus('err')
    }
  }

  const handleWhatsAppSend = (e) => {
    const form = e.currentTarget.closest('form')
    if (form && !form.reportValidity()) return
    const data = form ? new FormData(form) : null
    const name = data ? data.get('name') : ''
    const email = data ? data.get('email') : ''
    const msg = data ? data.get('message') : ''

    const text = encodeURIComponent(
      `Hello Luqman! I saw your portfolio and would like to connect.\n\nName: ${name}\nEmail: ${email}\n\nProject details:\n${msg}`
    )
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const filteredSkills =
    skillCategory === 'all'
      ? SKILLS_MATRIX
      : SKILLS_MATRIX.filter((s) => s.category === skillCategory)

  const filteredCerts =
    certCategory === 'all' ? CERTS : CERTS.filter((c) => c.category === certCategory)

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" aria-hidden="true" />

      {/* Atmospheric Background */}
      <div className="bg-ambient" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-ambient-blob blob-1" />
        <div className="bg-ambient-blob blob-2" />
        <div className="bg-ambient-blob blob-3" />
      </div>

      {/* Floating Header Navbar */}
      <header>
        <nav className={`navbar ${navOpen ? 'open-mobile' : ''}`} aria-label="Main navigation">
          <a href="#home" className="nav-brand" onClick={() => setNavOpen(false)}>
            <div className="brand-badge">ML</div>
            <span>
              <strong className="brand-name">Luqman</strong>
              <small className="brand-role">MERN Developer</small>
            </span>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setNavOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-mobile-cv-item">
              <button
                type="button"
                className="nav-mobile-cv-btn"
                onClick={() => {
                  setNavOpen(false)
                  setCvModalOpen(true)
                }}
              >
                <FileText size={15} />
                <span>Resume / CV</span>
              </button>
            </li>
          </ul>

          <div className="nav-actions">
            {/* Palette Switcher Button & Dropdown */}
            <div className="palette-picker-container" ref={palettePickerRef}>
              <button
                className="palette-toggle-btn"
                type="button"
                onClick={() => setPaletteMenuOpen(!paletteMenuOpen)}
                aria-label="Change color theme palette"
                title="Change color theme palette"
              >
                <Palette size={18} />
              </button>

              {paletteMenuOpen && (
                <div className="palette-dropdown-panel" role="menu">
                  <div className="palette-dropdown-head">
                    <strong>Theme Color Palettes</strong>
                    <span>{PALETTES.length} Presets</span>
                  </div>
                  <div className="palette-grid">
                    {PALETTES.map((pal) => (
                      <button
                        key={pal.id}
                        type="button"
                        className={`palette-card-item ${
                          selectedPalette === pal.id ? 'active' : ''
                        }`}
                        onClick={() => {
                          applyPalette(pal)
                          setPaletteMenuOpen(false)
                        }}
                      >
                        <div className="palette-dots-row">
                          <span
                            className="palette-mini-dot"
                            style={{ backgroundColor: pal.primary }}
                            title="Primary"
                          />
                          <span
                            className="palette-mini-dot"
                            style={{ backgroundColor: pal.secondary }}
                            title="Secondary"
                          />
                          <span
                            className="palette-mini-dot"
                            style={{ backgroundColor: pal.baseLight }}
                            title="Base Light"
                          />
                          <span
                            className="palette-mini-dot"
                            style={{ backgroundColor: pal.gold }}
                            title="Gold Accent"
                          />
                        </div>
                        <span className="palette-item-name">{pal.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CV View / Download Button */}
            <button
              type="button"
              className="nav-cv-btn"
              onClick={() => setCvModalOpen(true)}
              title="View & Download Muhammad Luqman's CV"
            >
              <FileText size={15} />
              <span>CV</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              className="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a href="#contact" className="nav-cta-btn">
              <span>Let's Talk</span>
              <ChevronRight size={15} />
            </a>

            <button
              className="nav-burger"
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? <X size={20} /> : <Compass size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      {navOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="hero" id="home">
          <div className="wrap hero-grid">
            <div className="hero-content">
              {/* Removed status pill badge as requested */}

              <h1 className="hero-reveal">
                Hi, I'm <span className="gradient-text">Muhammad Luqman</span>
              </h1>

              <div className="hero-reveal hero-typing-box">
                <span className="typing-text">&gt; {typedText}</span>
                <span className="typing-cursor" />
              </div>

              <p className="hero-reveal hero-bio">
                Passionate <strong>MERN Stack Developer</strong> &amp; Computer Science undergraduate
                from Dera Ismail Khan, Pakistan. I architect scalable full-stack web platforms,
                high-performance RESTful APIs, and responsive digital products with pixel-perfect GSAP animations.
              </p>

              <div className="hero-reveal hero-cta-group">
                <a href="#work" className="btn btn-primary">
                  <span>Explore Projects</span>
                  <ArrowUpRight size={18} />
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setCvModalOpen(true)}
                  title="View Muhammad Luqman's CV / Resume"
                >
                  <FileText size={18} color="var(--palette-primary)" />
                  <span>View CV</span>
                </button>
                <a href="#contact" className="btn btn-outline">
                  <Mail size={16} />
                  <span>Get In Touch</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() =>
                    copyToClipboard('meluqman06@gmail.com', 'Developer Email')
                  }
                  title="Copy email address"
                >
                  <Copy size={16} />
                  <span>Copy Email</span>
                </button>
              </div>

              <div className="hero-reveal hero-tags">
                <span>
                  <CheckCircle2 size={15} color="var(--palette-primary)" /> BS Computer Science (2024-2028)
                </span>
                <span>
                  <CheckCircle2 size={15} color="var(--palette-gold)" /> Saylani Mass IT Certified
                </span>
                <span>
                  <CheckCircle2 size={15} color="var(--palette-primary)" /> 1+ Yr Design at Prozila
                </span>
              </div>
            </div>

            {/* Interactive Code Terminal Sandbox */}
            <div className="hero-visual">
              <div className="code-window">
                <div className="code-window-bar">
                  <div className="window-dots">
                    <span className="window-dot dot-red" />
                    <span className="window-dot dot-yellow" />
                    <span className="window-dot dot-green" />
                  </div>
                  <div className="window-tabs">
                    <span
                      className={`window-tab ${terminalTab === 'luqman.js' ? 'active' : ''}`}
                      onClick={() => setTerminalTab('luqman.js')}
                    >
                      Luqman.js
                    </span>
                    <span
                      className={`window-tab ${terminalTab === 'stack.json' ? 'active' : ''}`}
                      onClick={() => setTerminalTab('stack.json')}
                    >
                      Stack.json
                    </span>
                    <span
                      className={`window-tab ${terminalTab === 'system.sh' ? 'active' : ''}`}
                      onClick={() => setTerminalTab('system.sh')}
                    >
                      terminal.sh
                    </span>
                  </div>
                  <div className="window-badge">
                    <span>● online</span>
                  </div>
                </div>

                <div className="code-window-body">
                  {terminalTab === 'luqman.js' && (
                    <>
                      <div className="code-line">
                        <span className="line-no">1</span>
                        <span>
                          <span className="token-keyword">const</span>{' '}
                          <span className="token-var">developer</span> = &#123;
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">2</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">name</span>:{' '}
                          <span className="token-string">'Muhammad Luqman'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">3</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">role</span>:{' '}
                          <span className="token-string">'Full-Stack MERN Developer'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">4</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">location</span>:{' '}
                          <span className="token-string">'Dera Ismail Khan, Pakistan'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">5</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">coreStack</span>: [
                          <span className="token-string">'MongoDB'</span>,{' '}
                          <span className="token-string">'Express'</span>,{' '}
                          <span className="token-string">'React'</span>,{' '}
                          <span className="token-string">'Node.js'</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">6</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">desktopStack</span>: [
                          <span className="token-string">'Electron.js'</span>,{' '}
                          <span className="token-string">'SQLite'</span>,{' '}
                          <span className="token-string">'Prisma'</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">7</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">passion</span>:{' '}
                          <span className="token-string">'Building high-performance software'</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">8</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">openForWork</span>:{' '}
                          <span className="token-keyword">true</span>,
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">9</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-fn">contact</span>() &#123;
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">10</span>
                        <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="token-keyword">return</span>{' '}
                          <span className="token-string">'meluqman06@gmail.com'</span>;
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">11</span>
                        <span>&nbsp;&nbsp;&#125;</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">12</span>
                        <span>&#125;;</span>
                      </div>
                    </>
                  )}

                  {terminalTab === 'stack.json' && (
                    <>
                      <div className="code-line">
                        <span className="line-no">1</span>
                        <span>&#123;</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">2</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"database"</span>: [
                          <span className="token-string">"MongoDB Atlas"</span>,{' '}
                          <span className="token-string">"Mongoose"</span>,{' '}
                          <span className="token-string">"SQLite"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">3</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"backend"</span>: [
                          <span className="token-string">"Node.js"</span>,{' '}
                          <span className="token-string">"Express.js"</span>,{' '}
                          <span className="token-string">"JWT Auth"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">4</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"frontend"</span>: [
                          <span className="token-string">"React 18"</span>,{' '}
                          <span className="token-string">"Tailwind CSS"</span>,{' '}
                          <span className="token-string">"GSAP"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">5</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"desktop"</span>: [
                          <span className="token-string">"Electron.js"</span>,{' '}
                          <span className="token-string">"Prisma ORM"</span>],
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">6</span>
                        <span>
                          &nbsp;&nbsp;<span className="token-property">"languages"</span>: [
                          <span className="token-string">"Pashto"</span>,{' '}
                          <span className="token-string">"Urdu"</span>,{' '}
                          <span className="token-string">"English"</span>,{' '}
                          <span className="token-string">"Saraiki"</span>]
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">7</span>
                        <span>&#125;</span>
                      </div>
                    </>
                  )}

                  {terminalTab === 'system.sh' && (
                    <>
                      <div className="code-line">
                        <span className="line-no">1</span>
                        <span>
                          <span className="token-comment"># Initializing MERN developer profile</span>
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">2</span>
                        <span>
                          <span className="token-keyword">$</span> whoami
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">3</span>
                        <span className="token-string">&gt; Muhammad Luqman (Full-Stack Engineer)</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">4</span>
                        <span>
                          <span className="token-keyword">$</span> git status
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">5</span>
                        <span className="token-string">&gt; On branch main. Ready to ship production code!</span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">6</span>
                        <span>
                          <span className="token-keyword">$</span> npm run build
                        </span>
                      </div>
                      <div className="code-line">
                        <span className="line-no">7</span>
                        <span className="token-string" style={{ color: 'var(--palette-primary)' }}>
                          &gt; ✓ Compiled successfully in 0.42s (0 errors)
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="code-window-footer">
                  <span className="terminal-indicator">
                    <Terminal size={14} /> Node v20.12.0 · React 18 · Express
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MARQUEE TICKER ================= */}
        <div className="marquee-container" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div className="marquee-item" key={idx}>
                <i>✦</i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <section className="fade-section" id="about">
          <div className="wrap">
            <div className="section-head fade-item">
              {/* Removed "Background & Vision" tag as requested */}
              <h2 className="section-title">
                Full-Stack Precision Meets <span className="gradient-text">Creative Design</span>
              </h2>
              <p className="section-desc">
                Merging deep computer science engineering fundamentals with a refined creative eye to
                build products that are structurally solid and visually delightful.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-text fade-item">
                <p>
                  I am a passionate <strong>MERN Stack Developer</strong> currently pursuing my Bachelor of Science in
                  Computer Science (2024 — 2028) at Govt. Degree College No. 1, Dera Ismail Khan.
                  My engineering journey is driven by solving real-world challenges through clean software architecture,
                  resilient database design, and intuitive user experiences.
                </p>
                <p>
                  Having spent over a full year as a <strong>Graphic &amp; Visual Designer at Prozila Studio</strong>, I bring
                  a rare dual advantage to technical development: I care deeply not just about how robust the backend API is,
                  but equally about typography, accessibility, motion choreography, and high conversion UX.
                </p>

                <div className="about-highlights">
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--palette-primary)" />
                    <span>MERN Architecture &amp; REST APIs</span>
                  </div>
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--palette-gold)" />
                    <span>Offline Desktop Apps (Electron)</span>
                  </div>
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--palette-primary)" />
                    <span>Interactive GSAP Micro-Motion</span>
                  </div>
                  <div className="about-hl-item">
                    <CheckCircle2 size={18} color="var(--palette-gold)" />
                    <span>Multilingual (4 Languages)</span>
                  </div>
                </div>

                <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a href="#contact" className="btn btn-primary">
                    Let's Build Together
                  </a>
                  <a href="#work" className="btn btn-secondary">
                    View Featured Work
                  </a>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="stats-grid fade-item">
                {STATS.map((stat, i) => (
                  <div className="card stat-card" key={i}>
                    <div className="stat-number">
                      {stat.num}
                      {stat.suffix}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= MERN STACK SECTION ================= */}
        <section className="fade-section" id="stack">
          <div className="wrap">
            <div className="section-head fade-item">
              {/* Removed "Core Technology" tag as requested */}
              <h2 className="section-title">
                The <span className="gradient-text">MERN Stack</span> Architecture
              </h2>
              <p className="section-desc">
                End-to-end JavaScript mastery: connecting reactive browser interfaces with high-throughput
                Node.js APIs and scalable document persistence.
              </p>
            </div>

            {/* 4 Pillars of MERN with Real Brand Logos */}
            <div className="mern-hero-grid fade-item">
              {MERN_PILLARS.map((pillar) => {
                const PillarIcon = pillar.icon
                return (
                  <div className="card mern-pillar-card" key={pillar.name}>
                    <div
                      className="mern-real-icon-badge"
                      style={{ boxShadow: `0 0 24px -2px ${pillar.glowColor}` }}
                    >
                      <PillarIcon size={36} />
                    </div>
                    <h3>{pillar.name}</h3>
                    <p>{pillar.description}</p>
                    <ul className="pillar-skills-list">
                      {pillar.skills.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* Core Tech Stack Showcase matching Image 3 */}
            <div className="fade-item tech-grid-wrapper">
              <div className="tech-grid-header">
                <h3>Core Technologies &amp; Ecosystem</h3>
                <p>Official toolchain and production frameworks powering modern applications</p>
              </div>

              <div className="tech-grid">
                {TECH_GRID_ITEMS.map((item) => {
                  const TechIcon = item.icon
                  return (
                    <div
                      className="tech-card-item"
                      key={item.name}
                      style={{ '--glow-color': item.glowColor }}
                    >
                      <div className="tech-card-glow" />
                      <div className="tech-icon-wrap">
                        <TechIcon size={38} />
                      </div>
                      <span className="tech-card-name">{item.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Comprehensive Skills Matrix */}
            <div className="fade-item" style={{ marginTop: '40px' }}>
              <div className="filter-tabs">
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('all')}
                >
                  All Technologies
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'frontend' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('frontend')}
                >
                  Frontend &amp; UI
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'backend' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('backend')}
                >
                  Backend &amp; APIs
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'database' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('database')}
                >
                  Databases
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'tools' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('tools')}
                >
                  Desktop &amp; Tools
                </button>
                <button
                  type="button"
                  className={`filter-tab ${skillCategory === 'creative' ? 'active' : ''}`}
                  onClick={() => setSkillCategory('creative')}
                >
                  Creative &amp; Design
                </button>
              </div>

              <div className="skills-matrix">
                {filteredSkills.map((sk) => {
                  const Icon = sk.icon
                  return (
                    <div className="skill-matrix-item" key={sk.name}>
                      <div className="skill-item-info">
                        <Icon size={18} color="var(--palette-primary)" />
                        <span>{sk.name}</span>
                      </div>
                      <span className="skill-item-level">{sk.level}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section className="fade-section" id="work">
          <div className="wrap">
            <div className="section-head fade-item">
              {/* Removed "Production Portfolio" tag as requested */}
              <h2 className="section-title">
                Featured <span className="gradient-text">Software Projects</span>
              </h2>
              <p className="section-desc">
                Production-grade applications built from architectural design to deployment, solving
                tangible workflow and commerce requirements.
              </p>
            </div>

            <div className="projects-grid fade-item">
              {PROJECTS.map((proj) => (
                <div className="card project-card-clean" key={proj.title}>
                  {/* Clean Visual Image Container matching certificates */}
                  <div className="project-img-container">
                    <img
                      src={`${import.meta.env.BASE_URL}images/projects/${proj.image}`}
                      alt={proj.title}
                      loading="lazy"
                    />
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-floating-pill"
                        title="Open Live Website"
                      >
                        <span className="live-pulse-dot" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <div className="project-info-clean">
                    <div className="project-meta-row">
                      <span className="project-category-pill">{proj.badge}</span>
                      {proj.demo && (
                        <span className="project-live-status-tag">
                          ● Online
                        </span>
                      )}
                    </div>

                    <h3 className="project-clean-title">{proj.title}</h3>
                    <span className="project-clean-subtitle">{proj.subtitle}</span>
                    <p className="project-clean-desc">{proj.description}</p>

                    <ul className="project-feature-list">
                      {proj.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle2 size={15} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="project-tags">
                      {proj.tags.map((t) => (
                        <span className="project-tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="project-card-actions">
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                      {!proj.demo && (
                        <a
                          href="#contact"
                          className="btn btn-outline btn-sm"
                          onClick={() => showToast(`Inquiring about ${proj.title}`)}
                        >
                          <span>Request Demo</span>
                          <ChevronRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-item" style={{ textAlign: 'center', marginTop: '48px' }}>
              <a
                href="https://github.com/luqmanwazir06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={18} />
                <span>Explore More Repositories on GitHub</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="fade-section" id="services">
          <div className="wrap">
            <div className="section-head fade-item">
              {/* Removed "What I Deliver" tag as requested */}
              <h2 className="section-title">
                Comprehensive <span className="gradient-text">Engineering Services</span>
              </h2>
              <p className="section-desc">
                From database modeling and secure RESTful servers to responsive web applications and
                creative visual systems.
              </p>
            </div>

            <div className="services-grid fade-item">
              {SERVICES.map((s, idx) => {
                const Icon = s.icon
                return (
                  <div className="card service-card" key={idx}>
                    <div className="service-icon-box">
                      <Icon size={26} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATES SECTION ================= */}
        <section className="fade-section" id="certificates">
          <div className="wrap">
            <div className="section-head fade-item">
              {/* Removed "Verified Credentials" tag as requested */}
              <h2 className="section-title">
                Certifications &amp; <span className="gradient-text">Achievements</span>
              </h2>
              <p className="section-desc">
                Professional technical training, leadership boot camps, and athletic championships.
                Click on any credential to view the original certificate in high resolution.
              </p>
            </div>

            <div className="fade-item">
              <div className="filter-tabs">
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setCertCategory('all')}
                >
                  All Credentials ({CERTS.length})
                </button>
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'tech' ? 'active' : ''}`}
                  onClick={() => setCertCategory('tech')}
                >
                  Tech &amp; Design
                </button>
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'leadership' ? 'active' : ''}`}
                  onClick={() => setCertCategory('leadership')}
                >
                  Leadership &amp; Community
                </button>
                <button
                  type="button"
                  className={`filter-tab ${certCategory === 'sports' ? 'active' : ''}`}
                  onClick={() => setCertCategory('sports')}
                >
                  Athletics &amp; Sports
                </button>
              </div>

              <div className="certs-grid">
                {filteredCerts.map((cert) => (
                  <div
                    className="card cert-card"
                    key={cert.id}
                    onClick={() => setActiveModalCert(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveModalCert(cert)}
                  >
                    <div className="cert-img-container">
                      <img
                        src={`${import.meta.env.BASE_URL}certificates/${cert.image}`}
                        alt={cert.title}
                        loading="lazy"
                      />
                      <div className="cert-zoom-overlay">
                        <Eye size={28} />
                      </div>
                    </div>

                    <div className="cert-info">
                      <div className="cert-meta">
                        <span>{cert.categoryLabel}</span>
                        {cert.year && <span>{cert.year}</span>}
                      </div>
                      <h3>{cert.title}</h3>
                      <p className="cert-desc">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificate Lightbox Modal */}
        {activeModalCert && (
          <div
            className="modal-backdrop"
            onClick={() => setActiveModalCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalCert(null)}
                aria-label="Close Certificate Preview"
              >
                <X size={20} />
              </button>

              <div className="modal-img-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}certificates/${activeModalCert.image}`}
                  alt={activeModalCert.title}
                />
              </div>

              <div className="modal-body">
                <div className="cert-meta" style={{ marginBottom: '8px' }}>
                  <span>{activeModalCert.categoryLabel}</span>
                  <span>{activeModalCert.year || 'Certified'}</span>
                </div>
                <h3>{activeModalCert.title}</h3>
                <p style={{ color: 'var(--palette-primary)', fontWeight: 600, marginBottom: '10px' }}>
                  Issued by: {activeModalCert.issuer}
                </p>
                <p className="cert-desc">{activeModalCert.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* CV / Resume Lightbox Modal */}
        {cvModalOpen && (
          <div
            className="modal-backdrop cv-modal-backdrop"
            onClick={() => setCvModalOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-content cv-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="cv-modal-header">
                <div className="cv-header-left">
                  <div className="brand-badge" style={{ width: 40, height: 40, fontSize: 14 }}>
                    ML
                  </div>
                  <div>
                    <h3 className="cv-modal-title">Muhammad Luqman — Curriculum Vitae</h3>
                    <small className="cv-modal-subtitle">
                      MERN Stack Developer · BS Computer Science · Dera Ismail Khan
                    </small>
                  </div>
                </div>
                <div className="cv-header-actions">
                  <a
                    href={`${import.meta.env.BASE_URL}cv.png`}
                    download="Muhammad_Luqman_CV.png"
                    className="btn btn-primary btn-sm cv-download-btn"
                    title="Download Muhammad Luqman's CV"
                  >
                    <Download size={15} />
                    <span>Download CV</span>
                  </a>
                  <button
                    type="button"
                    className="cv-close-btn"
                    onClick={() => setCvModalOpen(false)}
                    aria-label="Close CV Preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="cv-modal-body">
                <div className="cv-img-scroll-container">
                  <img
                    src={`${import.meta.env.BASE_URL}cv.png`}
                    alt="Muhammad Luqman Curriculum Vitae"
                    className="cv-lightbox-img"
                  />
                </div>
              </div>

              <div className="cv-modal-footer">
                <div className="cv-footer-meta">
                  <span>📧 meluqman06@gmail.com</span>
                  <span>📱 +92 345 0541641</span>
                  <span>📍 D.I. Khan, KP, Pakistan</span>
                </div>
                <div className="cv-footer-btns">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => copyToClipboard('meluqman06@gmail.com', 'Developer Email')}
                  >
                    <Copy size={13} />
                    <span>Copy Email</span>
                  </button>
                  <a
                    href={`${import.meta.env.BASE_URL}cv.png`}
                    download="Muhammad_Luqman_CV.png"
                    className="btn btn-secondary btn-sm"
                  >
                    <Download size={14} />
                    <span>Save to Device</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= JOURNEY SECTION ================= */}
        <section className="fade-section" id="journey">
          <div className="wrap">
            <div className="section-head fade-item">
              {/* Removed "Career Timeline" tag as requested */}
              <h2 className="section-title">
                Education &amp; <span className="gradient-text">Experience</span>
              </h2>
              <p className="section-desc">
                My academic path in Computer Science, professional studio roles, and development training.
              </p>
            </div>

            <div className="timeline fade-item">
              <div className="timeline-progress-bar" />
              {JOURNEY.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div className="timeline-item" key={idx}>
                    <div className="timeline-dot" />
                    <div className="card timeline-card">
                      <div className="timeline-meta">
                        <Icon size={16} color="var(--palette-primary)" />
                        <span className="timeline-period">{item.period}</span>
                      </div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <div className="timeline-org">{item.org}</div>
                      <p className="timeline-desc">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="fade-section" id="contact">
          <div className="wrap">
            <div className="section-head fade-item">
              {/* Removed "Let's Connect" tag as requested */}
              <h2 className="section-title">
                Have a Project in Mind? <span className="gradient-text">Let's Build It</span>
              </h2>
              <p className="section-desc">
                Whether you need a full-stack MERN application, custom REST API, offline desktop software,
                or UI consultation, send me a message and I'll respond within 24 hours.
              </p>
            </div>

            <div className="contact-grid fade-item">
              {/* Contact Form */}
              <form className="card contact-form" onSubmit={handleEmailSubmit}>
                <div className="form-group">
                  <label htmlFor="user-name">Your Full Name</label>
                  <input
                    id="user-name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="e.g. Alex Johnson"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-email">Email Address</label>
                  <input
                    id="user-email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="e.g. alex@company.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user-message">Project Description &amp; Details</label>
                  <textarea
                    id="user-message"
                    name="message"
                    className="form-control"
                    placeholder="Briefly describe what you would like to build..."
                    required
                  />
                </div>

                <div className="form-buttons">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={contactStatus === 'sending'}
                  >
                    <Send size={16} />
                    <span>{contactStatus === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleWhatsAppSend}
                  >
                    <MessageCircle size={16} color="var(--palette-primary)" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>

                {contactStatus === 'ok' && (
                  <div className="form-status-msg status-ok">
                    <CheckCircle2 size={16} />
                    <span>Message dispatched successfully! Thank you for reaching out.</span>
                  </div>
                )}
                {contactStatus === 'err' && (
                  <div className="form-status-msg status-err">
                    <X size={16} />
                    <span>Could not send form directly. Please use WhatsApp or email directly!</span>
                  </div>
                )}
              </form>

              {/* Direct Connect Info Cards */}
              <div className="contact-info-cards">
                <div className="card info-card">
                  <div className="info-card-left">
                    <div className="info-icon">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="info-label">Direct Email</div>
                      <div className="info-value">meluqman06@gmail.com</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="info-copy-btn"
                    onClick={() => copyToClipboard('meluqman06@gmail.com', 'Email address')}
                    title="Copy Email"
                  >
                    <Copy size={14} />
                    <span>Copy</span>
                  </button>
                </div>

                <div className="card info-card">
                  <div className="info-card-left">
                    <div
                      className="info-icon"
                      style={{ color: 'var(--palette-primary)', background: 'rgba(143,162,138,0.15)' }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="info-label">Phone &amp; WhatsApp</div>
                      <div className="info-value">+92 345 0541641</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="info-copy-btn"
                    onClick={() => copyToClipboard('+923450541641', 'WhatsApp number')}
                    title="Copy WhatsApp"
                  >
                    <Copy size={14} />
                    <span>Copy</span>
                  </button>
                </div>

                <div className="card info-card">
                  <div className="info-card-left">
                    <div
                      className="info-icon"
                      style={{ color: 'var(--palette-gold)', background: 'rgba(200,169,107,0.15)' }}
                    >
                      <Compass size={20} />
                    </div>
                    <div>
                      <div className="info-label">Current Location</div>
                      <div className="info-value">Dera Ismail Khan, KP, Pakistan</div>
                    </div>
                  </div>
                  <span className="skill-item-level" style={{ fontSize: '12px' }}>
                    Open to Remote
                  </span>
                </div>

                {/* Social Channels */}
                <div className="social-links-grid">
                  {SOCIAL_LINKS.map((soc) => {
                    const Icon = soc.icon
                    return (
                      <a
                        key={soc.label}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn"
                        title={soc.label}
                      >
                        <Icon size={20} />
                        <span>{soc.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="main-footer">
        <div className="wrap">
          <div className="footer-content">
            <div className="footer-left">
              <span className="footer-brand">Muhammad Luqman</span>
              <p>Full-Stack MERN Developer · Dera Ismail Khan, Pakistan</p>
            </div>

            <div className="hero-cta-group" style={{ margin: 0 }}>
              <a href="#home" className="btn btn-outline btn-sm">
                Back to Top ↑
              </a>
            </div>
          </div>

          {/* Clean footer line without the removed slogan */}
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Muhammad Luqman
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <aside className="toast-notice" role="status" aria-live="polite">
          <Check size={16} color="var(--palette-primary)" />
          <span>{toastMessage}</span>
        </aside>
      )}
    </>
  )
}
