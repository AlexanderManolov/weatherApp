export const toQueryString = (obj: Record<string, string | number | boolean | string[] | undefined>): string => {
  const parts: string[] = [];
  for (const key in obj) {
    const value = obj[key];

    if (value) {
      if (Array.isArray(value)) {
        value.forEach(item => parts.push(`${key}=${encodeURIComponent(item)}`));
      } else {
        parts.push(`${key}=${encodeURIComponent(value.toString())}`);
      }
    }
  }

  return parts.join('&');
}
