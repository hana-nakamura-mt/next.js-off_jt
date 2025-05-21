export const metadata = {
	title: "詳細ページ | 課題サイト",
};

type Props = {
	params: {
		id: string;
	};
};

import Link from "next/link";

const memos: Record<string, string> = {
	"1": "西島隆弘",
	"2": "與真司郎",
	"3": "日高光啓",
	"4": "末吉秀太",
	"5": "宇野実彩子",
};

export default function MemoDetailPage({ params }: Props) {
	const name = memos[params.id];

	if (!name) {
		return (
			<main className="min-h-screen flex items-center justify-center bg-gray-50">
				<div className="bg-white p-10 rounded-xl shadow-md max-w-xl w-full text-center space-y-4">
					<h1 className="text-xl font-semibold text-red-600">
						メモが見つかりません
					</h1>
					<Link href="/memos" className="text-blue-600 hover:underline">
						一覧に戻る
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="bg-white p-10 rounded-xl shadow-md max-w-xl w-full text-center space-y-4">
				<h1 className="text-2xl font-bold text-gray-800">{name}のページ</h1>
				<p className="text-gray-600">この人についての詳細ページです。</p>
				<Link href="/memos" className="text-blue-600 hover:underline">
					一覧に戻る
				</Link>
			</div>
		</main>
	);
}
