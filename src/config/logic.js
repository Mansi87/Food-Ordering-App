export const isPresentInFavorites = (favorites, restaurant) => {
  if (!favorites || !restaurant) return false;
  for (let item of favorites) {
    if (restaurant.id === item.id) {
      return true;
    }
  }
  return false;
};
