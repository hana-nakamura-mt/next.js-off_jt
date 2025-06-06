# layout.tsxと基本レイアウト

## 🎯 目的

Next.js の App Router における `layout.tsx` を使って、共通レイアウト（ヘッダー・フッター）を全ページに適用できるようにする。

---

## 🎯 今週のゴール

- `layout.tsx` の仕組みを理解し、共通レイアウトを実装できる
- `children` によってページの中身が差し込まれる構造を理解する
- 複数のページに共通のヘッダーとフッターを適用できるようになる

---

## ✅ layout.tsx の基本構造

[リンク](layout.tsx%20の役割と構成.md)

---

## ✅ children によるページ内容の埋め込み

[リンク](children%20によるページ内容の埋め込み.md)

---

## ✅ 応用：ディレクトリ単位でのレイアウト切り替え

[リンク](階層ごとの%20layout.tsx.md)

---

## ✅  参考リンク

- [Next.js レイアウトとページ](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- [【Next,js】layout.tsxの活用法](https://qiita.com/RintaroNasu/items/daf65b0781721b8c7612)

---

## ✅  課題内容

以下のような共通UIを実装します：

- **ヘッダー**：アプリ名・ナビゲーションリンク（例：トップ・一覧）
- **フッター**：コピーライト表記（例：© 2024 My Memo App）

`layout.tsx` に共通レイアウトを書き、各ページに自動で適用されるようにします。

### 🎯 要件

- `app/layout.tsx` に共通のHTML構造を実装する
- 各ページの中身は `<main>{children}</main>` に表示されるように設計する
- Tailwind CSSがあれば、ヘッダーやフッターの背景色や余白なども整えてみましょう（なくてもOK）

### 💡 ヒント

- レイアウトファイル（`layout.tsx`）は、App Routerで導入された「共有UIの新しい書き方」です
- 全ページに自動適用されるので、1ヶ所直せば全部反映されて便利です
- レイアウトの中に `<nav>` や `<footer>` を書くことで構造がすっきりします
- `children` の位置に注意しましょう（ここにページの内容が差し込まれます）

<!-- 課題を提出する際、プルリクエストに以下を貼り付けてください

## 📊 評価チェックリスト（Week 8：レイアウト構築）

※ 各観点ごとにチェック数を数え、下記ルールで点数化  
（チェック数 0個=0点 / 1個=1点 / 2個=3点 / 3個以上=5点）

---

### 🎯 成果物（アウトプットの完成度）

- [ ] `layout.tsx` ファイルが作成され、全ページに適用されている
- [ ] `children` を使って各ページの内容をレイアウト内に表示している
- [ ] Header / Footer のような共通UIが `layout.tsx` 内に含まれている
- [ ] すべてのページで共通レイアウトが正しく反映されていることが確認できる

---

### 📚 知識理解（仕組みや構成の理解）※やさしい版

- [ ] `layout.tsx` がページの共通枠組みを作る役割であることを理解している
- [ ] `children` が各ページの中身を差し込むための仕組みであることを理解している
- [ ] `layout.tsx` の配置場所によって適用範囲が変わることを理解している（グローバル / セクション）
- [ ] レイアウトとページの関係を「外枠と中身」として説明できる

---

### 💬 説明力（なぜその構成にしたか）※やさしい版

- [ ] なぜ共通UIを `layout.tsx` にまとめたのか説明できる
- [ ] `children` を使うことで何が便利になるのか説明できる
- [ ] ヘッダーやフッターをどのように構成したか簡単に説明できる
- [ ] どの範囲にレイアウトが適用されているか説明できる

---

### 🔧 自己修正（修正・改善の自走力）

- [ ] ページ間でのレイアウト適用ミスに気づき、自力で修正している
- [ ] UIの崩れや配置ミスを調整・改善している
- [ ] 無駄な重複コード（各ページに同じHeaderなど）を `layout.tsx` に集約している
- [ ] レイアウトの配置場所やフォルダ構成を自分なりに最適化している

---

📝 評価観点ごとのチェック数を数え、以下のように点数に換算してください：

| チェック数 | 点数 |
|------------|------|
| 0個        | 0点  |
| 1個        | 1点  |
| 2個        | 3点  |
| 3〜4個     | 5点  |

-->