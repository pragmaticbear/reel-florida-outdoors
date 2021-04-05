module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    return {
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md", "css", "svg"],
        passthroughFileCopy: true,
        dir: {
            output: "_site"
        }
    }
}