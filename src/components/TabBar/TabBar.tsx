import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Styled from "./styles";
import { View } from 'react-native';
import { BottomTabParamList } from 'App';
import { JSX } from 'react';
import { Icons } from '@/assets/icons/types';
import { Icon } from '../Icon';
import { colors } from '@/theme/colors';

const iconByRoute: Record<keyof BottomTabParamList, Icons> = {
  ParkingResume: 'parking',
  RegisterTicket: 'car-01',
  Cashier: 'currency-dollar-circle'
}

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { buildHref } = useLinkBuilder();

  return (
    <Styled.Wrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        return (
          <Styled.Pressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            focused={isFocused}
          >
            <Icon stroke={isFocused ? colors.primary : colors.grayMedium} name={iconByRoute[route.name as keyof BottomTabParamList]} />
            <Styled.Text focused={isFocused}>
              {label}
            </Styled.Text>
          </Styled.Pressable>
        );
      })}
    </Styled.Wrapper>
  );
}

export default TabBar;