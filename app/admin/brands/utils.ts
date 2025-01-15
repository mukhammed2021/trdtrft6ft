import { Brand } from "./types";

export function createEmptyBrand(): Brand {
  return {
    name: "",
    title: "",
    description: "",
    welcomeText: "",
    address: "",
    mapLink: "",
    phone: "",
    whatsapp: "",
    email: "",
    slug: "",
    heroImage: "",
    workingHours: {
      weekdays: "",
      weekends: ""
    },
    mainGallery: [],
    navigationTags: [],
    brandHistory: {
      title: "",
      description: ""
    },
    features: [],
    specialOffers: [],
    bottomGallery: [],
    gallery: {
      title: "",
      description: "",
      images: []
    }
  };
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '-');
}

export function isValidImageUrl(url: string): boolean {
  if (!url) return false;

  // Для data: URLs (превью)
  if (url.startsWith('data:image/')) return true;

  // Для blob: URLs (загрузка файлов)
  if (url.startsWith('blob:')) return true;

  // Для относительных путей
  if (url.startsWith('/')) return true;

  // Для абсолютных URL
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function getImageUrl(path: string | null) {
  if (!path) return '';
  
  // Если URL начинается с http или https - возвращаем как есть
  if (path.startsWith('http')) {
    return path;
  }
  
  // Иначе добавляем /uploads/
  return `/uploads/${path}`;
}

export function parseJsonField<T>(field: unknown, defaultValue: T): T {
  if (!field) return defaultValue;
  
  try {
    if (typeof field === 'string') {
      return JSON.parse(field);
    }
    return field as T;
  } catch {
    return defaultValue;
  }
}

export function serializeJsonField<T>(field: T): string {
  return JSON.stringify(field);
} 