/**
 * scrollTop animation
 */
export const scrollTop = (el, from = 0, to, duration = 500, endCallBack) => {
  // requestAnimationFrame => 补丁
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
  }

  const diff = Math.abs(from - to); // 获取偏移量的绝对值
  const step = Math.ceil((diff / duration) * 50); //向上取整

  /* 核心滚动函数 */
  function scroll(start, end, step) {
    // 如果开始位置与结束位置一直，则直接返回
    if (start === end) {
      endCallBack && endCallBack();
      return;
    }
    let d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    // 持续调用 => 相当于setInterval
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
};

/* 查询父节点 单个 */
export const findComponentUpward = (
  VueContext,
  componentName,
  componentNames
) => {
  if (typeof componentName === "string") {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = VueContext.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
};

/* 查询父节点 多个 */
export const findComponentsUpward = (VueContext, componentName) => {
  let parents = [];
  const parent = VueContext.$parent;
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
};

/* 查询当前节点下同名的子节点 单个 */
export const findComponentDownward = (VueContext, componentName) => {
  const childrens = VueContext.$children;
  let children = null;

  if (childrens.length) {
    for (let child of childrens) {
      const name = child.$options.name;
      // 查询到同名的节点后返回
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }

  return children;
};

/* 查询当前节点下同名的子节点 多个 */
export const findComponentsDownward = (VueContext, componentName) => {
  return VueContext.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
};

/* 过滤检查props */
export const CheckProps = (value, check = []) => {
  if (check.length <= 0) {
    return false;
  }

  const checkTrue = check.findIndex(index => {
    return index === value;
  });

  if (checkTrue > -1) {
    return true;
  } else {
    return false;
  }
};

export const sharpMatcherRegx = /#([^#]+)$/; // #号拦截器