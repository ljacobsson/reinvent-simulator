# Expo booth contributions

Sponsor booths are created with the in-game **Design Booth** tool. The tool provides a visual canvas for dragging and positioning booth text, banners, screens, counters, plants, and display objects.

Download the generated JSON and place it in this directory. Add the filename to `index.json` in the same pull request.

Each booth selects a slot from 1–12. A loaded contribution replaces the hardcoded fallback booth in that slot. Slots without a contributed JSON file continue to use the built-in fictional sponsor.

Booth representatives use `tagline` as their greeting and `lines` as their conversation responses. Entries in `links` become buttons in the sponsor conversation menu. Layout coordinates and resized item dimensions are percentages of the rotatable booth stage and are translated into the 3D expo booth at runtime.

`logoUrl` and `youtubeUrl` are optional. A logo URL should point directly to a web image; it replaces the booth's initials emblem. YouTube watch, short, live, `youtu.be`, and embed URLs are accepted. The video appears on the first SCREEN item in the booth layout, or on an automatically added back-wall screen when the layout has no SCREEN.

Validate manually edited files against `schema.json`. Use only names, text, logos, links, and giveaway descriptions that you are authorized to publish.
