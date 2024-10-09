import globals from "globals";
import jsPlugin from "@eslint/js";
import vuePlugin from "eslint-plugin-vue";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  // 対象ファイルの指定
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      // TypeScript パーサーの設定
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // 必要に応じてパスを設定
      },
    },
    plugins: {
      // プラグインの指定
      '@typescript-eslint': tsPlugin,
      'vue': vuePlugin,
    },
    // ルールの設定を適用
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...vuePlugin.configs['essential'].rules,
    },
  },
   // Prettier プラグインの追加
  {
    plugins: {
      'prettier': prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  eslintConfigPrettier,
];