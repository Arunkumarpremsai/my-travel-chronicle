import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getPostsByCategory, categories, Category as CategoryType } from '@/data/blogPosts';

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const posts = categoryId ? getPostsByCategory(categoryId as CategoryType) : [];

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Category Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Category Header */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-2xl">
            <nav className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-muted-foreground text-lg">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, index) => (
                <div 
                  key={post.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Category;
