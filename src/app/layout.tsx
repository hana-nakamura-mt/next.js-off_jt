import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "レイアウト構築演習ページ",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-amber-50 text-gray-800">
        <header className="bg-white shadow-md">
          <nav className="max-w-4xl mx-auto px-4 py-4">
            <ul className="flex gap-6 text-lg font-semibold">
              <li>
                <Link href="/">トップ</Link>
              </li>
              <li>
                <Link href="/menu">メニュー</Link>
              </li>
              <li>
                <Link href="/service">サービス</Link>
              </li>
              <li>
                <Link href="/reward">リワード</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow max-w-4xl mx-auto px-4 py-12 text-xl font-normal">
          {children}
        </main>

        <footer className="text-center py-4 border-t mt-8 text-sm text-gray-500">
          <p>©2025 HannaBucks Coffee</p>
        </footer>
      </body>
    </html>
  );
}
