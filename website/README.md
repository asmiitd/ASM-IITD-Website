# ASM-IITD Student Chapter Website

React + Vite implementation of the chapter site designed in Claude Design
(see `../project/ASM-IITD Chapter.dc.html` for the original mockup and
`../chats/chat1.md` for the design brief).

## Running it

```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

## Pages

- `/` — Home
- `/events` — Events (competitions, workshops, outreach, career fairs)
- `/talks` — Talks (Young Microbiologists Talk Series, upcoming/past talks)
- `/team` — Team (Overall/Co-Overall Coordinators + the four verticals)

## Still needs real content

The design was handed off with placeholder content. Search the codebase for
these markers and fill them in:

- **Officer names & emails** — `src/pages/Team.jsx` (`leadership` and
  `verticals` arrays, plus "add email" links).
- **Instagram / LinkedIn URLs** — the `href="#"` links in
  `src/components/Header.jsx` and `src/components/Footer.jsx`.
- **Chapter contact email** — the `mailto:` link in `src/pages/Home.jsx`
  ("Write to the chapter").
- **Event details** (dates, venue, attendee counts) — the `events` array in
  `src/pages/Events.jsx`.
- **Talk series details & upcoming talks** — `src/pages/Talks.jsx`.
- **Photos** — every dashed placeholder box (`PlaceholderImage`) is a spot
  for a real photo.

## Adding event photos

Drop the image file straight into **`public/events/`** in this repo, using
the exact filename each event already expects (set in the `image` field of
the `events` array in `src/pages/Events.jsx`):

- `public/events/openhouse.png` — Open House 2026
- `public/events/tos.png` — Tour of Stalls
- `public/events/Hacteria.png` — World Microbiome Day Hackathon

The easiest way for anyone on the team, no git required: on GitHub, open
this folder in the browser (`website/public/events/` in the repo), click
**Add file → Upload files**, drag the image in, and make sure it's named
exactly as above before committing to `main`. The site rebuilds and
redeploys automatically within a couple of minutes (GitHub Actions). If a
file isn't there yet, that event just shows the dashed placeholder instead
— nothing breaks.

For a **new** event or a team/officer photo, add the file under
`public/events/` (or `public/` for other one-off images) with a new
filename, then reference that filename from the corresponding entry in
`src/pages/Events.jsx` (or `src/pages/Team.jsx`) — `image: 'your-file.png'`.

`public/logo.png` and `public/constitution.pdf` are copied from the design
bundle in `../project/`.
