export const dictionary = {
  // 项目申请状态
  objectApplyStatus: [
    { label: '未审核', value: '0' },
    { label: '通过', value: '1' },
    { label: '不通过', value: '2' }
    // { label: '过期', value: '3' }
  ],
  // 纳税人类型
  taxpayerType: [
    { label: '小规模纳税人', value: '0' },
    { label: '一般纳税人', value: '1' }
  ],
  // 用户类型
  userType: [
    { label: '企业', value: 1 },
    { label: '个人', value: 2 },
    { label: '个体工商户', value: 3 }
  ],
  // 项目时间
  objectDays: [
    { key: '1', value: '1个月' },
    { key: '2', value: '1-6个月' },
    { key: '3', value: '6-12个月' },
    { key: '4', value: '1年以上' }
  ],
  // 项目时间
  objectDays2: [
    { key: '5', value: '工作日' },
    { key: '6', value: '周末' },
    { key: '7', value: '上午' },
    { key: '8', value: '下午' },
    { key: '9', value: '晚上' }
  ],
  // 项目状态
  objectStatus: [
    { label: '审核不通过', value: '-2' },
    { label: '待审核', value: '-1' },
    { label: '待签约', value: '0' },
    // { label: '待推荐', value: '1' },
    { label: '签约中', value: '2' },
    { label: '执行中', value: '3' },
    { label: '结算中', value: '4' },
    { label: '已结束', value: '5' }
  ],
  recommendStatus: [
    { label: '待推荐', value: '0' },
    { label: '已推荐', value: '1' },
    { label: '推荐失败', value: '2' }
  ],
  recruitStatus: [
    { label: '招募中', value: '0' },
    { label: '招募完成', value: '1' }
  ],
  // 项目类型
  objectType: [
    { label: '合作经营', value: '1' },
    { label: '新业态自由职业者', value: '2' },
    { label: '全职岗位', value: '3' },
    { label: '兼职岗位', value: '4' }
  ],
  // 项目一级类型
  objectTypeFirst: [
    { label: '招聘类型', value: 2 },
    { label: '招募类型', value: 1 }
  ],
  // 项目三级级类型
  objectTypeThree: [
    { label: '线上兼职', value: 1 },
    { label: '短期兼职', value: 2 },
    { label: '周末兼职', value: 3 },
    { label: '长期兼职', value: 4 }
  ],
  // 支付方式
  payCycle: [
    { label: '一次性结算', value: 1 },
    { label: '按日结算', value: 2 },
    { label: '按周结算', value: 6 },
    { label: '按月结算', value: 3 },
    { label: '按季结算', value: 4 }
  ],
  // 合同签约状态
  isSigned: [
    { label: '未签约', value: 0 },
    { label: '已签约', value: 1 },
    { label: '签约中', value: 2 }
  ],
  // 发放记录--发放--状态
  payStatus: [
    { label: '初始', value: '0' },
    { label: '待发放', value: '1' },
    { label: '已发放', value: '2' },
    { label: '开票中', value: '3' },
    { label: '开票失败', value: '4' },
    { label: '开票成功', value: '5' }
  ],
  payOrder: [
    { label: '初始', value: '-1' },
    { label: '待发放', value: '0' },
    { label: '已发放', value: '1' },
    { label: '发放失败', value: '2' }
  ],
  // 发票类型
  invoiceType: [
    { label: '增值税普通发票', value: '1' },
    { label: '增值税专用发票', value: '2' }
  ],
  // 开票方式
  openType: [
    { value: '1', label: '自开' },
    { value: '2', label: '代开' }
  ],
  // 开票状态
  invoiceStatus: [
    { label: '待审核', value: '0' },
    { label: '不通过', value: '1' },
    { label: '已通过', value: '2' },
    { label: '开票中', value: '3' },
    { label: '已寄出', value: '4' },
    { label: '已接收', value: '5' }
  ],
  // 公司合作方式
  cooperation: [
    { label: '平台入驻', value: '1' },
    { label: '合作公司', value: '2' }
  ],
  // 申请公司--公司状态
  companyStatus: [
    { label: '待审核', value: '0' },
    { label: '审核不通过', value: '1' },
    { label: '审核通过待支付', value: '2' },
    { label: '成立中', value: '3' },
    { label: '已成立', value: '4' },
    { label: '已入池', value: '5' },
    { label: '已注销', value: '6' }
  ],
  // 申请公司--节点
  companyNode: [
    { label: '审核信息', value: '1' },
    { label: '办理营业执照', value: '2' },
    { label: '银行开户', value: '3' },
    { label: '上传合同', value: '4' },
    { label: '审核合同', value: '5' },
    { label: '结束', value: '6' }
  ],
  // 充值状态
  recharge: [
    { label: '待审核', value: '0' },
    { label: '已到账', value: '1' },
    { label: '未到账', value: '2' }
  ],
  payTypeList: [
    { label: '平台充值', value: '0' },
    { label: '直接打款', value: '1' }
  ],
  isAuthentication: [
    { label: '未验证', value: '0' },
    { label: '验证成功', value: '1' },
    { label: '验证失败', value: '2' }
  ],
  selectInvoiceName: [
    '软件开发服务费',
    '软件维护服务费',
    '技术服务费',
    '技术咨询服务费',
    '信息技术服务费',
    '业务流程管理服务',
    '咨询服务费',
    '企业管理咨询费',
    '市场推广费',
    '市场营销费',
    '策划服务费',
    '医疗信息咨询费',
    '信息服务费',
    '经济服务费',
    '直播服务费',
    '物流辅助服务费',
    '配送服务费',
    '收派服务费',
    '设计服务费'
  ]
}
