import Controller from "@ember/controller";

export default Controller.extend({
  tentacleVisible: false,

  actions: {
    showTentacle() {
      this.set('tentacleVisible', !this.tentacleVisible);
    }
  }
});