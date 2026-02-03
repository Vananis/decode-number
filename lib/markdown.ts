import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export const locales = ['en', 'es', 'ja', 'ko', 'zh-hant'] as const;
export type Locale = (typeof locales)[number];
type ContentType = 'number' | 'birth-flower' | 'birth-stone' | 'zodiac';

function getContentDir(locale: Locale, contentType: ContentType = 'number'): string {
  return path.join(process.cwd(), 'content', locale, contentType);
}

export function getAllSlugs(locale: Locale = 'en', contentType: ContentType = 'number'): string[] {
  const contentDir = getContentDir(locale, contentType);
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

// Backward compatibility
export function getAllAngelNumberSlugs(locale: Locale = 'en'): string[] {
  return getAllSlugs(locale, 'number');
}

export async function readMarkdownFile(slug: string, locale: Locale = 'en', contentType: ContentType = 'number') {
  const contentDir = getContentDir(locale, contentType);
  const filePath = path.join(contentDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const html = await marked(content);

  return {
    frontmatter: data as {
      title?: string;
      description?: string;
      date?: string;
      tags?: string[];
    },
    content: html
  };
}

export function getAlternateLanguages(slug: string, contentType: ContentType = 'number'): { locale: Locale; url: string }[] {
  const locales: Locale[] = ['en', 'es', 'ja', 'ko', 'zh-hant'];
  const alternates: { locale: Locale; url: string }[] = [];
  
  for (const locale of locales) {
    const contentDir = getContentDir(locale, contentType);
    const filePath = path.join(contentDir, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      const urlPath = contentType === 'number' ? 'angel-numbers' : contentType;
      alternates.push({ locale, url: `/${locale}/${urlPath}/${slug}` });
    }
  }
  
  return alternates;
}
