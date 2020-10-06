Template.Recipes.onCreated(function () {
	const self = this
	self.autorun(function () {
		self.subscribe('recipes')
	})
})

Template.Recipes.helpers({
	recipes: () => {
		return Recipes.find({})
	},
})
