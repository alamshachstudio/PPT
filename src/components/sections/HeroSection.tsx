import Button from '@/components/ui/Button';
import { heroContent } from '@/data/content';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--cream-light)] via-[var(--cream)] to-[var(--cream-dark)] pt-20"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span>🎓</span>
            <span>Capstone Project 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">{heroContent.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[var(--primary-light)] font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {heroContent.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {heroContent.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button href="#latar-belakang" size="lg">
              {heroContent.primaryButton}
            </Button>
            <Button href="#download" variant="outline" size="lg">
              {heroContent.secondaryButton}
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-float">
            <a
              href="#latar-belakang"
              className="inline-flex flex-col items-center text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
            >
              <span className="text-sm mb-2">Scroll ke bawah</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[var(--primary)]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl" />
    </section>
  );
}
