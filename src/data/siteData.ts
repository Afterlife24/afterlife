import { NavItem, ResourceItem, TestimonialItem, ArticleItem, EventItem } from '../types';

export const siteConfig = {
  name: "Afterlife",
  description: "Exploring the journey beyond life and connecting with spiritual dimensions",
  url: "https://afterlife.org"
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Resources", href: "/#resources" },
  { title: "Experiences", href: "/#experiences" },
  { title: "Events", href: "/#events" },
  { title: "Articles", href: "/#articles" },
  { title: "Contact", href: "/#contact" }
];

export const resources: ResourceItem[] = [
  {
    id: 1,
    title: "Spiritual Guidance",
    description: "Discover paths to spiritual awakening and understanding of the afterlife through our curated resources.",
    icon: "heart"
  },
  {
    id: 2,
    title: "Meditation Practices",
    description: "Learn meditation techniques that help connect with higher consciousness and spiritual realms.",
    icon: "flower"
  },
  {
    id: 3,
    title: "Sacred Texts",
    description: "Explore ancient wisdom and teachings about the afterlife from various spiritual traditions.",
    icon: "book-open"
  },
  {
    id: 4,
    title: "Personal Experiences",
    description: "Read accounts from individuals who have experienced profound spiritual connections.",
    icon: "users"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "After attending the spiritual guidance sessions, I found peace with the concept of afterlife that had troubled me for years. The compassionate approach helped me overcome my fears.",
    name: "Priya Sharma",
    location: "Delhi"
  },
  {
    id: 2,
    quote: "The meditation practices taught here opened a new dimension in my spiritual journey. I've connected with a sense of purpose I never knew existed.",
    name: "Rahul Mehra",
    location: "Mumbai"
  },
  {
    id: 3,
    quote: "Finding this community was life-changing. The resources and support helped me navigate grief while exploring spiritual understanding of the afterlife.",
    name: "Aisha Khan",
    location: "Bangalore"
  }
];

export const articles: ArticleItem[] = [
  {
    id: 1,
    title: "Understanding Near-Death Experiences",
    excerpt: "Exploring the science and spirituality behind near-death experiences and what they reveal about consciousness.",
    date: "April 15, 2025",
    image: "https://images.pexels.com/photos/775199/pexels-photo-775199.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Consciousness"
  },
  {
    id: 2,
    title: "Ancient Wisdom on the Afterlife",
    excerpt: "How different cultures and spiritual traditions have understood and described the journey after death.",
    date: "April 3, 2025",
    image: "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Traditions"
  },
  {
    id: 3,
    title: "Meditation as a Bridge to Spiritual Realms",
    excerpt: "Techniques and practices that help develop awareness beyond the physical realm.",
    date: "March 27, 2025",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Practices"
  }
];

export const events: EventItem[] = [
  {
    id: 1,
    title: "Introduction to Afterlife Concepts",
    date: "June 10, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual Zoom Session",
    description: "A beginner-friendly exploration of afterlife concepts across various spiritual traditions."
  },
  {
    id: 2,
    title: "Meditation Retreat: Connecting with Higher Consciousness",
    date: "July 15-17, 2025",
    time: "Full Day",
    location: "Rishikesh Retreat Center",
    description: "A three-day immersive retreat focusing on meditation practices that help expand consciousness."
  },
  {
    id: 3,
    title: "Grief and Spiritual Understanding Workshop",
    date: "August 5, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Community Center, Delhi",
    description: "A compassionate workshop addressing grief through spiritual understanding of the afterlife."
  }
];