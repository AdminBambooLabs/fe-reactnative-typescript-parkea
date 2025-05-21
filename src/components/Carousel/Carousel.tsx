import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, FlatListProps, View } from 'react-native';
import * as Styled from './styles';
import { CarouselProps } from './types';
import NavigationDots from '../NavigationDots/NavigationDots';

const { width } = Dimensions.get('window');

const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
};

function Carousel<T>(props: CarouselProps<T>) {
    const [step, setStep] = useState(0);


    const onViewableItemsChanged = useRef<FlatListProps<T>['onViewableItemsChanged']>(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setStep(viewableItems?.[0].index || 0);
        }
    }).current;

    return (
        <Styled.Wrapper>
            <FlatList
                {...props}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                renderItem={(renderItemProps) => {
                    return (
                        <View style={{ width: width - 32 }}>
                            {props?.renderItem?.(renderItemProps)}
                        </View>
                    );
                }}
            />
            {props.showDots ? <NavigationDots dots={props?.data?.length || 0} activeDot={step} /> : undefined}
        </Styled.Wrapper>
    );
}

export default Carousel;
