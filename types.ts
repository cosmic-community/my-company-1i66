export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name?: string;
    description?: string;
    display_order?: number;
  };
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    description?: string;
    price?: number | string;
    image?: {
      url: string;
      imgix_url: string;
    };
    category?: MenuCategory;
    dietary_tags?: string[];
    featured?: boolean;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
    map_url?: string;
    reservation_url?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}