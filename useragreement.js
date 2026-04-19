// 用户协议功能模块
(function() {
    'use strict';

    const USER_AGREEMENT_VERSION_URL = 'useragreementversion.json';
    const COOKIE_NAME = 'user_agreement_version';
    
    // Markdown原始内容（从EULA.md转换而来）
    const EULA_MARKDOWN = `# 最终用户许可协议 (EULA)

- 版本：1.0
- 更新日期：2026年4月

**重要提示：请您在使用本网站前，务必审慎阅读、充分理解本协议各条款内容。您的访问、浏览、下载、使用本网站及其任何组成部分的行为，均视为您已阅读并同意接受本协议全部条款的约束。**

## 一、名词定义

1. 本网站：指域名为genshinlore.cn的网站及其全部子页面、相关服务和数字副本，又名《日月全事》世界观手册网站版。
2. 内容：指本网站内发布的除程序代码和UI设计之外的所有文字、图片、多媒体素材、数据汇编、表格及表述。根据其法律属性，进一步细分为：
   · 原创汇编内容：指本网站作者对游戏内分散文本进行独创性选择、编排、校对、注释而形成的具有独创性的汇编作品，其著作权由本手册作者诗漱享有。
   · 官方原始内容：指内容中涉及的所有《原神》游戏内原文、角色名称、世界观设定、游戏截图及官方美术素材，其原始版权及相关知识产权均归上海米哈游网络科技股份有限公司（以下简称"米哈游"）所有。
3. UI设计：指本网站的用户界面设计、交互样式、页面布局、CSS样式代码及相关的视觉呈现方案。
4. 程序代码：指本网站运行所依赖的、未编译的或已编译的源代码，包括但不限于HTML、JavaScript及其他后端脚本。
5. 原作者/网站作者：指本汇编作品及本网站的创建者与维护者。

## 二、知识产权与分项许可声明

本网站由多个独立版权部分构成，各部分遵循不同的许可协议，具体如下：

1. 内容部分的许可：
   本网站内容遵循 知识共享 署名-非商业性使用-禁止演绎 4.0 国际 (CC BY-NC-ND 4.0) 许可协议。**特别声明：所有游戏内原文、设定、美术素材的原始版权均归米哈游所有。**
2. UI设计部分的许可：
   本网站的用户界面设计遵循 知识共享 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 许可协议。
3. 程序代码部分的许可：
   本网站的程序代码遵循 GNU 通用公共许可证 第三版 (GPLv3) 开源协议。

## 三、关于网站内容的限制 (依据 CC BY-NC-ND 4.0)

根据 CC BY-NC-ND 4.0 国际许可协议，您不得对"内容"部分（包括原创汇编内容与官方原始内容的呈现形式）实施以下行为：

1. 商业性使用：不得以任何形式将本网站内容用于商业目的或进行商业销售。根据《原神同人周边正式运行指引》及本网站作者声明，本手册内容属于无需申报但严禁营利的同好交流作品。严禁任何个人或团体通过打包出售、付费阅读、印刷实体书售卖等方式倒卖本网站内容。
2. 演绎与修改：不得对本网站内容进行修改、混编、翻译或二次创作后重新发布。如需引用原文，必须保持内容的原始完整性，并明确注明出处为"《日月全事》世界观手册"及原作者信息。
3. 歪曲与篡改：未经允许，不得歪曲、篡改本手册的汇编内容及编排形式。原作者享有《著作权法》规定的汇编作品著作权，有权保护作品的完整性。

## 四、关于网站UI设计的限制 (依据 CC BY-NC-SA 4.0)

根据 CC BY-NC-SA 4.0 国际许可协议，您不得对"UI设计"部分实施以下行为：

1. 商业性使用：不得直接复制或修改本网站的UI模板、前端样式用于商业项目、付费主题开发或具有商业性质的第三方应用。
2. 闭源/私有化传播：若您基于本网站的UI设计进行修改或二次创作，您必须以 相同方式共享 (CC BY-NC-SA 4.0) 协议开源您的新设计，不得将其转为私有版权、申请外观专利或进行加密分发。

## 五、关于程序代码的限制 (依据 GPLv3)

根据 GPLv3 开源协议，您不得对"程序代码"部分实施以下行为：

1. 闭源分发：如果您对本网站的程序代码进行修改并分发（包括提供基于此代码的网络服务），您必须公开修改后的完整源代码，并保留原始版权声明及GPLv3许可证文本。
2. 附加限制：不得通过技术手段阻止下游用户获取、阅读或修改源代码的权利。
3. 专利报复：如果您针对本软件代码的贡献者发起专利侵权诉讼，您依据本协议获得的软件使用许可将自动终止。

## 六、免费使用与反商业倒卖特别声明

本网站提供的所有服务及数据均为永久免费。原作者在《前言》中已明确声明其建设成果"不设任何门槛，不搞任何套路"。

以下行为被严厉禁止并属于严重侵权行为：

1. 擅自售卖手册下载链接、安装包或网站访问权限。
2. 擅自印刷实体手册并进行售卖（无论是否以"工本费"名义）。
3. 将本网站内容打包上传至需付费、需积分、需关注或带密码的第三方平台。

对于上述倒卖行为，本网站作者将视为对原作者劳动成果的窃取，并保留追究侵权者法律责任的权利。

## 七、关于泄密内容与来源合规声明

根据原作者在《前言》第五部分第（三）节的声明，并鉴于"米哈游诉妮可少女案"所确立的法律风险：

1. 内容来源承诺：本网站所使用的全部游戏内容，均为米哈游官方已经公布的素材。本网站绝不收录、不讨论、不依据任何非官方的解包内容、内鬼爆料或未公开的测试服数据。
2. 用户建议限制：本网站拒绝任何涉及内鬼消息或泄密内容的修改建议与投稿。对于发布内鬼消息的行为，本网站有权在不通知的情况下删除相关言论。

## 八、法律责任与免责声明

1. 第三方版权：本网站作为非官方爱好者资料汇编平台，其内容中涉及的游戏原文、角色、设定等版权均归米哈游所有。本网站不拥有任何游戏内原文的版权，亦不对其进行任何形式的修改或二次创作。对于任何未经授权使用、篡改、歪曲本网站内容的行为，本网站作者将保留追究其法律责任的权利。
2. 侵权行为追责：对于严重侵权行为（包括但不限于歪曲事实散布谣言、泄露隐私、制造网络暴力、倒卖手册内容、未经允许修改手册内容），本网站作者将依据《著作权法》《反不正当竞争法》等相关法律，采取包括但不限于民事索赔、刑事报案在内的法律手段追究到底。
3. 准确性声明：本手册内容虽经过严密校对，但因游戏版本更迭与文本来源的时间跨度较大，可能存在前后不一致或疏漏之处。本网站内容仅供同好交流参考，不构成任何官方设定集的替代。

## 九、Cookie 使用声明

为保障网站正常运行及优化用户体验，本网站可能会使用必要的 Cookies 及本地存储技术。

1. 必要性 Cookies：用于记录您的公告和用户协议阅读状态，不涉及个人隐私追踪。
2. 您的权利：您可以在浏览器设置中禁用 Cookies，但这可能导致部分页面功能无法正常使用。

## 十、法律适用与管辖

本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。因本协议产生的或与本协议有关的任何争议，双方应友好协商解决；协商不成的，任何一方均可向网站作者所在地有管辖权的人民法院提起诉讼。

## 十一、附则

本协议最终解释权归本网站作者所有。作者有权在必要时对本协议条款进行修改，修改后的协议一经公布即有效替代原协议，请您定期查阅。

—— 愿风指引你们的道路，感谢您的理解与支持。`;

    // 简单的Markdown转HTML函数（使用内联样式）
    function markdownToHtml(markdown) {
        let html = markdown;
        
        // 转义HTML特殊字符（防止XSS）
        html = html.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;');
        
        // 处理引用块 (> text) - 使用内联样式
        html = html.replace(/^>\s+(.*$)/gim, '<blockquote style="border-left: 4px solid #dfe2e5; padding-left: 16px; margin-left: 0; color: #6a737d; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6;">$1</blockquote>');
        
        // 处理标题 (# ## ###) - 使用内联样式
        html = html.replace(/^### (.*$)/gim, '<h3 style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, sans-serif; font-size: 1.25em; margin-top: 24px; margin-bottom: 16px; font-weight: 600; line-height: 1.25; color: #4d4f53;">$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2 style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, sans-serif; font-size: 1.5em; margin-top: 24px; margin-bottom: 16px; font-weight: 600; line-height: 1.25; color: #4d4f53; border-bottom: 1px solid #D3BC8E; padding-bottom: 0.3em;">$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1 style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, sans-serif; font-size: 2em; margin-top: 24px; margin-bottom: 16px; font-weight: 600; line-height: 1.25; color: #4d4f53; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em;">$1</h1>');
        
        // 处理粗体 (**text**)
        html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
        
        // 处理斜体 (*text*)
        html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
        
        // 处理无序列表项 (- item 或 * item)
        html = html.replace(/^\s*[-*]\s+(.*$)/gim, '<li style="margin-bottom: 0.25em;">$1</li>');
        
        // 处理有序列表项 (1. item)
        html = html.replace(/^\s*\d+\.\s+(.*$)/gim, '<li style="margin-bottom: 0.25em;">$1</li>');
        
        // 将连续的<li>包裹在<ul>中 - 使用内联样式
        html = html.replace(/((<li[^>]*>.*<\/li>\n?)+)/gim, '<ul style="padding-left: 2em; margin-bottom: 16px; list-style-type: disc;">$1</ul>');
        
        // 处理段落（两个换行之间的文本）- 使用内联样式
        html = html.replace(/\n\n/g, '</p><p style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #333; margin-bottom: 16px; text-align: justify;">');
        html = '<p style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #333; margin-bottom: 16px; text-align: justify;">' + html + '</p>';
        
        // 清理空的<p>标签
        html = html.replace(/<p[^>]*>\s*<\/p>/g, '');
        html = html.replace(/<p[^>]*>\s*(<h[1-6]>)/g, '$1');
        html = html.replace(/(<\/h[1-6]>)\s*<\/p[^>]*>/g, '$1');
        html = html.replace(/<p[^>]*>\s*(<ul>)/g, '$1');
        html = html.replace(/(<\/ul>)\s*<\/p[^>]*>/g, '$1');
        html = html.replace(/<p[^>]*>\s*(<blockquote>)/g, '$1');
        html = html.replace(/(<\/blockquote>)\s*<\/p[^>]*>/g, '$1');
        
        // 处理单个换行
        html = html.replace(/\n/g, '<br>');
        
        
        return html;
    }
    
    // 获取Cookie值
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    
    // 设置Cookie值
    function setCookie(name, value) {
        const expires = new Date('2999-12-31T23:59:59Z').toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=/`;
    }
    
    // 获取用户已同意的协议版本
    function getAgreedVersion() {
        const version = getCookie(COOKIE_NAME);
        return version ? parseInt(version, 10) : null;
    }
    
    // 保存用户同意的协议版本
    function saveAgreedVersion(version) {
        setCookie(COOKIE_NAME, version.toString());
    }
    
    // 创建用户协议弹窗HTML
    function createUserAgreementModal() {
        const modal = document.createElement('div');
        modal.id = 'user-agreement-modal';
        modal.className = 'modal user-agreement-modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>📜 用户协议</h3>
                </div>
                <div class="modal-body" id="user-agreement-body" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; line-height: 1.6; color: #333; max-width: 100%;">
                    <!-- 用户协议内容将在这里动态插入 -->
                </div>
                <div class="modal-footer" id="user-agreement-footer">
                    <button class="btn btn-decline" id="ua-decline-btn">不同意</button>
                    <button class="btn btn-agree" id="ua-agree-btn">同意</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 绑定按钮事件
        const agreeBtn = document.getElementById('ua-agree-btn');
        const declineBtn = document.getElementById('ua-decline-btn');
        
        agreeBtn.addEventListener('click', handleAgree);
        declineBtn.addEventListener('click', handleDecline);
        
        // 禁止点击背景关闭（必须明确选择）
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                e.stopPropagation();
            }
        });
        
        return modal;
    }
    
    // 处理同意按钮点击
    function handleAgree() {
        const latestVersion = window.currentAgreementVersion;
        if (latestVersion) {
            saveAgreedVersion(latestVersion);
        }
        closeUserAgreementModal();
    }
    
    // 处理不同意按钮点击
    function handleDecline() {
        // 关闭当前标签页
        window.open('', '_self').close();
        // 如果上述方法不起作用，尝试重定向到空白页
        window.location.href = 'about:blank';
    }
    
    // 关闭用户协议弹窗
    function closeUserAgreementModal() {
        const modal = document.getElementById('user-agreement-modal');
        if (modal) {
            modal.classList.remove('modal-active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }
    
    // 显示用户协议弹窗
    function showUserAgreementModal() {
        const modal = document.getElementById('user-agreement-modal');
        if (modal) {
            modal.style.display = 'flex';
            // 触发动画
            setTimeout(() => {
                modal.classList.add('modal-active');
            }, 10);
        }
    }
    
    // 渲染用户协议内容
    function renderUserAgreement(markdownContent) {
        const agreementBody = document.getElementById('user-agreement-body');
        if (!agreementBody || !markdownContent) return;
        
        // 将Markdown转换为HTML
        const htmlContent = markdownToHtml(markdownContent);
        agreementBody.innerHTML = htmlContent;
    }
    
    // 从服务器获取用户协议版本
    async function fetchUserAgreementVersion() {
        try {
            const response = await fetch(USER_AGREEMENT_VERSION_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('获取用户协议版本失败:', error);
            return null;
        }
    }
    
    // 检查是否需要显示用户协议
    function shouldShowAgreement(currentVersion) {
        const agreedVersion = getAgreedVersion();
        
        // 如果从未同意过，或者版本不一致，则需要显示
        return agreedVersion === null || agreedVersion !== currentVersion;
    }
    
    // 初始化用户协议系统
    async function initUserAgreementSystem() {
        // 创建弹窗
        createUserAgreementModal();
        
        // 获取用户协议版本
        const versionData = await fetchUserAgreementVersion();
        if (!versionData) {
            console.error('无法加载用户协议版本，默认允许访问');
            return;
        }
        
        const currentVersion = versionData.version;
        
        // 保存当前版本号供全局使用
        window.currentAgreementVersion = currentVersion;
        
        // 检查是否需要显示协议
        if (shouldShowAgreement(currentVersion)) {
            // 渲染协议内容（从JavaScript中的Markdown字符串转换）
            renderUserAgreement(EULA_MARKDOWN);
            // 显示弹窗
            showUserAgreementModal();
        }
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUserAgreementSystem);
    } else {
        initUserAgreementSystem();
    }
})();
