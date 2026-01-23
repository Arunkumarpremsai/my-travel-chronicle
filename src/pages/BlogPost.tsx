import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryBadge from '@/components/CategoryBadge';
import BlogCard from '@/components/BlogCard';
import { getPostBySlug, getRecentPosts } from '@/data/blogPosts';

// Import images
import takayamaImg from '@/assets/images/takayama.jpg';
import packingImg from '@/assets/images/packing.jpg';
import bangkokFoodImg from '@/assets/images/bangkok-food.jpg';
import moroccoImg from '@/assets/images/morocco.jpg';
import greeceImg from '@/assets/images/greece.jpg';
import goldenHourImg from '@/assets/images/golden-hour.jpg';
import authorImg from '@/assets/images/author.jpg';

const imageMap: Record<string, string> = {
  '/images/takayama.jpg': takayamaImg,
  '/images/packing.jpg': packingImg,
  '/images/bangkok-food.jpg': bangkokFoodImg,
  '/images/morocco.jpg': moroccoImg,
  '/images/greece.jpg': greeceImg,
  '/images/golden-hour.jpg': goldenHourImg,
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');
  const relatedPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Post Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageSrc = imageMap[post.featuredImage] || post.featuredImage;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] max-h-[600px] overflow-hidden">
        <img
          src={imageSrc}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Article Content */}
      <article className="container">
        <div className="max-w-3xl mx-auto -mt-32 relative z-10">
          {/* Header Card */}
          <div className="bg-card rounded-lg shadow-medium p-6 md:p-10 mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>

            <CategoryBadge category={post.category} clickable className="mb-4" />

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm border-b border-border pb-6 mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src={authorImg} 
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime} min read
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <div 
            className="prose-travel text-lg px-4 md:px-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="border-t border-border mt-12 pt-8 flex items-center justify-between">
            <span className="text-muted-foreground text-sm">
              Enjoyed this story? Share it with others.
            </span>
            <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <section className="py-16 md:py-24">
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground text-center mb-10">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
