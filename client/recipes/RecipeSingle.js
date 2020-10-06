Template.RecipeSingle.onCreated(function () {
	const self = this
	self.autorun(function () {
		self.subscribe('recipes')
	})
})

Template.RecipeSingle.helpers({
	recipe: () => {
		const id = FlowRouter.getParam('id')
		return Recipes.findOne({ _id: id })
	},
})
