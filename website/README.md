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
  for a real photo. Replace the `PlaceholderImage` usage with an `<img>`
  once you have the photo, keeping the same wrapper `div` (it controls the
  aspect ratio / circle shape).

`public/logo.png` and `public/constitution.pdf` are copied from the design
bundle in `../project/`.
