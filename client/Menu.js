Template.Menu.onCreated(function () {
	const self = this
	self.autorun(function () {
		self.subscribe('recipes')
	})
})

Template.Menu.helpers({
	recipes: () => {
		return Recipes.find({ inMenu: true })
	},
})
