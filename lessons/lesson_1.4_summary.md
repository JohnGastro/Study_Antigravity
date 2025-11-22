# Lesson 1.4: Transition & Transform

## 🔑 キーワード
- **疑似クラス** - `:hover`, `:active`, `:focus`
- **Transition** - 変化を滑らかにする
- **Transform** - 要素を変形させる（拡大・回転・移動）
- **UX** - ユーザーが変化に気づきやすい

---

## 💡 あなたの気づき

### 「:hoverとかいう書き方するの?」
- **正解**: その通り！
- **名前**: 疑似クラス（pseudo-class）
- **意味**: 特定の状態を指定する

### 「あ、そういうこと??」
- **気づき**: `.box:hover` と書くだけでホバーになる
- **仕組み**: マウスが乗ると、自動的に `.box:hover` のスタイルに切り替わる

### 「box:hoverじゃなくてboxにいれるんだ・・・・」
- **重要**: `transition` は変化する前の状態（`.box`）に書く
- **理由**: ホバー時も、ホバー解除時も、両方滑らかに変化する

---

## 📝 重要なコード

### Transition
```css
.box {
    transition: all 0.3s ease;
    /* all = すべてのプロパティ */
    /* 0.3s = 0.3秒かけて変化 */
    /* ease = ゆっくり始まって、ゆっくり終わる */
}

.box:hover {
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
}
```

### Transform
```css
.box:hover {
    transform: scale(1.05);  /* 1.05倍に拡大 */
}
```

---

## 🎯 成果物
- [box_model.html](file:///Users/kazune/antigravity/Antigravityと勉強する場所/Study_Antigravity/phase1_basics/box_model.html) - ホバーで拡大するカードUI

---

## 🤔 難しかったポイント
- 「それぞれ意味は?」→ `transition` の各パラメータの意味
- 「box:hoverじゃなくてboxにいれるんだ」→ なぜ `.box` に書くのか

---

## 🔄 復習のヒント
- `:hover` は「マウスが乗ったとき」
- `transition` は「変化する前」に書く
- `transform: scale()` で拡大・縮小
- なぜ滑らかにする？ → ユーザーが変化に気づきやすい
