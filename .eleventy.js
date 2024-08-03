module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/js/main.js");
    eleventyConfig.addPassthroughCopy("./src/vendor");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
