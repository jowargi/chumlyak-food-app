import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api/dishes/api";
import DishListItem from "./DishListItem";

export default function DishListItemContainer({ dishId }) {
  const { restaurantId } = useParams();

  const { data: dish } = useGetDishesByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((dish) => dish.id === dishId),
    }),
  });

  const { name: dishName, ingredients } = dish || {};

  return dishName && ingredients?.length ? (
    <DishListItem dishName={dishName} ingredients={ingredients} />
  ) : null;
}
