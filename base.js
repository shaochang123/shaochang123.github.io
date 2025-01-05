document.addEventListener("visibilitychange", function() {
    const favicon = document.getElementById('favicon');
    if (document.hidden) {
        favicon.href = "img/alt-favicon.svg"; // 替换为用户不活跃时的图标
        document.title = "回来看看吧!"; // 替换为用户不活跃时的标题
    } else {
        favicon.href = "img/favicon.svg"; // 恢复为默认图标
        document.title = "lzy's blog"; // 恢复为默认标题
    }
});