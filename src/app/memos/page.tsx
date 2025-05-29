import Link from "next/link";

export const metadata = {
	title: "一覧ページ | App Router課題",
};

const memos = [
	{ id: "1", title: "西島隆弘" },
	{ id: "2", title: "與真司郎" },
	{ id: "3", title: "日高光啓" },
	{ id: "4", title: "末吉秀太" },
	{ id: "5", title: "宇野実彩子" },
];

export default function MemosPage() {
	return (
		<main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
			<div className="bg-white p-10 rounded-xl shadow-md max-w-xl w-full space-y-6">
				<h1 className="text-2xl font-bold text-gray-800">AAA メンバー一覧</h1>
				<ul className="space-y-2">
					{memos.map((memo) => (
						<li key={memo.id}>
							<Link
								href={`/memos/${memo.id}`}
								className="block text-blue-600 hover:underline"
							>
								{memo.title}
							</Link>
						</li>
					))}
				</ul>
				<Link href="/" className="block text-blue-600 hover:underline mt-4">
					トップページに戻る
				</Link>
			</div>
		</main>
	);
}
