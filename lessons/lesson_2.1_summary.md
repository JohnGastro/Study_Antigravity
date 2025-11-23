# Lesson 2.1: JavaScript基礎

## 🔑 キーワード
- **JavaScript** - HTML/CSSを操作する「操り人形師」
- **変数** - データを保存する箱
  - `const` - 定数（中身を変えられない）
  - `let` - 変数（中身を変えられる）
- **document.getElementById** - idで要素を取得する
- **addEventListener** - イベント（クリックなど）を監視する
- **innerHTML** - HTML要素の中身（テキストなど）を書き換える

---

## 💡 あなたの気づき

### 「javascriptは描画機能がなくて、htmlcssを操作するもの？」
- **本質**: JS自体が絵を描くわけではない
- **理解**: HTML（骨組み）とCSS（服）を、JSが操作して動かしている

### 「ここ（要素の取得）って変わるんじゃないの？」
- **疑問**: `const countText` は中身が変わるのに `const`？
- **解決**: `countText` に入っているのは「黒板（場所）」そのもの。「黒板の文字」は変わっても、「黒板」自体は変わらない。

### 「これって、JavaScriptの『覚える部分』か？」
- **疑問**: `addEventListener` とか全部暗記するの？
- **正解**: 暗記しなくていい。仕組み（流れ）を理解する。書き方は調べればいい。

---

## 📝 重要なコード

### 変数の宣言
```javascript
const btn = document.getElementById('btn'); // 変わらないもの
let count = 0; // 変わるもの
```

### イベントリスナー
```javascript
// ボタン君(btn)、クリックされたら(click)、中のことをやって(function)
btn.addEventListener('click', function() {
    count = count + 1;           // 数字を増やす
    countText.innerHTML = count; // 画面を書き換える
});
```

---

## 🎯 成果物
- [counter.html](file:///Users/kazune/antigravity/Antigravityと勉強する場所/Study_Antigravity/phase2_javascript/counter.html) - シンプルなカウンター

---

## 🤔 難しかったポイント
- 「全然やってることわかんないかも」→ 準備段階（変数宣言）が抽象的だった
- 「写経してるだけで全然理解してる感じじゃない」→ 自分で考えるプロセスが大事

---

## 🔄 復習のヒント
- JSは「命令する人」、HTMLは「動くロボット」
- ロボットに命令するには「名前（id）」が必要
- 「場所（要素）」と「中身（innerHTML）」は別物
