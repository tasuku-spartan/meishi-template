/*
 * デジタル名刺のデータ
 * Claude Code が CLAUDE.md の手順に沿ってこのファイルを書き換えます。
 * 手で直す場合も、左側の項目名は変えないでください。
 * 値が "" の項目は名刺に表示されません。改行は \n で書きます。
 */
window.PROFILE = {
  __TEMPLATE__: true, // 作成が終わると false（true の間は「サンプル表示中」の注意が出ます）

  // 1) 基本情報（title 以外は必須）
  basic: {
    name: "山田 太郎",            // 姓と名の間に空白を1つ
    company: "株式会社サンプル",
    address: "東京都千代田区丸の内1-1-1",
    department: "DX推進部",
    title: "マネージャー",         // 役職（任意）
    email: "taro.yamada@example.co.jp",
    phone: "03-1234-5678"
  },

  // 2) 起動時（約1秒）のロゴ: "company"（会社ロゴ）または "app"（アプリロゴ）
  splash: { logo: "company" },

  // 3) ひとこと（任意）：名前の下に大きく出る1〜2文。空欄なら「名刺を受け取っていただき、ありがとうございます。」
  welcome: "今日はお時間をいただき、ありがとうございました。この名刺から、いつでもご連絡ください。",

  // 4) SNS（URLで保存。使わないものは ""）
  sns: {
    sansan: "",
    instagram: "https://www.instagram.com/example",
    facebook: "",
    x: "",
    linkedin: "https://www.linkedin.com/in/example",
    whatsapp: "",           // 例: "https://wa.me/819012345678"
    others: [
      // { label: "note", url: "https://note.com/xxxx" }
    ]
  },

  // 5) 自己紹介（300文字程度）：ひとことの下に表示
  intro: "DX推進部で、紙とハンコで回っていた社内手続きをデジタルに置き換える仕事をしています。現場の方と一緒に業務を観察し、小さく試して、効果が出たものから全社に広げるのが得意なやり方です。\n休日は家族でキャンプに行くことが多く、最近は焚き火料理に凝っています。仕事でも趣味でも、気軽に話しかけていただけるとうれしいです。",

  // 6) 付帯情報（すべて任意。空欄の項目は表示されません）
  extra: {
    age: "",         // 数字だけなら「歳」を付けて表示
    birthday: "",    // 例: "4月1日"
    hometown: "",
    hobbies: ""
  },

  // 7) 写真（assets/ に置いたファイル。"" ならイニシャルを表示）
  photo: "assets/photo.jpg",

  // 8) 背景色（#RRGGBB）。文字色は自動で読みやすい色になります
  theme: { background: "#1F3A5F" }
};
