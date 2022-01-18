import React, {Component} from "react";
import path from "path";

// read .env file
require("dotenv").config()

export default {
  plugins: [
        [
            // create routes for the files in src/pages
            require.resolve("react-static-plugin-source-filesystem"),
            {
                location: path.resolve("./src/pages"),
            },
        ],
        require.resolve("react-static-plugin-reach-router"),
        require.resolve("react-static-plugin-sitemap"),
    ],
    // root document that all page elements are rendered inside
    Document: class RootHTML extends Component {
        render() {
            const {Html, Head, Body, children} = this.props;
            return (
                <Html lang="en">
                    <Head>
                        <meta charSet="utf-8" />
                        <link rel="manifest" href={`${process.env.REACT_APP_PUBLIC_URL}/site.webmanifest`} />
                        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.REACT_APP_PUBLIC_URL}/apple-touch-icon.png`} />
                        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.REACT_APP_PUBLIC_URL}/favicon-32x32.png`} />
                        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.REACT_APP_PUBLIC_URL}/favicon-16x16.png`} />
                        <link rel="icon" href={`${process.env.REACT_APP_PUBLIC_URL}/favicon.ico`} />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="theme-color" content="#202020" />
                        <meta name="description" content="A website depicting Aadhithya's digital resume. This website is intended to be an interactive portfolio to get to know Aadhithya's interests and work better. Feel free to reach out if something catches your eye!" />
                        <title>Aadhithya's Portfolio</title>
                    </Head>
                    <Body>
                        <noscript>This website requires JavaScript to run. Please enable JavaScript and refresh the page.</noscript>
                        <div id="root">
                            {children}
                        </div>
                    </Body>
                </Html>
            );
        }
    }
}
