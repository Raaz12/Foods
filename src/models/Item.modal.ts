export interface IItem {
  id?: string;
  tag?: string;
  imagePath?: string;
  name?: string;
  description?: string;
  price?: number;
  restaurantId?: string;
  type?: string;
  onPress?: Function;
  navigation?: any;
}
