$(function() {
    $('#date').pickadate(); //datepicker表示イベント

    $('#time').pickatime({
      format: 'HH:i',  //24時間表記
      interval: 60,    //表示間隔
      min: [09,00],    //予約開始時間
      max: [18,00]     //予約終了時間
    });

    $('#submit').click(onClickSubmit);  //予約ボタン押下イベント

    function onClickSubmit(){
      $('#submit_result').remove();
      let date = $('#date').val();
      let time = $('#time').val();

      if(date != '' && time != ''){

        // TODO 予約をサーバに送信
            // params={};
            // prams.date=date;
            // params.time=time;
            // $.post("hoge.php",params,function(data){
                // ここにサーバ送信後の処理結果を書く
            // });

        //予約完了メッセージ
        $('#result').after('<div id="submit_result" class="section__block section__block--notification"><p><strong>'+date+time+'〜</strong><br>予約受け付けました。</p></div>');
      }else{
        //予約失敗メッセージ
        $('#result').after('<div id="submit_result" class="section__block section__block--notification-red"><p>予約日・予約時間を選択してください。</p></div>');
      }
    }
});
