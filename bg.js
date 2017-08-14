//menuクリック時の関数定義
function onClickHandler(info, tab) {
  if (info.menuItemId == "main") {
    if((info.selectionText != null)){
            chrome.tabs.create({
                url: "https://www.google.co.jp/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=" + info.selectionText
            });
        }
  }
};
//event登録
chrome.contextMenus.onClicked.addListener(onClickHandler);
//コンテキストメニュー生成
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
    title: "検索",
    "id":"main",
    contexts:["selection"]
});
});