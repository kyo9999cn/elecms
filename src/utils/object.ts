// 对象降维
export const flattenObject = (
  obj: Record<string, any>,
  prefix = ''
): Record<string, any> => {
  const output: Record<string, any> = {}
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'object' && value !== null) {
      const nested = flattenObject(value, newKey)
      Object.assign(output, nested)
    } else {
      output[newKey] = value
    }
  }
  return output
}
