# Lesson 1.2: Box Model & Flexbox

## 🔑 キーワード
- **Box Model** - 4層構造（Content, Padding, Border, Margin）
- **Flexbox** - `display: flex;` で横並び
- **class** - `.名前` で指定（ドットが必要）
- **複数のclass** - `class="item text"` でスペース区切り

---

## 💡 あなたの気づき

### 「箱が一つ重複してる」
- **問題**: `div { }` で全ての `<div>` にスタイルが適用された
- **解決**: `.box` のように、classで指定する
- **学び**: タグ名指定 vs クラス名指定の違い

### 「分ける理由ってSEO？」
- **正解**: その通り！
- **理由**: Googleやスクリーンリーダーが構造を理解するため
- **結論**: 表示はされるが、最適ではない

---

## 📝 重要なコード

### Box Model
```css
.box {
    width: 200px;
    height: 200px;
    padding: 20px;        /* 内側の余白 */
    border: 5px solid black;  /* 枠線 */
    margin: 50px;         /* 外側の余白 */
}
```

### Flexbox
```css
.container {
    display: flex;  /* 子要素を横に並べる */
}
```

### 複数のclass
```html
<div class="item text">テキスト</div>
```
```css
.item { /* 共通スタイル */ }
.text { /* 特別スタイル */ }
```

---

## 🎯 成果物
- [box_model.html](file:///Users/kazune/antigravity/Antigravityと勉強する場所/Study_Antigravity/phase1_basics/box_model.html) - 3つのカードが横に並ぶギャラリー

---

## 🤔 難しかったポイント
- 「なんもわかってない」→ classの概念が最初は難しかった
- 「すっとばしすぎ」→ いきなり完成コードを見せられた

---

## 🔄 復習のヒント
- Box Modelの4層構造を図で思い出す
- Flexboxは「1方向」に並べる技術
- classは「名札」をつけるイメージ
