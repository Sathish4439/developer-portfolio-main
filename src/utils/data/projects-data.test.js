import { describe, it, expect } from 'vitest';
import { projectsData } from './projects-data';

describe('projectsData', () => {
  it('should be an array', () => {
    expect(Array.isArray(projectsData)).toBe(true);
  });

  it('should have unique IDs', () => {
    const ids = projectsData.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  it('should have required properties for each project', () => {
    projectsData.forEach(project => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('tools');
      expect(Array.isArray(project.tools)).toBe(true);
      expect(project).toHaveProperty('role');
    });
  });

  it('should include the Judah apps', () => {
    const names = projectsData.map(p => p.name);
    expect(names).toContain('Judah Food Delivery - User App');
    expect(names).toContain('Judah Delivery Partner - Agent App');
    expect(names).toContain('Judah Restaurant Partner - Vendor App');
  });
});
