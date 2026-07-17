# Contributing an NPC

You can create an NPC with the visual designer built into the game, download its JSON configuration, and submit it through a GitHub pull request. You do not need to hand-write the NPC file.

Only contribute information, profile images, and links that you have permission to publish. Everything in an NPC configuration becomes part of this public repository.

## 1. Run the game

Clone your fork, enter the project directory, and serve it over HTTP:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser, finish check-in, and select **Design NPC** from the time controls.

## 2. Create the NPC

The designer shows a live, rotating version of the character. Choose the body type, hairstyle, skin tone, hair color, clothing colors, and other appearance options.

Three fields are required:

- AWS Builder alias: used to create the JSON filename and unique NPC ID.
- Name: displayed when players meet the NPC.
- Greeting: shown when a player approaches.

The remaining fields are optional. Add as much personality as you would like:

- Profile image URL and bio.
- Blog, GitHub, LinkedIn, Dev.to, and personal or session links.
- Conversation responses, one per line.
- Factoids, one per line.
- Jokes, one per line.

Use a stable, publicly accessible HTTPS URL for the profile image. Avoid temporary or authenticated image links.

Select **Spawn Preview** if you want to meet the NPC in the running game and verify its appearance and dialogue.

## 3. Download the JSON

Reopen the designer if necessary and select **Download JSON**. The browser downloads a file named from the Builder alias, for example:

```text
your-builder-alias.json
```

Do not rename the file unless you also update its `id` to match the new URL-safe name.

## 4. Add the NPC to the repository

1. Create a branch in your fork:

   ```bash
   git switch -c add-npc-your-builder-alias
   ```

2. Copy the downloaded JSON file into [`npcs/`](npcs/).
3. Add its filename to the `npcs` array in [`npcs/index.json`](npcs/index.json). Without this entry, the game will not load the NPC.
4. Check that every NPC JSON file parses:

   ```bash
   node -e "const fs=require('fs'); for (const f of fs.readdirSync('npcs').filter(f=>f.endsWith('.json'))) JSON.parse(fs.readFileSync('npcs/'+f)); console.log('NPC JSON is valid')"
   ```

5. Run the game again and confirm that the NPC spawns, stays on walkable surfaces, and can complete a conversation.

The generated file follows [`npcs/schema.json`](npcs/schema.json). If you edit the JSON manually, preserve that schema and use one of the supported appearance values documented in [`npcs/README.md`](npcs/README.md).

## 5. Open a pull request

Commit and push the NPC file and index update:

```bash
git add npcs/your-builder-alias.json npcs/index.json
git commit -m "Add NPC your-builder-alias"
git push -u origin add-npc-your-builder-alias
```

Open a pull request from your branch into this repository's `main` branch. In the description, include:

- A short introduction to the NPC.
- Confirmation that you have permission to publish the submitted profile information and image.
- How you tested the NPC.
- A screenshot of the NPC in the game, if possible.

Keep each pull request focused on one NPC. Maintainers may request changes to dialogue, links, formatting, or appearance before merging.
