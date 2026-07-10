# NPC configurations

One JSON file in this folder describes one NPC that can roam the game world and be interacted with. Keep `index.json` up to date when adding a config.

The sample NPCs are fictional AWS-community archetypes. Replace their names, links, image URLs, and dialogue with details you have permission to publish before using them as real people.

## Contract

Each config is validated against `schema.json` and contains public profile links, a portrait URL, game-facing visual traits, factoids and jokes, roaming settings, and interaction rewards/dialogue.

## Adding an NPC

1. Copy `community-hero-example.json` and use a unique, URL-safe `id`.
2. Use only public links and image assets that you are entitled to display.
3. Add the filename to `index.json`.
4. Validate the file with a JSON Schema validator using `schema.json`.

`spawnAreas` are logical map-area names. The game should resolve them to walkable coordinates, choose random points, and periodically pick a new one from the same list. NPCs should pause while their interaction UI is open and must not spawn inside buildings or interiors.

`appearance.gender` accepts `female`, `male`, or `neutral` and controls character proportions and facial details. `appearance.hair.style` supports `bald`, `buzz-cut`, `short`, `curly-short`, `side-part`, `braided-bun`, `long-straight`, `long-wavy`, `ponytail`, `bob`, and `mohawk`.
