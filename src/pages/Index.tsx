import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import { getRecentPosts, categories } from '@/data/blogPosts';

const Index = () => {
  const recentPosts = getRecentPosts(6);
  const [featuredPost, ...otherPosts] = recentPosts;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero post={featuredPost} />

      {/* Recent Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                Recent Stories
              </h2>
              <p className="text-muted-foreground mt-2">
                The latest adventures from around the world
              </p>
            </div>
            <Link 
              to="/category/destinations" 
              className="hidden md:flex items-center gap-2 text-accent font-medium text-sm hover:underline"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link 
              to="/category/destinations" 
              className="inline-flex items-center gap-2 text-accent font-medium text-sm"
            >
              View all stories
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
            Explore by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group p-6 bg-card rounded-lg shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4">
              Join the Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe for travel stories, tips, and inspiration delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
