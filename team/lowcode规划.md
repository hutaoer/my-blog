# lowcode规划.md


项目目标： 搭建lowcode和nocode 工具， 让业务快速接入结果页，实现产品的快速迭代
组件能力规划
１、定性目标：
２、定量目标（KPI）：
3、实现策略：
4、团队结构：
5、项目规划：
5、进展情况：
项目目标： 搭建lowcode和nocode 工具， 让业务快速接入结果页，实现产品的快速迭代
统计口径 ： 不用开发的业务迭代次数  + 通过实验平台接入的业务数量 / 所有接入结果页的业务迭代次数 



组件能力规划
已规划：单柱形图、柱折图、堆叠图、横向柱形图、分布柱形图、分组柱形图、折线图、选股表格、事件表格、容器二分布局、容器三分布局、容器列表布局、容器复合布局、容器泳道、超级文本

https://www.yuque.com/books/share/1c82dc0f-298a-48c1-97a6-ab86b7efb34c?# 



１、定性目标：
1.1、内容齐全：别人有的（天天基金、支付宝、东财、雪球、选股宝...F10、数据中心、财报），在这里都可以配出来

1.２、效果好的：组件、模板的设计能够辅助用户完成数据的理解、分析等任务（评价指标：图表不清晰负反馈占比、组件互动率情况）

1.３、智能的：从用户问句到智能取数到智能组件最后到智能模板（规划）

今年重点在１.1和1.２，组件能力打造上面

２、定量目标（KPI）：
效能指标:

指标１：业务直接支持比例80％：

　　　　指标意义：例如5月份接了5个需求，其中有４个是直接通过结果页直接配出来的，没有经过开发，则５月直接支持业务比例为80％；

　　　　指标计算逻辑：

                      需要依赖开发的jira对应的标签为"结果页吞吐_依赖开发";

                      不需要依赖开发的jira对应的标签为 "结果页吞吐_不依赖开发";

                      业务直接支持比例= jira需求数量(结果页吞吐_不依赖开发) / jira需求数量(结果页吞吐_不依赖开发)+jira需求数量(结果页吞吐_依赖开发)

指标2：需求吞吐能力80％：

             指标意义：某业务需求拆解下来10个组件，其中有8个组件是结果页直接用的，不用任何修改，则该需求吞吐能力为80%;

             指标计算逻辑：

                      需要依赖开发的组件jira对应的标签为"新增组件";

                      能力上支持，但效果上还需要优的组件jira对应的标签为"组件优化";

                      不需要依赖开发的组件jira对应的标签为"直接复用组件";

                      需求吞吐能力= jira需求数量(直接复用组件) / jira需求数量(新增组件)+jira需求数量(组件优化)+jira需求数量(直接复用组件)

组件好坏指标:

组件或模板的意义在于能够更好地辅助用户完成数据的理解、分析等任务，针对这个意义拆解下来的评价指标有：

指标1：图表不清晰负反馈指标：

             指标意义：智能投顾对话里针对query负反馈意见有"图表不清晰"的反馈项，通过组件的优化消除这个负反馈项

             指标计算逻辑：

　　　　　　（1）、以每个query为一个业务场景，统计每个场景下图表不清晰负反馈指标pv、uv、负反馈率（负反馈uv/触发该问句的uv）；

                      （2）、赤兔实验机制：灰度发布，观察负反馈相关指标是否有改善，或达到标准（为0）

指标2：图表交互率（适用于有交互事件的组件）：

            指标意义：用户在图表上产生了交互事件，说明用户对图表信息产生了兴趣，开始参与到图表分析、理解的过程中

            事件类型：超链跳转、行情跳转、落地页跳转、发送query、展开收起、触发tooltips

            指标计算逻辑：

                      （1）、组件分类：给每个组件打上“有交互”或“纯静态展示”两种标签

                      （2）、有交互的组件会用图表交互率这个指标。统计所有交互事件的行为的pv、uv情况，支持每个分类行为的查看

指标3：答案停留时长（适用于纯静态展示的组件）：

            指标意义：用户在当前答案的停留时间过短，开启下一个问句或直接跳出机器人，意味着用户未对图标信息产生兴趣，未能参与到图表分析、理解的过程中

            指标计算逻辑：

　　　　　　（1）、针对当前业务，以渲染出结果页答案为时间t1；

　　　　　　（2）、以渲染下一个结果页答案或退出语音助手（点击返回按钮 / 点击物理按键 ）为时间t2；

　　　　　　（3）、如果时间段t2-t1小于1s（意味着用户直接忽略了当前业务答案）(1s这个标准还需要再考虑一下)