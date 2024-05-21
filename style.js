//@ কোনো বাক্য থেকে বড় বাক্য বের করার নিয়ম ১:
const FindlongesWord = (str) =>{

   const strArray = str.split(" "); 
   let num =  strArray.reduce((saveWord, currentWord) => (currentWord.length > saveWord.length ? currentWord : saveWord), " ")
   console.log(num);
}

console.log(FindlongesWord("my name is ripon roy"));
//@str.split(" ") ফাংশনটি ইনপুট স্ট্রিংকে  ফাঁকা স্পেস (" ") দিয়ে আলাদা করে শব্দের একটি অ্যারে তৈরি করে।
//@.reduce map  ‍এর মতো কাজ করে. split থেকে একটা করে মান আসবে currentWord এবং saveWord এ save হবে ।

//* কোনো বাক্য থেকে বড় বাক্য বের করার নিয়ম 2:

function findLongestWord(sentence) {
    const words = sentence.split(' ');
  
    //* সবচেয়ে বড় শব্দটি সংরক্ষণ করার জন্য একটি ভেরিয়েবল
    let longestWord = '';
  
    // * প্রতিটি শব্দ পরীক্ষা করা
    for (let word of words) {
      //* যদি শব্দটির দৈর্ঘ্য longestWord থেকে বড় হয়, তাহলে longestWord আপডেট করুন
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  const longestWord = findLongestWord("আমি জাভাস্ক্রিপ্ট শিখছি এবং এটি খুব মজার");
  console.log('সবচেয়ে বড় শব্দ:', longestWord); // আউটপুট: 'জাভাস্ক্রিপ্ট'
  