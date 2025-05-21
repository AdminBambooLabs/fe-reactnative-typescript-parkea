import { FlatListProps } from 'react-native';

export interface CarouselProps<T> extends FlatListProps<T> {
  showDots?: boolean;
}
