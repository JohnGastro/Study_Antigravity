# Lesson 1.3: CSS Grid & Positioning

## 🔑 キーワード
- **CSS Grid** - 2方向レイアウト（縦と横を同時に）
- **grid-template-columns** - 列の数と幅
- **grid-template-rows** - 行の数と高さ
- **grid-column** - 横幅いっぱいに配置
- **position: relative** - 親の箱（基準点）
- **position: absolute** - 子の箱（自由に配置）
- **`<span>`** - インライン要素（横に並ぶ）

---

## 💡 あなたの気づき

### 「あー!空白なのそういうこと??」
- **問題**: `class="item_text"` だと、`.item` のスタイルが適用されない
- **解決**: `class="item text"` でスペース区切り
- **学び**: 複数のclassを同時につける方法
- **あなたの言葉**: 「そういうの説明してよ　ひどくね?」

### 「子のabsoluteは、親に配置が指定されていない場合は無効になる？」
- **正解**: ほぼ正解！
- **正確には**: 一番近い `position` が指定された親を基準にする
- **親がない場合**: `<body>` 全体（画面全体）を基準にする

---

## 📝 重要なコード

### CSS Grid
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* 2列 */
    grid-template-rows: auto auto auto;  /* 3行 */
    gap: 10px;  /* 隙間 */
}

.text {
    grid-column: 1 / 3;  /* 1列目から3列目まで = 横幅いっぱい */
}
```

### Positioning
```css
.item {
    position: relative;  /* 基準点 */
}

.badge {
    position: absolute;  /* 自由に配置 */
    top: 10px;
    right: 10px;
}
```

---

## 🎯 成果物
- [grid_layout.html](file:///Users/kazune/antigravity/Antigravityと勉強する場所/Study_Antigravity/phase1_basics/grid_layout.html) - 雑誌風レイアウト + バッジ付きカード

---

## 🤔 難しかったポイント
- 「おいおいすっとばしすぎだって」→ Positioningの説明が急すぎた
- 「わかんなくなってきた」→ relative と absolute の関係

---

## 🔄 復習のヒント
- Gridは「2方向」、Flexboxは「1方向」
- 複数のclassは「スペース区切り」
- absoluteは「一番近い position の親」を基準にする
