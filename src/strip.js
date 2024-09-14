export default function stripTags(htmlContent) {
    const tagRegex = /<\/?[^>]+>/g; // Matches any opening or closing tag
    return htmlContent.replace(tagRegex, '');
  }
  
 