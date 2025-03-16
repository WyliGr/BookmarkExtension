chrome.action.onClicked.addListener(() => {
    const url = "URL LINK TO OPEN"; // Replace this by the needed link
    chrome.tabs.create({ url });
  });