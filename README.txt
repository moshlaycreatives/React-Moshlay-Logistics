# Nationwide Transport Services — Website

A static, multi-page website. No server or build step needed.

## How to view
Open index.html in Chrome (double-click). Every page and link works directly
from your computer. (Internet is only used to load Google Fonts; without it the
site still works with system fonts.)

## Pages
- index.html ............ Home
- services.html ......... Services
- about.html ............ About
- news.html ............. News (articles in /news/)
- knowledge-base.html ... Knowledge Base (articles in /knowledge-base/)
- become-a-customer.html  Become a Customer (transport credit application)
- contact.html .......... Contact

## Folders
- css/styles.css ... all styling + brand colors (CSS variables at top)
- js/site.js ....... builds header + footer on every page, mobile menu, animations
- images/ .......... placeholder SVG images — replace with real photos later
- news/ , knowledge-base/ ... article pages

## For the developer
- Header & footer live once in js/site.js — edit there, updates everywhere.
- Brand colors are CSS variables (--navy-800, --amber, ...) at top of styles.css.
- Forms are front-end only — connect them to your email/CRM.
- All copy and images are placeholders; swap in your final content.

## Free hosting (drag & drop)
- Netlify Drop: app.netlify.com/drop  → drag this whole folder onto the page
- Vercel: import the folder
- GitHub Pages: push folder to a repo, enable Pages
