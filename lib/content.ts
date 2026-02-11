/**
 * Core Meanings 섹션 이후에서 콘텐츠를 분리합니다.
 * CTA를 Core Meanings 직후, 다음 H2 섹션 전에 삽입하기 위함.
 */
export function splitContentAfterCoreMeanings(html: string): [string, string] {
  // Core Meanings 헤더를 찾음 (다양한 언어/변형 고려)
  const coreMeaningsPatterns = [
    /<h2[^>]*>.*?(Core|Deep|Main|Key|Primary)\s+(Meanings?|Interpretations?).*?<\/h2>/i,
    /<h2[^>]*>.*?(핵심|주요)\s*(의미|해석).*?<\/h2>/i,
    /<h2[^>]*>.*?(核心|主要)\s*(含義|解讀).*?<\/h2>/i,
    /<h2[^>]*>.*?(Bedeutungen?|Interpretationen?)\s*(im\s+Kern)?.*?<\/h2>/i,
    /<h2[^>]*>.*?(Significations?\s+Principales?).*?<\/h2>/i,
    /<h2[^>]*>.*?(Significados?\s+Principales?).*?<\/h2>/i,
    /<h2[^>]*>.*?(意味|深い意味).*?<\/h2>/i,
  ];
  
  let coreMeaningsEnd = -1;
  
  for (const pattern of coreMeaningsPatterns) {
    const match = html.match(pattern);
    if (match && match.index !== undefined) {
      // Core Meanings 헤더 찾음, 이제 그 다음 H2를 찾아야 함
      const afterCoreMeanings = html.slice(match.index + match[0].length);
      const nextH2Match = afterCoreMeanings.match(/<h2[^>]*>/i);
      
      if (nextH2Match && nextH2Match.index !== undefined) {
        coreMeaningsEnd = match.index + match[0].length + nextH2Match.index;
        break;
      }
    }
  }
  
  // Core Meanings를 못 찾으면 대안 섹션 찾기
  if (coreMeaningsEnd === -1) {
    const fallbackPatterns = [
      /<h2[^>]*>.*?(Common|Typical)\s+Scenarios?.*?<\/h2>/i,
      /<h2[^>]*>.*?(Variations?|Different\s+Types?).*?<\/h2>/i,
      /<h2[^>]*>.*?Breaking\s+Down.*?<\/h2>/i,
      /<h2[^>]*>.*?in\s+Different\s+Life\s+Areas.*?<\/h2>/i,
    ];
    
    for (const pattern of fallbackPatterns) {
      const match = html.match(pattern);
      if (match && match.index !== undefined) {
        coreMeaningsEnd = match.index;
        break;
      }
    }
  }
  
  // 여전히 못 찾으면 CTA 삽입 안 함 (전체 콘텐츠 반환)
  if (coreMeaningsEnd === -1) {
    return [html, ""];
  }
  
  return [html.slice(0, coreMeaningsEnd), html.slice(coreMeaningsEnd)];
}
