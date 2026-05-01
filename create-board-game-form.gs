function createBoardGameEventForm() {

  // フォーム作成
  var form = FormApp.create('🎲 ボードゲームでつながる休日 ― 参加申込フォーム');

  form.setDescription(
    'ゲームをしながら、自然に仲よくなれる1日。\n\n' +
    '「婚活」ってちょっとハードルが高い…そう感じたことはありませんか？\n' +
    'このイベントは、ボードゲームを囲みながらリラックスして交流できる場です。\n' +
    '会話が苦手な方も、一人参加の方も、みんなが楽しめる設計にしています。\n\n' +
    '📅 2026年6月7日（日）\n' +
    '　　ボードゲーム　13:30〜16:00\n' +
    '　　懇親会　　　　17:00〜19:30\n' +
    '📍 まぁる\n' +
    '💰 参加費 6,000円（懇親会費込み・当日受付払い）\n' +
    '👥 対象：20〜40歳の独身男女／定員：男女各10名（先着順）\n\n' +
    '所要時間：約3分で完了します。お気軽にご応募ください！\n\n' +
    '─────────────────────────────\n' +
    '※最少決行人数：男女各4名\n' +
    '※ご不明な点はこちらへ：OOO-OOO-OOO\n' +
    '─────────────────────────────'
  );

  form.setConfirmationMessage(
    '🎉 お申し込みありがとうございます！\n\n' +
    '受付が完了しました。\n' +
    'ご登録いただいたメールアドレスに確認メールをお送りします。\n' +
    '届かない場合は迷惑メールフォルダもご確認ください。\n\n' +
    '─────────────────────────────\n' +
    '📅 当日のご案内\n' +
    '日時：2026年6月7日（日）\n' +
    '　　　ボードゲーム 13:30〜（受付13:15〜）\n' +
    '　　　懇親会　　　17:00〜19:30\n' +
    '場所：まぁる\n' +
    '持ち物：参加費 6,000円（現金）\n' +
    '─────────────────────────────\n\n' +
    'ドキドキしてる方も、ぜひリラックスしてきてください。\n' +
    'スタッフ一同、笑顔でお迎えします 😊\n\n' +
    'ご不明な点はこちらへ：OOO-OOO-OOO'
  );

  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setShowLinkToRespondAgain(false);


  // ── セクション1：基本情報 ──────────────────────────

  form.addSectionHeaderItem()
    .setTitle('基本情報')
    .setHelpText('');

  // Q1 お名前
  form.addTextItem()
    .setTitle('お名前（フルネーム）')
    .setHelpText('当日のお呼びかけに使用します。ニックネームでもOKです！')
    .setRequired(true);

  // Q2 ふりがな
  form.addTextItem()
    .setTitle('ふりがな')
    .setRequired(true);

  // Q3 性別
  form.addMultipleChoiceItem()
    .setTitle('性別')
    .setChoiceValues(['男性', '女性', '回答しない'])
    .setRequired(true);

  // Q4 年齢（プルダウン）
  var ages = [];
  for (var i = 20; i <= 40; i++) { ages.push(i + '歳'); }
  form.addListItem()
    .setTitle('年齢')
    .setChoiceValues(ages)
    .setRequired(true);

  // Q5 メールアドレス
  form.addTextItem()
    .setTitle('メールアドレス')
    .setHelpText('確認メール・キャンセル連絡等に使用します')
    .setRequired(true);

  // Q6 電話番号（任意）
  form.addTextItem()
    .setTitle('電話番号')
    .setHelpText('緊急時のご連絡に使用します（任意）')
    .setRequired(false);


  // ── セクション2：参加内容の確認 ──────────────────────

  form.addPageBreakItem()
    .setTitle('参加内容の確認');

  // Q7 参加プログラム
  var programItem = form.addCheckboxItem();
  programItem.setTitle('参加を希望するプログラムを教えてください')
    .setHelpText('どちらか一方のみのご参加も歓迎です！')
    .setChoices([
      programItem.createChoice('ボードゲーム（13:30〜16:00）'),
      programItem.createChoice('懇親会（17:00〜19:30）')
    ])
    .setRequired(true);

  // Q8 支払い確認
  var payItem = form.addCheckboxItem();
  payItem.setTitle('参加費のお支払い方法についてご確認ください')
    .setChoices([
      payItem.createChoice('当日受付にて現金でお支払いします（6,000円）')
    ])
    .setRequired(true);


  // ── セクション3：参加のきっかけ ────────────────────

  form.addPageBreakItem()
    .setTitle('参加のきっかけ')
    .setHelpText('より楽しい場づくりのための質問です。気軽にお答えください！');

  // Q9 きっかけ
  form.addMultipleChoiceItem()
    .setTitle('このイベントを知ったきっかけは？')
    .setChoiceValues([
      'SNS（Instagram / X / Facebook など）',
      '友人・知人からの紹介',
      'チラシ・ポスター',
      'ウェブ検索',
      'その他'
    ])
    .setRequired(true);

  // Q10 参加理由
  form.addMultipleChoiceItem()
    .setTitle('参加を決めた一番の理由を教えてください')
    .setChoiceValues([
      'ボードゲームが好きだから',
      '新しい出会いに興味があるから',
      '気軽に参加できそうだったから',
      '友人に誘われたから',
      'なんとなく面白そうだったから'
    ])
    .setRequired(true);


  // ── セクション4：あなたのことを教えてください ──────────

  form.addPageBreakItem()
    .setTitle('あなたのことを教えてください')
    .setHelpText('当日の自己紹介やマッチングのヒントにします。答えたくない項目は飛ばしてOK！');

  // Q11 性格タイプ（任意）
  var personalityItem = form.addCheckboxItem();
  personalityItem.setTitle('あなたの性格に近いのはどれですか？（あてはまるものをすべて選択）')
    .setChoices([
      personalityItem.createChoice('人見知りだけど、慣れると話す'),
      personalityItem.createChoice('初対面でもわりと話せる'),
      personalityItem.createChoice('聞き役が多い'),
      personalityItem.createChoice('話すのが好き'),
      personalityItem.createChoice('マイペースで自分のペースを大切にする'),
      personalityItem.createChoice('場の空気を読むのが得意')
    ])
    .setRequired(false);

  // Q12 趣味（任意）
  var hobbyItem = form.addCheckboxItem();
  hobbyItem.setTitle('趣味・好きなことを教えてください（複数選択OK）')
    .setChoices([
      hobbyItem.createChoice('ボードゲーム・カードゲーム'),
      hobbyItem.createChoice('アウトドア・スポーツ'),
      hobbyItem.createChoice('映画・アニメ・マンガ'),
      hobbyItem.createChoice('料理・グルメ・カフェ巡り'),
      hobbyItem.createChoice('音楽・ライブ'),
      hobbyItem.createChoice('旅行'),
      hobbyItem.createChoice('読書'),
      hobbyItem.createChoice('ゲーム（デジタル）'),
      hobbyItem.createChoice('その他')
    ])
    .setRequired(false);

  // Q13 スタッフへのひとこと（任意）
  form.addParagraphTextItem()
    .setTitle('スタッフへのひとこと（任意）')
    .setHelpText('当日スタッフがフォローします。ひとこと添えてもらえると助かります。')
    .setRequired(false);


  // ── セクション5：同意事項 ────────────────────────

  form.addPageBreakItem()
    .setTitle('同意事項')
    .setHelpText('以下の内容にご同意いただける方のみ、お申し込みください');

  // Q14 同意チェック
  var agreeItem = form.addCheckboxItem();
  agreeItem.setTitle('以下の項目すべてにチェックを入れてください')
    .setChoices([
      agreeItem.createChoice('参加対象（20〜40歳の独身男女）に該当します'),
      agreeItem.createChoice('最少決行人数（男女各4名）を満たさない場合、イベントが中止となることを了承します'),
      agreeItem.createChoice('収集した個人情報はイベント運営目的のみに使用することに同意します'),
      agreeItem.createChoice('キャンセルの場合は速やかにご連絡いただけることを了承します')
    ])
    .setRequired(true);


  // ── 完了メッセージ ──────────────────────────────

  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log('✅ フォーム作成完了！');
  Logger.log('📋 回答用URL（公開用）: ' + formUrl);
  Logger.log('✏️  編集用URL: ' + editUrl);

  // スプレッドシートと連携（回答を記録）
  var ss = SpreadsheetApp.create('ボードゲームイベント申込_回答シート');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
  Logger.log('📊 回答スプレッドシート: ' + ss.getUrl());
}
