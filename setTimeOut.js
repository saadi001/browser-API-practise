/* setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।  */

console.log('first');
setTimeout(() => console.log('two'),3000 ) // this will be come after 3 second
console.log('third');
