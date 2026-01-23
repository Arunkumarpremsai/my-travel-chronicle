export type Category = 'destinations' | 'tips' | 'food' | 'culture';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  { id: 'destinations', name: 'Destinations', description: 'Explore breathtaking places around the world' },
  { id: 'tips', name: 'Tips', description: 'Practical advice for smarter travel' },
  { id: 'food', name: 'Food', description: 'Culinary adventures and local flavors' },
  { id: 'culture', name: 'Culture', description: 'Immerse yourself in local traditions' },
];

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
    content: `<p>There's something magical about waking up to the sound of a distant temple bell...</p>`,
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
    excerpt: 'After years of overpacking and dragging heavy suitcases, I finally embraced the freedom of traveling with just a carry-on.',
    content: `<p>I used to be that traveler – the one with the overweight suitcase...</p>`,
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
    content: `<p>Bangkok doesn't sleep, and neither does its food scene...</p>`,
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
    content: `<p>The road to Imlil winds through increasingly dramatic scenery...</p>`,
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
    excerpt: 'While the famous islands draw crowds, the lesser-known Cyclades offer authentic Greek experiences.',
    content: `<p>Everyone knows Santorini and Mykonos...</p>`,
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
    content: `<p>That warm, honeyed light in the hour before sunset...</p>`,
    featuredImage: '/images/golden-hour.jpg',
    category: 'tips',
    tags: ['Photography', 'Travel Tips', 'Golden Hour', 'Creative'],
    author: 'Emma',
    publishedAt: '2023-12-01',
    readTime: 5,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};
