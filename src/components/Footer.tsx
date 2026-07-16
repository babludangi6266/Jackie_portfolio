import { Container } from '@/components/ui';
import { footer } from '@/data/personal';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-white">
      <Container className="py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{footer.name}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {footer.titles.map((title, index) => (
                <span key={index} className="px-3 py-1 bg-primary-900/30 text-primary-300 text-sm rounded-full border border-primary-800">
                  {title}
                </span>
              ))}
            </div>
            <p className="text-dark-400 max-w-md leading-relaxed">
              Building digital products at the intersection of business strategy and technology.
              Helping startups and enterprises transform ideas into scalable solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <nav className="space-y-3">
              {footer.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-dark-400 hover:text-primary-400 transition-colors block"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <nav className="space-y-3">
              {footer.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
                >
                  <span className="w-5 h-5">{item.icon === 'linkedin' ? (
                    <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ) : (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  )}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            {footer.copyright.replace('2026', currentYear.toString())}
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-dark-500 hover:text-primary-400 transition-colors text-sm font-medium">Back to top</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};