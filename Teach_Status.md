# Teach Status

## 講義履歴

### Lecture 0: Setup & Roadmap ✅
- **日付**: 2025-11-21 (18:53 - 19:51)
- **内容**:
    - `Study_Engineering` への移行
    - **方針転換**: Phase 1 (HTML/CSS基礎) から着実に進める
    - HTML/CSS基礎の実践 (background-color, color, font-size, text-align, padding-top)
    - Git/GitHub の基本操作 (init, add, commit, push)
    - 詳細ロードマップ (`Roadmap.md`) の作成
    - 学習日報 (`Learning_Journal.md`) の開始
- **成果物**:
    - `index.html` - 水色背景、中央揃えの自己紹介ページ
    - `Roadmap.md` - Awwwards到達までの詳細ロードマップ
    - GitHubリポジトリ: https://github.com/JohnGastro/Study_Antigravity

### Lesson 1.2: Box Model & Flexbox ✅
- **日付**: 2025-11-22 (16:50 - 17:30)
- **内容**:
    - Box Model（4層構造: Content, Padding, Border, Margin）
    - HTMLタグの理解（`<div>`, `<h3>`, `<p>`）
    - class の概念（`.名前` での指定）
    - Flexbox（`display: flex;` で横並び）
    - 装飾テクニック（`border-radius`, `box-shadow`）
- **成果物**:
    - `box_model.html` - 3つのカードが横に並ぶギャラリーページ

### Lesson 1.3: CSS Grid & Positioning ✅
- **日付**: 2025-11-22 (17:40 - 18:10)
- **内容**:
    - CSS Grid（`display: grid;`, `grid-template-columns`, `grid-template-rows`, `gap`）
    - 複数のclassの概念（`class="item text"`）
    - Positioning（`position: relative;` と `position: absolute;`）
    - `<span>` タグ（インライン要素）
- **成果物**:
    - `grid_layout.html` - 雑誌風レイアウト + バッジ付きカード

### Lesson 1.4: Transition & Transform ✅
- **日付**: 2025-11-22 (18:53 - 20:37)
- **内容**:
    - 疑似クラス（`:hover`）
    - Transition（`transition: all 0.3s ease;`）
    - Transform（`transform: scale(1.05);`）
    - UX（ユーザー体験）の理解
- **成果物**:
    - `box_model.html` - ホバーで拡大するカードUI

### Lesson 1.5: レスポンシブデザイン ✅
- **日付**: 2025-11-23 (10:28 - 10:44)
- **内容**:
    - レスポンシブデザインの必要性
    - Media Queries（`@media (max-width: 768px) { }`）
    - flex-direction（`column` で縦並び）
    - box-sizing（`border-box`）
    - justify-content（`space-between`）
    - flex: 1（均等分配）
- **成果物**:
    - `box_model.html` - 完璧なレスポンシブカードUI

---

## 🎉 Phase 1 (Foundation) 完了！

Phase 1 の全レッスンが完了しました。おめでとうございます！

## 次回の講義予定
### Phase 2: JavaScript & Interactivity (動的表現)

### Lesson 2.1: JavaScript基礎 ✅
- **日付**: 2025-11-23 (10:50 - 11:08)
- **内容**:
    - 変数（`const`, `let`）
    - 要素の取得（`getElementById`）
    - イベント（`addEventListener`）
    - DOM操作（`innerHTML`）
    - JSの役割（操り人形師）
- **成果物**:
    - `counter.html` - ボタンで数字が増えるカウンター

### Lesson 2.2: DOM操作 ✅
- **日付**: 2025-11-23 (11:21 - 11:44)
- **内容**:
    - CSSセレクタ（`#id` vs `.class`）
    - CSS優先順位（ID > Class）
    - スタイル操作（`style.backgroundColor`）
    - クラス操作（`classList.add`, `toggle`）
- **成果物**:
    - `color_changer.html` - クリックで色と形が変わるボタン

    - `color_changer.html` - クリックで色と形が変わるボタン

### Lesson 2.3: スクロールイベント ✅
- **日付**: 2025-11-23 (11:45 - 19:35)
- **内容**:
    - `window` vs `document`
    - `scroll` イベント
    - `window.scrollY`
    - 条件分岐（`if`）によるクラス操作
- **成果物**:
    - `scroll_practice.html` - スクロールで色が変わるページ

### Lesson 2.4: Fetch API & 非同期処理 ✅
- **日付**: 2025-11-24 (11:50 - 12:18)
- **内容**:
    - `fetch` (データの取得)
    - `async` / `await` (非同期処理)
    - `response.json()` (JSONパース)
    - DOM操作 (画像の `src` 変更)
    - UX向上 (ローディング表示)
- **成果物**:
    - `fetch_practice.html` - ボタンでランダムな犬画像を召喚するアプリ

---

## 🎉 Phase 2 (JavaScript & Interactivity) 完了！

JavaScriptの基礎から、DOM操作、イベント、そして外部APIとの連携まで、Webアプリに必要な基礎技術を全て習得しました。
これで「静的なページ」から「動的なアプリ」を作れるエンジニアになりました。

## 次回の講義予定
### Phase 3: Modern Stack (モダンツール)

### Lesson 3.1: Next.js入門 ✅
- **日付**: 2025-11-24 (12:20 - 12:42)
- **内容**:
    - Next.jsプロジェクトの作成 (`npx create-next-app`)
    - フォルダ構造 (`app`, `public`)
    - ファイルシステムルーティング (`app/about/page.tsx` → `/about`)
    - JSX記法 (`className`, `{/* */}`)
    - `<Link>` コンポーネントによる遷移
- **成果物**:
    - `phase3_nextjs` - トップページとAboutページを行き来できるサイト
- **Challenge**: 動的ルーティングを実装する (次回以降)

### Lesson 3.2: Tailwind CSS ✅
- **日付**: 2025-11-24 (14:00 - 15:30)
- **内容**:
    - Tailwindのユーティリティクラスで余白・タイポ・カラーを即時調整
    - `space-y`, `grid`, `md:grid-cols-3` でHeroとFeature Tilesを構築
    - カスタムデザイントークン (`text-[color:var(--color-foreground)]`) の活用
    - `group` / `group-hover` と `animate-[...]` でCTAボタンに虹色フェード演出を実装
- **成果物**:
    - `phase3_nextjs/app/page.tsx` - Hero + Feature Tiles + グラデーションCTAアニメーション

## 次回の講義予定
### Lesson 3.3: Framer Motion
- 宣言的アニメーションでHero / Tilesにモーションを付加
- Next.js + Tailwindにモーションライブラリを組み合わせる準備

## ロードマップ (概略)
詳細は `Roadmap.md` を参照。

1. **Phase 1: Foundation** - HTML, CSS, JS, Basic Animations
2. **Phase 2: Modern Stack** - React, Next.js, Tailwind/CSS Modules
3. **Phase 3: Creative Coding** - WebGL (Three.js/R3F), GSAP, Framer Motion
4. **Phase 4: Polish & Performance** - Optimization, SEO, Accessibility
5. **Phase 5: Final Project** - Building the Portfolio Site
