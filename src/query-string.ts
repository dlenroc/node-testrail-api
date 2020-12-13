export function stringify(object?: Record<string, any>): string {
  if (!object) {
    return '';
  }

  let qs = '';

  for (const [key, value] of Object.entries(object)) {
    let newValue = value;

    if (typeof value === 'boolean') {
      newValue = +value;
    } else if (Array.isArray(value)) {
      newValue = value.join(',');
    }

    qs += `&${key}=${encodeURIComponent(newValue)}`;
  }

  return qs;
}
