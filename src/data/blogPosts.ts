export type Category = 'destinations' | 'tips' | 'food' | 'culture';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: Category;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'A Week in the Japanese Alps: Finding Peace in Takayama',
    slug: 'week-in-japanese-alps-takayama',
    excerpt: 'Discovering the hidden gem of Japan\'s mountainous heartland, where traditional wooden houses meet misty peaks and time seems to slow down.',
    content: `
      <p>There's something magical about waking up to the sound of a distant temple bell, the morning mist slowly lifting from ancient wooden rooftops. Takayama, nestled deep in the Japanese Alps, offers exactly this kind of serene awakening.</p>
      
      <h2>The Old Town Charm</h2>
      <p>Walking through the Sanmachi Suji district feels like stepping back in time. The perfectly preserved merchant houses, some dating back to the Edo period, line narrow streets where sake breweries still operate as they have for centuries. Each morning, I would wander these streets before the tourists arrived, camera in hand, capturing the interplay of light and shadow on weathered wooden facades.</p>
      
      <p>The locals here move with a quiet purpose, tending to their shops and gardens with the same care their ancestors did. I found myself drawn to a small coffee shop run by an elderly couple, where the pour-over coffee was as meticulous as any tea ceremony.</p>
      
      <h2>Into the Mountains</h2>
      <p>Beyond the town, the Hida mountain range beckons. I spent three days hiking the lesser-known trails around the Norikura highlands, where the air is crisp and the views stretch endlessly. The autumn colors were just beginning to turn, painting the mountainsides in subtle golds and deep reds.</p>
      
      <p>One evening, I soaked in an outdoor onsen as the sun set behind the peaks, steam rising around me like whispered secrets. These are the moments that make travel meaningful – not the checkboxes, but the quiet revelations.</p>
    `,
    featuredImage: '/images/takayama.jpg',
    category: 'destinations',
    tags: ['Japan', 'Mountains', 'Slow Travel', 'Photography'],
    author: 'Emma',
    publishedAt: '2024-01-15',
    readTime: 8,
  },
  {
    id: '2',
    title: 'The Art of Packing Light: My Minimalist Travel Philosophy',
    slug: 'art-of-packing-light-minimalist-travel',
    excerpt: 'After years of overpacking and dragging heavy suitcases, I finally embraced the freedom of traveling with just a carry-on. Here\'s what I learned.',
    content: `
      <p>I used to be that traveler – the one with the overweight suitcase, paying extra fees, struggling through cobblestone streets. Then everything changed on a trip to Portugal where my luggage was lost for five days.</p>
      
      <h2>The Revelation</h2>
      <p>Those five days with just my day pack were liberating. I realized I didn't need half of what I'd packed. I wore the same clothes, washed them in the sink, and discovered a lightness both physical and mental that transformed how I experienced travel.</p>
      
      <p>Now, I travel with a 35-liter backpack for any trip, regardless of duration. Here's my approach:</p>
      
      <h2>The Capsule Wardrobe</h2>
      <p>I pack clothes that can mix and match endlessly. Neutral colors, quick-dry fabrics, and items that can dress up or down. Three tops, two bottoms, one dress, and layers. That's it. Everything gets worn multiple times, which forces me to choose pieces I truly love.</p>
      
      <p>The freedom of walking through airports without checking bags, of changing plans spontaneously without luggage concerns – it's priceless. Less stuff means more experiences, more flexibility, more joy.</p>
    `,
    featuredImage: '/images/packing.jpg',
    category: 'tips',
    tags: ['Packing', 'Minimalism', 'Travel Tips', 'Lifestyle'],
    author: 'Emma',
    publishedAt: '2024-01-08',
    readTime: 5,
  },
  {
    id: '3',
    title: 'Street Food Safari: A Culinary Journey Through Bangkok',
    slug: 'street-food-safari-bangkok',
    excerpt: 'From midnight pad thai to morning congee, exploring Bangkok\'s legendary street food scene one hawker stall at a time.',
    content: `
      <p>Bangkok doesn't sleep, and neither does its food scene. At 3 AM, I found myself in Chinatown, watching a vendor who'd been making the same noodle dish for forty years. His movements were a dance, perfected over decades.</p>
      
      <h2>The Morning Ritual</h2>
      <p>My days would start at local markets, where office workers grabbed quick bowls of rice porridge with all the fixings. There's something beautiful about watching a city wake up through its food. The vendors know their regulars by heart, have their orders ready before they even ask.</p>
      
      <h2>Following the Locals</h2>
      <p>The best street food isn't where the tourists gather – it's where you see a queue of locals waiting patiently. I learned to look for the carts that specialize in just one thing. Obsession equals quality in street food.</p>
      
      <p>One evening, I joined a night food tour led by a local food blogger. She took us to hidden spots in the old town where the flavors were bold and the prices laughably low. That single evening changed everything I thought I knew about Thai cuisine.</p>
    `,
    featuredImage: '/images/bangkok-food.jpg',
    category: 'food',
    tags: ['Thailand', 'Street Food', 'Bangkok', 'Culinary Travel'],
    author: 'Emma',
    publishedAt: '2024-01-02',
    readTime: 6,
  },
  {
    id: '4',
    title: 'Living With a Berber Family in Morocco\'s Atlas Mountains',
    slug: 'living-with-berber-family-morocco',
    excerpt: 'An invitation to stay with a local family in a remote mountain village became the most meaningful week of my travels.',
    content: `
      <p>The road to Imlil winds through increasingly dramatic scenery until you reach a world that feels untouched by time. Here, in the shadow of North Africa's highest peak, I was welcomed into a Berber home.</p>
      
      <h2>Daily Rhythms</h2>
      <p>Life here follows the sun. I woke with the family at dawn, helped prepare breakfast – fresh mint tea, warm bread baked in a traditional clay oven, olive oil from their own trees. The matriarch, Fatima, communicated through gestures and smiles, teaching me to make tagine with the patience of a saint.</p>
      
      <h2>The Art of Hospitality</h2>
      <p>Moroccan hospitality is legendary, but experiencing it firsthand is humbling. Despite having little in material terms, the family shared everything. Every meal was a feast, every conversation (translated through their English-speaking son) an education in their history and traditions.</p>
      
      <p>On my last evening, we gathered on the rooftop under stars more brilliant than any I'd seen. The village spread below us, tiny lights flickering in stone houses. Fatima took my hands and said something in Berber. Her son translated: "You are always family now."</p>
    `,
    featuredImage: '/images/morocco.jpg',
    category: 'culture',
    tags: ['Morocco', 'Cultural Immersion', 'Homestay', 'Mountains'],
    author: 'Emma',
    publishedAt: '2023-12-20',
    readTime: 7,
  },
  {
    id: '5',
    title: 'Island Hopping in Greece: Beyond Santorini',
    slug: 'island-hopping-greece-beyond-santorini',
    excerpt: 'While the famous islands draw crowds, the lesser-known Cyclades offer authentic Greek experiences and stunning beauty without the tourist overwhelm.',
    content: `
      <p>Everyone knows Santorini and Mykonos. But sail a few hours east, and you'll find islands where time moves differently – where fishermen still mend nets by hand and tavernas serve grandma's recipes.</p>
      
      <h2>Discovering Folegandros</h2>
      <p>This tiny island became my unexpected favorite. The chora, perched dramatically on cliff edges, is a maze of white-washed alleys and bougainvillea-draped doorways. I spent mornings at a single café, watching the local life unfold.</p>
      
      <p>The beaches here require effort – steep hikes down rocky paths. But that effort filters out the crowds, leaving pristine coves where the Aegean is impossibly blue and yours alone.</p>
      
      <h2>The Slow Island Life</h2>
      <p>Greece taught me the true meaning of "siga siga" – slowly, slowly. Meals last for hours, conversations meander, and there's always time for another coffee. After weeks of island hopping, I realized the greatest luxury isn't the view – it's the pace.</p>
    `,
    featuredImage: '/images/greece.jpg',
    category: 'destinations',
    tags: ['Greece', 'Islands', 'Mediterranean', 'Off the Beaten Path'],
    author: 'Emma',
    publishedAt: '2023-12-10',
    readTime: 6,
  },
  {
    id: '6',
    title: 'A Photographer\'s Guide to Golden Hour Travel',
    slug: 'photographers-guide-golden-hour',
    excerpt: 'The magic of travel photography often lies in timing. Here\'s how I plan my days around the light.',
    content: `
      <p>That warm, honeyed light in the hour before sunset isn't just beautiful – it's transformative. It turns ordinary scenes into extraordinary photographs and good trips into unforgettable ones.</p>
      
      <h2>Planning Around Light</h2>
      <p>I've learned to structure my travel days around the light. Wake before dawn for those ethereal blue-hour moments when cities are silent and landscapes are draped in mist. Rest midday when the harsh sun flattens everything. Then emerge again as the light softens into gold.</p>
      
      <h2>The Practical Side</h2>
      <p>Apps like PhotoPills help me predict exactly where the sun will be, so I can find the perfect vantage point before the moment arrives. But beyond technology, it's about patience and presence – being willing to wait, to return to the same spot day after day until conditions align.</p>
      
      <p>The best travel photographs tell stories. The light is just the language in which they're written.</p>
    `,
    featuredImage: '/images/golden-hour.jpg',
    category: 'tips',
    tags: ['Photography', 'Travel Tips', 'Golden Hour', 'Creative'],
    author: 'Emma',
    publishedAt: '2023-12-01',
    readTime: 5,
  },
];

export const categories: { id: Category; name: string; description: string }[] = [
  {
    id: 'destinations',
    name: 'Destinations',
    description: 'Places that captured my heart and imagination',
  },
  {
    id: 'tips',
    name: 'Travel Tips',
    description: 'Practical advice from lessons learned on the road',
  },
  {
    id: 'food',
    name: 'Food & Drink',
    description: 'Culinary adventures and the stories behind the meals',
  },
  {
    id: 'culture',
    name: 'Culture',
    description: 'Connections made and traditions discovered',
  },
];

export const getPostsByCategory = (category: Category): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};
