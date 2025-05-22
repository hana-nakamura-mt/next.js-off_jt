import Link from "next/link";

export const metadata = {
	title: "トップページ | 課題サイト",
};

export default function TopPage() {
	return (
		<main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
			<div className="bg-white p-10 rounded-xl shadow-md max-w-xl w-full space-y-6">
				<h1 className="text-3xl font-bold text-gray-800">App Router課題</h1>
				<div className="space-y-2">
					<p className="text-gray-600">ようこそ！</p>
					<Link
						href="/memos"
						className="block text-blue-600 hover:underline text-lg"
					>
						一覧ページ
					</Link>
				</div>
			</div>
		</main>
	);
}
