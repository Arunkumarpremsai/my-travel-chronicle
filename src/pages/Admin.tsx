import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Eye, ArrowLeft, Image, Tag } from 'lucide-react';
import { blogPosts, categories, BlogPost, Category } from '@/data/blogPosts';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// Import images for preview
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

type View = 'list' | 'edit' | 'new';

const Admin = () => {
  const [currentView, setCurrentView] = useState<View>('list');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState(blogPosts);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'destinations' as Category,
    tags: '',
    featuredImage: '',
  });

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content.replace(/<[^>]*>/g, ''),
      category: post.category,
      tags: post.tags.join(', '),
      featuredImage: post.featuredImage,
    });
    setCurrentView('edit');
  };

  const handleNewPost = () => {
    setSelectedPost(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'destinations',
      tags: '',
      featuredImage: '/images/takayama.jpg',
    });
    setCurrentView('new');
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter((p) => p.id !== postId));
    toast.success('Post deleted successfully');
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    
    const postData: BlogPost = {
      id: selectedPost?.id || Date.now().toString(),
      title: formData.title,
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
      excerpt: formData.excerpt,
      content: `<p>${formData.content.replace(/\n\n/g, '</p><p>')}</p>`,
      category: formData.category,
      tags: formData.tags.split(',').map((t) => t.trim()),
      featuredImage: formData.featuredImage,
      author: 'Emma',
      publishedAt: selectedPost?.publishedAt || new Date().toISOString().split('T')[0],
      readTime: Math.ceil(formData.content.split(' ').length / 200),
    };

    if (selectedPost) {
      setPosts(posts.map((p) => (p.id === selectedPost.id ? postData : p)));
      toast.success('Post updated successfully');
    } else {
      setPosts([postData, ...posts]);
      toast.success('Post created successfully');
    }

    setCurrentView('list');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && !selectedPost ? { slug: value.toLowerCase().replace(/\s+/g, '-') } : {}),
    }));
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Admin Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="font-heading text-xl font-medium text-foreground">
                Admin Dashboard
              </h1>
            </div>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View Site
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {currentView === 'list' && (
          <>
            {/* Actions Bar */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-heading text-2xl font-medium text-foreground">Blog Posts</h2>
                <p className="text-muted-foreground text-sm">{posts.length} posts total</p>
              </div>
              <button
                onClick={handleNewPost}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Plus size={16} />
                New Post
              </button>
            </div>

            {/* Posts Table */}
            <div className="bg-card rounded-lg shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Post
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Category
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Date
                      </th>
                      <th className="text-right px-6 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={imageMap[post.featuredImage] || post.featuredImage}
                              alt={post.title}
                              className="w-16 h-12 object-cover rounded"
                            />
                            <div>
                              <h3 className="font-medium text-foreground text-sm line-clamp-1">
                                {post.title}
                              </h3>
                              <p className="text-muted-foreground text-xs line-clamp-1">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={cn(
                            'category-badge',
                            post.category === 'destinations' && 'category-destinations',
                            post.category === 'tips' && 'category-tips',
                            post.category === 'food' && 'category-food',
                            post.category === 'culture' && 'category-culture'
                          )}>
                            {post.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/blog/${post.slug}`}
                              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                              title="View"
                            >
                              <Eye size={16} />
                            </Link>
                            <button
                              onClick={() => handleEditPost(post)}
                              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                              title="Edit"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {(currentView === 'edit' || currentView === 'new') && (
          <>
            {/* Edit/New Post Form */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setCurrentView('list')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h2 className="font-heading text-2xl font-medium text-foreground">
                {currentView === 'edit' ? 'Edit Post' : 'New Post'}
              </h2>
            </div>

            <form onSubmit={handleSavePost} className="max-w-3xl">
              <div className="bg-card rounded-lg shadow-soft p-6 space-y-6">
                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Post title"
                  />
                </div>

                {/* Slug */}
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-foreground mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="post-url-slug"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Featured Image */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <span className="flex items-center gap-2">
                      <Image size={16} />
                      Featured Image
                    </span>
                  </label>
                  <select
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="/images/takayama.jpg">Takayama, Japan</option>
                    <option value="/images/packing.jpg">Packing Flat Lay</option>
                    <option value="/images/bangkok-food.jpg">Bangkok Street Food</option>
                    <option value="/images/morocco.jpg">Morocco Atlas Mountains</option>
                    <option value="/images/greece.jpg">Greek Islands</option>
                    <option value="/images/golden-hour.jpg">Golden Hour Photography</option>
                  </select>
                  {formData.featuredImage && (
                    <img
                      src={imageMap[formData.featuredImage]}
                      alt="Preview"
                      className="mt-3 w-full max-w-md h-48 object-cover rounded-lg"
                    />
                  )}
                </div>

                {/* Excerpt */}
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-foreground mb-2">
                    Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Brief description for post previews..."
                  />
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-foreground mb-2">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={12}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none font-mono text-sm"
                    placeholder="Write your story here... Use double line breaks for paragraphs."
                  />
                </div>

                {/* Tags */}
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-foreground mb-2">
                    <span className="flex items-center gap-2">
                      <Tag size={16} />
                      Tags (comma separated)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Japan, Mountains, Photography"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                  >
                    {currentView === 'edit' ? 'Update Post' : 'Publish Post'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentView('list')}
                    className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
};

export default Admin;
