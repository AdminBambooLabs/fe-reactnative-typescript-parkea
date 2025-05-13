import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { CodeCursor } from './styles';

export function BlinkingCursor() {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const blink = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]),
        );
        blink.start();

        return () => {
            blink.stop();
        };
    }, [opacity]);

    return (
        <CodeCursor style={{ opacity }} />
    );
}
