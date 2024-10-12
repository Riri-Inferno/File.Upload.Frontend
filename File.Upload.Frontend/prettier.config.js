export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 120,
  vueIndentScriptAndStyle: true, // <script>と<style>タグ内のインデントを有効にする
  htmlWhitespaceSensitivity: "ignore", // HTMLの空白の扱いを調整
  bracketSameLine: true, // 閉じカッコ（>）を同じ行にするかどうか
  embeddedLanguageFormatting: "auto", // Vueファイルの埋め込み言語部分を自動的にフォーマット
  cssEnable: ["css", "scss", "less"], // CSS系の言語をフォーマット対象に含める
  proseWrap: "preserve", // CSS内でテキストを折り返さない
  // endOfLine: "lf", // 改行コードをLFに統一する
};
