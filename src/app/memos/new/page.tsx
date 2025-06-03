"use client";
import { zodResolver } from "@hookform/resolvers/zod"; //zodResolver を使って Zod と連携
import { useState } from "react";
import { useForm } from "react-hook-form"; //useForm（React Hook Form）で状態管理
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "10文字以上で入力してください").optional(),
});

type FormValues = z.infer<typeof schema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const [success, setSuccess] = useState(false);

  const onValid = (data: FormValues) => {
    console.log("送信成功！", data);
    setSuccess(true);
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onValid)}
        className="max-w-md mx-auto mt-10 p-6 border rounded shadow"
      >
        <h1>入力フォーム</h1>
        <p>タイトル</p>
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
          type="text"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        <p>内容</p>
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
          type="text"
          {...register("content")}
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          送信
        </button>
        {success && (
          <p className="text-green-600 mt-4 font-bold text-center">
            登録完了！
          </p>
        )}
      </form>
    </main>
  );
}

// z.object({ title: ..., content: ... }) 形式でスキーマ定義
//バリデーションエラーがあれば <p> で画面に表示
//成功時には「登録完了」のメッセージを表示
//見た目はシンプルでOK（Tailwindを使っても◎）
//Zod の .min(length) や .optional() を活用
//handleSubmit(onValid, onInvalid) を使えば成功／失敗で処理を分けられる
