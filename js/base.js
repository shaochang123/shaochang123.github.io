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
// 更新总访问量
function updateTotalVisits() {
    // 检查localStorage中是否已经有记录
    let totalVisits = localStorage.getItem('totalVisits') || 0;
    totalVisits = parseInt(totalVisits) + 1;
    localStorage.setItem('totalVisits', totalVisits);
    document.getElementById('totalVisits').innerText = `总访问量：${totalVisits}`;
}

// 更新当前在线人数
function updateCurrentVisitors() {
    // 使用sessionStorage记录每个会话的唯一标识
    let currentVisitors = sessionStorage.getItem('isCurrentVisitor');

    // 如果没有记录当前会话的ID，则为新访问，标记该会话
    if (!currentVisitors) {
        sessionStorage.setItem('isCurrentVisitor', 'true');
        // 更新当前在线人数
        let currentCount = parseInt(localStorage.getItem('currentVisitors') || 0);
        currentCount += 1;
        localStorage.setItem('currentVisitors', currentCount);
    }

    // 显示当前在线人数
    document.getElementById('currentVisitors').innerText = `当前在线人数：${localStorage.getItem('currentVisitors')}`;
}

// 清理过期的会话数据（模拟当前在线人数统计）
function cleanUpVisitors() {
    setInterval(() => {
        let currentCount = parseInt(localStorage.getItem('currentVisitors') || 0);
        let newCount = currentCount - 1;
        localStorage.setItem('currentVisitors', newCount > 0 ? newCount : 0);
        updateCurrentVisitors();
    }, 60000); // 每60秒更新一次
}

window.onload = () => {
    updateTotalVisits();
    updateCurrentVisitors();
    cleanUpVisitors();
};