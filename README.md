# My Company Restaurant

![App Preview](https://imgix.cosmicjs.com/362208b0-4f89-11f1-8004-49554e815733-autopilot-photo-1414235077428-338989a2e8c0-1778758616239.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern restaurant website built with Next.js 16 and Cosmic CMS, featuring menu management, location info, and reservation links.

## Features
- 🍴 Menu items grouped by category
- ⭐ Featured items showcase
- 📍 Multiple locations with hours
- 🗓️ Reservation integration
- 📱 Fully responsive design
- 🎨 Beautiful, modern UI

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a05b382b4bc78a77bbdb5b7&clone_repository=6a05b470b4bc78a77bbdb5ef)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: menu-categories, menu-items, locations. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A restaurant site with menu items grouped by category, hours, locations, and reservation info

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun (or Node.js 18+)
- Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch menu items with category
const { objects } = await cosmic.objects
  .find({ type: 'menu-items' })
  .depth(1)

// Fetch locations
const { objects } = await cosmic.objects
  .find({ type: 'locations' })
  .depth(1)
```

## Cosmic CMS Integration
This app integrates with three Cosmic object types: menu-categories, menu-items, and locations. Visit [Cosmic docs](https://www.cosmicjs.com/docs) for more info.

## Deployment Options
- Vercel (recommended)
- Netlify

Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`

<!-- README_END -->