const search = () => {
  let myword = document.getElementById("myword").value; // 입력한 값
  let word = document.getElementById("word").innerText; // 제시어

  let last_word = word[word.length - 1]; // 마지막 인덱스
  let start_word = myword[0];

  if (start_word === last_word) {
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("word").innerText = myword;
    document.getElementById("myword").value = "";
  } else {
    document.getElementById("result").innerText = "땡!";
    document.getElementById("myword").value = "";
  }
};
