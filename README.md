# 装机星图

装机星图是一款面向电脑 DIY 用户的配置助手。它可以帮助用户自由选择配件、检查配置完整度与基础兼容性、比较电商平台商品入口，并在装机广场分享配置单和装机图片。

在线体验：[装机星图](https://zhuangji-xingtu.tcy6247.chatgpt.site)

## 主要功能

- 自由选择 CPU、主板、显卡、内存、硬盘、散热器、电源和机箱。
- 自动显示配置单尚缺少的配件。
- 检查 CPU 与主板接口、主板与内存类型、显卡长度、散热器高度及电源功率等基础兼容性。
- 实时计算配置参考总价、配置完整度和整机功耗建议。
- 已选择配件时可一键重置整套配置。
- 提供京东、淘宝和拼多多的商品搜索入口，方便跳转查看当前商品与成交价格。
- 支持发布配置单、上传装机图片、点赞和浏览社区装机作品。
- 提供多种标准整机方案作为预算与选件参考。
- 支持桌面端和移动端响应式布局。

## 技术栈

- React 19
- Next.js 16
- TypeScript
- Vinext
- Vite
- Cloudflare Workers 与 Wrangler
- Tailwind CSS

## 环境要求

- Node.js 22.13.0 或更高版本
- npm
- Windows、macOS 或 Linux

## 本地运行

克隆仓库：

```bash
git clone https://github.com/T4ngent131/Zhuangjixingtu.git
cd Zhuangjixingtu
```

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

启动成功后，根据终端显示的地址在浏览器中打开项目。默认开发端口通常为 `5173`。

## 构建与预览

生成生产构建：

```bash
npm run build
```

在本地预览生产构建：

```bash
npm run start
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器并支持热更新 |
| `npm run build` | 生成生产环境构建文件 |
| `npm run start` | 使用 Wrangler 预览生产构建 |
| `npm run lint` | 检查代码规范与潜在问题 |
| `npm run db:generate` | 根据数据库结构生成 Drizzle 迁移文件 |

## 项目结构

```text
app/                页面、组件和全局样式
db/                 数据库连接与结构定义
drizzle/            数据库迁移文件
examples/           可选功能示例
public/             图片等静态资源
scripts/            安装、构建与运行辅助脚本
.openai/             站点托管配置
```

主要页面代码位于 `app/page.tsx`，全局样式位于 `app/globals.css`。

## 配置兼容性说明

当前版本会检查以下项目：

- CPU 插槽是否与主板一致。
- 内存类型是否与主板一致。
- 显卡长度是否超过机箱限制。
- 散热器高度是否超过机箱限制。
- 电源额定功率是否满足估算需求并保留合理余量。

兼容性检查用于辅助选购，不能替代厂商规格页和商品详情页。正式下单前仍应复核主板固件版本、机箱显卡厚度、水冷排安装位、供电接口和配件尺寸。

## 价格与购物链接说明

页面中的金额为参考价格。京东、淘宝和拼多多按钮会根据配件名称打开对应平台的商品搜索页，实际价格、库存、优惠和售后政策以跳转后的平台页面为准。

## 数据与存储

当前配置单会保存在浏览器的本地存储中，因此刷新页面后仍可继续编辑。装机广场中的本地发布内容目前属于前端演示数据，尚未接入正式用户系统和云端数据库。

## 部署

项目已经适配 Cloudflare Workers 与 Sites 托管流程，也可以根据目标平台调整构建与发布配置。当前在线版本由 Sites 托管。

## 贡献方式

欢迎通过议题或拉取请求提交功能建议、兼容性规则、配件数据和界面改进。提交代码前建议先运行：

```bash
npm run lint
npm run build
```

## 相关资料

- [Vinext 项目](https://github.com/cloudflare/vinext)
- [Drizzle D1 使用指南](https://orm.drizzle.team/docs/get-started/d1-new)
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
