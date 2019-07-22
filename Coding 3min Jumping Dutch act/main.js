const sc = floor => {
  if (floor <= 1) return ''
  if (floor > 6) return `${'Aa~ '.repeat(floor - 1)}Pa!`
  if (floor <= 6) return `${'Aa~ '.repeat(floor - 1)}Pa! Aa!`
}
module.exports = sc
