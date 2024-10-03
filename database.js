const categories = [
  {
    id: 1,
    name: '手机',
    children: [
      {
        id: 11,
        name: '苹果手机',
        children: [
          { id: 111, name: 'iPhone 13' },
          { id: 112, name: 'iPhone 12' }
        ]
      },
      {
        id: 12,
        name: '安卓手机',
        children: [
          { id: 121, name: '小米11' },
          { id: 122, name: '华为Mate 40' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '数码',
    children: [
      {
        id: 21,
        name: '相机',
        children: [
          { id: 211, name: '佳能单反' },
          { id: 212, name: '索尼微单' }
        ]
      },
      {
        id: 22,
        name: '耳机',
        children: [
          { id: 221, name: 'AirPods Pro' },
          { id: 222, name: '索尼降噪耳机' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '家电',
    children: [
      {
        id: 31,
        name: '冰箱',
        children: [
          { id: 311, name: '海尔三门冰箱' },
          { id: 312, name: '西门子对开门冰箱' }
        ]
      },
      {
        id: 32,
        name: '洗衣机',
        children: [
          { id: 321, name: '滚筒洗衣机' },
          { id: 322, name: '波轮洗衣机' }
        ]
      }
    ]
  }
]

const userList = [
  {
    username: 'junjie',
    password: 'junjie123456',
    id: 0,
    name: '吴俊杰',
    roleName: [{
      cnName: '超级管理员',
      name: 'SuperAdmin'
    }],
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04'
  },
  {
    username: 'jack_lee',
    password: 'Lee2024!',
    id: 1,
    name: '李杰克',
    roleName: [{
      cnName: '后端',
      name: 'Backend'
    }, {
      cnName: '销售',
      name: 'Sales'
    }],
    createTime: '2024/10/2 14:00:01',
    updateTime: '2024/10/2 14:00:01'
  },
  {
    username: 'rose_zhang',
    password: 'ZhangRose@24',
    id: 2,
    name: '张玫瑰',
    roleName: [{
      cnName: '后端',
      name: 'Backend'
    }, {
      cnName: '销售',
      name: 'Sales'
    }],
    createTime: '2024/10/2 14:00:02',
    updateTime: '2024/10/2 14:00:02'
  },
  {
    username: 'tom_wang',
    password: 'WangTom#2024',
    id: 3,
    name: '王汤姆',
    roleName: [{
      cnName: '销售',
      name: 'Sales'
    },],
    createTime: '2024/10/2 14:00:03',
    updateTime: '2024/10/2 14:00:03'
  },
  {
    username: 'lucy_liu',
    password: 'LiuLucy$2024',
    id: 4,
    name: '刘露西',
    roleName: [{
      cnName: '销售',
      name: 'Sales'
    },],
    createTime: '2024/10/2 14:00:04',
    updateTime: '2024/10/2 14:00:04'
  },
  {
    username: 'jason_chen',
    password: 'ChenJason^2024',
    id: 5,
    name: '陈杰森',
    roleName: [{
      cnName: '财务',
      name: 'Finance'
    }],
    createTime: '2024/10/2 14:00:05',
    updateTime: '2024/10/2 14:00:05'
  },
  {
    username: 'lily_zhou',
    password: 'ZhouLily&2024',
    id: 6,
    name: '周莉莉',
    roleName: [{
      cnName: '财务',
      name: 'Finance'
    }],
    createTime: '2024/10/2 14:00:06',
    updateTime: '2024/10/2 14:00:06'
  },
  {
    username: 'mike_sun',
    password: 'SunMike*2024',
    id: 7,
    name: '孙迈克',
    roleName: [{
      cnName: '销售',
      name: 'Sales'
    },],
    createTime: '2024/10/2 14:00:07',
    updateTime: '2024/10/2 14:00:07'
  },
  {
    username: 'anna_wu',
    password: 'WuAnna@2024!',
    id: 8,
    name: '吴安娜',
    roleName: [{
      cnName: '后端',
      name: 'Backend'
    }],
    createTime: '2024/10/2 14:00:08',
    updateTime: '2024/10/2 14:00:08'
  },
  {
    username: 'david_zheng',
    password: 'ZhengDavid#2024',
    id: 9,
    name: '郑大卫',
    roleName: [{
      cnName: '前端',
      name: 'Frontend'
    }],
    createTime: '2024/10/2 14:00:09',
    updateTime: '2024/10/2 14:00:09'
  },
  {
    username: 'sophia_li',
    password: 'LiSophia$2024',
    id: 10,
    name: '李索菲娅',
    roleName: [{
      cnName: '财务',
      name: 'Finance'
    }],
    createTime: '2024/10/2 14:00:10',
    updateTime: '2024/10/2 14:00:10'
  },
  {
    username: 'kevin_ren',
    password: 'RenKevin^2024',
    id: 11,
    name: '任凯文',
    roleName: [{
      cnName: '前端',
      name: 'Frontend'
    }],
    createTime: '2024/10/2 14:00:11',
    updateTime: '2024/10/2 14:00:11'
  },
  {
    username: 'emma_ma',
    password: 'MaEmma&2024',
    id: 12,
    name: '马艾玛',
    roleName: [{
      cnName: '后端',
      name: 'Backend'
    }],
    createTime: '2024/10/2 14:00:12',
    updateTime: '2024/10/2 14:00:12'
  },
  {
    username: 'daniel_xie',
    password: 'XieDaniel*2024',
    id: 13,
    name: '谢丹尼尔',
    roleName: [{
      cnName: '前端',
      name: 'Frontend'
    }],
    createTime: '2024/10/2 14:00:13',
    updateTime: '2024/10/2 14:00:13'
  },
  {
    username: 'laura_xu',
    password: 'XuLaura@2024!',
    id: 14,
    name: '徐劳拉',
    roleName: [{
      cnName: '前端',
      name: 'Frontend'
    }],
    createTime: '2024/10/2 14:00:14',
    updateTime: '2024/10/2 14:00:14'
  },
  {
    username: 'lucas_guo',
    password: 'GuoLucas#2024',
    id: 15,
    name: '郭卢卡斯',
    roleName: [{
      cnName: '前台',
      name: 'Receptionist'
    },],
    createTime: '2024/10/2 14:00:15',
    updateTime: '2024/10/2 14:00:15'
  },
  {
    username: 'olivia_qian',
    password: 'QianOlivia$2024',
    id: 16,
    name: '钱奥利维亚',
    roleName: [{
      cnName: '财务',
      name: 'Finance'
    }],
    createTime: '2024/10/2 14:00:16',
    updateTime: '2024/10/2 14:00:16'
  },
  {
    username: 'james_gao',
    password: 'GaoJames^2024',
    id: 17,
    name: '高詹姆斯',
    roleName: [{
      cnName: '前台',
      name: 'Receptionist'
    },],
    createTime: '2024/10/2 14:00:17',
    updateTime: '2024/10/2 14:00:17'
  },
  {
    username: 'sara_lin',
    password: 'LinSara&2024',
    id: 18,
    name: '林莎拉',
    roleName: [{
      cnName: '前台',
      name: 'Receptionist'
    },],
    createTime: '2024/10/2 14:00:18',
    updateTime: '2024/10/2 14:00:18'
  }
]

const roleList = [
  {
    id: 1,
    cnName: '销售',
    name: 'Sales',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 2,
    cnName: '运维',
    name: 'Operations',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 3,
    cnName: '财务',
    name: 'Finance',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 4,
    cnName: '测试',
    name: 'Testing',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 5,
    cnName: '后端',
    name: 'Backend',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 6,
    cnName: '前端',
    name: 'Frontend',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 7,
    cnName: '产品',
    name: 'Product',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 8,
    cnName: '前台',
    name: 'Receptionist',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: []
  },
  {
    id: 9,
    cnName: '超级管理员',
    name: 'SuperAdmin',
    createTime: '2024/10/2 13:43:04',
    updateTime: '2024/10/2 13:43:04',
    permissionId: [7, 8, 9, 10, 11, 14, 22, 23, 24, 25, 26, 27]
  }
]

const treeData = [
  {
    "id": 1,
    "createTime": "2019-11-15 17:13:06",
    "updateTime": "2020-09-25 13:47:54",
    "pid": 0,
    "name": "全部数据",
    "code": null,
    "toCode": null,
    "type": 1,
    "status": null,
    "level": 1,
    "children": [
      {
        "id": 7,
        "createTime": "2020-11-30 16:40:08",
        "updateTime": "2021-12-04 19:39:41",
        "pid": 1,
        "name": "权限管理",
        "code": "Acl",
        "toCode": "",
        "type": 1,
        "status": null,
        "level": 2,
        "children": [
          {
            "id": 8,
            "createTime": "2020-11-30 16:40:38",
            "updateTime": "2021-12-04 19:40:01",
            "pid": 7,
            "name": "用户管理",
            "code": "User",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 11,
                "createTime": "2020-11-30 16:43:16",
                "updateTime": "2021-12-04 19:42:37",
                "pid": 8,
                "name": "添加用户",
                "code": "btn.User.add",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 12,
                "createTime": "2020-11-30 16:45:00",
                "updateTime": "2021-12-04 19:42:39",
                "pid": 8,
                "name": "删除用户",
                "code": "btn.User.remove",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 13,
                "createTime": "2020-11-30 16:45:32",
                "updateTime": "2021-12-04 19:42:41",
                "pid": 8,
                "name": "修改用户",
                "code": "btn.User.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 14,
                "createTime": "2020-11-30 16:46:08",
                "updateTime": "2021-12-04 19:42:43",
                "pid": 8,
                "name": "分配角色",
                "code": "btn.User.assgin",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 14765,
                "createTime": "2024-09-17 16:06:00",
                "updateTime": "2024-09-17 16:06:00",
                "pid": 8,
                "name": "用户升级",
                "code": "btn.User.Upda",
                "toCode": null,
                "type": 0,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 9,
            "createTime": "2020-11-30 16:40:55",
            "updateTime": "2021-12-04 19:40:02",
            "pid": 7,
            "name": "角色管理",
            "code": "Role",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 15,
                "createTime": "2020-11-30 16:50:13",
                "updateTime": "2021-12-04 19:42:45",
                "pid": 9,
                "name": "分配权限",
                "code": "btn.Role.assgin",
                "toCode": "RoleAuth",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 16,
                "createTime": "2020-11-30 16:50:56",
                "updateTime": "2021-12-04 19:42:48",
                "pid": 9,
                "name": "添加角色",
                "code": "btn.Role.add",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 17,
                "createTime": "2020-11-30 16:51:22",
                "updateTime": "2021-12-04 19:42:50",
                "pid": 9,
                "name": "修改角色",
                "code": "btn.Role.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 18,
                "createTime": "2020-11-30 16:52:34",
                "updateTime": "2021-12-04 19:42:53",
                "pid": 9,
                "name": "删除角色",
                "code": "btn.Role.remove",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 14137,
                "createTime": "2024-08-14 16:21:50",
                "updateTime": "2024-08-14 16:21:50",
                "pid": 9,
                "name": "查看角色",
                "code": "check",
                "toCode": null,
                "type": 0,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 10,
            "createTime": "2020-11-30 16:41:21",
            "updateTime": "2021-12-04 19:40:06",
            "pid": 7,
            "name": "菜单管理",
            "code": "Permission",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 19,
                "createTime": "2020-11-30 16:56:23",
                "updateTime": "2021-12-04 19:42:55",
                "pid": 10,
                "name": "添加",
                "code": "btn.Permission.add",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 20,
                "createTime": "2020-11-30 16:59:02",
                "updateTime": "2021-12-04 19:42:58",
                "pid": 10,
                "name": "修改",
                "code": "btn.Permission.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 21,
                "createTime": "2020-11-30 16:59:27",
                "updateTime": "2021-12-04 19:43:00",
                "pid": 10,
                "name": "删除",
                "code": "btn.Permission.remove",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          }
        ],
        "select": false
      },
      {
        "id": 22,
        "createTime": "2020-12-01 08:15:00",
        "updateTime": "2021-12-04 19:43:28",
        "pid": 1,
        "name": "商品管理",
        "code": "Product",
        "toCode": "",
        "type": 1,
        "status": null,
        "level": 2,
        "children": [
          {
            "id": 23,
            "createTime": "2020-12-01 08:15:16",
            "updateTime": "2021-12-04 19:43:38",
            "pid": 22,
            "name": "分类管理",
            "code": "Category",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 44,
                "createTime": "2020-12-01 08:58:39",
                "updateTime": "2021-12-04 19:47:48",
                "pid": 23,
                "name": "添加子分类",
                "code": "btn.Category.add",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 45,
                "createTime": "2020-12-01 08:59:00",
                "updateTime": "2021-12-04 19:47:49",
                "pid": 23,
                "name": "修改分类",
                "code": "btn.Category.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 46,
                "createTime": "2020-12-01 08:59:25",
                "updateTime": "2021-12-04 19:47:52",
                "pid": 23,
                "name": "删除分类",
                "code": "btn.Category.remove",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 24,
            "createTime": "2020-12-01 08:15:34",
            "updateTime": "2021-12-04 19:44:28",
            "pid": 22,
            "name": "平台属性管理",
            "code": "Attr",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 50,
                "createTime": "2020-12-01 09:16:18",
                "updateTime": "2021-12-04 19:48:06",
                "pid": 24,
                "name": "添加属性",
                "code": "btn.Attr.add",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 51,
                "createTime": "2020-12-01 09:18:52",
                "updateTime": "2021-12-04 19:48:08",
                "pid": 24,
                "name": "更新属性",
                "code": "btn.Attr.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 52,
                "createTime": "2020-12-01 09:19:09",
                "updateTime": "2021-12-04 19:48:10",
                "pid": 24,
                "name": "删除属性",
                "code": "btn.Attr.remove",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 25,
            "createTime": "2020-12-01 08:15:48",
            "updateTime": "2021-12-04 19:44:40",
            "pid": 22,
            "name": "品牌管理",
            "code": "Trademark",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 47,
                "createTime": "2020-12-01 09:05:22",
                "updateTime": "2021-12-04 19:47:54",
                "pid": 25,
                "name": "添加品牌",
                "code": "btn.Trademark.add",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 48,
                "createTime": "2020-12-01 09:06:07",
                "updateTime": "2021-12-04 19:47:56",
                "pid": 25,
                "name": "修改品牌",
                "code": "btn.Trademark.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 49,
                "createTime": "2020-12-01 09:06:28",
                "updateTime": "2021-12-04 19:48:03",
                "pid": 25,
                "name": "删除品牌",
                "code": "btn.Trademark.remove",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 13146,
                "createTime": "2024-06-26 15:38:20",
                "updateTime": "2024-06-26 15:38:20",
                "pid": 25,
                "name": "查询品牌",
                "code": "btn.Trademark.search",
                "toCode": null,
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 26,
            "createTime": "2020-12-01 08:16:14",
            "updateTime": "2021-12-04 19:44:52",
            "pid": 22,
            "name": "SPU管理",
            "code": "Spu",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 53,
                "createTime": "2020-12-01 09:22:40",
                "updateTime": "2021-12-04 19:48:13",
                "pid": 26,
                "name": "添加SPU",
                "code": "btn.Spu.add",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 54,
                "createTime": "2020-12-01 09:24:30",
                "updateTime": "2021-12-04 19:48:15",
                "pid": 26,
                "name": "添加SKU",
                "code": "btn.Spu.addsku",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 55,
                "createTime": "2020-12-01 09:24:54",
                "updateTime": "2021-12-04 19:48:17",
                "pid": 26,
                "name": "更新Spu",
                "code": "btn.Spu.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 56,
                "createTime": "2020-12-01 09:25:27",
                "updateTime": "2021-12-04 19:48:19",
                "pid": 26,
                "name": "查看SKU列表",
                "code": "btn.Spu.skus",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 57,
                "createTime": "2020-12-01 09:25:52",
                "updateTime": "2021-12-04 19:48:21",
                "pid": 26,
                "name": "删除Spu",
                "code": "btn.Spu.delete",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 14987,
                "createTime": "2024-09-28 21:27:21",
                "updateTime": "2024-09-28 21:27:21",
                "pid": 26,
                "name": "开发经费",
                "code": "规划法",
                "toCode": null,
                "type": 0,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 27,
            "createTime": "2020-12-01 08:16:30",
            "updateTime": "2021-12-04 19:45:05",
            "pid": 22,
            "name": "Sku管理",
            "code": "Sku",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 58,
                "createTime": "2020-12-01 09:32:09",
                "updateTime": "2021-12-04 19:48:24",
                "pid": 27,
                "name": "Sku上下架",
                "code": "btn.Sku.updown",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 59,
                "createTime": "2020-12-01 09:33:42",
                "updateTime": "2021-12-04 19:48:27",
                "pid": 27,
                "name": "更新SKU",
                "code": "btn.Sku.update",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 60,
                "createTime": "2020-12-01 09:34:29",
                "updateTime": "2021-12-04 19:48:30",
                "pid": 27,
                "name": "Sku详情",
                "code": "btn.Sku.detail",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 61,
                "createTime": "2020-12-01 09:34:48",
                "updateTime": "2021-12-04 19:48:45",
                "pid": 27,
                "name": "删除Sku",
                "code": "btn.Sku.remove",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          }
        ],
        "select": false
      },
      {
        "id": 28,
        "createTime": "2020-12-01 08:18:07",
        "updateTime": "2021-12-04 19:45:25",
        "pid": 1,
        "name": "订单管理",
        "code": "Order",
        "toCode": "",
        "type": 1,
        "status": null,
        "level": 2,
        "children": [
          {
            "id": 29,
            "createTime": "2020-12-01 08:19:31",
            "updateTime": "2021-12-04 19:45:43",
            "pid": 28,
            "name": "订单列表",
            "code": "OrderList",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 41,
                "createTime": "2020-12-01 08:47:59",
                "updateTime": "2021-12-04 19:47:37",
                "pid": 29,
                "name": "查看订单详情",
                "code": "btn.OrderList.detail",
                "toCode": "OrderShow",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 42,
                "createTime": "2020-12-01 08:52:24",
                "updateTime": "2021-12-04 19:47:39",
                "pid": 29,
                "name": "退款",
                "code": "btn.OrderList.Refund",
                "toCode": "Refund",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 62,
            "createTime": "2020-12-02 11:34:23",
            "updateTime": "2021-12-04 19:48:48",
            "pid": 28,
            "name": "退款管理",
            "code": "Refund",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [],
            "select": false
          },
          {
            "id": 13986,
            "createTime": "2024-08-08 15:55:21",
            "updateTime": "2024-08-08 15:55:21",
            "pid": 28,
            "name": "设计师",
            "code": "designer",
            "toCode": null,
            "type": 0,
            "status": null,
            "level": 3,
            "children": [],
            "select": false
          }
        ],
        "select": false
      },
      {
        "id": 30,
        "createTime": "2020-12-01 08:21:25",
        "updateTime": "2021-12-04 19:46:05",
        "pid": 1,
        "name": "客户管理",
        "code": "ClientUser",
        "toCode": "",
        "type": 1,
        "status": null,
        "level": 2,
        "children": [
          {
            "id": 31,
            "createTime": "2020-12-01 08:22:08",
            "updateTime": "2021-12-04 19:46:20",
            "pid": 30,
            "name": "客户列表",
            "code": "UserList",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 43,
                "createTime": "2020-12-01 08:53:49",
                "updateTime": "2021-12-04 19:47:45",
                "pid": 31,
                "name": "锁定客户",
                "code": "btn.UserList.lock",
                "toCode": "",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          }
        ],
        "select": false
      },
      {
        "id": 32,
        "createTime": "2020-12-01 08:23:06",
        "updateTime": "2021-12-04 19:46:33",
        "pid": 1,
        "name": "优惠管理",
        "code": "Discount",
        "toCode": "",
        "type": 1,
        "status": null,
        "level": 2,
        "children": [
          {
            "id": 33,
            "createTime": "2020-12-01 08:23:20",
            "updateTime": "2021-12-04 19:46:50",
            "pid": 32,
            "name": "优惠活动管理",
            "code": "Activity",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 35,
                "createTime": "2020-12-01 08:38:57",
                "updateTime": "2021-12-04 19:47:22",
                "pid": 33,
                "name": "添加活动",
                "code": "btn.Activity.add",
                "toCode": "ActivityAdd",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 36,
                "createTime": "2020-12-01 08:39:50",
                "updateTime": "2021-12-04 19:47:24",
                "pid": 33,
                "name": "修改活动",
                "code": "btn.Activity.update",
                "toCode": "ActivityEdit",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 37,
                "createTime": "2020-12-01 08:40:20",
                "updateTime": "2021-12-04 19:47:26",
                "pid": 33,
                "name": "活动规则",
                "code": "btn.Activity.rule",
                "toCode": "ActivityRule",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 14988,
                "createTime": "2024-09-29 11:08:19",
                "updateTime": "2024-09-29 11:08:19",
                "pid": 33,
                "name": "fsf",
                "code": "sddsf",
                "toCode": null,
                "type": 0,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          },
          {
            "id": 34,
            "createTime": "2020-12-01 08:23:46",
            "updateTime": "2021-12-04 19:47:03",
            "pid": 32,
            "name": "优惠券管理",
            "code": "Coupon",
            "toCode": "",
            "type": 1,
            "status": null,
            "level": 3,
            "children": [
              {
                "id": 38,
                "createTime": "2020-12-01 08:40:58",
                "updateTime": "2021-12-04 19:47:28",
                "pid": 34,
                "name": "添加优惠券",
                "code": "btn.Coupon.add",
                "toCode": "CouponAdd",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 39,
                "createTime": "2020-12-01 08:41:34",
                "updateTime": "2021-12-04 19:47:30",
                "pid": 34,
                "name": "修改优惠券",
                "code": "btn.Coupon.update",
                "toCode": "CouponEdit",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              },
              {
                "id": 40,
                "createTime": "2020-12-01 08:42:24",
                "updateTime": "2021-12-04 19:47:33",
                "pid": 34,
                "name": "活动规则",
                "code": "btn.Coupon.rule",
                "toCode": "CouponRule",
                "type": 2,
                "status": null,
                "level": 4,
                "children": [],
                "select": false
              }
            ],
            "select": false
          }
        ],
        "select": false
      }
    ],
    "select": false
  }
]

module.exports = {
  categories,
  userList,
  roleList,
  treeData
}
