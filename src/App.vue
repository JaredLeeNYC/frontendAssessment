<template>
  <div id="app">
    <Header>
      <input
        class="searchInput"
        type="text"
        v-model="keyword"
        placeholder="Filter by worker name..."
      >
      <div class="sortButton">
        <toggle-button
          id="changed-font"
          v-model="sortByEarliest"
          :width="120"
          :height="40"
          :labels="{checked: 'Earliest first', unchecked: 'Latest first'}"
        />
      </div>
    </Header>
    <div class="list">
      <Loading v-if="loadingOrders"/>
      <div v-if="errorMsg">{{errorMsg}}</div>
      <OrderCard v-else v-for="order in filtedOrders" :key="order.id" v-bind="order"></OrderCard>
    </div>
  </div>
</template>
<script>
import OrderCard from "./components/OrderCard";
import fecthFullDetailOrders from "./api";
import Loading from "./components/Loading";
export default {
  name: "APP",
  data() {
    return {
      orders: [],
      keyword: "",
      sortByEarliest: true,
      loadingOrders: false,
      errorMsg: ""
    };
  },
  computed: {
    filtedOrders() {
      return this.orders
        .filter(order => order.worker.name.includes(this.keyword))
        .sort((p, n) =>
          this.sortByEarliest
            ? p.deadline - n.deadline
            : n.deadline - p.deadline
        );
    }
  },
  async mounted() {
    this.loadingOrders = true;
    try {
      this.orders = await fecthFullDetailOrders();
    } catch (e) {
      this.errorMsg = "Fetch Error";
    } finally {
      this.loadingOrders = false;
    }
  },
  components: {
    OrderCard,
    Loading
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
header {
  display: flex;
  width: 70vw;
  margin: 20px auto 40px;
  align-items: center;
}
.searchInput {
  flex: 1;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
}
.sortButton {
  place-content: center;
}
.list {
  display: flex;
  margin: 20px auto;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
