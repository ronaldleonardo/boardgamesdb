// Regenerate public/data/games.json from src/lib/data.mjs (source of truth).
import { readFileSync, writeFileSync } from 'fs';
import { games, categories } from './src/lib/data.mjs';

const catName = {};
for (const [k, v] of Object.entries(categories)) {
  catName[k] = typeof v === 'string' ? v : (v?.name ?? v?.label ?? k);
}

const out = games.map(g => ({
  slug: g.slug, name: g.name, category: g.category,
  catName: catName[g.category] || g.category,
  players: g.players, playtime: g.playtime, age: g.age,
  rating: g.rating, complexity: g.complexity, price: g.price,
  image: (g.images && g.images[0]) || g.image || `/images/${g.slug}.jpg`,
  tag: g.tag, desc: g.desc, why: g.why
}));

const path = 'public/data/games.json';
const prior = JSON.parse(readFileSync(path, 'utf8'));
const priorMap = new Map(prior.map(x => [x.slug, x]));
// keep desc/why from old file if data.mjs lacked it
for (const e of out) {
  if ((!e.desc || !e.why) && priorMap.has(e.slug)) {
    if (!e.desc) e.desc = priorMap.get(e.slug).desc;
    if (!e.why) e.why = priorMap.get(e.slug).why;
  }
}
writeFileSync(path, JSON.stringify(out));
console.log('games.json regenerated:', out.length, 'games;',
  'the-crew price =', out.find(g=>g.slug==='the-crew').price,
  '| castle-combo =', out.find(g=>g.slug==='castle-combo').price,
  '| uno =', out.find(g=>g.slug==='uno').price);