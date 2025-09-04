# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication Language

**Communicate in Russian** - Since this is a Russian website (napiworld.ru) with Russian as the default language, communicate with users in Russian unless they specifically request English.

## Project Overview

This is a multilingual Docusaurus website for NapiWorld (napiworld.ru), documenting compact Linux computers and embedded devices by Comintech. The site supports Russian (default) and English locales.

## Development Commands

### Core Development
- `npm start` - Start development server with hot reload
- `npm run build` - Build the production site
- `npm run serve` - Serve the built site locally
- `npm run clear` - Clear Docusaurus cache

### Content Management
- `npm run write-translations` - Generate translation files
- `npm run write-heading-ids` - Add heading IDs to markdown files
- `npm run swizzle` - Customize Docusaurus components

### Deployment
- `npm run deploy` - Deploy to GitHub Pages (if configured)

## Architecture

### Content Structure
- `docs/` - Main documentation content (product catalog)
- `software/` - Knowledge base content (separate docs instance)
- `blog/` - News and blog posts
- `src/pages/` - Custom pages (contacts, index)
- `src/components/` - React components
- `static/` - Static assets (images, favicon, etc.)
- `i18n/` - Internationalization files for Russian and English

### Configuration
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Sidebar configuration (auto-generated from folder structure)
- `babel.config.js` - Babel configuration

### Key Features
- Dual documentation sections: main docs and software knowledge base
- Search functionality via `@easyops-cn/docusaurus-search-local`
- Image zoom capabilities via `docusaurus-plugin-image-zoom`
- Image optimization with `@docusaurus/plugin-ideal-image`
- Yandex Metrica analytics integration
- Russian/English internationalization

### Content Organization
The site uses auto-generated sidebars from the filesystem structure. Main content areas:
- Product catalog in `docs/` covering various NAPI computer models
- Software documentation in `software/` for technical knowledge
- Extensive image galleries organized by product type in both `docs/img-*` and `static/img/` directories

### Theming
Uses custom CSS in `src/css/custom.css` with light/dark mode support and custom logo variants for each theme.