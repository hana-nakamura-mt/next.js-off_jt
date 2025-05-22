import Link from "next/link";

export const metadata = {
	title: "詳細ページ | 課題サイト",
};

type Props = {
	params: { id: string };
};

const memos: Record<string, string> = {
	"1": "西島隆弘",
	"2": "與真司郎",
	"3": "日高光啓",
	"4": "末吉秀太",
	"5": "宇野実彩子",
};

export default async function MemoDetailPage({ params }: Props) {
	const id = params.id;
	const memoName = memos[id];

	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="bg-white p-10 rounded-xl shadow-md max-w-xl w-full text-center space-y-4">
				{!memoName ? ( //{ !id ? // idがない時のDOM要素 : // idがある時のDOM要素 }
					<>
						<h1 className="text-xl font-semibold text-red-600">
							メモが見つかりません
						</h1>
					</>
				) : (
					<>
						<h1 className="text-2xl font-bold text-gray-800">
							{memoName}のページ
						</h1>
						<p className="text-gray-600">この人についての詳細ページです。</p>
					</>
				)}

				<Link href="/memos" className="text-blue-600 hover:underline">
					一覧に戻る
				</Link>
			</div>
		</main>
	);
}
