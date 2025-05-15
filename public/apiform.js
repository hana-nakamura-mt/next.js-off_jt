const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = [];

  const usernameInput = document.getElementById("username");
  const usernameValue = usernameInput.value;

  if (usernameValue.trim() === "") {
    errors.push("※名前を入力してください");
  }

  const ageInput = document.getElementById("age");
  const ageValue = ageInput.value;
  if (ageValue === "" || isNaN(ageValue) || ageValue < 18) {
    errors.push("※年齢は18歳以上(半角数字)で入力してください");
  }

  const jobInput = document.getElementById("job");
  const jobValue = jobInput.value;
  if (jobValue === "default") {
    errors.push("※職業を選択してください");
  }

  const profileInput = document.getElementById("profile");
  const profileValue = profileInput.value;
  if (profileValue.trim() === "") {
    errors.push("※自己紹介を入力してください");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }

  const data = {
    username: usernameValue,
    age: ageValue,
    job: jobValue,
    profile: profileValue
  }

  console.log(JSON.stringify(data, null, 2));
});