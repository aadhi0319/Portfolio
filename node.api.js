import {ServerStyleSheets} from "@mui/styles";

export default pluginOptions => ({
    // webpack optimizations for images
    webpack: (config, { defaultLoaders }) => {
        config.module.rules = [{
        oneOf: [
            defaultLoaders.jsLoader,
            defaultLoaders.jsLoaderExt,
            defaultLoaders.cssLoader,
            {
                test: /\.(jpe?g|gif|png|svg|webp)/i,
                use: "optimized-images-loader"
            },
            defaultLoaders.fileLoader,
        ]
        }]
        return config
    },
    // the next two entries enable pre-rendering MUI style sheets
    beforeRenderToHtml: (App, { meta }) => {
        meta.muiSheets = new ServerStyleSheets()
        return meta.muiSheets.collect(App)
    },
    headElements: (elements, { meta }) => [
        ...elements,
        meta.muiSheets.getStyleElement(),
    ],
});