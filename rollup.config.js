import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/preact-tag.js",
            format: "cjs",
            sourcemap: true
        },
        {
            file: "dist/preact-tag.m.js",
            format: "es",
            sourcemap: true
        },
        {
            file: "dist/preact-tag.umd.js",
            format: "umd",
            name: "preactTag",
            sourcemap: true
        }
    ],
    external: ["preact"],
    plugins: [
        resolve(),
        buble({
            transforms: {
                classes: false
            },
            objectAssign: "Object.assign"
        }),
        terser()
    ]
};
