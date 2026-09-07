export const categories = {
  "party-games": {
    name: "Party Games",
    short: "Party",
    desc: "Quick, fun games for 4+ players. Perfect for game nights and gatherings.",
    icon: "🎉"
  },
  "strategy": {
    name: "Strategy Games",
    short: "Strategy",
    desc: "Classic gateway games that blend depth with approachable rules.",
    icon: "♟️"
  },
  "family": {
    name: "Family Games",
    short: "Family",
    desc: "Games that work for kids and adults alike. Easy to learn, hard to put down.",
    icon: "👨‍👩‍👧‍👦"
  },
  "two-player": {
    name: "2-Player Games",
    short: "2-Player",
    desc: "Head-to-head games designed specifically for two. Great for couples.",
    icon: "⚔️"
  },
  "card-games": {
    name: "Card Games",
    short: "Card",
    desc: "Small box, big fun. Portable games that pack a punch.",
    icon: "🃏"
  },
  "cooperative": {
    name: "Cooperative Games",
    short: "Co-Op",
    desc: "Work together or lose together. Team up against the game itself.",
    icon: "🤝"
  },
  "solo": {
    name: "Solo Games",
    short: "Solo",
    desc: "Great games that play just as well alone. Perfect for quiet nights in.",
    icon: "🎲"
  }
};

export const games = [
  // === PARTY GAMES ===
  { slug: "codenames", name: "Codenames", category: "party-games", players: "4-8", playtime: 15, age: 14, rating: 7.7, complexity: 1.2, price: 24.97, asin: "B0FJMQB63N", image: "/images/codenames.jpg", tag: "best-seller",
    desc: "The word association party game that took the world by storm. Split into two teams, spymasters give one-word clues to guide their teammates to the right words — but watch out for the assassin.",
    why: "Easy to teach, plays up to 8, always different. Best party game for non-gamers." },
  { slug: "wavelength", name: "Wavelength", category: "party-games", players: "4-8", playtime: 30, age: 14, rating: 7.8, complexity: 1.4, price: 34.99, asin: "B07T446163", image: "/images/wavelength.jpg", tag: "award-winner",
    desc: "A mind-reading party game where you try to guess where your teammate is pointing on a hidden spectrum. Hot to cold, easy to hard — the tension is real.",
    why: "Perfect for groups that love conversation and debate. Every round is different." },
  { slug: "herd-mentality", name: "Herd Mentality", category: "party-games", players: "4-20", playtime: 20, age: 10, rating: 7.4, complexity: 1.1, price: 18.23, asin: "B093HBBMPT", image: "/images/herd-mentality.jpg", tag: "budget",
    desc: "You get points for thinking like the majority. The twist? If your answer is unique, you get nothing. Don't be the pink cow.",
    why: "Hilarious with big groups. The only game where copying answers is the smart play." },
  { slug: "blank-slate", name: "Blank Slate", category: "party-games", players: "3-8", playtime: 25, age: 8, rating: 7.5, complexity: 1.1, price: 22.69, asin: "B07G2VHPRW", image: "/images/blank-slate.jpg", tag: "budget",
    desc: "A word association game where you pick a cue card and write a word that completes the phrase. Match with another player to score.",
    why: "Simple enough for kids, fun enough for adults. Great icebreaker." },
  { slug: "sushi-go", name: "Sushi Go!", category: "party-games", players: "2-5", playtime: 15, age: 8, rating: 7.1, complexity: 1.2, price: 11.99, asin: "B00GSLKAK0", image: "/images/sushi-go.jpg", tag: "budget",
    desc: "A fast-paced card drafting game where you're trying to grab the best combination of sushi dishes before they pass by. Think 7 Wonders, but simpler and cuter.",
    why: "Under $12, plays in 15 minutes, and adorable. Best value in board gaming." },

  { slug: "just-one", name: "Just One", category: "party-games", players: "3-7", playtime: 20, age: 8, rating: 7.8, complexity: 1.1, price: 24.99, asin: "B0DYK1ZH2D", image: "/images/just-one.jpg", tag: "award-winner",
    desc: "A cooperative word association game where everyone helps one player guess a secret word. The catch? If any two players write the same clue, both clues are discarded. Simple, brilliant, and tense.",
    why: "Won Spiel des Jahres 2019 for a reason. Cooperative so nobody gets singled out. Best with 5-7." },

  // === STRATEGY ===
  { slug: "catan", name: "Catan (6th Edition)", category: "strategy", players: "3-4", playtime: 75, age: 10, rating: 7.2, complexity: 2.0, price: 39.99, asin: "B0DYK1ZH2D", image: "/images/catan.jpg", tag: "best-seller",
    desc: "The game that launched modern board gaming. Trade, build, and settle on the island of Catan. Dice rolls determine resources, but your strategy determines who wins.",
    why: "The perfect gateway game. If you want one game to start your collection, this is it." },
  { slug: "ticket-to-ride", name: "Ticket to Ride", category: "strategy", players: "2-5", playtime: 45, age: 8, rating: 7.5, complexity: 1.9, price: 49.99, asin: "B0FPN4SF88", image: "/images/ticket-to-ride.jpg", tag: "best-seller",
    desc: "Build train routes across America. Connect cities, complete destination tickets, and block your opponents. Simple to learn, impossible to master.",
    why: "The most successful modern board game for a reason. Routes, risk, and rail-building fun." },
  { slug: "azul", name: "Azul", category: "strategy", players: "2-4", playtime: 40, age: 8, rating: 7.9, complexity: 1.8, price: 31.99, asin: "B0719HFT6H", image: "/images/azul.jpg", tag: "award-winner",
    desc: "A stunning tile-laying game inspired by Portuguese azulejo tiles. Draft beautiful ceramic tiles and place them on your board. Gorgeous components, sharp strategy.",
    why: "Looks amazing on the table, plays fast, and the 'take that' moments are brutal." },
  { slug: "cascadia", name: "Cascadia", category: "strategy", players: "1-4", playtime: 35, age: 10, rating: 8.0, complexity: 1.9, price: 39.99, asin: "B08ZLBJ45S", image: "/images/cascadia.jpg", tag: "award-winner",
    desc: "A captivating tile-laying game about building ecosystems. Place habitat tiles and wildlife tokens to create the most harmonious Pacific Northwest environment.",
    why: "The definition of 'easy to learn, hard to master.' Also plays solo." },
  { slug: "wingspan", name: "Wingspan", category: "strategy", players: "1-5", playtime: 55, age: 10, rating: 8.1, complexity: 2.5, price: 54.99, asin: "B07DY644L2", image: "/images/wingspan.jpg", tag: "premium",
    desc: "An engine-building game where you attract birds to your preserve. Each bird has unique abilities and habitat requirements. Stunning artwork, relaxing vibe.",
    why: "The most beautiful game on this list. Deep enough for veterans, inviting for newcomers." },

  // === FAMILY ===
  { slug: "splendor", name: "Splendor", category: "family", players: "2-4", playtime: 30, age: 10, rating: 7.5, complexity: 1.9, price: 38.99, asin: "B00IZ8BVAO", image: "/images/splendor.jpg", tag: "best-seller",
    desc: "Collect gem tokens, buy development cards, and attract nobles to your court. Simple mechanics with satisfying strategic depth.",
    why: "30 minutes, easy rules, but every game feels different. Family favorite." },
  { slug: "kingdomino", name: "Kingdomino", category: "family", players: "2-4", playtime: 20, age: 8, rating: 7.4, complexity: 1.2, price: 19.99, asin: "B01CWTW8JG", image: "/images/kingdomino.jpg", tag: "budget",
    desc: "Draft domino tiles to build your kingdom. Each tile has two terrain types — match them strategically to score big. Quick, clever, and addictive.",
    why: "Gold standard for family games. Cheap, fast, fun for all ages." },
  { slug: "sequence", name: "Sequence", category: "family", players: "2-12", playtime: 30, age: 7, rating: 7.0, complexity: 1.3, price: 19.97, asin: "B00000IVAK", image: "/images/sequence.jpg", tag: "budget",
    desc: "A classic strategy game combining cards and board. Play a card, place a chip. Get five in a row and you win. Simple tension that keeps everyone engaged.",
    why: "Plays up to 12. Grandma-friendly. Proven for 40+ years." },
  { slug: "castle-combo", name: "Castle Combo", category: "family", players: "2-5", playtime: 25, age: 8, rating: 7.6, complexity: 1.5, price: 24.99, asin: "B0D9KGF6ST", image: "/images/castle-combo.jpg", tag: "budget",
    desc: "A charming tableau-building game where you construct medieval castles. Draft cards, build combos, and watch your kingdom grow. Quick to learn, satisfying to play.",
    why: "2026's breakout family hit. Try it on Board Game Arena first." },
  { slug: "quake", name: "The Quacks of Quedlinburg", category: "family", players: "2-4", playtime: 45, age: 10, rating: 7.8, complexity: 2.0, price: 44.99, asin: "B0F4SRMRG9", image: "/images/quacks.jpg", tag: "award-winner",
    desc: "A push-your-luck bag-building game. Draw ingredients from your bag to brew potions. Draw too many white cherries and your potion explodes. Tense, hilarious, and addictive.",
    why: "Every pull is a gamble. The 'push your luck' mechanic keeps everyone engaged." },

  // === 2-PLAYER ===
  { slug: "patchwork", name: "Patchwork", category: "two-player", players: "2", playtime: 25, age: 8, rating: 7.7, complexity: 1.5, price: 27.99, asin: "B01AYKKZ4C", image: "/images/patchwork.jpg", tag: "best-seller",
    desc: "A two-player tetris-like game where you piece together a quilt. Buy patches with buttons, place them strategically, and cover your board efficiently.",
    why: "Best 2-player game ever made. Period. Perfect date night game." },
  { slug: "7-wonders-duel", name: "7 Wonders Duel", category: "two-player", players: "2", playtime: 30, age: 10, rating: 8.2, complexity: 2.2, price: 29.99, asin: "B0150UY2FG", image: "/images/7-wonders-duel.jpg", tag: "best-seller",
    desc: "The two-player version of the classic 7 Wonders. Draft cards in a pyramid formation, build structures, and compete for military and scientific supremacy.",
    why: "Better than the original 7 Wonders. Tense, strategic, and deeply satisfying." },
  { slug: "fox-in-the-forest", name: "Fox in the Forest", category: "two-player", players: "2", playtime: 20, age: 10, rating: 7.3, complexity: 1.9, price: 14.99, asin: "B01MXBXMZ3", image: "/images/fox-forest.jpg", tag: "budget",
    desc: "A trick-taking card game designed specifically for two players. Special powers on every card, and winning too many tricks is just as dangerous as winning too few.",
    why: "Under $15, plays in 20 minutes, and the 'avoid winning' mechanic is brilliant." },
  { slug: "jaipur", name: "Jaipur", category: "two-player", players: "2", playtime: 20, age: 12, rating: 7.5, complexity: 1.5, price: 24.99, asin: "B0077Q8MHQ", image: "/images/jaipur.jpg", tag: "budget",
    desc: "A fast-paced trading game set in the bustling city of Jaipur. Buy and sell goods, earn bonuses for sets, and outsmart your opponent in the marketplace.",
    why: "The quintessential 2-player card game. Quick rounds, big decisions." },
  { slug: "lost-cities", name: "Lost Cities", category: "two-player", players: "2", playtime: 30, age: 10, rating: 7.3, complexity: 1.5, price: 24.99, asin: "B0019L6ULM", image: "/images/lost-cities.jpg", tag: "budget",
    desc: "A risk-management card game about exploration. Invest in expeditions, manage your hand, and decide when to cut your losses. Push your luck across five ancient cities.",
    why: "Reiner Knizia's masterpiece. Elegant, tense, and endlessly replayable." },

  // === CARD GAMES ===
  { slug: "love-letter", name: "Love Letter", category: "card-games", players: "2-4", playtime: 20, age: 10, rating: 7.4, complexity: 1.2, price: 12.99, asin: "B0753NP1WM", image: "/images/love-letter.jpg", tag: "budget",
    desc: "A deduction game of risk and luck with only 16 cards. Deliver a love letter to the princess while eliminating rival suitors. Tiny box, huge fun.",
    why: "16 cards. $13. 20 minutes. The best game-per-dollar ratio in board gaming." },
  { slug: "the-crew", name: "The Crew: The Quest for Planet Nine", category: "card-games", players: "2-5", playtime: 20, age: 10, rating: 7.8, complexity: 2.0, price: 14.99, asin: "B0832F2Y56", image: "/images/the-crew.jpg", tag: "award-winner",
    desc: "A cooperative trick-taking game set in space. Each mission has unique objectives — you must communicate without talking and win the right tricks together.",
    why: "The game that redefined trick-taking. Co-op, campaign-based, and incredibly clever." },
  { slug: "uno", name: "Uno", category: "card-games", players: "2-10", playtime: 15, age: 7, rating: 6.0, complexity: 1.0, price: 9.99, asin: "B00K1D1DRE", image: "/images/uno.jpg", tag: "budget",
    desc: "The classic family card game that needs no introduction. Match colors and numbers, use action cards to mess with opponents, and never forget to yell 'UNO!'",
    why: "Under $10, everyone knows the rules, and it never gets old." },
  { slug: "skull-king", name: "Skull King", category: "card-games", players: "2-8", playtime: 45, age: 10, rating: 7.4, complexity: 1.7, price: 19.99, asin: "B01N18QQYL", image: "/images/skull-king.jpg", tag: "budget",
    desc: "A trick-taking game with pirates, mermaids, and the terrifying Skull King himself. Bid how many tricks you'll win, then try to hit your target exactly.",
    why: "The best bidding trick-taking game since Spades. Perfect for 4-6 players." },
  { slug: "star-realms", name: "Star Realms", category: "card-games", players: "2", playtime: 20, age: 12, rating: 7.5, complexity: 2.0, price: 14.99, asin: "B00GR0BN8I", image: "/images/star-realms.jpg", tag: "budget",
    desc: "A fast-paced deck-building card game. Buy ships and bases, then attack your opponent directly. Combos chain into devastating turns. Plays in 20 minutes.",
    why: "Best deck-building game for the price. Portable, fast, and deep." },

  // === COOPERATIVE ===
  { slug: "pandemic", name: "Pandemic", category: "cooperative", players: "2-4", playtime: 45, age: 8, rating: 7.6, complexity: 2.5, price: 34.99, asin: "B00A2HDBNE", image: "/images/pandemic.jpg", tag: "best-seller",
    desc: "Work together to stop global outbreaks. Each player has a unique role — medic, scientist, dispatcher — and you must cure four diseases before time runs out.",
    why: "The gateway co-op game. Tension, teamwork, and that 'one more game' feeling." },
  { slug: "forbidden-island", name: "Forbidden Island", category: "cooperative", players: "2-4", playtime: 30, age: 10, rating: 7.1, complexity: 1.7, price: 17.99, asin: "B0097IY2DG", image: "/images/forbidden-island.jpg", tag: "budget",
    desc: "A cooperative race against time. Collect ancient treasures from a sinking island before it disappears. The island sinks more every turn — tension builds fast.",
    why: "Pandemic's little brother. Cheaper, faster, but just as tense." },
  { slug: "horrified", name: "Horrified", category: "cooperative", players: "1-5", playtime: 60, age: 10, rating: 7.6, complexity: 2.3, price: 34.99, asin: "B07T5JCWMY", image: "/images/horrified.jpg", tag: "award-winner",
    desc: "A cooperative monster-fighting game where you team up against classic movie monsters. Dracula, Frankenstein, the Mummy — each has unique mechanics and difficulty levels.",
    why: "The best entry-level co-op. Theme is perfect, difficulty scales well." },
  { slug: "mysterium", name: "Mysterium", category: "cooperative", players: "2-7", playtime: 45, age: 10, rating: 7.5, complexity: 1.8, price: 39.99, asin: "B01A5M4T4Q", image: "/images/mysterium.jpg", tag: "award-winner",
    desc: "One player is a ghost communicating through surreal dream cards. The others are psychics trying to solve a murder. Beautiful art, unique mechanics, no two games are alike.",
    why: "The cooperative Clue. Gorgeous components, great for creative groups." },
  { slug: "castle-panic", name: "Castle Panic", category: "cooperative", players: "1-6", playtime: 45, age: 7, rating: 7.0, complexity: 1.8, price: 34.99, asin: "B01MECJJCV", image: "/images/castle-panic.jpg", tag: "budget",
    desc: "Defend your castle against waves of monsters. Play cards to hit, arrow, and bash approaching threats before they destroy your walls. Made for kids and adults to play together.",
    why: "Great with kids. Co-op so no one gets eliminated. Real tension." },

  // === SOLO ===
  { slug: "wingspan-solo", name: "Wingspan (Solo Mode)", category: "solo", players: "1", playtime: 45, age: 10, rating: 8.1, complexity: 2.5, price: 54.99, asin: "B07DY644L2", image: "/images/wingspan.jpg", tag: "premium",
    desc: "Play the full Wingspan experience solo against an automa opponent. The bird engine-building is just as satisfying alone — and the automa is surprisingly competitive.",
    why: "Best solo mode in modern gaming. Relaxing, strategic, and beautiful." },
  { slug: "sprawlopolis", name: "Sprawlopolis", category: "solo", players: "1-2", playtime: 20, age: 8, rating: 7.4, complexity: 2.0, price: 12.99, asin: "B07QHPWMN1", image: "/images/sprawlopolis.jpg", tag: "budget",
    desc: "A tiny wallet game with huge depth. Build a city by placing cards, each with scoring conditions. 18 cards, infinite combinations. The ultimate travel solo game.",
    why: "Fits in your pocket. 20 minute plays. Infinite replayability. $13." },
  { slug: "final-girl", name: "Final Girl", category: "solo", players: "1", playtime: 45, age: 14, rating: 8.1, complexity: 2.6, price: 24.99, asin: "B09B1FXF8B", image: "/images/final-girl.jpg", tag: "award-winner",
    desc: "A solo horror movie game. Play as the final girl trying to survive a slasher killer. Each scenario feels like a different movie. High tension, big decisions, brutal outcomes.",
    why: "The gold standard for solo gaming. Every game tells a story." },
  { slug: "under-falling-skies", name: "Under Falling Skies", category: "solo", players: "1", playtime: 30, age: 10, rating: 8.1, complexity: 2.3, price: 29.99, asin: "B081THM9QV", image: "/images/under-falling-skies.jpg", tag: "award-winner",
    desc: "A dice placement game where you defend Earth from alien invasion. Each dice pip becomes a ship or research action. Campaign mode adds persistent upgrades and story.",
    why: "Best pure solo game. Dice placement meets tower defense. Campaign is brilliant." },
  { slug: "spirit-island", name: "Spirit Island", category: "solo", players: "1-4", playtime: 90, age: 13, rating: 8.5, complexity: 4.0, price: 69.99, asin: "B01K6C6BPI", image: "/images/spirit-island.jpg", tag: "premium",
    desc: "The ultimate solo puzzle. Play as a nature spirit defending your island from colonizers. Unique powers, deep strategy, and every game is a brain-burning challenge.",
    why: "The most respected solo game on BGG (8.5 rating). Not for beginners, but unmatched depth." }
];