/**
 * 转换成DOM字符串
 */
const cheerio = require('cheerio')

exports.stripTags = (str, tags) => {
  if (!tags || tags.length === 0) {
    return str
  }
  tags = !Array.isArray(tags) ? [tags] : tags

  const $ = cheerio.load(str, { decodeEntities: false })
  tags.forEach(tag => $(tag).remove())

  return $('body').html() || $('head').html()
}

exports.findTag = (str, tag) => {
  if (!tag) {
    return str
  }

  const $ = cheerio.load(str, {decodeEntities: false})

  return $(tag).html()
}

exports.convertHtml = function (str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}

/**
 * 增加 hljs 的 classname
 */
exports.wrapCustomClass = function (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}
