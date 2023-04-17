export async function pagination<T>(key: string, filters: any, callback: (filters: any) => any): Promise<T[]> {
  if (filters && (filters.hasOwnProperty('limit') || filters.hasOwnProperty('offset'))) {
    const result = await callback(filters);

    return Array.isArray(result) ? result : result[key] || [];
  }

  let page = 0;
  let offset = 0;
  let result, items, hasNextPage, hasNewItems;

  const limit = 250;
  const results = [];
  const ids = new Set();

  do {
    offset = page++ * limit;
    result = await callback({ ...filters, limit, offset });

    // API version < 6.7
    if (Array.isArray(result)) {
      hasNewItems = false;
      hasNextPage = result.length === limit;
      items = result;
    } else {
      hasNewItems = true;
      hasNextPage = !!result?._links?.next;
      items = result[key] || [];
    }

    // Filter out duplicates
    for (const item of items) {
      if (!ids.has(item.id)) {
        ids.add(item.id);
        results.push(item);

        hasNewItems = true;
      }
    }
  } while (hasNextPage && hasNewItems);

  return results;
}
