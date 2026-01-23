import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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

interface HeroProps {
  post: BlogPost;
}

const Hero = ({ post }: HeroProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageSrc = imageMap[post.featuredImage] || post.featuredImage;

  return (
    <section className="relative h-[70vh] md:h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container relative h-full flex items-end pb-12 md:pb-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-medium leading-tight mb-4">
            {post.title}
          </h1>
          
          <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <Calendar size={16} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <Clock size={16} />
              {post.readTime} min read
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full font-medium text-sm hover:bg-primary-foreground/90 transition-colors group"
          >
            Read Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
