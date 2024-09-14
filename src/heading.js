export default function extractHeading(htmlContent) {
    const headingRegex = /<h([1-4])>(.*?)<\/h([1-4])>/g;
    const match = headingRegex.exec(htmlContent);
  
    if (match) {
      return match[2]; // The captured heading text
    } else {
      return null; // No heading found
    }
  }
  
  // Example usage:
  const htmlString = "<h1>This is a heading 1</h1><p>Some paragraph content</p>";
  const heading = extractHeading(htmlString);
  
  if (heading) {
    console.log("Heading:", heading); // Output: "This is a heading 1"
  } else {
    console.log("No heading found");
  }