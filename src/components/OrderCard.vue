<template>
  <div class="card">
    <h1 class="title">{{name}}</h1>
    <div class="description">{{description}}</div>
    <div class="worker">
      <div class="worker-avatar">
        <img :src="worker.image">
      </div>
      <div class="worker-detail">
        <h2>{{worker.name}}</h2>
        <p>{{worker.companyName}}</p>
        <p>{{worker.email}}</p>
      </div>
    </div>
    <p class="deadline">{{deadline_text}}</p>
  </div>
</template>
<script>
export default {
  name: "OrderCard",
  props: {
    deadline: Number,
    deadline_text: String,
    description: String,
    id: String,
    name: String,
    workerId: Number,
    worker: {
      name: String,
      imgae: String
    }
  }
};
</script>
<style scoped>
.card {
  min-width: 300px;
  width: 500px;
  margin: 0 20px 40px 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  place-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.title {
  text-align: center;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.description {
  padding: 0 20px;
  color: #888;
}

.flex-container {
  display: flex;
  width: 100%;
  border: 1px solid black;
}
.worker {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0;
}
.worker-avatar {
  margin-right: 20px;
}
.worker-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
  box-shadow: 0 0 2px #ccc;
}
.worker-detail {
  line-height: 1.5;
}
.worker-detail h2 {
  font-weight: normal;
  margin: 0;
}
.worker-detail p {
  margin: 0;
  color: #666;
}

.deadline {
  float: right;
  color: #999;
}
</style>
