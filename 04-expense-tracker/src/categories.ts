const categories = ["Clothing", "Food", "Home"] as const; // const categories doesn't allow you to assign a new array to categories but you can still edit the insides of the array. Writing 'as const' to this won't even allow you to edit the insides of the array which is a necessity for categories to be treated as enum in zod as we are using in Expenseforms

export default categories;