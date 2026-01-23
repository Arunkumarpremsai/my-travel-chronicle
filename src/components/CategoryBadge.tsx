import { Link } from 'react-router-dom';
import { Category } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: Category;
  clickable?: boolean;
  className?: string;
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

const CategoryBadge = ({ category, clickable = false, className }: CategoryBadgeProps) => {
  const badgeClass = cn('category-badge', categoryStyles[category], className);
  
  if (clickable) {
    return (
      <Link to={`/category/${category}`} className={cn(badgeClass, 'hover:opacity-80 transition-opacity')}>
        {categoryLabels[category]}
      </Link>
    );
  }

  return (
    <span className={badgeClass}>
      {categoryLabels[category]}
    </span>
  );
};

export default CategoryBadge;
