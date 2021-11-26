var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
  copy_to_clipboard('自己紹介のテンプレートです
これをもとに自己紹介お願いします
《は出来るだけ記入お願いします。
〈は任意です
〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

【自己紹介】
《名前》
名前:
〈年齢〉

《やってるゲーム》

《ゲームタグ》
メイン:
サブ:
〈主な活動時間〉

《どこから来たか》

〈趣味〉

〈今やりたいこと〉

〈好きな食べ物〉

〈部活〉 

〈委員会〉

〈一言〉');
});

function copy_to_clipboard(value) {
  if (navigator.clipboard) {
    var copyText = value;
    navigator.clipboard.writeText(copyText).then(function() {
      alert('コピーしました。');
    });
  } else {
    alert('対応していません。');
  }
