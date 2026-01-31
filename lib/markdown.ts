import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

type Locale = 'en' | 'es' | 'ja' | 'ko' | 'zh-hant';

function getContentDir(locale: Locale): string {
  return path.join(process.cwd(), 'content', locale);
}

export function getAllAngelNumberSlugs(locale: Locale = 'en'): string[] {
  const contentDir = getContentDir(locale);
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

export async function readMarkdownFile(slug: string, locale: Locale = 'en') {
  const contentDir = getContentDir(locale);
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

export function getAlternateLanguages(slug: string): { locale: Locale; url: string }[] {
  const locales: Locale[] = ['en', 'es', 'ja', 'ko', 'zh-hant'];
  const alternates: { locale: Locale; url: string }[] = [];
  
  for (const locale of locales) {
    const contentDir = getContentDir(locale);
    const filePath = path.join(contentDir, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      alternates.push({ locale, url: `/${locale}/angel-numbers/${slug}` });
    }
  }
  
  return alternates;
}