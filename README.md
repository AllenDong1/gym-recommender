# gym-recommender

A smart gym recommendation app that helps users discover and find gyms based on their preferences, location, and fitness needs.

- Search and filter gyms by location, amenities, and fitness goals
- Interactive map view powered by Google Maps
- Gym and location data from Google Places API
- Save preferences and favourite gyms locally

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Google Places API
- LocalStorage

## Layout

```
.github/
  workflows/       # CI pipeline
app/               # Next.js app router
components/        # UI components
lib/               # Places/Maps clients, localStorage helpers
styles/            # global styles / Tailwind
tests/             # unit and integration tests
```

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Test

```bash
npm test
npm run lint
```

## License

For personal and educational use.