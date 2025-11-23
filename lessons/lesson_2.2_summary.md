# Lesson 2.2: DOM操作

## 🔑 キーワード
- **DOM操作** - JavaScriptでHTML/CSSを書き換えること
- **CSSセレクタ**
  - `#id` - IDを指定（強い）
  - `.class` - Classを指定（弱い）
- **CSS優先順位（詳細度）** - IDはClassより強い
  - 解決策: `#box.active` のように条件を増やして強くする
- **styleプロパティ** - 直接スタイルを書き換える
  - `element.style.backgroundColor`（キャメルケース）
- **classList** - クラスを操作する（推奨）
  - `add` - 追加
  - `remove` - 削除
  - `toggle` - つけ外し（スイッチ）

---

## 💡 あなたの気づき

### 「styleで、id="box"を指定する方法を忘れてしまった」
- **復習**: `.class` と `#id` の違い
- **重要**: CSSでもJSでも、この区別は超重要

### 「あれ?まるになるけど赤にならない」
- **原因**: `#box`（グレー）が `.active`（赤）より強かった
- **解決**: `#box.active` にして、優先順位を上げた
- **学び**: CSSには「強さ」がある

---

## 📝 重要なコード

### スタイルを直接変える（非推奨）
```javascript
box.style.backgroundColor = "red";
```

### クラスを操作する（推奨）
```javascript
// activeクラスをつける/消す
box.classList.toggle('active');
```

### CSSの優先順位対策
```css
/* IDのみ（強さ: 100） */
#box {
    background-color: gray;
}

/* ID + Class（強さ: 110） -> こっちが勝つ！ */
#box.active {
    background-color: red;
}
```

---

## 🎯 成果物
- [color_changer.html](file:///Users/kazune/antigravity/Antigravityと勉強する場所/Study_Antigravity/phase2_javascript/color_changer.html) - クリックで色と形が変わるボタン

---

## 🤔 難しかったポイント
- 「んん?だめだ」→ 変数名の重複（`let box`）
- 「赤にならない」→ CSSの優先順位

---

## 🔄 復習のヒント
- スタイルを変えたいときは、なるべく `classList` を使う
- スタイルが適用されないときは、優先順位を疑う
- `toggle` はスイッチ機能に便利
