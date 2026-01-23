import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost, Category } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

// Import images
import takayamaImg from '@/assets/images/takayama.jpg';
import packingImg from '@/assets/images/packing.jpg';
import bangkokFoodImg from '@/assets/images/bangkok-food.jpg';
import moroccoImg from '@/assets/images/morocco.jpg';
import greeceImg from '@/assets/images/greece.jpg';
import goldenHourImg from '@/assets/images/golden-hour.jpg';

const imageMap: Record<string, string> = {
  '/images/takayama.jpg': takayamaImg,
  '/images/packing.jpg': packingImg,
  '/images/bangkok-food.jpg': bangkokFoodImg,
  '/images/morocco.jpg': moroccoImg,
  '/images/greece.jpg': greeceImg,
  '/images/golden-hour.jpg': goldenHourImg,
};

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const categoryStyles: Record<Category, string> = {
  destinations: 'category-destinations',
  tips: 'category-tips',
  food: 'category-food',
  culture: 'category-culture',
};

const categoryLabels: Record<Category, string> = {
  destinations: 'Destinations',
  tips: 'Tips',
  food: 'Food',
  culture: 'Culture',
};

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageSrc = imageMap[post.featuredImage] || post.featuredImage;

  if (featured) {
    return (
      <article className="blog-card group">
        <Link to={`/blog/${post.slug}`} className="block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={imageSrc}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className={cn('category-badge mb-3', categoryStyles[post.category])}>
                {categoryLabels[post.category]}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground font-medium leading-tight mb-3">
                {post.title}
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base line-clamp-2 max-w-2xl">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 mt-4 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="blog-card group">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <span className={cn('category-badge mb-3', categoryStyles[post.category])}>
            {categoryLabels[post.category]}
          </span>
          <h3 className="font-heading text-xl font-medium text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-xs">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime} min
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
