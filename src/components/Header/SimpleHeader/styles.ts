import { HeaderBackButton } from "@react-navigation/elements";
import styled from "styled-components/native";
import { SimpleHeaderStyleProps } from "./types";

export const HEADER_HEIGHT = 56;

export const Wrapper = styled.View<SimpleHeaderStyleProps>`
    padding-top: ${({ safePaddingTop = HEADER_HEIGHT }) => safePaddingTop}px;
    padding-bottom: 12px;   
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 10;
`;

export const Container = styled.View`
    padding: 0 16px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const BackButton = styled(HeaderBackButton)`
    position: absolute;
    bottom: 0;
    left: 16px;
    height: 24px;
    padding: 0;
    margin: 0;
`;

export const RightElementContainer = styled.View`
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    right: 16px;
    height: 24px;
    padding: 0;
    margin: 0;
`;

export const Title = styled.Text`
    height: 24px;
    font-family: ${({ theme }) => theme.fonts[500]};
    font-size: 16px;
    text-align: center;
`;
