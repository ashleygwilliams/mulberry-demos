dojo.provide('client.components.PreparationList');

mulberry.component('PreparationList', {
  componentTemplate : dojo.cache('client.components', 'PreparationList/PreparationList.haml'),

  prep : function() {
    this.preparations = this.node.preparation;
  }
});
