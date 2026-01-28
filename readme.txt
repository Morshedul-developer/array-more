1️⃣ [...numbers] এই জিনিসটা কী?

numbers এর ভেতরের array টা কপি করা হচ্ছে।

[...numbers]


মানে:
👉 numbers এর নতুন একটা কপি
👉 যাতে original numbers নষ্ট না হয়

📌 কারণ:
.sort() original array change করে ফেলে

2️⃣ .sort() আসলে কীভাবে কাজ করে?

এটা সবচেয়ে important অংশ 👀

sort(function(a, b) { ... })


JavaScript এখানে কী করে জানো?

🔁 array এর দুইটা সংখ্যা ধরে ধরে তুলনা করে

ধরো array টা:

[4, 7, 12, 8, 43, 6, 1]


JS এমন ভাবে ভাবছে:

a = 4, b = 7

a = 7, b = 12

a = 12, b = 8

এইভাবে বারবার compare করে

3️⃣ return a - b → Ascending (ছোট থেকে বড়)
return a - b;


এটার logic খুব simple:

🔹 যদি a - b negative হয়

👉 a আগে যাবে
👉 ছোট সংখ্যা আগে আসবে

🔹 যদি a - b positive হয়

👉 b আগে যাবে
👉 বড় সংখ্যা পরে যাবে

🔹 যদি 0 হয়

👉 দুটাই সমান

📌 Example:

a	b	a - b	ফল
4	7	-3	4 আগে
12	8	4	8 আগে
1	6	-5	1 আগে

👉 তাই result হয়:

[1, 4, 6, 7, 8, 12, 43]

4️⃣ return b - a → Descending (বড় থেকে ছোট)
return b - a;


এখানে শুধু উল্টা চিন্তা 🤯

📌 Example:

a	b	b - a	ফল
4	7	3	7 আগে
12	8	-4	12 আগে
1	6	5	6 আগে

👉 তাই result হয়:

[43, 12, 8, 7, 6, 4, 1]

5️⃣ এক লাইনে মনে রাখার ট্রিক 🧠

👉 Ascending (ছোট → বড়)

a - b


👉 Descending (বড় → ছোট)

b - a

6️⃣ বাস্তব জীবনের example ভাবো 🧑‍🏫

ধরো a আর b দুইটা মানুষ:

a - b → “a কি b এর থেকে ছোট?”

b - a → “b কি a এর থেকে ছোট?”

যে ছোট, সে আগে লাইনে দাঁড়াবে 😄