import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: {
      name: "RealtimeIRL",
      file: pkg.browser,
      format: "iife",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), typescript(), terser()],
  },
];
