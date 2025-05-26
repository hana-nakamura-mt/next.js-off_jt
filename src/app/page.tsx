import { LikeButton } from "./components/LikeButton";

export default function Page() {
	const today = new Date().toLocaleDateString();

	return (
		<main className="min-h-screen flex items-center justify-center">
			<div className="text-center space-y-4">
				<h1 className="text-2xl font-bold">こんにちは！</h1>
				<p className="text-lg">今日は{today}です</p>
				<LikeButton />
			</div>
		</main>
	);
}
