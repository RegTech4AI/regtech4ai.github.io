# RegTech4AI Website

This is the source code for the RegTech4AI website, built with React, TypeScript, and Vite.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Local Development

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173` (or the URL shown in terminal).

## Project Structure

- `src/components`: UI Components (Hero, Navbar, About, News, Team, Footer)
- `src/data/team.ts`: Data file containing team member information
- `src/data/news.ts`: Data file containing news and updates
- `public`: Static assets like images and logos

## Updating Content

### Adding/Updating Team Members

1. Open `src/data/team.ts`.
2. Add or modify objects in the `teamMembers` array.
3. **Photos**: Place team member photos in the `public/team` directory.
   - Example: `public/team/jane-doe.jpg`.
   - Reference in `team.ts` as `/team/jane-doe.jpg`.
   - If no photo is provided, initials will be displayed.

### Adding News Items

1. Open `src/data/news.ts`.
2. Add new items to the `newsItems` array with:
   - `id`: Unique identifier
   - `month`: Display date (e.g., "December 2024")
   - `title`: News headline
   - `description`: Brief description (optional)
   - `link`: External URL (optional)
   - `linkText`: Custom link text (optional)
   - `tag`: Category tag - "publication", "event", "update", or "release" (optional)

### Updating the Logo

The main logo assets are located at:
- `public/regtech4ai-logo.svg` - Full logo
- `public/regtech4ai-icon.svg` - Favicon/icon

## Customization

### Colors and Theming

The color scheme is defined in `src/index.css` using CSS custom properties (variables). Key variables include:

- `--color-bg-primary`: Main background color
- `--color-accent-primary`: Primary accent (cyan)
- `--color-accent-secondary`: Secondary accent (amber)
- `--color-accent-tertiary`: Tertiary accent (purple)

### Typography

The site uses two font families:
- **Plus Jakarta Sans**: Main display font
- **JetBrains Mono**: Monospace font for code and technical elements

Fonts are loaded from Google Fonts in `index.html`.

## Deployment

### GitHub Pages

This project can be deployed using GitHub Actions:

1. Push changes to the `main` branch.
2. The Action defined in `.github/workflows/deploy.yml` will run.
3. Once completed, the site will be live.

**Note**: Ensure GitHub Pages is configured in the repository settings:
- Go to Settings -> Pages.
- Source: GitHub Actions.

### Other Platforms

To build for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

[Add License Here]
