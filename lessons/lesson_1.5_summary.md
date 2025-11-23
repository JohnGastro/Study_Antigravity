# Lesson 1.5: レスポンシブデザイン

## 🔑 キーワード
- **レスポンシブデザイン** - 画面サイズに応じてレイアウトを変える
- **Media Queries** - `@media (max-width: 768px) { }`
- **ブレイクポイント** - 768px（タブレット）、480px（スマホ）
- **flex-direction** - `column` で縦並び
- **box-sizing** - `border-box` で幅の計算方法を変える
- **justify-content** - `space-between` で均等配置
- **flex: 1** - 利用可能なスペースを均等に分配

---

## 💡 あなたの気づき

### 「でも、中途半端なサイズにしたら文字が見切れるよ」
- **観察**: エッジケースに気づく
- **問題**: 固定幅だと、画面サイズによっては見切れる
- **解決**: Media Queries で調整

### 「pcのときに中央に均等になってないのが気に食わない」
- **完璧主義**: 細部にこだわる姿勢
- **解決**: `justify-content: space-between;` と `flex: 1`

### 「box自体の横幅が小さい」
- **問題の言語化**: 具体的に問題を指摘できる
- **解決**: `flex: 1` で画面いっぱいに広がる

---

## 📝 重要なコード

### Media Queries
```css
/* PCサイズ（デフォルト） */
.box {
    flex: 1;
}

/* スマホサイズ */
@media (max-width: 768px) {
    .container {
        flex-direction: column;  /* 縦に並べる */
    }
    
    .box {
        width: auto;
        margin: 10px 0;
    }
}
```

### box-sizing
```css
.box {
    box-sizing: border-box;  /* width = Content + padding + border */
}
```

### Flexbox の配置
```css
.container {
    justify-content: space-between;  /* 均等配置 */
}

.box {
    flex: 1;  /* 利用可能なスペースを均等に分配 */
}
```

---

## 🎯 成果物
- [box_model.html](file:///Users/kazune/antigravity/Antigravityと勉強する場所/Study_Antigravity/phase1_basics/box_model.html) - 完璧なレスポンシブカードUI

---

## 🤔 難しかったポイント
- 「よくわかってない」→ box-sizing の概念
- 「width: flex: 1;」→ プロパティの書き方のミス

---

## 🔄 復習のヒント
- Media Queries は「画面サイズに応じてスタイルを変える」
- `@media (max-width: 768px)` = 768px以下のとき
- `flex-direction: column` = 縦に並べる
- `box-sizing: border-box` = width に padding と border を含める
- `flex: 1` = 利用可能なスペースを均等に分配
- なぜレスポンシブ？ → スマホからのアクセスが60%以上
