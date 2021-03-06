let code = {};

code.base = `
<template>
 <c-layout class="layout-single">
  <c-header>Header</c-header>
  <c-main>Content</c-main>
  <c-footer>Footer</c-footer>
 </c-layout>
 <c-layout class="layout-single">
  <c-header>Header</c-header>
  <c-layout>
   <c-sider style="flex:0 0 200px">Sider</c-sider>
   <c-main>Content</c-main>
  </c-layout>
  <c-footer>Footer</c-footer>
 </c-layout>
 <c-layout class="layout-single">
  <c-header>Header</c-header>
  <c-layout>
   <c-main>Content</c-main>
   <c-sider style="flex:0 0 200px">Sider</c-sider>
  </c-layout>
  <c-footer>Footer</c-footer>
 </c-layout>
 <c-layout class="layout-single">
  <c-sider style="flex:0 0 200px; line-height: 248px;">Sider</c-sider>
  <c-layout>
   <c-header>Header</c-header>
   <c-main>Content</c-main>
   <c-footer>Footer</c-footer>
 </c-layout>
 </c-layout>
</template>
<script>
 export default {

 }
</script>
`;

code.SZXBJ = `
<template>
 <c-layout class="layout">
  <c-header>
   <div class="layout-logo"></div>
   <div class="layout-nav">
    <c-menu mode="horizontal" theme="dark" active-name="1">
     <c-menu-item name="1"><c-icon name="search" />Item 1</c-menu-item>
     <c-menu-item name="2"><c-icon name="application" />Item 2</c-menu-item>
     <c-menu-item name="3"><c-icon name="database" />Item 3</c-menu-item>
     <c-menu-item name="4"><c-icon name="setting" />Item 4</c-menu-item>
    </c-menu>
   </div>
  </c-header>
  <c-main style="padding: 0 50px;">
   <c-breadcrumb style="margin: 20px 0;">
    <c-breadcrumb-item>Home</c-breadcrumb-item>
    <c-breadcrumb-item>Components</c-breadcrumb-item>
    <c-breadcrumb-item>Layout</c-breadcrumb-item>
   </c-breadcrumb>
   <c-card>
    <div style="min-height: 200px;">
     Content
    </div>
   </c-card>
  </c-main>
  <c-footer>© 2018 Code UI, Inc.</c-footer>
 </c-layout>
</template>
<script>
 export default {

 }
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  
}
.layout-logo {
  float: left;
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  position: relative;
  top: 16px;
  left: 20px;
}
.layout-nav {
  float: right;
}
</style>
`;

code.DBCBBJ = `
<template>
 <c-layout class="layout">
 <c-header>
  <div class="layout-logo"></div>
  <div class="layout-nav">
    <c-menu mode="horizontal" theme="dark" active-name="1">
      <c-menu-item name="1">
        <c-icon name="search" />
        Item 1
      </c-menu-item>
      <c-menu-item name="2">
        <c-icon name="application" />
        Item 2
      </c-menu-item>
      <c-menu-item name="3">
        <c-icon name="database" />
        Item 3
      </c-menu-item>
      <c-menu-item name="4">
        <c-icon name="setting" />
        Item 4
      </c-menu-item>
    </c-menu>
  </div>
</c-header>
 <c-layout>
  <c-sider style="width: 200px">
    <c-menu
      active-name="1-2"
      theme="light"
      width="auto"
      style="height: 100%"
      :open-names="['1']"
    >
      <c-menu-sub name="1">
        <template slot="title">
          <c-icon name="remind" />
          内容管理
        </template>
        <c-menu-item name="1-1">Option 1</c-menu-item>
        <c-menu-item name="1-2">Option 2</c-menu-item>
        <c-menu-item name="1-3">Option 3</c-menu-item>
      </c-menu-sub>
      <c-menu-sub name="2">
        <template slot="title">
          <c-icon name="remind" />
          内容管理2
        </template>
        <c-menu-item name="2-1">Option 2-1</c-menu-item>
        <c-menu-item name="2-2">Option 2-2</c-menu-item>
        <c-menu-item name="2-3">Option 2-3</c-menu-item>
      </c-menu-sub>
    </c-menu>
  </c-sider>
  <c-main style="padding: 0 25px 25px;">
    <c-breadcrumb style="margin: 20px 0;">
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>Components</c-breadcrumb-item>
      <c-breadcrumb-item>Layout</c-breadcrumb-item>
    </c-breadcrumb>
    <c-card> <div style="min-height: 300px;">Content</div> </c-card>
  </c-main>
</c-layout>
 </c-layout>
</template>
<script>
 export default {

 }
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  float: left;
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  position: relative;
  top: 16px;
  left: 20px;
}
.layout-nav {
  float: right;
}
</style>
`;

code.CBLKG = `
<template>
 <c-layout class="layout">
  <c-sider collapsible :collapsed-width="70" v-model="isCollapsed">
    <c-menu active-name="1" width="auto" theme="dark" :collapsed-menu="isCollapsed">
      <c-menu-item name="1">
        <c-icon name="search" />
        <span>Options 1</span>
      </c-menu-item>
      <c-menu-item name="2">
        <c-icon name="setting" />
        <span>Options 2</span>
      </c-menu-item>
      <c-menu-item name="3">
        <c-icon name="charts" />
        <span>Options 3</span>
      </c-menu-item>
    </c-menu>
  </c-sider>
  <c-layout>
    <c-header style="background: #fff;"></c-header>
    <c-main style="padding: 0 25px 25px;">
      <c-breadcrumb style="margin: 20px 0;">
        <c-breadcrumb-item>Home</c-breadcrumb-item>
        <c-breadcrumb-item>Components</c-breadcrumb-item>
        <c-breadcrumb-item>Layout</c-breadcrumb-item>
      </c-breadcrumb>
      <c-card> 
       <div style="min-height: 300px;">Content</div>
      </c-card>
    </c-main>
  </c-layout>
</c-layout>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false
    };
  },
}
</script>

<style scoped lang="css">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
`;

code.CBBJZDY = `
<template>
  <c-layout class="layout">
    <c-sider
      hide-trigger
      collapsible
      :collapsed-width="70"
      v-model="isCollapsed"
      ref="csider"
    >
      <c-menu
        active-name="1"
        width="auto"
        theme="dark"
        :collapsed-menu="isCollapsed"
      >
        <c-menu-item name="1">
          <c-icon name="search" />
          <span>Options 1</span>
        </c-menu-item>
        <c-menu-item name="2">
          <c-icon name="setting" />
          <span>Options 2</span>
        </c-menu-item>
        <c-menu-item name="3">
          <c-icon name="charts" />
          <span>Options 3</span>
        </c-menu-item>
      </c-menu>
    </c-sider>
    <c-layout>
      <c-header style="background: #fff;" gutter="30">
        <c-icon name="menu" :rotate="IconRotate" @click="toggierSider"></c-icon>
      </c-header>
      <c-main style="padding: 0 25px 25px;">
        <c-breadcrumb style="margin: 20px 0;">
          <c-breadcrumb-item>Home</c-breadcrumb-item>
          <c-breadcrumb-item>Components</c-breadcrumb-item>
          <c-breadcrumb-item>Layout</c-breadcrumb-item>
        </c-breadcrumb>
        <c-card> <div style="min-height: 300px;">Content</div> </c-card>
      </c-main>
    </c-layout>
  </c-layout>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false
    };
  },
  computed: {
    IconRotate() {
      return this.isCollapsed ? 90 : "";
    }
  },
  methods: {
    toggierSider () {
      this.$refs.csider.toggleCollapse()
    }
  },
}
</script>
`;

code.siderDoc = [
  {
    type: "value",
    desc: "侧边栏是否收起，可使用 v-model 双向绑定数据",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "width",
    desc: "侧边栏宽度",
    typeof: "Number | String",
    default: "200"
  },
  {
    type: "collapsible",
    desc: `侧边栏是否可收起, 设置 <code>false</code> 后, 默认触发器会隐藏`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "collapsible-width",
    desc: `侧边栏收缩后的宽度`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "hide-trigger",
    desc: `隐藏默认触发器`,
    typeof: "Boolean",
    default: "false"
  }
];

code.siderEventsDoc = [
  {
    type: "on-collapsible",
    desc: `展开-收起时的回调`,
    typeof: "Boolean",
    default: "true / false"
  }
];

code.hfDoc = [
  {
    type: "gutter",
    desc: `可设置<code>CHeader</code>、<code>CFooter</code>的左右边距, 计算为传入值 / 2`,
    typeof: "Number",
    default: 100
  }
];

export default code;
