# UI Redesign for AI Threat Intelligence Platform

The goal is to transform the current basic UI into an "award-winning," premium "Cyber Threat Analyser" aesthetic. We will maintain the existing backend integration and folder structure while completely revamping the visual experience across all routes and components.

## User Review Required

> [!IMPORTANT]
> Please review the design direction below. I will not start modifying the codebase until you approve this plan.
> Note: We will use TailwindCSS for styling as it is already configured in the project. We will not add any new folders or alter backend connections.

## Open Questions

> [!NOTE]
> Are there any specific accent colors you prefer for the "Threat Analyser" theme? By default, I will use a high-tech dark theme with neon accents (Cyan/Blue for neutral, Neon Green for low risk, Amber for medium risk, and Neon Red/Crimson for high risk).

## Proposed Changes

We will implement a cohesive "Cyberpunk / High-Tech" design system featuring:
- **Dark UI & Glassmorphism**: Deep black/charcoal backgrounds with semi-transparent frosted glass elements (`backdrop-blur`).
- **Cyber Accents**: Glowing borders, monospace typography for technical data, and subtle grid patterns.
- **Smooth Animations**: Micro-interactions on hover, glowing effects, and smooth transitions.

---

### Global Styles & Layout

#### [MODIFY] `src/app/globals.css`
- Add a custom animated grid or radial gradient background.
- Define global CSS variables for theme colors (neon accents, tech borders).
- Enhance scrollbar styling for a premium feel.

#### [MODIFY] `src/app/layout.js`
- Update fonts to a combination of a sleek Sans-serif (like Inter) and Monospace for technical data.
- Wrap content in a main container that supports the new layout and background.

---

### Components

#### [MODIFY] `src/components/Navbar.js`
- Redesign into a glassmorphic floating or sticky navbar.
- Add active link indicators (glowing underlines).
- Add a tech-themed logo or icon.

#### [MODIFY] `src/components/ThreatInput.js` & `src/components/FileUpload.js`
- Redesign inputs to look like a high-tech terminal or command center.
- Add glowing focus states and smooth transitions.
- Enhance the upload drag-and-drop zone with animated dashed borders.

#### [MODIFY] `src/components/DashboardCard.js` & `src/components/HistoryCard.js`
- Implement glassmorphic card designs.
- Add subtle border glows based on risk levels.
- Improve typography hierarchy (labels vs. values).

#### [MODIFY] `src/components/IOCCard.js`, `src/components/MitreCard.js`, `src/components/RiskBadge.js`
- **RiskBadge**: Use bright neon colors (Red for Critical, Orange for High, Yellow for Medium, Green for Low) with drop-shadow glows.
- **IOCCard**: Make the IOC values stand out using a monospace font and a terminal-like text box.
- **MitreCard**: Display MITRE ATT&CK tactics in a sleek tag layout.

#### [MODIFY] `src/components/AIReport.js` & `src/components/SigmaViewer.js`
- Style the AI report as a premium document view.
- Make the Sigma Viewer look like a modern code editor (e.g., VS Code or a hacker terminal) with syntax highlighting colors.

---

### Charts & Data Visualization

#### [MODIFY] `src/components/BarChart.js` (Bug Fix & UI)
- **Fix**: The BarChart currently doesn't render properly. I will add a container with a defined `height` (e.g., `h-[400px]`) and provide `backgroundColor` and `borderColor` to the datasets so they are visible.
- **UI**: Customize Chart.js options to fit the dark theme (hide grid lines or make them faint, change text color to white/gray).

#### [MODIFY] `src/components/PieChart.js` & `src/components/StatsBar.js`
- Update chart colors to match the neon risk palette.
- Redesign the StatsBar into a row of glowing metric widgets.

---

### Pages

#### [MODIFY] `src/app/page.js` (Dashboard)
- Restructure the grid layout to beautifully present the Stats, PieChart, and Recent Analyses.

#### [MODIFY] `src/app/analyze/page.js`
- Improve spacing and visual flow from Input -> Stats -> Charts -> IOC Results -> Reports.

#### [MODIFY] `src/app/history/page.js`
- Present the history as a high-tech log or timeline.

## Verification Plan

### Manual Verification
- Start the Next.js development server locally.
- Navigate through Dashboard, Analyze, and History pages.
- Verify that the BarChart correctly displays data in the Analyze page.
- Verify that the design looks premium, consistent, and correctly uses the new theme.
- Ensure no backend connections or files were altered.
