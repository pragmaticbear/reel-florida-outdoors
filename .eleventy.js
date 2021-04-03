module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src");
    eleventyConfig.addWatchTarget("./src/css/");
    return {
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md", "css"],
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: "_site"
        }
    }
}