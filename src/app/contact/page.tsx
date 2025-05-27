"use client";
import { resetClipboardStubOnView } from "@testing-library/user-event/dist/cjs/utils/index.js";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  age: number;
};

export default function ContactPage() {
  const {
    register, //入力欄を登録
    handleSubmit, //フォームが送信されたときに使う
    formState: { errors }, //バリデーションエラーの内容が入る
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("送信データ:", data);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block mb-1">
            名前
          </label>
          <input
            id="name"
            {...register("name", { required: "名前は必須です" })}
            className="border p-2 w-full"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            メールアドレス
          </label>
          <input
            id="email"
            type="text"
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "メールアドレスの形式が正しくありません",
              },
            })}
            className="border p-2 w-full"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="age" className="block mb-1">
            年齢
          </label>
          <input
            id="age"
            type="number"
            {...register("age", {
              required: "年齢は必須です",
              min: { value: 18, message: "18歳以上である必要があります" },
              max: { value: 100, message: "100歳以下である必要があります" },
            })}
            className="border p-2 w-full"
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          送信
        </button>
      </form>
    </div>
  );
}
