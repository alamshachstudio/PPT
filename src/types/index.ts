// Section props
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'cream' | 'white' | 'primary';
}

// Section title props
export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

// Card props
export interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

// Button props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

// Content item for lists
export interface ContentItem {
  id: number;
  text: string;
  icon?: string;
}

// Feature item
export interface FeatureItem {
  id: number;
  title: string;
  description?: string;
  icon: string;
}

// Screenshot item for gallery
export interface ScreenshotItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

// Testing table
export interface TestingTableItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

// Navigation item
export interface NavItem {
  id: string;
  label: string;
}

// Tujuan Manfaat structure
export interface TujuanManfaatData {
  tujuan: ContentItem[];
  manfaatWarga: ContentItem[];
  manfaatPengurus: ContentItem[];
}

// Fitur Sistem structure
export interface FiturSistemData {
  admin: FeatureItem[];
  warga: FeatureItem[];
}

// Analisis Kebutuhan structure
export interface AnalisisKebutuhanData {
  metode: ContentItem[];
  hasil: string;
}

// Image modal props
export interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}
