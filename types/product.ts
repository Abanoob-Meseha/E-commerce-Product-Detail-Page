export type tProductVariationProp = {
  id: string;
  name?: string;
  value?: string;
  variation_id: string;
};

export type tProductVariation = {
  id: string;
  name: string;
  type: "image" | "button" | string;
  product_id: string;
  props: tProductVariationProp[];
};

export type tProductVariantProp = {
  id: string;
  variation: string;
  variation_prop: string;
  product_variant_id: string;
};

export type tProductVariant = {
  id: string;
  product_id: string;
  price: number;
  sale_price: number;
  quantity: number;
  taager_code: string;
  variation_props: tProductVariantProp[];
};

export type tProductCategory = {
  id: string;
  name: string;
  slug: string;
  thumb: string;
  created_at: string;
  updated_at: string;
  store_id: string;
  show_in_header: boolean;
  position: number;
  children: any; // or null
  products: any; // or null
};

export type tDigitalLink = {
  id: string;
  link: string;
  created_at: string;
  updated_at: string;
  product_id: string;
  sales_count: number;
  users: any;
  product: any;
};

export type tProduct = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sale_price: number;
  thumb: string;
  images: string[];
  quantity: number;
  track_stock: boolean;
  disable_orders_for_no_stock: boolean;
  show_landing_in_same_page: boolean;
  is_fixed_bottom_buy: boolean;
  is_one_page_checkout: boolean;
  is_quantity_hidden: boolean;
  is_header_hidden: boolean;
  is_free_shipping: boolean;
  buy_now_text: string;
  custom_currency: string;
  is_digital: boolean;
  is_cloaking_active: boolean;
  is_taager_submit_active: boolean;
  is_ecombo_submit_active: boolean;
  is_mosaweq_submit_active: boolean;
  is_alturky_submit_active: boolean;
  is_jamaica_submit_active: boolean;
  is_engzny_submit_active: boolean;
  fake_visitors_min: number;
  fake_visitors_max: number;
  fake_timer_hours: number;
  hidden: boolean;
  position: number;
  created_at: string;
  updated_at: string;
  store_id: string;

  variations: tProductVariation[];
  variants: tProductVariant[];
  categories: tProductCategory[];
  digital_link: tDigitalLink;
};

// for just Demo
export type tCollectProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  sold_count: number;
  img: string ;
};

export type tBarRating = {
  id: number ;
  rating: number ;
  percentage: number ;
  ratingsCount: number;
}