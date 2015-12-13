﻿
//2015.12.13  加入NoScript參數
//2015.12.10  添加FFProfile設置參數：https://ffprofile.com/#start
//2015.10.17  精简少量參數
//2015.09.19  啟用about:newtab
//2015.08.07 09:00  去掉網絡流水線設置，開啟後有時會出現不能上外網的問題，只能重啟電腦
//2015.07.07 21:00  新增禁止「HTTPS不允许混合内容」特性的參數
//2015.05.22 21:00  新增newDownloadPlus參數
//2015.04.16 13:00  加入新的平滑設置
//2015.04.14 17:00  使用SimpleWhite主題
//2015.04.05 09:00  調整UC管理器菜單

# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.

//*==========选项卡里的设置==========*//
user_pref("browser.preferences.inContent", false);//選項 使用老版彈窗
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("privacy.donottrackheader.enabled", true);//開啟DNT
user_pref("privacy.donottrackheader.value", 1);//0 同意被跟踪;1 不要被跟踪
//字體語言編碼
user_pref("intl.charset.detector", "universal_charset_detector");//自動選擇
user_pref("font.name.serif.zh-CN", "Arial");//衬線字體
user_pref("font.name.sans-serif.zh-CN", "Arial");//無衬線字體
user_pref("font.name.monospace.zh-CN", "Arial");//等寬字體
//拼写检查
user_pref("spellchecker.dictionary", "en-US");//字典
user_pref("layout.spellcheckDefault", 2);//开启单行和全文的拼写检查

//*==========標籤相關==========*//
user_pref("browser.tabs.animate", false);//關閉标签页动画
user_pref("browser.tabs.insertRelatedAfterCurrent", true);//紧邻当前标签打开相关标签
user_pref("browser.tabs.warnOnClose", false);//關閉多個標籤時不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//關閉其它標籤時不提示

//*==========書籤相關==========*//
user_pref("browser.bookmarks.autoExportHTML", true);//關閉Firefox时自動生成HTML書籤備份
user_pref("browser.bookmarks.max_backups", 0);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

//*==========下載相關==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次訊問我要存到何處
user_pref("browser.safebrowsing.downloads.enabled", false);//解決下載卡在最後一秒的問題
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描

//*==========網路相關==========*//
//HTTPS不允许混合内容，以下两条参数用以禁用此特性
user_pref("security.mixed_content.block_active_content", false);
user_pref("security.mixed_content.block_display_content", false);

//*==========平滑滾動==========*//
user_pref("general.smoothScroll.durationToIntervalRatio", 500);
user_pref("mousewheel.min_line_scroll_amount", 35);

//*==========插件相關==========*//
user_pref("plugins.click_to_play", false);//关闭点击才运行插件
user_pref("dom.ipc.plugins.unloadASAP", true);//当插件空闲时自动关闭进程
user_pref("plugins.hide_infobar_for_missing_plugin", true);//隐藏信息栏缺失插件消息提醒
user_pref("plugins.hide_infobar_for_outdated_plugin", true);//过期插件不提示
user_pref("plugins.hide_infobar_for_blocked_plugin", true);//插件屏蔽选择不提示

//*==========关闭安全检测健康中心类==========*//
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("datareporting.healthreport.pendingDeleteRemoteData", true);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.service.firstRun", true);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("dom.enable_performance",false);
user_pref("toolkit.telemetry.unified",false);

//*==========主页==========*//
user_pref("browser.startup.homepage", "about:newtab");//首頁
user_pref("browser.newtabpage.columns", 6);//新标签页列数
user_pref("browser.newtabpage.rows", 3);//新标签页行数
//标签页固定的网站
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://www.google.com/ncr\",\"title\":\"Google\"},{\"url\":\"http://www.baidu.com/\",\"title\":\"Baidu\"},{\"url\":\"https://www.wikipedia.org/\",\"title\":\"Wikipedia\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.linkedin.com/today/?trk=nav_responsive_sub_nav_pulse\",\"title\":\"Pulse\"},{\"url\":\"http://twitter.com/\",\"title\":\"Twitter\"},{\"url\":\"http://www.shanbay.com/\",\"title\":\"Shanbay\"},{\"url\":\"http://www.zhihu.com/explore\",\"title\":\" Zhihu\"},{\"url\":\"http://www.douban.com/\",\"title\":\"Douban\"},{\"url\":\"http://www.guokr.com/\",\"title\":\"Guokr\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"Kafan\"},{\"url\":\"https://github.com/dupontjoy\",\"title\":\"GitHub\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"http://music.163.com/\",\"title\":\"Music\"},{\"url\":\"http://email.163.com/\",\"title\":\"Mail\"},{\"url\":\"https://note.wiz.cn/web\",\"title\":\"Wiznote\"},{\"url\":\"https://getpocket.com/a/queue/list/\",\"title\":\"Pocket\"}]");

//*==========附加組件==========*//
user_pref("extensions.getAddons.cache.enabled", false);//阻止每天更新附加组件元数据
user_pref("extensions.webservice.discoverURL","http://127.0.0.1");//禁用附加组件建议
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项

//*==========FX其它类==========*//
user_pref("general.skins.selectedSkin", "simplewhite");//使用SimpleWhite主題
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("general.warnOnAboutConfig", false);//About:Config警告
user_pref("view_source.editor.external", true);//页面源代码——使用外部編輯器查看
user_pref("privacy.popups.showBrowserMessage", false);//弹窗不提示消息
user_pref("extensions.autoDisableScopes", 0);//第一次运行不禁止任何扩展
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不检测版本，不弹欢迎页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("extensions.blocklist.enabled", false);//关闭启动时插件检查窗口
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("network.standard-url.escape-utf8", false);//是否转化中文URL为utf-8格式，默认true
user_pref("browser.newtabpage.directory.ping", "");//取消新标签页建议磁贴并取消回传数据

//關閉预测服务，含推测性预连接
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);

//From：FFProfile
user_pref("browser.selfsupport.url", "");//禁用心跳评价系统
user_pref("browser.pocket.enabled", false);//禁用Pocket
user_pref("loop.enabled", false);//禁用Mozilla Hello
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("dom.indexedDB.enabled", false);
user_pref("network.prefetch-next", false);//關閉鏈接預讀
user_pref("network.dns.disablePrefetch", true);//關閉DNS預讀
user_pref("beacon.enabled", false);//Beacon 是使用 navigator.sendBeacon()在你离开一个页面时将一些数据回传给服务器
user_pref("browser.send_pings", false);//ping 服务，Firefox 会把你点击过的链接及其时间发回给服务器
user_pref("toolkit.telemetry.enabled", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("browser.newtab.preload", false);
user_pref("media.peerconnection.enabled", false);
user_pref("dom.battery.enabled", false);

//*==========扩展设置==========*//
//adblockplus
user_pref("extensions.adblockplus.patternsbackups", 0);
user_pref("extensions.adblockplus.frameobjects", false);//在Java和Flash上显示标签 - 否
user_pref("extensions.adblockplus.subscriptions_antiadblockurl", "");//原反-反ADP列表
//-非侵入式广告地址換成个人ABP规则
user_pref("extensions.adblockplus.subscriptions_exceptionscheckbox", true);//非入侵式广告勾选框
user_pref("extensions.adblockplus.subscriptions_exceptionsurl", "https://github.com/dupontjoy/customization/raw/master/Rules/ABP/Floating-n-Porn-Ads-Filter.txt");//原非入侵式广告订阅网址

//Autoproxy
user_pref("extensions.autoproxy.customProxy", "Shadowsocks;;1080;socks$GoAgent;;8087;$Free%20Gate;;8580;$Psiphon;;8080;$Lantern;;8787;");
user_pref("extensions.autoproxy.patternsbackups", 0);

//Simple Proxy
user_pref("extensions.simpleproxy@jc3213.github.proxy_0_list", "https://github.com/Leask/BRICKS/raw/master/gfw.bricks");
user_pref("extensions.simpleproxy@jc3213.github.proxy_0_server", "socks::127.0.0.1::1080");

//LastPass
user_pref("extensions.lastpass.hidecontextmenu", true);
user_pref("extensions.lastpass.showHomepageAfterLogin", false);//登入後不轉到密码库
user_pref("extensions.lastpass.0a148091163b8a7de3368af449db2947c700bea1552b01964d4ae55f930562e0.toplevelmatchingsites", true);//将匹配网站移动到顶部菜单
user_pref("extensions.lastpass.loginusers", "dupontjoy%40163.com");//保存用戶名
user_pref("extensions.lastpass.loginpws", "");//不保存密码

//FlashGot
user_pref("flashgot.hide-all", true);
user_pref("flashgot.hide-buildGallery", true);
user_pref("flashgot.hide-icons", true);
user_pref("flashgot.hide-it", true);
user_pref("flashgot.hide-media", true);
user_pref("flashgot.hide-options", true);
user_pref("flashgot.hide-sel", true);
user_pref("flashgot.omitCookies", true);//不发送Cookie
user_pref("flashgot.firstRunRedirection", false);//重建配置不弹FlashGot首页

//DownThemAll！
user_pref("extensions.dta.conflictresolution", 0);//文檔已存在時自動重命名
user_pref("extensions.dta.sounds.error", true);//發生錯誤時播放音效
user_pref("extensions.dta.alertbox", 0);//下載完成後對話視窗提示
user_pref("extensions.dta.closedta", true);//辯識並列出Flash影片
user_pref("extensions.dta.ctxmenu", "0,0,0");//不顯示右鍵菜單
user_pref("extensions.dta.removecanceled", true);//從清單中移除中斷及錯誤的下載
user_pref("extensions.dta.confirmremove", false);//移除下載前不提示
user_pref("extensions.dta.maxchunks", 10);//每次下載最大塊數
user_pref("extensions.dta.timeout", 900);//下載超時時間（900秒/15分鐘）
user_pref("extensions.dta.loadendfirst", true);//先加載最後一部分數據
user_pref("extensions.dta.exposeInUA", true);//在UA中顯示DTA

//Noscript
user_pref("noscript.autoAllow", 3); //自動允許第二層網域
user_pref("noscript.autoReload.allTabs", false); //只重載當前頁面
user_pref("noscript.forbidFonts", false); //不禁止@font-face
user_pref("noscript.showAbout", false); //不顯示關於
user_pref("noscript.notify.hideDelay", 30); //xx秒後隱藏
user_pref("noscript.notify.hide", true); //時間到後自動隱藏
user_pref("noscript.xss.notify", false); //不顯示被封鎖的META重定向
user_pref("noscript.forbidMetaRefresh.notify", false); //不顯示XSS通知
user_pref("noscript.firstRunRedirection", false); //不顯示更新發行公告
user_pref("noscript.ABE.enabled", false); //禁用ABE
user_pref("noscript.subscription.checkInterval", 24);//更新检查周期间隔
user_pref("noscript.subscription.trustedURL", "https://github.com/dupontjoy/customization/raw/master/Rules/NoScript/NoScript-Whitelist.txt");//可信名单的订阅URL，在线订阅的黑白名单会定期自动同步到本地，并与本地名单合并

//Greasemonkey
user_pref("extensions.greasemonkey.stats.prompted", true);//不弹改进建议提示
user_pref("extensions.greasemonkey.installDelay", 0);//安裝時的倒計時

//Stylish
user_pref("extensions.stylish.firstRun", 3);//重建配置不弹首页

//*==========脚本设置==========*//
//rebuild_userChrome脚本管理器
user_pref("userChromeJS.rebuildUI.menues", "addMenu-rebuild,anobtn_set,toolsbar_KeyChanger_rebuild,redirector-icon,usercssloader_Tools_Menu");

//UserCSSLoader引导器
user_pref("UserCSSLoader.innereditor", false);//使用外部编辑器
user_pref("UserCSSLoader.showtoolbutton", false);//显示为菜单

//InspectElementModY
user_pref("userChromeJS.InspectElement.contentType", 2);//查看页面:Dom Inspector
user_pref("userChromeJS.InspectElement.mainWinType", 2);//查看窗口:Dom Inspector

//AddmenuPlus
user_pref("addMenu.FILE_PATH", "local\_addMenu.js");//配置路径

//GrabScroll
user_pref("grabScroll.button", 1);//使用GrabScroll抓取的键位：中键
user_pref("grabScroll.clickable", false);//能够在链接上使用GrabScroll

//newDownloadPlus
//主界面
user_pref("userChromeJS.downloadPlus.downloadSound_Play", true);//下載完成提示音
user_pref("userChromeJS.downloadPlus.downloadFileSize", true);//精確顯示文件大小
user_pref("userChromeJS.downloadPlus.autoClose_blankTab", true);//自動關閉空白標籤
user_pref("userChromeJS.downloadPlus.download_speed", true);//下載面皮顯示下載速度
//下載界面
user_pref("userChromeJS.downloadPlus.download_dialog_saveas", true);//另存爲
user_pref("userChromeJS.downloadPlus.download_dialog_saveTo", true);//保存到
user_pref("userChromeJS.downloadPlus.download_dialog_saveTo_suffix", 1);//保存到——後綴樣式
user_pref("userChromeJS.downloadPlus.download_dialog_showCompleteURL", true);//双擊複製完整地址
user_pref("userChromeJS.downloadPlus.download_dialog_doubleclicksaveL", false);//双击保存執行下載
user_pref("userChromeJS.downloadPlus.download_dialog_doubleclickanyW", false);//双击任意地方執行下載
//其他
user_pref("userChromeJS.downloadPlus.new_Download", true);//新建下載
user_pref("userChromeJS.downloadPlus.new_Download_popups", true);//新建下載——是否彈窗
user_pref("userChromeJS.downloadPlus.downloadsPanel_removeFile", true);//從硬盤刪除
user_pref("userChromeJS.downloadPlus.download_checksum", true);//Hash計算
user_pref("userChromeJS.downloadPlus.save_And_Open", true);//保存并打開
user_pref("userChromeJS.downloadPlus.save_And_Open_RorL", 1);//保存并打開——打開文件
user_pref("userChromeJS.downloadPlus.download_dialog_changeName", true);//下載改名
user_pref("userChromeJS.downloadPlus.download_dialog_changeName_encodingConvert", true);//下載改名——是否開啟下拉菜單
//user_pref("userChromeJS.downloadPlus.download_dialog_changeName_locking", true);//下載改名——鎖定保存文件按鈕

//uAutoPagerize2腳本
user_pref("uAutoPagerize.AUTO_START", false);//默認不翻頁

//ShowFlagS
user_pref("userChromeJS.showFlagS.RefChanger", true);//開啟圖片反盜鏈
user_pref("userChromeJS.showFlagS.UAChanger", true);//開啟UA切換
user_pref("userChromeJS.showFlagS.Reacquire", true);//失敗自動獲取

