export interface NavItem {
  title: string;
  href: string;
}

export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  location: string;
}

export interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}