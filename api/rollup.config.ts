import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default [
  // CommonJS build for Node.js
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true,
      exports: "auto",
    },
    external: ["firebase"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  // ESM build for modern bundlers
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.mjs",
      format: "esm",
      sourcemap: true,
    },
    external: ["firebase"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  // Browser build (IIFE)
  {
    input: "src/index.ts",
    output: {
      name: "RealtimeIRL",
      file: "lib/index.min.js",
      format: "iife",
      sourcemap: true,
    },
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
];
