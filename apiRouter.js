const express = require('express');
const { categories, userList, roleList, treeData } = require('./database');

const apiRouter = express.Router();

function verifyToken(req, res, next) {
  const token = req.headers['authorization']; // 假设 token 是在请求头的 'Authorization' 字段中传递的
  if (!token) {
    return res.status(401).send({
      code: 401,
      message: 'Token 未提供，获取用户信息失败',
      data: null
    });
  }

  // 简单验证 token
  if (token !== 'Bearer junjie Token') {
    return res.status(403).send({
      code: 403,
      message: 'Token 无效，获取用户信息失败',
      data: null
    });
  }
  // Token 验证通过，继续执行后续逻辑
  next();
}

apiRouter.post('/user/login', (req, res) => {
  const { username, password } = req.body;
  const user = userList.find(n => n.username == username);
  if (user && user.password == password) {
    res.send({
      code: 200,
      message: '登录成功',
      data: 'junjie Token'
    })
  } else {
    res.send({
      code: 401,
      message: '用户名或者密码不正确',
      data: null
    })
  }
})

apiRouter.get('/user/info', verifyToken, (req, res) => {
  const { name } = req.query;
  if(!name) {
    res.send({
      code: 400,
      message: '获取用户信息失败',
      data: null
    });
  }
  const getRoutes = (name) => {
    // 根据name拿到roleName
    const { roleName } = userList.find(n => n.username == name);
    const roleArr = roleName.map(n => {
      return n.name;
    })
    // 根据所有的角色拿到permissionId
    let idArr = [];
    roleList.forEach(n => {
      if(roleArr.includes(n.name)) {
        idArr = idArr.concat(n.permissionId);
      }
    })
    idArr = [...new Set(idArr)];
    return idArr;
  }
  const idArr = getRoutes(name);
  const routes = [];
  const buttons = [];
  const getAuthData = (tree, idArr, routes, buttons) => {
    tree.forEach(n => {
      const { id, children, level, code } = n;
      if(idArr.includes(id) && level != 1) {
        if(level == 4) buttons.push(code);
        else routes.push(code);
      }
      if(children.length) {
        getAuthData(children, idArr, routes, buttons);
      }
    })
  }
  getAuthData(treeData, idArr, routes, buttons);
  const { id, name: cnName, username } = userList.find(n => n.username == name);
  const userInfo = {
    id,
    cnName,
    username,
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    routes,
    buttons
  }
  // 返回成功的响应
  res.send({
    code: 200,
    message: '获取用户信息成功',
    data: userInfo
  });
});

apiRouter.post('/user/logout', (req, res) => {
  res.send({
    code: 200,
    message: '退出登录成功，token 已清除',
    data: null
  });
});

// 商品管理
const trademarkArr = [
  {
    tmName: 'apple',
    id: '111111111111111111111'
  },
  {
    tmName: '小米',
    id: '22222222222222222222'
  },
  {
    tmName: '华为',
    id: '33333333333333333333'
  },
  {
    tmName: '红米',
    id: '44444444444444444444'
  },
  {
    tmName: '魅族',
    id: '5555555555555555555'
  },
  {
    tmName: 'oppo',
    id: '6666666666666666666'
  },
  {
    tmName: 'vivo',
    id: '7777777777777777777'
  },
];

apiRouter.post('/user/addtrade', (req, res) => {
  const { name, id } = req.body;
  trademarkArr.push({
    tmName: name,
    id
  });
  res.send({
    code: 200,
    message: '添加成功',
    data: null
  })
})

apiRouter.post('/user/updatetrade', (req, res) => {
  const { name, id } = req.body;
  let good = trademarkArr.find(n => n.id == id);
  if (!good) {
    res.send({
      code: 400,
      message: '未找到对应商品！',
      data: null
    })
  } else {
    good.tmName = name;
    res.send({
      code: 200,
      message: '修改成功',
      data: null
    })
  }
})


apiRouter.post('/user/gettrades', (req, res) => {
  const { pageNo, pageLimit } = req.body;
  const data = {
    records: trademarkArr.slice((pageNo - 1) * pageLimit, pageNo * pageLimit),
    total: trademarkArr.length
  }
  res.send({
    code: 200,
    message: 'success',
    data: data
  })
})

apiRouter.post('/user/delete/trade', (req, res) => {
  const { name, id } = req.body;
  let index = trademarkArr.findIndex(n => n.id == id);
  trademarkArr.splice(index, 1);
  res.send({
    code: 200,
    message: '删除成功！',
    data: null
  })
})

apiRouter.get('/user/category/one', verifyToken, (req, res) => {
  const data = categories.map(item => {
    return {
      id: item.id,
      name: item.name
    }
  })
  res.send({
    code: 200,
    message: '获取一级标签成功',
    data
  });
});

apiRouter.get('/user/category/two', verifyToken, (req, res) => {
  const { id } = req.query;
  const { children } = categories.find(n => n.id == id);
  const data = children.map(item => {
    return {
      id: item.id,
      name: item.name
    }
  })
  res.send({
    code: 200,
    message: '获取二级标签成功',
    data
  });
});

apiRouter.get('/user/category/three', verifyToken, (req, res) => {
  const { id } = req.query;
  let findRes;
  for(let item of categories) {
    findRes = item.children.find(n => n.id == id);
    if(findRes) break;
  }
  const data = findRes.children.map(item => {
    return {
      id: item.id,
      name: item.name
    }
  })
  res.send({
    code: 200,
    message: '获取二级标签成功',
    data
  });
});

apiRouter.post('/manage/user/list', (req, res) => {
  const { pageNo, pageSize, keyword } = req.body;
  const filterList = userList.filter(n => {
    return n.username.includes(keyword);
  })
  const records = filterList.slice((pageNo - 1)*pageSize, pageNo*pageSize);
  const data = {
    records,
    total: filterList.length
  }
  res.send({
    code: 200,
    message: 'success',
    data
  })
})

apiRouter.post('/manage/user/updateRole', (req, res) => {
  const { userId, userRole } = req.body;
  const user = userList.find(n => n.id == userId);
  const arr = [];
  userRole.forEach(n => {
    let role = roleList.find(m => m.name == n);
    arr.push(role);
  })
  user.roleName = JSON.parse(JSON.stringify(arr));
  res.send({
    code: 200,
    message: 'success',
    data: null
  })
})

apiRouter.post('/manage/user/addUser', (req, res) => {
  const { id, username, name, password } = req.body;
  if(id) {
    const user = userList.find(n => n.id == id);
    user.name = name;
    user.password = password;
    user.username = username;
    user.updateTime = new Date().toLocaleString();
  } else {
    let len = userList.length;
    userList.unshift({
      username,
      password,
      id: len,
      name: name,
      roleName: [],
      createTime: new Date().toLocaleString(),
      updateTime: new Date().toLocaleString()
    })
  }
  res.send({
    code: 200,
    message: 'success',
    data: null
  })
})

apiRouter.get('/namege/user/allRoles', verifyToken, (req, res) => {
  res.send({
    code: 200,
    message: 'success',
    data: roleList
  });
})

apiRouter.post('/manage/role/list', (req, res) => {
  const { pageNo, pageSize, keyword } = req.body;
  const filterList = roleList.filter(n => {
    return n.cnName.includes(keyword);
  })
  const records = filterList.slice((pageNo - 1)*pageSize, pageNo*pageSize);
  const data = {
    records,
    total: filterList.length
  }
  res.send({
    code: 200,
    message: 'success',
    data
  })
})

apiRouter.post('/manage/permission/doAssign', (req, res) => {
  const { roleId, permissionId } = req.body;
  const role = roleList.find(n => n.id == roleId);
  role.permissionId = permissionId;
  res.send({
    code: 200,
    message: 'success',
    data: null
  })
})

apiRouter.get('/manage/menu/list', verifyToken, (req, res) => {
  const { id } = req.query;
  const { permissionId } = roleList.find(n => n.id == id);
  // 根据permissionId输出tree结构，选中的select为true
  handleTree(treeData, permissionId);
  res.send({
    code: 200,
    message: 'success',
    data: treeData
  })
})

const handleTree = (tree, permissionId) => {
  tree.forEach(n => {
    if(permissionId.includes(n.id)) {
      n.select = true;
    } else {
      n.select = false;
    }
    if(n.children.length) {
      handleTree(n.children, permissionId);
    }
  })
}

apiRouter.get('/manage/acl/permission', verifyToken, (req, res) => {
  res.send({
    code: 200,
    message: 'success',
    data: treeData
  })
})

module.exports = apiRouter;