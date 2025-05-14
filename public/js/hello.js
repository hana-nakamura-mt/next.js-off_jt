
const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
const message = document.getElementById("message");

saveButton. addEventListener("click", function() {
	const name = nameInput.value; //入力欄に書かれた文字を取ってきてnameに入れる
	if (name === "") {
		message.innerText = "※名前を入力してください！";
	} else {
		message.innerText = `こんにちは、${name}さん！`;
	}
});