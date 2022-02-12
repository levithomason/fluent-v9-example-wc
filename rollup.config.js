import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import commonJS from "rollup-plugin-commonjs";

export default [
    {
        context: "this",
        input: "src/index.ts",
        output: [
            {
                file: "dist/fluent-wc-v9.js",
                format: "esm",
            },
        ],
        plugins: [
            resolve(),
            commonJS(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false,
                    },
                },
            }),
        ],
    },
    {
        context: "this",
        input: "src/index.ts",
        output: [
            {
                file: "dist/fluent-wc-v9.min.js",
                format: "esm",
            },
        ],
        plugins: [
            resolve(),
            commonJS(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false,
                    },
                },
            }),
            terser(),
            filesize(),
        ],
    },
];
