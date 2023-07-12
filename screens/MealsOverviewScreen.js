import { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation, route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === catId);
    navigation.setOptions({ title: category.title });
  }, [navigation, catId]);

  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return <MealsList meals={displayedMeals} />;
}

export default MealsOverviewScreen;
