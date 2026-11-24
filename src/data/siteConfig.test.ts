import { describe, expect, it } from 'vitest';
import { siteConfig } from './siteConfig';

describe('siteConfig domain invariants', () => {
  it('defines 3 identical country houses in San José de Jáchal at 2 km from downtown', () => {
    expect(siteConfig.name).toBe('La Huella');
    expect(siteConfig.tagline).toBe('Casas de Campo');
    expect(siteConfig.unitsCount).toBe(3);
    expect(siteConfig.locationShort).toContain('San José de Jáchal');
    expect(siteConfig.distanceToCenter).toContain('2 km');
  });

  it('references all 7 real photographs from /images/1.png through /images/7.png', () => {
    const gallerySrcs = siteConfig.gallery.map((item) => item.src);
    expect(gallerySrcs).toHaveLength(7);
    for (let i = 1; i <= 7; i++) {
      expect(gallerySrcs).toContain(`/images/${i}.png`);
    }
  });

  it('strictly excludes any mention of eventos across all copy and metadata', () => {
    const serialized = JSON.stringify(siteConfig).toLowerCase();
    expect(serialized).not.toContain('evento');
  });
});
