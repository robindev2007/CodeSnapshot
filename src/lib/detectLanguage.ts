/**
 * Fast, accurate client-side language detection for code snippets.
 * Uses syntax pattern heuristics to reliably identify languages.
 */

interface DetectResult {
  languageKey: string;
  name: string;
  confidence: number;
}

export function detectLanguage(code: string): DetectResult {
  const trimmed = code.trim();
  if (!trimmed) {
    return { languageKey: "javascript", name: "JavaScript", confidence: 0 };
  }

  // 1. Shebang
  const firstLine = trimmed.split("\n")[0].trim();
  if (firstLine.startsWith("#!")) {
    if (firstLine.includes("python")) return { languageKey: "python", name: "Python", confidence: 0.99 };
    if (firstLine.includes("node")) return { languageKey: "javascript", name: "JavaScript", confidence: 0.99 };
    if (firstLine.includes("bash") || firstLine.includes("sh")) return { languageKey: "shell", name: "Bash", confidence: 0.99 };
  }

  // 2. JSON check
  if ((trimmed.startsWith("{") && trimmed.endsWith("}")) || (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
    try {
      JSON.parse(trimmed);
      return { languageKey: "json", name: "JSON", confidence: 0.98 };
    } catch {
      // not strict JSON, continue
    }
  }

  // 3. Dockerfile
  if (/^\s*(FROM|RUN|COPY|WORKDIR|EXPOSE|ENTRYPOINT|CMD)\s+/m.test(trimmed)) {
    return { languageKey: "dockerfile", name: "Docker", confidence: 0.95 };
  }

  // 4. HTML / XML
  if (/^\s*<!DOCTYPE\s+html/i.test(trimmed) || /<\/?(html|head|body|div|span|p|a|ul|li|h[1-6]|table|button|form|input)[>\s]/i.test(trimmed)) {
    if (trimmed.includes("<?xml") || (trimmed.includes("<") && trimmed.includes("</") && !trimmed.includes("function") && !trimmed.includes("const "))) {
      return { languageKey: "html", name: "HTML", confidence: 0.92 };
    }
  }

  // 5. SQL
  if (/\b(SELECT\s+.+\s+FROM|INSERT\s+INTO|CREATE\s+TABLE|UPDATE\s+.+\s+SET|DELETE\s+FROM|ALTER\s+TABLE)\b/i.test(trimmed)) {
    return { languageKey: "sql", name: "SQL", confidence: 0.95 };
  }

  // 6. Rust
  if (/\b(fn\s+main|pub\s+fn|let\s+mut\b|impl\b.+for\b|use\s+std::|println!|match\s+.+\s*\{)\b/.test(trimmed)) {
    return { languageKey: "rust", name: "Rust", confidence: 0.95 };
  }

  // 7. Go
  if (/\b(package\s+main|func\s+main\(\)|func\s*\([a-zA-Z0-9_*]+\s+[a-zA-Z0-9_]+\)|fmt\.Println|type\s+[A-Za-z0-9_]+\s+struct)\b/.test(trimmed)) {
    return { languageKey: "go", name: "Go", confidence: 0.95 };
  }

  // 8. Python
  if (/\b(def\s+[a-zA-Z0-9_]+\s*\(.*?\)\s*:|elif\b|if\s+__name__\s*==\s*['"]__main__['"]|import\s+(pandas|numpy|torch|sys|os|json|requests)\b|from\s+[a-zA-Z0-9_.]+\s+import\b|print\s*\(.*?\))/.test(trimmed) &&
      !trimmed.includes(";") && !trimmed.includes("function ") && !trimmed.includes("const ")) {
    return { languageKey: "python", name: "Python", confidence: 0.92 };
  }

  // 9. C++ / C# / Java
  if (/#include\s*<[a-zA-Z0-9_.]+>|std::cout|std::vector|int\s+main\s*\(/.test(trimmed)) {
    return { languageKey: "cpp", name: "C++", confidence: 0.95 };
  }
  if (/\busing\s+System(\.[a-zA-Z0-9_]+)*;|namespace\s+[A-Za-z0-9_.]+|Console\.WriteLine\s*\(/.test(trimmed)) {
    return { languageKey: "csharp", name: "C#", confidence: 0.95 };
  }
  if (/\bpublic\s+(static\s+void\s+main|class\s+[A-Za-z0-9_]+)|System\.out\.println\s*\(/.test(trimmed)) {
    return { languageKey: "java", name: "Java", confidence: 0.95 };
  }

  // 10. CSS / SCSS
  if (/@(media|keyframes|import)\b|[a-zA-Z0-9_-]+\s*:\s*[a-zA-Z0-9_#%()., -]+;/.test(trimmed) &&
      !trimmed.includes("const ") && !trimmed.includes("let ") && !trimmed.includes("var ")) {
    if (trimmed.includes("{") && trimmed.includes("}")) {
      return { languageKey: "css", name: "CSS", confidence: 0.88 };
    }
  }

  // 11. TypeScript / TSX
  if (/\b(interface\s+[A-Z][a-zA-Z0-9_]*|type\s+[A-Z][a-zA-Z0-9_]*\s*=|as\s+[A-Z][a-zA-Z0-9_]*|:\s*(string|number|boolean|any|unknown|void|Record<|Array<)[,);=>]|<[A-Z][a-zA-Z0-9_]*[^>]*\/>)/.test(trimmed)) {
    if (/<[A-Z][a-zA-Z0-9_]*|className=|onClick=/.test(trimmed)) {
      return { languageKey: "tsx", name: "TSX", confidence: 0.94 };
    }
    return { languageKey: "typescript", name: "TypeScript", confidence: 0.94 };
  }

  // 12. JSX / React
  if (/<[A-Z][a-zA-Z0-9_]*|className=|onClick=|useState|useEffect/.test(trimmed)) {
    return { languageKey: "jsx", name: "JSX", confidence: 0.90 };
  }

  // 13. Shell / Bash
  if (/^\s*(curl|wget|npm|bun|pnpm|yarn|git|cd|mkdir|rm\s+-rf|echo|chmod|chown|sudo|cat|grep)\s+/m.test(trimmed)) {
    return { languageKey: "shell", name: "Bash", confidence: 0.88 };
  }

  // 14. Markdown
  if (/^#{1,6}\s+.+|\*{1,2}[^*]+\*{1,2}|```[a-z]*\n/m.test(trimmed)) {
    return { languageKey: "markdown", name: "Markdown", confidence: 0.85 };
  }

  // 15. YAML
  if (/^\s*[a-zA-Z0-9_-]+:\s*[a-zA-Z0-9_ "'-]+$/m.test(trimmed) && trimmed.includes(":") && !trimmed.includes(";") && !trimmed.includes("{")) {
    return { languageKey: "yaml", name: "YAML", confidence: 0.82 };
  }

  // 16. JavaScript (Default for modern web)
  if (/\b(const|let|var|function|return|console\.log|import|export|await|async|class)\b/.test(trimmed)) {
    return { languageKey: "javascript", name: "JavaScript", confidence: 0.85 };
  }

  return { languageKey: "javascript", name: "JavaScript", confidence: 0.5 };
}

