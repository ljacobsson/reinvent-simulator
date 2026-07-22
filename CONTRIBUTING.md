# Contributing an NPC

Only submit profile details, images, and links you have permission to publish.

## 1. Fork and run

1. [Fork the repository](https://github.com/ljacobsson/reinvent-simulator/fork).
2. Clone your fork and serve the project:

   ```bash
   python3 -m http.server 8000
   ```

3. Open `http://localhost:8000`, finish check-in, and select **Design NPC**.

## 2. Create your NPC

Complete the designer, preview the NPC, then select **Download JSON**.

## 3. Submit it

1. Create a branch: `git switch -c add-npc-your-builder-alias`
2. Copy the downloaded file into [`npcs/`](npcs/).
3. Add its filename to [`npcs/index.json`](npcs/index.json).
4. Validate the files:

   ```bash
   node -e "const fs=require('fs'); for(const f of fs.readdirSync('npcs').filter(f=>f.endsWith('.json'))) JSON.parse(fs.readFileSync('npcs/'+f)); console.log('NPC JSON is valid')"
   ```

5. Commit and push your branch.
6. Open a pull request to this repository's `main` branch.

Include a short introduction, confirmation that you may publish the profile data, and how you tested the NPC.
