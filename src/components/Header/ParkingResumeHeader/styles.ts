import { HeaderBackButton } from "@react-navigation/elements";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { ParkingResumeHeaderStyleProps } from "./types";

const STATUS_BAR_HEIGHT = Platform.OS === "android" ? StatusBar.currentHeight || 24 : 44;

export const Wrapper = styled.View<ParkingResumeHeaderStyleProps>`
    padding: ${({ safePaddingTop = STATUS_BAR_HEIGHT + 24 }) => safePaddingTop}px 16px 16px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 10;
    gap: 16px;
    border-bottom-color: ${({ theme }) => theme.colors.gray};
    border-bottom-width: 1px;
`;

export const InfoContainer = styled.View`
    align-items: center;
    flex-direction: row;
    gap: 16px;
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
    /* width: 80%; */
    height: 24px;
    font-family: ${({ theme }) => theme.fonts[500]};
    font-size: 16px;
    text-align: center;
`;
