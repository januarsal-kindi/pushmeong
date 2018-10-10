<template>
<div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img width="95%" style="margin:10px" src="https://semantic-ui.com/images/avatar2/large/elyse.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{post.title}}</strong> <small> radit</small>
                <br>
                 {{post.body}}
              </p>
            </div>
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-heart"></i></span>
                  <span class="likes">20</span>
                </a>
              </div>
          </div>
        </article>
      </div>
    </div> 
</template>
<script>
export default {
    props: {
        post: { type: Object, required: true }
    },
};
</script>

<style scoped>
.button {
  margin-bottom: 20px;
}

.tweet {
  margin: 0 auto;
  padding-bottom: 15px;
  margin-top: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.box {
  margin-bottom: 0;
  border-radius: 0;
}

.content small {
  color: #00d1b2;
}

img {
  border-radius: 30px;
}

.level-item {
  padding-left: 10px;
  color: #00d1b2;
}

input:focus {
  border-color: #00d1b2;
}
.likes {
  padding: 0 7.5px;
}

input {
  font-weight: bold;
}

.tweets-move {
  transition: transform 1s;
}
.media {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
}
.media-left {
    margin-right: 1rem;
}
.media-left, .media-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.image.is-64x64 {
    height: 64px;
    width: 64px;
}

.image {
    display: block;
    position: relative;
}
.media-content {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    overflow: auto;
    text-align: left;
}
</style>

